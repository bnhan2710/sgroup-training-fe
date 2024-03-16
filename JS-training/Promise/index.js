function fetchDataFromAPI(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  
  // Sử dụng hàm fetchDataFromAPI để gọi API
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  fetchDataFromAPI(apiUrl)
    .then(data => {
      console.log('Dữ liệu từ API:', data);
      // Xử lý dữ liệu ở đây
    })
    .catch(error => {
      console.error('Lỗi khi gọi API:', error);
      // Xử lý lỗi ở đây
    });
  