// Se requiere el módulo 'xmlhttprequest' para hacer solicitudes HTTP
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

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

// Se llama a la función 'fectchData' para obtener los productos de la API
fectchData(`${API}/products`, function (error1, data1) {
	// Si hay un error, se muestra en la consola
	if (error1) return console.error(error1);

	// Se llama a la función 'fectchData' para obtener los detalles del primer producto de la API
	fectchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
		// Si hay un error, se muestra en la consola
		if (error2) return console.error(error2);

		// Se llama a la función 'fectchData' para obtener los detalles de la categoría del producto
		fectchData(
			`${API}/categories/${data2?.category.id}`,
			function (error3, data3) {
				// Si hay un error, se muestra en la consola
				if (error3) return console.error(error3);

				// Se imprime en la consola los detalles del primer producto
				console.log(data1[0]);

				// Se imprime en la consola el título del producto
				console.log(data2.title);

				// Se imprime en la consola el nombre de la categoría del producto
				console.log(data3.name);
			}
		);
	});
});
