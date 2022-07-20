import { useEffect, useState } from "react"
import { FaCaretDown } from 'react-icons/fa'

import api from '../../services/api'

import './styles.css'

import CardRepositorio from "../../components/CardRepositorio"
import Options from "../../components/Options"

const Home = () => {

    const [busca, setBusca] = useState('')
    const [filtros, setFiltros] = useState(false)
    const [repositories, setRepositories] = useState([])
    
    useEffect(() => {
        api.get('/repos').then(({data}) => {
            setRepositories(data)
        });

        console.log(repositories)

    }, ['']);

    function toggleFiltersList() {
        if(filtros === false){
            setFiltros(true)
        }
        else{
            setFiltros(false)
        }
    }

    function isMostrarArquivados(){
        window.location.href = '/archiveds'
    }

    function search (e) {
        alert(busca)
    }

    return(
        <div className="home">
            
            <Options />

            <ul>
                {repositories.map((data, index) => {
                        return(
                            <CardRepositorio 
                                index={index} 
                                name={data.name} 
                                desc={data.description}
                                lang={data.language}
                            />
                        )
                    })
                }                
            </ul>
        </div>
    )
}

export default Home