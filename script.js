function Ver(){
    var nasc = window.document.getElementById('camponasc').value
    var res = window.document.getElementById('res')
    var foto = window.document.getElementById('foto')
    var data = new Date()
    var ano = data.getFullYear()
    if (nasc.length == 0 || Number(nasc) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente !')
    } else {
    var sexo = window.document.getElementsByName('radsex')
    var idade = ano - Number(nasc)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (sexo[0].checked) {
        genero = 'masculino'
        if (idade >= 0 && idade < 10){
            //Criança
            img.setAttribute('src', 'menino.jpg')
        }else if (idade < 21){
            //Jovem
            img.setAttribute('src', 'homemjovem.jpg')
        }else if (idade < 50){
            //Adulto
            img.setAttribute('src', 'homemadulto.jpg')
        }else {
            //Idoso
            img.setAttribute('src', 'idosohomem.jpg')
        }
    } else if (sexo[1].checked){
        genero = 'feminino'
        if (idade >= 0 && idade < 10){
            //Criança
            img.setAttribute('src', 'menina.jpg')
        }else if (idade < 21){
            //Jovem
            img.setAttribute('src', 'jovemmulher.jpg') 
        }else if (idade < 50){
            //Adulto
            img.setAttribute('src', 'mulheradulta.jpg')
        }else {
            //Idoso
            img.setAttribute('src', 'idosamulher.jpg')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos gênero ${genero} com idade de ${idade} anos.`
    res.appendChild(img)
    }
}

