import React from 'react'
import { Link } from 'react-router-dom'


export const Register = () => {
  return (
    <div className='auth'>
      <h1>Registre-se</h1>
      <form>
        <input required type="text" placeholder='nome do usúario'/>
        <input required type="email" placeholder='e-mail'/>
        <input required type="password" placeholder='senha'/>
        <button>Registrar</button>
        <span>Você tem uma conta? 
          <Link to="/login"> Login</Link>
        </span>

      </form>
      
    </div>
  )
}