import BardieTS from "../lib/bardie-ts";

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
