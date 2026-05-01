let btn1=document.getElementById("btn1");
//btn1.onclick = (e) => {
//    console.log(e);
//    console.log("btn1 was clicked");
//    btn1.innerHTML="Practice daily and learn daily";
//}
let box=document.getElementById("box")
box.onmouseover=() =>{
    console.log("lets watch what happen");
    box.innerHTML="There  is nothing inside the box"
}
const handler2=()=>{
    console.log("btn2 was clicked");
     btn1.innerHTML="Practice daily and learn daily";

}
btn1.addEventListener("click",() =>{
    console.log("btn1 was clicked");
     btn1.innerHTML="Practice daily and learn daily";

})
btn1.addEventListener("click",(handler2));

btn1.removeEventListener("click",(handler2));