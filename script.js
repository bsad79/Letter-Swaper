let textShow = [];
let text = document.getElementById("text").value;
let timer = document.getElementById("timer").value;
let fontOptions = document.getElementsByClassName("checkbox");
let result = document.getElementById("result");
let i = 1;
let j = 0;
let fonts = [];
let interval = 0;

//Marca todas as opções
function selectAll() {
    for (let index = 0; index < fontOptions.length; index++) {
        document.querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = true);
    }
}

//Desmarca todas as opções
function unselectAll() {
    for (let index = 0; index < fontOptions.length; index++) {
        document.querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = false);
    }
}

function verfify(field) {
    //Verifcação do campo de texto
    if (!field) {
        text = document.getElementById("text").value;
        if (text == "") {
            alert("Text field empty!");
            return 0;
        }
        else {
            return 1;
        }
    }
    else {
        timer = document.getElementById("timer").value;
        if (timer == "" || timer < 100) {
            alert("Please fill the timer field correctly!");
            return 0;
        }
        else {
            return 1;
        }
    }
}

//Configura e inicia a troca das letras
function swap() {
    if (verfify(0) && verfify(1)) {
        text = document.getElementById("text").value;
        timer = document.getElementById("timer").value;

        //Limpa o texto anterior
        let size = result.children.length;
        for (let index = 0; index < size; index++) {
            result.removeChild(result.children[0])
        }

        //Adiciona o texto novo
        for (let index = 0; index < text.length; index++) {
            let letter = document.createElement("h2");
            letter.innerHTML = text[index];
            result.appendChild(letter);
        }

        //Adiciona as fontes selecionadas à lista
        fonts = [];
        for (let index = 0; index < fontOptions.length; index++) {
            if (fontOptions[index].checked) {
                fonts.push(fontOptions[index].labels[0].innerText);
            }
        }

        //Encerra a troca anterior
        clearInterval(interval);
        //Adiciona as novas letras
        textShow = document.getElementsByTagName("h2");
        //Inicia a troca das letras
        interval = setInterval(() => {
            //Muda a fonte da letra
            textShow[i].style.fontFamily = fonts[j];
            i++;
            j++;
            //Reinicia quando o texto chegar ao fim
            if (i >= textShow.length) {
                i = 0;
            }
            //Reinicia quandos as fontes chegarem ao fim
            if (j > fonts.length) {
                j = 0;
            }
        } , timer);
    }
}

swap();