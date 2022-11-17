sessionStorage['inicio']=0;
sessionStorage['tamanyo']=0;
sessionStorage['arraynums']=new Array();
sessionStorage['empezado']=0;
sessionStorage['token']='';
sessionStorage['id']=0;
sessionStorage['array']='';
sessionStorage['vacio']=0;
sessionStorage['mouse']=0;
sessionStorage['actualizado']=new Array();
sessionStorage['fallosf']='';
sessionStorage['fallosc']='';
sessionStorage['quitafallos']=0;
sessionStorage['tamactual']=0;


function pintar01(idCV){
	let cv=document.querySelector('#' + idCV),
		ctx=cv.getContext('2d');

	ctx.fillStyle = '#ff0000';
	ctx.fillRect(40, 50, 100, 75); 
}

function pintar02(idCV){
	let cv=document.querySelector('#' + idCV),
		ctx=cv.getContext('2d');

	ctx.lineWidth=4;
	ctx.strokeStyle= '#ff0000';

	//ctx.moveTo(200,200);
	//ctx.lineTo(250, 200);

	ctx.lineCap = 'square';

	//ctx.stroke();

	ctx.moveTo(200,200);
	ctx.lineTo(250,200);
	ctx.stroke();

}

function pintar03(idCV){
	let cv=document.querySelector('#' + idCV),
		ctx=cv.getContext('2d');

	ctx.rect(150,125,150,75);
	ctx.strokeStyle = '#0909F3';
	ctx.lineWidth= 4;

	ctx.stroke();
}

function pintar04(idCV){
	let cv=document.querySelector('#' + idCV),
		ctx=cv.getContext('2d');

	ctx.strokeStyle = '#0909F3';
	ctx.lineWidth= 4;

	ctx.fillStyle= '#E9F70A';
	ctx.fillRect(150,125,150,75);



	ctx.strokeRect(150,125,150,75);
}


function pintar05(idCV){
	let cv=document.querySelector('#' + idCV),
		ctx=cv.getContext('2d');

	ctx.arc(150,150,75,0,2*Math.PI,true);

	ctx.stroke();
}

function pintar06(idCV){
	let cv=document.querySelector('#' + idCV),
		ctx=cv.getContext('2d');

	ctx.moveTo(200,200);
	ctx.lineTo(300,275);
	ctx.lineTo(200,350);

	ctx.lineWidth=4;
	ctx.strokeStyle= '#FF0909';
	ctx.lineJoin='miter';
	ctx.miterLimit=1;
	ctx.stroke();

}

function pintar07(idCV){
	let cv=document.querySelector('#' + idCV),
		ctx=cv.getContext('2d');

	ctx.shadowOffsetX=5;
	ctx.shadowOffsetY=5;
	ctx.shadowBlur=5;
	ctx.shadowColor='#000';
	ctx.fillStyle='#1DEA08';
	ctx.fillRect(200,2000,100,50);
}

function pintar08(idCV){
	let cv=document.querySelector('#' + idCV),
		ctx=cv.getContext('2d');

	ctx.fillStyle= '#F5C504';

	ctx.textAlign= 'center';
	ctx.textBaseLine= 'middle';
	ctx.font= 'bold 32px sans-serif,arial';
	ctx.fillText('HOLA',200,200);

	ctx.moveTo(200,0);
	ctx.lineTo(200,cv.height);

	ctx.moveTo(0,200);
	ctx.lineTo(cv.width,200);
	ctx.strokeStyle= '#F90707';
	ctx.lineWidth=1;
	ctx.stroke();


}

  

function dibujarLineas(){
	let cv=document.querySelector('#cv03'),
		ctx=cv.getContext('2d');

	ctx.lineWidth=2;
	ctx.strokeStyle= '#FD0606';
	ctx.moveTo(100,100);
	ctx.lineTo(200,175);
	ctx.stroke();


	ctx.beginPath();
	ctx.strokeStyle='#1F0EFC';
	ctx.moveTo(220,300);
	ctx.lineTo(300,100);

	ctx.stroke();
}

function lineaVerde(){
	let cv=document.querySelector('#cv03'),
		ctx=cv.getContext('2d');

	ctx.lineWidth=2;
	ctx.strokeStyle= '#06F43E';
	ctx.moveTo(150,400);
	ctx.lineTo(300,375);
	ctx.stroke();

}

function pintar01(){
	let cv=document.querySelector('#cv03'),
		ctx=cv.getContext('2d');

	ctx.beginPath();
	ctx.strokeStyle= '#F10EDE';
	ctx.lineWidth=4;
	ctx.moveTo(100,200);
	ctx.lineTo(100,300);
	ctx.lineTo(200,300);
	ctx.closePath();

	ctx.stroke();
	ctx.fillStyle= '#F65608';
	ctx.fill();

}



function hacerClip(){
	let cv=document.querySelector('#cv03'),
		ctx=cv.getContext('2d');

	  ctx.beginPath();
	  ctx.lineWidth = 5;
	  ctx.strokeStyle = '#234';
	  ctx.moveTo(50,125);
	  ctx.lineTo(150,25);
	  ctx.lineTo(200,150);
	  ctx.lineTo(125,100);
	  ctx.lineTo(50,125);    
	  ctx.clip();    
	  ctx.fillStyle = '#af0';    
	  ctx.fillRect(0,0,400,400); 


	  ctx.stroke();
}

function pintar02(){
	let cv=document.querySelector('#cv03'),
		ctx=cv.getContext('2d');

	ctx.beginPath();
	ctx.lineWidth=4;
	ctx.strokeStyle='#FA0808';
	ctx.moveTo(200,200);
	ctx.lineTo(200,350);
	ctx.lineTo(400,400);
	ctx.stroke();
	ctx.save();
	ctx.beginPath();
	ctx.lineWidth=8;
	ctx.strokeStyle='#320BF8';
	ctx.moveTo(100,100);
	ctx.lineTo(100,400);
	ctx.stroke();
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(10,10);
	ctx.lineTo(500,10);
	ctx.stroke();

}

function rotar(){
	let cv=document.querySelector('#cv03'),
		ctx=cv.getContext('2d');

	ctx.rotate(Math.PI / 4);

}

function imagen01(){
	let cv=document.querySelector('#cv03'),
		ctx=cv.getContext('2d'),
		imagen;

	ctx.dropImage(imagen,0,0);
}

