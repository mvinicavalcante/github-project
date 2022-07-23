import api from "../../../services/api"

import { useState, useEffect } from "react"
import { FaCaretDown, FaSearch } from 'react-icons/fa'

import CardRepositorio from "../../../components/CardRepositorio"

import './styles.css'

const Star = () => {

    const [busca, setBusca] = useState('')
    const [filtros, setFiltros] = useState(false)
    const [repositories, setRepositories] = useState([])
    const [commitsRecentes, setCommitsRecentes] = useState(false)
    const [arrayRecentes, setArrayRecentes] = useState([])
    
    useEffect(() => {
        try{
            api.get('/repos').then(({data}) => {
                setRepositories(data)
            });
            api.get('/repos?sort=updated_at').then(({data}) => {
                setArrayRecentes(data)
            });          
        }
        catch(error){
            console.log(error)
        }

    }, []);

    const isMostrarArquivados = () => window.location.href = '/archiveds'

    const isMostrarEstrelas = () => window.location.href = '/stars' 
    
    const isMostrarIssues = () => window.location.href = '/issues'

    const toggleFiltersList = () => {
        if(filtros === false){
            setFiltros(true)
        }
        else{
            setFiltros(false)
        }
    }

    return(
        <div className="star">
            
            <div className="order-by">   
                <p>Mostrar por :  <label onClick={e => {setCommitsRecentes(!e)}}>ordem alfabética</label> • <label  onClick={e => {setCommitsRecentes(e)}}> commit mais recente</label></p>
            </div>
            
            <div className="options" key="options">
                <div className="filters" key="filters">
                    <button className="filtrar-btn" onClick={toggleFiltersList}>Filtrar <FaCaretDown /></button>
                    {filtros &&
                    <>
                        <div className="filters-list" key='filters'>
                            <ul className="filters-ul">
                                <li className="filters-li" onClick={isMostrarArquivados} key='filter1'>Arquivados</li>
                                <li className="filters-li" onClick={isMostrarEstrelas} key='filter2'>Com estrelas</li>
                                <li className="filters-li" onClick={isMostrarIssues} key='filter3'>Com issues</li>
                            </ul>
                        </div>

                        <div className="filters-list-mobile" key="filters-mobile">
                            <ul className="filters-ul-mobile" key="filters-mobile-ul">
                                <li className="filters-li-mobile" onClick={isMostrarArquivados} key='filter1-mobile'>Arquivados</li>
                                <li className="filters-li-mobile" onClick={isMostrarEstrelas} key='filter2-mobile'>Com estrelas</li>
                                <li className="filters-li-mobile" onClick={isMostrarIssues} key='filter3-mobile'>Com issues</li>
                                <li className="filters-li-mobile close" onClick={() => {setFiltros(false)}} key='filter3'>FECHAR</li>
                            </ul>
                        </div>
                    </>
                        
                    }
                </div>
                <div className="search">
                    <input className="inputSearch" placeholder="Buscar repositório" onChange={e => {setBusca(e.target.value)}}/>
                    <button className="buscar-btn"><FaSearch /></button>
                </div>
            </div>


            <ul>
                {commitsRecentes ?
                    arrayRecentes.filter((data) => {
                        if (busca === ""){
                            return data
                        } 
                        else if(data.name.toLowerCase().includes(busca.toLowerCase())){
                            return data
                        }
                        return this
                    }).map((data) => {
                        if(data.stargazers_count >= 1){
                            return(
                                <CardRepositorio 
                                    name={data.name}
                                    desc={data.description}
                                    index={data.id}
                                    lang={data.language}
                                />
                            )
                        }
                    })

                :
                
                repositories.filter((data) => {
                    if (busca === ""){
                        return data
                    } 
                    else if(data.name.toLowerCase().includes(busca.toLowerCase())){
                        return data
                    }
                    return this
                }).map((data) => {
                    if(data.stargazers_count >= 1){
                        return(
                            <CardRepositorio 
                                name={data.name}
                                desc={data.description}
                                index={data.id}
                                lang={data.language}
                            />
                        )
                    }
                    })
                }
            </ul>
        </div>
    )
}


export default Star