function isLocalStorageAvailable() {
    const testKey = 'test';
  
    try {
      localStorage.setItem(testKey, 'testValue');
      localStorage.removeItem(testKey);
      return true;
    } catch (error) {
      return false;
    }
}
export default isLocalStorageAvailable
