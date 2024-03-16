const data = fetch('https://jsonplaceholder.org/posts?fbclid=IwAR08h-5pNQaXhFvfgZxcceF2LHjiuL4T1MvR-lpAFai1d2mNeuhp421pWz8')
data.then(function(res) {
    console.log(res)
    return res.json()
}).then(function(res) {
    console.log(res)
    let container = document.getElementById("container")
    const childs = res.map(function(item) {
        return `
        <div class="article--item">
        <img class = "img" src="${item.image}" alt="">
        <img class = "thumbnail" src="${item.thumbnail}" alt="">
        <h2>${item.title}</h2>
        <p>${item.content}</p>
        <h5> BY: ${item.slug}</h5>
        <h5> published at: ${item.publishedAt}</h5>
        <h5> updated at: ${item.updatedAt}</h5>
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