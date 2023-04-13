const promise = new Promise(function (resolve, reject) {
	resolve("hey!");
});

const cow = 8;

const countCows = new Promise(function (resolve, reject) {
	if (cow > 10) {
		resolve(`Tenemos ${cow} vacas en la granja`);
	} else {
		reject(`No tenemos suficientes vacas en la granja`);
	}
});

countCows
	.then((result) => {
		console.log(result);
	})
	.catch((err) => {
		console.error(err);
	})
	.finally(() => console.log("Finally"));
