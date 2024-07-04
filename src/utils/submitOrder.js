import { collection, addDoc } from 'firebase/firestore';
import getFirestoreDB from '../Firebase/config';


const submitOrder = async (orderData) => {
    const db = getFirestoreDB()
    if(!orderData || typeof orderData !== 'object'){
      return { error: "Invalid order data"}
    }
  try {
    const docRef = await addDoc(collection(db, 'orders'), orderData);
    return {success: true, id: docRef.id} 
    
  } catch (err) {
    return { error: err.message }
  }
};

export default submitOrder