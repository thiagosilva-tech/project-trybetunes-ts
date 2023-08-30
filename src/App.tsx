import { Route, Routes } from 'react-router-dom';
import Login from './componentes/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route />
      <Route />
      <Route />
      <Route />
    </Routes>
  );
}

export default App;
