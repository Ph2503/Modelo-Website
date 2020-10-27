var foto1 = document.getElementById('mae1')
var divfoto = document.getElementById('foto')
var video = document.getElementById('video')
video.addEventListener('mouseenter', entrar)
video.addEventListener('mouseout', sair)
video.addEventListener('click', clicar)
function entrar(){
    video.innerHTML = `<strong>Ver  vídeo</strong>`
    video.style.backgroundColor = 'pink'
}
function sair() {
    video.innerHTML = `Ver  vídeo`
    video.style.backgroundColor = ' rgba(133, 14, 123, 0.513)'
}
function clicar() {
    video.style.backgroundColor = 'green'
    video.innerHTML = `<strong>Carregando...</strong>`
    window.location.href = "https://youtu.be/rDkFnExN8NQ";
}