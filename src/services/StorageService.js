export default {
  setData(key, value) {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
  },

  getData(key) {
    const data = localStorage.getItem(key);
    try {
      return JSON.parse(data);
    } catch (e) {
      return null;
    }
  }
}
