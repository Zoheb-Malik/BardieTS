export interface questionOptions {
  /**
    * @property {string} ask - The question you want to ask the AI. This is a required field.
    * @property {string} [image] - An optional image URL. If provided, the AI will consider the image while answering the question.
  */
  ask: string;
  image?: string;
}
