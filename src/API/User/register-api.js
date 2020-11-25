const registerAPI = async (email, firstName, lastName, password) => {
  var url = 'http://192.168.1.7:3069/user/create/';
  return await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fistName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    }),
  }).then((response) => response.json());
};

export default registerAPI;
