/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

var images = [
    "/assets/img/index1.jpg",
    "/assets/img/index2.jpg",
    "/assets/img/index3.jpg"
  ];
  var currentIndex = 0;
  var masthead = document.querySelector('header.masthead');
  
  function changeBackground() {
    masthead.style.backgroundImage = 'url(' + images[currentIndex] + ')';
    currentIndex = (currentIndex + 1) % images.length;
  }
  
  // Initially set the background image
  changeBackground();
  
  // Change the background image every 10 seconds
  setInterval(changeBackground, 10000);



  // Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD_INROKwLo8GY9wqiyHORRqfnP5k8eBwY",
    authDomain: "frontend-99dda.firebaseapp.com",
    projectId: "frontend-99dda",
    storageBucket: "frontend-99dda.appspot.com",
    messagingSenderId: "744993888625",
    appId: "1:744993888625:web:c877701ee42e803af03ed0"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  var contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
  
    var formData = {
      name: name,
      email: email,
      phone: phone,
      message: message
    };
  
    // Get a reference to the Firestore service
    var db = firebase.firestore();
  
    // Push the form data to your Firebase Firestore Database
    db.collection('contactsTEST').add(formData)
    .then(() => {
      // Data saved successfully!
      successAlert.classList.remove('d-none');
      errorAlert.classList.add('d-none');
    })
    .catch((error) => {
      // The write failed...
      successAlert.classList.add('d-none');
      errorAlert.classList.remove('d-none');
    });
  });
  
  


  

  
