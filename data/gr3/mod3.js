// --- SHARED HELPER HUBS ---
const helperHubW1_Mod3 = {
    title: "★ Helper Hub: Fact Family Triangles",
    content: `
        <div style="font-size:15px; line-height: 1.3;">
            <p style="margin-top:0; margin-bottom:12px;">Multiplication and Division are connected! If you know one fact, you know the whole family.</p>
            
            <div style="display:flex; align-items:center; gap:15px; border:2px solid #ccc; padding:10px; border-radius:10px; background:#fff; break-inside: avoid;">
                <div style="flex:1;">
                    <strong style="font-size:16px; color:#2c7be5;">The Fact Family Triangle</strong><br>
                    The big total lives at the top. The two smaller factors live at the bottom.<br><br>
                    You can make 2 multiplication and 2 division equations from these three numbers!
                    <div style="margin-top:10px; background:#f0f7ff; padding:8px; border-radius:8px;">
                        <strong style="color:#27ae60;">4 &times; 6 = 24</strong> &nbsp;&nbsp;|&nbsp;&nbsp; <strong style="color:#27ae60;">6 &times; 4 = 24</strong><br>
                        <strong style="color:#e74c3c;">24 &divide; 4 = 6</strong> &nbsp;&nbsp;|&nbsp;&nbsp; <strong style="color:#e74c3c;">24 &divide; 6 = 4</strong>
                    </div>
                </div>
                
                <div style="text-align:center;">
                    <svg width="150" height="150" viewBox="0 0 150 150">
                        <polygon points="75,20 20,120 130,120" fill="#fcf4fc" stroke="#8e44ad" stroke-width="3"/>
                        
                        <circle cx="75" cy="120" r="14" fill="#fff" />
                        <circle cx="47" cy="70" r="14" fill="#fff" />
                        <circle cx="103" cy="70" r="14" fill="#fff" />

                        <circle cx="75" cy="20" r="18" fill="#fff" stroke="#333" stroke-width="2"/>
                        <text x="75" y="26" font-size="16" font-weight="bold" fill="#e74c3c" text-anchor="middle">24</text>
                        
                        <circle cx="20" cy="120" r="18" fill="#fff" stroke="#333" stroke-width="2"/>
                        <text x="20" y="126" font-size="16" font-weight="bold" fill="#27ae60" text-anchor="middle">4</text>
                        
                        <circle cx="130" cy="120" r="18" fill="#fff" stroke="#333" stroke-width="2"/>
                        <text x="130" y="126" font-size="16" font-weight="bold" fill="#27ae60" text-anchor="middle">6</text>
                        
                        <text x="75" y="127" font-size="22" font-weight="bold" fill="#333" text-anchor="middle">&times;</text>
                        <text x="47" y="77" font-size="22" font-weight="bold" fill="#333" text-anchor="middle">&divide;</text>
                        <text x="103" y="77" font-size="22" font-weight="bold" fill="#333" text-anchor="middle">&divide;</text>
                    </svg>
                </div>
            </div>
        </div>
    `
};

