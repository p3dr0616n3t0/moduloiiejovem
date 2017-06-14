var entrada, valor1, valor2;
window.alert("1 - Adição\n2 - Subtração\n3 - Multiplicação\n4 - Divisão");
entrada = window.prompt("Escolha a Operação\n1+, 2-, 3* ou 4/");

switch(entrada){
	case "1":
		valoradicao1 = parseFloat(window.prompt("Primeiro Valor"));
		valoradicao2 = parseFloat(window.prompt("Segundo Valor"));
		window.alert("O resultado é " + (valoradicao1 + valoradicao2));
		break;
	case "2":
		valoradicao1 = parseFloat(window.prompt("Primeiro Valor"));
		valoradicao2 = parseFloat(window.prompt("Segundo Valor"));
		window.alert("O resultado é " + (valoradicao1 - valoradicao2));
		break;
	case "3":
		valoradicao1 = parseFloat(window.prompt("Primeiro Valor"));
		valoradicao2 = parseFloat(window.prompt("Segundo Valor"));
		window.alert("O resultado é " + (valoradicao1 * valoradicao2));
		break;
	case "4":
		valoradicao1 = parseFloat(window.prompt("Primeiro Valor"));
		valoradicao2 = parseFloat(window.prompt("Segundo Valor"));
		window.alert("O resultado é " + (valoradicao1 / valoradicao2));
		break;
}
