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
      document.addEventListener('click', function click(event) {
        const teste = document.querySelector('.test');
        const el = event.target;
        const path = teste.firstChild;

        if (el !== perfil && el !== teste && el !== path) {
          closeNav();
          document.removeEventListener('click', click);
        }
      });
    } else {
      closeNav();
    }
  };

  const closeNav = () => {
    const perfil = document.querySelector('.perfil');
    perfil.setAttribute('class', 'perfil none');
    open = true;
  };

  return (
    <Nav>
      <Link to="/" className="logo nav">
        MySchool
      </Link>

      {isLoggedIn ? (
        <>
          <Link to="" className="nav teste">
            <FaUserAlt size={22} onClick={handleUser} className="test" />
          </Link>

          <div className="perfil none">
            <div className="hr">
              <p>
                <FaUserAlt size={18} />
              </p>
              <p>{nomeStored}</p>
            </div>

            <div>
              <Link to="/register" className="pPerfil" onClick={closeNav}>
                Meu Perfil
              </Link>
            </div>

            <div>
              <Link
                to="/logout"
                className="pPerfil"
                onClick={(closeNav, handleLogout)}
              >
                Sair
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div>
          <Link to="/sobre" className="nav noLoggindIn">
            Sobre
          </Link>
          <Link to="/login" className="nav noLoggindIn">
            Logar
          </Link>
        </div>
      )}
    </Nav>
  );
}
