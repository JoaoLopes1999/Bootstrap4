/*
API JS que vai ler JSON
*/
$.getJSON("viagens.json", function(json)
	
	class soma{
				constructor (local, viagem){
					this.loc = local;
					this.viag =viagem;
				}
	get valor (){
		return this.loc + this.viag;
	}
	};

let somaPC = new soma(json.férias[0].valor, json.transporte[0].valor);
let somaPA = new soma(json.férias[0].valor, json.transporte[1].valor);
let somaPV = new soma(json.férias[0].valor, json.transporte[2].valor);

console.log(somaPC.valor);