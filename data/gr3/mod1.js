// --- SHARED HELPER HUBS ---
const helperHubW1 = {
    title: "★ Helper Hub: Use Your Anchor Facts",
    content: `
        <div style="font-size:15px; line-height: 1.3;">
            <p style="margin-top:0; margin-bottom:12px;">Stuck on a hard multiplication fact? Don't just guess! Use an <strong>Anchor Fact</strong> (like your 2s, 5s, or 10s) to get close, then add the rest.</p>
            
            <div style="display:flex; flex-direction:column; gap:10px; border:2px solid #ccc; padding:15px; border-radius:10px; background:#fff; break-inside: avoid;">
                <strong style="font-size:16px;">Example: What is <span style="color:#e74c3c;">6 &times; 7</span>?</strong>
                
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-top:5px;">
                    <div style="background:#f0f7ff; padding:10px; border-radius:8px;">
                        <strong style="color:#2c7be5;">Step 1: Use a 5s Fact</strong><br>
                        You might not know 6 &times; 7, but 5s are easy! <br>
                        <strong>5 &times; 7 = 35</strong>
                    </div>
                    <div style="background:#fdf2f0; padding:10px; border-radius:8px;">
                        <strong style="color:#e74c3c;">Step 2: Add One More Jump</strong><br>
                        You need 6 groups, so just add one more 7 to your anchor fact! <br>
                        <strong>35 + 7 = 42</strong>
                    </div>
                </div>
                
                <div style="text-align:center; margin-top:10px;">
                    <svg width="300" height="90" viewBox="0 0 300 90">
                        <line x1="20" y1="60" x2="280" y2="60" stroke="#333" stroke-width="3" />
                        <line x1="30" y1="50" x2="30" y2="70" stroke="#333" stroke-width="2" />
                        <text x="30" y="85" font-size="14" font-weight="bold" fill="#333" text-anchor="middle">0</text>
                        
                        <line x1="180" y1="50" x2="180" y2="70" stroke="#333" stroke-width="2" />
                        <text x="180" y="85" font-size="14" font-weight="bold" fill="#2c7be5" text-anchor="middle">35</text>
                        
                        <line x1="250" y1="50" x2="250" y2="70" stroke="#333" stroke-width="2" />
                        <text x="250" y="85" font-size="14" font-weight="bold" fill="#e74c3c" text-anchor="middle">42</text>
                        
                        <path d="M 30 55 Q 105 -10 180 55" fill="none" stroke="#2c7be5" stroke-width="3" stroke-dasharray="5,3" />
                        <text x="105" y="15" font-size="14" font-weight="bold" fill="#2c7be5" text-anchor="middle">5 jumps of 7 (5&times;7)</text>
                        
                        <path d="M 180 55 Q 215 25 250 55" fill="none" stroke="#e74c3c" stroke-width="3" />
                        <text x="215" y="38" font-size="14" font-weight="bold" fill="#e74c3c" text-anchor="middle">+7</text>
                    </svg>
                </div>
            </div>
        </div>
    `
};

