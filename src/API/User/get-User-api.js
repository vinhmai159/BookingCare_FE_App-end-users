const GetUserAPI = async (token) => {
  var url = 'http://192.168.1.4:3069/user/get-user-by-id';
  return await fetch(url, {
    method: 'GET',
    headers: {
      'x-access-token': `bearer  ${token} `,
    },
  }).then((response) => response.json());
};

export default GetUserAPI;
