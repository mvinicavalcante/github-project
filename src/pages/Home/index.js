import { useEffect, useState } from "react"
import api from '../../services/api'

import './styles.css'

const Home = () => {

    const [busca, setBusca] = useState('')
    const [repositories, setRepositories] = useState([])
    
    useEffect(() => {
        api.get('/repos').then(({data}) => {
            setRepositories(data)
        });
        console.log(repositories)

    }, ['']);

    function ordemAlfabetica(){
        
    }

    function search (e) {
        alert('Pegando')
    }

    return(
        <div>
            <div className="searcj">
                <input className="inputSearch" placeholder="Buscar repositório" onChange={(e) => setBusca(e.target.value)}/>
                <button onClick={search}>Buscar</button>
            </div>
            <ul>
                {repositories.map((data, index) => {
                    return(
                        <li key={index}>
                            <h1>{data.name}</h1>
                            <h3>{data.language}</h3>
                        </li>
                        
                    )
                })}
            </ul>
            <button >Ordem alfabetica</button>
        </div>
    )
}

export default Home