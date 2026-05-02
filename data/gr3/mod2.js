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
                                <circle cx="75" cy="25" r="18" fill="#f0f7ff" stroke="#2c7be5" stroke-width="2"/>
                                <circle cx="125" cy="25" r="18" fill="#f0f7ff" stroke="#2c7be5" stroke-width="2"/>
                                <text x="25" y="31" font-size="16" font-weight="bold" fill="#2c7be5" text-anchor="middle">4</text>
                                <text x="75" y="31" font-size="16" font-weight="bold" fill="#2c7be5" text-anchor="middle">4</text>
                                <text x="125" y="31" font-size="16" font-weight="bold" fill="#2c7be5" text-anchor="middle">4</text>
                            </svg>
                        </div>
                    </div>
                    
                    <div style="border:2px solid #ccc; padding:10px; border-radius:10px; background:#fff; text-align:center;">
                        <strong style="font-size:14px; color:#27ae60;">Multiplication: Arrays</strong><br>
                        <span style="color:#555; font-size:12px;">3 rows of 4 = 12</span>
                        <div style="margin-top:5px;">
                            <svg width="90" height="40" viewBox="0 0 100 50">
                                <circle cx="20" cy="10" r="5" fill="#27ae60"/> <circle cx="40" cy="10" r="5" fill="#27ae60"/> <circle cx="60" cy="10" r="5" fill="#27ae60"/> <circle cx="80" cy="10" r="5" fill="#27ae60"/>
                                <circle cx="20" cy="25" r="5" fill="#27ae60"/> <circle cx="40" cy="25" r="5" fill="#27ae60"/> <circle cx="60" cy="25" r="5" fill="#27ae60"/> <circle cx="80" cy="25" r="5" fill="#27ae60"/>
                                <circle cx="20" cy="40" r="5" fill="#27ae60"/> <circle cx="40" cy="40" r="5" fill="#27ae60"/> <circle cx="60" cy="40" r="5" fill="#27ae60"/> <circle cx="80" cy="40" r="5" fill="#27ae60"/>
                            </svg>
                        </div>
                    </div>
                </div>
                
                <div style="border:2px solid #ccc; padding:10px; border-radius:10px; background:#fff; text-align:center;">
                    <strong style="font-size:14px; color:#e74c3c;">Division: Splitting the Total</strong><br>
                    <span style="color:#555; font-size:12px;">12 total dots split into 3 groups = 4 in each group</span>
                    <div style="margin-top:5px; display:flex; justify-content:center; align-items:center; gap:10px;">
                        <div style="font-weight:bold; color:#e74c3c; font-size:18px;">12 &divide; 3 = 4</div>
                        <svg width="150" height="40" viewBox="0 0 150 50">
                            <rect x="5" y="5" width="40" height="40" rx="8" fill="#fdf2f0" stroke="#e74c3c" stroke-width="2" stroke-dasharray="4,2"/>
                            <rect x="55" y="5" width="40" height="40" rx="8" fill="#fdf2f0" stroke="#e74c3c" stroke-width="2" stroke-dasharray="4,2"/>
                            <rect x="105" y="5" width="40" height="40" rx="8" fill="#fdf2f0" stroke="#e74c3c" stroke-width="2" stroke-dasharray="4,2"/>
                            
                            <circle cx="17" cy="17" r="4" fill="#e74c3c"/><circle cx="33" cy="17" r="4" fill="#e74c3c"/><circle cx="17" cy="33" r="4" fill="#e74c3c"/><circle cx="33" cy="33" r="4" fill="#e74c3c"/>
                            <circle cx="67" cy="17" r="4" fill="#e74c3c"/><circle cx="83" cy="17" r="4" fill="#e74c3c"/><circle cx="67" cy="33" r="4" fill="#e74c3c"/><circle cx="83" cy="33" r="4" fill="#e74c3c"/>
                            <circle cx="117" cy="17" r="4" fill="#e74c3c"/><circle cx="133" cy="17" r="4" fill="#e74c3c"/><circle cx="117" cy="33" r="4" fill="#e74c3c"/><circle cx="133" cy="33" r="4" fill="#e74c3c"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    `
};

const helperHubW2_Mod2 = {
    title: "★ Helper Hub: The Total Trick",
    content: `
        <div style="font-size:15px; line-height: 1.3;">
            <p style="margin-top:0; margin-bottom:12px;">Not sure whether to multiply or divide in a word problem? Look for the <strong>TOTAL!</strong></p>
            
            <div style="display:flex; flex-direction:column; gap:10px; break-inside: avoid;">
                <div style="border:2px solid #ccc; padding:10px; border-radius:10px; background:#fff;">
                    <strong style="font-size:16px; color:#2c7be5;">Need to FIND the total? &rarr; Multiply.</strong><br>
                    If you have smaller pieces and want to know how many you have altogether, you multiply.<br>
                    <div style="background:#f0f7ff; padding:8px; border-radius:6px; margin-top:5px;">
                        <em>"Jon has 4 bags. There are 5 apples in each bag. How many apples does he have in all?"</em><br>
                        <span style="font-family:monospace; font-size:15px; font-weight:bold; color:#333; display:block; margin-top:4px;">4 &times; 5 = <span style="color:#2c7be5;">20 Total Apples</span></span>
                    </div>
                </div>

                <div style="border:2px solid #ccc; padding:10px; border-radius:10px; background:#fff;">
                    <strong style="font-size:16px; color:#e74c3c;">Already HAVE the total? &rarr; Divide.</strong><br>
                    If the story gives you the big total number and asks you to share or split it, you divide.<br>
                    <div style="background:#fdf2f0; padding:8px; border-radius:6px; margin-top:5px;">
                        <em>"Jon has 24 apples. He puts an equal number into 3 bags. How many are in each bag?"</em><br>
                        <span style="font-family:monospace; font-size:15px; font-weight:bold; color:#333; display:block; margin-top:4px;"><span style="color:#e74c3c;">24 Total Apples</span> &divide; 3 bags = 8 in each</span>
                    </div>
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
                            { type: "grid", instruction: "1. &nbsp; Read the story problem and decide whether each statement is true or false.<br><br>Jon baked 2 trays of cookies. Each tray had 4 rows with 3 cookies in each row.", rows: [ { text: "Jon has 8 cookies total.", correct: false }, { text: "Jon has 24 cookies total.", correct: true }, { text: "The equation is 2 &times; 4 &times; 3 = 24", correct: true } ] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 4 &times; [box] = 12", answer: "3" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &divide; 2 = 9", answer: "18" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w1-tue-a", name: "Tue", title: "Week 1: Tuesday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the related word problems below.<br><br>Liam collected 15 rocks and Ava collected 9 rocks. They put all of their rocks together and shared them equally into 3 bins.", problems: [ { text: "1. &nbsp; Part A: What is the total number of rocks Liam and Ava collected?", answer: "24" }, { text: "Part B: How many rocks went into each bin?", answer: "8" } ] }, 
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "2. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 5 = 25", answer: "5" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 25 &divide; [box] = 5", answer: "5" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w1-wed-a", name: "Wed", title: "Week 1: Wednesday", 
                        sections: [ 
                            { type: "mc", instruction: "1. &nbsp; Which equation has the same unknown value as 24 &divide; 4 = [box]?", options: [ { text: "[box] = 4 &times; 24", correct: false }, { text: "4 &times; [box] = 24", correct: true }, { text: "24 &times; 4 = [box]", correct: false } ] }, 
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "2. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; [box] = 42", answer: "6" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 42 &divide; 7 = [box]", answer: "6" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w1-thu-a", name: "Thu", title: "Week 1: Thursday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "1. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; [box] = 32", answer: "4" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; ([box] + 2) = 32", answer: "2" }] }, 
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "2. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 3 = 18", answer: "6" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 18 &divide; [box] = 6", answer: "3" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w1-fri-a", name: "Fri", title: "Week 1: Friday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 4 &times; 6 = 4 &times; (3 + [box])", answer: "3" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 36 &divide; 4 = [box]", answer: "9" }] },
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 5 &times; 9 = [box]", answer: "45" }] } 
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
                            { type: "grid", instruction: "1. &nbsp; Decide whether each option represents exactly 20 apples.", rows: [ { text: "4 bags of 5 apples", correct: true }, { text: "2 bags of 12 apples", correct: false }, { text: "5 bags of 4 apples", correct: true } ] }, 
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "2. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; [box] = 30", answer: "5" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 30 &divide; [box] = 5", answer: "6" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w2-tue-a", name: "Tue", title: "Week 2: Tuesday", 
                        sections: [ 
                            { type: "grid", instruction: "1. &nbsp; Decide whether each option correctly divides 24 apples equally.", rows: [ { text: "3 bags of 8 apples", correct: true }, { text: "4 bags of 5 apples", correct: false }, { text: "4 bags of 6 apples", correct: true } ] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; [box] = 16", answer: "2" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &divide; 8 = 4", answer: "32" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w2-wed-a", name: "Wed", title: "Week 2: Wednesday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 60 &divide; 6 = [box]", answer: "10" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; 8 = [box]", answer: "56" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 6 = 36", answer: "6" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "4. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 42 &divide; [box] = 7", answer: "6" }] } 
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
                            { type: "mc", instruction: "2. &nbsp; Which expression is equal to 6 &times; (2 &times; 3)?", options: [ { text: "(6 &times; 2) &times; 3", correct: true }, { text: "6 + (2 &times; 3)", correct: false }, { text: "(6 &times; 2) + 3", correct: false } ] } 
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
                            { type: "grid", instruction: "1. &nbsp; Read the story problem and decide whether each statement is true or false.<br><br>Emma baked 3 trays of muffins. Each tray had 5 rows with 2 muffins in each row.", rows: [ { text: "Emma has 15 muffins total.", correct: false }, { text: "Emma has 30 muffins total.", correct: true }, { text: "The equation is 3 &times; 5 &times; 2 = 30", correct: true } ] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 5 &times; [box] = 20", answer: "4" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &divide; 3 = 6", answer: "18" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w1-tue-b", name: "Tue", title: "Week 1: Tuesday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the related word problems below.<br><br>Lucas collected 14 leaves and Mia collected 10 leaves. They put all of their leaves together and shared them equally into 4 books.", problems: [ { text: "1. &nbsp; Part A: What is the total number of leaves Lucas and Mia collected?", answer: "24" }, { text: "Part B: How many leaves went into each book?", answer: "6" } ] }, 
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "2. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 4 = 28", answer: "7" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 28 &divide; [box] = 4", answer: "7" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w1-wed-b", name: "Wed", title: "Week 1: Wednesday", 
                        sections: [ 
                            { type: "mc", instruction: "1. &nbsp; Which equation has the same unknown value as 35 &divide; 5 = [box]?", options: [ { text: "[box] = 5 &times; 35", correct: false }, { text: "5 &times; [box] = 35", correct: true }, { text: "35 &times; 5 = [box]", correct: false } ] }, 
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "2. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; [box] = 48", answer: "6" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 48 &divide; 8 = [box]", answer: "6" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w1-thu-b", name: "Thu", title: "Week 1: Thursday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "1. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 9 &times; [box] = 45", answer: "5" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 9 &times; ([box] + 3) = 45", answer: "2" }] }, 
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "2. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 4 = 36", answer: "9" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 36 &divide; [box] = 4", answer: "9" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w1-fri-b", name: "Fri", title: "Week 1: Friday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 5 &times; 7 = 5 &times; (4 + [box])", answer: "3" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 42 &divide; 6 = [box]", answer: "7" }] },
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; 8 = [box]", answer: "48" }] } 
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
                            { type: "grid", instruction: "1. &nbsp; Decide whether each option represents exactly 30 oranges.", rows: [ { text: "5 bags of 6 oranges", correct: true }, { text: "3 bags of 11 oranges", correct: false }, { text: "6 bags of 5 oranges", correct: true } ] }, 
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "2. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 4 &times; [box] = 36", answer: "9" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 36 &divide; [box] = 4", answer: "9" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w2-tue-b", name: "Tue", title: "Week 2: Tuesday", 
                        sections: [ 
                            { type: "grid", instruction: "1. &nbsp; Decide whether each option correctly divides 36 oranges equally.", rows: [ { text: "4 bags of 9 oranges", correct: true }, { text: "5 bags of 7 oranges", correct: false }, { text: "6 bags of 6 oranges", correct: true } ] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; [box] = 28", answer: "4" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &divide; 6 = 7", answer: "42" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w2-wed-b", name: "Wed", title: "Week 2: Wednesday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 48 &divide; 6 = [box]", answer: "8" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 9 &times; 5 = [box]", answer: "45" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 8 = 64", answer: "8" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "4. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 54 &divide; [box] = 6", answer: "9" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w2-thu-b", name: "Thu", title: "Week 2: Thursday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 32 &divide; 4 = [box]", answer: "8" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 63 &divide; 9 = [box]", answer: "7" }] }, 
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "3. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 6 = 48", answer: "8" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 48 &divide; [box] = 6", answer: "8" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w2-fri-b", name: "Fri", title: "Week 2: Friday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; 9 = 6 &times; (6 + [box])", answer: "3" }] }, 
                            { type: "mc", instruction: "2. &nbsp; Which expression is equal to 5 &times; (4 &times; 2)?", options: [ { text: "(5 &times; 4) &times; 2", correct: true }, { text: "5 + (4 &times; 2)", correct: false }, { text: "(5 &times; 4) + 2", correct: false } ] } 
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
                            { type: "grid", instruction: "1. &nbsp; Read the story problem and decide whether each statement is true or false.<br><br>Noah built 4 towers of blocks. Each tower had 3 rows with 4 blocks in each row.", rows: [ { text: "Noah has 11 blocks total.", correct: false }, { text: "Noah has 48 blocks total.", correct: true }, { text: "The equation is 4 &times; 3 &times; 4 = 48", correct: true } ] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; [box] = 30", answer: "5" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &divide; 4 = 7", answer: "28" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w1-tue-c", name: "Tue", title: "Week 1: Tuesday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the related word problems below.<br><br>Zoe picked 18 berries and Ben picked 12 berries. They put all of their berries together and shared them equally into 5 bowls.", problems: [ { text: "1. &nbsp; Part A: What is the total number of berries Zoe and Ben picked?", answer: "30" }, { text: "Part B: How many berries went into each bowl?", answer: "6" } ] }, 
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "2. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 7 = 35", answer: "5" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 35 &divide; [box] = 7", answer: "5" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w1-wed-c", name: "Wed", title: "Week 1: Wednesday", 
                        sections: [ 
                            { type: "mc", instruction: "1. &nbsp; Which equation has the same unknown value as 48 &divide; 6 = [box]?", options: [ { text: "[box] = 6 &times; 48", correct: false }, { text: "6 &times; [box] = 48", correct: true }, { text: "48 &times; 6 = [box]", correct: false } ] }, 
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "2. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 9 &times; [box] = 54", answer: "6" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 54 &divide; 9 = [box]", answer: "6" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w1-thu-c", name: "Thu", title: "Week 1: Thursday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "1. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; [box] = 24", answer: "4" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; ([box] + 1) = 24", answer: "3" }] }, 
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "2. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 5 = 45", answer: "9" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 45 &divide; [box] = 5", answer: "9" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w1-fri-c", name: "Fri", title: "Week 1: Friday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; 8 = 7 &times; (4 + [box])", answer: "4" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 64 &divide; 8 = [box]", answer: "8" }] },
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; 6 = [box]", answer: "48" }] } 
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
                            { type: "grid", instruction: "1. &nbsp; Decide whether each option represents exactly 42 markers.", rows: [ { text: "6 boxes of 7 markers", correct: true }, { text: "5 boxes of 9 markers", correct: false }, { text: "7 boxes of 6 markers", correct: true } ] }, 
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "2. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; [box] = 40", answer: "5" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 40 &divide; [box] = 8", answer: "5" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w2-tue-c", name: "Tue", title: "Week 2: Tuesday", 
                        sections: [ 
                            { type: "grid", instruction: "1. &nbsp; Decide whether each option correctly divides 48 markers equally.", rows: [ { text: "6 boxes of 8 markers", correct: true }, { text: "7 boxes of 7 markers", correct: false }, { text: "8 boxes of 6 markers", correct: true } ] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 9 &times; [box] = 36", answer: "4" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &divide; 7 = 6", answer: "42" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w2-wed-c", name: "Wed", title: "Week 2: Wednesday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 81 &divide; 9 = [box]", answer: "9" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; 7 = [box]", answer: "42" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 9 = 54", answer: "6" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "4. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 40 &divide; [box] = 5", answer: "8" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w2-thu-c", name: "Thu", title: "Week 2: Thursday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 35 &divide; 5 = [box]", answer: "7" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 54 &divide; 6 = [box]", answer: "9" }] }, 
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "3. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 7 = 49", answer: "7" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 49 &divide; [box] = 7", answer: "7" }] } 
                        ] 
                    },
                    { 
                        id: "m2-w2-fri-c", name: "Fri", title: "Week 2: Friday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 9 &times; 7 = 9 &times; (4 + [box])", answer: "3" }] }, 
                            { type: "mc", instruction: "2. &nbsp; Which expression is equal to 4 &times; (5 &times; 3)?", options: [ { text: "(4 &times; 5) &times; 3", correct: true }, { text: "4 + (5 &times; 3)", correct: false }, { text: "(4 &times; 5) + 3", correct: false } ] } 
                        ] 
                    }
                ]
            }
        ]
    }
};