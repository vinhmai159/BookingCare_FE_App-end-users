const LoginAPI = async (email, password) => {
  var url = 'http://192.168.1.7:3069/user/login';
  console.log('login');
  return await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: 'vinh@gmail.com',
      password: 'abc123!@#QWE',
    }),
  }).then((response) => response.json());
};

export default LoginAPI;
