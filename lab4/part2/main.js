// <!--
// Name: Justin Buss
// File: index.html
// Date Created: April 4, 2025
// Date last modified: April 4, 2025
// Description: A image display that you can swap between
// -->


//Helpful -> https://www.w3schools.com/jsref/event_onclick.asp
 
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg'];

/* Declaring the alternative text for each image file */
const altText = {'pic1.jpg':'Closeup of a human eye',
                 'pic2.jpg':'Photo of a wavy stone painting',
                 'pic3.jpg':'Photo of purple flowers and white flowers',
                 'pic4.jpg':'photo of ancient egyptian drawings'
}
/* Looping through images */

for(let image of imageArray){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + image);
    newImage.setAttribute('alt', altText[image]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', () =>{
        displayedImage.src = 'images/' + image;
        displayedImage.alt = altText[image];
    })
}
/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', (toggleDark));

function toggleDark(){
    if(btn.getAttribute('class')==='dark'){
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    }else{
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        }
}