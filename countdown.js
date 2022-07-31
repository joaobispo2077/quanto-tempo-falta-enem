function countdown() {

	var now = new Date();

	var eventDate = new Date(2022, 11, 13, 13, 0, 0, 0);
	console.log(`A data do enem é ${eventDate}`);

	var currentTime = now.getTime();
	var eventTime = eventDate.getTime();

	var remainingTime = eventTime - currentTime;

	if (remainingTime <= 0) {
		d = "00";
		h = "00";
		m = "00";
		s = "00";

		document.querySelector(".footer-container > p")
			.textContent = "O Enem já ocorreu! Aguarde a data do próximo.";


		document.getElementById("days").textContent = d;
		document.getElementById("days").innerText = d;

		document.getElementById("hours").textContent = h;
		document.getElementById("minutes").textContent = m;
		document.getElementById("seconds").textContent = s;

		return;
	}


	var s = Math.floor(remainingTime / 1000);
	var m = Math.floor(s / 60);
	var h = Math.floor(m / 60);
	var d = Math.floor(h / 24);

	h %= 24;
	m %= 60;
	s %= 60;

	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;


	document.getElementById("days").textContent = d;
	document.getElementById("days").innerText = d;

	document.getElementById("hours").textContent = h;
	document.getElementById("minutes").textContent = m;
	document.getElementById("seconds").textContent = s;



	console.log(d, h, m, s);


	setTimeout(countdown, 1000);
}

countdown();
