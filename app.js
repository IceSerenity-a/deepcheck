(function () {
  'use strict';

  var QUESTIONS = [
  {
    "q": "Where do face-swap deepfakes most often show visible flaws?",
    "o": [
      "At the hairline, jaw and ears where the face meets the rest of the head",
      "Only in the background",
      "In the middle of the forehead",
      "Flaws never show on a good fake"
    ],
    "a": 0,
    "why": "Blending is hardest at edges. Look for blur, flicker or a shifting outline around the hairline, jaw, ears and glasses.",
    "id": "scenario-1",
    "category": "visual"
  },
  {
    "q": "A shocking video of a public figure appears only on an unknown account. What is the best first step?",
    "o": [
      "Share it so others can judge",
      "Search for the original source and trusted coverage",
      "Trust it if it has many views",
      "Trust it if the faces look right"
    ],
    "a": 1,
    "why": "Provenance beats pixels. If reputable outlets or the person's official channels are silent, treat the clip as unverified.",
    "id": "scenario-2",
    "category": "verification"
  },
  {
    "q": "What is reverse image search most useful for?",
    "o": [
      "Making a photo sharper",
      "Finding earlier or original versions of an image",
      "Proving a photo is AI-generated",
      "Removing watermarks"
    ],
    "a": 1,
    "why": "It can show where an image first appeared and whether it was reused or altered. It helps with context, not proof of AI generation.",
    "id": "scenario-3",
    "category": "verification"
  },
  {
    "q": "A voice that sounds exactly like your boss calls and urgently asks for a money transfer. What should you do?",
    "o": [
      "Do it, because the voice is clearly theirs",
      "Hang up and call back on a number you already know",
      "Ask them to text the bank details",
      "Reply with the amount you can spare"
    ],
    "a": 1,
    "why": "Voice cloning can copy a voice from short public clips. Verify through a second, known channel before moving money.",
    "id": "scenario-4",
    "category": "audio"
  },
  {
    "q": "A detector tool reports '98% real' for a suspicious video. How should you treat that?",
    "o": [
      "As proof the video is genuine",
      "As one signal among several",
      "As proof the tool is broken",
      "As meaningless, so ignore all tools"
    ],
    "a": 1,
    "why": "Detectors give probabilities and can be fooled or be wrong on new techniques. Combine them with source checks and visual inspection.",
    "id": "scenario-5",
    "category": "verification"
  },
  {
    "q": "A portrait has shadows and reflections that seem inconsistent. What does this suggest?",
    "o": [
      "Nothing, since lighting is random",
      "A possible inconsistency worth investigating",
      "The photo is definitely real",
      "The camera was cheap"
    ],
    "a": 1,
    "why": "Inconsistent shadows or reflections can be clues to editing or generation. Multiple lights and camera effects can also create unusual lighting, so check the source before deciding.",
    "id": "scenario-6",
    "category": "visual"
  },
  {
    "q": "Which detail in AI-generated images has often been a giveaway?",
    "o": [
      "Garbled text and odd hands or teeth",
      "Perfectly round clouds",
      "Too many pixels",
      "Black and white colour"
    ],
    "a": 0,
    "why": "Text, fingers, teeth, jewellery and reflections are complex structures that models often get subtly wrong, though they keep improving.",
    "id": "scenario-7",
    "category": "visual"
  },
  {
    "q": "What do 'content credentials' (such as C2PA) provide?",
    "o": [
      "A guarantee that content is true",
      "A signed record of where media came from and how it was edited",
      "Automatic deepfake removal",
      "A copyright lawyer"
    ],
    "a": 1,
    "why": "They attach tamper-evident provenance data. Missing credentials prove nothing, but valid ones are a helpful trust signal.",
    "id": "scenario-8",
    "category": "verification"
  },
  {
    "q": "What is the 'liar's dividend'?",
    "o": [
      "Profit from selling fake videos",
      "Real evidence being dismissed by claiming 'it's a deepfake'",
      "A tax on AI tools",
      "Extra views a fake video earns"
    ],
    "a": 1,
    "why": "As fakes spread, people can cast doubt on genuine footage. This is why verification and provenance matter, not blanket cynicism.",
    "id": "scenario-9",
    "category": "verification"
  },
  {
    "q": "Which lip-sync clue can hint at a manipulated video?",
    "o": [
      "Lips not closing on sounds like 'b', 'p' and 'm'",
      "A person smiling",
      "Subtitles being present",
      "The video being short"
    ],
    "a": 0,
    "why": "These sounds normally require the lips to close. A mismatch can be a clue, but dubbing or playback delays can cause it too. Check the original clip.",
    "id": "scenario-10",
    "category": "audio"
  },
  {
    "q": "You get a dramatic clip in a group chat. What is the best habit?",
    "o": [
      "Forward it quickly to warn people",
      "Pause, verify, then share only if confirmed",
      "Delete the chat",
      "Reply 'fake' without checking"
    ],
    "a": 1,
    "why": "Speed is how misinformation wins. A short pause and one source check slows the spread.",
    "id": "scenario-11",
    "category": "verification"
  },
  {
    "q": "Why can a heavily compressed or low-resolution clip be harder to judge?",
    "o": [
      "Compression always proves a fake",
      "It can hide or mimic the artefacts you would look for",
      "Low resolution is always real",
      "It changes the audio language"
    ],
    "a": 1,
    "why": "Compression smears fine detail, so telltale flaws may vanish and innocent artefacts may look suspicious. Seek a higher-quality original.",
    "id": "scenario-12",
    "category": "visual"
  },
  {
    "q": "Which habit makes it easier for scammers to clone your voice?",
    "o": [
      "Posting lots of public videos with clear speech",
      "Using a long password",
      "Locking your phone",
      "Turning on 2-step login"
    ],
    "a": 0,
    "why": "Clear public audio can be used to imitate a voice. Verify unusual requests through a known contact method, even if the caller sounds familiar.",
    "id": "scenario-13",
    "category": "audio"
  },
  {
    "q": "Which is a sensible way to reduce the risk of your photos being misused?",
    "o": [
      "Post high-resolution portraits publicly",
      "Use privacy settings and limit public, high-resolution face photos",
      "Never use the internet",
      "Share your password with friends"
    ],
    "a": 1,
    "why": "Less public source material means less to copy. Privacy settings, watermarks and quick reporting of misuse all help.",
    "id": "scenario-14",
    "category": "verification"
  },
  {
    "id": "extra-1",
    "category": "verification",
    "q": "Does a filename that says real or fake verify an image's origin?",
    "o": [
      "No, it is only a label supplied by someone",
      "Yes, filenames cannot be changed",
      "Yes, if the file is a GIF",
      "Only when the image has a white background"
    ],
    "a": 0,
    "why": "A filename can be changed. Labels are useful as an answer key for this exercise, but independent verification requires a trustworthy source."
  },
  {
    "id": "extra-2",
    "category": "visual",
    "q": "A glasses frame seems to merge into a face in a portrait. What should you do?",
    "o": [
      "Treat it as a clue and check the source",
      "Declare the image fake immediately",
      "Ignore every other detail",
      "Trust it because glasses are visible"
    ],
    "a": 0,
    "why": "Broken or merged edges can be signs of generation or editing. Blur and compression can also distort small details."
  },
  {
    "id": "extra-3",
    "category": "visual",
    "q": "Does smooth skin prove a portrait is AI-generated?",
    "o": [
      "Yes, every smooth face is fake",
      "No, lighting, makeup or retouching can also smooth skin",
      "Yes, if the background is white",
      "Only if the person is smiling"
    ],
    "a": 1,
    "why": "Smooth skin is only a possible clue. Lighting, beauty filters and ordinary editing can produce a similar appearance."
  },
  {
    "id": "extra-4",
    "category": "visual",
    "q": "The text on a shirt looks garbled. What is the most careful conclusion?",
    "o": [
      "It is worth inspecting further",
      "The person does not exist",
      "Every photo from that account is fake",
      "The camera cannot photograph letters"
    ],
    "a": 0,
    "why": "Unclear or distorted text can be a clue, but blur, folds and low resolution can also make real text hard to read."
  },
  {
    "id": "extra-5",
    "category": "visual",
    "q": "Which comparison can help when inspecting a portrait?",
    "o": [
      "Whether jewellery, glasses and face edges stay consistent",
      "Whether you like the hairstyle",
      "Whether the person looks famous",
      "Whether the image uses bright colours"
    ],
    "a": 0,
    "why": "Small structures can reveal inconsistencies. They help guide inspection, but they cannot establish authenticity on their own."
  },
  {
    "id": "extra-6",
    "category": "audio",
    "q": "A person's face changes shape between frames. What is a sensible next step?",
    "o": [
      "Find a clearer original and inspect the sequence",
      "Share the clip immediately",
      "Trust the clip because it moves",
      "Judge it from the thumbnail alone"
    ],
    "a": 0,
    "why": "A shifting face outline may be a clue. Compression, motion blur and video effects can also create distortions."
  },
  {
    "id": "extra-7",
    "category": "audio",
    "q": "Does a GIF let you check whether speech matches the lips?",
    "o": [
      "Yes, it always contains speech",
      "No, a GIF has no audio",
      "Only if it is long",
      "Only if it has subtitles"
    ],
    "a": 1,
    "why": "A GIF can show facial movement, but it has no audio. You need an audio-enabled original to compare speech and lip movements."
  },
  {
    "id": "extra-8",
    "category": "audio",
    "q": "A familiar voice sounds natural in a recording. Does that prove who spoke?",
    "o": [
      "Yes, a voice cannot be copied",
      "No, verify the recording and its source",
      "Yes, if it is loud",
      "Only if it is more than ten seconds long"
    ],
    "a": 1,
    "why": "A convincing voice can be imitated or cloned. Sound alone does not confirm a speaker's identity."
  },
  {
    "id": "extra-9",
    "category": "audio",
    "q": "Why should you watch more than one frame of a suspicious video?",
    "o": [
      "Some inconsistencies appear only during movement",
      "One frame always proves the answer",
      "Videos cannot be edited",
      "The first frame is always fake"
    ],
    "a": 0,
    "why": "Movement can reveal changing edges, flicker or inconsistent facial details that a still frame may hide."
  },
  {
    "id": "extra-10",
    "category": "audio",
    "q": "A clip has an odd pause and an unnatural tone. What does this prove?",
    "o": [
      "It proves nothing by itself",
      "It proves the speaker is AI",
      "It proves the clip is real",
      "It proves the microphone is broken"
    ],
    "a": 0,
    "why": "Pauses and unusual tone can have many causes, including editing or recording conditions. Check other evidence too."
  }
];
  var MEDIA = [
  {
    "id": "photo-1",
    "category": "photo",
    "src": "media/fake_1.webp",
    "alt": "A man in a grey shirt against a white background.",
    "q": "Is this sample real or fake?",
    "o": [
      "Real",
      "Fake"
    ],
    "a": 1,
    "why": "Labelled fake in the supplied set. Look closely at the fine hair, skin texture and face outline. A generated portrait can still look convincing; a smooth face alone does not prove it is fake."
  },
  {
    "id": "photo-2",
    "category": "photo",
    "src": "media/fake2.webp",
    "alt": "A man wearing glasses and a dark suit.",
    "q": "Is this sample real or fake?",
    "o": [
      "Real",
      "Fake"
    ],
    "a": 1,
    "why": "Labelled fake in the supplied set. Glasses, ears and hairline are useful areas to inspect for inconsistent edges or detail. Formal clothing and a plain background do not make a portrait authentic."
  },
  {
    "id": "photo-3",
    "category": "photo",
    "src": "media/fake3.webp",
    "alt": "A bald man wearing a denim shirt.",
    "q": "Is this sample real or fake?",
    "o": [
      "Real",
      "Fake"
    ],
    "a": 1,
    "why": "Labelled fake in the supplied set. Inspect the ears, face outline and small skin details. There may be no obvious giveaway, so the source matters as well as appearance."
  },
  {
    "id": "photo-4",
    "category": "photo",
    "src": "media/real1.webp",
    "alt": "A man wearing a grey suit and white shirt.",
    "q": "Is this sample real or fake?",
    "o": [
      "Real",
      "Fake"
    ],
    "a": 0,
    "why": "Labelled real in the supplied set. A polished studio portrait is not automatically AI-generated. Check fine details and the original source rather than judging the clean background."
  },
  {
    "id": "photo-5",
    "category": "photo",
    "src": "media/real2.webp",
    "alt": "A woman wearing a green shirt against a white background.",
    "q": "Is this sample real or fake?",
    "o": [
      "Real",
      "Fake"
    ],
    "a": 0,
    "why": "Labelled real in the supplied set. Ordinary facial texture and small asymmetries can appear in real photos. They are helpful observations, but appearance alone cannot verify a photo."
  },
  {
    "id": "gif-1",
    "category": "gif",
    "src": "media/gif_fake1.gif",
    "alt": "A man wearing glasses and a light shirt indoors.",
    "q": "Is this sample real or fake?",
    "o": [
      "Real",
      "Fake"
    ],
    "a": 1,
    "why": "Labelled fake in the supplied set. For an animated original, watch whether the face outline and glasses remain consistent during movement. A single frame cannot reveal flickering over time."
  },
  {
    "id": "gif-2",
    "category": "gif",
    "src": "media/gif_fake2.gif",
    "alt": "A woman wearing glasses and a grey jacket outdoors.",
    "q": "Is this sample real or fake?",
    "o": [
      "Real",
      "Fake"
    ],
    "a": 1,
    "why": "Labelled fake in the supplied set. In an animated original, inspect the cheeks, glasses and mouth across several frames for changing edges. One still frame is not enough to assess motion."
  },
  {
    "id": "gif-3",
    "category": "gif",
    "src": "media/gif_real1.gif",
    "alt": "A man wearing a white shirt in front of a concrete wall.",
    "q": "Is this sample real or fake?",
    "o": [
      "Real",
      "Fake"
    ],
    "a": 0,
    "why": "Labelled real in the supplied set. A face in an ordinary setting may be genuine even when the image is soft or compressed. In the animated original, compare facial movement across frames."
  },
  {
    "id": "gif-4",
    "category": "gif",
    "src": "media/gif_real2.gif",
    "alt": "A man with short dark hair in front of a plain wall.",
    "q": "Is this sample real or fake?",
    "o": [
      "Real",
      "Fake"
    ],
    "a": 0,
    "why": "Labelled real in the supplied set. Low resolution does not make a recording fake. Watch an animated original for consistent facial movement and check where it came from."
  },
  {
    "id": "gif-5",
    "category": "gif",
    "src": "media/gif_real3.gif",
    "alt": "A bald man with a beard wearing a checked shirt.",
    "q": "Is this sample real or fake?",
    "o": [
      "Real",
      "Fake"
    ],
    "a": 0,
    "why": "Labelled real in the supplied set. Natural variation in skin and facial hair can occur in authentic media. For motion checks, use the animated original rather than relying on one frame."
  }
];
  var LABELS = { all: 'All categories', visual: 'Visual clues', audio: 'Audio & video', verification: 'Source verification', photo: 'Photo', gif: 'GIF sample' };
  var controllers = {};

  function $(id) { return document.getElementById(id); }
  function shuffle(items) {
    var a = items.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = a[i]; a[i] = a[j]; a[j] = temp;
    }
    return a;
  }
  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) { return null; }
  }
  function node(tag, className, text) {
    var el = document.createElement(tag);
    if (className) el.className = className;
    if (text !== undefined) el.textContent = text;
    return el;
  }

  function createQuiz(prefix, bank) {
    var questions = [], answers = [], index = 0, score = 0;
    var locked = true, timed = false, timerId = null, deadline = 0, generation = 0;
    var category = $(prefix + 'Category');
    var modeInputs = document.querySelectorAll('input[name="' + prefix + 'Mode"]');
    function el(suffix) { return $(prefix + suffix); }
    function mode() {
      return Array.from(modeInputs).some(function (input) { return input.checked && input.value === 'timed'; }) ? 'timed' : 'practice';
    }
    function pool() {
      return bank.filter(function (item) { return category.value === 'all' || item.category === category.value; });
    }
    function bestKey() { return 'deepcheck-v2-' + prefix + '-' + category.value + '-' + mode(); }
    function updateSetup() {
      var count = Math.min(10, pool().length);
      var previous = Number(store(bestKey()));
      var saved = store(bestKey());
      el('Best').textContent = 'Best score: ' + (saved !== null && Number.isFinite(previous) ? previous + ' / ' + count : '–');
      el('RoundInfo').textContent = count + ' questions · ' + (mode() === 'timed' ? '30 seconds per question' : 'No time limit') + ' · Review missed answers at the end.';
    }
    function screen(name) {
      ['Intro', 'Play', 'End', 'Review'].forEach(function (suffix) { el(suffix).hidden = suffix !== name; });
    }
    function stopTimer() {
      if (timerId !== null) clearInterval(timerId);
      timerId = null;
    }
    function startTimer() {
      if (!timed || locked) return;
      deadline = performance.now() + 30000;
      el('Timer').hidden = false;
      el('Timer').classList.remove('urgent');
      function tick() {
        var remaining = Math.max(0, Math.ceil((deadline - performance.now()) / 1000));
        el('Timer').textContent = remaining + 's left';
        el('Timer').classList.toggle('urgent', remaining <= 10);
        if (remaining === 0) answer(null);
      }
      tick();
      timerId = setInterval(tick, 200);
    }
    function progress(value) {
      var bar = el('Bar');
      bar.setAttribute('aria-valuemax', questions.length);
      bar.setAttribute('aria-valuenow', value);
      bar.firstElementChild.style.width = value / questions.length * 100 + '%';
    }
    function render() {
      stopTimer(); generation++;
      var token = generation;
      var item = questions[index];
      locked = false;
      el('Count').textContent = 'Question ' + (index + 1) + ' / ' + questions.length;
      el('QuestionCategory').textContent = LABELS[item.category];
      el('Q').textContent = item.q;
      el('Why').hidden = true;
      el('Next').hidden = true;
      el('Next').firstChild.nodeValue = index === questions.length - 1 ? 'See results ' : 'Next question ';
      el('Timer').hidden = !timed;
      el('Timer').classList.remove('urgent');
      el('Timer').textContent = '30s left';
      el('Media').hidden = !item.src;
      el('MediaError').hidden = true;
      progress(index);
      var options = el('Opts');
      options.replaceChildren();
      var choices = item.src ? item.o.map(function (text, i) { return { text: text, index: i }; }) : shuffle(item.o.map(function (text, i) { return { text: text, index: i }; }));
      choices.forEach(function (choice, i) {
        var button = node('button', 'opt');
        button.type = 'button';
        button.dataset.answer = String(choice.index);
        button.appendChild(node('b', '', item.src ? (i === 0 ? '01' : '02') : 'ABCD'[i]));
        button.appendChild(node('span', '', choice.text));
        button.addEventListener('click', function () { answer(choice.index); });
        options.appendChild(button);
      });
      options.classList.toggle('binary', !!item.src);
      var img = el('Image');
      img.onload = null; img.onerror = null;
      if (item.src) {
        // Native <img> preserves all frames and original playback timing in genuine animated GIFs.
        // Never draw quiz media to a canvas or replace it with a thumbnail.
        Array.from(options.children).forEach(function (b) { b.disabled = true; });
        el('Timer').hidden = true;
        img.alt = item.alt;
        el('MediaCaption').textContent = 'Sample ' + (index + 1) + ' · ' + LABELS[item.category] + (item.category === 'gif' ? ' · Inspect any visible movement before answering.' : ' · Look closely at the details.');
        var ready = false;
        function loaded() {
          if (ready || token !== generation) return;
          ready = true;
          Array.from(options.children).forEach(function (b) { b.disabled = false; });
          startTimer();
        }
        img.onload = loaded;
        img.onerror = function () {
          if (token !== generation) return;
          el('MediaError').hidden = false;
          el('MediaCaption').textContent = 'Sample unavailable. Return to settings and retry.';
          stopTimer();
        };
        img.src = item.src;
        if (img.complete && img.naturalWidth > 0) loaded();
      } else {
        img.removeAttribute('src');
        startTimer();
      }
      el('Q').focus({ preventScroll: true });
    }
    function answer(choice) {
      if (locked) return;
      // Also enforce the deadline when a background tab delays timer callbacks.
      if (timed && timerId !== null && performance.now() >= deadline) choice = null;
      locked = true;
      stopTimer();
      var item = questions[index], correct = choice === item.a;
      if (correct) score++;
      answers.push({ item: item, selected: choice, correct: correct, number: index + 1 });
      Array.from(el('Opts').children).forEach(function (button) {
        button.disabled = true;
        var value = Number(button.dataset.answer);
        if (value === item.a) button.classList.add('ok');
        else if (value === choice) button.classList.add('bad');
        else button.classList.add('dim');
      });
      var result = choice === null ? "Time's up. " : correct ? 'Correct. ' : 'Not quite. ';
      el('Why').textContent = result + 'Answer: ' + item.o[item.a] + '. ' + item.why;
      el('Why').hidden = false;
      el('Next').hidden = false;
      progress(index + 1);
      el('Next').focus({ preventScroll: true });
    }
    function finish() {
      locked = true; generation++; stopTimer(); screen('End');
      el('Score').textContent = score;
      el('Total').textContent = '/' + questions.length;
      var ratio = score / questions.length;
      el('Rank').textContent = ratio === 1 ? 'Sharp eye.' : ratio >= 0.7 ? 'Good instincts.' : 'Keep looking closer.';
      var missed = answers.filter(function (a) { return !a.correct; }).length;
      el('Msg').textContent = missed ? missed + ' missed question' + (missed === 1 ? '' : 's') + '. Review the answers and explanations to see what you can learn.' : 'You answered every question correctly. Try another category or the timed mode.';
      el('ReviewBtn').firstChild.nodeValue = missed ? 'Review missed questions (' + missed + ') ' : 'Review this round ';
      var previous = store(bestKey());
      if (previous === null || score > Number(previous)) store(bestKey(), String(score));
      updateSetup();
      el('Rank').focus({ preventScroll: true });
    }
    function start() {
      stopTimer();
      questions = shuffle(pool()).slice(0, 10);
      index = 0; score = 0; answers = []; timed = mode() === 'timed';
      screen('Play'); render();
    }
    function reset() {
      generation++; locked = true; stopTimer();
      el('Image').onload = null; el('Image').onerror = null;
      screen('Intro'); updateSetup();
    }
    function review() {
      screen('Review');
      var missed = answers.filter(function (a) { return !a.correct; });
      el('ReviewTitle').textContent = missed.length ? 'Your missed questions (' + missed.length + ')' : 'Nothing missed.';
      var list = el('ReviewList'); list.replaceChildren();
      if (!missed.length) list.appendChild(node('p', 'card', 'You got every answer right. Play again or try a different category.'));
      missed.forEach(function (entry) {
        var item = entry.item;
        var card = node('article', 'card review-card');
        card.appendChild(node('p', 'mono', 'Question ' + entry.number + ' · ' + LABELS[item.category]));
        card.appendChild(node('h3', '', item.q));
        if (item.src) {
          var image = node('img', 'review-image'); image.src = item.src; image.alt = item.alt;
          card.appendChild(image);
        }
        card.appendChild(node('p', 'your-answer', 'Your answer: ' + (entry.selected === null ? "Time's up — no answer" : item.o[entry.selected])));
        card.appendChild(node('p', 'correct-answer', 'Correct answer: ' + item.o[item.a]));
        card.appendChild(node('p', 'review-why', item.why));
        list.appendChild(card);
      });
      el('ReviewTitle').focus({ preventScroll: true });
    }
    el('Start').addEventListener('click', start);
    el('Again').addEventListener('click', start);
    el('Next').addEventListener('click', function () { index++; if (index < questions.length) render(); else finish(); });
    el('ReviewBtn').addEventListener('click', review);
    el('BackResults').addEventListener('click', function () { screen('End'); el('Rank').focus({ preventScroll: true }); });
    ['Exit', 'Settings'].forEach(function (suffix) { el(suffix).addEventListener('click', function () { reset(); category.focus(); }); });
    category.addEventListener('change', updateSetup);
    modeInputs.forEach(function (input) { input.addEventListener('change', updateSetup); });
    updateSetup();
    return { leave: reset };
  }

  controllers.quiz = createQuiz('quiz', QUESTIONS);
  controllers.spot = createQuiz('spot', MEDIA);

  var current = null;
  var valid = ['home', 'quiz', 'spot', 'about'];
  function route() {
    var name = location.hash.replace('#', '') || 'home';
    if (valid.indexOf(name) === -1) name = 'home';
    if (current !== name && controllers[current]) controllers[current].leave();
    document.querySelectorAll('.view').forEach(function (view) { view.hidden = view.dataset.view !== name; });
    document.querySelectorAll('[data-nav]').forEach(function (link) {
      if (link.dataset.nav === name) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    var titles = { home: 'Spot the deepfake', quiz: 'Scenario quiz', spot: 'Can you spot a deepfake?', about: 'About' };
    document.title = 'deepcheck. | ' + titles[name];
    if (current !== null && current !== name) $('main').focus({ preventScroll: true });
    current = name;
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);
  route();

  /* ---------- intro ---------- */
  (function () {
    var intro = $("intro");
    if (!intro) return;
    var out = $("introText"), enterBtn = $("introEnter"), skipBtn = $("introSkip"), bar = $("introBar");
    var shell = [document.querySelector(".top"), document.querySelector(".side-nav"), $("main"), document.querySelector(".foot")];
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var LINES = [
      { segs: [["The internet ", 0], ["can't be trusted", 1], [" anymore.", 0]] },
      { segs: [["Artificial intelligence", 1], [" now writes, speaks and paints in every corner of it.", 0]] },
      { segs: [["A face can be ", 0], ["borrowed", 1], [". A voice can be ", 0], ["cloned", 1], [". A video can be ", 0], ["invented", 1], [".", 0]] },
      { cls: "big", segs: [["So take a ", 0], ["closer look.", 1]] }
    ];
    var timers = [], active = false;

    function later(fn, ms) { timers.push(setTimeout(fn, ms)); }
    function clear() { timers.forEach(clearTimeout); timers = []; }
    function lock(on) {
      shell.forEach(function (n) { if (!n) return; if (on) n.setAttribute("inert", ""); else n.removeAttribute("inert"); });
      document.body.style.overflow = on ? "hidden" : "";
    }
    function mark() { try { sessionStorage.setItem("deepcheck-intro", "1"); } catch (e) {} }
    function seen() { try { return sessionStorage.getItem("deepcheck-intro") === "1"; } catch (e) { return false; } }

    function addLine(l, instant, done) {
      var prev = out.lastElementChild; if (prev) prev.classList.add("old");
      var div = document.createElement("div");
      div.className = "line" + (l.cls ? " " + l.cls : "");
      var parts = l.segs.map(function (s) {
        var sp = document.createElement("span");
        if (s[1]) sp.className = "g";
        div.appendChild(sp);
        return { sp: sp, txt: s[0] };
      });
      out.appendChild(div);
      if (instant) { parts.forEach(function (p) { p.sp.textContent = p.txt; }); done && done(); return; }
      var caret = document.createElement("span"); caret.className = "caret"; div.appendChild(caret);
      var pi = 0, ci = 0;
      (function tick() {
        if (pi >= parts.length) { caret.remove(); done && later(done, 650); return; }
        var p = parts[pi];
        if (ci < p.txt.length) { p.sp.textContent += p.txt.charAt(ci++); later(tick, 22); }
        else { pi++; ci = 0; tick(); }
      })();
    }
    function finish() {
      bar.style.width = "100%";
      enterBtn.hidden = false;
      enterBtn.focus();
    }
    function play(i) {
      if (!active) return;
      bar.style.width = (i / LINES.length * 100) + "%";
      if (i >= LINES.length) { finish(); return; }
      addLine(LINES[i], false, function () { play(i + 1); });
    }
    function open() {
      clear(); active = true;
      out.innerHTML = ""; bar.style.width = "0"; enterBtn.hidden = true;
      intro.hidden = false; intro.classList.remove("out");
      lock(true); skipBtn.focus();
      if (reduce) {
        LINES.forEach(function (l) { addLine(l, true); });
        finish();
      } else later(function () { play(0); }, 500);
    }
    function close() {
      if (!active) return;
      active = false; clear(); mark();
      intro.classList.add("out"); lock(false);
      setTimeout(function () { intro.hidden = true; var m = $("main"); if (m) m.focus({ preventScroll: true }); }, reduce ? 0 : 600);
    }

    enterBtn.addEventListener("click", close);
    skipBtn.addEventListener("click", close);
    document.addEventListener("keydown", function (e) { if (active && e.key === "Escape") close(); });
    var replay = $("replayIntro");
    if (replay) replay.addEventListener("click", function () { if (controllers[current]) controllers[current].leave(); window.scrollTo(0, 0); open(); });

    if (seen()) intro.hidden = true; else open();
  })();

})();
