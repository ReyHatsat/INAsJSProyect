// JavaScript Document
//Mostrar la imagen del index
function mostrar_imagen(id) {
   img = document.getElementById(id);
   img.innerHTML = '<img src="images/Marcianito.gif" />';
}

function ocultar_imagen(id) {
    img = document.getElementById(id);
    img.innerHTML = '';
}

//Calculadora que apenas y sirvió la condenada

function operaciones(op)
{

    var ops = {
        sumar: function sumarNumeros(n1, n2) {
            return (parseInt(n1) + parseInt(n2));
        },

        restar: function restarNumeros(n1, n2) {
            return (parseInt(n1) - parseInt(n2));
        },
        
        multiplicar: function multiplicarNumeros(n1, n2) {
            return (parseInt(n1) * parseInt(n2));
        },

        dividir: function dividirNumeros(n1, n2) {
            return (parseInt(n1) / parseInt(n2));
        }


    };

	var operacion;

	switch(op) {
		case 'sumar':
			var operando1 = document.getElementById("resultado").value;
			document.getElementById("resultado").value = operando1 + "+";
			operacion = document.getElementById("resultado").value;
			document.getElementById("memoria").value = "suma";
			break;
		case 'restar':
			var operando1 = document.getElementById("resultado").value;
			document.getElementById("resultado").value = operando1 + "-";
			operacion = document.getElementById("resultado").value;
			document.getElementById("memoria").value = "resta";
			break;
		case 'multiplicar':
			var operando1 = document.getElementById("resultado").value;
			document.getElementById("resultado").value = operando1 + "*";
			operacion = document.getElementById("resultado").value;
			document.getElementById("memoria").value = "multiplicacion";
			break;
		case 'dividir':
			var operando1 = document.getElementById("resultado").value;
			document.getElementById("resultado").value = operando1 + "/";
			operacion = document.getElementById("resultado").value;
			document.getElementById("memoria").value = "division";
			break;
			
		case 'igual':	
			
			operacion = document.getElementById("resultado").value;
			
			var memoriaop = document.getElementById("memoria").value;
			
			switch(memoriaop) {
				case 'suma':
					var operandos = operacion.split("+");
					var resultado = ops.sumar(operandos[0], operandos[1]);
					document.getElementById("resultado").value = resultado;
					break;
				case 'resta':
					var operandos = operacion.split("-");
					var resultado = ops.restar(operandos[0], operandos[1]);
					document.getElementById("resultado").value = resultado;
					break;
				case 'multiplicacion':
					var operandos = operacion.split("*");
					var resultado = ops.multiplicar(operandos[0], operandos[1]);
					document.getElementById("resultado").value = resultado;
					break;
				case 'division':
					var operandos = operacion.split("/");
					var resultado = ops.dividir(operandos[0], operandos[1]);
					document.getElementById("resultado").value = resultado;
					break;					
			
			}	
			

			break;
			

	}


}

//El Bingo

window.onload = newCard;
var usedNums = new Array(76);

function newCard(){
	if(document.getElementById)
	{
  		for (var i=0; i<24; i++)
		{
			setCuadro(i);
		}
	}
	else{
		alert("Lo Sentimos pero su navegador no soporta este guion");
		}
	}
	
function setCuadro(thisCuadro)
	{
		var currSquare = "campo" + thisCuadro;
		var colPlace = new Array(0,1,2,3,4,0,1,2,3,4,0,1,3,4,0,1,2,3,4,0,1,2,3,4);
		var colBasis = 	colPlace[thisCuadro] * 15;
		var newNum;
		
		do {
			newNum = colBasis + getNewNum() + 1;
		}
		while (usedNums[newNum]);
		usedNums[newNum]=true;
		document.getElementById(currSquare).innerHTML = newNum;
	}

function getNewNum(){
		return Math.floor(Math.random() * 15);
	}
