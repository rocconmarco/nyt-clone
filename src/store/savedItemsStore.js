import { create } from "zustand";
import { auth, firestore } from "../firebase/firebase";
import { doc, onSnapshot } from "firebase/firestore";

const useSavedItemsStore = create((set) => ({
  savedArticles: [],
  savedBooks: [],
  addSavedArticle: (article) =>
    set((state) => ({ savedArticles: [...state.savedArticles, article] })),
  addSavedBook: (book) =>
    set((state) => ({ savedBooks: [...state.savedBooks, book] })),
  removeSavedArticle: (articleTitle) => set((state) => ({savedArticles: state.savedArticles.filter(article => article.title !== articleTitle) })),
  removeSavedBook: (bookTitle) => set((state) => ({savedBooks: state.savedBooks.filter(book => book.title !== bookTitle)})),
  setSavedArticles: (articles) => set({ savedArticles: articles }),
  setSavedBooks: (books) => set({ savedBooks: books }),
  loadSavedArticles: async () => {
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(firestore, "users", user.uid);
      return onSnapshot(userDocRef, (doc) => {
        if (doc.exists()) {
          const userData = doc.data();
          set({ savedArticles: userData.savedArticles || [] });
        }
      });
    }
  },
  loadSavedBooks: async () => {
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(firestore, "users", user.uid);
      return onSnapshot(userDocRef, (doc) => {
        if (doc.exists()) {
          const userData = doc.data();
          set({ savedBooks: userData.savedBooks || [] });
        }
      });
    }
  },
}));

export default useSavedItemsStore;
