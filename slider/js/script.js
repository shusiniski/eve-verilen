var mans= document.getElementsByClassName("icons")[0];
var prew = 0;
var olcu = 0;
var slideSize=document.getElementsByClassName("slide")[0].clientWidth
var slideLength=document.getElementsByClassName("slide").lenght
 mans.children[1].addEventListener("click",next);
// mans.children[0].addEventListener("click",previous);
for (i = 0; i<document.getElementsByClassName("slide").lenght; i++) {
	document.getElementsByClassName("slide")[i].innerHTML=i+1;
	document.getElementsByClassName("slide")[i].style.transition="all .5s linear"
	
}
 function next(){

 	prew++
 	// console.log(next)
	olcu-=slideSize+20;
	var salam =document.getElementsByClassName("slide")[prew-1].style.marginLeft=olcu+"px"
	// console.log("salam")

	if (prew>=slideLength-5) {
		prew=0;
		olcu=0;
		salam=document.getElementsByClassName("slide")[0].style.marginLeft=olcu+"px"
	}
}

function previous() {
	prew--
	olcu+=slideSize+20;
	var aleykum=document.getElementsByClassName("slide")[prew+1].style.marginLeft=olcu+"px" ;
	if (prew<=0) {
		prew=5;
		olcu=-(slideSize+20)*prew;
		salam=document.getElementsByClassName("slide")[0].style.marginLeft=olcu+"px"
	}

 }


