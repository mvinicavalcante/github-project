import './styles.css'

const CardRepositorio = ({ name, desc, lang, index }) => {
    return(
        <div className='card'>
            <li className="item-repositorio" key={index}>
                <h1>{name}</h1>
                <h2>{desc === null ? 'Não há descrição' : desc}</h2>
                <h3>{lang === null ? 'Linguagem não reconhecida' :
                    <p>Linguagem: {lang}</p>} 
                </h3>
            </li>
        </div>
        
    )
}

export default CardRepositorio