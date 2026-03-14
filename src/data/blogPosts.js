const blogPosts = [
    {
        slug: "debugging-at-3am",
        title: "Debugging at 3 AM: A Love Letter to My Imminent Divorce",
        date: "March 10, 2026",
        readTime: "4 min",
        excerpt: "Turns out the bug was me. Who knew? Spoiler: everyone except future-me.",
        content: [
            "It was 3:17 AM. The room was dark, my monitor was bright, and my confidence had already left the building.",
            "The error said: Cannot read properties of undefined (reading 'map'). Classic. Elegant. Humiliating.",
            "I stared at the code like it had personally disrespected my family. Then I did what every senior engineer, junior engineer, and fake-it-till-you-make-it engineer does: I added console.log everywhere like confetti.",
            "Turns out the API response was sometimes null. Not wrong enough to fail immediately. Just wrong enough to ruin my night slowly.",
            "The fix was one line. Optional chaining. That's it. One tiny ?. saved the app, my build, and maybe one friendship.",
            "The real lesson here is not about JavaScript. The real lesson is that bugs wait until 3 AM because they are cowards.",
            "Anyway, the issue is fixed, my sleep schedule is destroyed, and I now trust nothing that says 'works on my machine.'"
        ]
    },
    {
        slug: "tabs-vs-spaces-the-final-verdict",
        title: "Tabs vs Spaces: The War Is Over and We All Lost",
        date: "February 28, 2026",
        readTime: "3 min",
        excerpt: "I used tabs. My team used spaces. HR used therapy.",
        content: [
            "People say software engineering is about solving hard problems. That is false. It is mostly about pretending formatting arguments are not personal attacks.",
            "One day I pushed code with tabs. The team used spaces. Slack became a battlefield. Opinions were formed. Respect was lost.",
            "Nobody changed their mind, but everyone became more annoying.",
            "Then Prettier entered the chat like a tired parent breaking up a fight between children at a birthday party.",
            "Now the code is consistent, but the emotional damage remains.",
            "My official opinion is this: I do not care what you use as long as the repo stops looking like five different people wrote it during a power outage.",
            "In conclusion, the war is over. The winner is automated formatting. The loser is human dignity."
        ]
    },
    {
        slug: "console-log-in-2026",
        title: "Why I Still Use console.log in 2026 Like It's 2008",
        date: "January 15, 2026",
        readTime: "5 min",
        excerpt: "React DevTools? Nah. Print statements or GTFO. Fight me.",
        content: [
            "Yes, I know there are better tools. Yes, I know there are browser extensions, profilers, breakpoints, debuggers, timelines, inspectors, and seventeen Chrome tabs explaining them.",
            "And yet, in my darkest moments, I still return to console.log like a lost child returning home.",
            "There is something beautifully honest about printing a value and seeing the truth immediately. No ceremony. No setup. No pretending I am about to perform digital surgery.",
            "Just me, the code, and a desperate little log statement whispering: 'bro the value is undefined.'",
            "Is it elegant? No. Is it scalable? Also no. Does it work often enough that I keep doing it? Unfortunately yes.",
            "Real developers use advanced tools. Tired developers use console.log. Since I am usually tired, the math checks out.",
            "Judge me if you want. But when production is weird and time is short, I know exactly who will still be there for me: my ugly little print statement."
        ]
    },
    {
        slug: "delete-to-fix",
        title: "How I Fixed the Bug by Deleting the Code. You're Welcome.",
        date: "November 20, 2025",
        readTime: "2 min",
        excerpt: "Sometimes rm -rf is the only correct solution.",
        content: [
            "We love to romanticize complexity in software. Big architecture. Smart abstractions. Reusable systems. Beautiful layers of nonsense.",
            "But sometimes the bug is not hiding inside the code. Sometimes the bug is the code.",
            "I had one of those moments recently. I spent hours trying to patch a feature that had no business existing in the first place.",
            "Eventually I asked the most dangerous and useful question in engineering: what happens if I remove this entirely?",
            "Reader, everything improved.",
            "The bug vanished. The app got simpler. The codebase got cleaner. And suddenly the future looked slightly less cursed.",
            "There is a lesson here: not every problem deserves a clever fix. Sometimes the correct design pattern is deleting the bad idea and moving on with your life."
        ]
    }
];

export default blogPosts;