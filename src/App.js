import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Message from './Message';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1>🎉 Happy Birthday! 🎉</h1>
      <p>Someone has a surprise waiting...</p>
      <button style={styles.button} onClick={() => navigate('/message')}>
        Reveal Gift 🎁
      </button>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/message" element={<Message />} />
    </Routes>
  );
}

const styles = {
  container: {
    maxWidth: 400,
    margin: '100px auto',
    padding: 20,
    textAlign: 'center',
    fontFamily: 'Arial',
  },
  button: {
    padding: '10px 20px',
    fontSize: 18,
    backgroundColor: '#facc15',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer'
  }
};