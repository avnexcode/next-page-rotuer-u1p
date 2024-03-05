import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import app from "@/lib/firebase/firebaseInstance"
import bcrypt, { compare } from "bcrypt"

const firestore = getFirestore(app)

export async function retrieveData(collectionName: string) {
    const snapshot = await getDocs(collection(firestore, collectionName))
    const data = snapshot.docs.map((doc) => (
        {
            id: doc.id, ...doc.data()
        }
    ))
    return data
}

export async function retrieveDataById(collectionName: string, id: string) {
    const snapShot = await getDoc(doc(firestore, collectionName, id))
    const data = snapShot.data()
    return data
}

export async function signIn(userData: { email: string }) {
    const q = query(collection(firestore, "users"), where("email", "==", userData.email))
    const snapshot = await getDocs(q)
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }))
    if (data) {
        return data[0]
    } else {
        return null
    }
}

export async function signUp(userData: { email: string, username: string, password: string, role?: string }, callback: Function) {
    const q = query(collection(firestore, "users"), where("email", "==", userData.email))
    const snapshot = await getDocs(q)
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }))
    console.log(data)
    if (data.length > 0) {
        callback({ status: false, message: "Email already exis" })
    } else {
        userData.password = await bcrypt.hash(userData.password, 10)
        userData.role = "member"
        await addDoc(collection(firestore, "users"), userData)
            .then(() => {
                callback({ status: true, message: "Register Success" })
            })
            .catch((error) => {
                callback({ status: false, message: "Register failed" })
            })
    }
}