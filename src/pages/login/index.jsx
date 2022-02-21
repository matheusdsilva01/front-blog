import { useContext, useState } from 'react';
import { Context } from '../../context/context';
import api from '../../service/api';
import visibility from '../../assets/icons/visibility_black_24dp.svg';
import offVisibility from '../../assets/icons/visibility_off_black_24dp.svg';



export default function Index() {
  const { handleLogin } = useContext(Context)
  let [user, setUser] = useState({
    usuario: '',
    senha: ''
  })

  /**
   * Função que salva os dados passados pelo usuario para login
   * @param {event} {name} - identificação do campo 
   * @param {event} {value} - valor do campo
   */
  const fillUser = (event) => {
    let { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  /**
   * Função faz a troca da visibilidade da senha
   */
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

  /**
   * Efetua o login do usuario
   * @param {event} onSubmit captura o evento de submit do form
   */
  const loginUsuario = (event) => {
    event.preventDefault()
    if (user.usuario.length < 5 || user.senha.length < 8) {
      alert('preencha os campos corretamente!')
    } else {
      api.post('/usuario/logar', user).then((response) => {
        if (response.status === 200) {
          handleLogin(true, response.data.token)
        }
      })
        .catch((e) => {
          handleLogin(false, undefined)
          console.log(e)
        })
    }
  }


  return (
    <form onSubmit={loginUsuario}>
      <input type="text" name='usuario' placeholder='usuario' onChange={fillUser} />
      <div className='container-password'>
        <input id='password' type="password" name='senha' placeholder='senha' onChange={fillUser} />
        <a onClick={passwordIsVisible}>
          <img id='visible' src={visibility} alt="" />
          <img id='offVisible' src={offVisibility} alt="" />
        </a>
      </div>
      <button>Logar</button>
    </form>
  )
}
