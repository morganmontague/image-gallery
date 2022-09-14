console.log('running')
const displayedImage = document.querySelector('.displayed-img')
const thumbBar = document.querySelector('.thumb-bar')

const imgArray = ["img/pic1.jpg", "img/pic2.jpg", "img/pic3.jpg", "img/pic4.jpg", "img/pic5.jpg"]
const altArray = ["close up of eye", "rocks", "flowers", "anibus","butterfly"];


for (let i = 0; i < imgArray.length; i++) {
    const newImage = document.createElement('img')
    newImage.setAttribute('src', imgArray[i])
    newImage.setAttribute('alt', altArray[i])
    thumbBar.appendChild(newImage) 
    
    newImage.addEventListener('click', e => {  
      displayedImage.src = e.target.src
      displayedImage.alt = e.target.alt
    });
  }
  
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

btn.addEventListener('click',() => {
if (btn.textContent === 'Darkens'){
    overlay.setAttribute('class', "overlay-light");
    btn.textContent = "Lightens";
    overlay.style.opacity = 0.5;  
} else if (btn.textContent === "Lightens") {
        overlay.setAttribute('class', 'overlay');
        btn.textContent = 'Darkens';
        overlay.style.opacity = 0;
}  else {
 btn.textContent = 'Broken'
}
}
)

