import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import Cabecalho from "Componentes/Cabecalho";
import CadastroReceita from "Paginas/CadastroReceita";
import Sobre from "Paginas/Sobre";
import Contato from "Paginas/Contato";
import Rodape from "Componentes/Rodape";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Cabecalho />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cadastrar-receita" element={<CadastroReceita/>} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    </div>
  );
}

export default App;
