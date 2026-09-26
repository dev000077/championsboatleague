const champions = {
2025:{boat:"Veeyapuram",club:"Village Boat Club Kainakary (Pride Chasers) VBC"},
2024:{boat:"Karichal",club:"Pallathuruthy Boat Club, Alappuzha (Tropical Titans)"},
2023:{boat:"Veeyapuram",club:"Pallathuruthy Boat Club, Alappuzha (Tropical Titans)"},
2022:{boat:"Mahadevikaad Kaatil Thekkethil",club:"Pallathuruthy Boat Club, Alappuzha (Tropical Titans)"},
2019:{boat:"Nadubhagom",club:"Pallathuruthy Boat Club, Alappuzha (Tropical Titans)"}
};

/*
  2026 DATA
  Update ONLY the winner/club/points after each completed race.
  The schedule, popup and points ranking use this data automatically.
*/
const schedules=[
{venue:"Karuvatta, Alappuzha",date:"2026-09-19",winner:"Aroma-I",club:"Aroma Boat Club"},
{venue:"Kallada, Kollam",date:"2026-09-23",winner:"Aroma-I",club:"Aroma Boat Club"},
{venue:"Pandanadu, Chengannur, Alappuzha",date:"2026-09-26",winner:"Melpadom",club:"Pallathuruthy Boat Club"},
{venue:"Kottappuram, Thrissur",date:"2026-10-04",winner:"",club:""},
{venue:"Piravom, Ernakulam",date:"2026-10-17",winner:"",club:""},
{venue:"Thazhathangadi, Kottayam",date:"2026-10-24",winner:"",club:""},
{venue:"Pulinkunnu, Alappuzha",date:"2026-10-31",winner:"",club:""},
{venue:"Kainakary, Alappuzha",date:"2026-11-07",winner:"",club:""},
{venue:"Kayamkulam, Alappuzha",date:"2026-11-14",winner:"",club:""},
{venue:"President's Trophy, Kollam",date:"2026-11-21",winner:"",club:""}
];

const points=[
{club:"AROMA-I (Aroma Boat Club)",points:29},
{club:"MELPADOM (Pallathuruthy Boat Club)",points:25},
{club:"NIRANAM (Niranam Boat Club)",points:26},
{club:"VEEYAPURAM (UBC FC Kainakary)",points:22},
{club:"ARPOOKARA (Immanuel Boat Club)",points:15},
{club:"CHERUTHANA (Nattakom Boat Club)",points:14},
{club:"PUNYALALAN NIRANAM (Kumarakom Town Boat Club)",points:16},
{club:"NADUBHAGAM (Punnamada Boat Club)",points:9},
{club:"THALAVADI (Village Boat Club, Kainakary)",points:6}
];

