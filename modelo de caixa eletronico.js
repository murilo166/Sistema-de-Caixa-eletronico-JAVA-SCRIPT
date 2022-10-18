let x = 0;
		var saldo = 100.5; //Float


		var nome=prompt("escreva seu nome:");
		alert("ola"+"  "+nome+"  "+ "e uma prazer ter voce aqui");

		function inicio() {

			var escolha = parseInt(prompt('Selecione uma opção 1. Saldo  5.extrato  3.Saque    2.deposito  6.trasferencia   4.sair'));

			switch(escolha){

				case 1:
					ver_saldo();
					break


					case 2:
						fazer_deposito();
						break

						case 3:
							fazer_saque();
							break

							case 4:
								sair();
								break

								case 5:
									ver_extrato();
									break

									case 6:
										fazer_trasferencia();
										break
									
			}
		}
var senha=3589;
		var senha=parseInt(prompt("digite a senha de 4 digitos"));
		
		while(senha!==3589){
			alert("senha incorreta digite novamente");
			var senha=parseInt(prompt("digite a senha de 4 digitos"));
		}


		function ver_saldo() {
			var senha=3589;
		var senha=parseInt(prompt("digite a senha de 4 digitos"));
		
		while(senha!==3589){
			alert("senha incorreta digite novamente");
			var senha=parseInt(prompt("digite a senha de 4 digitos"));
		}
			alert('Seu saldo atual é: ' + saldo);
			inicio();
		}
		

		function fazer_deposito() {

			var senha=3589;
		var senha=parseInt(prompt("digite a senha de 4 digitos"));
		
		while(senha!==3589){
			alert("senha incorreta digite novamente");
			var senha=parseInt(prompt("digite a senha de 4 digitos"));
		}
			
			var deposito = parseFloat(prompt('Qual o valor para depósito?'));
			// Not a Number
			if (isNaN(deposito) || deposito === '') {
				alert('Por favor, informe um número.');
				fazer_deposito();
			} else {
				saldo += deposito;
				//saldo = saldo + deposito;
				ver_saldo();
			}
		}

		function fazer_saque() {

			var senha=3589;
		var senha=parseInt(prompt("digite a senha de 4 digitos"));
		
		while(senha!==3589){
			alert("senha incorreta digite novamente");
			var senha=parseInt(prompt("digite a senha de 4 digitos"));
		}
			
			var saque = parseFloat(prompt('Qual o valor para saque?'));
			
			if (isNaN(saque) || saque === '') {
				alert('Por favor, informe um número:');
				
				}if(saldo<saque){
				alert("operaçao nao autorizada");
			}
			else {
				var n= saldo-saque;
				alert("seu saque foi de" + saque);
				alert("seu novo saldo="+ n);

			}
		}

		function erro() {
			var senha=3589;
		var senha=parseInt(prompt("digite a senha de 4 digitos"));
		
		while(senha!==3589){
			alert("senha incorreta digite novamente");
			var senha=parseInt(prompt("digite a senha de 4 digitos"));
		}
			alert('Por favor, informe um número entre 1 e 6.');
			inicio();
		}

		function sair() {
			var confirma = confirm('Você deseja sair?');
			if (confirma) {
				window.close();
				alert("foi um prazer ter voce aqui" +"  "+nome);
			} else {
				inicio();
			}
		}

		function ver_extrato() {
			var senha=3589;
		var senha=parseInt(prompt("digite a senha de 4 digitos"));
		
		while(senha!==3589){
			alert("senha incorreta digite novamente");
			var senha=parseInt(prompt("digite a senha de 4 digitos"));
		}
			alert( "seu saldo"+ saldo );
			alert("compra de prduto valor: 52,00");
			alert("desconto anuidade cartao:22,00");
			
		}

		function fazer_trasferencia(){
			var conta=parseInt(prompt("insira o numero da conta que voce deseja traferir "));

			if(isNaN (conta) || conta==" "){
				alert("por favor digite apenas numeros");
			}if(conta>saldo||conta<0){
				alert("seu saldo e insuficiente");
				alert("operaçao nao autorizada");
			}else{
				var trasferencia=saldo-conta;
				alert("sua trasferencia no valor de:"+" "+ " R$ " + conta+"   " +"foi feita com sucesso");
				alert("seu saldo atual e:"+" " + trasferencia);
			}

		}
		

		inicio();