function rejilla(){
	let cv=document.querySelector('#cv03'),
		ctx=cv.getContext('2d'),
		regiones=4,
		ancho=cv.width /regiones,
		alto=cv.height / regiones;

		sessionStorage['tamanyo']=4;

	if(sessionStorage['inicio']!=5){
		limpiar();

		ctx.beginPath();
		ctx.lineWidth=2;
		ctx.strokeStyle= '#6B6868';

		for(let i=0;i<regiones;i++){
			//verticales
			ctx.moveTo(i * ancho,0);
			ctx.lineTo(i * ancho, cv.height);
			//horizontales
			ctx.moveTo(0,i * alto);
			ctx.lineTo(cv.width, i * alto);

		}
		ctx.stroke();
		ctx.closePath();
		rejilla2();
	}
		
}

function rejilla2(){
	let cv=document.querySelector('#cv03'),
		ctx=cv.getContext('2d'),
		regiones=4,
		ancho=cv.width /regiones,
		alto=cv.height / regiones;

	ctx.beginPath();
	ctx.lineWidth=3;
	ctx.strokeStyle= '#000';

	for(let i=0;i<regiones;i=i+2){
		//verticales
		ctx.moveTo(i * ancho,0);
		ctx.lineTo(i * ancho, cv.height);
		//horizontales
		ctx.moveTo(0,i * alto);
		ctx.lineTo(cv.width, i * alto);

	}
	ctx.stroke();
	ctx.closePath();
}


function rejilla3(){
	let cv=document.querySelector('#cv03'),
		ctx=cv.getContext('2d'),
		regiones=9,
		ancho=cv.width /regiones,
		alto=cv.height / regiones;

		sessionStorage['tamanyo']=9;

	if(sessionStorage['inicio']!=5){
		limpiar();

		ctx.beginPath();
		ctx.lineWidth=2;
		ctx.strokeStyle= '#6B6868';

		for(let i=0;i<regiones;i++){
			//verticales
			ctx.moveTo(i * ancho,0);
			ctx.lineTo(i * ancho, cv.height);
			//horizontales
			ctx.moveTo(0,i * alto);
			ctx.lineTo(cv.width, i * alto);

		}
		ctx.stroke();
		ctx.closePath();
		rejilla4();
	}
		
}

function rejilla4(){
	let cv=document.querySelector('#cv03'),
		ctx=cv.getContext('2d'),
		regiones=9,
		ancho=cv.width /regiones,
		alto=cv.height / regiones;

	ctx.beginPath();
	ctx.lineWidth=3;
	ctx.strokeStyle= '#000';

	for(let i=0;i<regiones;i=i+3){
		//verticales
		ctx.moveTo(i * ancho,0);
		ctx.lineTo(i * ancho, cv.height);
		//horizontales
		ctx.moveTo(0,i * alto);
		ctx.lineTo(cv.width, i * alto);

	}
	ctx.stroke();
	ctx.closePath();
}

function limpiar(){
	let cv=document.querySelector('#cv03'),
		ctx=cv.getContext('2d');

	//ctx.clearRect(0,0,cv.width,cv.height);
	cv.width=cv.width;
	ctx.fillStyle= '#fff';
	ctx.fillRect(0,0,cv.width,cv.height);
}

function prepararCanvas(){
	let cv=document.querySelector('#cv03');

	cv.width=640;
	cv.height=480; 

	

		cv.onmousemove=function(evt){
			let cv=document.querySelector('#cv03'),
				ctx=cv.getContext('2d'),
				regiones=sessionStorage['tamanyo'],
				ancho=cv.width /regiones,
				alto=cv.height / regiones;
			let fila,
				columna,
				cont=0,
				contador=0,
				contador2=0,
				a=1,
				b=1;
			let array=sessionStorage['array'];
				
			columna = Math.floor(evt.offsetX / ancho);
			fila= Math.floor(evt.offsetY / alto);

			console.log('BOOLEANOOOO: ' + sessionStorage['mouse']);
			
			cont=fila * regiones + columna;
			console.log(sessionStorage['arraynums']);
			console.log(sessionStorage['arraynums'][5]);

			console.log('QUITAFALLOS: '+ sessionStorage['quitafallos']);
			if(sessionStorage['quitafallos']==1){
				quitafallos();
				sessionStorage['quitafallos']=0;
				console.log('QUITAFALLOS: '+ sessionStorage['quitafallos']);
			}
			

			if(sessionStorage['mouse']==0){
				if(parseInt(array.charAt(cont))==0){
					document.querySelector("#cv03").style.cursor = "pointer";

					if(regiones==4) pintaselfondo4(cont);
					else pintaselfondo9(cont);
					console.log(regiones);	
				}
				else{
					document.querySelector("#cv03").style.cursor = "auto";
					
				} 	
			}
			
		}

	

	cv.onclick =function(evt){
		//console.log('CLICK:' + evt.offset + ' - ' + evt.offsetY);
		let cv=document.querySelector('#cv03'),
			ctx=cv.getContext('2d'),
			regiones=sessionStorage['tamanyo'],
			ancho=cv.width /regiones,
			alto=cv.height / regiones;
		let fila,
			columna,
			html='',
			cont=0;
		let array=sessionStorage['array'];
		columna = Math.floor(evt.offsetX / ancho);
		fila= Math.floor(evt.offsetY / alto);

		cont=fila * regiones + columna;

		if(parseInt(array.charAt(cont))==0){
			if(sessionStorage['mouse']==0){
				sessionStorage['mouse']=1;
				if(sessionStorage['tamanyo']==4){
					filacol4(fila,columna);
					fila4(fila);
					columna4(columna);
					ctx.lineWidth=2;
					ctx.fillStyle= '#E6DADA';
					ctx.strokeStyle= '#F70F1F';
					ctx.fillRect(2.5+columna*160,2.5+fila*120,155,115);
					ctx.strokeRect(2.5+columna*160,2.5+fila*120,155,115);
					//html='<select name="elec"><option>1</option><option>2</option><option>3</option><option>4</option></select>';
					html='<button onclick="metenum4('+ fila + ',' + columna + ','+ 1 + ')">1</button><button onclick="metenum4('+ fila + ',' + columna + ','+ 2 + ')">2</button><button onclick="metenum4('+ fila + ',' + columna + ','+ 3 + ')">3</button><button onclick="metenum4('+ fila + ',' + columna + ','+ 4 + ')">4</button>';
					document.querySelector('#eleccion').innerHTML=html;
				}
				else{ //PARA TAMANYO 9
					console.log('AQUI ESTA LA FILA: '+ fila);
					console.log('AQUI ESTA LA COLUMNA: '+ columna);
					filacol9(fila,columna);
					fila9(fila);
					columna9(columna);
					ctx.lineWidth=2;
					ctx.fillStyle= '#E6DADA';
					ctx.strokeStyle= '#F70F1F';
					ctx.fillRect(2+columna*71.1,2+fila*53.5,67,48);
					ctx.strokeRect(2+columna*71.1,2+fila*53.5,67,48);
					//html='<select name="elec"><option>1</option><option>2</option><option>3</option><option>4</option></select>';
					html='<button onclick="metenum9('+ fila + ',' + columna + ','+ 1 + ')">1</button><button onclick="metenum9('+ fila + ',' + columna + ','+ 2 + ')">2</button><button onclick="metenum9('+ fila + ',' + columna + ','+ 3 + ')">3</button><button onclick="metenum9('+ fila + ',' + columna + ','+ 4 + ')">4</button><button onclick="metenum9('+ fila + ',' + columna + ','+ 5 + ')">5</button><button onclick="metenum9('+ fila + ',' + columna + ','+ 6 + ')">6</button><button onclick="metenum9('+ fila + ',' + columna + ','+ 7 + ')">7</button><button onclick="metenum9('+ fila + ',' + columna + ','+ 8 + ')">8</button><button onclick="metenum9('+ fila + ',' + columna + ','+ 9 + ')">9</button>';
					document.querySelector('#eleccion').innerHTML=html;
				}
			}
		}
		console.log(fila + ' - ' + columna); 
		console.log('BOOLEANO: ' + sessionStorage['mouse']);
	}
}

