import Loader from './pages/misc/Loader';
import Home from './pages/Home';
import Contact from './pages/Contact';
//import Work from './pages/Work';
import About from './pages/About';
//import WeDo from './pages/WeDo';
import Error404 from './pages/error/Error404'
import Construction from './pages/error/Construction';
import Login from './pages/Login'
import PrivateRoute from './pages/private/Private';
//import HomeUser from './pages/private/HomeUser';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
const Rotas = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Loader />} />
      <Route path="/pt-br" element={<Home />} />
      <Route path="/pt-br/oque-fazemos" element={<Construction />} />
      <Route path="/pt-br/blog" element={<Construction />} />
      <Route path="/pt-br/contato" element={<Contact />} />
      <Route path="/pt-br/nosso-trabalho" element={<Construction />} />
      <Route path="/pt-br/sobre" element={<About />} />
      <Route path="/pt-br/login" element={<Login />} />
      <Route path="pt-br/user" element={<PrivateRoute />}>
        <Route path="pt-br/user/profile" element={<Construction/>}/>
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  </Router>
);

export default Rotas;