const history={
2026:{champion:"",club:"",matches:[
["Karuvatta, Alappuzha","19 September 2026","Aroma-I","Aroma Boat Club"],
["Kallada, Kollam","23 September 2026","Aroma-I","Aroma Boat Club"],
["Pandanadu, Chengannur, Alappuzha","26 September 2026","Melpadom","Pallathuruthy Boat Club"],
["Kottappuram, Thrissur","04 October 2026","—","Winner not yet available"],
["Piravom, Ernakulam","17 October 2026","—","Winner not yet available"],
["Thazhathangadi, Kottayam","24 October 2026","—","Winner not yet available"],
["Pulinkunnu, Alappuzha","31 October 2026","—","Winner not yet available"],
["Kainakary, Alappuzha","07 November 2026","—","Winner not yet available"],
["Kayamkulam, Alappuzha","14 November 2026","—","Winner not yet available"],
["President's Trophy, Kollam","21 November 2026","—","Winner not yet available"]
]},
2025:{champion:"Veeyapuram",club:"Village Boat Club Kainakary (Pride Chasers) VBC",matches:[
["Kainakary, Alappuzha","19 September","Veeyapuram","Pride Chasers (VBC)"],
["Thazhathangadi, Kottayam","27 September","Veeyapuram","Pride Chasers (VBC)"],
["Piravom, Ernakulam","04 October","Veeyapuram","Pride Chasers (VBC)"],
["Kottappuram, Thrissur","25 October","Veeyapuram","Pride Chasers (VBC)"],
["Pulinkunnu, Alappuzha","01 November","Veeyapuram","Pride Chasers (VBC)"],
["Karuvatta, Alappuzha","08 November","Veeyapuram","Pride Chasers (VBC)"],
["Pandanadu, Chengannur, Alappuzha","15 November","Veeyapuram","Pride Chasers (VBC)"],
["Kayamkulam, Alappuzha","22 November","Veeyapuram","Pride Chasers (VBC)"],
["Kallada, Kollam","29 November","Veeyapuram","Pride Chasers (VBC)"],
["Marine Drive, Ernakulam","30 December","Niranam","Backwater Kings (NBC)"],
["President's Trophy, Kollam","10 January","Niranam","Backwater Kings (NBC)"]
]},
2024:{champion:"Karichal",club:"Pallathuruthy Boat Club, Alappuzha (Tropical Titans)",matches:[
["Thazhathangadi, Kottayam","16 November","Final abandoned","Points equally divided to first three teams"],
["Kainakari, Alappuzha","23 November","Karichal","Tropical Titans (PBC)"],
["Pandanadu, Chengannur, Alappuzha","30 November","Veeyapuram","Pride Chasers (VBC)"],
["Karuvatta, Alappuzha","07 December","Karichal","Tropical Titans (PBC)"],
["Kayamkulam, Alappuzha","14 December","Karichal","Tropical Titans (PBC)"],
["President's Trophy Boat Race, Kollam","21 December","Veeyapuram","Pride Chasers (VBC)"]
]},
2023:{champion:"Veeyapuram",club:"Pallathuruthy Boat Club, Alappuzha (Tropical Titans)",matches:[
["Nehru Trophy Boat Race, Punnamada","12 August","Veeyapuram","Tropical Titans (PBC)"],
["Marine Drive, Ernakulam","16 September","Veeyapuram","Tropical Titans (PBC)"],
["Kottappuram, Thrissur","23 September","Veeyapuram","Tropical Titans (PBC)"],
["Beypore, Kozhikode","24 September","Cancelled","Nipah virus"],
["Piravom, Ernakulam","30 September","Nadubhagom & Veeyapuram","Coast Dominators (UBC) & Tropical Titans (PBC)"],
["Thazhathangadi, Kottayam","07 October","Nadubhagom","Coast Dominators (UBC)"],
["Pulinkunnu, Alappuzha","14 October","Nadubhagom","Coast Dominators (UBC)"],
["Kainakari, Alappuzha","21 October","Veeyapuram","Tropical Titans (PBC)"],
["Karuvatta, Alappuzha","28 October","Nadubhagom","Coast Dominators (UBC)"],
["Kayamkulam, Alappuzha","18 November","Veeyapuram","Tropical Titans (PBC)"],
["Kallada, Kollam","25 November","Veeyapuram","Tropical Titans (PBC)"],
["Pandanadu, Chengannur, Alappuzha","02 December","Veeyapuram","Tropical Titans (PBC)"],
["President's Trophy Boat Race","09 December","Veeyapuram","Tropical Titans (PBC)"]
]},
2022:{champion:"Mahadevikaad Kaatil Thekkethil",club:"Pallathuruthy Boat Club, Alappuzha (Tropical Titans)",matches:[
["Nehru Trophy Boat Race, Punnamada","04 September","Mahadevikaad Kaatil Thekkethil","Tropical Titans (PBC)"],
["Karuvatta, Alappuzha","17 September","Nadubhagom","Mighty Oars (NCDC)"],
["Pulinkunnu, Alappuzha","24 September","Mahadevikaad Kaatil Thekkethil","Tropical Titans (PBC)"],
["Piravam, Ernakulam","01 October","Nadubhagom","Mighty Oars (NCDC)"],
["Marine Drive, Ernakulam","08 October","Mahadevikaad Kaatil Thekkethil","Tropical Titans (PBC)"],
["Kottappuram, Thrissur","15 October","Mahadevikaad Kaatil Thekkethil","Tropical Titans (PBC)"],
["Kainakkari, Alappuzha","22 October","Mahadevikaad Kaatil Thekkethil","Tropical Titans (PBC)"],
["Thazhathangadi, Kottayam","29 October","Mahadevikaad Kaatil Thekkethil","Tropical Titans (PBC)"],
["Pandanadu, Chengannur","05 November","Mahadevikaad Kaatil Thekkethil","Tropical Titans (PBC)"],
["Kayamkulam, Alappuzha","12 November","Nadubhagom","Mighty Oars (NCDC)"],
["Kallada, Kollam","19 November","Mahadevikaad Kaatil Thekkethil","Tropical Titans (PBC)"],
["President's Trophy Boat Race","26 November","Nadubhagom","Mighty Oars (NCDC)"]
]},
2019:{champion:"Nadubhagom",club:"Pallathuruthy Boat Club, Alappuzha (Tropical Titans)",matches:[
["Nehru Trophy Boat Race, Punnamada","31 August","Nadubhagom","Tropical Titans (PBC)"],
["Thazhathangadi, Kottayam","07 September","Nadubhagom","Tropical Titans (PBC)"],
["Karuvatta, Alappuzha","14 September","Nadubhagom","Tropical Titans (PBC)"],
["Piravam, Ernakulam","28 September","Nadubhagom","Tropical Titans (PBC)"],
["Marine Drive, Ernakulam","05 October","Champakulam","Coast Dominators (UBC)"],
["Kottappuram, Thrissur","12 October","Nadubhagom","Tropical Titans (PBC)"],
["Ponnani, Malappuram","19 October","Nadubhagom","Tropical Titans (PBC)"],
["Kainakari, Alappuzha","26 October","Nadubhagom","Tropical Titans (PBC)"],
["Pulinkunnu, Alappuzha","02 November","Nadubhagom","Tropical Titans (PBC)"],
["Kayamkulam, Alappuzha","09 November","Nadubhagom","Tropical Titans (PBC)"],
["Kallada, Kollam","16 November","Nadubhagom","Tropical Titans (PBC)"],
["President's Trophy Boat Race","23 November","Nadubhagom","Tropical Titans (PBC)"]
]}
};

