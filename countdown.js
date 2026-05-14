const eventDate = new Date(2026, 10, 8, 13, 0, 0, 0);
const tableMetadataBeforeExam = window.tableMetadataBeforeExam || null;

const cursiveDate = new Intl.DateTimeFormat("pt-BR", {
	month: "long",
	day: "numeric",
	year: "numeric",
}).format(eventDate);

document.querySelector(".footer-container > p").textContent =
	`O próximo ENEM será em ${cursiveDate}`;

function renderTableMetadataBeforeExam(info) {
	const metadataCard = document.getElementById("table-metadata-before-exam-card");
	if (!metadataCard) return;

	const hasTimeline = Array.isArray(info?.timeline) && info.timeline.length > 0;
	if (!info || !hasTimeline) {
		metadataCard.hidden = true;
		metadataCard.innerHTML = "";
		metadataCard.removeAttribute("role");
		metadataCard.removeAttribute("tabindex");
		metadataCard.removeAttribute("aria-label");
		metadataCard.onclick = null;
		metadataCard.onkeydown = null;
		return;
	}

	const sourcesMarkup = Array.isArray(info.sources) && info.sources.length > 0
		? info.sources
			.map(
				(source) =>
					`<a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.label}</a>`
			)
			.join(" | ")
		: "";

	const rowsMarkup = info.timeline
		.map(
			(item) => `
				<tr>
					<td>${item.event}</td>
					<td>${item.date}</td>
				</tr>
			`
		)
		.join("");

	metadataCard.innerHTML = `
		<h2>${info.title}</h2>
		<p>${info.description}</p>
		<p class="table-metadata-before-exam-meta">${info.examForecast}</p>
		<div class="table-metadata-before-exam-table-wrapper">
			<table class="table-metadata-before-exam-table">
				<thead>
					<tr>
						<th>Etapa</th>
						<th>Data</th>
					</tr>
				</thead>
				<tbody>
					${rowsMarkup}
				</tbody>
			</table>
		</div>
		${info.examDuration
			? `<p class="table-metadata-before-exam-meta table-metadata-after-exam-table">${info.examDuration}</p>`
			: ""}
		<p class="table-metadata-before-exam-note">${info.registrationForecast}</p>
		<p class="table-metadata-before-exam-note">
			Isenção e inscrição na Página do Participante: <a href="${info.participantPageUrl}" target="_blank" rel="noopener noreferrer">acessar página</a>
		</p>
		${sourcesMarkup ? `<p class="table-metadata-before-exam-note">Fontes: ${sourcesMarkup}</p>` : ""}
	`;

	metadataCard.setAttribute("role", "link");
	metadataCard.setAttribute("tabindex", "0");
	metadataCard.setAttribute(
		"aria-label",
		"Ir para isenção e inscrição na Página do Participante do ENEM"
	);

	metadataCard.onclick = (event) => {
		if (event.target.closest("a")) return;
		window.open(info.participantPageUrl, "_blank", "noopener,noreferrer");
	};

	metadataCard.onkeydown = (event) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			window.open(info.participantPageUrl, "_blank", "noopener,noreferrer");
		}
	};

	metadataCard.hidden = false;
}

function countdown() {
	const now = new Date();
	const currentTime = now.getTime();
	const eventTime = eventDate.getTime();
	const remainingTime = eventTime - currentTime;

	if (remainingTime <= 0) {
		const d = "00";
		const h = "00";
		const m = "00";
		const s = "00";

		document.querySelector(".footer-container > p").textContent =
			"O Enem já ocorreu! Aguarde a data do próximo.";

		document.getElementById("days").textContent = d;
		document.getElementById("days").innerText = d;
		document.getElementById("hours").textContent = h;
		document.getElementById("minutes").textContent = m;
		document.getElementById("seconds").textContent = s;
		return;
	}

	let s = Math.floor(remainingTime / 1000);
	let m = Math.floor(s / 60);
	let h = Math.floor(m / 60);
	const d = Math.floor(h / 24);

	h %= 24;
	m %= 60;
	s %= 60;

	h = h < 10 ? `0${h}` : h;
	m = m < 10 ? `0${m}` : m;
	s = s < 10 ? `0${s}` : s;

	document.getElementById("days").textContent = d;
	document.getElementById("days").innerText = d;
	document.getElementById("hours").textContent = h;
	document.getElementById("minutes").textContent = m;
	document.getElementById("seconds").textContent = s;

	setTimeout(countdown, 1000);
}

renderTableMetadataBeforeExam(tableMetadataBeforeExam);
countdown();
