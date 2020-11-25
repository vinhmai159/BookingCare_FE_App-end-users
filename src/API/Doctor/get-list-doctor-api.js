const GetListDoctorAPI = async () => {
  var url = 'http://192.168.1.7:3069/doctor';
  return await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
};

export default GetListDoctorAPI;
