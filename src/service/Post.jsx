export const postData = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
          'Host': 'para-dish-back.onrender.com'
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error:', error.message);
      console.error('Request Payload:', JSON.stringify(data));
      console.error('Response Body:', await response.text()); // Log the response body
      throw error;
    }
  };
  