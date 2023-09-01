import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Loading from '../Loading';
import { getUser } from '../../services/userAPI';
import { UserType } from '../../types';
import UserProfile from '../User';

function Header() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      const response = await getUser();
      setUser(response);
      setLoading(false);
    }
    fetchUser();
  }, []);

  return (
    <header data-testid="header-component" className="header">
      <div className="container-login">
        <h1 className="tituto">Trybe Tunes</h1>
        {loading ? <Loading /> : (user && <UserProfile userInfo={ user } />)}
      </div>
      <div className="container-navlink">
        <NavLink
          to="/search"
          data-testid="link-to-search"
          className="navlink"
        >
          Search
        </NavLink>
        <NavLink
          to="/favorites"
          data-testid="link-to-favorites"
          className="navlink"
        >
          Favorites
        </NavLink>
        <NavLink
          to="/profile"
          data-testid="link-to-profile"
          className="navlink"
        >
          Profile
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
