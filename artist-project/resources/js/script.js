"use strict";

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
    /*MUSIC BACKGROUND*/
    let musicNav = document.getElementById('music-nav');
    musicNav.addEventListener('mouseover', function(){
        if(!window.location.href.includes('music.html')) {
            document.body.style.backgroundImage = "url('/artist-project/resources/images/music-nav-image.png')";
        }
    });

    musicNav.addEventListener('mouseout', () => {
        if(!window.location.href.includes('music.html')) {
            document.body.style.backgroundImage = "url('/artist-project/resources/images/background.png')";
        }
    });

    /*VIDEO BACKGROUND*/
    let videoNav = document.getElementById('video-nav');
    videoNav.addEventListener('mouseover', function(){
        if(!window.location.href.includes('videos.html')) {
            document.body.style.backgroundImage = "url('/artist-project/resources/images/video-nav-image.png')";
        }
    });

    videoNav.addEventListener('mouseout', () => {
        if(!window.location.href.includes('videos.html')) {
            document.body.style.backgroundImage = "url('/artist-project/resources/images/background.png')";
        }
    });


    /*TOUR BACKGROUND*/
    let tourNav = document.getElementById('tour-nav');
    tourNav.addEventListener('mouseover', function(){
        if(!window.location.href.includes('tour.html')) {
            document.body.style.backgroundImage = "url('/artist-project/resources/images/tour-nav-image.png')";
        }
        });

    tourNav.addEventListener('mouseout', () => {
        if(!window.location.href.includes('tour.html')) {
            document.body.style.backgroundImage = "url('/artist-project/resources/images/background.png')";
        }
        });



    /*CONTACT BACKGROUND*/
    let contactNav = document.getElementById('contact-nav');
    contactNav.addEventListener('mouseover', function(){
        if(!window.location.href.includes('contact.html')) {
            document.body.style.backgroundImage = "url('/artist-project/resources/images/contact-nav-image.png')";
        }
        });

    contactNav.addEventListener('mouseout', () => {
        if(!window.location.href.includes('contact.html')) {
            document.body.style.backgroundImage = "url('/artist-project/resources/images/background.png')";
        }
        });
    
    
    /*SCROLL EFFEKT*/
    const images = document.querySelectorAll('img');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('img-visible');
            } else {
                entry.target.classList.remove('img-visible');
            }
        });
    }, {
        threshold: 0.5
    });
    images.forEach(img => {
        observer.observe(img);
    });
});