function formatDate(iso){
return new Intl.DateTimeFormat("en-IN",{day:"2-digit",month:"short",year:"numeric",timeZone:"Asia/Kolkata"}).format(new Date(iso+"T00:00:00"));
}
function dateOnly(iso){return new Date(iso+"T00:00:00");}

function getStatus(iso){
const now=new Date(), d=dateOnly(iso);
const start=new Date(d); start.setHours(14,30,0,0);
const end=new Date(d); end.setHours(18,0,0,0);
if(now>=end)return["Completed","completed"];
if(now>=start)return["LIVE NOW","progress"];
return["Upcoming","upcoming"];
}

function renderNextVenueTicker(){
const ticker=document.getElementById("nextVenueTicker"), text=document.getElementById("nextVenueTickerText"), label=document.getElementById("tickerLabel");
if(!ticker||!text)return;
const now=new Date();
const today=schedules.findIndex(m=>{
const d=dateOnly(m.date);
return now.getFullYear()===d.getFullYear()&&now.getMonth()===d.getMonth()&&now.getDate()===d.getDate();
});
let message="", title="NEXT VENUE";
if(today>=0){
const d=dateOnly(schedules[today].date);
const start=new Date(d);start.setHours(14,30,0,0);
const end=new Date(d);end.setHours(18,40,0,0);
if(now>=start&&now<end){
title="LIVE NOW";
message=`LIVE NOW • ${schedules[today].venue} • ${formatDate(schedules[today].date)} • Champions Boat League 2026`;
}else if(now>=end){
const next=schedules[today+1];
if(!next){ticker.hidden=true;return;}
message=`NEXT VENUE • ${next.venue} • ${formatDate(next.date)} • Champions Boat League 2026`;
}else{
message=`TODAY • ${schedules[today].venue} • ${formatDate(schedules[today].date)} • Match starts at 2:30 PM IST`;
}
}else{
const next=schedules.find(m=>dateOnly(m.date)>now);
if(!next){ticker.hidden=true;return;}
message=`NEXT VENUE • ${next.venue} • ${formatDate(next.date)} • Champions Boat League 2026`;
}
label.textContent=title;text.textContent=message;ticker.hidden=false;
text.style.animation="none";void text.offsetWidth;text.style.animation="";
}

function renderWinner(){
const grid=document.getElementById("winnerGrid"); if(!grid)return;
grid.innerHTML=Object.entries(champions).sort((a,b)=>b[0]-a[0]).map(([year,w])=>`
<article class="winner-card">
<div class="winner-card-top"><span class="winner-year">${year}</span><span class="winner-medal">★</span></div>
<div class="winner-icon">🏆</div>
<div class="winner-card-body"><div class="winner-kicker">CHAMPION BOAT</div><h3>${w.boat}</h3><p>${w.club}</p></div>
</article>`).join("");
}

function renderSchedule(){
const list=document.getElementById("scheduleList");if(!list)return;

list.innerHTML=schedules.map((m,i)=>{
const [status,cls]=getStatus(m.date);
const hasResult=Boolean(m.winner);

return `<article class="match-card ${cls} ${hasResult ? "has-result" : ""}"
${hasResult ? `onclick="showMatchResult('${m.date}')"` : ""}
${hasResult ? `role="button" tabindex="0" onkeydown="if(event.key==='Enter'||event.key===' ')showMatchResult('${m.date}')"` : ""}>

<div class="match-number">${String(i+1).padStart(2,"0")}</div>

<div class="match-date">
<span>${formatDate(m.date).split(" ")[0]}</span>
<strong>${formatDate(m.date).split(" ").slice(1).join(" ")}</strong>
</div>

<div class="match-venue">
<span>VENUE</span>
<h3>${m.venue}</h3>
<p>Champions Boat League 2026</p>
${hasResult ? `<small class="click-hint">Click to view winner →</small>` : ""}
</div>

<span class="status ${cls}"><i></i>${status}</span>
</article>`;
}).join("");
}

