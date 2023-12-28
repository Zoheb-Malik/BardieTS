# <a href="https://github.com/Zoheb-Malik/BardieTS"><img src="https://i.imgur.com/5wcvFUB.png" width="25px" height="25px" alt="BardieTS" /></a> BardieTS

![BardieTS](https://socialify.git.ci/Zoheb-Malik/BardieTS/image?description=1&descriptionEditable=npm%20i%20bardie-ts%20%7C%20pnpm%20add%20bardie-ts%20%7C%20yarn%20add%20bardie-ts&font=Inter&language=1&logo=https%3A%2F%2Fsvgshare.com%2Fi%2F11JZ.svg&name=1&owner=1&pattern=Circuit%20Board&theme=Dark)

## 📦 bardie-ts

BardieTS is a multi-purpose AI package built with typescript that allows people to interact with the Google Bard API.
It provides simple, fast and powerful features for AI interactions, including the ability to answer questions and recognise image input, **without needing to set your own cookie!**

## 🔑 Key Features

* 🤖 Answers question with AI assistance
* 🖼️ Image recognition with descriptive responses
* 💻 Simple to integrate into to any app
* 🖋️ Broad compatibility to work with all major module types (CommonJS, ES6, UMD, AMD...)
* 📄 Extremely well-documented codebase

## 📂 BardieTS Installation

You **MUST** have [Node.js](https://nodejs.org/en/download) installed on your system for BardieTS to work.

### npm, pnpm, OR yarn

#### npm -

```bash
npm i bardie-ts
```

#### pnpm -

```bash
pnpm add bardie-ts
```

#### yarn -

```bash
yarn add bardie-ts
```

## 💡 Examples Of Use

### Asking A Simple Question

#### Typescript Usage -

To use BardieTS in typescript, create a file named `index.ts` in your project's root directory and make sure you have `ts-node` (or equivalent) installed.
Once you have an `index.ts` file with the contents below, execute `ts-node index.ts` in your terminal.

```typescript
import BardieTS from "bardieTS";

const bard = new BardieTS();

const options = {
  ask: "Keep it simple... What is Google Bard?"
};

async function askQuestion() {
  try {
    const result = await bard.question(options);
    console.log(result.content);
  } catch (error: any) {
    console.error("Error:", error.message);
  }
};

askQuestion();
```

#### Javascript Usage -

To use BardieTS in javascript, create a file named `index.js` in your project's root directory. You should already have `node` installed.
Once you have an `index.js` file with the contents below, execute `node index.js` in your terminal.

```javascript
const BardieTS = require("bardie-ts");

const bard = new BardieTS();

async function askQuestion() {
  const result = await bard.question({ ask: "Keep it simple... What is Google Bard?"});
  console.log(result.content);
}

askQuestion();
```

#### Response:

> "In a nutshell, I'm Google's AI helper you can chat with.
I can answer your questions, generate creative text formats, and help you with various tasks in a simple and informative way.
Think of me as a friendly AI companion ready to assist you anytime!"

### Asking A Question With Image Input

#### Typescript Usage -

```typescript
import BardieTS from "bardie-ts";

const bard = new BardieTS();

const options = {
  ask: "Keep it simple... What is this image?",
  image: "https://i.imgur.com/OgoPlnf.png"
};

async function askQuestionWithImage() {
  try {
    const result = await bard.question(options);
    console.log(result.content);
  } catch (error: any) {
    console.error("Error:", error.message);
  }
};

askQuestionWithImage();
```

#### Javascript Usage -

```javascript
const BardieTS = require("bardie-ts");

const bard = new BardieTS();

async function askQuestionWithImage() {
  const result = await bard.question({
    ask: "Keep it simple... What is this image?",
    image: "https://i.imgur.com/OgoPlnf.png"
  });
  console.log(result.content);
}

askQuestionWithImage();
```

#### Response:

> "The image you sent me is the logo of Bard, a large language model chatbot developed by Google AI.
The logo consists of two colorful stars, one in red and orange and the other in blue and green, on a gray background.
The stars are meant to represent creativity and knowledge, while the gray background represents the real world. I hope this helps!"

## 📝 Final Notes

If there are any bugs, please report them at [issues](https://github.com/Zoheb-Malik/BardieTS/issues/new) for visibility.

**Disclaimer:**
This package utilises a third-party API that interacts with Google's Bard API.
I have no affiliation with the creation of the endpoint (<https://bard.rizzy.eu.org>).
It is important to note that the usage of this package should ideally **not** be intended for commercial purposes or the provision of services for profit.
BardieTS should preferably be used along the lines of educational, research, or experimental purposes only.

**Special Thanks:**
I would like to extend a special thanks to [@rizzlogy](https://github.com/rizzlogy) for the original [bardie package](https://github.com/rizzlogy/bardie), which served as the inspiration for the development of this advanced TypeScript version.
This version aims to be accessible to a wide range of developers, making it easier for them to integrate AI interactions into their projects.

I would also like to thank [@underctrl-io](https://github.com/underctrl-io) for [their tutorial](https://www.youtube.com/watch?v=xnfdm-s8adI) on how to create and publish an npm package (the right way!)
