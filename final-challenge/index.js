async function fetchData(url) {
	try {
		// verificamos que el URL sea valido
		const APIurl = new URL(url);
	} catch {
		// creamos el error
		throw new Error("Invalid URL");
	}
	try {
		// validar que exista url
		const response = await fetch(url, { method: "GET" });
		return response.json();
	} catch {
		throw new Error("Something was wrong");
	}
}

console.group("primeraPrueba");
const test = fetchData("https://api.escuelajs.co/api/v1/categories");
console.log(test);
console.groupEnd;
console.group("SegundaPrueba");
const test2 = fetchData("----");
console.log(test2);
console.groupEnd;
console.group("TerceraPrueba");
const test3 = fetchData("https://domain-a.com/api-1");
console.log(test3);
console.groupEnd;
