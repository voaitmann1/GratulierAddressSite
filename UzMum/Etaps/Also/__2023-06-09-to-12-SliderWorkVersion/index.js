let items=document.querySelectorAll("section");
//removeAttribute
let activeItemN;
let activeItem, classList, item;
let slidesCount=items.length;
let dtms=1000;
let timerId=null;
//
//
function getActiveSlide(){
	for(let i=1; i<=slidesCount; i++){
		item=items[i-1];
		listOfClasses=item.classList;
		for(classItem of listOfClasses){
			if(classItem=='sectionVisible'){
				activeItemN=i;
				break;
			}
		}
	}
	item=items[activeItemN-1];
	return item;
}
//
//
//const timeoutSwitcher=document.querySelector("Checkbox");//ne cog't so
const timeoutSwitcher=document.getElementById("timeoutSwitcher");
if(timeoutSwitcher==null)alert("No! Checkbox not found");
let timeoutSwitchedOn=timeoutSwitcher.checked;
timeoutSwitcher.addEventListener("click", ()=>{
	timeoutSwitchedOn=timeoutSwitcher.checked;
	stopAutoScroll();
	if(timeoutSwitchedOn){
		startAutoScroll(dtms);
	}
});
//
const buttonLeft=document.querySelector(".leftButton");
const buttonRight=document.querySelector(".rightButton");

buttonLeft.addEventListener("click", ()=>{
	changeSlide('prev')
})

buttonRight.addEventListener('click', ()=>{
	changeSlide('next')
})

function changeSlide(direction){
	activeItem=getActiveSlide();
	//activeItem.removeAttribute("sectionVisible");
	//activeItem.classList.pop();//so ne works
	activeItem.removeAttribute("class", "sectionVisible");
	activeItem.setAttribute("class", "sectionInvisible");
	//
	if(direction === 'next'){
		activeItemN++
		if(activeItemN > slidesCount){
			activeItemN=1;
		}
	}else if(direction === 'prev'){
		activeItemN--
		if(activeItemN <1){
			activeItemN=slidesCount
		}
	}
	activeItem=items[activeItemN-1];
	//activeItem.classList.pop();//so ne works
	activeItem.removeAttribute("class", "sectionVisible");
	//activeItem.classList.push("sectionVisible");
	activeItem.setAttribute("class", "sectionVisible");
}

function startAutoScroll(dtms){
	timerId=setInterval(changeSlide, dtms, 'next');
}

function stopAutoScroll(){
	clearTimeout(timerId);
}

const timeoutBtn=document.getElementById("setTimeoutBtn");
timeoutBtn.textContent="set timeout";
timeoutBtn.addEventListener("click", ()=>{
	alert("Current timeout value "+dtms+" milliseconds");
	txt=prompt("Input timeout in milliseconds");
	if(txt!=""){
		dtms=+txt;//prompt("Input timeout in milliseconds");
	}
	stopAutoScroll();
	if(timeoutSwitchedOn){
		startAutoScroll(dtms);
	}
});

startAutoScroll(dtms);

let M=[];
let line=[11, 12, 13, 14, 15];
//console.log(line);
M.push(line);
let QL=M.length, QC=line.length;

for(let i=1; i<=QC-1; i++){
	line=[];;
	for(let j=1; j<=QC; j++){
		//line[j-1]+=10;
		line.push((i+1)*10+j);
		
	}
	M.push(line);
	console.log(i+') Line: ',line,' M: ', M);
	QL=M.length;
}
for(let i=1; i<=QL; i++){
	M[i-1][i-1]=60+i;
}
console.log("MI:");
console.log(M);
//
for(let i=1; i<=QL-1; i++){
	ci=-M[i-1][i-1];
	for(let j=i+1; j<=QL; j++){
		cj=M[j-1][i-1];
		if(M[j-1][i-1]!=0){
			for(let k=i; k<=QC; k++){
				M[j-1][k-1]=M[j-1][k-1]*ci+M[i-1][k-1]*cj;
			}
			for(let k=1; k<=QC; k++){
				M[j-1][k-1]/=ci;
			}
		}
	}
}
console.log("MH:");
console.log(M);