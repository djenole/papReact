import React, {useState, useEffect} from "react";
import PokemonCard from "../components/PokemonList/PokemonCard";
import { useParams } from "react-router-dom";


function PokemonCardPage() {
  let { id } = useParams();
  let [pokemonInfo, setPokemonInfo] = useState();

  useEffect(() => {
      let pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/'+ id ;
          fetch(pokemonUrl)
          .then(response => response.json())
          .then(pokemonData => setPokemonInfo(pokemonData));
        
  }, [id])

  if(pokemonInfo) {
    let url = "https://pokeapi.co/api/v2/pokemon/" + id;
      return( 
        
          <div>
              <PokemonCard url={url} />
              
                <h3>Peso: {pokemonInfo.weight}</h3>
                <h3>XP: {pokemonInfo.base_experience}</h3>
          </div>)
  }else{
      return <>Loading...</>;
  }
}

export default PokemonCardPage;