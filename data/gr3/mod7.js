// --- SHARED HELPER HUBS ---
const helperHubW1_Mod7 = {
    title: "★ Helper Hub: The Pattern Detective",
    content: `
        <div style="font-size:15px; line-height: 1.3;">
            <p style="margin-top:0; margin-bottom:12px;">When finding missing numbers in a pattern, look at the example and follow these 3 steps!</p>
            
            <div style="text-align:center; background:#fff; border:2px solid #ccc; border-radius:10px; padding:15px 10px 5px 10px; margin-bottom:15px; break-inside: avoid;">
                <svg width="300" height="90" viewBox="0 0 300 90">
                    <line x1="20" y1="40" x2="280" y2="40" stroke="#333" stroke-width="3" />
                    <polygon points="20,40 30,35 30,45" fill="#333" />
                    <polygon points="280,40 270,35 270,45" fill="#333" />
                    
                    <line x1="70" y1="30" x2="70" y2="50" stroke="#333" stroke-width="2" />
                    <text x="70" y="70" font-size="18" font-weight="bold" fill="#333" text-anchor="middle">5</text>
                    
                    <line x1="150" y1="30" x2="150" y2="50" stroke="#333" stroke-width="2" />
                    <text x="150" y="70" font-size="18" font-weight="bold" fill="#333" text-anchor="middle">10</text>
                    
                    <line x1="230" y1="30" x2="230" y2="50" stroke="#333" stroke-width="2" />
                    <text x="230" y="70" font-size="18" font-weight="bold" fill="#e74c3c" text-anchor="middle">?</text>
                    
                    <path d="M 70 25 Q 110 -10 150 25" fill="none" stroke="#2c7be5" stroke-width="3" />
                    <polygon points="150,25 142,18 142,28" fill="#2c7be5" />
                    <text x="110" y="10" font-size="16" font-weight="bold" fill="#2c7be5" text-anchor="middle">+5</text>
                    
                    <path d="M 150 25 Q 190 -10 230 25" fill="none" stroke="#e74c3c" stroke-width="3" stroke-dasharray="5,5" />
                    <polygon points="230,25 222,18 222,28" fill="#e74c3c" />
                    <text x="190" y="10" font-size="16" font-weight="bold" fill="#e74c3c" text-anchor="middle">+5</text>
                </svg>
            </div>

            <div style="display:flex; flex-direction:column; gap:8px; break-inside: avoid;">
                <div style="background:#e8f5e9; border-left:5px solid #27ae60; padding:8px 12px; border-radius:0 8px 8px 0;">
                    <strong>1. Find the Rule:</strong> Look at two numbers next to each other. How do you get from 5 to 10? You add 5!
                </div>
                <div style="background:#f0f7ff; border-left:5px solid #2c7be5; padding:8px 12px; border-radius:0 8px 8px 0;">
                    <strong>2. Test the Rule:</strong> Does adding 5 work for the rest of the line? Yes!
                </div>
                <div style="background:#fdf2f0; border-left:5px solid #e74c3c; padding:8px 12px; border-radius:0 8px 8px 0;">
                    <strong>3. Use the Rule:</strong> To find the missing number, just do 10 + 5. The missing number is <strong>15</strong>!
                </div>
            </div>
        </div>
    `
};

const helperHubW2_Mod7 = {
    title: "★ Helper Hub: Two-Step Word Problems",
    content: `
        <div style="font-size:15px; line-height: 1.3;">
            <p style="margin-top:0; margin-bottom:12px;">Some math problems are like a puzzle with a secret, hidden step you have to do first!</p>
            
            <div style="border:2px solid #ccc; padding:15px; border-radius:10px; background:#fff; break-inside: avoid;">
                <strong style="font-size:16px;">The Story:</strong><br>
                <em>"Maria buys 3 packs of stickers. Each pack has 4 stickers. She gives 5 stickers to her brother. How many stickers does she have left?"</em>
                
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-top:12px;">
                    <div style="background:#f0f7ff; padding:10px; border-radius:8px; border: 1px solid #b3d7ff;">
                        <strong style="color:#2c7be5;">Step 1: The Hidden Question</strong><br>
                        Before we can subtract, we need to know how many she started with!<br><br>
                        3 packs &times; 4 stickers = <strong>12 stickers</strong>
                    </div>
                    <div style="background:#fdf2f0; padding:10px; border-radius:8px; border: 1px solid #fadbd8;">
                        <strong style="color:#e74c3c;">Step 2: The Final Answer</strong><br>
                        Now that we know she has 12 stickers, we can give 5 away.<br><br>
                        12 - 5 = <strong>7 stickers left!</strong>
                    </div>
                </div>
            </div>

            <p style="margin-top:15px; margin-bottom:5px;"><strong>What about letters?</strong></p>
            <div style="background:#fff3e0; border-left:5px solid #f39c12; padding:10px 12px; border-radius:0 8px 8px 0; break-inside: avoid;">
                If you see a letter like <strong style="font-family:monospace; font-size:18px;">m</strong> or <strong style="font-family:monospace; font-size:18px;">y</strong> in a problem, don't panic! It is just a blank box waiting for a number. <br>
                <em>3 &times; <strong>y</strong> = 15</em> just means <em>"3 times WHAT equals 15?"</em> (The answer is 5!)
            </div>
        </div>
    `
};

