let card = document.querySelector(".cardContainer");

function rend() {
  pokemons.map((item) => {
    card.innerHTML += `<div class="card"><div class="pokemonImg"><img src=${item.img} class="pokemonImg"/></div><hr/><div class="textContainer"><div class="one"><h3>Pokemons</h3><h4>${item.type[0]}</h4></div><div class="two"><h3 class="weight">${item.weight}</h3><h3 class="height">${item.height}</h3></div></div></div>`;
  });
}

document.querySelector(".btn").addEventListener("click", () => {
  let randImg = Math.floor(Math.random() * 8);
  let type = document.querySelector(".type");
  let weight = document.querySelector(".weight");
  let height = document.querySelector(".height");
  card.innerHTML = null;
  pokemons.unshift({
    img: `http://www.serebii.net/pokemongo/pokemon/00${randImg}.png`,
    type: [type.value],
    weight: weight.value + " kg",
    height: height.value + " m",
  });
  rend();
  type.value = null;
  weight.value = null;
  height.value = null;
});

rend();
