import isLocalStorageAvailable from "./isLocalStorageAvailable";

function getPlantsFromStorage() {
  
  if (!isLocalStorageAvailable()) {
    console.warn('localStorage is not available.');
    return [];
  }

  try {
    const storagePlants = localStorage.getItem('plants');
    return storagePlants ? JSON.parse(storagePlants) : [];
  } catch (err) {
    console.error('Error parsing plants from localStorage:', err);
    return [];
  }
}


export default getPlantsFromStorage;