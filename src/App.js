import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import Contacto from './components/Contacto';
import Checkout from './components/Checkout';
import Footer from './components/Footer';

// Para instalar Routing es npm install react-router-dom
// En package.json se puede ver si instalo las dependencias.
// La Navbar va arriba de todo por qie la queremos tener afuera de la ruta asi esta presemte.

export default function App() {
  return (
    <BrowserRouter>

    {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LA RUTAS */}

      <Navbar/>
      {/* DECLARO RUTAS PUNTUALES */}
      <Routes>
        <Route path='/' element={<ItemListContainer/>} /> {/* Estamos colocando en la Home el Item List container */}
        <Route path='/Checkout' element={<Checkout />} />
        <Route path='/Contacto' element={<Contacto/>} />
        <Route path='/Footer' element={<Footer/>} />
        <Route path='/category/:idcategory' element={<ItemListContainer/>} />  {/* Esta categoria es multiruta, y filtramos por categoria mostarando solo esa categoria */}
        {/* <Route path='/item/:iditem' element={<ItemDetailContainer/>} /> */} {/* Este detak se tiene que hacer en la clase 7 */}
        <Route />
      </Routes>
      {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS ABAJO DE TODO */} 
      <Footer/>   
    </BrowserRouter>
  );
}



