import './App.css';
import firebase from './firebase';
import {useAuthState} from './firebase';
import SignIn, { SignOut } from './SignInOut';
import ChatBox from './ChatBox'

function App() {

  const [user] =useAuthState(firebase.auth());

  // console.log(firebase.firestore().collection("pankaj"));

  return (
    <div className="App">
      <header>
        <h1>Let's Chat</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatBox /> : <SignIn />}
      </section>

    </div>
  );
}

export default App;
