
var tableHeaders = ['NAMA','EMAIL','TELEPON'] 

function createNewTableHeader(headerTitle){
	const temp = document.createElement('th');
	temp.appendChild(document.createTextNode(headerTitle));
	return temp
}

function addHeader() {
	var tableHeaderPlaceHolder = document.getElementById('table-header-place-holder');
	tableHeaders.forEach(header=>{
		tableHeaderPlaceHolder.appendChild(createNewTableHeader(header));		
	})	
}

document.addEventListener("DOMContentLoaded", function(event) { 
	addHeader();
});


var Data = [
	["Rezky", "rezky@bot.com", "(353) 01 222 3333"],
	["Diva", "diva@gmail.com", "(01) 22 888 4444"],
	["Nando", "nando@gmail.com", "0097 22 654 00033"],
	
]

fetch = document.getElementById('fetch');



	for (var i = 0; i < Data.length; i++){
		var newRow = fetch.insertRow(fetch.length);
			for (var j = 0; j < Data[i].length; j++){
				var cell = newRow.insertCell(j);
				cell.innerHTML = Data[i][j];
			}
	


	}

