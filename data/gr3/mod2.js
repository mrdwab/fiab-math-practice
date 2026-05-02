// --- SHARED HELPER HUBS ---
const helperHubW1_Mod2 = {
    title: "★ Helper Hub: Pictures of Math",
    content: `
        <div style="font-size:15px; line-height: 1.3;">
            <p style="margin-top:0; margin-bottom:12px;">Multiplication builds a total. Division splits a total. Here is how we draw them!</p>
            
            <div style="display:flex; flex-direction:column; gap:10px; break-inside: avoid;">
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
                    <div style="border:2px solid #ccc; padding:10px; border-radius:10px; background:#fff; text-align:center;">
                        <strong style="font-size:14px; color:#2c7be5;">Multiplication: Groups</strong><br>
                        <span style="color:#555; font-size:12px;">3 groups of 4 = 12</span>
                        <div style="margin-top:5px;">
                            <svg width="120" height="40" viewBox="0 0 150 50">
                                <circle cx="25" cy="25" r="18" fill="#f0f7ff" stroke="#2c7be5" stroke-width="2"/>
                                <circle cx="25" cy="18" r="3" fill="#2c7be5"/><circle cx="25" cy="32" r="3" fill="#2c7be5"/><circle cx="18" cy="25" r="3" fill="#2c7be5"/><circle cx="32" cy="25" r="3" fill="#2c7be5"/>
                                
                                <circle cx="75" cy="25" r="18" fill="#f0f7ff" stroke="#2c7be5" stroke-width="2"/>
                                <circle cx="75" cy="18" r="3" fill="#2c7be5"/><circle cx="75" cy="32" r="3" fill="#2c7be5"/><circle cx="68" cy="25" r="3" fill="#2c7be5"/><circle cx="82" cy="25" r="3" fill="#2c7be5"/>
                                
                                <circle cx="125" cy="25" r="18" fill="#f0f7ff" stroke="#2c7be5" stroke-width="2"/>
                                <circle cx="125" cy="18" r="3" fill="#2c7be5"/><circle cx="125" cy="32" r="3" fill="#2c7be5"/><circle cx="118" cy="25" r="3" fill="#2c7be5"/><circle cx="132" cy="25" r="3" fill="#2c7be5"/>
                            </svg>
                        </div>
                    </div>
                    <div style="border:2px solid #ccc; padding:10px; border-radius:10px; background:#fff; text-align:center;">
                        <strong style="font-size:14px; color:#27ae60;">Multiplication: Arrays</strong><br>
                        <span style="color:#555; font-size:12px;">3 rows of 4 = 12</span>
                        <div style="margin-top:5px;">
                            <svg width="120" height="40" viewBox="0 0 150 50">
                                <rect x="35" y="5" width="15" height="10" fill="#e8f5e9" stroke="#27ae60" stroke-width="1"/>
                                <rect x="55" y="5" width="15" height="10" fill="#e8f5e9" stroke="#27ae60" stroke-width="1"/>
                                <rect x="75" y="5" width="15" height="10" fill="#e8f5e9" stroke="#27ae60" stroke-width="1"/>
                                <rect x="95" y="5" width="15" height="10" fill="#e8f5e9" stroke="#27ae60" stroke-width="1"/>
                                
                                <rect x="35" y="20" width="15" height="10" fill="#e8f5e9" stroke="#27ae60" stroke-width="1"/>
                                <rect x="55" y="20" width="15" height="10" fill="#e8f5e9" stroke="#27ae60" stroke-width="1"/>
                                <rect x="75" y="20" width="15" height="10" fill="#e8f5e9" stroke="#27ae60" stroke-width="1"/>
                                <rect x="95" y="20" width="15" height="10" fill="#e8f5e9" stroke="#27ae60" stroke-width="1"/>
                                
                                <rect x="35" y="35" width="15" height="10" fill="#e8f5e9" stroke="#27ae60" stroke-width="1"/>
                                <rect x="55" y="35" width="15" height="10" fill="#e8f5e9" stroke="#27ae60" stroke-width="1"/>
                                <rect x="75" y="35" width="15" height="10" fill="#e8f5e9" stroke="#27ae60" stroke-width="1"/>
                                <rect x="95" y="35" width="15" height="10" fill="#e8f5e9" stroke="#27ae60" stroke-width="1"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
};

const helperHubW2_Mod2 = {
    title: "★ Helper Hub: Breaking Apart Numbers",
    content: `
        <div style="font-size:15px; line-height: 1.3;">
            <p style="margin-top:0; margin-bottom:12px;">Sometimes a multiplication fact is too big. You can break the big number into two smaller, easier chunks! This is called the <strong>Distributive Property</strong>.</p>
            
            <div style="display:flex; align-items:center; gap:15px; border:2px solid #ccc; padding:15px; border-radius:10px; background:#fff; break-inside: avoid;">
                <div style="flex:1;">
                    <strong style="font-size:16px;">Example: <span style="color:#8e44ad;">8 &times; 7</span></strong><br>
                    I don't know my 7s... but I know my 5s and 2s! <br>Because <strong>5 + 2 = 7</strong>, I can break the 7 apart:<br><br>
                    Do the 5s: <strong style="color:#2c7be5;">8 &times; 5 = 40</strong><br>
                    Do the 2s: <strong style="color:#e74c3c;">8 &times; 2 = 16</strong><br>
                    Add them: <strong>40 + 16 = 56!</strong>
                </div>
                
                <div style="flex:1; text-align:center;">
                    <svg width="220" height="100" viewBox="0 0 220 100" style="margin: 0 auto; display: block;">
                        <rect x="10" y="10" width="120" height="60" fill="#f0f7ff" stroke="#2c7be5" stroke-width="2" rx="4"/>
                        <text x="70" y="45" font-size="16" font-weight="bold" fill="#2c7be5" text-anchor="middle">8 &times; 5</text>
                        <text x="70" y="85" font-size="12" font-weight="bold" fill="#2c7be5" text-anchor="middle">5 columns</text>
                        
                        <rect x="135" y="10" width="70" height="60" fill="#fdf2f0" stroke="#e74c3c" stroke-width="2" rx="4"/>
                        <text x="170" y="45" font-size="16" font-weight="bold" fill="#e74c3c" text-anchor="middle">8 &times; 2</text>
                        <text x="170" y="85" font-size="12" font-weight="bold" fill="#e74c3c" text-anchor="middle">2 columns</text>
                        
                        <text x="25" y="45" font-size="12" font-weight="bold" fill="#555" transform="rotate(-90 25,45)">8 rows</text>
                    </svg>
                    <div style="font-size:14px; font-weight:bold; margin-top:5px;">8 &times; 7 = 8 &times; (5 + 2)</div>
                </div>
            </div>
        </div>
    `
};

// --- VERSIONS DATA ---
const mod2Versions = {
    A: {
        id: "mod-2-a",
        name: "Mult/Div: Interpret & Solve",
        weeks: [
            {
                weekNum: 1,
                helperHub: helperHubW1_Mod2,
                days: [
                    { 
                        id: "m2-w1-mon-a", name: "Mon", title: "Week 1: Monday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the word problem below.", problems: [{ text: "1. &nbsp; A grocer has 3 bags of apples. There are 6 apples in each bag. How many apples does the grocer have in total?", answer: "18" }] }, 
                            { type: "grid", instruction: "2. &nbsp; Decide whether each equation is true or false.", rows: [{ text: "3 &times; 6 = 18", correct: true }, { text: "45 &divide; 9 = 5", correct: true }, { text: "4 &times; 8 = 28", correct: false }] } 
                        ] 
                    },
                    { 
                        id: "m2-w1-tue-a", name: "Tue", title: "Week 1: Tuesday", 
                        sections: [ 
                            { type: "input", instruction: "1. &nbsp; Complete the skip counting pattern below.", problems: [{ patternLine: { values: [7, 14, null, 28, null], answers: [21, 35] } }] }, 
                            { type: "input", instruction: "Solve the word problem below.", problems: [{ text: "2. &nbsp; A teacher has 24 students. She wants to put them into 4 equal teams. How many students will be on each team?", answer: "6" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w1-wed-a", name: "Wed", title: "Week 1: Wednesday", 
                        sections: [ 
                            { type: "mc", instruction: "1. &nbsp; Which expression matches a picture of 3 groups of 5?", options: [{ text: "3 + 5", correct: false }, { text: "3 &times; 5", correct: true }, { text: "35", correct: false }] }, 
                            { type: "input", instruction: "Solve the word problem below.", problems: [{ text: "2. &nbsp; Sarah has 42 pieces of candy to share equally among 7 friends. How many pieces of candy will each friend get?", answer: "6" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w1-thu-a", name: "Thu", title: "Week 1: Thursday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the word problem below.", problems: [{ text: "1. &nbsp; Mark reads 8 pages of his book every day. If he reads 56 pages in total, how many days did he spend reading?", answer: "7" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 3 &times; 9 = [box]", answer: "27" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w1-fri-a", name: "Fri", title: "Week 1: Friday", 
                        sections: [ 
                            { type: "double", instruction: "1. &nbsp; Enter the unknown numbers to complete the related equations.", prompt: "8 &times; 6 = [box]<br><br>64 &divide; 8 = [box]", answers: ["48", "8"] }, 
                            { type: "grid", instruction: "2. &nbsp; Decide whether each equation is true or false.", rows: [{ text: "5 &times; 6 = 30", correct: true }, { text: "28 &divide; 4 = 7", correct: true }] } 
                        ] 
                    }
                ]
            },
            {
                weekNum: 2,
                helperHub: helperHubW2_Mod2,
                days: [
                    { 
                        id: "m2-w2-mon-a", name: "Mon", title: "Week 2: Monday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the word problem below.", problems: [{ text: "1. &nbsp; A classroom has 4 equal rows of desks. There are 8 desks in each row. How many total desks are in the classroom?", answer: "32" }] }, 
                            { type: "grid", instruction: "2. &nbsp; Decide whether each equation is true or false.", rows: [{ text: "4 &times; (2 &times; 5) = (4 &times; 2) &times; 5", correct: true }, { text: "6 &times; 7 = 6 &times; (5 + 2)", correct: true }] } 
                        ] 
                    },
                    { 
                        id: "m2-w2-tue-a", name: "Tue", title: "Week 2: Tuesday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 35 &divide; 7 = [box]", answer: "5" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 5 &times; 8 = 5 &times; (4 + [box])", answer: "4" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w2-wed-a", name: "Wed", title: "Week 2: Wednesday", 
                        sections: [ 
                            { type: "grid", instruction: "1. &nbsp; Decide whether each equation is true or false.", rows: [{ text: "6 &times; 4 = 24", correct: true }, { text: "7 &times; 8 = 56", correct: true }, { text: "9 &times; 3 = 27", correct: true }] }, 
                            { type: "mc", instruction: "2. &nbsp; Which expression is equal to 5 &times; (2 &times; 4)?", options: [{ text: "5 + (2 &times; 4)", correct: false }, { text: "(5 &times; 2) &times; 4", correct: true }, { text: "(5 &times; 2) + 4", correct: false }] } 
                        ] 
                    },
                    { 
                        id: "m2-w2-thu-a", name: "Thu", title: "Week 2: Thursday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 54 &divide; 9 = [box]", answer: "6" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 48 &divide; 8 = [box]", answer: "6" }] }, 
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "3. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 5 = 35", answer: "7" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 35 &divide; [box] = 7", answer: "5" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w2-fri-a", name: "Fri", title: "Week 2: Friday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; 7 = 8 &times; (5 + [box])", answer: "2" }] }, 
                            { type: "mc", instruction: "2. &nbsp; Which expression is equal to 6 &times; (2 &times; 3)?", options: [{ text: "6 + (2 &times; 3)", correct: false }, { text: "(6 &times; 2) &times; 3", correct: true }, { text: "(6 &times; 2) + 3", correct: false }] } 
                        ] 
                    }
                ]
            }
        ]
    },
    B: {
        id: "mod-2-b",
        name: "Mult/Div: Interpret & Solve",
        weeks: [
            {
                weekNum: 1,
                helperHub: helperHubW1_Mod2,
                days: [
                    { 
                        id: "m2-w1-mon-b", name: "Mon", title: "Week 1: Monday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the word problem below.", problems: [{ text: "1. &nbsp; An art teacher has 4 boxes of crayons. There are 8 crayons in each box. How many crayons does the teacher have in total?", answer: "32" }] }, 
                            { type: "grid", instruction: "2. &nbsp; Decide whether each equation is true or false.", rows: [{ text: "4 &times; 7 = 28", correct: true }, { text: "36 &divide; 6 = 6", correct: true }, { text: "5 &times; 9 = 40", correct: false }] } 
                        ] 
                    },
                    { 
                        id: "m2-w1-tue-b", name: "Tue", title: "Week 1: Tuesday", 
                        sections: [ 
                            { type: "input", instruction: "1. &nbsp; Complete the skip counting pattern below.", problems: [{ patternLine: { values: [6, 12, null, 24, null], answers: [18, 30] } }] }, 
                            { type: "input", instruction: "Solve the word problem below.", problems: [{ text: "2. &nbsp; A coach has 30 players. He wants to put them into 5 equal teams. How many players will be on each team?", answer: "6" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w1-wed-b", name: "Wed", title: "Week 1: Wednesday", 
                        sections: [ 
                            { type: "mc", instruction: "1. &nbsp; Which expression matches a picture of 4 groups of 6?", options: [{ text: "4 + 6", correct: false }, { text: "4 &times; 6", correct: true }, { text: "46", correct: false }] }, 
                            { type: "input", instruction: "Solve the word problem below.", problems: [{ text: "2. &nbsp; Jake has 48 playing cards to share equally among 8 friends. How many cards will each friend get?", answer: "6" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w1-thu-b", name: "Thu", title: "Week 1: Thursday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the word problem below.", problems: [{ text: "1. &nbsp; Lily paints 9 small pictures every day. If she paints 72 pictures in total, how many days did she spend painting?", answer: "8" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 4 &times; 8 = [box]", answer: "32" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w1-fri-b", name: "Fri", title: "Week 1: Friday", 
                        sections: [ 
                            { type: "double", instruction: "1. &nbsp; Enter the unknown numbers to complete the related equations.", prompt: "7 &times; 9 = [box]<br><br>81 &divide; 9 = [box]", answers: ["63", "9"] }, 
                            { type: "grid", instruction: "2. &nbsp; Decide whether each equation is true or false.", rows: [{ text: "6 &times; 7 = 42", correct: true }, { text: "32 &divide; 8 = 4", correct: true }] } 
                        ] 
                    }
                ]
            },
            {
                weekNum: 2,
                helperHub: helperHubW2_Mod2,
                days: [
                    { 
                        id: "m2-w2-mon-b", name: "Mon", title: "Week 2: Monday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the word problem below.", problems: [{ text: "1. &nbsp; A cafeteria has 5 equal rows of chairs. There are 7 chairs in each row. How many total chairs are in the cafeteria?", answer: "35" }] }, 
                            { type: "grid", instruction: "2. &nbsp; Decide whether each equation is true or false.", rows: [{ text: "3 &times; (4 &times; 2) = (3 &times; 4) &times; 2", correct: true }, { text: "8 &times; 6 = 8 &times; (4 + 2)", correct: true }] } 
                        ] 
                    },
                    { 
                        id: "m2-w2-tue-b", name: "Tue", title: "Week 2: Tuesday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 36 &divide; 9 = [box]", answer: "4" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; 9 = 7 &times; (5 + [box])", answer: "4" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w2-wed-b", name: "Wed", title: "Week 2: Wednesday", 
                        sections: [ 
                            { type: "grid", instruction: "1. &nbsp; Decide whether each equation is true or false.", rows: [{ text: "7 &times; 6 = 42", correct: true }, { text: "8 &times; 4 = 32", correct: true }, { text: "9 &times; 5 = 45", correct: true }] }, 
                            { type: "mc", instruction: "2. &nbsp; Which expression is equal to 4 &times; (3 &times; 2)?", options: [{ text: "4 + (3 &times; 2)", correct: false }, { text: "(4 &times; 3) &times; 2", correct: true }, { text: "(4 &times; 3) + 2", correct: false }] } 
                        ] 
                    },
                    { 
                        id: "m2-w2-thu-b", name: "Thu", title: "Week 2: Thursday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 63 &divide; 9 = [box]", answer: "7" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 56 &divide; 7 = [box]", answer: "8" }] }, 
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "3. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 6 = 42", answer: "7" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 42 &divide; [box] = 7", answer: "6" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w2-fri-b", name: "Fri", title: "Week 2: Friday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 9 &times; 8 = 9 &times; (5 + [box])", answer: "3" }] }, 
                            { type: "mc", instruction: "2. &nbsp; Which expression is equal to 7 &times; (2 &times; 4)?", options: [{ text: "7 + (2 &times; 4)", correct: false }, { text: "(7 &times; 2) &times; 4", correct: true }, { text: "(7 &times; 2) + 4", correct: false }] } 
                        ] 
                    }
                ]
            }
        ]
    },
    C: {
        id: "mod-2-c",
        name: "Mult/Div: Interpret & Solve",
        weeks: [
            {
                weekNum: 1,
                helperHub: helperHubW1_Mod2,
                days: [
                    { 
                        id: "m2-w1-mon-c", name: "Mon", title: "Week 1: Monday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the word problem below.", problems: [{ text: "1. &nbsp; A baker has 5 packs of cookies. There are 9 cookies in each pack. How many cookies does the baker have in total?", answer: "45" }] }, 
                            { type: "grid", instruction: "2. &nbsp; Decide whether each equation is true or false.", rows: [{ text: "6 &times; 6 = 36", correct: true }, { text: "42 &divide; 7 = 6", correct: true }, { text: "8 &times; 3 = 25", correct: false }] } 
                        ] 
                    },
                    { 
                        id: "m2-w1-tue-c", name: "Tue", title: "Week 1: Tuesday", 
                        sections: [ 
                            { type: "input", instruction: "1. &nbsp; Complete the skip counting pattern below.", problems: [{ patternLine: { values: [8, 16, null, 32, null], answers: [24, 40] } }] }, 
                            { type: "input", instruction: "Solve the word problem below.", problems: [{ text: "2. &nbsp; A camp counselor has 36 campers. She wants to put them into 6 equal groups. How many campers will be in each group?", answer: "6" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w1-wed-c", name: "Wed", title: "Week 1: Wednesday", 
                        sections: [ 
                            { type: "mc", instruction: "1. &nbsp; Which expression matches a picture of 7 groups of 3?", options: [{ text: "7 + 3", correct: false }, { text: "7 &times; 3", correct: true }, { text: "73", correct: false }] }, 
                            { type: "input", instruction: "Solve the word problem below.", problems: [{ text: "2. &nbsp; Emma has 54 beads to share equally among 6 friends. How many beads will each friend get?", answer: "9" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w1-thu-c", name: "Thu", title: "Week 1: Thursday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the word problem below.", problems: [{ text: "1. &nbsp; David practices piano for 7 hours every week. If he practiced 49 hours in total, how many weeks did he practice?", answer: "7" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; 7 = [box]", answer: "42" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w1-fri-c", name: "Fri", title: "Week 1: Friday", 
                        sections: [ 
                            { type: "double", instruction: "1. &nbsp; Enter the unknown numbers to complete the related equations.", prompt: "8 &times; 8 = [box]<br><br>56 &divide; 7 = [box]", answers: ["64", "8"] }, 
                            { type: "grid", instruction: "2. &nbsp; Decide whether each equation is true or false.", rows: [{ text: "8 &times; 4 = 32", correct: true }, { text: "45 &divide; 9 = 5", correct: true }] } 
                        ] 
                    }
                ]
            },
            {
                weekNum: 2,
                helperHub: helperHubW2_Mod2,
                days: [
                    { 
                        id: "m2-w2-mon-c", name: "Mon", title: "Week 2: Monday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the word problem below.", problems: [{ text: "1. &nbsp; A garden has 6 equal rows of tomato plants. There are 6 plants in each row. How many total tomato plants are in the garden?", answer: "36" }] }, 
                            { type: "grid", instruction: "2. &nbsp; Decide whether each equation is true or false.", rows: [{ text: "5 &times; (2 &times; 3) = (5 &times; 2) &times; 3", correct: true }, { text: "9 &times; 7 = 9 &times; (5 + 2)", correct: true }] } 
                        ] 
                    },
                    { 
                        id: "m2-w2-tue-c", name: "Tue", title: "Week 2: Tuesday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 42 &divide; 7 = [box]", answer: "6" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; 8 = 6 &times; (5 + [box])", answer: "3" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w2-wed-c", name: "Wed", title: "Week 2: Wednesday", 
                        sections: [ 
                            { type: "grid", instruction: "1. &nbsp; Decide whether each equation is true or false.", rows: [{ text: "8 &times; 8 = 64", correct: true }, { text: "6 &times; 9 = 54", correct: true }, { text: "7 &times; 4 = 28", correct: true }] }, 
                            { type: "mc", instruction: "2. &nbsp; Which expression is equal to 6 &times; (2 &times; 4)?", options: [{ text: "6 + (2 &times; 4)", correct: false }, { text: "(6 &times; 2) &times; 4", correct: true }, { text: "(6 &times; 2) + 4", correct: false }] } 
                        ] 
                    },
                    { 
                        id: "m2-w2-thu-c", name: "Thu", title: "Week 2: Thursday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 72 &divide; 8 = [box]", answer: "9" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 42 &divide; 6 = [box]", answer: "7" }] }, 
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "3. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 8 = 32", answer: "4" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 32 &divide; [box] = 4", answer: "8" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w2-fri-c", name: "Fri", title: "Week 2: Friday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; 6 = 7 &times; (4 + [box])", answer: "2" }] }, 
                            { type: "mc", instruction: "2. &nbsp; Which expression is equal to 8 &times; (3 &times; 2)?", options: [{ text: "8 + (3 &times; 2)", correct: false }, { text: "(8 &times; 3) &times; 2", correct: true }, { text: "(8 &times; 3) + 2", correct: false }] } 
                        ] 
                    }
                ]
            }
        ]
    }
};