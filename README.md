# BardieTS <a href="https://github.com/Zoheb-Malik/BardieTS"><img src="https://i.imgur.com/5wcvFUB.png" height="20px" alt="BardieTS"></a> AI

<p align="center">
  <a target="_blank" href="https://github.com/Zoheb-Malik/BardieTS">
    <img src="https://i.imgur.com/5wcvFUB.png" alt="BardieTS" width="169" />
  </a>
</p>

## bardie-ts

BardieTS is a TypeScript library for interacting with the Google Bard API.
It provides powerful features for AI interactions, including the ability to answer questions and recognise image input.

## Key Features

- Answers question with AI assistance
- Image recognition with descriptive responses
- Easily integratable to any app
- Designed with broad compatibility in mind and works with all major module types, including (but not limited to) CommonJS, AMD, UMD, and ES6 modules

# BardieTS Installation

### 📂 npm, pnpm, or yarn

#### npm:

```bash
npm i bardie-ts
```

#### pnpm:

```bash
pnpm add bardie-ts
```

#### yarn:

```bash
yarn add bardie-ts
```

# Simple Examples

### **Example Question To Bard**

#

```typescript
import BardieTS from "bardieTS";

const bard = new BardieTS();

async function askQuestion() {
  try {
    const options = {
      ask: "Keep it simple... What is Google Bard?"
    };
    const result = await bard.question(options);
    console.log(result.content);
  } catch (error: any) {
    console.error("Error:", error.message);
  }
};

askQuestion();
```

##### Response:

> "In a nutshell, I'm Google's AI helper you can chat with.
I can answer your questions, generate creative text formats, and help you with various tasks in a simple and informative way.
Think of me as a friendly AI companion ready to assist you anytime!"

### **Example Question With Image To Bard**

#

```typescript
import BardieTS from "bardieTS";

const bard = new BardieTS();

async function askQuestionWithImage() {
  try {
    const options = {
      ask: "Keep it simple... What is this image?",
      image: "https://i.imgur.com/OgoPlnf.png"
    };
    const result = await bard.question(options);
    console.log(result.content);
  } catch (error: any) {
    console.error("Error:", error.message);
  }
};

askQuestionWithImage();
```

##### Response:

> "The image you sent me is the logo of Bard, a large language model chatbot developed by Google AI.
The logo consists of two colorful stars, one in red and orange and the other in blue and green, on a gray background.
The stars are meant to represent creativity and knowledge, while the gray background represents the real world. I hope this helps!"

#

# Notes

If there are any bugs, please report them at [issues](https://github.com/Zoheb-Malik/BardieTS/issues/new) for visibility.

**Disclaimer:**
This project utilises a third-party API that interacts with Google's Bard API.
I have no affiliation with the creation of the endpoint (https://bard.rizzy.eu.org).
It is important to note that the usage of this project should **not** be intended for commercial purposes or the provision of services for profit.
BardieTS should be for educational, research, and experimental purposes only.
