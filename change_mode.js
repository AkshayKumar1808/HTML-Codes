var bt=document.getElementById("btn");
var body=document.querySelector("body");
let currentmode="light";
    bt.addEventListener("click",()=>{
    
    if(currentmode==="light")
    {
        currentmode="dark" 
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else
    {
        currentmode="light"
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currentmode);
});