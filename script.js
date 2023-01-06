const img = document.getElementById("img");
const textbox = document.getElementById("input");
const btn2 = document.getElementById("btn2");
const imgbox = document.querySelector(".img-box");
const headingP = document.querySelector(".heading-p");
function log() {
	let input = textbox.value;
	if (input === "") {
		alert("Please fill the input");
		return;
	}
	img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;
	imgbox.style.visibility = "visible";
	img.classList.add("img-border");
	btn2.style.visibility = "visible";
}
function clear() {
	imgbox.style.visibility = "hidden";
	btn2.style.visibility = "hidden";
}

const download = document.querySelector("#download");

download.addEventListener("click", (e) => {
	e.preventDefault();
	download.innerText = "Downloading file...";
	fetchFile(img.src);
});

function fetchFile(url) {
	fetch(url)
		.then((res) => res.blob())
		.then((file) => {
			let tempUrl = URL.createObjectURL(file);
			const aTag = document.createElement("a");
			aTag.href = tempUrl;
			aTag.download = url.replace(
				"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=",
				""
			);
			document.body.appendChild(aTag);
			aTag.click();
			downloadBtn.innerText = "Download File";
			URL.revokeObjectURL(tempUrl);
			aTag.remove();
		})
		.catch(() => {
			alert("Failed to download file!");
			download.innerText = "Download File";
		});
}
document.getElementById("li1").addEventListener("click", () => {
	document.getElementById("generator").style.display = "unset";
	document.getElementById("reader").style.display = "none";
	headingP.textContent = "Convert any text into QR Code";
});
document.getElementById("li2").addEventListener("click", () => {
	document.getElementById("reader").style.display = "unset";
	document.getElementById("generator").style.display = "none";
	headingP.textContent = "Scan any QR Code";
});
// document.getElementsByTagName("li").addEventListener("click", () => {
// 	document.getElementsByTagName("section").classList.toggle("d-hide");
// 	// document.getElementById("generator").style.display = "none";
// });
