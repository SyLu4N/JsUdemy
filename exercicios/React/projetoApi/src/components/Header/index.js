import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';
import { Nav } from './styled';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const nomeStored = useSelector((state) => state.auth.user.nome);
  const emailStored = useSelector((state) => state.auth.user.email);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/');
  };

  let open = true;

  const handleUser = (e) => {
    e.preventDefault();
    const perfil = document.querySelector('.perfil');

    if (open) {
      perfil.setAttribute('class', 'perfil flex');
      open = false;
    } else {
      perfil.setAttribute('class', 'perfil none');
      open = true;
    }
  };

  return (
    <Nav>
      <Link to="/" className="logo nav">
        MySchool
      </Link>

      {id ? () : ()}

      <Link to="" className="white nav">
        <FaUserAlt size={22} onClick={handleUser} />
      </Link>

      <div className="perfil none">
        <div className="hr">
          <p>
            <FaUserAlt size={18} />
          </p>
          <p>{nomeStored}</p>
        </div>

        <div>
          <Link to="/register" className="pPerfil">
            Meu Perfil
          </Link>
        </div>

        <div>
          <Link to="/logout" className="pPerfil">
            Sair
          </Link>
        </div>
      </div>
    </Nav>
  );
}
