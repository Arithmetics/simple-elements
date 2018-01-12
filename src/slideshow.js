function slideshowFunctions(){
   const slideshows = document.querySelectorAll('.slideshow');
   slideshows.forEach(function(slideshow){
     const previousButton = slideshow.getElementsByClassName('previous')[0];
     const nextButton = slideshow.getElementsByClassName('next')[0];
     const images = slideshow.getElementsByClassName('slideshow-image');
     const selectorsDiv = slideshow.querySelector('.image-selectors');
     let imageNumber = 0;
     images[0].classList.toggle('current-image');
     for(let i=0;i<images.length;i++){
       let selector = document.createElement('button')
       selector.classList.add('selector');
       selector.dataset.id = i;
       selector.addEventListener('click', function(e){
         images[imageNumber].classList.toggle('current-image');
         imageNumber = e.target.dataset.id;
         images[imageNumber].classList.toggle('current-image');
         clearSelectorButtons();
         highlightSelectorButton(imageNumber);
         resetTimer();
       })
       selectorsDiv.appendChild(selector);
     }
     clearSelectorButtons();
     highlightSelectorButton(imageNumber);
     let timetime = setInterval(nextImage, 5000);


     nextButton.addEventListener('click', function(e){
       nextImage();
     })

     previousButton.addEventListener('click', function(e){
       previousImage();
     })

     function clearSelectorButtons(){
       const selectorButtons = selectorsDiv.children
       for (let i=0;i<selectorButtons.length;i++){
         selectorButtons[i].classList.remove('selected');
       }
     }

     function highlightSelectorButton(id){
       const selectorButtons = selectorsDiv.children
       selectorButtons[imageNumber].classList.add('selected');
     }

     function nextImage(){
       images[imageNumber].classList.toggle('current-image');
       if(imageNumber<images.length-1){
         imageNumber++;
       } else {
         imageNumber = 0;
       }
       images[imageNumber].classList.toggle('current-image');
       clearSelectorButtons();
       highlightSelectorButton(imageNumber);
       resetTimer();
     }

     function previousImage(){
       images[imageNumber].classList.toggle('current-image');
       if(imageNumber==0){
         imageNumber = images.length - 1
       } else {
         imageNumber--;
       }
       images[imageNumber].classList.toggle('current-image');
       clearSelectorButtons();
       highlightSelectorButton(imageNumber);
       resetTimer();
     }

     function resetTimer(){
       clearInterval(timetime);
       timetime = setInterval(nextImage, 5000);
     }


   })


}



export { slideshowFunctions }
