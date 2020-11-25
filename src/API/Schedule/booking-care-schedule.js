const bookingCare = async (ID, token) => {
  var url = `http://192.168.1.7:3069/booking?scheduleId=${ID}`;
  return await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': `bearer ${token}`,
    },
  }).then((response) => response.json());
};

export default bookingCare;
