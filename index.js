window.onload = function() {
	document.getElementById("normal").onclick = function(event) { sayHappyBirthday(event, "normalMessage"); };
	document.getElementById("spunky").onclick = function(event) { sayHappyBirthdayButMakeItSpunky(event); };
}
const spunkyWordsIknow = ['radical', 'awesome', 'sick', 'gnarly', 'groovy', 'tubular'];
const randomCoolWords = ['absolute rock and roll', 'sick and awesome', 'stellar', 'electric'];

function sayHappyBirthday(event, type) {
	document.getElementById("schmunkifiedMessage").style.display = "none";
	document.getElementById("spunkyMessageIntro").style.display = "none";
	document.getElementById(type).style.display = "block";
}

function sayHappyBirthdayButMakeItSpunky(event) {
	document.getElementById("normalMessage").style.display = "none";
	const words = spunkyWordsIknow.join(', ');
	console.log(Array.from(spunkyWordsIknow))
	document.getElementById("words").innerHTML = words;
	document.getElementById("spunkyMessageIntro").style.display = "block";
	document.getElementById("spunkyWordButton").onclick = function(event) { schmunkifyIt(event) }
}

function schmunkifyIt(event) {
	let spunkyWord = document.querySelector("#spunkyWordInput").value.toString().toLowerCase();
	let vowels = 'aeiou';
	var max = randomCoolWords.length;
	var randomIndex = Math.floor(Math.random() * max);
	var randomWord = randomCoolWords[randomIndex];
	console.log(randomWord);
	if (vowels.includes(randomWord[0])) {
		randomWord = "an " + randomWord;
	} else {
		randomWord = "a " + randomWord;
	}
	document.getElementById('randomCoolWord').innerHTML = randomWord;
	document.getElementById("wordToSchmunkify1").innerHTML = spunkyWord;

	document.getElementById("wordToSchmunkify1").innerHTML = spunkyWord;
	document.getElementById("wordToSchmunkify2").innerHTML = spunkyWord;
	let schmunkifiedWord = spunkyWord.toString();
	console.log(spunkyWord);
	while (schmunkifiedWord.length >= 1 && !vowels.includes(schmunkifiedWord[0])) {
		schmunkifiedWord = schmunkifiedWord.substring(1, schmunkifiedWord.length);
	}
	if (schmunkifiedWord.length == 1) {
		schmunkifiedWord = spunkyWord;
	} else {
		schmunkifiedWord = "schm" + schmunkifiedWord;
	}
	document.getElementById("schmunkifiedWord").innerHTML = schmunkifiedWord;
	document.getElementById("schmunkifiedMessage").style.display = "block";
}