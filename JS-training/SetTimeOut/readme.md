# settimeout & setinterval
- Tác dụng settimeout: thực thi một hàm sau một khoảng thời gian nhất định
- Tác dụng setinterval: thực thi một hàm sau một khoảng thời gian nhất định và lặp lại
- tự động chạy
- callback trong này
- cleartimeout
  + tác dụng: hủy bỏ một hàm đã được đặt lịch trước đó
ví dụ
```js
var timeoutId = setTimeout(function() {
    console.log('1');
}, 1000);
clearTimeout(timeoutId);
```
## settimeout
```js
setTimeout(function() {
    console.log('1');
}, 1000);
```
## setinterval

tác dụng: thực thi một hàm sau một khoảng thời gian nhất định và lặp lại
```js
setInterval(function() {
    console.log('1');
}, 1000);
```
# Đồng bộ - bất đồng bộ
```js
// Đồng bộ
console.log('1');
console.log('2');

// Bất đồng bộ
console.log('3');
setTimeout(funtion() {
    console.log('4');
}, 5000);
console.log('5');
```
# link
http://latentflip.com/loupe