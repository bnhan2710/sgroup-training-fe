# Promise
  - Sync
  - Async
  - Lý thuyết, cách hoạt động
  - Thực hành

## Sync
```js
console.log('1');
console.log('2');
console.log('3');
```

## Async
```js
console.log('1');
setTimeout(function() {
    console.log('2');
}, 1000);
console.log('3');
```
### Có 3 cách để xử lý bất đồng bộ - callback, promise, async/await 
- Có 2 loại bất đồng bộ
 + Browser API/ Web API: setTimeout, setInterval, fetch, ajax, file reading, request, database, ...
 + Promises: các đối tượng js để thực hiện các tác vụ bất đồng bộ

### Callback hell
```js
setTimeout(function() {
    console.log('1');
		setTimeout(function() {
	    console.log('2');
			setTimeout(function() {
		    console.log('3');
		}, 1000);
	}, 1000);
}, 1000);
```
## Promise
- Promise ra đời để giải quyết callback hell
- nếu callback không gặp hell thì dùng callback vẫn ok
1. new Promise
2. Executor
3. pending / resolve / reject / 
// memory leak
```js
var promise = new Promise(
    // Executor
    function(resolve, reject) {
        // Logic
        // Thành công: resolve()
        // Thất bại: reject()
    }
);

- Ý nghĩa của các từ khóa
promise
    .then(function() {
        // success
    })
    .catch(function() {
        // fail
    })
    .finally(function() {
        // complete
    });
```
ví dụ khi resole / reject có và không có tham số
cách nhận biết catch trong promise (promise)

- tính chất chuỗi của promise
```js
promise
    .then(function() {
        // success
    })
    .then(function() {
        // success
    })
    .then(function() {
        // success
    })
    .catch(function() {
        // fail
    })
    .finally(function() {
        // complete
    });
```
- lưu ý: kết quả trả về của function đằng trước sẽ là tham số đầu vào của function đằng sau
 ->> đã giải quyết được bài toán callback hell

### return 1 promise trong .then
```js
promise
    .then(function() {
        // success
        return new Promise(function(resolve) {
           
        });
    })
    .then(function(data) {
        // success
        console.log(data);
    })
    .catch(function() {
        // fail
    })
    .finally(function() {
        // complete
    });
```
## Example - quay lại bài toán đồng bộ - bất đồng bộ
```js
function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

sleep(1000)
    .then(function() {
        console.log(1);
        return sleep(1000);
    })
    .then(function() {
        console.log(2);
        return sleep(1000);
    })
    .then(function() {
        console.log(3);
        return sleep(1000);
    });
```

## Promise all

ví dụ có 2 tác vụ độc lập, cần thực hiện song song
```js
var promise1 = new Promise(
    function(resolve) {
        setTimeout(function() {
            resolve([1]);
        }, 1000);
    }
);

var promise2 = new Promise(
    function(resolve) {
        setTimeout(function() {
            resolve([2, 3]);
        }, 2000);
    }
);

Promise.all([promise1, promise2])
    .then(function(result) {
        var result1 = result[0];
        var result2 = result[1];
        console.log(result1.concat(result2));
    });
```