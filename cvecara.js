
function sumar(){
	var kolicinar = document.getElementById('kolicinar');
	var pokomr = document.getElementById('pokomr');
	var ukupnacr = document.getElementById('ukupnacr');  
		ukupnacr.value = kolicinar.value*pokomr.value;
		return;
};

function sumal(){
	var kolicinal = document.getElementById('kolicinal');
	var pokoml = document.getElementById('pokoml');
	var ukupnacl = document.getElementById('ukupnacl');  
		ukupnacl.value = kolicinal.value*pokoml.value;
		return;
};

function sumag(){
	var kolicinag = document.getElementById('kolicinag');
	var pokomg = document.getElementById('pokomg');
	var ukupnacg = document.getElementById('ukupnacg');  
		ukupnacg.value = kolicinag.value*pokomg.value;
		return;
};

function sumauk(){
	var ukupnaCena = document.getElementById('ukupnaCena');
		ukupnaCena.value = parseInt(ukupnacr.value) + parseInt(ukupnacl.value) + parseInt(ukupnacg.value);
		return;
};

function store(){
	var roses = { quantity: kolicinar.value, price: pokomr.value };
	var lillies = { quantity: kolicinal.value, price: pokoml.value };
	var gerbers = { quantity: kolicinag.value, price: pokomg.value };
	var sumTotal = ukupnaCena.value;

	sessionStorage.roses = JSON.stringify(roses);
	sessionStorage.lillies = JSON.stringify(lillies);
	sessionStorage.gerbers = JSON.stringify(gerbers);
	sessionStorage.sumTotal = JSON.stringify(sumTotal);
		return;
}
