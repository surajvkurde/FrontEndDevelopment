import React from 'react';
import { useDispatch,useSelector } from "react-redux";
import './App.css';
import Header from "./Header";
import Sidebar from './Sidebar';
import Feed from './Feed';
import { selectUser } from './features/userSlice';
import Login from "./Login";
import { auth } from './Firebase';
import { login,logout,selectUser } from './features/userSlice';


function App() {
  const user= useSelector(selectUser);

  useEffect(()=> {
    auth.onAuthSateChanged((userAuth)=> {
      if(userAuth){
        dispatchEvent(login(
          {
            email:userAuth.email,
            uid:userAuth.uid,
            displayName:userAuth.displayName,
            photoUrl:userAuth.photoURL,
          }
        ))
      }
      else{
        dispatchEvent(logout());
      }
    });
  },[]);
  return(
    <div className="app">
      <Header/>
    {!user ?(
      <Login/>
    ):(
      <div className='app_body'>
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </div>
    )}
    </div>    
  );
}

export default App;
