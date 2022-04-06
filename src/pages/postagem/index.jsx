import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/context';
import api from '../../service/api';
export default function Index() {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();
  const { authenticated } = useContext(Context)

  useEffect(() => {
    if(authenticated){
      api.get('postagem')
        .then((response) => {
          setPost(response.data)
        })
        .catch((e) => console.log(e))
    } else {
      navigate('/login')
    }
  }, [])



  return (
    <>
      <h1>Postagens</h1>
      <br/>
      <br/>
      {post && post.map( e =>{
        <p>{e}</p>
      })}
      <Link to='/'>Home</Link>
    </>
  )
}
