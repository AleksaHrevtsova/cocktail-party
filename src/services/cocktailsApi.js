import axios from 'axios'

export function getCocktail(search) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.drinks)
    .catch((error) => error)
}
