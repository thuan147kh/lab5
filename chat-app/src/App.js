import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import {
  doc,
  setDoc,
  getFirestore,
  getDoc,
  onSnapshot,
  collection,
  addDoc,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { auth, app } from "./firebase";
import { useState, useEffect } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const db = getFirestore();
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubcribe = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return unsubcribe;
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);
  const sendMessage = async () => {
    await addDoc(collection(db, "messages"), {
      uid: user.uid,
      photoURL: user.photoURL,
      displayName: user.displayName,
      text: newMessage,
      timestamp: serverTimestamp(),
    });
    setNewMessage("");
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      {user ? (
        <>
          <div className="user-info">Logged in as {user.displayName}</div>

          <div className="chat-box">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={
                  msg.data.uid === user.uid
                    ? "my-message-container"
                    : "message-container"
                }
              >
                {msg.data.uid !== user.uid && (
                  <img
                    className="user-avatar"
                    src={msg.data.photoURL}
                    alt="User Avatar"
                  />
                )}
                <div
                  className={
                    msg.data.uid === user.uid ? "my-message-text" : "message-text"
                  }
                >
                  {msg.data.text}
                </div>
              </div>
            ))}
          </div>
          <div className="input-container">
            <input
              placeholder="Aa"
              className="message-input"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <div className="send-button" onClick={sendMessage}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </div>
          </div>
          <button className="logout-button" onClick={() => auth.signOut()}>
            Logout
          </button>
        </>
      ) : (
        <button className="login-button" onClick={handleGoogleLogin}>
          Login with Google
        </button>
      )}
    </div>
  );
}
