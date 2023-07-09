import React from 'react'
import Logo from "../img/logo.png"
import { Link } from 'react-router-dom'

export const Navebar = () => {
  return (
    <div className="navebar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="links">
          <Link className='link' to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className='link' to="/?cat=series">
            <h6>SÉRIES</h6>
          </Link>
          <Link className='link' to="/?cat=filmes">
            <h6>FILMES</h6>
          </Link>
          <Link className='link' to="/?cat=musica">
            <h6>MÚSICA</h6>
          </Link>
          <Link className='link' to="/?cat=moda">
            <h6>MODA</h6>
          </Link>
          <Link className='link' to="/?cat=cultura">
            <h6>CULTURA</h6>
          </Link>

          <span>Fernanda</span>
          <span>Sair</span>
          <span className="write">
            <Link className='link' to="/write" >Escrever</Link>
          </span>

        </div>

      </div>
    </div>
  )
}
