import React,{useEffect} from "react";
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import Feed from "./Feed";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import Login from "./Login";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/userSlice";
import Widgets from "./Wigets";
//dispatch -> action -> payload

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user logged In
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        // user Logged out
        dispatch(logout())
      }
    });
  },[dispatch]);

  const user = useSelector(selectUser);
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <SideBar />
            <Feed />
            <Widgets/>
        </div>
      )}
    </div>
  );
}

export default App;
