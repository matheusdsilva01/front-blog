import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "../context/context";
import Home from '../pages/home';
import Postagens from '../pages/postagem';
import Login from '../pages/login';
import Cadastro from '../pages/cadastro';

export default function Index() {
  return (
    <BrowserRouter>
      <Auth>
        <Routes>
          <Route path="/postagens" element={<Postagens />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Auth>
    </BrowserRouter>
  )
}
