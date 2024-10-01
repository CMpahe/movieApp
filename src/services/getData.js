export const getData = ({ movieEndpoint }) => {
  const TOKEN = process.env.REACT_APP_TOKEN

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`
    }
  }

  return fetch(`https://api.themoviedb.org/3${movieEndpoint}`, options)
    .then(response => response.json())
    .catch(err => console.error(err))
}
