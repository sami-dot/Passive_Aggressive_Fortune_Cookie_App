const fortunes = [
  { text: "You will achieve greatness... if you stop scrolling TikTok.", category: "Self-doubt" },
  { text: "Your future looks bright, but not for the people around you.", category: "Cosmic failure" },
  { text: "This week, you will face a major decision. You’ll choose wrong.", category: "Mild roast" },
  { text: "Someone loves you. It's probably your dog.", category: "Mild roast" },
  { text: "The stars say 'no'. Just no.", category: "Cosmic failure" },
  { text: "You are the main character. In a cautionary tale.", category: "Self-doubt" },
  { text: "Opportunity knocks. You were watching anime.", category: "Self-doubt" },
   { text: "You will achieve greatness... if you stop scrolling TikTok for five seconds.", category: "Self-doubt" },
  { text: "Your future looks bright, but not for the people around you.", category: "Cosmic failure" },
  { text: "Someone loves you. It's probably your dog.", category: "Lonely Realism" },
  { text: "This week, you will face a major decision. You’ll choose wrong.", category: "Mild roast" },
  { text: "A surprise is coming. Spoiler: it's not good.", category: "Cosmic failure" },
  { text: "Today is a great day to start... pretending you have a plan.", category: "Life avoidance" },
  { text: "The stars say you should drink water. Like, ever.", category: "Health shame" },
  { text: "Opportunity knocks only once. You were in the bathroom.", category: "Missed chances" },
  { text: "Your potential is limitless. Pity about your follow-through.", category: "Self-doubt" },
  { text: "A new chapter begins. Try not to mess this one up too.", category: "Encouraging threat" },
  { text: "You are deeply unique, just like everyone else.", category: "Philosophical burns" },
  { text: "Patience will reward you. Eventually. Maybe. Who knows.", category: "Ambiguous advice" },
  { text: "Don't be afraid of failure. Be afraid of *more* failure.", category: "Motivational slap" },
  { text: "You will soon learn something valuable. Hopefully not the hard way.", category: "Foresight with dread" },
  { text: "Something amazing is coming. Don't get your hopes up.", category: "False hope" },
  { text: "You will be wildly successful... in your next simulation.", category: "Digital delusion" },
  { text: "Your crush knows you exist. Unfortunately, not in a good way.", category: "Romantic reality" },
  { text: "Tomorrow holds great things. For other people.", category: "Envy simulator" },
  { text: "You peaked during a group project in 7th grade. Sorry.", category: "Existential insult" },
  { text: "The universe has a plan for you. It’s mostly slapstick.", category: "Cosmic failure" },
  { text: "You are the main character. In a cautionary tale.", category: "Narrative regret" },
  { text: "Your confidence is inspiring. And completely unfounded.", category: "Self-doubt" },
  { text: "Something you fear will happen soon. So... good luck with that.", category: "Imminent doom" },
  { text: "Your browser history is already judging you.", category: "Digital guilt" },
  { text: "Today is the perfect day to stay in bed and pretend emails don't exist.", category: "Avoidance encouragement" },
  { text: "You have a bright future ahead, once we find it.", category: "Lost potential" },
  { text: "You inspire people... to make different life choices.", category: "Backhanded compliment" },
  { text: "The stars say 'no'. Just no.", category: "Cosmic failure" },
  { text: "You’ve been chosen. For an uncomfortable amount of responsibility.", category: "Pressure cooker" },
  { text: "This is the year you find inner peace. Unfortunately, it's not your year.", category: "Existential insult" },
  { text: "You are loved. But also slightly annoying.", category: "Mixed messages" },
  { text: "You will soon be confronted by the consequences of your personality.", category: "Hard truth" },
  { text: "A great opportunity is coming. You’ll ghost it, like always.", category: "Self-sabotage" },
  { text: "One day you'll be rich. Spiritually. Definitely not financially.", category: "False hope" },
  { text: "You’re exactly where you’re meant to be. According to the villain’s plan.", category: "Narrative regret" },
  { text: "All signs point to 'lol nope'.", category: "Cosmic failure" },
  { text: "The next person you meet will pretend to like your opinion.", category: "Social discomfort" },
  { text: "You are destined for something extraordinary. Just not today. Or tomorrow. Or next week.", category: "Procrastination prophecy" },
  { text: "You will win an argument. Alone. In the shower.", category: "Lonely Realism" },
  { text: "Your horoscope says you should lower your expectations. A lot.", category: "Horoscopic disappointment" },
  { text: "Someone is thinking of you. And immediately regretting it.", category: "Romantic reality" },
  { text: "Be bold today. But maybe not with your fashion choices.", category: "Fashion shame" },
  { text: "You are brave, strong, and wildly overestimating your capabilities.", category: "Motivational slap" },
  { text: "Good news is coming. But it's not for you.", category: "Envy simulator" },
  { text: "You will live a long, fulfilling life… if you stay off social media.", category: "Digital guilt" }
];

let totalFortunes = 0;
const categoryStats = {};

function handleClick() {
  const cookie = document.getElementById("cookie");
  const box = document.getElementById("fortune-box");

  cookie.classList.remove("explode");
  cookie.classList.add("crack");

  const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  box.textContent = fortune.text;

  totalFortunes++;
  categoryStats[fortune.category] = (categoryStats[fortune.category] || 0) + 1;
  updateStats();

  setTimeout(() => {
    cookie.classList.remove("crack");
  }, 500);
}

function handleDoubleClick() {
  const cookie = document.getElementById("cookie");
  const boomSound = document.getElementById("boom-sound");

  cookie.classList.add("explode");
  document.getElementById("fortune-box").textContent =
    "The cookie exploded. Fate is on lunch break.";
  boomSound.play();
}

function updateStats() {
  document.getElementById("totalCount").textContent = totalFortunes;
  const list = document.getElementById("categoryBreakdown");
  list.innerHTML = "";

  for (const [cat, count] of Object.entries(categoryStats)) {
    const li = document.createElement("li");
    li.textContent = `${cat}: ${count}`;
    list.appendChild(li);
  }
}

function animateCountUp(id, value) {
  const el = document.getElementById(id);
  const start = parseInt(el.textContent, 10) || 0;
  const end = value;
  const duration = 400;
  const step = Math.ceil((end - start) / (duration / 20));

  let current = start;
  const interval = setInterval(() => {
    current += step;
    if ((step > 0 && current >= end) || (step < 0 && current <= end)) {
      current = end;
      clearInterval(interval);
    }
    el.textContent = current;
  }, 20);
}

function updateStats() {
  animateCountUp("totalCount", totalFortunes);
  const list = document.getElementById("categoryBreakdown");
  list.innerHTML = "";

  for (const [cat, count] of Object.entries(categoryStats)) {
    const li = document.createElement("li");
    li.textContent = `${cat}: ${count}`;
    list.appendChild(li);
  }
}

