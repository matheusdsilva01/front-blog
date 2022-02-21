import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import visibility from '../../assets/icons/visibility_black_24dp.svg';
import offVisibility from '../../assets/icons/visibility_off_black_24dp.svg';
import api from '../../service/api';
import './style.css';


export default function Index() {
  let navigate = useNavigate();
  
  let [user, setUser] = useState({
    nome: '',
    usuario: '',
    senha: ''
  })

  const fillUser = (event) => {
    let { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  const passwordIsVisible = () => {
    let input = document.getElementById('password');
    let visible = document.getElementById('visible');
    let offVisible = document.getElementById('offVisible');
    if (input.type === 'password') {
      input.type = 'text'
      visible.style.display = 'none'
      offVisible.style.display = 'flex'
    }
    else {
      input.type = 'password'
      visible.style.display = 'flex'
      offVisible.style.display = 'none'
    }
  }

  const cadastroUsuario = (event) => {
    event.preventDefault();
    if (user.nome.length < 5 || user.usuario.length < 5 || user.senha.length < 8) {
      alert('preencha os campos corretamente!')
    }else{
      api.post('usuario/cadastrar', user)
      .then((response) => navigate('/'))
      .catch((e) => console.log(e))
    }
  }
  
  return (
    <>
      <form onSubmit={cadastroUsuario}>
        <input type="text" name='nome' placeholder='nome' onChange={fillUser} />
        <input type="text" name='usuario' placeholder='usuario' onChange={fillUser} />
        <div className='container-password'>
          <input id='password' type="password" name='senha' placeholder='senha' onChange={fillUser} />
          <a onClick={passwordIsVisible}>
            <img id='visible' src={visibility} alt="" />
            <img id='offVisible' src={offVisibility} alt="" />
          </a>
        </div>
        <button >Cadastrar usuario</button>
      </form>
    </>
  )
}
