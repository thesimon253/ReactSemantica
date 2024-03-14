import { useState } from 'react'
import '../css/Navbar.css'

function Navbar() {
    const [count, setCount] = useState(0)
  
    return (
      <>
        <header>
          <nav>
          <a href="index.html" class="logo"><b>MEDIUM</b></a>
            <ul>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Mas Información </a></li>
                <li><a href="#">Iniciar Sesión</a></li>
                <li><a href="#">Registrarse</a></li>
             </ul>
          </nav>
        </header>
      </>
    )
  }
  
  export default Navbar
  