/*function pintaeleccion(fila,columna,num){
let cv=document.querySelector('#cv03'),
			ctx=cv.getContext('2d');

	if(sessionStorage['tamanyo']==4){
		console.log('ENTROOO')
		ctx.fillStyle = '#00a';
		ctx.font = 'bold 32px sans-serif';
		ctx.textAlign = 'center';
		ctx.fillText(num,80+columna*160,70+fila*120);
		metenum4(fila,columna,num);
		console.log('ENTRAA')
	}
	else{
		//ctx.fillText(num,80+columna*160,70+fila*120);  HACER CONFORME LAS MEDIDAS PARA 9
	}
}*/
/*function quitafallos(){
	if(sessionStorage['tamanyo']==4) quitafallos4();
	else quitafallos9();
}

function quitafallos9(){ //HAY QUE HACERLO

}*/


function quitafallos(){
	let cv=document.querySelector('#cv03'),
		ctx=cv.getContext('2d'),
		contador=0,
		posicion=0,
		arraynums=sessionStorage['actualizado'],
		tam=sessionStorage['tamanyo'],
		tope=tam*tam;

		console.log('A VER KHE PASASSDASD: '+ arraynums.length);

		if(sessionStorage['tamactual']<tope){
			console.log('ESTOY ENTRANDO POR AQUI');
			console.log('PORQUE TENGO ESTE VALOR: '+sessionStorage['tamactual'] + 'Y LO MAXIMO ES:  '+ tope );
			for(let i=0;i<tam*tam;i++){
				posicion=parseInt(sessionStorage['fallosf'].charAt(contador))*tam + parseInt(sessionStorage['fallosc'].charAt(contador));
				console.log('POSICIONES: '+posicion);
					console.log('OLEEEE');
					console.log(cont2);
					if(posicion==i){
						metenum(parseInt(sessionStorage['fallosf'].charAt(contador)),parseInt(sessionStorage['fallosc'].charAt(contador)),arraynums[i]);
						contador++;
					}
				
			}
		}
}

function metenum(fila,columna,num){
	if(sessionStorage['tamanyo']==4) metenum4(fila,columna,num);
	else metenum9(fila,columna,num);
}


function metenum4(fila,columna,num){
	let cv=document.querySelector('#cv03'),
		ctx=cv.getContext('2d'),
		dimi=80,
		dimj=70,
		arraynums=sessionStorage['arraynums'],
		actualizado='',
		cont=0,
		cont2=0,
		indice=0,
		posicion=0;

	
	posicion=fila*4 + columna;

	
	
	console.log('POSICION: ' + posicion);
	console.log('NUMERO A METER: '+ num);
	console.log('vamoa ver: ' + arraynums.charAt(15));
	
	for(let i=0;i<arraynums.length;i++){
		//verticales
		if(cont<4){
			if(arraynums.charAt(i)!=','){
				
				if(cont2==posicion){
					console.log('ENTROOOOOOOOOOOO');
					ctx.beginPath()
					ctx.lineWidth=4;
					ctx.fillStyle= '#FFFFFF';
					ctx.strokeStyle= '#FFFFFF';
					ctx.fillRect(2.5+columna*160,3+fila*120,154.5,114.5);
					ctx.strokeRect(2.5+columna*160,3+fila*120,154.5,114.5);
					ctx.closePath();
					ctx.fillStyle = '#00a';
					ctx.font = 'bold 32px sans-serif';
					ctx.textAlign = 'center';
					ctx.fillText(num,dimi,dimj);
					actualizado=actualizado+num;
				}
				else{
					actualizado=actualizado+arraynums[i];
					
				} 

				dimi=dimi+160;
				cont++;
				cont2++;
				
					
				
			}
			
		}
		else{
			dimi=80;
			dimj=dimj+120;
			cont=0;
		}
	}
	console.log('ACTUALIZADO: '+ actualizado);
	console.log('UNO: ' + sessionStorage['arraynums']);
	sessionStorage['actualizado']=actualizado;
	console.log('DOS: ' + sessionStorage['actualizado']);
	let html='';
	document.querySelector('#eleccion').innerHTML=html;
	sessionStorage['mouse']=0;
	cambio();
		 
}

