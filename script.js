let entry;
let button;
let darkMode = true;

function setup() {
	createCanvas(windowWidth, windowHeight);

	entry = createElement('textarea');
	entry.position(width / 2 - 100, height / 2 - 100);
	entry.size(200, 150);
	entry.style('background-color', darkMode ? '#222222' : '#ffffff');
	entry.style('color', darkMode ? '#ffffff' : '#000000');

	textAlign(CENTER, CENTER);

	button = createButton('Send');
	button.position(width / 2 - 75, height / 2 + 70);
	button.size(150, 40);
	button.mousePressed(sendDataToServer);
	button.style('background-color', darkMode ? '#003366' : '#ffffff');
	button.style('color', darkMode ? '#ffffff' : '#000000');

	const toggleButton = createButton('Toggle Dark Mode');
	toggleButton.position(width - 140, 20);
	toggleButton.size(120, 30);
	toggleButton.mousePressed(toggleDarkMode);
	toggleButton.style('background-color', darkMode ? '#003366' : '#ffffff');
	toggleButton.style('color', darkMode ? '#ffffff' : '#000000');
	console.log("Done");
}

function draw() {
	background(darkMode ? '#111122' : '#f5f5f5');
	fill(darkMode ? '#ffffff' : '#000000');
	textSize(20);
	text(entry.value(), width / 2, height / 2);
}

function sendDataToServer() {
	const ipAddress = ''; // Replace with the desired IP address
	const port = ''; // Replace with the desired port number
	const data = entry.value(); // Get the data from the input field

	// Check if the ipAddress and port are provided
	if (ipAddress && port) {
		sendStringToServer(ipAddress, port, data);
	} else {
		console.error('Error: IP address and port not provided');
	}
}

function sendStringToServer(ipAddress, port, data) {
	// Create the XMLHttpRequest object
	const xhr = new XMLHttpRequest();

	// Prepare the request
	xhr.open('POST', 'http://' + ipAddress + ':' + port, true);
	xhr.setRequestHeader('Content-Type', 'application/json');

	// Define a callback function to handle the response
	xhr.onreadystatechange = function() {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 200) {
				// Request was successful, handle the response
				console.log('Server response:', xhr.responseText);
			} else {
				// Request failed, handle the error
				console.error('Error:', xhr.status);
			}
		}
	};

	// Convert the data to JSON and send the request
	xhr.send(JSON.stringify(data));
}

function toggleDarkMode() {
	darkMode = !darkMode;
	if (darkMode) {
		entry.style('background-color', '#222222');
		entry.style('color', '#ffffff');
		button.style('background-color', '#003366');
		button.style('color', '#ffffff');
	} else {
		entry.style('background-color', '#ffffff');
		entry.style('color', '#000000');
		button.style('background-color', '#ffffff');
		button.style('color', '#000000');
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
