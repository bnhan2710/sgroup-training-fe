const data = fetch('https://jsonplaceholder.typicode.com/todos/')
data.then(function(res) {
    console.log(res)
    return res.json()
}).then(function(res) {
    console.log(res)
    let container = document.getElementById("container")
    const childs = res.map(function(item) {
        return `
        <div class="article">
            <h1>${item.title}</h1>
            <p>${item.id}</p>
        </div>
        `
    });
    console.log(container)
    container.innerHTML = childs.join("")
}).catch(function(err){
    console.log("loi", err)
}).finally(function() {
    console.log("finally")
})
// console.log(data)
// setTimeout(function() {
//     data = 2
// }, 1000);

// new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         data = 2
//         resolve("123123")
//     },1000)
//   })
//   .then(function(res) {
//       console.log(data)
//       return new Promise(function(resolve){
//         resolve("res")
//       })
// }).catch(function(res) {

// })