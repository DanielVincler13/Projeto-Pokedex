const main = document.querySelector("main");
const header = document.querySelector("header");
const bt = document.getElementById("b");

bt.addEventListener("click",function(){

    main.classList.toggle("modo-escuro")
    header.classList.toggle("modo-escuro")

    if(main.classList.contains("modo-escuro")){

        bt.setAttribute("src","./src/imagens/sun.png");
    
    }else{

        bt.setAttribute("src","./src/imagens/moon.png");

    }

})


