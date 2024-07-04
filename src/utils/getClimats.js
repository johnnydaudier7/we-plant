import getPlantsFromStorage from './getPlantsFromStorage'

function getClimats () {
  let climats = ['--Please choose one--']
  const plantsFromStorage = getPlantsFromStorage()
  plantsFromStorage.map((current) => {
    if (climats.indexOf(current.Climat) === -1) {
      climats = [...climats, current.Climat]
    }
  })
  return climats
}
export default getClimats
