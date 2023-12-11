import { Route, Routes } from 'react-router-dom';
import Login from './componentes/Login';
import Search from './componentes/Search';
import Album from './componentes/Album';
import Layout from './componentes/Layout';
import Favorites from './componentes/Favorites';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route element={ <Layout /> }>
        <Route path="/search" element={ <Search /> } />
        <Route path="/album/:id" element={ <Album /> } />
        <Route path="/favorites" element={ <Favorites /> } />
      </Route>
    </Routes>
  );
}

export default App;
