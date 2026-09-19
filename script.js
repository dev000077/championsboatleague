const champions = {
  2025: { boat: "Veeyapuram", club: "Village Boat Club Kainakary (Pride Chasers) VBC" },
  2024: { boat: "Karichal", club: "Pallathuruthy Boat Club, Alappuzha (Tropical Titans)" },
  2023: { boat: "Veeyapuram", club: "Pallathuruthy Boat Club, Alappuzha (Tropical Titans)" },
  2022: { boat: "Mahadevikaad Kaatil Thekkethil", club: "Pallathuruthy Boat Club, Alappuzha (Tropical Titans)" },
  2019: { boat: "Nadubhagom", club: "Pallathuruthy Boat Club, Alappuzha (Tropical Titans)" }
};

const schedules = [
  {venue:"Karuvatta, Alappuzha", date:"2026-09-19"},
  {venue:"Kallada, Kollam", date:"2026-09-23"},
  {venue:"Pandanadu, Chengannur, Alappuzha", date:"2026-09-26"},
  {venue:"Kottappuram, Thrissur", date:"2026-10-04"},
  {venue:"Piravom, Ernakulam", date:"2026-10-17"},
  {venue:"Thazhathangadi, Kottayam", date:"2026-10-24"},
  {venue:"Pulinkunnu, Alappuzha", date:"2026-10-31"},
  {venue:"Kainakary, Alappuzha", date:"2026-11-07"},
  {venue:"Kayamkulam, Alappuzha", date:"2026-11-14"},
  {venue:"President's Trophy, Kollam", date:"2026-11-21"}
];

const points = [
  {club:"AROMA-I (Aroma Boat Club) ", points:10},
  {club:"MELPADOM(Pallathuruthy Boat Club)", points:9},
  {club:"NIRANAM(Niranam Boat Club)", points:8},
  {club:"VEEYAPURAM", points:7},
  {club:"ARPOKKARA", points:6},
  {club:"CHERUTHANA", points:5},
  {club:"PUNYALALAN", points:4},
  {club:"NADUBHAGAM", points:3},
  {club:"THALAVADI", points:2}
];

