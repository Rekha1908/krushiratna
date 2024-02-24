// FirebaseFiles.js
import React, { useState,useEffect } from 'react';
import { ref, set,get , onValue } from 'firebase/database';

function FirebaseFiles({ database }) {
  const [username, setUsername] = useState('');
  const [dob, setDob] = useState('');
  const [contact, setContact] = useState('');

  const [data, setData] = useState(null);

  useEffect(() => {
    const dbRef = ref(database, 'https://dairyapp-11222-default-rtdb.firebaseio.com'); // Adjust the path accordingly

    // Subscribe to changes in the 'users' path
    const unsubscribe = onValue(dbRef, (snapshot) => {
      // Handle data changes
      const fetchedData = snapshot.val();
      setData(fetchedData);
    });

    // Unsubscribe when the component unmounts
    return () => unsubscribe();
  }, [database]);

  // Push Function
  const pushData = () => {
    const dbRef = ref(database, 'https://dairyapp-11222-default-rtdb.firebaseio.com/'); // Adjust the path accordingly

    get(dbRef, {
      username: username,
     
    }).then(() => {
      console.log('Data pushed successfully');
    }).catch((error) => {
      console.error('Error pushing data', error);
    });
  }

  return (
    <div className="App" style={{ marginTop: 250 }}>
      <center>
        <input
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br /><br />
        <input
          placeholder="Enter your name"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <br /><br />
        <input
          placeholder="Enter your age"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <br /><br />
        <button onClick={pushData}>PUSH</button>
        <h2>Fetched Data:</h2>
      {data ? (
        <ul>
          {Object.entries(data).map(([key, value]) => (
            <li key={key}>{`${key}: ${JSON.stringify(value)}`}</li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
      </center>
    </div>
  );
}

export default FirebaseFiles;
