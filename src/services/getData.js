export const getData = async (endpoint) => {
  const TOKEN = import.meta.env.VITE_REACT_APP_TOKEN

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`
    }
  }
  try {
    const response = await fetch(`https://api.themoviedb.org/3${endpoint}`, options)

    // Validate the status of the response
    if (response < 200 || response >= 300) {
      throw new Error(`Unexpected status code: ${response.status}`)
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.error('Failed to fetch data:', error)
    return null
  }
}