const history = {
  2025: {
    champion: "Veeyapuram",
    club: "Village Boat Club Kainakary (Pride Chasers) VBC",
    matches: [
      ["Kainakary, Alappuzha", "19 September", "Veeyapuram", "Pride Chasers (VBC)"],
      ["Thazhathangadi, Kottayam", "27 September", "Veeyapuram", "Pride Chasers (VBC)"],
      ["Piravom, Ernakulam", "04 October", "Veeyapuram", "Pride Chasers (VBC)"],
      ["Kottappuram, Thrissur", "25 October", "Veeyapuram", "Pride Chasers (VBC)"],
      ["Pulinkunnu, Alappuzha", "01 November", "Veeyapuram", "Pride Chasers (VBC)"],
      ["Karuvatta, Alappuzha", "08 November", "Veeyapuram", "Pride Chasers (VBC)"],
      ["Pandanadu, Chengannur, Alappuzha", "15 November", "Veeyapuram", "Pride Chasers (VBC)"],
      ["Kayamkulam, Alappuzha", "22 November", "Veeyapuram", "Pride Chasers (VBC)"],
      ["Kallada, Kollam", "29 November", "Veeyapuram", "Pride Chasers (VBC)"],
      ["Marine Drive, Ernakulam", "30 December", "Niranam", "Backwater Kings (NBC)"],
      ["President's Trophy, Kollam", "10 January", "Niranam", "Backwater Kings (NBC)"]
    ]
  },
  2024: {
    champion: "Karichal",
    club: "Pallathuruthy Boat Club, Alappuzha (Tropical Titans)",
    matches: [
      ["Thazhathangadi, Kottayam", "16 November", "Final abandoned", "Points equally divided to first three teams"],
      ["Kainakari, Alappuzha", "23 November", "Karichal", "Tropical Titans (PBC)"],
      ["Pandanadu, Chengannur, Alappuzha", "30 November", "Veeyapuram", "Pride Chasers (VBC)"],
      ["Karuvatta, Alappuzha", "07 December", "Karichal", "Tropical Titans (PBC)"],
      ["Kayamkulam, Alappuzha", "14 December", "Karichal", "Tropical Titans (PBC)"],
      ["President's Trophy Boat Race, Kollam", "21 December", "Veeyapuram", "Pride Chasers (VBC)"]
    ]
  },
  2023: {
    champion: "Veeyapuram",
    club: "Pallathuruthy Boat Club, Alappuzha (Tropical Titans)",
    matches: [
      ["Nehru Trophy Boat Race, Punnamada", "12 August", "Veeyapuram", "Tropical Titans (PBC)"],
      ["Marine Drive, Ernakulam", "16 September", "Veeyapuram", "Tropical Titans (PBC)"],
      ["Kottappuram, Thrissur", "23 September", "Veeyapuram", "Tropical Titans (PBC)"],
      ["Beypore, Kozhikode", "24 September", "Cancelled", "Nipah virus"],
      ["Piravom, Ernakulam", "30 September", "Nadubhagom & Veeyapuram", "Coast Dominators (UBC) & Tropical Titans (PBC)"],
      ["Thazhathangadi, Kottayam", "07 October", "Nadubhagom", "Coast Dominators (UBC)"],
      ["Pulinkunnu, Alappuzha", "14 October", "Nadubhagom", "Coast Dominators (UBC)"],
      ["Kainakari, Alappuzha", "21 October", "Veeyapuram", "Tropical Titans (PBC)"],
      ["Karuvatta, Alappuzha", "28 October", "Nadubhagom", "Coast Dominators (UBC)"],
      ["Kayamkulam, Alappuzha", "18 November", "Veeyapuram", "Tropical Titans (PBC)"],
      ["Kallada, Kollam", "25 November", "Veeyapuram", "Tropical Titans (PBC)"],
      ["Pandanadu, Chengannur, Alappuzha", "02 December", "Veeyapuram", "Tropical Titans (PBC)"],
      ["President's Trophy Boat Race", "09 December", "Veeyapuram", "Tropical Titans (PBC)"]
    ]
  },
  2022: {
    champion: "Mahadevikaad Kaatil Thekkethil",
    club: "Pallathuruthy Boat Club, Alappuzha (Tropical Titans)",
    matches: [
      ["Nehru Trophy Boat Race, Punnamada", "04 September", "Mahadevikaad Kaatil Thekkethil", "Tropical Titans (PBC)"],
      ["Karuvatta, Alappuzha", "17 September", "Nadubhagom", "Mighty Oars (NCDC)"],
      ["Pulinkunnu, Alappuzha", "24 September", "Mahadevikaad Kaatil Thekkethil", "Tropical Titans (PBC)"],
      ["Piravam, Ernakulam", "01 October", "Nadubhagom", "Mighty Oars (NCDC)"],
      ["Marine Drive, Ernakulam", "08 October", "Mahadevikaad Kaatil Thekkethil", "Tropical Titans (PBC)"],
      ["Kottappuram, Thrissur", "15 October", "Mahadevikaad Kaatil Thekkethil", "Tropical Titans (PBC)"],
      ["Kainakkari, Alappuzha", "22 October", "Mahadevikaad Kaatil Thekkethil", "Tropical Titans (PBC)"],
      ["Thazhathangadi, Kottayam", "29 October", "Mahadevikaad Kaatil Thekkethil", "Tropical Titans (PBC)"],
      ["Pandanadu, Chengannur", "05 November", "Mahadevikaad Kaatil Thekkethil", "Tropical Titans (PBC)"],
      ["Kayamkulam, Alappuzha", "12 November", "Nadubhagom", "Mighty Oars (NCDC)"],
      ["Kallada, Kollam", "19 November", "Mahadevikaad Kaatil Thekkethil", "Tropical Titans (PBC)"],
      ["President's Trophy Boat Race", "26 November", "Nadubhagom", "Mighty Oars (NCDC)"]
    ]
  },
  2019: {
    champion: "Nadubhagom",
    club: "Pallathuruthy Boat Club, Alappuzha (Tropical Titans)",
    matches: [
      ["Nehru Trophy Boat Race, Punnamada", "31 August", "Nadubhagom", "Tropical Titans (PBC)"],
      ["Thazhathangadi, Kottayam", "07 September", "Nadubhagom", "Tropical Titans (PBC)"],
      ["Karuvatta, Alappuzha", "14 September", "Nadubhagom", "Tropical Titans (PBC)"],
      ["Piravam, Ernakulam", "28 September", "Nadubhagom", "Tropical Titans (PBC)"],
      ["Marine Drive, Ernakulam", "05 October", "Champakulam", "Coast Dominators (UBC)"],
      ["Kottappuram, Thrissur", "12 October", "Nadubhagom", "Tropical Titans (PBC)"],
      ["Ponnani, Malappuram", "19 October", "Nadubhagom", "Tropical Titans (PBC)"],
      ["Kainakari, Alappuzha", "26 October", "Nadubhagom", "Tropical Titans (PBC)"],
      ["Pulinkunnu, Alappuzha", "02 November", "Nadubhagom", "Tropical Titans (PBC)"],
      ["Kayamkulam, Alappuzha", "09 November", "Nadubhagom", "Tropical Titans (PBC)"],
      ["Kallada, Kollam", "16 November", "Nadubhagom", "Tropical Titans (PBC)"],
      ["President's Trophy Boat Race", "23 November", "Nadubhagom", "Tropical Titans (PBC)"]
    ]
  }
};

