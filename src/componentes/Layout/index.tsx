import { Outlet } from 'react-router-dom';
import Header from '../Header';
import './layout.css';

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
