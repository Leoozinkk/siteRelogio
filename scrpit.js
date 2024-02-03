function relógio(){
    var horas = new Date().getHours() //pegar as horas baseado no sistema
    var minutos = new Date().getMinutes() //pegar os minutos baseado no sistema
    var segundos = new Date().getSeconds() //pegar os minutos baseado no sistema
    
    var mostrarHorario = document.querySelector('p#horario') //lugar selecionado para aparecer o horario 
    
    if(horas == 1){ //mostrar os valores dos horários no site e alternar para singular quando o valor for "1" (para evitar estar escrito: "1 horas/minutos/segundos")
        mostrarHorario.innerHTML = `${horas} hora, ${minutos} minutos e ${segundos} segundos`
    }else if(minutos == 1){
        mostrarHorario.innerHTML = `${horas} horas, ${minutos} minuto e ${segundos} segundos`
    }else if(segundos == 1){
        mostrarHorario.innerHTML = `${horas} horas, ${minutos} minutos e ${segundos} segundo`
    }else{
        mostrarHorario.innerHTML = `${horas} horas, ${minutos} minutos e ${segundos} segundos`
    }
    
    var mostrarCumprimento = document.querySelector('p#cumprimento') //selecionar o local para mostrar o cumprimento
    var divImg = document.getElementById('mostrarImg') //selecionar o local para mostrar a imagem
    var foto = document.createElement('img')
    
    if (horas >= 0 && horas < 6){ //cumprimentar dependendo da hora e mostrar uma imagem condizente
        mostrarCumprimento.innerHTML = 'Boa madrugada! <i class="fa-solid fa-moon" style="color: gray;"></i>'
        document.body.style.backgroundColor = '#021f55'
        document.querySelector('footer').style.color = 'white'
        foto.src = 'images/madrugada.jpg'
        if (divImg.firstChild){
            divImg.removeChild(divImg.firstChild)
        }
        divImg.appendChild(foto)
    }else if(horas < 12){
        mostrarCumprimento.innerHTML = 'Bom dia! <i class="fa-solid fa-sun" style="color: orange;"></i>'
        document.body.style.backgroundColor = '#cc8b00'
        document.querySelector('footer').style.color = 'black'
        foto.src = 'images/manhã.jpg'
        if (divImg.firstChild){
            divImg.removeChild(divImg.firstChild)
        }
        divImg.appendChild(foto)
    }else if(horas < 19){
        mostrarCumprimento.innerHTML = 'Boa Tarde! <i class="fa-solid fa-sun" style="color: orange;"></i>'
        document.body.style.backgroundColor = '#006b12'
        foto.src = 'images/tarde.jpg'
        if (divImg.firstChild){
            divImg.removeChild(divImg.firstChild)
        }
        divImg.appendChild(foto)
    }else{
        mostrarCumprimento.innerHTML = 'Boa Noite! <i class="fa-solid fa-moon" style="color: gray;"></i>'
        document.body.style.backgroundColor = 'black'
        document.querySelector('footer').style.color = 'white'
        foto.src = 'images/noite.jpg'
        if (divImg.firstChild){
            divImg.removeChild(divImg.firstChild)
        }
        divImg.appendChild(foto)
    }
}
relógio()
setInterval(relógio, 200) //atualiza a função relógio a cada 0.2 segundos (coloquei 0.2 de tempo para os segundos ficarem mais precisos)
