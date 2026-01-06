import Header from "./components/Header.tsx";
import About from "./components/About.tsx";
import TProject from "./components/tProjects.tsx";
import CProject from "./components/CProjects.tsx";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <main>
          <Header />
          <About />
          <TProject />
          <CProject />
        </main>
        <footer>
          <p>© 2026 Yun-Chia Hsu All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
