import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/userAPI';
import Loading from '../Loading';

function Login() {
  const [login, setLogin] = useState('');
  const [disabled, setDisebled] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
    if (event.target.value.length >= 3) {
      setDisebled(false);
    } else {
      setDisebled(true);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    const create = await createUser({ name: login });
    if (create === 'OK') {
      navigate('/search');
      setLoading(false);
    }
  };

  if (loading) {
    return (<Loading />);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="login">Insira seu nome</label>
      <input
        id="login"
        type="text"
        name="login"
        value={ login }
        onChange={ handleChange }
        data-testid="login-name-input"
      />
      <button
        disabled={ disabled }
        data-testid="login-submit-button"
      >
        Entrar

      </button>
    </form>
  );
}

export default Login;
