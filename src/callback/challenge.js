// Se requiere el módulo 'xmlhttprequest' para hacer solicitudes HTTP
const XMLHttpRequest = require("xmlhttprequest");

// Se define la URL de la API a la que se hará la solicitud
const API = "https://api.escuelajs.co/api/v1";

// Se define la función 'fectchData' que toma dos argumentos: 'urlAPI' y 'callback'
function fectchData(urlAPI, callback) {
	// Se crea una nueva instancia de 'XMLHttpRequest'
	let xhttp = new XMLHttpRequest();

	// Se abre una nueva solicitud HTTP GET a la URL especificada en 'urlAPI'
	xhttp.open("GET", urlAPI, true);

	// Se define una función para manejar el cambio de estado de la solicitud
	xhttp.onreadystatechange = function (event) {
		// Si el estado de la solicitud es 4 (completado)
		if (xhttp.readyState === 4) {
			// Si el código de estado HTTP es 200 (éxito)
			if (xhttp.status === 200) {
				// Se llama a la función 'callback' con dos argumentos: null (sin error) y los datos recibidos (convertidos a un objeto JavaScript)
				callback(null, JSON.parse(xhttp.responseText));
			}
		} else {
			// Si el estado de la solicitud no es 4 (completado), se crea un nuevo objeto de error y se llama a la función 'callback' con dos argumentos: el objeto de error y null (sin datos)
			const error = new Error("Error " + urlAPI);
			return callback(error, null);
		}
	};

	// Se envía la solicitud HTTP
	xhttp.send();
}
