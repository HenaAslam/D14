
let numberArray=[];
function selectNum(){
    let boxes=document.querySelectorAll('#numbers-area div');
     let randnum=Math.floor(Math.random()*77)
     const randomColor = Math.floor(Math.random()*16777215).toString(16);
     boxes[randnum].style.backgroundColor='#'+randomColor;
     boxes[randnum].classList.add('selected')
     console.log(boxes)
   // numberArray.push(randnum);
   /*let r=Math.floor(Math.random()*255);
   let g=Math.floor(Math.random()*255);
   let b=Math.floor(Math.random()*255);
   let newColor=rgb
    boxes[randnum].style.backgroundColor=newColor;*/
    //boxes[randnum].classList.add('selected')
   
}

function onLoadActions(){
   
   for(let num=1;num<77;num++){
        let currentNum=document.createElement('div');
        currentNum.innerText=num;
        currentNum.classList.add('box');
        //numberArray.push(currentNum.innerText);
        document.getElementById('numbers-area').appendChild(currentNum);
        
    }
    
    
}


window.onload=onLoadActions

