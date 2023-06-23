import Canvas from "./canvas";
import Personalizador from "./pages/Personalizador";
import Home from "./pages/Home";

function App() {
  return (

    <main className="app transition-all ease-in">

      <Home />
      <Canvas />
      <Personalizador />

    </main>
  )
}

export default App
