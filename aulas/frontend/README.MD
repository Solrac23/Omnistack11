
import React from 'react'

function Header ({ children }){
    // E possivel fazer a desestruturacao usando { Propriedade } para pegar somente a propriedade desejada.
  return (
    <header>
      {/* Qualquer propriedade no htmml tem que ser executada com chaves. */}
      <h1>{children}</h1>
    </header>
  )
}

export default Header

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState } from 'react'
import Header from './Header'

// JSX(Javascript XML) quando um arquivo html e escrito dentro de um arquivo javascript.

function App() {
  // useState e um Array[valor, funcaoQueAtualiza]
  // let counter = 0
  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1) 
  }

  return (
    // Propriedade title 
    // <Header title="Semana Omnistack" />
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Adicionar</button>
    </div>
  );
}

export default App;