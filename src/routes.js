import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Inicio  from "./page/inicio/inicio";
import  Sobremim  from "./page/sobreMim/sobreMim";
import Menu from './componentes/Menu';
import Rodape from './componentes/Rodape';
import PaginaPadrao from 'componentes/PaginaPadrao';
import Post from './page/Post';
import NaoEncontrada from "page/NaoEncontrada";
import ScrollToTop from "componentes/ScrollToTop";

function AppRoutes() {
  //const pagina = window.location.pathname === '/' ?  <Inicio/> : <Sobremim/>
  //return pagina
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu/>

      <Routes>
        <Route path="/" element={<PaginaPadrao />}> 
          <Route path='/' element={<Inicio/>} />
          <Route path='/sobreMim' element={<Sobremim/>} />
          
        </Route>
        <Route path='/posts/:id' element={<Post/>} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Rodape/>
    </BrowserRouter>
  )
}

export default AppRoutes;
