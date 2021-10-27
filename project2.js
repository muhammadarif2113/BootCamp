const modalCtn = document.querySelector(".modal-ctn"); 
const close = document.getElementById("close"); 
const lotions = document.querySelectorAll(".lotion");

var imgModal = document.querySelector(".modal-image")//.getAttribute('src'); 
var titleModal = document.querySelector(".modal-title");
var nameModal = document.querySelector(".modal-name");
var detailsModal = document.querySelector(".lotion-details");
var dealsModal = document.querySelector(".modal-deal"); 
var priceModal = document.querySelector(".modal-price"); 
var typeModal = document.querySelector(".modal-type"); 

var btn = document.getElementById("footer-button"); 



lotions.forEach((list, index) => {

    var img = list.querySelector(".single-lotion").getAttribute('src'); 
    var title = list.querySelector(".title").innerHTML;
    var name = list.querySelector(".name").innerHTML;
    var details = list.querySelector(".lotion-details").innerHTML;
    var deals = list.querySelector(".deal").innerHTML; 
    var price = list.querySelector(".price").innerHTML;
    var type = list.querySelector(".type").innerHTML; 


    const bagButton = list.querySelector(".bag-Button"); 

    bagButton.addEventListener('click', () => {
        modalCtn.classList.add('show'); 
        imgModal.setAttribute('src', img);
        titleModal.textContent = title;
        nameModal.textContent = name; 
        priceModal.textContent = price; 
        typeModal.textContent = type; 
        dealsModal.textContent = deals; 
        detailsModal.textContent = details;
    }); 
}); 

close.addEventListener('click', () => {
    modalCtn.classList.remove('show'); 
}); 

btn.addEventListener('click', () => {
    modalCtn.classList.remove('show'); 
})

