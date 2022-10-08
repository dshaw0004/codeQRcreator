const img = document.getElementById("img");
const textbox = document.getElementById("input");
const btn2 = document.getElementById("btn2");
function log() {
	let input = textbox.value;
	if (input === "") {
		alert("Please fill the input");
		return;
	}
	img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;
	img.classList.add("img-border");
	// btn2.style.visibility = "visible";
}
function clear() {
	img.src = " ";
	textbox.value = " ";
	btn2.style.visibility = "hidden";
}
