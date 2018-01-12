function dropMenuFunctions(){
   const dropMenus = document.querySelectorAll('.dropdown');
   dropMenus.forEach(function(dropMenu){
     const dropButton = dropMenu.getElementsByClassName('drop-hover')[0];
     const hiddenMenu = dropMenu.getElementsByClassName('dropdown-content')[0];
     dropButton.addEventListener('click', function(e){
       hiddenMenu.classList.toggle('visible');
     })
   })
}

export { dropMenuFunctions }
