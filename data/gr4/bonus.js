// data/gr4/bonus.js

let currentDrills = [];

// Helper for generating random numbers
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateStandardDrill() {
    const type = getRandomInt(0, 1);
    let n1, n2, ans, html;
    if (type === 0) { // Multiplication
        n1 = getRandomInt(3, 9);
        n2 = getRandomInt(3, 9);
        ans = n1 * n2;
        html = `${n1} &times; ${n2} = <input type="number" class="drill-input" data-answer="${ans}">`;
    } else { // Division
        n2 = getRandomInt(3, 9);
        ans = getRandomInt(3, 9);
        n1 = n2 * ans;
        html = `${n1} &divide; ${n2} = <input type="number" class="drill-input" data-answer="${ans}">`;
    }
    return { type: 'std', html: html };
}

function generateFractionDrill() {
    const type = getRandomInt(0, 2);
    const unknownPos = getRandomInt(0, 1);
    const D = getRandomInt(3, 10);
    let html = '';
    
    // HTML Generators for fractions/inputs
    const vFrac = (n, d) => `<div class="fraction-wrap"><div class="frac-top">${n}</div><div class="frac-bottom">${d}</div></div>`;
    const vInput = (ans) => `<div class="fraction-input-group" data-answer="${ans}" style="display:inline-block; vertical-align:middle; margin:0 5px;"><div class="fraction-wrap"><div class="frac-top"><input class="frac-input" style="width:30px; font-size:16px;"></div><div class="frac-bottom"><input class="frac-input" style="width:30px; font-size:16px;"></div></div></div>`;
    const stdInput = (ans) => `<input type="number" class="drill-input" data-answer="${ans}" style="width:50px!important;">`;

    if (type === 0) { // Addition
        const A = getRandomInt(1, D - 2);
        const B = getRandomInt(1, D - A);
        const Sum = A + B;
        if (unknownPos === 0) html = `${vFrac(A, D)} + ${vFrac(B, D)} = ${vInput(Sum / D)}`;
        else html = `${vFrac(A, D)} + ${vInput(B / D)} = ${vFrac(Sum, D)}`;
    }
    else if (type === 1) { // Subtraction
        const A = getRandomInt(1, D - 2);
        const B = getRandomInt(1, D - A);
        const Sum = A + B;
        if (unknownPos === 0) html = `${vFrac(Sum, D)} - ${vFrac(A, D)} = ${vInput(B / D)}`;
        else html = `${vFrac(Sum, D)} - ${vInput(A / D)} = ${vFrac(B, D)}`;
    }
    else { // Multiplication by Whole Number
        const W = getRandomInt(2, 6);
        if (unknownPos === 0) html = `${W} &times; ${vFrac(1, D)} = ${vInput(W / D)}`;
        else html = `${stdInput(W)} &times; ${vFrac(1, D)} = ${vFrac(W, D)}`;
    }
    return { type: 'frac', html: html };
}

function startExtraPractice() {
    const container = document.getElementById('extraPracticeContainer');
    const grid = document.getElementById('drillGrid');
    const feedback = document.getElementById('drillFeedback');

    // Hide Day Content
    document.querySelectorAll('.day-content').forEach(d => d.classList.add('hidden'));
    const ph = document.getElementById('placeholder');
    if(ph) ph.style.display = 'none';
    document.getElementById('footer-controls').style.display = 'none';

    // Show Drill Container
    container.classList.remove('hidden');
    feedback.style.display = 'none';
    grid.innerHTML = '';
    currentDrills = [];

    // Generate Drills
    let drills = [];
    for (let i = 0; i < 8; i++) drills.push(generateStandardDrill());
    for (let i = 0; i < 7; i++) drills.push(generateFractionDrill());

    // Shuffle
    drills.sort(() => Math.random() - 0.5);

    // Render
    drills.forEach((d, i) => {
        const card = document.createElement('div');
        card.className = 'drill-card';
        card.innerHTML = d.html;
        card.id = `drill-card-${i}`;
        grid.appendChild(card);
    });

    container.scrollIntoView({ behavior: 'smooth' });
}

function checkDrills() {
    let correctCount = 0;
    const grid = document.getElementById('drillGrid');
    const cards = grid.children;

    for (let card of cards) {
        let isCorrect = false;
        const stdInput = card.querySelector('input.drill-input');
        const fracGroup = card.querySelector('.fraction-input-group');

        if (stdInput) {
            const val = stdInput.value.trim();
            const ans = stdInput.getAttribute('data-answer');
            if (val == ans) isCorrect = true;
        }
        else if (fracGroup) {
            const inputs = fracGroup.querySelectorAll('input');
            const n = parseFloat(inputs[0].value) || 0;
            const d = parseFloat(inputs[1].value) || 1;
            const target = parseFloat(fracGroup.getAttribute('data-answer'));
            if (Math.abs((n / d) - target) < 0.001) isCorrect = true;
        }

        card.style.border = isCorrect ? "2px solid #27ae60" : "2px solid #e74c3c";
        card.style.backgroundColor = isCorrect ? "#e8f5e9" : "#fadbd8";
        if (isCorrect) correctCount++;
    }

    const feedbackEl = document.getElementById('drillFeedback');
    feedbackEl.style.display = 'block';
    if (correctCount === 15) {
        feedbackEl.innerHTML = "🌟 PERFECT! 15/15! 🌟";
        feedbackEl.className = "feedback-box correct";
    } else {
        feedbackEl.innerHTML = `You got ${correctCount} out of 15 correct. Keep practicing!`;
        feedbackEl.className = "feedback-box warning";
    }
}