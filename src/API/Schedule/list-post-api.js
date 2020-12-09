const GetListPost = async (token) => {
  var url = `http://192.168.1.4:3069/article`;
  return await fetch(url).then((response) => response.json());
};

export default GetListPost;