function metenum9(fila,columna,num){//HACER METENUM PARA TAMANYO 9 
	let cv=document.querySelector('#cv03'),
		ctx=cv.getContext('2d'),
		dimi=35.5,
		dimj=35,
		arraynums=sessionStorage['arraynums'],
		actualizado='',
		cont=0,
		cont2=0,
		indice=0,
		posicion=0;

	
	posicion=fila*9 + columna;

	
	
	console.log('POSICION: ' + posicion);
	console.log('NUMERO A METER: '+ num);
	console.log('FILA METE: ' + fila);
	console.log('COLUMNA METE: ' + columna);
	
	for(let i=0;i<arraynums.length;i++){
		//verticales
		if(cont<9){
			if(arraynums.charAt(i)!=','){
				
				if(cont2==posicion){
					console.log('ENTROOOOOOOOOOOO');
					ctx.beginPath()
					ctx.lineWidth=4;
					ctx.fillStyle= '#FFFFFF';
					ctx.strokeStyle= '#FFFFFF';
					ctx.fillRect(3+columna*71.1,3+fila*53.5,65,47);
					ctx.strokeRect(3+columna*71.1,3+fila*53.5,65,47);
					ctx.closePath();
					ctx.fillStyle = '#00a';
					ctx.font = 'bold 32px sans-serif';
					ctx.textAlign = 'center';
					ctx.fillText(num,dimi,dimj);
					actualizado=actualizado+num;
				}
				else{
					actualizado=actualizado+arraynums[i];
					
				} 

				dimi=dimi+71.1;
				cont++;
				cont2++;
				
					
				
			}
			
		}
		else{
			dimi=35.5;
			dimj=dimj+53.5;
			cont=0;
		}
	}
	console.log('ACTUALIZADO: '+ actualizado);
	console.log('UNO: ' + sessionStorage['arraynums']);
	sessionStorage['actualizado']=actualizado;
	console.log('DOS: ' + sessionStorage['actualizado']);
	let html='';
	document.querySelector('#eleccion').innerHTML=html;
	sessionStorage['mouse']=0;
	cambio();






}

function cambio(){
let arraynums=sessionStorage['actualizado'],
	cont=0,
	contador=0;
	sessionStorage['arraynums']='',
	tam=sessionStorage['tamanyo'],
	tamactual=0,
	tope=tam*tam-1;
	console.log('LONGITUD: ' + arraynums.length);
	
	for(let i=0;i<arraynums.length+tope;i++){
			if(cont==0){
				sessionStorage['arraynums']=sessionStorage['arraynums']+arraynums.charAt(contador);
				if(arraynums.charAt(contador)!=0) tamactual++;
				cont++;
				contador++;
				
			}
			else{
				sessionStorage['arraynums']=sessionStorage['arraynums']+',';
				cont=0;
			} 
			
	}
	sessionStorage['tamactual']=tamactual;
	console.log('CAMBIO: ' + sessionStorage['arraynums']);
	console.log('TAMAÑO ACTUAL: '+ tamactual);

	

    cont=0;
    contador=0;
    let veces=0,
    div=0,
    dim=arraynums.length+tam*tam;
    let generado='[[';
    for(let i=0;i<dim;i++){
		if(div<tam){	
			if(cont==0){
				generado=generado+arraynums.charAt(contador);
				cont++;
				contador++;
				div++;
			}
			else{
				generado=generado+',';
				cont=0;
			}
		}
		else{
			div=0;
			veces++;
			if(veces<tam){
				generado=generado + ']';
				generado=generado + ',';
				generado=generado + '[';
				cont=0;
			}
			else generado=generado + ']';
		}
			
	}
	generado=generado+']';

	sessionStorage['generado']=generado;
	console.log('DIM: ' + dim);
	console.log('ACTUALIZADO???: ' + sessionStorage['actualizado']);
	console.log('GENERADOVICH: ' + generado);
	
	console.log('VERDADERO GENERADO: ' + sessionStorage['generado']);
	
	pinta();
	if(sessionStorage['tamanyo']==4) rejilla();
	else rejilla3();

	console.log('A VER ETO L¡JKERJ: '+tope)
	if(tamactual>tope) comprobarErrores();
		
}




function empezar(){
	let html='';
	if(sessionStorage['tamanyo']==0){
		html += '<article>';
		html += '<h2>TIENES QUE ELEGIR UN TAMAÑO PARA EL SUDOKU</h2>';
		html += '<footer><button onclick="fin();">OK</button>';
		html += '</article>';


		mensajeModal(html);
	}
	sessionStorage['inicio']=5;
	console.log(sessionStorage['inicio']);

	generarSudoku();

}

function bloqueo(){
	let html='',
	html2='';

	if(sessionStorage['inicio']==5){
		html+='<button>4x4</button>';
		html+='<button>9x9</button>';
		document.querySelector('#tam').innerHTML=html;
		html2+='<button onclick="comprobarErrores();">Comprobar errores</button>';
		html2+='<button onclick="finalizar();">Finalizar</button>';
		html2+='<br><br><output class="crono-si" id="crono-si">00:00:00</output>';
		document.querySelector('#com').innerHTML=html2;
		iniciarSI();
	}
	else{
		html+='<button onclick="rejilla();">4x4</button>';
		html+='<button onclick="rejilla3();">9x9</button>';		
		document.querySelector('#tam').innerHTML=html;
		html2+='<button onclick="empezar();">Empezar</button>';
		document.querySelector('#com').innerHTML=html2;
	}


}

function generarSudoku(){
	let url='api/sudoku/generar/'+ sessionStorage['tamanyo'];


	fetch(url, {method:'POST'}).then(function(respuesta){
					console.log(respuesta);
					if(respuesta.ok){
						
						
						respuesta.json().then(function(datos){
							sessionStorage['token']=datos.TOKEN;
							sessionStorage['id']=datos.ID;
							console.log(datos.TOKEN);
							console.log(datos);
							sessionStorage['inicio']=5;
							sessionStorage['gene']=datos.SUDOKU;
							sessionStorage['generado']=JSON.stringify(datos.SUDOKU);
							console.log('datos generados:' + sessionStorage['generado']);
							
							prueba();
							pintafondo();
							pinta();
							if(sessionStorage['tamanyo']==4) rejilla();
							else rejilla3();
							bloqueo();
							array();
							
						});
					}
					else console.log("Error en la peticion fetch");
				});

	return false;


}


