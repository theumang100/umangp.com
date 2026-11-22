---
title: "How chatgpt_clone is wired"
date: "2026-11-22"
repo: "https://github.com/theumang100/chatgpt_clone"
excerpt: "A React screen posts a prompt to a FastAPI service, which calls the OpenAI completions API and returns the body as text."
---

This walkthrough is based on the public repo [chatgpt_clone](https://github.com/theumang100/chatgpt_clone): the README, `backend/main.py`, `stream-app/src/App.js`, and `.github/workflows/deploy.yml`. It does not add results that those files do not show.

## The problem

The project is a small chat-style interface. A React app asks a backend for text, and the backend asks OpenAI. The README describes `stream-app` as the frontend that takes user input and shows the prompt generated through FastAPI.

## Architecture

Two processes:

1. `backend/main.py` is a FastAPI app. `POST /generate` reads a JSON `prompt` and sends it to OpenAI.
2. `stream-app` is a Create React App. `App.js` calls `http://localhost:8000/generate` and writes the response into a `<pre>`.

The backend dependencies in `requirements.txt` are `fastapi`, `httpx`, and `uvicorn`. The frontend is the separate `stream-app` package.

## What the backend actually does

`POST /generate` is the only route in `main.py`.

- CORS allows `http://localhost` and `http://localhost:3000`.
- The handler reads `prompt` from the JSON body.
- It POSTs to `https://api.openai.com/v1/engines/davinci-codex/completions` with `max_tokens` set to 100.
- The request does not set a streaming flag on the OpenAI call. After that response comes back, the handler wraps `response.aiter_text()` in a `StreamingResponse` with media type `text/plain`.
- `uvicorn.run` in the `if __name__` block listens on `0.0.0.0:8000`.

The OpenAI bearer token is written directly in `main.py`. The README notes that the key was uploaded. This walkthrough does not repeat the key. It should live in an environment variable, not in the repository.

## What the React app actually does

`App.js` keeps one piece of state, `response`. A button labeled Generate calls `handleGenerate`.

That function always sends `{ prompt: "Hello" }`. There is no text field in this component, so the screen does not pass whatever the visitor typed. It reads the response body with `getReader()`, appends decoded chunks, and stores the accumulated string in state. The string is rendered in a `<pre>`. Errors are logged with `console.error`.

## Deploy workflow

`.github/workflows/deploy.yml` runs on a push to `main`. It installs the backend requirements, zips `backend/`, runs `npm install` and `npm run build` in `stream-app`, updates the Lambda function named `r2d2_prototype` in `us-east-1`, and syncs `stream-app/build/` to the S3 bucket `r2d2-frontend`. AWS credentials come from repository secrets.

The README also describes a Super Linter workflow. The workflow file present in `.github/workflows` when this note was written is `deploy.yml`.

## How to run it

From the README, in `backend`:

```bash
pip install -r requirements.txt
uvicorn main:app --reload
```

In another terminal, in `stream-app`:

```bash
npm install
npm start
```

The React dev server defaults to port 3000, which matches the CORS list, and `App.js` calls port 8000, which matches the uvicorn block in `main.py`.
