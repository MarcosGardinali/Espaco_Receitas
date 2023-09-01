import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import Cabecalho from "Componentes/Cabecalho";
import CadastroReceita from "Paginas/CadastroReceita";
import Sobre from "Paginas/Sobre";
import Contato from "Paginas/Contato";
import Rodape from "Componentes/Rodape";
import { useState } from "react";
import Receita from "Paginas/Receita";
import NaoEncontrada from "Paginas/NaoEncontrada";


function App() {

  interface Receita {
    id: string;
    titulo: string;
    descricao: string;
    receita: string;
    categoria: string;
  }

  const [receita, setReceita] = useState<Receita[]>([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Cabecalho />
        <Routes>
          <Route path="/" element={<Inicio receitas={receita} />} />
          <Route path="cadastrar-receita" element={<CadastroReceita cadastrarReceita={novaReceita => setReceita([...receita, novaReceita])} />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="contato" element={<Contato />} />
          <Route path="receita/:id" element={<Receita receitas={receita} />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    </div>
  );
}

export default App;
