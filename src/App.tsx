import { Route, Routes } from 'react-router-dom';
import Login from './componentes/Login';
import Search from './componentes/Search';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/search" element={ <Search /> } />
      <Route />
      <Route />
      <Route />
    </Routes>
  );
}

export default App;
