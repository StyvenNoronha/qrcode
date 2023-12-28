const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button")

const qrbutton = document.querySelector("#qr-form input")

const codeimg = document.querySelector("#qr-code img")

function gerar(){
    const qrInput = qrbutton.value
    
    
    if(!qrInput) return;

    qrCodeBtn.innerText = "GERANDO CODÍGO.....";

    codeimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInput}`


    codeimg.addEventListener("load",()=>{
        container.classList.add("ativo");
        qrCodeBtn.innerText = "Codígo Criado";
    })
    

}


qrCodeBtn.addEventListener("click",()=>{
    gerar();
})

qrCodeBtn.addEventListener("keydown",(e)=>{
    if(e.code === "Enter"){
        gerar()
    }
})



