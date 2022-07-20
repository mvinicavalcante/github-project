import { useEffect, useState } from "react"
import { FaCaretDown } from 'react-icons/fa'

import api from '../../services/api'

import './styles.css'

import CardRepositorio from "../../components/CardRepositorio"

const Options = () => {

    const [busca, setBusca] = useState('')
    const [filtros, setFiltros] = useState(false)
    const [repositories, setRepositories] = useState([])

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

    function isMostrarEstrelas(){
        window.location.href = '/stars'
    }

    function isMostrarIssues(){
        window.location.href = '/issues'
    }

    function search (e) {
        alert(busca)
    }

    return(
        <>
            <div className="order-by">   
                <p>Mostrar por :  <a href="/">ordem alfabética </a> • <a href="#">commit mais recente</a></p>
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
                    <input className="inputSearch" placeholder="Buscar repositório" onChange={(e) => setBusca(e.target.value)}/>
                    <button className="buscar-btn" onClick={search}>Buscar</button>
                </div>
            </div>
        </>
    )
}

export default Options