function comprobarErrores(){
	let url = 'api/sudoku/'+sessionStorage['id']+'/comprobar';
	let token=sessionStorage['token'];
    
    console.log("GENERADO: " + sessionStorage['generado']); //string
    console.log("GENE: " + sessionStorage['gene']); //matriz

    console.log(sessionStorage['id']);

    sessionStorage['fallosf']='';
	sessionStorage['fallosc']='';


    let fd = new FormData();
    fd.append('juego', sessionStorage['generado']);

    let cv=document.querySelector('#cv03'),
			ctx=cv.getContext('2d');

	let html='';

	fetch(url, {method:'POST', body:fd,
        headers:{'Authorization':token}}).then(function(respuesta){
		if(respuesta.ok){
			console.log(respuesta);
			respuesta.json().then(function(datos){
				
				
				console.log(datos);
				if(sessionStorage['tamanyo']==4){	
					if(sessionStorage['tamactual']==16){
						if(datos.FALLOS.length>0){
							html += '<article>';
							html += '<h2>TIENES &nbsp' + datos.FALLOS.length + '&nbsp ERRORES</h2>';
							html += '<p>¿Quieres intentar corregirlos?';
							html += '<footer><button onclick="cerrarMensajeModal();">SÍ</button><button onclick="fin();">NO</button>';
							html += '</article>';

							

							mensajeModal(html);
							sessionStorage['tamactual']=20;
							console.log('CAMBIO TAMAÑO A : ' + sessionStorage['tamactual']);
						}
						else{
							let valor=parseInt(document.querySelector('#crono-si').getAttribute('data-valor')),
							horas = Math.floor(valor/3600),
							minutos= Math.floor((valor - horas *3600)/60);
							segundos=valor - horas*3600 - minutos *60;

							horas= (horas<10?'0':'') + horas;
							minutos= (minutos<10?'0':'') + minutos;
							segundos= (segundos<10?'0':'') + segundos;

							html += '<article>';
							html += '<h2>¡ENHORABUENA!</h2>';
							html += '<p>Lo has logrado en un tiempo de &nbsp' + horas+ ':' + minutos + ':' + segundos;
							html += '<footer><button onclick="fin();">Aceptar</button>';
							html += '</article>';

							

							mensajeModal(html);
						}
					}
					for(let i=0;i<datos.FALLOS.length;i++){
						ctx.lineWidth=2;
						ctx.fillStyle= '#F70F1F';
						ctx.strokeStyle= '#F70F1F';
						ctx.fillRect(2.5+datos.FALLOS[i].columna * 160,2.5+datos.FALLOS[i].fila*120,155,115);
						ctx.strokeRect(2.5+datos.FALLOS[i].columna * 160,2.5+datos.FALLOS[i].fila*120,155,115);
						pinta();
						rejilla();
						sessionStorage['fallosf']=sessionStorage['fallosf']+datos.FALLOS[i].fila;
						sessionStorage['fallosc']=sessionStorage['fallosc']+datos.FALLOS[i].columna;
					}
				}
				else{//HACER PARA TAMANYO 9, LO MISMO PERO CAMBIANDO DATOS
					if(sessionStorage['tamactual']==81){
						if(datos.FALLOS.length>0){
							html += '<article>';
							html += '<h2>TIENES &nbsp' + datos.FALLOS.length + '&nbsp ERRORES</h2>';
							html += '<p>¿Quieres intentar corregirlos?';
							html += '<footer><button onclick="cerrarMensajeModal();">SÍ</button><button onclick="fin();">NO</button>';
							html += '</article>';

							

							mensajeModal(html);
							sessionStorage['tamactual']=85;
							console.log('CAMBIO TAMAÑO A : ' + sessionStorage['tamactual']);
						}
						else{
							let valor=parseInt(document.querySelector('#crono-si').getAttribute('data-valor')),
							horas = Math.floor(valor/3600),
							minutos= Math.floor((valor - horas *3600)/60);
							segundos=valor - horas*3600 - minutos *60;

							horas= (horas<10?'0':'') + horas;
							minutos= (minutos<10?'0':'') + minutos;
							segundos= (segundos<10?'0':'') + segundos;

							html += '<article>';
							html += '<h2>¡ENHORABUENA!</h2>';
							html += '<p>Lo has logrado en un tiempo de &nbsp' + horas+ ':' + minutos + ':' + segundos;
							html += '<footer><button onclick="fin();">Aceptar</button>';
							html += '</article>';

							

							mensajeModal(html);
						}
					}
					for(let i=0;i<datos.FALLOS.length;i++){
						ctx.lineWidth=2;
						ctx.fillStyle= '#F70F1F';
						ctx.strokeStyle= '#F70F1F';
						ctx.fillRect(2+datos.FALLOS[i].columna * 71.1,2+datos.FALLOS[i].fila*53.5,67,48);
						ctx.strokeRect(2+datos.FALLOS[i].columna * 71.1,2+datos.FALLOS[i].fila*53.5,67,48);
						/*ctx.fillRect(2+columna*71.1,2+fila*53.5,67,48);
						ctx.strokeRect(2+columna*71.1,2+fila*53.5,67,48);*/
						pinta();
						rejilla3();
						sessionStorage['fallosf']=sessionStorage['fallosf']+datos.FALLOS[i].fila;
						sessionStorage['fallosc']=sessionStorage['fallosc']+datos.FALLOS[i].columna;
					}
				}
				sessionStorage['quitafallos']=1;

				console.log('QUITAFALLOS: '+ sessionStorage['quitafallos']);

				console.log('TAMFALLOS' + datos.FALLOS.length);
				console.log('FALLOS' +datos.FALLOS[0].fila);
				console.log('SESION FALLOS f:' + sessionStorage['fallosf']);
				console.log('SESION FALLOS c:' + sessionStorage['fallosc']);



			});
		}
		else console.log("Error en la peticion fetch");
	});

}

function fin(){
	cerrarMensajeModal();
	finalizar();
}

function mensajeModal(html){
	let div= document.createElement('div');

	//div.id='capa-fondo';
	div.setAttribute('id','capa-fondo');
	div.innerHTML= html;

	document.querySelector('body').appendChild(div);
}

function cerrarMensajeModal(){
	document.querySelector('#capa-fondo').remove();
}

function finalizar(){
	let url = 'api/sudoku/'+sessionStorage['id'];
	let token=sessionStorage['token'];
    
 

	fetch(url, {method:'DELETE',
        headers:{'Authorization':token}}).then(function(respuesta){
		if(respuesta.ok){
			console.log(respuesta);
			respuesta.json().then(function(datos){
				limpiar();
				pararSI();
				sessionStorage['inicio']=0;
				bloqueo();
				console.log(datos);
				sessionStorage['inicio']=0;
				sessionStorage['tamanyo']=0;
				sessionStorage['arraynums']=new Array();
				sessionStorage['empezado']=0;
				sessionStorage['token']='';
				sessionStorage['id']=0;
				sessionStorage['array']='';
				sessionStorage['vacio']=0;
				sessionStorage['mouse']=0;
				sessionStorage['actualizado']=new Array();
				sessionStorage['fallosf']='';
				sessionStorage['fallosc']='';
				sessionStorage['quitafallos']=0;
				sessionStorage['tamactual']=0;

			});
		}
		else console.log("Error en la peticion fetch");
	});

}

