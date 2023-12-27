export interface AIResponse {
  /**
    * @property {Object} data - The data from the AI response.
    * @property {string} data.content - The response content from the AI.
    * @property {number} data.status - The status code of the response.
    * @property {string} data.creator - The creator of the response.
  */
  data: {
    content: string;
    status: number;
    creator: string;
  };
}