const helperHubW2 = {
    title: "★ Helper Hub: The Balance Scale",
    content: `
        <div style="font-size:15px; line-height: 1.3;">
            <p style="margin-top:0; margin-bottom:12px;">The <strong style="font-size:18px;">=</strong> sign does NOT mean <em>"the answer comes next."</em> It means <strong>"is the exact same amount as."</strong></p>
            
            <div style="display:flex; align-items:center; gap:15px; border:2px solid #ccc; padding:15px; border-radius:10px; background:#fff; break-inside: avoid;">
                <div style="flex:1;">
                    <strong style="font-size:16px;">Both sides must balance!</strong><br><br>
                    If you see an equation like <strong>3 &times; 4 = 2 &times; 6</strong>, you have to do the math on BOTH sides to see if they weigh the same.<br><br>
                    The left side is <strong style="color:#2c7be5;">12</strong>. <br>
                    The right side is <strong style="color:#27ae60;">12</strong>.<br>
                    12 = 12, so the equation is <strong style="color:#8e44ad;">TRUE</strong>!
                </div>
                
                <div style="text-align:center;">
                    <svg width="200" height="120" viewBox="0 0 200 120">
                        <polygon points="100,80 80,110 120,110" fill="#8e44ad" />
                        <rect x="10" y="70" width="180" height="10" fill="#333" rx="5" />
                        
                        <rect x="25" y="20" width="60" height="50" fill="#f0f7ff" stroke="#2c7be5" stroke-width="2" rx="4" />
                        <text x="55" y="40" font-size="16" font-weight="bold" fill="#333" text-anchor="middle">3 &times; 4</text>
                        <text x="55" y="60" font-size="14" font-weight="bold" fill="#2c7be5" text-anchor="middle">(12)</text>
                        
                        <rect x="115" y="20" width="60" height="50" fill="#e8f5e9" stroke="#27ae60" stroke-width="2" rx="4" />
                        <text x="145" y="40" font-size="16" font-weight="bold" fill="#333" text-anchor="middle">2 &times; 6</text>
                        <text x="145" y="60" font-size="14" font-weight="bold" fill="#27ae60" text-anchor="middle">(12)</text>
                        
                        <text x="100" y="55" font-size="28" font-weight="bold" fill="#333" text-anchor="middle">=</text>
                    </svg>
                </div>
            </div>
        </div>
    `
};

