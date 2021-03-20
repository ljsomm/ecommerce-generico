let c

$(document).ready(()=>{
    if(localStorage.getItem("contagem")!= null){
        c= localStorage.getItem("contagem")
    }
    else{
        c=0
    }
    document.getElementById("contador-carrinho").innerHTML = c
    $(window).on("load", ()=>{
        $(".load-page").hide()
    })
})


function contar (){
    c++
    localStorage.setItem("contagem", c)
    document.getElementById("contador-carrinho").innerHTML=c
}