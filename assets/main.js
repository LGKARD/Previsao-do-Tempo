const key = '11b51b10db2a50b458b92380849a1f05'
const inputCidade = document.querySelector('.input-cidade')

function dadosTela(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".tempo").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

    switch (dados.weather[0].description) {
        case 'céu limpo':
            alteraImagem('https://img.freepik.com/fotos-gratis/ceu-azul-brilhante-nuvens-fofas-natureza-cena-tranquila-gerada-por-inteligencia-artificial_188544-130099.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1715040000&semt=ais');
            break;
        case 'nublado':
            alteraImagem('https://images.pexels.com/photos/3941855/pexels-photo-3941855.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200');
            break;
        case 'nuvens dispersas':
            alteraImagem('https://img.freepik.com/fotos-gratis/nuvens-dispersas_1204-15.jpg');
            break;
        default:
            alteraImagem('https://img.freepik.com/fotos-gratis/cinza-concreto-arranha-ceus-altos-na-costa-em-tempo-de-nevoeiro_144627-31372.jpg?w=1380&t=st=1718678057~exp=1718678657~hmac=585f9aeb744595bf40e542e179269f32bed29436a950e449787c86aa93dcd8a4')
            break;
    }
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json());
    dadosTela(dados);
    console.log(dados);
}


function cliqueDoBotao() {
    const cidade = document.querySelector(".input-cidade").value;
    buscarCidade(cidade);
}

inputCidade.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        cliqueDoBotao();
    }
});

function alteraImagem(url) {
    document.querySelector("body").style.backgroundImage = `url("${url}")`;

}