function prueba(){
	if(sessionStorage['tamanyo']==4) prueba4();
	else prueba9();
}

function pinta(){
	if(sessionStorage['tamanyo']==4) pinta4();
	else pinta9();
}


function prueba4(){
	let cv=document.querySelector('#cv03'),
		ctx=cv.getContext('2d'),
		dimi=80,
		dimj=70,
		arrayviejo=sessionStorage['generado'],
		arraynuevo=new Array(),
		cont=0,
		indice=0;

	console.log('GENERADO: ' + sessionStorage['generado']);

	for(let i=0;i<arrayviejo.length;i++){
		//verticales
		if(cont<4){
			if(arrayviejo[i]==0 || arrayviejo[i]==1 || arrayviejo[i]==2 || arrayviejo[i]==3 || arrayviejo[i]==4){
				arraynuevo[indice]=arrayviejo[i];
				indice++;
				cont++;
			}
			
		}
		else{
			cont=0;
		}
		

	}
	sessionStorage['arraynums']=arraynuevo;

	console.log('ARRAYNUMS: ' + sessionStorage['arraynums']);
		 
}

function pinta4(){
	let cv=document.querySelector('#cv03'),
		ctx=cv.getContext('2d'),
		dimi=80,
		dimj=70,
		arraynums=sessionStorage['arraynums'],
		cont=0,
		indice=0;

	console.log('GENERADO: ' + sessionStorage['generado']);


	ctx.fillStyle = '#00a';
	ctx.font = 'bold 32px sans-serif';
	ctx.textAlign = 'center';
	

	
	
	for(let i=0;i<arraynums.length;i++){
		//verticales
		if(cont<4){
			if(arraynums[i]!=','){
				if(arraynums[i]!=0){
					ctx.fillText(arraynums[i],dimi,dimj);
				} 
				else ctx.fillText('',dimi,dimj);
				dimi=dimi+160;
				cont++;
			}
			
		}
		else{
			dimi=80;
			dimj=dimj+120;
			cont=0;
		}
		

	}
	
		 
}


function prueba9(){
	let cv=document.querySelector('#cv03'),
		ctx=cv.getContext('2d'),
		dimi=35.6,
		dimj=35,
		arrayviejo=sessionStorage['generado'],
		arraynuevo=new Array(),
		cont=0,
		indice=0;


	console.log('GENERADO: ' + sessionStorage['generado']);

	for(let i=0;i<arrayviejo.length;i++){
		//verticales
		if(cont<9){
			if(arrayviejo[i]==0 || arrayviejo[i]==1 || arrayviejo[i]==2 || arrayviejo[i]==3 || arrayviejo[i]==4 || arrayviejo[i]==5 || arrayviejo[i]==6 || arrayviejo[i]==7 || arrayviejo[i]==8 || arrayviejo[i]==9){
				arraynuevo[indice]=arrayviejo[i];
				indice++;
				cont++;
			}
			
		}
		else{
			cont=0;
		}
		

	}
	sessionStorage['arraynums']=arraynuevo;

	console.log('ARRAYNUMS: ' + sessionStorage['arraynums']);
		 
}

function pinta9(){
	let cv=document.querySelector('#cv03'),
		ctx=cv.getContext('2d'),
		dimi=35.5,
		dimj=35,
		arraynums=sessionStorage['arraynums'],
		cont=0,
		indice=0;

	console.log('GENERADO: ' + sessionStorage['generado']);


	ctx.fillStyle = '#00a';
	ctx.font = 'bold 32px sans-serif';
	ctx.textAlign = 'center';
	

	
	
	for(let i=0;i<arraynums.length;i++){
		//verticales
		if(cont<9){
			if(arraynums[i]!=','){
				if(arraynums[i]!=0){
					ctx.fillText(arraynums[i],dimi,dimj);
				} 
				else ctx.fillText('',dimi,dimj);
				dimi=dimi+71.1;
				cont++;
			}
			
		}
		else{
			dimi=35.5;
			dimj=dimj+53.5;
			cont=0;
		}
		

	}
	
		 
}


function array(){
	let huecos=sessionStorage['arraynums'];

	for(let i=0;i<huecos.length;i++){
		if(huecos[i]!=','){
			sessionStorage['array']=sessionStorage['array']+huecos[i];
		}
	}
	console.log('ARRAY: ' + sessionStorage['array']);
	console.log('ARRAY DE 5: ' + sessionStorage['array'][5]);
}


function pintafondo(){
	if(sessionStorage['tamanyo']==4) pintafondo4();
	else pintafondo9();
}


function pintaselfondo4(cont){
	let cv=document.querySelector('#cv03'),
		ctx=cv.getContext('2d'),
		huecos=sessionStorage['arraynums'],
		a=1,
		b=1;
		c=158,
		d=118,
		contador=0,
		contador2=0;

		console.log(huecos);
		
		for(let i=0;i<huecos.length;i++){
			//verticales
			if(contador<4){
				if(huecos[i]==0 || huecos[i]==1 || huecos[i]==2 || huecos[i]==3 || huecos[i]==4){
					if(huecos[i]==0){
						if(cont==contador2){
							ctx.lineWidth=4;
							ctx.fillStyle= '#E6DADA';
							ctx.fillRect(a,b,c,d);
							
						}
						else{
							ctx.lineWidth=4;
							ctx.fillStyle= '#FFFFFF';
							ctx.fillRect(a,b,c,d);
						}
						
					}
					a=a+160;
					contador++;
					contador2++;
				}
				
			}
			else{
				contador=0;
				b=b+120;
				a=1;
			}
			

		}
		
	
		
}


