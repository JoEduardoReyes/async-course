const API =
	"https://youtube-v38.p.rapidapi.com/channel/videos/?id=UCcYqQI1YihP30ZZCHdHGWjA&hl=es&gl=US";

const content = null || document.getElementById("content");

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "075674deabmsh839ea5f4f0010a0p14d0edjsn7e3cafb342b1",
		"X-RapidAPI-Host": "youtube-v38.p.rapidapi.com",
	},
};

async function fetchData(urlAPI) {
	const response = await fetch(urlAPI, options);
	const data = await response.json();
	return data;
}

(async () => {
	try {
		const videos = await fetchData(API);
		// let view = `
		// ${videos.contents
		// 	.map(
		// 		(video) => `
		// <div class="group relative">
		// 	<div
		// 		class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
		// 	>
		//   <img src="${video.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full" />
		// 	</div>
		// 	<div class="mt-4 flex justify-between">
		// 	  <h3 class="text-sm text-gray-700">
		// 	    <span aria-hidden="true" class="absolute inset-0"></span>
		// 	    ${video.snippet.title}
		// 	  </h3>
		//   </div>
		// </div>
		// `
		// 	)
		// 	.slice(0, 4)
		// 	.join("")}

		// `;
		// content.innerHTML = view;
	} catch (error) {
		console.error(error);
	}
})();
