import { collection, addDoc } from 'firebase/firestore';
import getFirestoreDB from '../Firebase/config';


const submitOrder = async (orderData) => {
  if(!orderData || typeof orderData !== 'object'){
    return { error: "Invalid order data"}
  }
  try {
    const db = getFirestoreDB()
    const docRef = await addDoc(collection(db, 'orders'), orderData);
    localStorage.setItem('newOrderID', docRef.id )
    return {success: true, id: docRef.id} 
    
  } catch (err) {
    return { error: err.message }
  }
};

export default submitOrder