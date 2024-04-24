"use strict";

document.addEventListener('DOMContentLoaded', () => {
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










    let aboutNav = document.getElementById('about-nav');
    aboutNav.addEventListener('mouseover', function(){
        document.body.style.backgroundImage = "url('/artist-project/resources/images/about-nav-image.png')";
    });

    aboutNav.addEventListener('mouseout', () => {
        document.body.style.backgroundImage = "url('/artist-project/resources/images/background.png')";
    });
});