import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useState } from "react";



const Login = () => {
    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider;
    const githubProvider = new GithubAuthProvider;

    const handleGoogleSignIn =()=>{
        signInWithPopup(auth, provider)
        .then((result)=>{
            console.log(result.user);
            setUser(result.user)

        })
        .catch((error)=>{
            console.log(error)
           setUser(null)
        })
        
    }

    const handleGithubSignIn =()=>{
        signInWithPopup(auth, githubProvider )
        .then((result)=>{
            setUser(result.user);
        })
        .catch((error)=>{
            console.log(error)
            setUser(null)
        })
    }
    
    const handleGoogleSignOut =()=>{
        signOut(auth)
        .then(()=>{
            console.log('signout')
            setUser(null)
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    return (
        <div>
            <h2 className='text-4xl text-red-700 font-bold'>This is login page</h2>
            {
                user?<button onClick={handleGoogleSignOut} className="btn btn-danger my-12">Sign out</button>
                    : 
                    <>
                     <button onClick={handleGoogleSignIn} className="btn btn-success my-12">Login with google</button>
                     <button onClick={handleGithubSignIn} className="btn btn-success my-12">Login with gitHub</button>
                    </>
            }
           
            
            {
                user&& <div>
                    <p>{user.displayName}</p>
                    <p>{user.email}</p>
                    <img src={user.photoURL} alt="" />
                    </div>
            }
        </div>
    );
};

export default Login;