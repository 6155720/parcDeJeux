import './App.css';
import { Fragment } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';
import PartieUN from './Composants/PartieUN';
import Accueil from './Composants/Accueil';
import PartieTROIS from './Composants/PartieTROIS';
import Roche from './Composants/Roche';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <h1 style={{ textAlign: "center", fontFamily: "initial", color: "antiquewhite" }}>Parc de Jeux</h1>

        <Menu size='large' pointing color='brown'>
          <Menu.Item as={NavLink} to="/">Jeux :</Menu.Item>
          <Menu.Item as={NavLink} to="/p1">Les dés</Menu.Item>
          <Menu.Item as={NavLink} to="/p3"> TicTacToc</Menu.Item>
          <Menu.Item as={NavLink} to="/rps"> RochePapierCiseau</Menu.Item>

        </Menu>
        <Routes>
          <Route path="/" element={<Accueil />} ></Route>
          <Route path="/p1" element={<PartieUN />} />
          <Route path="/p3" element={<PartieTROIS />} />
          <Route path="/rps" element={<Roche />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App;
