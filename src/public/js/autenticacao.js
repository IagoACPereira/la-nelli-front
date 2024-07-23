axios.get('http://localhost:3000/api', {
  headers: {
    authorization: localStorage.getItem('token'),
  },
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    location.href = '/login'
  })