// --- VERSIONS DATA ---
const mod1Versions = {
    A: {
        id: "mod-1-a",
        name: "Multiply & Divide Within 100",
        weeks: [
            {
                weekNum: 1,
                helperHub: helperHubW1,
                days: [
                    { 
                        id: "m1-w1-mon-a", name: "Mon", title: "Week 1: Monday", 
                        sections: [ 
                            { type: "grid", instruction: "1. &nbsp; Decide whether each equation is true or false.", rows: [{ text: "9 &times; 4 = 6 &times; 6", correct: true }, { text: "3 &times; 8 = 4 &times; 5", correct: false }, { text: "7 &times; 5 = 5 &times; 7", correct: true }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 3 &times; 9 = [box]", answer: "27" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &divide; 4 = 3", answer: "12" }] } 
                        ] 
                    },
                    { 
                        id: "m1-w1-tue-a", name: "Tue", title: "Week 1: Tuesday", 
                        sections: [ 
                            { type: "grid", instruction: "1. &nbsp; Decide whether each equation is true or false.", rows: [{ text: "2 &times; 5 = 20 &divide; 2", correct: true }, { text: "3 &times; 3 = 18 &divide; 2", correct: true }, { text: "4 &times; 4 = 12 &divide; 4", correct: false }] }, 
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "2. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 6 = 30", answer: "5" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 30 &divide; 5 = [box]", answer: "6" }] } 
                        ] 
                    },
                    { 
                        id: "m1-w1-wed-a", name: "Wed", title: "Week 1: Wednesday", 
                        sections: [ 
                            { type: "double", instruction: "1. &nbsp; Enter the unknown numbers.", prompt: "42 &divide; 6 = [box]<br><br>64 &divide; 8 = [box]", answers: ["7", "8"] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 9 &times; 4 = [box]", answer: "36" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 45 &divide; [box] = 9", answer: "5" }] } 
                        ] 
                    },
                    { 
                        id: "m1-w1-thu-a", name: "Thu", title: "Week 1: Thursday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; 6 = [box]", answer: "48" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 36 &divide; [box] = 9", answer: "4" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 7 = 63", answer: "9" }] } 
                        ] 
                    },
                    { 
                        id: "m1-w1-fri-a", name: "Fri", title: "Week 1: Friday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 49 &divide; 7 = [box]", answer: "7" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 45 &divide; [box] = 5", answer: "9" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 48 = [box] &times; 6", answer: "8" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "4. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 81 = 9 &times; [box]", answer: "9" }] } 
                        ] 
                    }
                ]
            },
            {
                weekNum: 2,
                helperHub: helperHubW2,
                days: [
                    { 
                        id: "m1-w2-mon-a", name: "Mon", title: "Week 2: Monday", 
                        sections: [ 
                            { type: "grid", instruction: "1. &nbsp; Decide whether each equation is true or false.", rows: [{ text: "3 &times; 4 = 2 &times; 6", correct: true }, { text: "5 &times; 8 = 4 &times; 10", correct: true }, { text: "6 &times; 2 = 3 &times; 5", correct: false }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; 8 = [box]", answer: "56" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 40 &divide; [box] = 8", answer: "5" }] } 
                        ] 
                    },
                    { 
                        id: "m1-w2-tue-a", name: "Tue", title: "Week 2: Tuesday", 
                        sections: [ 
                            { type: "grid", instruction: "1. &nbsp; Decide whether each equation is true or false.", rows: [{ text: "3 &times; 4 = 24 &divide; 2", correct: true }, { text: "5 &times; 5 = 25 &divide; 5", correct: false }, { text: "2 &times; 9 = 36 &divide; 2", correct: true }] }, 
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "2. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 3 = 21", answer: "7" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 21 &divide; 7 = [box]", answer: "3" }] } 
                        ] 
                    },
                    { 
                        id: "m1-w2-wed-a", name: "Wed", title: "Week 2: Wednesday", 
                        sections: [ 
                            { type: "double", instruction: "1. &nbsp; Enter the unknown numbers to complete the related equations.", prompt: "4 &times; 7 = [box]<br><br>28 &divide; 4 = [box]", answers: ["28", "7"] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; 9 = [box]", answer: "54" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &divide; 6 = 4", answer: "24" }] } 
                        ] 
                    },
                    { 
                        id: "m1-w2-thu-a", name: "Thu", title: "Week 2: Thursday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 54 = [box] &times; 6", answer: "9" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 72 &divide; [box] = 8", answer: "9" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 63 &divide; 7 = [box]", answer: "9" }] } 
                        ] 
                    },
                    { 
                        id: "m1-w2-fri-a", name: "Fri", title: "Week 2: Friday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 9 &times; 9 = [box]", answer: "81" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 6 = 36", answer: "6" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 56 &divide; [box] = 7", answer: "8" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "4. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 42 &divide; 6 = [box]", answer: "7" }] } 
                        ] 
                    }
                ]
            }
        ]
    },
    B: {
        id: "mod-1-b",
        name: "Multiply & Divide Within 100",
        weeks: [
            {
                weekNum: 1,
                helperHub: helperHubW1,
                days: [
                    { 
                        id: "m1-w1-mon-b", name: "Mon", title: "Week 1: Monday", 
                        sections: [ 
                            { type: "grid", instruction: "1. &nbsp; Decide whether each equation is true or false.", rows: [{ text: "8 &times; 3 = 6 &times; 4", correct: true }, { text: "2 &times; 9 = 3 &times; 5", correct: false }, { text: "8 &times; 6 = 6 &times; 8", correct: true }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 4 &times; 7 = [box]", answer: "28" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &divide; 5 = 3", answer: "15" }] } 
                        ] 
                    },
                    { 
                        id: "m1-w1-tue-b", name: "Tue", title: "Week 1: Tuesday", 
                        sections: [ 
                            { type: "grid", instruction: "1. &nbsp; Decide whether each equation is true or false.", rows: [{ text: "3 &times; 4 = 24 &divide; 2", correct: true }, { text: "4 &times; 2 = 16 &divide; 2", correct: true }, { text: "5 &times; 3 = 15 &divide; 5", correct: false }] }, 
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "2. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 4 = 28", answer: "7" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 28 &divide; 4 = [box]", answer: "7" }] } 
                        ] 
                    },
                    { 
                        id: "m1-w1-wed-b", name: "Wed", title: "Week 1: Wednesday", 
                        sections: [ 
                            { type: "double", instruction: "1. &nbsp; Enter the unknown numbers.", prompt: "36 &divide; 6 = [box]<br><br>49 &divide; 7 = [box]", answers: ["6", "7"] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; 4 = [box]", answer: "32" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 54 &divide; [box] = 9", answer: "6" }] } 
                        ] 
                    },
                    { 
                        id: "m1-w1-thu-b", name: "Thu", title: "Week 1: Thursday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; 9 = [box]", answer: "63" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 27 &divide; [box] = 9", answer: "3" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 8 = 64", answer: "8" }] } 
                        ] 
                    },
                    { 
                        id: "m1-w1-fri-b", name: "Fri", title: "Week 1: Friday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 64 &divide; 8 = [box]", answer: "8" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 36 &divide; [box] = 6", answer: "6" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 54 = [box] &times; 6", answer: "9" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "4. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 72 = 8 &times; [box]", answer: "9" }] } 
                        ] 
                    }
                ]
            },
            {
                weekNum: 2,
                helperHub: helperHubW2,
                days: [
                    { 
                        id: "m1-w2-mon-b", name: "Mon", title: "Week 2: Monday", 
                        sections: [ 
                            { type: "grid", instruction: "1. &nbsp; Decide whether each equation is true or false.", rows: [{ text: "4 &times; 6 = 3 &times; 8", correct: true }, { text: "2 &times; 10 = 4 &times; 5", correct: true }, { text: "7 &times; 2 = 4 &times; 4", correct: false }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 9 &times; 6 = [box]", answer: "54" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 35 &divide; [box] = 5", answer: "7" }] } 
                        ] 
                    },
                    { 
                        id: "m1-w2-tue-b", name: "Tue", title: "Week 2: Tuesday", 
                        sections: [ 
                            { type: "grid", instruction: "1. &nbsp; Decide whether each equation is true or false.", rows: [{ text: "4 &times; 5 = 40 &divide; 2", correct: true }, { text: "6 &times; 6 = 36 &divide; 6", correct: false }, { text: "3 &times; 6 = 36 &divide; 2", correct: true }] }, 
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "2. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 4 = 24", answer: "6" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 24 &divide; 4 = [box]", answer: "6" }] } 
                        ] 
                    },
                    { 
                        id: "m1-w2-wed-b", name: "Wed", title: "Week 2: Wednesday", 
                        sections: [ 
                            { type: "double", instruction: "1. &nbsp; Enter the unknown numbers to complete the related equations.", prompt: "5 &times; 8 = [box]<br><br>40 &divide; 5 = [box]", answers: ["40", "8"] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; 7 = [box]", answer: "49" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &divide; 8 = 4", answer: "32" }] } 
                        ] 
                    },
                    { 
                        id: "m1-w2-thu-b", name: "Thu", title: "Week 2: Thursday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 48 = [box] &times; 8", answer: "6" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 56 &divide; [box] = 8", answer: "7" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 42 &divide; 6 = [box]", answer: "7" }] } 
                        ] 
                    },
                    { 
                        id: "m1-w2-fri-b", name: "Fri", title: "Week 2: Friday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; 8 = [box]", answer: "64" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 6 = 42", answer: "7" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 63 &divide; [box] = 7", answer: "9" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "4. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 54 &divide; 6 = [box]", answer: "9" }] } 
                        ] 
                    }
                ]
            }
        ]
    },
    C: {
        id: "mod-1-c",
        name: "Multiply & Divide Within 100",
        weeks: [
            {
                weekNum: 1,
                helperHub: helperHubW1,
                days: [
                    { 
                        id: "m1-w1-mon-c", name: "Mon", title: "Week 1: Monday", 
                        sections: [ 
                            { type: "grid", instruction: "1. &nbsp; Decide whether each equation is true or false.", rows: [{ text: "4 &times; 5 = 2 &times; 10", correct: true }, { text: "7 &times; 3 = 4 &times; 6", correct: false }, { text: "9 &times; 2 = 2 &times; 9", correct: true }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; 8 = [box]", answer: "48" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &divide; 6 = 3", answer: "18" }] } 
                        ] 
                    },
                    { 
                        id: "m1-w1-tue-c", name: "Tue", title: "Week 1: Tuesday", 
                        sections: [ 
                            { type: "grid", instruction: "1. &nbsp; Decide whether each equation is true or false.", rows: [{ text: "5 &times; 4 = 40 &divide; 2", correct: true }, { text: "2 &times; 6 = 24 &divide; 2", correct: true }, { text: "6 &times; 3 = 18 &divide; 3", correct: false }] }, 
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "2. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 5 = 40", answer: "8" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 40 &divide; 5 = [box]", answer: "8" }] } 
                        ] 
                    },
                    { 
                        id: "m1-w1-wed-c", name: "Wed", title: "Week 1: Wednesday", 
                        sections: [ 
                            { type: "double", instruction: "1. &nbsp; Enter the unknown numbers.", prompt: "56 &divide; 8 = [box]<br><br>81 &divide; 9 = [box]", answers: ["7", "9"] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; 6 = [box]", answer: "42" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 32 &divide; [box] = 8", answer: "4" }] } 
                        ] 
                    },
                    { 
                        id: "m1-w1-thu-c", name: "Thu", title: "Week 1: Thursday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; 6 = [box]", answer: "36" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 40 &divide; [box] = 5", answer: "8" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 7 = 49", answer: "7" }] } 
                        ] 
                    },
                    { 
                        id: "m1-w1-fri-c", name: "Fri", title: "Week 1: Friday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 42 &divide; 7 = [box]", answer: "6" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 48 &divide; [box] = 8", answer: "6" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 63 = [box] &times; 9", answer: "7" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "4. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 56 = 8 &times; [box]", answer: "7" }] } 
                        ] 
                    }
                ]
            },
            {
                weekNum: 2,
                helperHub: helperHubW2,
                days: [
                    { 
                        id: "m1-w2-mon-c", name: "Mon", title: "Week 2: Monday", 
                        sections: [ 
                            { type: "grid", instruction: "1. &nbsp; Decide whether each equation is true or false.", rows: [{ text: "2 &times; 9 = 3 &times; 6", correct: true }, { text: "5 &times; 6 = 3 &times; 10", correct: true }, { text: "8 &times; 2 = 3 &times; 7", correct: false }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; 8 = [box]", answer: "64" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 48 &divide; [box] = 8", answer: "6" }] } 
                        ] 
                    },
                    { 
                        id: "m1-w2-tue-c", name: "Tue", title: "Week 2: Tuesday", 
                        sections: [ 
                            { type: "grid", instruction: "1. &nbsp; Decide whether each equation is true or false.", rows: [{ text: "2 &times; 8 = 32 &divide; 2", correct: true }, { text: "7 &times; 7 = 49 &divide; 7", correct: false }, { text: "4 &times; 4 = 32 &divide; 2", correct: true }] }, 
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "2. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 3 = 27", answer: "9" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 27 &divide; 3 = [box]", answer: "9" }] } 
                        ] 
                    },
                    { 
                        id: "m1-w2-wed-c", name: "Wed", title: "Week 2: Wednesday", 
                        sections: [ 
                            { type: "double", instruction: "1. &nbsp; Enter the unknown numbers to complete the related equations.", prompt: "6 &times; 8 = [box]<br><br>48 &divide; 6 = [box]", answers: ["48", "8"] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; 9 = [box]", answer: "72" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &divide; 9 = 4", answer: "36" }] } 
                        ] 
                    },
                    { 
                        id: "m1-w2-thu-c", name: "Thu", title: "Week 2: Thursday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 64 = [box] &times; 8", answer: "8" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 81 &divide; [box] = 9", answer: "9" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 49 &divide; 7 = [box]", answer: "7" }] } 
                        ] 
                    },
                    { 
                        id: "m1-w2-fri-c", name: "Fri", title: "Week 2: Friday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; 7 = [box]", answer: "49" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 6 = 48", answer: "8" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 72 &divide; [box] = 9", answer: "8" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "4. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 48 &divide; 6 = [box]", answer: "8" }] } 
                        ] 
                    }
                ]
            }
        ]
    }
};