import { useEffect } from 'react';
import api from '../../service/api';
export default function Index() {

  useEffect(() => {
    api.get('postagem')
      .then((response) => {
        console.log(response)
      })
      .catch((e) => console.log(e))
  }, [])



  return (
    <>
      <h1>Postagens</h1>
    </>
  )
}
