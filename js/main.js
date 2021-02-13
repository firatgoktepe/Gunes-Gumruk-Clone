/** Main Slider **/
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 3000);

/**  Responsive Header **/
const navMenu = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navList = document.querySelector('.navbar-list');

    navbarToggler.addEventListener('click', () => {
        navList.classList.toggle('nav-active');
        navbarToggler.classList.toggle('toggle');
    });
};

navMenu();

/** Contact Form Validation **/

function validate(){
    if(document.valForm.name.value == ""){
        alert('Adınızı yazınız');
        return false;
    }
    if(document.valForm.email.value == ""){
        alert('Mail adresinizi yazınız');
        return false;
    }
    if(document.valForm.subject.value == ""){
        alert('Konu başlığını yazınız');
        return false;
    }
    if(document.valForm.message.value == ""){
        alert('Mesajınızı yazınız');
        return false;
    }
    if(document.valForm.submit.value == ""){
        alert('Mesajınız başarıyla gönderildi');
        return false;
    }
}

