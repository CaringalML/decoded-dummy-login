import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function Dashboard({ user }) {
  const [profile, setProfile] = useState(null);
  const [bio, setBio] = useState("");
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    async function loadProfile() {
      const snap = await getDoc(doc(db, "users", user.uid));
      const data = snap.data();
      setProfile(data);
      setBio(data?.bio);
    }
    loadProfile();
  }, [user.uid]);

  function handleSaveBio() {
    // Updates the UI only — never actually persisted to Firestore.
    setProfile({ ...profile, bio });
    setEditing(false);
  }

  return (
    <div className="dashboard">
      <h1>Welcome, {profile?.name}</h1>
      <p className="muted">{user.email}</p>

      <div className="bio-section">
        {editing ? (
          <>
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
            <button onClick={handleSaveBio}>Save</button>
          </>
        ) : (
          <>
            <p>{profile?.bio || "No bio yet."}</p>
            <button onClick={() => setEditing(true)}>Edit profile</button>
          </>
        )}
      </div>

      <button className="logout-btn" onClick={() => signOut(auth)}>
        Log out
      </button>
    </div>
  );
}
