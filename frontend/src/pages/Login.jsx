import React from 'react'
import { Link } from 'react-router-dom'


export const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder='nome do usúario'/>
        <input type="password" placeholder='senha'/>
        <button>Login</button>
        <span>Você não tem conta? <Link to="/register">Registre-se</Link></span>

      </form>
      
    </div>
  )
}
