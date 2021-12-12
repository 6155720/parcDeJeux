import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import PartieUN from './Composants/PartieUN';
import Accueil from './Composants/Accueil';
import PartieDEUX from './Composants/PartieDEUX';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <h5>excercices</h5>
        <Menu>
          <Menu.Item as={NavLink} to="/">accueil</Menu.Item>
          <Menu.Item as={NavLink} to="/p1">Parti 1</Menu.Item>
          <Menu.Item as={NavLink} to="/p2">Parti 2</Menu.Item>
          
        </Menu>
        <Routes>
          <Route path="/" element={<Accueil />} ></Route>
          <Route path="/p1" element={<PartieUN />} />
          <Route path="/p2" element={<PartieDEUX />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App;
