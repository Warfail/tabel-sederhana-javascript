	var Data = [
	    {'nama':'Rezky', 'email':'rezky@bot.com', 'telepon':'(353) 01 222 3333"'},
		{'nama':'Diva', 'email':'diva@gmail.com', 'telepon':'(01) 22 888 4444'},
		{'nama':'Nando', 'email':'nando@gmail.com', 'telepon':'0097 22 654 00033'},
	]

	
		// var column = $(this).data('column')
		// var order = $(this).data('order')
		// var text = $(this).html()
		// text = text.substring(0, text.length - 1)

		// if(order == 'desc'){
		// 	$(this).data('order', "asc")
		// 	myArray = myArray.sort((a,b) => a[column] > b[column] ? 1 : -1)
		// 	text += '&#9660'

		// }else{
		// 	$(this).data('order', "desc")
		// 	myArray = myArray.sort((a,b) => a[column] < b[column] ? 1 : -1)
		// 	text += '&#9650'

		// }
		// $(this).html(text)
		// buildTable(myArray)


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