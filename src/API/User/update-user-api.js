const UpdateUser = async (
  firstName,
  lastName,
  birthday,
  address,
  gender,
  token,
) => {
  var url = `http://192.168.1.7:3069/user/update`;
  return await fetch(url, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': `bearer ${token}`,
    },
    body: JSON.stringify({
      fistName: firstName,
      lastName: lastName,
      birthday: null,
      address: address,
      gender: gender,
    }),
  }).then((response) => response.json());
};

export default UpdateUser;
