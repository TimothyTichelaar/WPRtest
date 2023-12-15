import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from "./styles/App.module.css";
import NavBar from "./components/NavBar";
import Pages from "./components/Pages";

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <NavBar />
        <Pages />
      </div>
    </Router>
  );
}
export default App;