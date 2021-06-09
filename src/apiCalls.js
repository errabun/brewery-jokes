export const fetchBreweries = (zip) => {
  return fetch(`https://api.openbrewerydb.org/breweries?by_postal=${zip}`)
    .then(response => response.json())
}

export const fetchJoke = () => {
  return fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
      'User-Agent': 'Brew Jokes (https://github.com/errabun/brewery-jokes)' 
    }
  })
    .then(response => response.json())
}
