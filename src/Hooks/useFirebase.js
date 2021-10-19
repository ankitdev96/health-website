import  { useEffect, useState } from 'react';
import initializeAuth from '../Firebase/firebaseinit'
import { getAuth, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword , onAuthStateChanged,signOut  } from "firebase/auth";


initializeAuth();

const useFirebase = () => {

    const [user,setUser] = useState({});
    const [error,setError] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const handleSignIn = () =>{
    
      signInWithPopup(auth,provider)
      .then(result =>{
        const {displayName,photoURL,email} = result.user;
        console.log(user);
        const loggedInUser = {
            name:displayName,
            email:email,
            photo:photoURL,
        };
        setUser(loggedInUser);
      }).catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        // console.log(errorMessage);
        setError(errorMessage);
       
      });
}

const handleRegistration = e => {
  e.preventDefault();

  if(password.length < 6){
     setError('Password Must be at least 6 character long.')
     return;
  }

  if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password)){
    setError('Password Must contain 2 upper case')
    return;
  }
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

}

const handleEmailChange = e =>{
   setEmail(e.target.value);
}

const handlePasswordChange = e =>{
  setPassword(e.target.value);
}
     const signInWithGoogle = () =>{
      signInWithPopup(auth, provider)
          .then(result => {
              console.log(result.user);  
              setUser(result.user);
              
          })
          .catch(error => {
              setError(error.message);
          })
      }


      const logOut = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
          }).catch((error) => {
            // An error happened.
          });
      }

    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                setUser(user);
                // ...
              } else {
                // User is signed out
                // ...
              }
        })
    },[])
   
    
    return {
      signInWithGoogle,error,user,logOut,handleSignIn,handleRegistration,handlePasswordChange,handleEmailChange
    }
}

export default useFirebase;