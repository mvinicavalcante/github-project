import api from "../../../services/api"

import { useState, useEffect } from "react"

import CardRepositorio from "../../../components/CardRepositorio"
import Options from "../../../components/Options"

import './styles.css'

const Archiveds = () => {

    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        api.get('/repos').then(({data}) => {
            setRepositories(data)
        });

        console.log(repositories)

    }, ['']);

    return(
        <div className="archiveds">
            <Options />
            <ul>
                {repositories.map((data, index) => {
                    if(data.archived === true){
                        return(
                            <CardRepositorio 
                                name={data.name}
                                desc={data.description}
                                key={index}
                                lang={data.language}
                            />
                        )
                    }
                })}
            </ul>
        </div>
    )
}

export default Archiveds