function pintafondo4(){
	let cv=document.querySelector('#cv03'),
		ctx=cv.getContext('2d'),
		huecos=sessionStorage['arraynums'],
		a=1,
		b=1;
		c=158,
		d=118,
		cont=0,
		cont2=0;

		console.log(huecos);
		
		for(let i=0;i<huecos.length;i++){
			//verticales
			if(cont<4){
				if(huecos[i]==0 || huecos[i]==1 || huecos[i]==2 || huecos[i]==3 || huecos[i]==4){
					if(huecos[i]!=0){
						ctx.lineWidth=4;
						ctx.fillStyle= '#AAA0A0';
						ctx.fillRect(a,b,c,d);
						
					}
					a=a+160;
					cont++;
				}
				
			}
			else{
				cont=0;
				b=b+120;
				a=1;
			}
		}		
}


function filacol4(fila,columna){
		let cv=document.querySelector('#cv03'),
		ctx=cv.getContext('2d'),
		huecos=sessionStorage['arraynums'],
		a=1,
		b=1;
		c=158,
		d=118,
		cont=0,
		cont2=0,
		f=0;

		console.log(huecos);
		
		for(let i=0;i<huecos.length;i++){
			//verticales
			if(cont<4){
				if(huecos[i]==0 || huecos[i]==1 || huecos[i]==2 || huecos[i]==3 || huecos[i]==4){
					if(huecos[i]==0){
						if(fila<2 && columna<2){
							if(f<2 && cont<2){
								ctx.lineWidth=4;
							ctx.fillStyle= '#FBD2D2';
							ctx.fillRect(a,b,c,d);
							}
						}
						if(fila<2 && columna>1){
							if(f<2 && cont>1){
								ctx.lineWidth=4;
							ctx.fillStyle= '#FBD2D2';
							ctx.fillRect(a,b,c,d);
							}
						}
						if(fila>1 && columna<2){
							if(f>1 && cont<2){
								ctx.lineWidth=4;
							ctx.fillStyle= '#FBD2D2';
							ctx.fillRect(a,b,c,d);
							}
						}
						if(fila>1 && columna>1){
							if(f>1 && cont>1 ){
								ctx.lineWidth=4;
							ctx.fillStyle= '#FBD2D2';
							ctx.fillRect(a,b,c,d);
							}
						}	
							
							
					}
					a=a+160;
					cont++;
				}
				
			}
			else{
				cont=0;
				b=b+120;
				a=1;
				f++;
			}
		}
}

function fila4(fila){
	let cv=document.querySelector('#cv03'),
		ctx=cv.getContext('2d'),
		huecos=sessionStorage['arraynums'],
		a=1,
		b=1;
		c=158,
		d=118,
		cont=0,
		cont2=0,
		f=0;

		console.log(huecos);
		
		for(let i=0;i<huecos.length;i++){
			//verticales
			if(cont<4){
				if(huecos[i]==0 || huecos[i]==1 || huecos[i]==2 || huecos[i]==3 || huecos[i]==4){
					if(huecos[i]==0){
						
							if(f==fila){
								ctx.lineWidth=4;
							ctx.fillStyle= '#FBD2D2';
							ctx.fillRect(a,b,c,d);
							}
						
							
							
					}
					a=a+160;
					cont++;
				}
				
			}
			else{
				cont=0;
				b=b+120;
				a=1;
				f++;
			}
		}
}

function columna4(columna){
	let cv=document.querySelector('#cv03'),
		ctx=cv.getContext('2d'),
		huecos=sessionStorage['arraynums'],
		a=1,
		b=1;
		c=158,
		d=118,
		cont=0,
		cont2=0,
		f=0;

		console.log(huecos);
		
		for(let i=0;i<huecos.length;i++){
			//verticales
			if(cont<4){
				if(huecos[i]==0 || huecos[i]==1 || huecos[i]==2 || huecos[i]==3 || huecos[i]==4){
					if(huecos[i]==0){
						
							if(cont==columna){
								ctx.lineWidth=4;
								ctx.fillStyle= '#FBD2D2';
								ctx.fillRect(a,b,c,d);
							}		
					}
					a=a+160;
					cont++;
				}
				
			}
			else{
				cont=0;
				b=b+120;
				a=1;
				f++;
			}
		}
}

function filacol9(fila,columna){
		let cv=document.querySelector('#cv03'),
		ctx=cv.getContext('2d'),
		huecos=sessionStorage['arraynums'],
		a=1,
		b=1;
		c=69,
		d=51,
		cont=0,
		cont2=0,
		f=0;

		console.log(huecos);
		
		for(let i=0;i<huecos.length;i++){
			//verticales
			if(cont<9){
				if(huecos[i]==0 || huecos[i]==1 || huecos[i]==2 || huecos[i]==3 || huecos[i]==4 || huecos[i]==5 || huecos[i]==6 || huecos[i]==7 || huecos[i]==8 || huecos[i]==9){
					if(huecos[i]==0){
						if(fila<3 && columna<3){
							if(f<3 && cont<3){
								ctx.lineWidth=4;
							ctx.fillStyle= '#FBD2D2';
							ctx.fillRect(a,b,c,d);
							}
						}
						if(fila<3 && columna>3 && columna<6){
							if(f<3 && cont>3 && cont<6){
								ctx.lineWidth=4;
							ctx.fillStyle= '#FBD2D2';
							ctx.fillRect(a,b,c,d);
							}
						}
						if(fila<3 && columna<5){
							if(f<3 && cont<5){
								ctx.lineWidth=4;
							ctx.fillStyle= '#FBD2D2';
							ctx.fillRect(a,b,c,d);
							}
						}
						if(fila>2 && fila<6 && columna<3){
							if(f>2 && f<6 && cont<3){
								ctx.lineWidth=4;
							ctx.fillStyle= '#FBD2D2';
							ctx.fillRect(a,b,c,d);
							}
						}
						if(fila>2 && fila<6 && columna>2 && columna<6){
							if(f>2 && f<6 && cont>2 && cont<6){
								ctx.lineWidth=4;
							ctx.fillStyle= '#FBD2D2';
							ctx.fillRect(a,b,c,d);
							}
						}
						if(fila>2 && fila<6 && columna>5){
							if(f>2 && f<6 && cont>5){
								ctx.lineWidth=4;
							ctx.fillStyle= '#FBD2D2';
							ctx.fillRect(a,b,c,d);
							}
						}
						if(fila>5 && columna<3){
							if(f>5 && cont<3){
								ctx.lineWidth=4;
							ctx.fillStyle= '#FBD2D2';
							ctx.fillRect(a,b,c,d);
							}
						}
						if(fila>5 && columna>2 && columna<6){
							if(f>5 && cont>2 && cont<6){
								ctx.lineWidth=4;
							ctx.fillStyle= '#FBD2D2';
							ctx.fillRect(a,b,c,d);
							}
						}
						if(fila>5 && columna>5){
							if(f>5 && cont>5){
								ctx.lineWidth=4;
							ctx.fillStyle= '#FBD2D2';
							ctx.fillRect(a,b,c,d);
							}
						}	
							
							
					}
					a=a+71.1;
					cont++;
				}
				
			}
			else{
				cont=0;
				b=b+53.5;
				a=1;
				f++;
			}
		}
}

