const inputText = document.getElementById("input-text");
const outputP1 = document.getElementById("output-p1");
const outputP2 = document.getElementById("output-p2");
const outputImg = document.getElementById("output-img");

let hashCode= [["e", "enter"],
				["i", "imes"],
				["a", "ai"],
				["o", "ober"],
				["u", "ufat"]];
console.table(hashCode);

function outputStyleAction(action) {
	if (action == true) {
		outputP1.style.display = 'none';
		outputImg.style.display = 'none';
		outputP2.style.fontSize = '1.5rem';
		outputP2.style.margin = '1.5rem';
	} else {
		outputP1.style.display = 'inline-block';
		outputImg.style.display = 'inline-block';
		outputP2.style.fontSize = '1.0rem';
		outputP2.style.margin = '0.5rem';
	}
}

function BtnCopyOutput() {
	inputText.innerHTML = outputP2.value;
	outputP2.innerHTML = "Digite um texto que você deseja criptografar ou descriptografar";
	outputStyleAction(false);
}

function btnEncrypt() {
	// const encryptedText = encrypt(inputText.value);
	outputP2.innerHTML = encrypt(inputText.value);
	inputText.value = "";
	outputStyleAction(true);
}

function btnDecrypt() {
	outputP2.innerHTML = decrypt(inputText.value);
	inputText.value = "";
	outputStyleAction(true)
}

function encrypt(encodeText) {

	encodeText = encodeText.toLowerCase()
	
	for(let i = 0; i < hashCode.length; i++) {
		if(encodeText.includes(hashCode[i][0])) {
			encodeText = encodeText.replaceAll(hashCode[i][0], hashCode[i][1]);
		}
	}
	return encodeText
}

function decrypt(decodeText) {

	decodeText = decodeText.toLowerCase();
	
	for(let i = 0; i < hashCode.length; i++) {
		if(decodeText.includes(hashCode[i][1])) {
			decodeText = decodeText.replaceAll(hashCode[i][1], hashCode[i][0]);
		}
	}
	return decodeText
}
