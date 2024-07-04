const setPlantsInStorage = ( plants ) => {
    
    if(!Array.isArray(plants) || plants.length === 0){
        return 
    }
    try {
        const plantsToStore = JSON.stringify(plants.slice(0, 90));
        localStorage.setItem('plants', plantsToStore);
    } catch (error) {
        console.error('Error storing plants in localStorage:', error);
    }
}
export default setPlantsInStorage