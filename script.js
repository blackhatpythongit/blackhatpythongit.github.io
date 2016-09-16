window.onload = init;

function init(){
	document.getElementsByTagName("form")[0].onsubmit = calc
}

function calc(){
	var string = document.getElementById("string").value;
	document.getElementById("string").value = op(string);
	return false;
}

function op(string){
	var actionType = "";
	var radioButtonSet = document.getElementsByTagName("form")[0].actionType;
	for (var i=0; i<radioButtonSet.length; i++)
	{
		if (radioButtonSet[i].checked) {
			actionType = radioButtonSet[i].actionType;
		}
	}

	swith(actionType){
		case "chr2binary":
			return string2binary(string);
		case "binary2chr":
			return binary2string(string);
		default:
			alert("No valid action was chosen");
			return "";
	}
}

function chr2binary(string)
{
	return (String.charCodeAt(string)).toString(2)
}

function binary2chr(string)
{
	return (String.fromcharCode(Number(string)))
}
