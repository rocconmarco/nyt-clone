import { create } from "zustand";
import { auth, firestore } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const useSavedItemsStore = create((set) => ({
    savedArticles: [],
    savedBooks: [],
    addSavedArticle: (article) => set((state) => ({savedArticles: [...state.savedArticles, article]})),
    addSavedBook: (book) => set((state) => ({savedBooks: [...state.savedBooks, book]})),
    setSavedArticles: (articles) => set({savedArticles: articles}),
    setSavedBooks: (books) => set({savedBooks: books}),
    loadSavedArticles: async () => {
        const user = auth.currentUser
        if(user) {
            const userDocRef = doc(firestore, "users", user.uid)
            const userDoc = await getDoc(userDocRef)
            if(userDoc.exists()) {
                const userData = userDoc.data()
                set({savedArticles: userData.savedArticles || []})
            }
        }
    },
    loadSavedBooks: async () => {
        const user = auth.currentUser
        if(user) {
            const userDocRef = doc(firestore, "users", user.uid)
            const userDoc = await getDoc(userDocRef)
            if(userDoc.exists()) {
                const userData = userDoc.data()
                set({savedBooks: userData.savedBooks || []})
            }
        }
    }
}))

export default useSavedItemsStore