 let btn = document.querySelector(".btn");
 let card = document.querySelector(".card");
 let i = document.querySelector("i");
 let container = document.querySelector(".container-fluid");
 let btnjoin = document.querySelector(".btnjoin");
 let input = document.querySelector("input")


 btn.addEventListener("click", function(){
     degistir();

 })

 function degistir (){
     container.classList.add("blur")
     card.style.opacity = 2;
     card.style.transform = "tarnslateY(12rem)";


 }

 i.addEventListener("click", function(){
     degistir2();

 })

 function degistir2(){
    card.style.opacity = 0;
     card.style.transform = "translateY(0rem)";
     container.classList.remove("blur")
 }

 btnjoin.addEventListener("click",()=>{
     if(input.value==""){
         
     }
     else{
         input.at
     }
  })


