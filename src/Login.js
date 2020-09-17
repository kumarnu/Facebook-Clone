import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase'
import './Login.css'
import { actionTypes } from './Reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [state, dispatch] = useStateValue();// Pull data from the data layer
    const signIn =() =>{
    auth.signInWithPopup(provider).then((result) => {
        dispatch({  // Dispatch the user to the data layer
            type: actionTypes.SET_USER,
            user: result.user,
        });
    }).catch((error) => alert(error.message));
};

    return (
      <div className="login">
        <div className="login_logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt=" "></img>
          <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg">

          </img>
        </div>
        <Button type='submit' onClick={signIn}>Sign In</Button>
      </div>
    );
}

export default Login
