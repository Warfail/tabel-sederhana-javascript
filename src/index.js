	var Data = [
	    {'nama':'Rezky', 'email':'rezky@bot.com', 'telepon':'(353) 01 222 3333"'},
		{'nama':'Diva', 'email':'diva@gmail.com', 'telepon':'(01) 22 888 4444'},
		{'nama':'Nando', 'email':'nando@gmail.com', 'telepon':'0097 22 654 00033'},
	]



	Tabel(Data)

	function Tabel(data){
		var table = document.getElementById('myTable')
		table.innerHTML = ' '
		for (var i = 0; i < data.length; i++){
			var row = `<tr>
							<td>${data[i].nama}</td>
							<td>${data[i].email}</td>
							<td>${data[i].telepon}</td>
					  </tr>`
			table.innerHTML += row


		}
	}