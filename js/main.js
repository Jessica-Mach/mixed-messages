// Accesses button
const btn = document.getElementById("button");

const displayRandomMessage = () => {
	// Accesses main header
	const header = document.getElementById("message");

	// A list of responses to clicking the "don't touch button"
	const messages = [
		"Couldn't help yourself, huh?",
		"Sheesh, I thought the button message was clear.",
		"Ah, so that's how it's going to be.",
		"I wouldn't have expected something like this from you."
	];

	// Get random number
	const rand = Math.floor(Math.random() *4);
	header.innerHTML = messages[rand];
	
}

btn.addEventListener("click", displayRandomMessage);


