"use strict";
// handling smooth scroll for the different sections
var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');
var scrollInterval;
for( let i=0 ;i<navMenuAnchorTags.length ;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
    event.preventDefault();
    var targetSectionId=this.textContent.trim().toLowerCase();
    var targetsection=document.getElementById(targetSectionId);  
     // scrollInterval=setInterval(scrollVertically,20,targetsection);
     scrollInterval=setInterval(function(){
        scrollVertically(targetsection);
     },20);
});
}
function scrollVertically(targetsection){
var coordinates=targetsection.getBoundingClientRect();
    	if(coordinates.top<=0){
    		clearInterval(scrollInterval);
    		return;
    	}
    	window.scrollBy(0,50);
}
// handling the auto fill scroll bars.
// 1.handling scroll event on window.
// 2.check that skills sections container is visible or not.
// 3.ensure that initial width of coloured skill divs is zero->initialised to 0 width value.
// 4.start animation on every skill->increase skill width from 0 to skill level at regular intervals.
// 5.store skill level->HTML with the help of data attribute.
var skillsContainer=document.getElementById('skills-container');
var progressBars=document.querySelectorAll('.skills-progress > div');
window.addEventListener('scroll',checkScroll);
function checkScroll(){
	var coordinates=skillsContainer.getBoundingClientRect();
	if(coordinates.top<window.innerHeight){
		console.log("skills container visible");
		// fillBars();
	}
}
// function fillBars(){

// }
// function initialseBars()
// {
// 	for(let bar of progressBars)
// 	{
// 		bar.style.width=0 + '%';
// 	}
// }
// initialseBars();
// window.addEventListener('scroll',checkScroll);
// var animationDone=false;
// function fillBars(){
// 	for(let bar of progressBars){
// 		let targetWidth=bar.getAttribute('data-bar-value');
//         let currentWidth=0; 
// 		let interval=setInterval(function(){
// 			if(currentWidth>=targetWidth){
// 				clearInterval(interval);
// 	   			return;
// 			}
// 			currentWidth++;
// 			bar.style.width=currentWidth +'%';
// 		},5);
// 	}
// }
// function checkScroll(){
// 	// check where skills cntainer is visible or not
// 	var coordinates=skillsContainer.getBoundingClientRect();
// 	if(!animationDone && coordinates.top<=window.innerHeight){
// 		animationDone=true;
// 		console.log("skills sec");
// 		fillBars();
// 	}
// 	else if(coordinates.top>window.innerHeight){
// 		animationDone=false;
// 		initialiseBars();
// 	}
// }