const helperHubW2_Mod3 = {
    title: "★ Helper Hub: Grouping & Breaking Apart",
    content: `
        <div style="font-size:15px; line-height: 1.3;">
            <p style="margin-top:0; margin-bottom:12px;">Use these properties to make tough multiplication problems easier!</p>
            
            <div style="border:2px solid #ccc; padding:10px; border-radius:10px; background:#fff; margin-bottom:10px; break-inside: avoid;">
                <strong style="font-size:16px; color:#2c7be5;">Associative Property (Grouping)</strong><br>
                When multiplying 3 numbers, you can change the grouping but the answer stays the same!
                <div style="text-align:center; margin-top:8px; font-size:16px;">
                    <strong style="color:#e74c3c;">(3 &times; 2)</strong> &times; 4 &nbsp; = &nbsp; 3 &times; <strong style="color:#27ae60;">(2 &times; 4)</strong><br>
                    <strong style="color:#e74c3c;">6</strong> &times; 4 = 24 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong style="color:#27ae60;">8</strong> &times; 3 = 24
                </div>
            </div>

            <div style="border:2px solid #ccc; padding:10px; border-radius:10px; background:#fff; break-inside: avoid;">
                <strong style="font-size:16px; color:#8e44ad;">Distributive Property (Breaking Apart)</strong><br>
                To multiply <strong style="color:#333;">6 &times; 8</strong>, you can break the tough 8 into two easier chunks: a <strong style="color:#8e44ad;">5 and a 3</strong>.<br>
                <div style="display:flex; align-items:center; justify-content:center; gap:20px; margin-top:10px;">
                    <div style="font-size:15px; text-align:right;">
                        6 &times; 8<br>
                        = 6 &times; <strong style="color:#8e44ad;">(5 + 3)</strong><br>
                        = (6 &times; <strong style="color:#8e44ad;">5</strong>) + (6 &times; <strong style="color:#8e44ad;">3</strong>)<br>
                        = 30 + 18<br>
                        = <strong>48</strong>
                    </div>
                    <svg width="200" height="120" viewBox="0 0 200 120">
                        <rect x="30" y="25" width="85" height="85" fill="#fcf4fc" stroke="#8e44ad" stroke-width="2"/>
                        <rect x="115" y="25" width="55" height="85" fill="#f4f9fc" stroke="#2c7be5" stroke-width="2"/>
                        
                        <text x="20" y="72" font-size="16" font-weight="bold" fill="#333" text-anchor="end" dominant-baseline="middle">6</text>
                        <text x="72" y="15" font-size="16" font-weight="bold" fill="#8e44ad" text-anchor="middle">5</text>
                        <text x="142" y="15" font-size="16" font-weight="bold" fill="#2c7be5" text-anchor="middle">3</text>
                        
                        <text x="72" y="65" font-size="14" font-weight="bold" fill="#333" text-anchor="middle">6 &times; 5 = 30</text>
                        <text x="142" y="60" font-size="14" font-weight="bold" fill="#333" text-anchor="middle">6 &times; 3</text>
                        <text x="142" y="75" font-size="14" font-weight="bold" fill="#333" text-anchor="middle">= 18</text>
                    </svg>
                </div>
            </div>
        </div>
    `
};

