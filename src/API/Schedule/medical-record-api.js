const MerdicalRecordAPI = async (token) => {
  var url = `http://192.168.1.4:3069/medical-record`;
  return await fetch(url, {
    method: 'GET',
    headers: {
      'x-access-token': `bearer ${token}`,
    },
  }).then((response) => response.json());
};

export default MerdicalRecordAPI;
