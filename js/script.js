const navItemDropDownList = document.querySelectorAll('.nav-item-dropdown');
const navTogglerOpen = document.querySelector('.navbar-toggler-open');
const navTogglerClose = document.querySelector('.navbar-toggler-close');
const navbarCollapseDiv = document.querySelector('.navbar-collapse');

navItemDropDownList.forEach((navItem) => {
    navItem.addEventListener('click', () => {
        // console.log(navItem);
        navItem.nextElementSibling.classList.toggle('show-dropdown');
        if(navItem.firstElementChild.className == "fas fa-chevron-down"){
            navItem.firstElementChild.className = "fas fa-chevron-up";
        } else if(navItem.firstElementChild.className == "fas fa-chevron-up"){
            navItem.firstElementChild.className = "fas fa-chevron-down";
        }
    });
});

navTogglerOpen.addEventListener('click', () =>{
    navbarCollapseDiv.classList.add('show-navbar');
});

navTogglerClose.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('show-navbar');
});

// animation and transition stopper
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});


//contact-us

//get data

const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");



//validate data
function validateForm(){

    clearMessages();
    let errorFlag = false;

    if(nameInput.value === ``){
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag =true;
    }

    if(email.value===``){
        errorNodes[1].innerText = "Invalid Email adress";
        email.classList.add("error-border");
        errorFlag =true;

    }

    if(message.value.lenght < 1){
        errorNodes[2].innerText = "Please enter message";
        message.classList.add("error-border");
        errorFlag =true;
    }
    if(!errorFlag){
        success.innerText = "Success!";
    }
}

    // clear error / succes messages
    function clearMessages(){
        for(let i = 0; i < errorNodes.length; i++){
            errorNodes[i].innerText ="";
        }
        nameInput.classList.remove("error-border");
        email.classList.remove("error-border");
        message.classList.remove("error-border");
    }
//    check if email is valid
    function emailIsValid (email){
        let pattern = /\S+@\.S+/;
               return pattern.test(email);
    }