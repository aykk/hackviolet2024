import axios from 'axios';

class OpenAIResponse {
  private openAIResponse: string = '';

  async fetchData(prompt: string): Promise<void> {
    try {
      const apiKey = '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';
      const openAIEndpoint = 'https://api.openai.com/v1/chat/completions';

      const response = await axios.post(
        openAIEndpoint,
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are a helpful assistant.',
            },
            {
              role: 'user',
              content: prompt,
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      this.openAIResponse = response.data.choices[0]?.message?.content || '';
    } catch (error) {
      console.error('Error fetching data from OpenAI API:', error);
    }
  }

  getResponse(): string {
    return this.openAIResponse;
  }
}

export default OpenAIResponse;
