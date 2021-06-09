export const fetchBreweries = (zip) => {
  return fetch(`https://api.openbrewerydb.org/breweries?by_postal=${zip}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Couldn\'t load any breweries, please try again!'
      } else {
        return response.json()
      }
    })
}

export const fetchJoke = () => {
  return fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
      'User-Agent': 'Brew Jokes (https://github.com/errabun/brewery-jokes)'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Couldn\'t find any jokes right now, please try again!')
      } else {
        return response.json()
      }
    })
}
