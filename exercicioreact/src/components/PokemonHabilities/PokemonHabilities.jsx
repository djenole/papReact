import react, { useState, useEffect, useContext} from "react";
import PokemonList from '../PokemonList/PokemonList';

const pokemonHabilities = (selectPokemon) => {

    


    return `https://pokeapi.co/api/v2/ability/${pokemon}`

}

function pokemon() {
    const [pokemon, setPokemon] = useState("")


    useEffect(() => {
        fetch(pokemonHabilities(selectPokemon))
            .then((response) => response.json())//transformando o retorno json em dados.
            .then((data) => {
                setPokemon(data.results);
            });
    }, [selectPokemon]); 
}