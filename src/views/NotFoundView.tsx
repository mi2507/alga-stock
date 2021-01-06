import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundView = () => {
  return <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    minHeight: '100vh'
  }}>
    <h1 style={{
      color: 'blueviolet',
      fontWeight: 900
    }}>404</h1>
    <p>Não encontrado</p>
    <Link to="/" style={{
      color: 'blueviolet',
      textDecoration: 'none',
      fontSize: 16,
      marginTop: 16
    }}>
      Voltar para a Home
    </Link>
  </div>
}

export default NotFoundView