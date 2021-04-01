export function getCocktail(search) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
  return fetch(url)
    .then((r) => r.json())
    .then((d) => d)
}
