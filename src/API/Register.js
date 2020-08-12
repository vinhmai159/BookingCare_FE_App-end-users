const Register = (email, name, password) => {
  fetch('http://192.168.1.31/WebService/app/register.php', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      name: name,
      password: password,
    }),
  });
  //   .then((response) => response.text());
};
export default Register;
