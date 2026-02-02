import Header from "./components/Header.tsx";
import About from "./components/About.tsx";
import CProjects from "./components/CProjects.tsx";
import TProjects from "./components/TProjects.tsx";
import JProjects from "./components/JProjects.tsx";

import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <main>
          <Header />
          <About />
          <TProjects />
          <JProjects/>
          <CProjects />
        </main>
        <footer>
          <p>© 2026 Yun-Chia Hsu All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
