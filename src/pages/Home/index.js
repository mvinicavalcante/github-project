import { useEffect, useState } from "react"
import { FaCaretDown, FaSearch } from 'react-icons/fa'

import api from '../../services/api'

import './styles.css'

import CardRepositorio from "../../components/CardRepositorio"

const Home = () => {

    const [busca, setBusca] = useState('')
    const [filtros, setFiltros] = useState(false)

    const [repositories, setRepositories] = useState([])

    const [commitsRecentes, setCommitsRecentes] = useState(false)
    
    useEffect(() => {
        try{
            api.get('/repos').then(({data}) => {
                setRepositories(data)
            });
        }

        catch(error){
            console.log(error)
        }

    }, ['']);

    function isMostrarArquivados(){window.location.href = '/archiveds'}

    function isMostrarEstrelas(){window.location.href = '/stars' }

    function isMostrarIssues(){window.location.href = '/issues'}

    function isMostrarArquivados(){window.location.href = '/archiveds'}


    function toggleFiltersList() {
        if(filtros === false){
            setFiltros(true)
        }
        else{
            setFiltros(false)
        }
    }


    return(
        <div className="home">
            
            <div className="order-by">   
                <p>Mostrar por :  <a href="/">ordem alfabética</a> • <a href="#" onClick={ e => {setCommitsRecentes(!e)}}> commit mais recente</a></p>
            </div>
            
            <div className="options">
                <div className="filters">
                    <button className="filtrar-btn" onClick={toggleFiltersList}>Filtrar <FaCaretDown /></button>
                    {filtros &&
                        <div className="filters-list" key='filters'>
                            <ul className="filters-ul">
                                <li className="filters-li" onClick={isMostrarArquivados} key='filter1'>Arquivados</li>
                                <li className="filters-li" onClick={isMostrarEstrelas} key='filter2'>Com estrelas</li>
                                <li className="filters-li" onClick={isMostrarIssues} key='filter3'>Com issues</li>
                            </ul>
                        </div>
                    }
                </div>
                <div className="search">
                    <input className="inputSearch" placeholder="Buscar repositório" onChange={e => {setBusca(e.target.value)}}/>
                    <button className="buscar-btn"><FaSearch /></button>
                </div>
            </div>

            <ul>
                {commitsRecentes ? 
                    <p>Pqp</p>

                :

                repositories.filter((data) => {
                    if (busca == ""){
                        return data
                    } else if(data.name.toLowerCase().includes(busca.toLowerCase())){
                        return data
                    }
                }).map((data, index) => {
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