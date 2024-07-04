
export const getPrice = (plant) => {
  let price
  if (plant.Climat === 'Tropical') price = 10
  else if (plant.Climat === 'Subtropical') price = 12
  else if (plant.Climat === 'Tropical humid') price = 15
  else price = 18

  return price
}
