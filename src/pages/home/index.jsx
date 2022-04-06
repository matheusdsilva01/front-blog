import { Link } from 'react-router-dom'
export default function Index() {

  return (
    <>
      <h1>Home</h1>
      <Link to="/postagens">Postagens</Link>
      <br />
      <Link to="/login">login</Link>
      <br />
      <Link to="/cadastro">cadastro</Link>
    </>
  )
}
