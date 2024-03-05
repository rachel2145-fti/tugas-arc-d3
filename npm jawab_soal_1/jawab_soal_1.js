const axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log('GET response:', response.data);
  })
  .catch(error => {
    console.error('GET error:', error);
  });

axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'Xiao',
    body: 'Genshin Impek',
    userId: 1
  })
  .then(response => {
    console.log('POST response:', response.data);
  })
  .catch(error => {
    console.error('POST error:', error);
  });
