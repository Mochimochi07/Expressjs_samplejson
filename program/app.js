const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
let pokemon = JSON.parse(fs.readFileSync('pokemon.json'));

app.get('/', (req, res) => {
  res.json(pokemon);
});

app.get('/pokemon/:id', (req, res) => {
  const pokemonId = req.params.id;
  const foundPokemon = pokemon.find(p => p.id == pokemonId);
  if (foundPokemon) {
    res.json(foundPokemon);
  } else {
    res.sendStatus(404);
  }
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
