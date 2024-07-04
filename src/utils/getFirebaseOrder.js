import {getFirestore, doc, getDoc} from 'firebase/firestore'


const getFirebaseOrder = async (id) => {
    try{
        const db = getFirestore()
        const docRef = doc(db,'orders',id)
        const confirmationOrder = await getDoc(docRef)
        
        if(confirmationOrder.exists()){
            return confirmationOrder.data()
        }
    }catch(err){
        console.error(err)
        throw err
    }
}

export default getFirebaseOrder