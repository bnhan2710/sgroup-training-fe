const getNewData = async () => {
const data = await fetch(`https://jsonplaceholder.org/posts?fbclid=IwAR08h-5pNQaXhFvfgZxcceF2LHjiuL4T1MvR-lpAFai1d2mNeuhp421pWz8/`)
 return data.json()
}

getNewData().then(function(res) {
    console.log(res)
    let container = document.getElementById("container")
    const childs = res.map(function(item) {
        return `
        <div class="article--item">
            <button class="remove" onclick="removeElement(this.parentNode)">X</button>
            <img class="img" src="${item.image}" alt="">
            <img class="thumbnail" src="${item.thumbnail}" alt="">
            <h2>${item.title}</h2>
            <p class="limited-after">${item.content}</p>
            <button class="read-more-btn" onclick="toggleText(this, this.previousElementSibling)">read more</button>
            <h5> BY: ${item.slug}</h5>
            <h5> published at: ${item.publishedAt}</h5>
            <h5> updated at: ${item.updatedAt}</h5>
        </div>
        `
    });
    container.innerHTML = childs.join("")

}).catch(function(err){
    console.log("ERROR", err)
}).finally(function() {
    console.log("FINALY")
})

function toggleText(but, content) {
    if (but.innerText === "read more") {
        but.innerText = "read less"
        content.classList.remove("limited-after")
    } else {
        but.innerText = "read more"
        content.classList.add("limited-after")
    }
}

function removeElement(article) {
        article.parentNode.removeChild(article);
        // el.remove()
        console.log("article after remove:", document.getElementById("container").childElementCount)
}