// --- VERSIONS DATA ---
const mod7Versions = {
    A: {
        id: "mod-7-a",
        name: "Four Operations: Interpret, Represent, Solve",
        weeks: [
            {
                weekNum: 1,
                helperHub: helperHubW1_Mod7,
                days: [
                    {
                        id: "m7-w1-mon-a", name: "Mon", title: "Week 1: Monday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { patternLine: { values: [3, 6, null, 12, null], answers: [9, 15] }, text: "1. &nbsp; What unknown numbers complete the pattern on the number line? Enter them in the boxes.", answer: "" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 24 &divide; m = 4", answer: "6" }
                            ] }
                        ]
                    },
                    {
                        id: "m7-w1-tue-a", name: "Tue", title: "Week 1: Tuesday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { table: [ ["12", "17", "22", "27"], ["17", "ans:22", "27", "32"], ["22", "27", "ans:32", "37"], ["27", "32", "37", "ans:42"] ], text: "1. &nbsp; Part of an addition table is shown. What three numbers correctly complete the pattern? Enter them in the empty boxes.", answer: "" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What value for y makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; y = 42", answer: "6" }
                            ] }
                        ]
                    },
                    {
                        id: "m7-w1-wed-a", name: "Wed", title: "Week 1: Wednesday",
                        sections: [
                            { type: "grid", instruction: "1. &nbsp; A pattern of numbers is shown: 4, 8, 12, 16, 20... <br><br> Decide whether each statement about the pattern is true or false.", rows: [ { text: "The numbers are all even.", correct: true }, { text: "The rule is to add 2.", correct: false }, { text: "The numbers are all multiples of 4.", correct: true } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { patternLine: { values: [15, 20, null, 30, null], answers: [25, 35] }, text: "2. &nbsp; What unknown numbers complete the pattern on the number line? Enter them in the boxes.", answer: "" }
                            ] }
                        ]
                    },
                    {
                        id: "m7-w1-thu-a", name: "Thu", title: "Week 1: Thursday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "1. &nbsp; A farmer has 5 rows of apple trees with 8 trees in each row. He plants 10 more trees. How many apple trees does he have now?", answer: "50" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 50 - 15 = k", answer: "35" }
                            ] }
                        ]
                    },
                    {
                        id: "m7-w1-fri-a", name: "Fri", title: "Week 1: Friday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { table: [ ["15", "20", "25", "30"], ["20", "ans:25", "30", "35"], ["25", "30", "ans:35", "40"], ["30", "35", "40", "ans:45"] ], text: "1. &nbsp; Part of an addition table is shown. What three numbers correctly complete the pattern?", answer: "" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What value for n makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; n + 12 = 30", answer: "18" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { patternLine: { values: [9, 18, null, 36, null], answers: [27, 45] }, text: "3. &nbsp; What unknown numbers complete the pattern on the number line? Enter them in the boxes.", answer: "" }
                            ] }
                        ]
                    }
                ]
            },
            {
                weekNum: 2,
                helperHub: helperHubW2_Mod7,
                days: [
                    {
                        id: "m7-w2-mon-a", name: "Mon", title: "Week 2: Monday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "1. &nbsp; Sarah buys 4 packs of pencils. Each pack has 5 pencils. She gives 3 pencils to her brother. How many pencils does she have left?", answer: "17" }
                            ] },
                            { type: "grid", instruction: "2. &nbsp; A pattern of numbers is shown: 5, 10, 15, 20, 25... <br><br> Decide whether each statement about the pattern is true or false.", rows: [ { text: "The rule is to multiply by 5.", correct: false }, { text: "The numbers alternate between odd and even.", correct: true }, { text: "Every number ends in 0 or 5.", correct: true } ] }
                        ]
                    },
                    {
                        id: "m7-w2-tue-a", name: "Tue", title: "Week 2: Tuesday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "1. &nbsp; What value for p makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 3 &times; 8 = p &times; 4", answer: "6" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { patternLine: { values: [14, 21, null, 35, null], answers: [28, 42] }, text: "2. &nbsp; What unknown numbers complete the pattern on the number line? Enter them in the boxes.", answer: "" }
                            ] }
                        ]
                    },
                    {
                        id: "m7-w2-wed-a", name: "Wed", title: "Week 2: Wednesday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "1. &nbsp; A toy store has 50 toy cars. A worker puts them on shelves. They fill 3 shelves with 8 cars on each shelf. How many cars are left over?", answer: "26" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What value for r makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 100 - r = 45", answer: "55" }
                            ] }
                        ]
                    },
                    {
                        id: "m7-w2-thu-a", name: "Thu", title: "Week 2: Thursday",
                        sections: [
                            { type: "grid", instruction: "1. &nbsp; If the value of w is 4, decide whether each equation is true or false.", rows: [ { text: "3 &times; w = 12", correct: true }, { text: "20 &divide; w = 5", correct: true }, { text: "w + 16 = 22", correct: false } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { patternLine: { values: [null, 22, 30, 38, null], answers: [14, 46] }, text: "2. &nbsp; What unknown numbers complete the pattern on the number line? Enter them in the boxes.", answer: "" }
                            ] }
                        ]
                    },
                    {
                        id: "m7-w2-fri-a", name: "Fri", title: "Week 2: Friday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { table: [ ["21", "26", "31", "36"], ["26", "ans:31", "36", "41"], ["31", "36", "ans:41", "46"], ["36", "41", "46", "ans:51"] ], text: "1. &nbsp; Part of an addition table is shown. What three numbers correctly complete the pattern?", answer: "" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; Tom has 3 boxes of markers. Each box has 10 markers. He shares them equally among 5 friends. How many markers does each friend get?", answer: "6" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { patternLine: { values: [18, 30, null, 54, null], answers: [42, 66] }, text: "3. &nbsp; What unknown numbers complete the pattern on the number line? Enter them in the boxes.", answer: "" }
                            ] }
                        ]
                    }
                ]
            }
        ]
    },
    B: {
        id: "mod-7-b",
        name: "Four Operations: Interpret, Represent, Solve",
        weeks: [
            {
                weekNum: 1,
                helperHub: helperHubW1_Mod7,
                days: [
                    {
                        id: "m7-w1-mon-b", name: "Mon", title: "Week 1: Monday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { patternLine: { values: [4, 8, null, 16, null], answers: [12, 20] }, text: "1. &nbsp; What unknown numbers complete the pattern on the number line? Enter them in the boxes.", answer: "" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 30 &divide; m = 5", answer: "6" }
                            ] }
                        ]
                    },
                    {
                        id: "m7-w1-tue-b", name: "Tue", title: "Week 1: Tuesday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { table: [ ["14", "19", "24", "29"], ["19", "ans:24", "29", "34"], ["24", "29", "ans:34", "39"], ["29", "34", "39", "ans:44"] ], text: "1. &nbsp; Part of an addition table is shown. What three numbers correctly complete the pattern? Enter them in the empty boxes.", answer: "" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What value for y makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; y = 32", answer: "4" }
                            ] }
                        ]
                    },
                    {
                        id: "m7-w1-wed-b", name: "Wed", title: "Week 1: Wednesday",
                        sections: [
                            { type: "grid", instruction: "1. &nbsp; A pattern of numbers is shown: 6, 12, 18, 24, 30... <br><br> Decide whether each statement about the pattern is true or false.", rows: [ { text: "The numbers are all even.", correct: true }, { text: "The rule is to multiply by 6.", correct: false }, { text: "The rule is to add 6.", correct: true } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { patternLine: { values: [12, 16, null, 24, null], answers: [20, 28] }, text: "2. &nbsp; What unknown numbers complete the pattern on the number line? Enter them in the boxes.", answer: "" }
                            ] }
                        ]
                    },
                    {
                        id: "m7-w1-thu-b", name: "Thu", title: "Week 1: Thursday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "1. &nbsp; A teacher buys 4 packs of stickers. Each pack has 6 stickers. She gives away 5 stickers. How many stickers does she have left?", answer: "19" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 60 - 25 = k", answer: "35" }
                            ] }
                        ]
                    },
                    {
                        id: "m7-w1-fri-b", name: "Fri", title: "Week 1: Friday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { table: [ ["11", "16", "21", "26"], ["16", "ans:21", "26", "31"], ["21", "26", "ans:31", "36"], ["26", "31", "36", "ans:41"] ], text: "1. &nbsp; Part of an addition table is shown. What three numbers correctly complete the pattern?", answer: "" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What value for n makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; n + 15 = 40", answer: "25" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { patternLine: { values: [8, 16, null, 32, null], answers: [24, 40] }, text: "3. &nbsp; What unknown numbers complete the pattern on the number line? Enter them in the boxes.", answer: "" }
                            ] }
                        ]
                    }
                ]
            },
            {
                weekNum: 2,
                helperHub: helperHubW2_Mod7,
                days: [
                    {
                        id: "m7-w2-mon-b", name: "Mon", title: "Week 2: Monday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "1. &nbsp; Jake buys 5 packs of trading cards. Each pack has 4 cards. He gives 6 cards to his friend. How many cards does he have left?", answer: "14" }
                            ] },
                            { type: "grid", instruction: "2. &nbsp; A pattern of numbers is shown: 10, 20, 30, 40, 50... <br><br> Decide whether each statement about the pattern is true or false.", rows: [ { text: "The numbers alternate between odd and even.", correct: false }, { text: "The rule is to add 10.", correct: true }, { text: "Every number ends in a 0.", correct: true } ] }
                        ]
                    },
                    {
                        id: "m7-w2-tue-b", name: "Tue", title: "Week 2: Tuesday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "1. &nbsp; What value for p makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 4 &times; 6 = p &times; 3", answer: "8" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { patternLine: { values: [16, 24, null, 40, null], answers: [32, 48] }, text: "2. &nbsp; What unknown numbers complete the pattern on the number line? Enter them in the boxes.", answer: "" }
                            ] }
                        ]
                    },
                    {
                        id: "m7-w2-wed-b", name: "Wed", title: "Week 2: Wednesday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "1. &nbsp; A bakery makes 60 cupcakes. A worker places them into 4 boxes with 9 cupcakes in each box. How many cupcakes are left over?", answer: "24" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What value for r makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 100 - r = 35", answer: "65" }
                            ] }
                        ]
                    },
                    {
                        id: "m7-w2-thu-b", name: "Thu", title: "Week 2: Thursday",
                        sections: [
                            { type: "grid", instruction: "1. &nbsp; If the value of w is 5, decide whether each equation is true or false.", rows: [ { text: "4 &times; w = 20", correct: true }, { text: "30 &divide; w = 6", correct: true }, { text: "w + 12 = 18", correct: false } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { patternLine: { values: [null, 25, 35, 45, null], answers: [15, 55] }, text: "2. &nbsp; What unknown numbers complete the pattern on the number line? Enter them in the boxes.", answer: "" }
                            ] }
                        ]
                    },
                    {
                        id: "m7-w2-fri-b", name: "Fri", title: "Week 2: Friday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { table: [ ["23", "28", "33", "38"], ["28", "ans:33", "38", "43"], ["33", "38", "ans:43", "48"], ["38", "43", "48", "ans:53"] ], text: "1. &nbsp; Part of an addition table is shown. What three numbers correctly complete the pattern?", answer: "" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; Lily has 4 boxes of crayons. Each box has 8 crayons. She shares them equally between 2 friends. How many crayons does each friend get?", answer: "16" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { patternLine: { values: [15, 25, null, 45, null], answers: [35, 55] }, text: "3. &nbsp; What unknown numbers complete the pattern on the number line? Enter them in the boxes.", answer: "" }
                            ] }
                        ]
                    }
                ]
            }
        ]
    },
    C: {
        id: "mod-7-c",
        name: "Four Operations: Interpret, Represent, Solve",
        weeks: [
            {
                weekNum: 1,
                helperHub: helperHubW1_Mod7,
                days: [
                    {
                        id: "m7-w1-mon-c", name: "Mon", title: "Week 1: Monday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { patternLine: { values: [5, 10, null, 20, null], answers: [15, 25] }, text: "1. &nbsp; What unknown numbers complete the pattern on the number line? Enter them in the boxes.", answer: "" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 36 &divide; m = 4", answer: "9" }
                            ] }
                        ]
                    },
                    {
                        id: "m7-w1-tue-c", name: "Tue", title: "Week 1: Tuesday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { table: [ ["15", "25", "35", "45"], ["25", "ans:35", "45", "55"], ["35", "45", "ans:55", "65"], ["45", "55", "65", "ans:75"] ], text: "1. &nbsp; Part of an addition table is shown. What three numbers correctly complete the pattern? Enter them in the empty boxes.", answer: "" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What value for y makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 9 &times; y = 63", answer: "7" }
                            ] }
                        ]
                    },
                    {
                        id: "m7-w1-wed-c", name: "Wed", title: "Week 1: Wednesday",
                        sections: [
                            { type: "grid", instruction: "1. &nbsp; A pattern of numbers is shown: 7, 14, 21, 28, 35... <br><br> Decide whether each statement about the pattern is true or false.", rows: [ { text: "The numbers alternate between odd and even.", correct: true }, { text: "The rule is to multiply by 7.", correct: false }, { text: "The rule is to add 7.", correct: true } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { patternLine: { values: [18, 24, null, 36, null], answers: [30, 42] }, text: "2. &nbsp; What unknown numbers complete the pattern on the number line? Enter them in the boxes.", answer: "" }
                            ] }
                        ]
                    },
                    {
                        id: "m7-w1-thu-c", name: "Thu", title: "Week 1: Thursday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "1. &nbsp; A boy has 5 bags of marbles. Each bag has 8 marbles. He loses 12 marbles. How many marbles does he have left?", answer: "28" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 80 - 45 = k", answer: "35" }
                            ] }
                        ]
                    },
                    {
                        id: "m7-w1-fri-c", name: "Fri", title: "Week 1: Friday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { table: [ ["17", "27", "37", "47"], ["27", "ans:37", "47", "57"], ["37", "47", "ans:57", "67"], ["47", "57", "67", "ans:77"] ], text: "1. &nbsp; Part of an addition table is shown. What three numbers correctly complete the pattern?", answer: "" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What value for n makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; n + 18 = 50", answer: "32" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { patternLine: { values: [7, 14, null, 28, null], answers: [21, 35] }, text: "3. &nbsp; What unknown numbers complete the pattern on the number line? Enter them in the boxes.", answer: "" }
                            ] }
                        ]
                    }
                ]
            },
            {
                weekNum: 2,
                helperHub: helperHubW2_Mod7,
                days: [
                    {
                        id: "m7-w2-mon-c", name: "Mon", title: "Week 2: Monday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "1. &nbsp; A teacher buys 6 packs of paper clips. Each pack has 6 clips. She gives 10 clips to another teacher. How many clips does she have left?", answer: "26" }
                            ] },
                            { type: "grid", instruction: "2. &nbsp; A pattern of numbers is shown: 3, 6, 9, 12, 15... <br><br> Decide whether each statement about the pattern is true or false.", rows: [ { text: "The numbers alternate between odd and even.", correct: true }, { text: "The rule is to add 3.", correct: true }, { text: "Every number is a multiple of 4.", correct: false } ] }
                        ]
                    },
                    {
                        id: "m7-w2-tue-c", name: "Tue", title: "Week 2: Tuesday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "1. &nbsp; What value for p makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 5 &times; 6 = p &times; 10", answer: "3" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { patternLine: { values: [18, 27, null, 45, null], answers: [36, 54] }, text: "2. &nbsp; What unknown numbers complete the pattern on the number line? Enter them in the boxes.", answer: "" }
                            ] }
                        ]
                    },
                    {
                        id: "m7-w2-wed-c", name: "Wed", title: "Week 2: Wednesday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "1. &nbsp; A farmer has 80 pumpkins. He puts them into 6 baskets with 7 pumpkins in each basket. How many pumpkins are left over?", answer: "38" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What value for r makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 100 - r = 55", answer: "45" }
                            ] }
                        ]
                    },
                    {
                        id: "m7-w2-thu-c", name: "Thu", title: "Week 2: Thursday",
                        sections: [
                            { type: "grid", instruction: "1. &nbsp; If the value of w is 6, decide whether each equation is true or false.", rows: [ { text: "5 &times; w = 30", correct: true }, { text: "24 &divide; w = 4", correct: true }, { text: "w + 15 = 20", correct: false } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { patternLine: { values: [null, 32, 42, 52, null], answers: [22, 62] }, text: "2. &nbsp; What unknown numbers complete the pattern on the number line? Enter them in the boxes.", answer: "" }
                            ] }
                        ]
                    },
                    {
                        id: "m7-w2-fri-c", name: "Fri", title: "Week 2: Friday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { table: [ ["28", "38", "48", "58"], ["38", "ans:48", "58", "68"], ["48", "58", "ans:68", "78"], ["58", "68", "78", "ans:88"] ], text: "1. &nbsp; Part of an addition table is shown. What three numbers correctly complete the pattern?", answer: "" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; Emma has 5 boxes of toys. Each box has 6 toys. She shares them equally among 3 friends. How many toys does each friend get?", answer: "10" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { patternLine: { values: [20, 35, null, 65, null], answers: [50, 80] }, text: "3. &nbsp; What unknown numbers complete the pattern on the number line? Enter them in the boxes.", answer: "" }
                            ] }
                        ]
                    }
                ]
            }
        ]
    }
};