let historyYear = 2025;
let selectedYear = 2025;

function formatDate(iso) {
  return new Intl.DateTimeFormat("en-IN", {
    day:"2-digit", month:"short", year:"numeric"
  }).format(new Date(iso + "T00:00:00"));
}

function getStatus(iso) {
  const now = new Date();
  const d = new Date(iso + "T00:00:00");

  const start = new Date(d);
  start.setHours(14, 30, 0, 0); // 2:30 PM

  const end = new Date(d);
  end.setHours(18, 0, 0, 0); // 6:00 PM

  if (now >= end) return ["Completed", "completed"];
  if (now >= start) return ["In Progress", "progress"];
  return ["Upcoming", "upcoming"];
}


function renderHistoryTabs() {
  const tabs = document.getElementById("historyTabs");
  tabs.innerHTML = Object.keys(history).sort((a,b)=>b-a).map(y =>
    `<button class="${+y===historyYear?'active':''}" onclick="selectHistoryYear(${y})">${y}</button>`
  ).join("");
}

function selectHistoryYear(year) {
  historyYear = year;
  renderHistoryTabs();
  renderHistory();
}

function renderHistory() {
  const season = history[historyYear];
  document.getElementById("historySummary").innerHTML = `
    <div><span class="eyebrow">SEASON ${historyYear}</span><strong>${season.champion}</strong><span>${season.club}</span></div>
    <div class="history-count"><b>${season.matches.length}</b><small>archived matches</small></div>`;
  document.getElementById("historyList").innerHTML = season.matches.map((m,i) => {
    const special = /Cancelled|abandoned/i.test(m[2]);
    return `<article class="history-match ${special?'special':''}">
      <div class="history-no">${String(i+1).padStart(2,'0')}</div>
      <div><span class="history-label">DATE</span><strong>${m[1]}</strong></div>
      <div><span class="history-label">VENUE</span><h3>${m[0]}</h3></div>
      <div><span class="history-label">MATCH WINNER</span><strong>${m[2]}</strong><small>${m[3]}</small></div>
    </article>`;
  }).join("");
}

