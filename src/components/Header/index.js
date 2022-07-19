import './styles.css'

import { useState } from 'react'

const Header = () => {

    const [busca, setBusca] = useState()

    function buscar() {
        console.log(busca)
    }

    return(
        <div className="header">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width={50}/>
        </div>
    )

}

export default Header