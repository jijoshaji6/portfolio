const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close'),
    navLink = document.querySelectorAll('.nav__link');


if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
};
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
};

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
};
navLink.forEach(n => n.addEventListener('click', linkAction));


// ScrollUp


const shadowHeader=()=>{
    const header=document.getElementById('header');
    this.scrollY >=50? header.classList.add('shadow-header')
                        :header.classList.remove('shadow-header');
};
window.addEventListener('scroll',shadowHeader);

// Send Email 


const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_xyhf6lo','template_yp3cc55','#contact-form','e3r_AreEcMdE__krU')
    .then(()=>{
        contactMessage.textContent = 'Message Sent Successfully'

        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset();
    }, () =>{
        contactMessage.textContent = 'Message Not Sent (service error)'
    })
}
contactForm.addEventListener('submit',sendEmail);

// Scroll-up

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll',scrollUp);

// Scroll section active link

const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollDown = window.scrollY;
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive);


// Theme

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
const getCurrentTheme = () => document.body.classList.contains(darkTheme)? 'dark':'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme)? 'ri-moon-line':'ri-sun-line';

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark'? 'add':'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line'? 'add':'remove'](iconTheme);
};

themeButton.addEventListener('click', ()=> {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme',getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

// Scroll reveal