function renderWinnerTabs() {
  const tabs = document.getElementById("yearTabs");
  tabs.innerHTML = Object.keys(champions).sort((a,b)=>b-a).map(y =>
    `<button class="${+y===selectedYear?'active':''}" onclick="selectYear(${y})">${y}</button>`
  ).join("");
}

function selectYear(year) {
  selectedYear = year;
  renderWinnerTabs();
  renderWinner();
}

function renderWinner() {
  const w = champions[selectedYear];
  document.getElementById("winnerGrid").innerHTML = Object.entries(champions)
    .sort((a,b)=>b[0]-a[0])
    .map(([year, data]) => `<button class="mini-winner" onclick="selectYear(${year})">
      <span class="mini-year">${year}</span><strong>${data.boat}</strong><small>${data.club}</small>
    </button>`).join("");
}


function renderNextVenueTicker() {
  const ticker = document.getElementById("nextVenueTicker");
  const text = document.getElementById("nextVenueTickerText");
  if (!ticker || !text) return;

  const now = new Date();
  const matchDay = schedules.findIndex(m => {
    const d = new Date(m.date + "T00:00:00");
    return now.getFullYear() === d.getFullYear() &&
           now.getMonth() === d.getMonth() &&
           now.getDate() === d.getDate();
  });

  // The ticker appears only after 6:00 PM on a scheduled match day.
  if (matchDay === -1 || now.getHours() < 18) {
    ticker.hidden = true;
    text.textContent = "";
    return;
  }

  const next = schedules[matchDay + 1];
  if (!next) {
    ticker.hidden = true;
    text.textContent = "";
    return;
  }

  ticker.hidden = false;
  text.innerHTML = `NEXT VENUE • ${next.venue} &nbsp;&nbsp; | &nbsp;&nbsp; ${formatDate(next.date)} &nbsp;&nbsp; • &nbsp;&nbsp; CHAMPIONS BOAT LEAGUE 2026`;
}

function renderSchedule() {
  const list = document.getElementById("scheduleList");
  list.innerHTML = schedules.map((m,i) => {
    const [status, cls] = getStatus(m.date);
    return `<article class="match-card">
      <div class="match-number">${String(i+1).padStart(2,"0")}</div>
      <div class="match-date"><span>${formatDate(m.date).split(" ")[0]}</span><strong>${formatDate(m.date).split(" ").slice(1).join(" ")}</strong></div>
      <div class="match-venue"><span>VENUE</span><h3>${m.venue}</h3><p>Champions Boat League 2026</p></div>
      <span class="status ${cls}"><i></i>${status}</span>
    </article>`;
  }).join("");
}

function renderPoints() {
  const body = document.getElementById("pointsBody");
  body.innerHTML = "";
  [...points].sort((a,b)=>b.points-a.points).forEach((p,i) => {
    body.insertAdjacentHTML("beforeend", `<tr>
      <td><span class="rank">${i+1}</span></td>
      <td><strong>${p.club}</strong></td>
      <td class="pts">${p.points}</td>
    </tr>`);
  });
}

function clock() {
  const now = new Date();
  const date = new Intl.DateTimeFormat("en-IN", {
    weekday: "long", day: "2-digit", month: "long", year: "numeric",
    timeZone: "Asia/Kolkata"
  }).format(now);
  const time = new Intl.DateTimeFormat("en-IN", {
    hour: "2-digit", minute: "2-digit", hour12: true, timeZone: "Asia/Kolkata"
  }).format(now);
  document.getElementById("liveClock").textContent = `🔴 LIVE — ${date} • ${time} IST`;
}
document.querySelector(".menu-btn").addEventListener("click", () =>
  document.querySelector(".nav-links").classList.toggle("open")
);

renderWinnerTabs(); renderWinner(); renderHistoryTabs(); renderHistory(); renderSchedule(); renderPoints(); renderNextVenueTicker(); clock();
setInterval(() => { clock(); renderSchedule(); renderNextVenueTicker(); }, 30000);
