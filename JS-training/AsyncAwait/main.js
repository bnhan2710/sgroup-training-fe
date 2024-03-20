const getNewData  = async () => {
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if(response && response.status !== 200){
    throw new Error('Wrong with status code' + response.status);
  }
  let data = await response.json();
  return data;
}
getNewData()
.then(data => {
  console.log(data)
})
  .catch(err => {
    console.log('check error')
  })