// capturando evento de submit do formulário

const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e){
    e.preventDefault();
    const inputPeso = form.querySelector('#peso');
    const inputaltura = form.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputaltura.value);

    if (!peso ){
        setResultado('Peso inválido',false);
        return;
    }

    if(!altura){
        setResultado('Altura inválida',false);
        return;

    }

    const imc = getImc(peso,altura)
    const nivelImc = getNivelImc(imc)

    const msg = `Seu IMC é ${imc} (${nivelImc})`;
    setResultado(msg, true)

});


function getNivelImc(imc) {
    const nivel = ['abaixo do peso','peso normal', 'sobrepeso', 'obesidade grau1','obesidade grau2','obesidade grau3']

    if(imc>= 39.9) return nivel[5];
    
    if(imc >= 34.9) return nivel[4];
    
    if(imc >= 29.9) return nivel[3];
    
    if(imc >= 24.9) return nivel[2];
    
    if( imc >= 18.5)return nivel[1];
    
    if( imc < 18.5)return nivel[0];
}

function getImc(peso,altura){
    const imc = peso / altura **2;
    return imc.toFixed(2);

}
    


function criarP () {
    const p = document.createElement('p');
    return p;

}


function setResultado(msg,isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
   

    const p = criarP();

     if(isValid){
         p.classList.add('paragrafo-resultado')
     }else{
         p.classList.add('bad')
     }

    p.innerHTML = msg
    resultado.appendChild(p);
}

