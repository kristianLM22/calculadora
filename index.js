
let txtdisplay = document.getElementById("display");
let telaOperador = document.getElementById("tela_operador");
let txtauxilar = document.getElementById("auxiliar");

let numbers = document.querySelectorAll(".number");
let operador = document.querySelectorAll(".operador");





//--------- Input Numero ------------
function digito(botao){
   txtdisplay.value += botao.value;
}

for( let i = 0; i<numbers.length; i++){
    numbers[i].addEventListener('click' , function(){
        digito(this);
     })
}



//------------ Input Operador ----------------

function inputOperator(botao){

    if(telaOperador.value != ''){
        igual();
    }
    telaOperador.value = botao.value
    txtauxilar.value = txtdisplay.value;
    txtdisplay.value = "0";
}

for(let i = 0; i<operador.length; i++){
    operador[i].addEventListener('click' , function(){
        inputOperator(this);
    })
}


//-------------- Clear --------------------

let clear = document.getElementById("clear");

clear.onclick = ()=>{
    txtdisplay.value = '0';
    txtauxilar.value = '0';
    telaOperador.value = '';
}

//---------- Ponto decimal -------------

function digito(botao){
    if(botao.value == "."){
        if(txtdisplay.value.indexOf('.') == -1){
            txtdisplay.value += botao.value;
        }
    }else{

        if(txtdisplay.value.indexOf('.') == -1 && txtdisplay.value == "0"){

            txtdisplay.value = botao.value;

        }else{

            txtdisplay.value +=botao.value;
        }
        
    }
}

//-------------- Calculo --------------

let btigual = document.getElementById("bigual");
btigual.addEventListener("click", igual)


function igual(){
    if(telaOperador.value == "+"){
        txtdisplay.value = parseFloat(txtauxilar.value) + parseFloat(txtdisplay.value);
    }
        if(telaOperador.value == "-"){
            txtdisplay.value = parseFloat(txtauxilar.value) - parseFloat(txtdisplay.value);
        }
    
            if(telaOperador.value == "x"){
                txtdisplay.value = parseFloat(txtauxilar.value) * parseFloat(txtdisplay.value);
            }
                if(telaOperador.value == "/"){
                    txtdisplay.value = parseFloat(txtauxilar.value) / parseFloat(txtdisplay.value);
                }
        
}






