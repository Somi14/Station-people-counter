//document.getElementById("count-el").innerText=9
/*let count=0;
console.log(count);
let myage=20;
console.log("my age is ", myage);
*/

/*let bonuspoints=50;
bonuspoints= bonuspoints+25;
bonuspoints= bonuspoints-25;
bonuspoints= bonuspoints+70;
console.log(bonuspoints);*/


//in javascript when you name the variables dont use dash, also prefer giving the variable
// name in camelcase(firstwordin samll and the fiest letter of seocnd word in capital)

let countEl=document.getElementById("count-el")//pass in arguments
//console.log(countEl);

let count=0;

function increment(){
    
    //console.log("button was clicked")
    count=count+1;
    countEl.innerHTML=count; //inner html is the text inside of the tags (0) in our case.
    //console.log("button clicked--> ",count)
}

function decrement()
{
    count=count-1;
    countEl.textContent=count;
    
}
//textcontent contains all the text contained by an element

//let saveEl=document.getElementById("save-btn");
let savedItem=document.getElementById("saved-items");

function save()
{  console.log(count);
   //saveEl.innerHTML=count;
   savedItem.textContent += " "+ count+ " -";
   count=0;
   countEl.innerHTML=count;
}
//textContent is better than innerText

