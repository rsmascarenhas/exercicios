document.addEventListener('submit', function (evento){

    evento.preventDefault();
    evento.stopPropagation();

    let formulario = document.getElementById('formulario-cad');
    let dados = new FormData(this);
    let objeto = {};
    let info = [];

    for(let key of dados.keys()){
      
        let a = dados.get(key)

        info.push(a);
        
    }

    this.document.getElementById('mensagem').innerHTML = imprimeInfo(info);

});

function validaCampo(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();
        if(this.value == ""){
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos!";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else{
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
    });
}

function validaEmail(elemento){
    elemento.addEventListener('focusout',function(event){
        event.preventDefault();
        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        if(this.value.match(emailValido)){
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
        else {
            document.querySelector('.mensagem').innerHTML = "verifique o campo e-mail";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });
}

function validaTelefone(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();
        const telValido = /^(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/i;
        if(this.value.match(telValido)){
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
            this.value = this.value.replace(/(\d{2})?(\d{5})?(\d{4})/,"($1)$2-$3");
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o campo telefone";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });
}

function validaUf(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();
        const ufValido = /^[a-z]{2}$'/i;
        if(this.value.match(ufValido)){
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = " verifique o campo UF";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
        }
    });
}

function validaCep(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();
        const cepValido = /^(\d{5})+-(\d{3})$/i;
        if(this.value.match(cepValido)){
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = " verifique o campo CEP";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
        }
    })
}

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let campoEmail = document.querySelectorAll('input.email');
let campoTelefone = document.querySelectorAll('input.telefone');
let campoCep = document.querySelectorAll('input.cep');
let campoUF = document.querySelectorAll('input.uf');

for (let emFoco of camposObrigatorios){
    validaCampo(emFoco);
}
for(let emFoco of campoEmail){
    validaEmail(emFoco);
}

for (let emFoco of campoTelefone){
    validaTelefone(emFoco);
} 

for (let emFoco of campoCep){
    validaCep(emFoco);
}

for (let emFoco of campoUF){
    validaUf(emFoco);
}
