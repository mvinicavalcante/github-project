import './styles.css'

import { useState } from 'react'

const Header = () => {

    function homeRedirect() {
        window.location.href = '/'
    }

    return(
        <div className="header">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width={50} onClick={homeRedirect}/>
            <p>Bem-vindo(a) ao repositório de Marcos Vinícius</p>
            <a href='/'>Voltar para a Home</a>
        </div>
    )

}

export default Header