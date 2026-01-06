import React from "react";
import Header from "./components/Header.tsx";
import About from "./components/About.tsx";
import Project from "./components/Projects.tsx";
// import Contact from "./components/Contacts.tsx";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <main>
          <Header />
          <About />
          <Project />
        </main>
        <footer>
        <p>© 2026 Yun-Chia Hsu All rights reserved.</p>
      </footer>
      </div>
    </>
  );
}

export default App;
