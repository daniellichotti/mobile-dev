import { useEffect, useState } from "react";

export function App() {
  const [pokemonData, setPokemonData] = useState({});
  const [cont, setCont] = useState(1);

  useEffect(() => {
    //busca na api com ID 1 (Bulbasaur) da API
    fetch(`https://pokeapi.co/api/v2/pokemon/${cont}/`)
      .then((response) => {
        return response.json();
      })
      .then((pokemon) => {
        setPokemonData({
          nome: pokemon.name,
          id: pokemon.id,
          imagem: pokemon.sprites.front_shiny,
          altura: pokemon.height,
          peso: pokemon.weight,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, [cont]);

  function anteriorPokemon() {
    if (cont === 1) {
      alert("Primeiro pokemon");
    } else {
      setCont(cont - 1);
    }
  }

  function proximoPokemon() {
    setCont(cont + 1);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>
          {pokemonData.nome}
        </p>
        <p>(#{pokemonData.id})</p>
      </div>
      <img
        style={{
          padding: "0",
          height: "200px",
          width: "200px",
        }}
        src={pokemonData.imagem}
        alt=""
      />
      <div style={{ display: "flex", gap: "10px" }}>
        <p>{pokemonData.altura * 10}cm</p>
        <p>{pokemonData.peso / 10}kg</p>
      </div>
      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <button
          onClick={anteriorPokemon}
          style={{
            padding: "10px",
            fontSize: "15px",
            border: "0",
            borderRadius: "5px",
          }}
        >
          Anterior
        </button>
        <button
          onClick={proximoPokemon}
          style={{
            padding: "10px",
            fontSize: "15px",
            border: "0",
            borderRadius: "5px",
          }}
        >
          Próximo
        </button>
      </div>
    </div>
  );
}
