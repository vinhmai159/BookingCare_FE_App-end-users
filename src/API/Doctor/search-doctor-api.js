const GetListDoctorSearch = async (keyWord, method) => {
  if (method === 'name') {
    console.log('handle');
    var url = `http://192.168.1.7:3069/doctor/?name=${keyWord}`;
    return await fetch(url).then((response) => response.json());
  } else if (method === 'expertise') {
    console.log('expertise2');
    var url = `http://192.168.1.7:3069/doctor/?expertise=${keyWord}`;
    return await fetch(url).then((response) => response.json());
  } else {
    console.log('hospital');
    var url = `http://192.168.1.7:3069/doctor/?hospital=${keyWord}`;
    return await fetch(url).then((response) => response.json());
  }
};

export default GetListDoctorSearch;
