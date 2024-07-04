import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import useShowToast from "./useShowToast";

const useSignUpWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    const showToast = useShowToast()

  const signup = async (inputs) => {
    if (
      !inputs.firstName ||
      !inputs.lastName ||
      !inputs.email ||
      !inputs.password
    ) {
      showToast("Error", "Please fill al the fields", "error")
      return;
    }
    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser && error) {
        showToast("Error", error.message, "error")
        return;
      }
      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: inputs.email,
          firstName: inputs.firstName,
          lastName: inputs.lastName,
          savedArticles: [],
          savedBooks: [],
          signedUpAt:Date.now()
        };
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc)
        localStorage.setItem("user-info", JSON.stringify(userDoc))
      }
    } catch (error) {
      showToast("Error", error.message, "error")
    }
  };

  return { loading, error, signup };
};

export default useSignUpWithEmailAndPassword;
