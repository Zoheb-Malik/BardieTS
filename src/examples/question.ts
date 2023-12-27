import BardieTS from "../lib/bardieTS";

const bard = new BardieTS();

export async function askQuestion() {
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
