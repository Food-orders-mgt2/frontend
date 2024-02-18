import { postData } from "./Post";

const saveUser = async (userData) => {
  const url = 'https://para-dish-back.onrender.com/users';
  try {
    await postData(url, userData);
    console.log('Order saved successfully');
  } catch (error) {
    console.error('Error saving order:', error.message);
    throw error;
  }
};

export default saveUser;