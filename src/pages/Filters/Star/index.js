import api from "../../../services/api"

import { useState, useEffect } from "react"

import CardRepositorio from "../../../components/CardRepositorio"
import Options from "../../../components/Options"

import './styles.css'

const Star = () => {

    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        api.get('/repos').then(({data}) => {
            setRepositories(data)
        });

        console.log(repositories)

    }, ['']);

    return(
        <div className="star">
            <Options />

            <ul>
                {repositories.map((data, index) => {
                    if(data.stargazers_count >= 1){
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

export default Star