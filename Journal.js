import { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

export default function Journal() {
  const [entry, setEntry] = useState('');

  const saveEntry = async () => {
    if (!entry.trim()) return;

    await addDoc(collection(db, 'journals'), {
      content: entry,
      created: Timestamp.now()
    });

    alert('Journal saved!');
    setEntry('');
  };

  return (
    <section>
      <h2>Journal Entry</h2>
      <textarea
        rows="5"
        cols="50"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Write your thoughts..."
      />
      <br />
      <button onClick={saveEntry}>Save</button>
    </section>
  );
}
