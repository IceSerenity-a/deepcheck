# deepcheck.

Educational deepfake-awareness website for **NeCCSus HackFest '26**.

## Open the website

Extract the whole folder, then open **index.html** in your browser. Keep
**app.js**, **styles.css** and the **media** folder beside it. No installation
or build step is required.

## Requested updates

- Green-and-black minimalist theme.
- Large navigation buttons on the left: Home, Scenario quiz, Spot a deepfake and About.
- A “What is a deepfake?” information panel replaces the magnifying glass.
- Scenario quiz: 24 questions in three categories — Visual clues, Audio & video and Source verification. Mixed rounds draw 10 questions; a single category uses its 8 questions.
- Separate media quiz using all 10 supplied samples, with Photos, GIF samples and mixed categories. Photo-only and GIF-only rounds contain 5 samples each.
- Practice mode and a timed mode with 30 seconds per question. The timer starts when a media sample loads and stops while an explanation is shown. A timeout counts as a missed answer.
- End-of-round scores and a separate review of missed questions, including your answer, the correct answer and a basic explanation. Timed-out questions are included.
- Best scores stay on the current device and are kept separately for each quiz, category and mode.
- X-ray, forensics, the Learn screen and the two unwanted home-page statistics are removed.
- The original introduction and About credits are retained.

## Important: the supplied GIF files

All five supplied files with `.gif` filenames contain **single-frame PNG data**,
not animated GIF data. They cannot animate because the original frames are
absent. No motion has been invented or simulated.

The site displays media directly with native `<img>` elements, preserving
animation and frame timing when genuine animated GIFs are available. To enable
animation, replace these files in **media/** with the original animated GIFs,
keeping the same filenames:

- `gif_fake1.gif`
- `gif_fake2.gif`
- `gif_real1.gif`
- `gif_real2.gif`
- `gif_real3.gif`

They will play automatically according to the loop setting in the originals.
The website does not convert GIFs into still images or draw them onto a canvas.

## Media answer key

The supplied filenames determine the exercise's real/fake answers. Their origins
have not been independently verified. Explanations describe basic things to
inspect and do not claim that a visible detail proves authenticity. A GIF has no
audio, so it cannot be used to assess lip-sync against speech.

## Files

- `index.html` — page structure, information and quiz screens
- `styles.css` — green-and-black theme and responsive layout
- `app.js` — quiz data, routing, timing, scoring and missed-answer review
- `media/` — original supplied media bytes, with normalized filenames

## AI tool disclosure

| Tool | How it was used |
| --- | --- |
| Claude (Anthropic) | Initial website code, quiz content and layout from the team's brief. |
| ChatGPT / Codex (OpenAI) | Requested theme, navigation and quiz updates; media inspection and code verification. |

The team should review the content and ensure members can explain the final code.

Programmers' Den · CCS Student Council.
