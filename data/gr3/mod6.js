// --- NEW: MODULE 6 DATA (Fractions) - Kept Inline Until Ready to Move ---
const mod6Data = {
    id: "mod-6",
    name: "Number & Ops: Fractions",
    weeks: [
        {
            weekNum: 1,
            days: [
                {
                    id: "m6-w1-mon", name: "Mon", title: "Week 1: Monday",
                    sections: [
                        { type: "mc", instruction: "1. &nbsp; Which model shows \\frac{2}{3} of the whole figure shaded?", options: [ { svg: drawFractionBar(3, 2), correct: true }, { svg: drawFractionBar(4, 2), correct: false }, { svg: drawFractionBar(3, 1), correct: false } ] },
                        { type: "fraction-input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What number goes in the boxes to make the equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 5 = [frac-box]", answer: "5/1" }] }
                    ]
                },
                {
                    id: "m6-w1-tue", name: "Tue", title: "Week 1: Tuesday",
                    sections: [
                        { type: "fraction-input", instruction: "Solve the problem below.", problems: [{ svg: drawNumberLine(6, 5), text: "1. &nbsp; Enter the fraction located at point A on the number line: [frac-box]", answer: "5/6" }] },
                        { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What number goes in the box to make the equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; \\frac{[box]}{1} = 8", answer: "8" }] }
                    ]
                },
                {
                    id: "m6-w1-wed", name: "Wed", title: "Week 1: Wednesday",
                    sections: [
                        { type: "fraction-input", instruction: "Solve the problem below.", problems: [ { svg: drawFractionBar(5, 3), text: "1. &nbsp; What fraction of the whole model is shaded? [frac-box]", answer: "3/5" } ] },
                        { type: "fraction-input", instruction: "Solve the problem below.", problems: [ { svg: drawNumberLine(4, 3), text: "2. &nbsp; Enter the fraction located at point A on the number line: [frac-box]", answer: "3/4" } ] }
                    ]
                },
                {
                    id: "m6-w1-thu", name: "Thu", title: "Week 1: Thursday",
                    sections: [
                        { type: "fraction-input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What number goes in the boxes to make the equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 1 = [frac-box]", answer: "1/1" }] },
                        { type: "mc", instruction: "2. &nbsp; Which model shows \\frac{1}{6} of the whole figure shaded?", options: [ { svg: drawFractionBar(6, 1), correct: true }, { svg: drawFractionBar(8, 1), correct: false }, { svg: drawFractionBar(6, 2), correct: false } ] }
                    ]
                },
                {
                    id: "m6-w1-fri", name: "Fri", title: "Week 1: Friday",
                    sections: [
                        { type: "fraction-input", instruction: "Solve the problem below.", problems: [{ svg: drawNumberLine(3, 2), text: "1. &nbsp; Enter the fraction located at point A on the number line: [frac-box]", answer: "2/3" }] },
                        { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What number goes in the box to make the equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; \\frac{6}{[box]} = 6", answer: "1" }] }
                    ]
                }
            ]
        },
        {
            weekNum: 2,
            days: [
                {
                    id: "m6-w2-mon", name: "Mon", title: "Week 2: Monday",
                    sections: [
                        { type: "mc", instruction: "1. &nbsp; Enter the symbol (&lt;, &gt;, =) that makes this comparison true: <br>&nbsp;&nbsp;&nbsp;&nbsp; \\frac{3}{6} &nbsp; □ &nbsp; \\frac{5}{6}", options: [ { text: "&lt;", correct: true }, { text: "&gt;", correct: false }, { text: "=", correct: false } ] },
                        { type: "mc", instruction: "2. &nbsp; Enter the symbol (&lt;, &gt;, =) that makes this comparison true: <br>&nbsp;&nbsp;&nbsp;&nbsp; \\frac{3}{4} &nbsp; □ &nbsp; \\frac{3}{8}", options: [ { text: "&lt;", correct: false }, { text: "&gt;", correct: true }, { text: "=", correct: false } ] }
                    ]
                },
                {
                    id: "m6-w2-tue", name: "Tue", title: "Week 2: Tuesday",
                    sections: [
                        { type: "input", instruction: "Solve the problem below.", problems: [ { text: "1. &nbsp; Which number goes in the box to make this comparison true?<br>&nbsp;&nbsp;&nbsp;&nbsp; \\frac{3}{8} &lt; \\frac{[box]}{8}", answer: ">3" } ] },
                        { type: "fraction-input", instruction: "Solve the problem below.", problems: [ { svg: drawNumberLine(8, 7), text: "2. &nbsp; Enter the fraction located at point A on the number line: [frac-box]", answer: "7/8" } ] }
                    ]
                },
                {
                    id: "m6-w2-wed", name: "Wed", title: "Week 2: Wednesday",
                    sections: [
                        { type: "grid", instruction: "1. &nbsp; Decide whether each comparison is true or false.", rows: [ { text: "\\frac{4}{6} &lt; \\frac{5}{6}", correct: true }, { text: "\\frac{8}{3} &gt; \\frac{7}{3}", correct: true }, { text: "\\frac{1}{3} &gt; \\frac{2}{3}", correct: false } ] },
                        { type: "fraction-input", instruction: "Solve the problem below.", problems: [ { svg: drawNumberLine(3, 1), text: "2. &nbsp; Enter the fraction located at point A on the number line: [frac-box]", answer: "1/3" } ] }
                    ]
                },
                {
                    id: "m6-w2-thu", name: "Thu", title: "Week 2: Thursday",
                    sections: [
                        { type: "input", instruction: "Solve the problem below.", problems: [ { text: "1. &nbsp; Which number goes in the box to make this comparison true?<br>&nbsp;&nbsp;&nbsp;&nbsp; \\frac{1}{3} &gt; \\frac{1}{[box]}", answer: ">3" } ] },
                        { type: "mc", instruction: "2. &nbsp; Enter the symbol (&lt;, &gt;, =) that makes this comparison true: <br>&nbsp;&nbsp;&nbsp;&nbsp; \\frac{3}{3} &nbsp; □ &nbsp; \\frac{6}{6}", options: [ { text: "&lt;", correct: false }, { text: "&gt;", correct: false }, { text: "=", correct: true } ] }
                    ]
                },
                {
                    id: "m6-w2-fri", name: "Fri", title: "Week 2: Friday",
                    sections: [
                        { type: "grid", instruction: "Decide whether each comparison is true or false.", rows: [ { text: "\\frac{1}{4} &gt; \\frac{1}{2}", correct: false }, { text: "\\frac{3}{8} &lt; \\frac{5}{8}", correct: true }, { text: "\\frac{2}{3} = \\frac{4}{6}", correct: true } ] },
                        { type: "fraction-input", instruction: "Solve the problem below.", problems: [ { svg: drawFractionBar(8, 4), text: "1. &nbsp; What fraction of the whole model is shaded? [frac-box]", answer: "4/8" } ] }
                    ]
                }
            ]
        }
    ]
};