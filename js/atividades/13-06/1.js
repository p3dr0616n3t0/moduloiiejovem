var opcao1 = window.prompt("1 - Vertebrado\n2 - Invertebrado");

switch(opcao1){
	case "1":
		var opcao2 = window.prompt("1 - Ave\n2 - Mamífero");
		switch(opcao2){
			case "1":
				var opcao3 = window.prompt("1 - Carnivoro\n2 - Onivoro");
				switch(opcao3){
					case "1":
						alert("Aguia");
						break;
					case "2":
						alert("P O M B A")
					break;
				}
			break;
			case "2":
				var opcao4 = window.prompt("1 - Mamífero\n2 - Herbívoro");
				switch(opcao4){
					case "1":
						alert("Aguia");
					break;
				}
			break;

		}
	break;
	case "2":
		var opcao2 = window.prompt("1 - Inseto\n2 - Anelídio");
		switch(opcao2){
			case "2":
				var opcao3 = window.prompt("1 - Hematofago\n2 - Herbívoro");
				
				switch(opcao3){
					case "2":
						alert("Pulga");
					break;
				}
			break;

		}
	break;
}