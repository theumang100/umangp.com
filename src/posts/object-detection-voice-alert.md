---
title: "Inside object_detection_with_voice_alert"
date: "2026-11-22"
repo: "https://github.com/theumang100/object_detection_with_voice_alert"
excerpt: "An Android app that runs a TensorFlow Lite detector on camera frames and also contains a text-to-speech helper."
---

This walkthrough is based on the public repo [object_detection_with_voice_alert](https://github.com/theumang100/object_detection_with_voice_alert): the README, Gradle files, `DetectorActivity.java`, `MainActivity.java`, `HomeActivity.java`, and `TTS.java`.

## The problem

The README describes an Android app that detects objects and gives a voice alert. The application id in `app/build.gradle` is `org.tensorflow.lite.examples.detection`. It is a Gradle Android project using TensorFlow Lite 2.2.0.

## What the README says about the model

The README says the model was trained on 10K+ images and achieved an accuracy of 87% (best 92%) on a live camera. Those figures are the README's claim. The application code path described below does not compute or print that accuracy.

## What the code loads

`DetectorActivity` and `MainActivity` both construct a `YoloV4Classifier` with:

- model file `yolov4-416-fp32.tflite`
- labels `file:///android_asset/coco.txt`
- input size 416
- `TF_OD_API_IS_QUANTIZED` set to false
- a minimum confidence of 0.5

`app/download_model.gradle` is applied from `app/build.gradle`. That script downloads `coco_ssd_mobilenet_v1_1.0_quant_2018_06_29.zip` from the TensorFlow model storage bucket and unpacks it into the assets directory when `assembleDebug` or `assembleRelease` runs. The detector classes still request the YOLOv4 filename above.

`aaptOptions` sets `noCompress` for `tflite`, and `compileSdkVersion` is 28 with `minSdkVersion` 21.

## Camera path

`DetectorActivity` extends `CameraActivity` and implements `OnImageAvailableListener`.

`onPreviewSizeChosen` builds the YOLOv4 classifier, allocates a 640 by 480 preview bitmap and a 416 by 416 crop, and sets up a `MultiBoxTracker` drawn on `R.id.tracking_overlay`.

`processImage` copies the RGB frame, draws it through `frameToCropTransform`, and calls `detector.recognizeImage` on a background thread. Recognitions whose location is non-null and whose confidence is at least 0.5 are mapped back onto the frame and passed to `tracker.trackResults`. The UI thread then shows frame size, crop size, and inference time in milliseconds. This method does not call `TTS`.

`HomeActivity` puts a `TTS` instance in a field, passes the application context into `giveContext`, and starts `DetectorActivity` when the button `R.id.ai` is clicked. `onPause` shuts the speech engine down. The home screen code shown does not call `speakText`.

## The speech class

`TTS` extends `BroadcastReceiver` and uses `android.speech.tts.TextToSpeech`.

`speakText` creates an engine, sets `Locale.US`, and calls `speak` with `QUEUE_FLUSH`. The same string is spoken again at the end of `onInit`. A local `LinkedList` is created inside `onInit`, so it does not remember phrases across calls.

`onReceive` reads SMS PDUs from the intent extra `pdus`, builds a string with the originating address and message body, and passes that string to `speakText`.

## Still image path

`MainActivity` loads `kite.jpg` from assets, runs `Utils.processBitmap` at size 416, and shows that bitmap. The detect button runs `detector.recognizeImage` on a background thread and `handleResult` draws red rectangles for recognitions at or above 0.5 confidence. The tracker update in that method is commented out.

## How to build it

The repo includes `gradlew`. `download_model.gradle` attaches `extractModels` to `assembleDebug` and `assembleRelease`, so a debug build also runs the model download:

```bash
./gradlew assembleDebug
```

Open the project in Android Studio if you want the usual device install flow. The Gradle file is the build definition that is actually in the repo.
