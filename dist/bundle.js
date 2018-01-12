/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dropMenu_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slideshow_js__ = __webpack_require__(2);




Object(__WEBPACK_IMPORTED_MODULE_0__dropMenu_js__["a" /* dropMenuFunctions */])();
Object(__WEBPACK_IMPORTED_MODULE_1__slideshow_js__["a" /* slideshowFunctions */])();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dropMenuFunctions; });
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




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slideshowFunctions; });
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






/***/ })
/******/ ]);