var results = [];
function messageHandler(e) {
	console.log(e);
	postMessage(e.data.reduce(function(prev,curr,currIndex) {
		return prev+parseInt(curr,10);
	},0))

}
addEventListener("message", messageHandler, true);