<!-- hide -->
<div align="center">

# Learn React.js Tutorial and Interactive Exercises

[![Certified by 4Geeks](https://img.shields.io/badge/4Geeks-certified-2563eb)](https://4geeks.com/en/interactive-exercise/react-js-tutorial-exercises)
[![Autograded with LearnPack](https://img.shields.io/badge/LearnPack-autograded-2563eb)](https://4geeks.com/docs/learnpack)
[![Open in Codespaces](https://img.shields.io/badge/Open_in-Codespaces-fb5a1f)](https://codespaces.new/?repo=4GeeksAcademy/react-tutorial-exercises)

</div>
<!-- endhide -->

This interactive React.js tutorial contains 21 exercises and takes around 8 hours to complete. You start by rendering a single `<span>` with `ReactDOM.render`, and you finish building components with props, conditional rendering, CSS-in-JS styles and click events. 20 of the exercises are graded automatically by Jest, and each of the 21 comes with its own video walkthrough.

<!-- hide -->
## 📋 About this tutorial

- **Difficulty**: Easy — no previous React experience required
- **Estimated duration**: 8 hours (about 20 minutes per exercise)
- **Exercises**: 21 folders, 20 of them with automatic tests
- **Technologies**: JavaScript, React.js (JSX, prop-types, Bootstrap 5 markup)
- **Grading**: Incremental, powered by Jest 29.7.0 and `react-test-renderer`
- **Intro video**: [English](https://www.youtube.com/watch?v=yRjmuLAH25s) · [Español](https://www.youtube.com/watch?v=L21NvjxiVmc)
- **Languages**: [English](https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/HEAD/README.md) · [Español](https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/HEAD/README.es.md)
<!-- endhide -->

## 🎯 What will you learn?

- How to render HTML into the DOM with `ReactDOM.render(what, where)`, treating it as the React replacement for `innerHTML`.
- How to [write JSX](https://react.dev/learn/writing-markup-with-jsx): mixing HTML and JavaScript in one file, injecting variables with curly brackets `{ }` and reading properties from objects.
- How to turn arrays of data into arrays of HTML with `.map()`, and why React asks you for a [`key`](https://react.dev/learn/rendering-lists) on every item.
- How a plain function that returns HTML becomes a component you can call as a custom tag: `<BootstrapCard />` instead of `BootstrapCard()`.
- How to [pass data with props](https://react.dev/learn/passing-props-to-a-component) and declare their types with `propTypes`, so the same component works for Bob Dylan and Paul McCartney.
- How to do [conditional rendering](https://react.dev/learn/conditional-rendering): returning `null` to hide a component, or mapping a `color` prop to different Bootstrap classes.
- How to style components with CSS-in-JS objects, where properties are camelCase (`fontSize`, `borderRadius`) and values are strings.
- How to listen to user events by attaching `onClick` to a JSX tag.

## 👀 What will you build?

The 21 exercises are numbered so the difficulty rises in small steps. This is the real progression inside the `exercises/` folder:

- **`00` Welcome** — a short read-only intro that explains the four pillars of the course: JSX, components, dynamic HTML and JS modules.
- **`01` to `01.4` — JSX basics (5 exercises)**: render `James is 12 years old`, inject a `name` variable, build an `<h1>/<h2>` block from a customer object, assemble a Bootstrap card for Bob Dylan, and produce a `<ul class="nav">` from an array of links.
- **`02` to `02.2` — Arrays and `.map()` (3 exercises)**: map `['Horse', 'Turtle', 'Elephant', 'Monkey']` into `<li>` elements, do the same starting from an array of objects, and render a Bootstrap list-group with six planets (Mars, Venus, Jupiter, Earth, Saturn and Neptune).
- **`03` to `03.5` — Components and props (6 exercises)**: render with functions, create your first component, rebuild the Bootstrap card as `<BootstrapCard />`, make it reusable through five props, then build a `<Hero />` and an `<Alert />` component from scratch.
- **`04` to `04.2` — Conditional rendering (3 exercises)**: show or hide the alert with a `show` boolean, switch between red and yellow using a `colorClasses` lookup object, and add green as a third option.
- **`05` and `05.1` — Styles (2 exercises)**: apply a CSS-in-JS object with a 16px font, black background and 1px yellow border, then restyle a badge with a `border-radius` of 50%.
- **`06` — Events (1 exercise)**: wire the click handler function to the `onClick` property of a button and watch the console.

Two of the results you are expected to reproduce, taken straight from the exercise instructions:

![Bootstrap hero unit rendered by the Hero component in exercise 03.4, showing a large grey panel with the headline Welcome to React, the subtitle React is the most popular rendering library in the world, and a blue button labelled Go to the officia website](https://raw.githubusercontent.com/4GeeksAcademy/react-tutorial-exercises/master/.learn/assets/03.4-1.png)

![Three stacked Bootstrap alerts produced by the Alert component in exercise 04.2: a red alert reading OMG! Something really bad has happended!, a yellow alert reading Well, it is not that bad after all!, and a green alert reading I am supposed to be green](https://raw.githubusercontent.com/4GeeksAcademy/react-tutorial-exercises/master/.learn/assets/04.2-1.png)

## 🎓 What do you need before starting?

- **HTML**: tags, attributes and nesting. Several exercises ask you to reproduce Bootstrap 5 markup such as [cards](https://getbootstrap.com/docs/5.0/components/card/), [alerts](https://getbootstrap.com/docs/5.0/components/alerts/) and [list groups](https://getbootstrap.com/docs/5.0/components/list-group/).
- **JavaScript fundamentals**: variables, objects, arrays, arrow functions and the dot operator. From exercise `02` onwards you use `.map()` in almost every file.
- **React**: nothing. The tutorial is rated Easy and starts from the very first `ReactDOM.render` call.
- **Tooling**: nothing at all if you open the repository in a cloud editor. For a local run you need [Node.js](https://nodejs.org) and the LearnPack CLI.

## ✅ How does the automatic grading work?

Grading is set to *incremental*: each exercise is validated on its own, so you always know exactly where you stand. Every coding exercise folder holds the same three files plus the instructions:

- **`app.jsx`** — the only file you are meant to edit.
- **`tests.js`** — the Jest test suite for that exercise. 20 of the 21 folders include one; `00-welcome` is a read-only intro and has none.
- **`solution.hide.jsx`** — a working solution kept out of your way while you work.
- **`README.md` and `README.es.md`** — the instructions in both languages, each with a YouTube walkthrough.

The tests run on Jest with `react-test-renderer`. They mock `ReactDOM.render`, capture what you passed to it and compare the rendered tree against an inline snapshot, so both the structure and the text have to match. That is also why some tests check that `ReactDOM.render` was called exactly once.

> 💡 The grading is deliberately strict about the expected output. Treat a red test as a hint about what is still different, not as a verdict on your code, and use the video walkthrough when you get stuck.

## 💡 What mistakes should you avoid?

- **Writing `class` instead of `className`**. In JSX the attribute is `className`; this trips up almost everyone in the card and list-group exercises.
- **Forgetting the `key` prop** when you build lists with `.map()`. React will warn you in the console. The second parameter of the mapping function (the index) is enough here.
- **Calling a component with parentheses**. Once `PrintHello` is a component you use `<PrintHello />`, not `PrintHello()`.
- **Losing the curly brackets**. `<span>James is age years old</span>` prints the literal word; `{ age }` prints the value.
- **Lowercase component names**. Components are capitalised on purpose — JSX treats a lowercase tag as a plain HTML element.
- **Using CSS syntax inside a style object**. It is `{ fontSize: "16px" }`, not `{ "font-size": 16 }`: camelCase keys and string values.
- **Skipping `propTypes`**. Exercises `03.3` onwards expect you to declare the props you receive, for example `Alert.propTypes = { text: PropTypes.string }`.
- **Rendering the same component twice**. Add one `ReactDOM.render` call per exercise; the tests count them.

## ❓ Frequently asked questions

### How long does it take to complete this React tutorial?

The package is estimated at 8 hours. Spread over 21 exercises that is roughly 20 minutes each, and the early JSX exercises are much shorter than that. Because grading is incremental you can stop after any exercise and pick it up later.

### Do I need to know JavaScript before starting React?

Yes, the basics. You should be comfortable with variables, objects, arrays, arrow functions and especially `.map()`, which appears from exercise `02` onwards. You do not need classes, promises or async/await for any of the 21 exercises.

### Does this tutorial cover React Hooks and state?

No. The 21 exercises cover rendering, JSX, lists and keys, function components, props with prop-types, conditional rendering, CSS-in-JS styles and event listeners. There is no `useState`, `useEffect` or any other hook in the package, so plan a separate tutorial for state management once you finish.

### Is this tutorial still useful with modern React?

The concepts are: JSX, `.map()` with keys, function components, props and conditional rendering all work exactly the same in current React. The one thing that has moved on is the entry point — these exercises use `ReactDOM.render(what, where)`, while React 18 and later mount apps with [`createRoot`](https://react.dev/reference/react-dom/client/createRoot). Everything you write inside the components carries over unchanged.

### Are the solutions and video explanations included?

Yes. All 21 exercises ship with a YouTube walkthrough linked from their own README, and the 20 coding exercises each include a `solution.hide.jsx` file with a working answer, so you can compare approaches after solving them yourself.

### Is it free, and can I republish the exercises?

Accessing and running the tutorial costs nothing, and the code you write while solving it is yours. Redistributing the material is a different matter: [LICENSE.md](https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/HEAD/LICENSE.md) reserves all intellectual property rights and explicitly forbids republishing, selling, sub-licensing, duplicating or redistributing the content, so this is not an open source package.

<!-- hide -->
## 📚 Related interactive tutorials

- [Learn the basics of HTML Interactively](https://4geeks.com/en/interactive-exercise/html-exercises)
- [Javascript Beginner Tutorial (interactive)](https://4geeks.com/en/interactive-exercise/javascript-beginner-exercises)

## 🚀 How to start

The fastest option is opening the repository in a cloud editor, with everything pre-installed:

1. Click [Open in Codespaces](https://codespaces.new/?repo=4GeeksAcademy/react-tutorial-exercises) (recommended) or [Open in Gitpod](https://gitpod.io#https://github.com/4GeeksAcademy/react-tutorial-exercises.git).
2. Wait for the container to finish installing LearnPack and its React plugin.
3. The exercises should open automatically. If they don't, run `learnpack start` in the terminal.

## 💻 Local installation

1. Install [Node.js](https://nodejs.org). The dev container for this repository uses Node 22.
2. Clone this repository or download it as a zip and open the project root, where the `exercises` folder lives.
3. Install the CLI and the React plugin, then start the tutorial:

```bash
npm i jest@29.7.0 jest-environment-jsdom@29.7.0 -g
npm i @learnpack/learnpack -g
learnpack plugins:install @learnpack/react
learnpack start
```

More detail in the [LearnPack quickstart for learners](https://4geeks.com/docs/learnpack/quickstart-for-learners#how-to-download-and-run-learnpack-tutorial-in-your-local-computer).

## 📝 How the exercises are organized

Every exercise lives in its own folder inside [`exercises/`](https://github.com/4GeeksAcademy/react-tutorial-exercises/tree/HEAD/exercises), named with its number and topic, for example `03.4-hero-component`. Inside you will find `app.jsx` (your working file), `README.md` and `README.es.md` (instructions plus the video), `tests.js` (the grader, no need to open it) and `solution.hide.jsx`. Shared images live in `.learn/assets`.

## 🤝 Contributors

Thanks to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

1. [Alejandro Sánchez (alesanchezr)](https://github.com/alesanchezr) — coder 💻, idea 🤔, build-tests ⚠️, pull-request review 👀, build-tutorial ✅, documentation 📖
2. [Paolo Lucano (plucodev)](https://github.com/plucodev) — bug reports 🐛, coder 💻, translation 🌎
3. [Marco Gómez (marcogonzalo)](https://github.com/marcogonzalo) — bug reports 🐛, translation 🌎

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind are welcome: if you spot a bug or a typo, [open an issue](https://github.com/4GeeksAcademy/react-tutorial-exercises/issues) or send a pull request. See [everyone who has contributed](https://github.com/4GeeksAcademy/react-tutorial-exercises/graphs/contributors).

This tutorial is built and maintained by [4Geeks Academy](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer) and its community.
<!-- endhide -->
