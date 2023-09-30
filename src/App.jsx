
import './App.css'
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from './firebase.config';

function App() {
  const auth = getAuth();
  const provider= new GithubAuthProvider();
  const handleGitAuth=()=>{
    
signInWithPopup(auth, provider)
  .then((result) => {
    console.log("logged in", result)
  }).catch((error) => {
    console.log("bair koira dise", error)
  });

  }
  return (
    <>
     <button onClick={handleGitAuth}>Git Auth</button>
    </>
  )
}

export default App
