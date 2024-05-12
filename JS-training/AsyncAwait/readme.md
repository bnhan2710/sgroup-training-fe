## Start
- Nhớ lại đồng bộ và bất đồng bộ
- Đồng bộ: thực thi các dòng lệnh tuần tự từ trên xuống dưới
- Bất đồng bộ: 

## Async - Await
- Async - Await : viết code bất đồng bộ mà trông như đồng bộ
```js
async function myFunction() {
    await ...
    await ...
}
```

Lưu ý: phải bọc await bằng 1 function async

- mọi return trong async function đều trả về 1 promise

## Bắt lỗi trong async function
- try - catch
```js
async function myFunction() {
    try {
        await ...
        await ...
    } catch (error) {
        console.log(error);
    }
}
```
- catch sẽ bắt lỗi của tất cả các await trong async function