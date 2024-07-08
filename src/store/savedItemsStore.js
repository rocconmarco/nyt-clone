import { create } from "zustand";

const useSavedItemsStore = create((set) => ({
    savedArticles: [],
    savedBooks: [],
    addSavedArticle: (article) => set((state) => ({savedArticles: [...state.savedArticles, article]})),
    addSavedBook: (book) => set((state) => ({savedBooks: [...state.savedBooks, book]})),
    setSavedArticles: (articles) => set({savedArticles: articles}),
    setSavedBooks: (books) => set({savedBooks: books})
}))

export default useSavedItemsStore