// --- VERSIONS DATA ---
const mod3Versions = {
    A: {
        id: "mod-3-a",
        name: "Properties of Mult/Div",
        weeks: [
            {
                weekNum: 1,
                helperHub: helperHubW1_Mod3,
                days: [
                    { 
                        id: "m3-w1-mon-a", name: "Mon", title: "Week 1: Monday", 
                        sections: [ 
                            { type: "mc", instruction: "1. &nbsp; Which equation has the same unknown value as 42 &divide; 7 = [box]?", options: [ { text: "[box] = 7 &times; 42", correct: false }, { text: "7 &times; [box] = 42", correct: true }, { text: "42 &times; 7 = [box]", correct: false } ] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 4 = 24", answer: "6" }] },
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 20 &divide; [box] = 4", answer: "5" }] } 
                        ] 
                    },
                    { 
                        id: "m3-w1-tue-a", name: "Tue", title: "Week 1: Tuesday", 
                        sections: [ 
                            { type: "mc", instruction: "1. &nbsp; Which expression is equal to 4 &times; (2 &times; 5)?", options: [ { text: "(4 &times; 2) &times; 5", correct: true }, { text: "4 + (2 &times; 5)", correct: false }, { text: "(4 &times; 2) + 5", correct: false } ] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 7 = 49", answer: "7" }] },
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 14 &divide; [box] = 7", answer: "2" }] } 
                        ] 
                    },
                    { 
                        id: "m3-w1-wed-a", name: "Wed", title: "Week 1: Wednesday", 
                        sections: [ 
                            { type: "grid", instruction: "1. &nbsp; Decide whether each expression is equal to 3 &times; 2 &times; 4 (which is 24).", rows: [ { text: "6 &times; 4", correct: true }, { text: "3 &times; 6", correct: false }, { text: "12 &times; 2", correct: true } ] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 9 &times; [box] = 27", answer: "3" }] },
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 24 &divide; [box] = 8", answer: "3" }] } 
                        ] 
                    },
                    { 
                        id: "m3-w1-thu-a", name: "Thu", title: "Week 1: Thursday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "1. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; [box] = 48", answer: "8" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; ([box] + 3) = 48", answer: "5" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 5 = 40", answer: "8" }] },
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 36 &divide; [box] = 6", answer: "6" }] } 
                        ] 
                    },
                    { 
                        id: "m3-w1-fri-a", name: "Fri", title: "Week 1: Friday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "1. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; [box] = 56", answer: "8" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 56 &divide; 8 = [box]", answer: "7" }] }, 
                            { type: "mc", instruction: "2. &nbsp; Which equation has the same unknown value as 32 &divide; 8 = [box]?", options: [ { text: "8 &times; [box] = 32", correct: true }, { text: "[box] &times; 32 = 8", correct: false }, { text: "8 &divide; 32 = [box]", correct: false } ] } 
                        ] 
                    }
                ]
            },
            {
                weekNum: 2,
                helperHub: helperHubW2_Mod3,
                days: [
                    { 
                        id: "m3-w2-mon-a", name: "Mon", title: "Week 2: Monday", 
                        sections: [ 
                            { type: "grid", instruction: "1. &nbsp; Decide whether each option correctly divides 30 students equally.", rows: [ { text: "3 groups of 10", correct: true }, { text: "4 groups of 7", correct: false }, { text: "5 groups of 6", correct: true } ] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 5 &times; [box] = 45", answer: "9" }] },
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 15 &divide; [box] = 5", answer: "3" }] } 
                        ] 
                    },
                    { 
                        id: "m3-w2-tue-a", name: "Tue", title: "Week 2: Tuesday", 
                        sections: [ 
                            { type: "grid", instruction: "1. &nbsp; Decide whether each expression is equal to 2 &times; 5 &times; 3.", rows: [ { text: "10 &times; 3", correct: true }, { text: "2 &times; 15", correct: true }, { text: "6 &times; 5", correct: true } ] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 6 = 36", answer: "6" }] },
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 49 &divide; [box] = 7", answer: "7" }] } 
                        ] 
                    },
                    { 
                        id: "m3-w2-wed-a", name: "Wed", title: "Week 2: Wednesday", 
                        sections: [ 
                            { type: "mc", instruction: "1. &nbsp; Which equation has the same unknown value as 63 &divide; 9 = [box]?", options: [ { text: "9 &times; [box] = 63", correct: true }, { text: "[box] &times; 63 = 9", correct: false }, { text: "9 &divide; 63 = [box]", correct: false } ] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 3 &times; [box] = 24", answer: "8" }] },
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 24 &divide; [box] = 6", answer: "4" }] } 
                        ] 
                    },
                    { 
                        id: "m3-w2-thu-a", name: "Thu", title: "Week 2: Thursday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; 6 = 7 &times; (4 + [box])", answer: "2" }] },
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; 5 = 8 &times; (3 + [box])", answer: "2" }] },
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "3. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 9 &times; [box] = 81", answer: "9" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 81 &divide; [box] = 9", answer: "9" }] } 
                        ] 
                    },
                    { 
                        id: "m3-w2-fri-a", name: "Fri", title: "Week 2: Friday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 5 &times; 7 = 5 &times; (5 + [box])", answer: "2" }] }, 
                            { type: "mc", instruction: "2. &nbsp; Which expression is equal to 3 &times; (4 &times; 2)?", options: [ { text: "(3 &times; 4) &times; 2", correct: true }, { text: "3 + (4 &times; 2)", correct: false }, { text: "(3 &times; 4) + 2", correct: false } ] } 
                        ] 
                    }
                ]
            }
        ]
    },
    B: {
        id: "mod-3-b",
        name: "Properties of Mult/Div",
        weeks: [
            {
                weekNum: 1,
                helperHub: helperHubW1_Mod3,
                days: [
                    { 
                        id: "m3-w1-mon-b", name: "Mon", title: "Week 1: Monday", 
                        sections: [ 
                            { type: "mc", instruction: "1. &nbsp; Which equation has the same unknown value as 54 &divide; 6 = [box]?", options: [ { text: "[box] = 6 &times; 54", correct: false }, { text: "6 &times; [box] = 54", correct: true }, { text: "54 &times; 6 = [box]", correct: false } ] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 3 = 21", answer: "7" }] },
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 30 &divide; [box] = 6", answer: "5" }] } 
                        ] 
                    },
                    { 
                        id: "m3-w1-tue-b", name: "Tue", title: "Week 1: Tuesday", 
                        sections: [ 
                            { type: "mc", instruction: "1. &nbsp; Which expression is equal to 3 &times; (4 &times; 2)?", options: [ { text: "(3 &times; 4) &times; 2", correct: true }, { text: "3 + (4 &times; 2)", correct: false }, { text: "(3 &times; 4) + 2", correct: false } ] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 8 = 64", answer: "8" }] },
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 18 &divide; [box] = 6", answer: "3" }] } 
                        ] 
                    },
                    { 
                        id: "m3-w1-wed-b", name: "Wed", title: "Week 1: Wednesday", 
                        sections: [ 
                            { type: "grid", instruction: "1. &nbsp; Decide whether each expression is equal to 2 &times; 3 &times; 5 (which is 30).", rows: [ { text: "6 &times; 5", correct: true }, { text: "2 &times; 8", correct: false }, { text: "10 &times; 3", correct: true } ] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; [box] = 32", answer: "4" }] },
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 36 &divide; [box] = 9", answer: "4" }] } 
                        ] 
                    },
                    { 
                        id: "m3-w1-thu-b", name: "Thu", title: "Week 1: Thursday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "1. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; [box] = 42", answer: "6" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; ([box] + 4) = 42", answer: "2" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 6 = 36", answer: "6" }] },
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 40 &divide; [box] = 8", answer: "5" }] } 
                        ] 
                    },
                    { 
                        id: "m3-w1-fri-b", name: "Fri", title: "Week 1: Friday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "1. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; [box] = 54", answer: "9" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 54 &divide; 9 = [box]", answer: "6" }] }, 
                            { type: "mc", instruction: "2. &nbsp; Which equation has the same unknown value as 48 &divide; 6 = [box]?", options: [ { text: "6 &times; [box] = 48", correct: true }, { text: "[box] &times; 48 = 6", correct: false }, { text: "6 &divide; 48 = [box]", correct: false } ] } 
                        ] 
                    }
                ]
            },
            {
                weekNum: 2,
                helperHub: helperHubW2_Mod3,
                days: [
                    { 
                        id: "m3-w2-mon-b", name: "Mon", title: "Week 2: Monday", 
                        sections: [ 
                            { type: "grid", instruction: "1. &nbsp; Decide whether each option correctly divides 24 apples equally.", rows: [ { text: "4 groups of 6", correct: true }, { text: "5 groups of 5", correct: false }, { text: "3 groups of 8", correct: true } ] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; [box] = 48", answer: "8" }] },
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 18 &divide; [box] = 3", answer: "6" }] } 
                        ] 
                    },
                    { 
                        id: "m3-w2-tue-b", name: "Tue", title: "Week 2: Tuesday", 
                        sections: [ 
                            { type: "grid", instruction: "1. &nbsp; Decide whether each expression is equal to 3 &times; 4 &times; 2.", rows: [ { text: "12 &times; 2", correct: true }, { text: "3 &times; 8", correct: true }, { text: "4 &times; 5", correct: false } ] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 8 = 64", answer: "8" }] },
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 56 &divide; [box] = 8", answer: "7" }] } 
                        ] 
                    },
                    { 
                        id: "m3-w2-wed-b", name: "Wed", title: "Week 2: Wednesday", 
                        sections: [ 
                            { type: "mc", instruction: "1. &nbsp; Which equation has the same unknown value as 54 &divide; 6 = [box]?", options: [ { text: "6 &times; [box] = 54", correct: true }, { text: "[box] &times; 54 = 6", correct: false }, { text: "6 &divide; 54 = [box]", correct: false } ] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 4 &times; [box] = 36", answer: "9" }] },
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 28 &divide; [box] = 7", answer: "4" }] } 
                        ] 
                    },
                    { 
                        id: "m3-w2-thu-b", name: "Thu", title: "Week 2: Thursday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; 8 = 6 &times; (5 + [box])", answer: "3" }] },
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 9 &times; 6 = 9 &times; (4 + [box])", answer: "2" }] },
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "3. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; [box] = 49", answer: "7" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 49 &divide; [box] = 7", answer: "7" }] } 
                        ] 
                    },
                    { 
                        id: "m3-w2-fri-b", name: "Fri", title: "Week 2: Friday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 4 &times; 8 = 4 &times; (4 + [box])", answer: "4" }] }, 
                            { type: "mc", instruction: "2. &nbsp; Which expression is equal to 5 &times; (3 &times; 2)?", options: [ { text: "(5 &times; 3) &times; 2", correct: true }, { text: "5 + (3 &times; 2)", correct: false }, { text: "(5 &times; 3) + 2", correct: false } ] } 
                        ] 
                    }
                ]
            }
        ]
    },
    C: {
        id: "mod-3-c",
        name: "Properties of Mult/Div",
        weeks: [
            {
                weekNum: 1,
                helperHub: helperHubW1_Mod3,
                days: [
                    { 
                        id: "m3-w1-mon-c", name: "Mon", title: "Week 1: Monday", 
                        sections: [ 
                            { type: "mc", instruction: "1. &nbsp; Which equation has the same unknown value as 48 &divide; 8 = [box]?", options: [ { text: "[box] = 8 &times; 48", correct: false }, { text: "8 &times; [box] = 48", correct: true }, { text: "48 &times; 8 = [box]", correct: false } ] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 5 = 35", answer: "7" }] },
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 27 &divide; [box] = 9", answer: "3" }] } 
                        ] 
                    },
                    { 
                        id: "m3-w1-tue-c", name: "Tue", title: "Week 1: Tuesday", 
                        sections: [ 
                            { type: "mc", instruction: "1. &nbsp; Which expression is equal to 5 &times; (3 &times; 4)?", options: [ { text: "(5 &times; 3) &times; 4", correct: true }, { text: "5 + (3 &times; 4)", correct: false }, { text: "(5 &times; 3) + 4", correct: false } ] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 6 = 42", answer: "7" }] },
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 16 &divide; [box] = 8", answer: "2" }] } 
                        ] 
                    },
                    { 
                        id: "m3-w1-wed-c", name: "Wed", title: "Week 1: Wednesday", 
                        sections: [ 
                            { type: "grid", instruction: "1. &nbsp; Decide whether each expression is equal to 4 &times; 2 &times; 5 (which is 40).", rows: [ { text: "8 &times; 5", correct: true }, { text: "4 &times; 10", correct: true }, { text: "6 &times; 7", correct: false } ] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; [box] = 28", answer: "4" }] },
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 45 &divide; [box] = 5", answer: "9" }] } 
                        ] 
                    },
                    { 
                        id: "m3-w1-thu-c", name: "Thu", title: "Week 1: Thursday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "1. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; [box] = 56", answer: "7" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; ([box] + 3) = 56", answer: "4" }] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 9 = 45", answer: "5" }] },
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 54 &divide; [box] = 6", answer: "9" }] } 
                        ] 
                    },
                    { 
                        id: "m3-w1-fri-c", name: "Fri", title: "Week 1: Friday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "1. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 9 &times; [box] = 72", answer: "8" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 72 &divide; 8 = [box]", answer: "9" }] }, 
                            { type: "mc", instruction: "2. &nbsp; Which equation has the same unknown value as 36 &divide; 4 = [box]?", options: [ { text: "4 &times; [box] = 36", correct: true }, { text: "[box] &times; 36 = 4", correct: false }, { text: "4 &divide; 36 = [box]", correct: false } ] } 
                        ] 
                    }
                ]
            },
            {
                weekNum: 2,
                helperHub: helperHubW2_Mod3,
                days: [
                    { 
                        id: "m3-w2-mon-c", name: "Mon", title: "Week 2: Monday", 
                        sections: [ 
                            { type: "grid", instruction: "1. &nbsp; Decide whether each option correctly divides 36 books equally.", rows: [ { text: "6 groups of 6", correct: true }, { text: "4 groups of 9", correct: true }, { text: "5 groups of 8", correct: false } ] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; [box] = 49", answer: "7" }] },
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 21 &divide; [box] = 3", answer: "7" }] } 
                        ] 
                    },
                    { 
                        id: "m3-w2-tue-c", name: "Tue", title: "Week 2: Tuesday", 
                        sections: [ 
                            { type: "grid", instruction: "1. &nbsp; Decide whether each expression is equal to 5 &times; 2 &times; 4.", rows: [ { text: "10 &times; 4", correct: true }, { text: "5 &times; 8", correct: true }, { text: "6 &times; 6", correct: false } ] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; [box] &times; 9 = 81", answer: "9" }] },
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 63 &divide; [box] = 9", answer: "7" }] } 
                        ] 
                    },
                    { 
                        id: "m3-w2-wed-c", name: "Wed", title: "Week 2: Wednesday", 
                        sections: [ 
                            { type: "mc", instruction: "1. &nbsp; Which equation has the same unknown value as 72 &divide; 8 = [box]?", options: [ { text: "8 &times; [box] = 72", correct: true }, { text: "[box] &times; 72 = 8", correct: false }, { text: "8 &divide; 72 = [box]", correct: false } ] }, 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 5 &times; [box] = 35", answer: "7" }] },
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 32 &divide; [box] = 8", answer: "4" }] } 
                        ] 
                    },
                    { 
                        id: "m3-w2-thu-c", name: "Thu", title: "Week 2: Thursday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; 7 = 8 &times; (5 + [box])", answer: "2" }] },
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; 9 = 6 &times; (5 + [box])", answer: "4" }] },
                            { type: "input", instruction: "Solve the related problems below.", problems: [{ text: "3. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; [box] = 64", answer: "8" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 64 &divide; [box] = 8", answer: "8" }] } 
                        ] 
                    },
                    { 
                        id: "m3-w2-fri-c", name: "Fri", title: "Week 2: Friday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; 9 = 7 &times; (5 + [box])", answer: "4" }] }, 
                            { type: "mc", instruction: "2. &nbsp; Which expression is equal to 6 &times; (2 &times; 4)?", options: [ { text: "(6 &times; 2) &times; 4", correct: true }, { text: "6 + (2 &times; 4)", correct: false }, { text: "(6 &times; 2) + 4", correct: false } ] } 
                        ] 
                    }
                ]
            }
        ]
    }
};