let tempo = 0
let erros = 0
let tentativasMax
let intervaloTempo
let intervaloCaos
let needleIndex
let tamanho
let hardcore = true
let caos = true

function iniciarJogo(){

    tamanho = parseInt(document.getElementById("dificuldade").value)

    let game = document.getElementById("game")
    let resultado = document.getElementById("resultado")

    game.innerHTML = ""
    resultado.innerHTML = ""

    erros = 0
    tempo = 0

    definirTentativas()

    document.getElementById("erros").innerText = erros
    document.getElementById("tempo").innerText = tempo

    needleIndex = Math.floor(Math.random()*tamanho)

    iniciarTimer()
    criarFenos()

    if(caos) iniciarCaos()

}

function definirTentativas(){

    if(tamanho == 20) tentativasMax = 8
    if(tamanho == 35) tentativasMax = 10
    if(tamanho == 50) tentativasMax = 12

}

function criarFenos(){

    let game = document.getElementById("game")

    for(let i=0;i<tamanho;i++){

        let feno = document.createElement("div")

        feno.classList.add("feno")
        feno.innerText="🌾"

        if(hardcore){

            feno.style.position="relative"

            setInterval(()=>{
                moverFeno(feno)
            },2000)

        }

        feno.onclick = function(){

            if(i === needleIndex){

                vencer(feno,i)

            }else{

                errar(feno)

            }

        }

        game.appendChild(feno)

    }

}

function iniciarCaos(){

    intervaloCaos = setInterval(()=>{

        let game = document.getElementById("game")
        let fenos = Array.from(game.children)

        fenos.sort(()=>Math.random()-0.5)

        game.innerHTML=""

        fenos.forEach(f => game.appendChild(f))

    },5000)

}

function moverFeno(feno){

    let x = Math.random()*20-10
    let y = Math.random()*20-10

    feno.style.transform = `translate(${x}px, ${y}px)`

}

function errar(feno){

    erros++

    document.getElementById("erros").innerText = erros

    feno.style.opacity=0.3

    if(erros >= tentativasMax){

        perder()

    }

}

function vencer(feno,index){

    clearInterval(intervaloTempo)
    clearInterval(intervaloCaos)

    feno.innerText="🪡"

    document.getElementById("resultado").innerHTML =
    "🎉 Você encontrou a agulha na posição "+index

}

function perder(){

    clearInterval(intervaloTempo)
    clearInterval(intervaloCaos)

    document.getElementById("resultado").innerHTML =
    "💀 Você usou todas as tentativas!"

}

function iniciarTimer(){

    intervaloTempo = setInterval(()=>{

        tempo++
        document.getElementById("tempo").innerText = tempo

    },1000)

}

iniciarJogo()