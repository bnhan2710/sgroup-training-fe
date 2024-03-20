let contacts = [
    {
        name: "Nhan Bao",
        phone: "0935398214",
        mail: "nhanbao@gmail.com",
    },
    {
        name: "Van Cuong",
        phone: "213409020",
        mail: "vancuong@gmail.com",
    },
    {
        name: "Chi Bao",
        phone: "01982309809",
        mail: "chibao@gmail.com",
    },

]
if (localStorage.getItem("contacts")) {
    contacts = JSON.parse(localStorage.getItem("contacts"))
}

let cardsContainer = document.getElementById("cards")
let createBtn = document.getElementById("create-btn")
let popupContainer = document.querySelector(".popup-container")
let popupMain = document.querySelector(".popup-main")
console.log(createBtn)
//Open Popup
createBtn.addEventListener("click", function() {
    let popupContainer = document.querySelector(".popup-container")
    popupContainer.classList.toggle("active")
    console.log(popupContainer)
})
//close Popup
popupContainer.addEventListener("click", function() {
    popupContainer.classList.toggle("active")
    document.getElementById("fiedl-name").value = ""
    document.getElementById("fiedl-phone").value = ""
    document.getElementById("fiedl-mail").value = ""
})
//prevent close
// popupMain.addEventListener("click", function(event) {
//     event.stopPropagation()
// })

function OnCreate() {
    let name = document.getElementById("fiedl-name").value
    let phone = document.getElementById("fiedl-phone").value
    let mail = document.getElementById("fiedl-mail").value
    console.log(name, phone, mail)
    contacts.push({
        name: name,
        phone: phone,
        mail: mail
    })
    localStorage.setItem("contacts", JSON.stringify(contacts))
    render()
}
// function OnRemove(element){
//     element.remove();
//     localStorage.removeItem("contacts", JSON.stringify(contacts))
// }
function deleteCard(index){
    console.log(index)
    contacts.splice(index, 1)
    localStorage.setItem("contacts", JSON.stringify(contacts))
    render()
}

function render() {
    let element = contacts.map((item,index) =>{
        return `
        <div class="card">
        <div class="card-item">
            <img src="./assets/icon/contact.svg" alt="">
            <span id="name">${item.name}</span>
        </div>
        <div class="card-item">
            <img src="./assets/icon/phone.svg" alt="">
            <span id="phone">${item.phone}</span>
        </div>
        <div class="card-item">
            <img src="./assets/icon/mail.svg" alt="">
            <span id = "mail">${item.mail}</span>
        </div>
        <div class="action"></div>
        <img id="edit" src="./assets/icon/edit.svg" alt="">
        <img id="delete" onclick = "deleteCard(${index})" src="./assets/icon/bin.svg" alt="">
    </div>
</div>
</div>`
    })
    cardsContainer.innerHTML = element.join()
}

render()