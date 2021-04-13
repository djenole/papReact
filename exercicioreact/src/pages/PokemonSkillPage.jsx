import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";


function PokemonSkillPage() {
    let {id} = useParams();

    let [pokemonInfo, setPokemonInfo] = useState();

    useEffect(() => {
        const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/'+ id ;
            fetch(pokemonUrl)
            .then(response => response.json())
            .then(pokemonData => setPokemonInfo(pokemonData));

    }, [id])

    if(pokemonInfo) {
        return( 
            <div>
                <h1>{pokemonInfo.name}</h1>
                <h3>{pokemonInfo.weight}</h3>
            </div>)
    }else{
        return <>Loading...</>;
    }
}

export default PokemonSkillPage;