function showMatchResult(date){
const result=schedules.find(m=>m.date===date);
if(!result)return;

let popup=document.getElementById("matchResultPopup");

if(!popup){
popup=document.createElement("div");
popup.id="matchResultPopup";
popup.innerHTML=`
<div class="result-overlay" onclick="closeMatchResult()"></div>
<div class="result-modal" role="dialog" aria-modal="true" aria-labelledby="resultVenue">
<button class="result-close" onclick="closeMatchResult()" aria-label="Close">×</button>
<span class="eyebrow">CBL 2026 MATCH RESULT</span>
<h2 id="resultVenue"></h2>
<div class="result-date" id="resultDate"></div>
<div class="winner-result">
<div class="result-trophy">🏆</div>
<div class="result-label">MATCH WINNER</div>
<h3 id="resultWinner"></h3>
<p id="resultClub"></p>
</div>
</div>`;
document.body.appendChild(popup);
}

document.getElementById("resultVenue").textContent=result.venue;
document.getElementById("resultDate").textContent=formatDate(date);

if(result.winner){
document.getElementById("resultWinner").textContent=result.winner;
document.getElementById("resultClub").textContent=result.club;
}else{
document.getElementById("resultWinner").textContent="Winner Not Yet Available";
document.getElementById("resultClub").textContent="The result will be updated after the race.";
}

popup.classList.add("show");
document.body.classList.add("modal-open");
}

function closeMatchResult(){
const popup=document.getElementById("matchResultPopup");
if(popup)popup.classList.remove("show");
document.body.classList.remove("modal-open");
}

function renderPoints(){
const body=document.getElementById("pointsBody");if(!body)return;

const sortedPoints=[...points].sort((a,b)=>{
if(b.points!==a.points)return b.points-a.points;
return a.club.localeCompare(b.club);
});

body.innerHTML=sortedPoints.map((p,i)=>`
<tr>
<td><span class="rank">${i+1}</span></td>
<td><strong>${p.club}</strong></td>
<td class="pts">${p.points}</td>
</tr>`).join("");
}

function renderHistoryPage(){
const tabs=document.getElementById("historyTabs"), content=document.getElementById("historyContent");
if(!tabs||!content)return;
let year=Number(sessionStorage.getItem("cblHistoryYear"))||2025;

const render=()=>{
tabs.innerHTML=Object.keys(history).sort((a,b)=>b-a).map(y=>
`<button class="${+y===year?"active":""}" data-year="${y}">${y}</button>`).join("");

const s=history[year];

const championTitle=s.champion || "2026 Season in Progress";
const championClub=s.club || "Match winners will be added as races are completed.";

content.innerHTML=`
<div class="season-hero">
<div><span class="eyebrow">SEASON ${year}</span><h2>${championTitle}</h2><p>${championClub}</p></div>
<div class="season-stat"><strong>${s.matches.length}</strong><span>Recorded<br>Matches</span></div>
</div>

<div class="history-table-wrap">
<div class="history-table-head"><span>#</span><span>Date</span><span>Venue</span><span>Winner</span><span>Winning Club / Result</span></div>
${s.matches.map((m,i)=>{
const special=/cancelled|abandoned|not yet/i.test(m[2]+" "+m[3]);
return `<div class="history-row ${special?"special":""}">
<span class="history-index">${String(i+1).padStart(2,"0")}</span>
<span>${m[1]}</span>
<strong>${m[0]}</strong>
<strong>${m[2]}</strong>
<span>${m[3]}</span>
</div>`;
}).join("")}
</div>`;

tabs.querySelectorAll("button").forEach(b=>b.onclick=()=>{
year=Number(b.dataset.year);
sessionStorage.setItem("cblHistoryYear",year);
render();
});
};
render();
}

document.querySelector(".menu-btn")?.addEventListener("click",()=>{
document.querySelector(".nav-links")?.classList.toggle("open");
});

renderWinner();
renderSchedule();
renderPoints();
renderNextVenueTicker();
renderHistoryPage();

setInterval(()=>{
renderSchedule();
renderNextVenueTicker();
},30000);

document.addEventListener("keydown",e=>{
if(e.key==="Escape")closeMatchResult();
});
