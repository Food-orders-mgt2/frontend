import { postData } from "./Post";

const saveOrder = async (orderData) => {
  const url = 'https://para-dish-back.onrender.com/order';
  try {
    await postData(url, orderData);
    console.log('Order saved successfully');
  } catch (error) {
    console.error('Error saving order:', error.message);
    throw error;
  }
};

export default saveOrder;
