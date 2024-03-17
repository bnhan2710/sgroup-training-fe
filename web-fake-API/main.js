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
            <img class="img" src="${item.image}" alt="">
            <img class="thumbnail" src="${item.thumbnail}" alt="">
            <h2>${item.title}</h2>
            <p class="limited-before">${item.content}</p>
            <p class="limited-after">${item.content}</p>
            <button class="read-more-btn" onclick="toggleText(this, this.previousElementSibling)">Read More</button>
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
function toggleText(button, content) {
    let text = document.getElementsByClassName("limited-before");
    if (content.style.display === "none") {
        content.style.display = "block";  
        text.style.display = "none";
        button.textContent = "Read Less";
    } else {
        content.style.display = "none";
        text.style.display = "none";
        button.textContent = "Read More";
    }

}