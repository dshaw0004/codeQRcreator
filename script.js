const img = document.getElementById("img");
const textbox = document.getElementById("input");
const btn2 = document.getElementById("btn2");
function log() {
	let input = textbox.value;
	// img.classList.remove("invisible");
	if (input === "") {
		alert("Please fill the input");
		return;
	}
	img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;
	img.classList.add("img-border");
	// btn2.classList.remove("invisible");
}
function clear() {
	img.classList.add("invisible");
	btn2.classList.add("invisible");
}
