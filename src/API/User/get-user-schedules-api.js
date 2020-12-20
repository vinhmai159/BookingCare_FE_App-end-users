const getUserSchedules = async (token) => {
    var url = 'http://192.168.1.4:3069/booking/get-user-booking';
    return await fetch(url, {
      method: 'GET',
      headers: {
        'x-access-token': `bearer  ${token} `,
      },
    }).then((response) => response.json());
  };
  
  export default getUserSchedules;
  