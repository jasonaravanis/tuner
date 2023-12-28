# Chromatic Tuner

> A chromatic tuner that can identify the frequency of a sound, calculate the closest note, and show visual feedback using an oscilloscope.

<img src="https://github.com/jasonaravanis/tuner/blob/d47680646f2170863a5afaf16ccbacbe45ff9139/assets/readme-demo.gif" alt="A screen showing a sound wave, a frequency, and the closest musical note" width="300">

## How it works

Using the AudioContext API, we can get sound data from the user's microphone. The form of this data is a stream of floats that range from negative to positive in a repeating pattern. This data is loaded into a buffer, where we can use (autocorrelation)[https://en.wikipedia.org/wiki/Autocorrelation] to figure out how often the pattern repeats each second (i.e, the frequency of the pitch). After that it's pretty simple to identify the closest musical note to that pitch (in MIDI terms), and the gap between the pitch and the closest note.

## Tech stack

### Astro 🚀

I prefer using React, but this project wasn't complex enough to necessitate using a full-blown framework like Nextjs. Astro was a great alternative, as it gave the ability to use react with minimal overhead. If I choose to expand this project in the future Astro will be able to scale and introduce more capabilities as required.

### Vanilla Extract 🧁

At first I wanted to use Tailwind for this project, but eventually I swapped to Vanilla Extract. While Tailwind does have some utility for mocking together things quickly, I found that I didn't enjoy polluting my JSX code with jumbles of tailwind utility classes. I find the CSS-in-JS approach of Vanilla Extract to be a lot easier to keep organised and to navigate when trying to track down a specific style rule 🔎

### TypeScript 👨‍💻

Nothing more to say about TS other than it's great ❤️

### Jest 🤡

There was quite a bit of complicated logic associated with converting doing the sound -> frequency -> note conversion. Having unit tests to make sure no bugs were slipping in was 👌
