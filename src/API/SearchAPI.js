const SearchAPI = (key) => {
  fetch(
    'http://192.168.1.31/WebService/app/search.php?key=' + key,
  ).then((response) => response.json());
};
export default SearchAPI;