function fila9(fila){
	let cv=document.querySelector('#cv03'),
		ctx=cv.getContext('2d'),
		huecos=sessionStorage['arraynums'],
		a=1,
		b=1;
		c=69,
		d=51,
		cont=0,
		cont2=0,
		f=0;

		console.log(huecos);
		
		for(let i=0;i<huecos.length;i++){
			//verticales
			if(cont<9){
				if(huecos[i]==0 || huecos[i]==1 || huecos[i]==2 || huecos[i]==3 || huecos[i]==4 || huecos[i]==5 || huecos[i]==6 || huecos[i]==7 || huecos[i]==8 || huecos[i]==9){
					if(huecos[i]==0){
						
							if(f==fila){
								ctx.lineWidth=4;
							ctx.fillStyle= '#FBD2D2';
							ctx.fillRect(a,b,c,d);
							}
						
							
							
					}
					a=a+71.1;
					cont++;
				}
				
			}
			else{
				cont=0;
				b=b+53.5;
				a=1;
				f++;
			}
		}
}

function columna9(columna){
	let cv=document.querySelector('#cv03'),
		ctx=cv.getContext('2d'),
		huecos=sessionStorage['arraynums'],
		a=1,
		b=1;
		c=69,
		d=51,
		cont=0,
		cont2=0,
		f=0;

		console.log(huecos);
		
		for(let i=0;i<huecos.length;i++){
			//verticales
			if(cont<9){
				if(huecos[i]==0 || huecos[i]==1 || huecos[i]==2 || huecos[i]==3 || huecos[i]==4 || huecos[i]==5 || huecos[i]==6 || huecos[i]==7 || huecos[i]==8 || huecos[i]==9){
					if(huecos[i]==0){
						
							if(cont==columna){
								ctx.lineWidth=4;
								ctx.fillStyle= '#FBD2D2';
								ctx.fillRect(a,b,c,d);
							}		
					}
					a=a+71.1;
					cont++;
				}
				
			}
			else{
				cont=0;
				b=b+53.5;
				a=1;
				f++;
			}
		}
}

function pintaselfondo9(cont){
	let cv=document.querySelector('#cv03'),
		ctx=cv.getContext('2d'),
		huecos=sessionStorage['arraynums'],
		a=1,
		b=1;
		c=69,
		d=51,
		contador=0,
		contador2=0;

		console.log(huecos);
		
		for(let i=0;i<huecos.length;i++){
			//verticales
			if(contador<9){
				if(huecos[i]==0 || huecos[i]==1 || huecos[i]==2 || huecos[i]==3 || huecos[i]==4 || huecos[i]==5 || huecos[i]==6 || huecos[i]==7 || huecos[i]==8 || huecos[i]==9){
					if(huecos[i]==0){
						if(cont==contador2){
							ctx.lineWidth=4;
							ctx.fillStyle= '#E6DADA';
							ctx.fillRect(a,b,c,d);
							
						}
						else{
							ctx.lineWidth=4;
							ctx.fillStyle= '#FFFFFF';
							ctx.fillRect(a,b,c,d);
						}
						
					}
					a=a+71.1;
					contador++;
					contador2++;
				}
				
			}
			else{
				contador=0;
				b=b+53.5;
				a=1;
			}
			

		}
		
	
		
}

function pintafondo9(){
	let cv=document.querySelector('#cv03'),
		ctx=cv.getContext('2d'),
		huecos=sessionStorage['arraynums'],
		a=1,
		b=1;
		c=69,
		d=51,
		cont=0,
		cont2=0;
		
		for(let i=0;i<huecos.length;i++){
			//verticales
			if(cont<9){
				if(huecos[i]==0 || huecos[i]==1 || huecos[i]==2 || huecos[i]==3 || huecos[i]==4 || huecos[i]==5 || huecos[i]==6 || huecos[i]==7 || huecos[i]==8 || huecos[i]==9){
					if(huecos[i]!=0){
						ctx.lineWidth=0;
						ctx.fillStyle= '#AAA0A0';
						ctx.fillRect(a,b,c,d);
						
					}
					a=a+71.1;
					cont++;
				}
				
			}
			else{
				cont=0;
				b=b+53.5;
				a=1;
			}
			

		}
		
	
		
}

function pintar001(){
	let cv=document.querySelector('#cv03'),
		ctx=cv.getContext('2d');

	ctx.beginPath();
	ctx.strokeStyle= '#F10EDE';
	ctx.lineWidth=4;
	ctx.moveTo(100,200);
	ctx.lineTo(100,300);
	ctx.lineTo(200,300);
	ctx.closePath();

	ctx.stroke();
	ctx.fillStyle= '#F65608';
	ctx.fill();

}

function iniciarSI(){
	document.querySelector('#crono-si').innerHTML='00:00:00';
	document.querySelector('#crono-si').setAttribute('data-valor','0');
	document.querySelector('#crono-si').removeAttribute('data-parar');

	let idTemp=setInterval(actualizarSI, 1000); //actualizara la funcion cada segundo
	document.querySelector('#crono-si').setAttribute('data-id-temp', idTemp);

}

function pararSI(){
	let idTemp=document.querySelector('#crono-si').getAttribute('data-id-temp');
	clearInterval(idTemp);
}

function actualizarSI(){
	let valor=parseInt(document.querySelector('#crono-si').getAttribute('data-valor')) + 1,
	horas = Math.floor(valor/3600),
	minutos= Math.floor((valor - horas *3600)/60);
	segundos=valor - horas*3600 - minutos *60;

horas= (horas<10?'0':'') + horas;
minutos= (minutos<10?'0':'') + minutos;
segundos= (segundos<10?'0':'') + segundos;

document.querySelector('#crono-si').innerHTML=`${horas}:${minutos}:${segundos}`;
document.querySelector('#crono-si').setAttribute('data-valor',valor);


}



