import axios from "axios";
import { questionOptions, AIResponse, AIResponseData } from "../interfaces";
import { checkBardieTSVersion } from "../utils/BTSVersionChecker";

const primaryBaseUrl = "https://bard.rizzy.eu.org";
const fallbackBaseUrl = "https://bardie.vercel.app";

class BardieTS {
  constructor() {}

  /**
    * Validates the options for the question.
    * @private
    * @param {questionOptions} options - The options for the question.
    * @throws {Error} Throws an error if the options are not an object, the question is not specified or the image URL is invalid.
  */
  private validateOptions(options: questionOptions): void {
    if (typeof options !== "object") {
      throw new Error("Options must be an object!");
    }
    if (!options.ask || options.ask === "") {
      throw new Error("The 'ask' option must be a valid question!");
    }
    if (options.image === "" || (options.image && typeof options.image !== "string")) {
      throw new Error("The 'image' option must be a valid URL!");
    }
  }

  /**
    * Makes a request to the AI.
    * @private
    * @param {questionOptions} options - The options for the question.
    * @returns {Promise<AIResponse>} The response from the AI.
    * @throws {Error} Throws an error if the API is down.
   */
  private async makeRequest(options: questionOptions): Promise<AIResponseData> {
    const requestData = { ask: options.ask, image: options.image || null };
    const baseurls = [primaryBaseUrl, fallbackBaseUrl];
    for (const baseurl of baseurls) {
      try {
        const headers = {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          Origin: baseurl,
          Referer: `${baseurl}/`
        };
        const response: AIResponse = await axios.post(`${baseurl}/backend/conversation/${options.image ? "image" : ""}`, requestData, { headers });
        return response.data;
      } catch (error: any) {
        if (error.response && (error.response.status === 503 || error.response.status === 504)) {
          continue;
        } else {
          throw new Error(error.message);
        }
      }
    }
    throw new Error("The request to Google Bard's API has failed... Please try again later.");
  }

  /**
    * Ask a question to the artificial intelligence.
    * @param {questionOptions} options - The options for the question.
    * @param {string} options.ask - The question you want to ask the AI. This is a required field.
    * @param {string} [options.image] - An optional image URL. If provided, the AI will consider the image while answering the question.
    * @description Asking a question without an image (Example 1)
    * @example 
    * ```typescript
    * import BardieTS from "bardie-ts"; // Use "require" for javascript
    * 
    * const bard = new BardieTS();
    * 
    * const options = {
    *  ask: "Keep it simple... What is this image?",
    *  image: "https://i.imgur.com/OgoPlnf.png"
    * };
    * 
    * async function askQuestion() {
    *   try {
    *     const result = await bard.question(options);
    *     console.log(result.content);
    *   } catch (error: any) { // Remove typing for javascript
    *     console.error("Error:", error.message);
    *   }
    * };
    * 
    * askQuestion();
    * ```
    * @returns {Promise<AIResponseData>}
    * 
    * "I'm like a chatty robot friend from Google!
    * I can answer your questions, write stories, translate languages, and more. Think of me as a helpful guide through the world of information."
    * @description Optionally asking a question with an image (Example 2)
    * @example 
    * ```typescript
    * import BardieTS from "bardie-ts"; // Use "require" for javascript
    * 
    * const bard = new BardieTS();
    * 
    * const options = {
    *  ask: "Keep it simple... What is this image?",
    *  image: "https://i.imgur.com/OgoPlnf.png"
    * };
    * 
    * async function askQuestionWithImage() {
    *   try {
    *     const result = await bard.question(options);
    *     console.log(result.content);
    *   } catch (error: any) { // Remove typing for javascript
    *     console.error("Error:", error.message);
    *   }
    * };
    * 
    * askQuestionWithImage();
    * ```
    * @returns {Promise<AIResponseData>}
    * 
    * "The image you sent me is the logo of Bard, a large language model chatbot developed by Google AI.
    * The logo is made up of two colorful stars, one blue and one orange, on a gray background.
    * The stars are meant to represent the creativity and intelligence of Bard. I hope this helps!"
    * 
    * OR
    * 
    * @throws {Error} Throws an error if the options are not an object, the question is not specified, the image URL is invalid, or the API is down.
  */
  async question(options: questionOptions): Promise<AIResponseData> {
    this.validateOptions(options);
    const response = await this.makeRequest(options);
    return response;
  }
}

checkBardieTSVersion();

export = BardieTS;
