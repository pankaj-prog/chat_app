import react,{ useState , useEffect, useRef} from 'react'
import firebase,{useCollectionData} from './firebase'

function ChatBox(){

    const dummy=useRef()
    const [messageData,setMessageData]=useState({});
    const [formValue,setFormValue]=useState('');
    const [messages]=useCollectionData(firebase.firestore().collection('messages').orderBy('createdAt').limit(25),{idField:'id'})
    
    useEffect(() => {
        firebase.firestore()
        .collection('messages')
        .onSnapshot(serverUpdate => {
        const mess = serverUpdate.docs.map(_message => {
            const data = _message.data();
            return data;
            });
        console.log(mess);
        setMessageData(mess);
        });  
      },[formValue]);    

    const sendMessage = async (e) => {
        e.preventDefault();
        const { uid, photoURL } = firebase.auth().currentUser;
        await firebase.firestore().collection("messages").add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })
    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
    }


    return(
        <>
            <main>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
                <span ref={dummy}></span>
            </main>
            <form onSubmit={sendMessage}>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
                <button type="submit" disabled={!formValue}>Send</button>
            </form>
        </>
    )
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === firebase.auth().currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}


export default ChatBox;