import { Timestamp } from "firebase/firestore"

const getDateFromFirebase = (obj) => {
    if(!obj || typeof obj !== 'object'){return}
    else{
        const time = new Timestamp(obj.seconds, obj.nanoseconds)
        const formattedDate = time.toDate()
        return formattedDate.toLocaleString()
    }
}
export default getDateFromFirebase