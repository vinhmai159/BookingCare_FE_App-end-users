const GetScheduleDoctor = async (IDdoctor) => {
  var url = 'http://192.168.1.4:3069/schedule/show-schedule';
  return await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      doctorId: IDdoctor,
    }),
  }).then((response) => response.json());
};

export default GetScheduleDoctor;
