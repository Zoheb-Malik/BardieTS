import BardieTS from "../lib/bardieTS";

const bard = new BardieTS();

export async function askQuestionWithImage() {
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
