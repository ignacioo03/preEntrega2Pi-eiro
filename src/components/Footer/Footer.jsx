import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
              <p>Nos encontramos en Bv San Juan 280 de Lun a Sab de 8:00hrs a 18:00hrs</p>
        <p>Redes Sociales</p>
        <div class="redes">
            <a href="https://www.facebook.com/?locale=es_LA" target="_blank">
                <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
                <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://twitter.com/?lang=es" target="_blank">
                <i class="fa-brands fa-x-twitter"></i>
            </a>
        </div>
    </div>
  )
}

export default Footer
