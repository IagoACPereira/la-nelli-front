axios.get('http://localhost:3000/api', {
  headers: {
    authorization: localStorage.getItem('token'),
  },
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    if (error.response.status === 401) {
      location.href = '/login';
    }

    console.log(error.response.data);
  })