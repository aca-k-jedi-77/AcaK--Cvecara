function printr(){
	var loadedRoses = JSON.parse(sessionStorage.getItem('roses'));
	var kolruza = document.querySelector(".kolruza");
	var cenaruza = document.querySelector(".cenaruza");
	kolruza.textContent = loadedRoses.quantity;
	cenaruza.textContent = parseInt(loadedRoses.quantity)*parseInt(loadedRoses.price);
};
document.addEventListener('load', printr());

function printl(){
	var loadedLillies = JSON.parse(sessionStorage.getItem('lillies'));
	var kolljiljana = document.querySelector(".kolljiljana");
	var cenaljiljana = document.querySelector(".cenaljiljana");
	kolljiljana.textContent = loadedLillies.quantity;
	cenaljiljana.textContent = parseInt(loadedLillies.quantity)*parseInt(loadedLillies.price);
};
document.addEventListener('load', printl());

function printg(){
	var loadedGerbers = JSON.parse(sessionStorage.getItem('gerbers'));
	var kolgerbera = document.querySelector(".kolgerbera");
	var cenagerbera = document.querySelector(".cenagerbera");
	kolgerbera.textContent = loadedGerbers.quantity;
	cenagerbera.textContent = parseInt(loadedGerbers.quantity)*parseInt(loadedGerbers.price);
};
document.addEventListener('load', printg());

function printSumTotal(){
	var sumTotal = JSON.parse(sessionStorage.getItem('sumTotal'));
	var ukCena = document.querySelector('.ukCena');
	ukCena.textContent = sumTotal;
}
document.addEventListener('load', printSumTotal());
