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
        phone: "019829809",
        mail: "chibao@gmail.com",
    },
    {
        name: "Duc Kien",
        phone: "091124114",
        mail: "duckien@gmail.com",
    },
    {
        name:"Thanh Tien",
        phone: "023983214",
        mail: "thanhtien@gmail.com",
    },
    {
        name: "Tien Dat",
        phone: "012441214",
        mail: "nhanbao@gmail.com",
    },
    {
        name: "Van Toan",
        phone: "093124114",
        mail: "vanToan@gmail.com",
    },
    {
        name: "Quang",
        phone: "023423414",
        mail: "quang@gmail.com",
    }
    

]
if (localStorage.getItem("contacts")) {
    contacts = JSON.parse(localStorage.getItem("contacts"))
}

let cardsContainer = document.getElementById("cards")
let createBtn = document.getElementById("create-btn")
let popupContainer = document.querySelector(".popup-container")
let popupMain = document.querySelector(".popup-main")
let checkbox = document.querySelector(".check-delete")
let editBox = document.querySelector(".edit-container")
console.log(checkbox)
console.log(createBtn)
console.log(editBox)
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
// prevent close
popupMain.addEventListener("click", function(event) {
    event.stopPropagation()
})

function OnCreate() {
    if(
        document.getElementById("fiedl-name").value == "" ||  document.getElementById("fiedl-phone").value == "" ||   document.getElementById("fiedl-mail").value == ""){
        alert("Vui long nhap day du thong tin")
        return
    }
    else{
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
    popupContainer.classList.toggle("active")
}
}
// function OnRemove(element){
//     element.remove();
//     localStorage.removeItem("contacts", JSON.stringify(contacts))
// }
// Lặp qua tất cả các thẻ card và thêm sự kiện cho nút xóa
let deleteButtons = document.querySelectorAll("#cards .card #delete");
deleteButtons.forEach((button, index) => {
    button.addEventListener("click", function() {
        deleteCard(index);
    });
});


function deleteCard(index) {
    let cardToDelete = document.querySelectorAll("#cards .card")[index];
    let confirmDelete = document.querySelector(".check-delete");
    let confirmBtn = confirmDelete.querySelector("#confirm");
    let cancelBtn = confirmDelete.querySelector(".cancel");

    confirmDelete.classList.add("active--delete");

    confirmBtn.addEventListener("click", function() {
        contacts.splice(index, 1)
        localStorage.setItem("contacts", JSON.stringify(contacts))
        render()
        confirmDelete.classList.remove("active--delete");
    });

    cancelBtn.addEventListener("click", function() {
        confirmDelete.classList.remove("active--delete");
    });
}
function editCard(index){
    let editBox = document.querySelector(".edit-container")
    let Save = document.querySelector("#save")
    let Cancel = document.querySelector("#cancel-edit")
    editBox.classList.toggle("active")
    document.getElementById("edit-name").value = contacts[index].name
    document.getElementById("edit-phone").value = contacts[index].phone
    document.getElementById("edit-mail").value = contacts[index].mail
    Save.addEventListener("click", function(){
        contacts[index].name = document.getElementById("edit-name").value
        contacts[index].phone = document.getElementById("edit-phone").value
        contacts[index].mail = document.getElementById("edit-mail").value
        localStorage.setItem("contacts", JSON.stringify(contacts))
        render()
        editBox.classList.remove("active")
    })
    Cancel.addEventListener("click", function(){
        editBox.classList.remove("active")
    })
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
        <img id="edit" onclick = "editCard(${index})" src="./assets/icon/edit.svg" alt="">
        <img id="delete" onclick = "deleteCard(${index})" src="./assets/icon/bin.svg" alt="">
    </div>
</div>
</div>`
    })
    cardsContainer.innerHTML = element.join()
}
render()
