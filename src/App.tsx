import { Route, Routes } from 'react-router-dom';
import Login from './componentes/Login';
import Search from './componentes/Search';
import Album from './componentes/Album';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/search" element={ <Search /> } />
      <Route path="/album/:id" element={ <Album /> } />
      <Route />
      <Route />
    </Routes>
  );
}

export default App;
