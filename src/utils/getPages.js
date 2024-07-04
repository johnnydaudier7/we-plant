import getPlantsFromStorage from './getPlantsFromStorage'

function getPages () {
  const pages = []
  const plantsPerPage = 15
  const plantsLength = getPlantsFromStorage().length

  for (let i = 1; i < Math.ceil(plantsLength / plantsPerPage); i++) {
    pages.push(i)
  }
  return pages
}
export default getPages
