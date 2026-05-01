// --- MODULE 7 DATA ---
const mod7Data = {
    id: "mod-7",
    name: "Four Operations: Interpret, Represent, Solve",
    weeks: [
        {
            weekNum: 1,
            helperHub: {
                title: "★ Helper Hub: The Pattern Detective",
                content: `
                    <div style="font-size:15px; line-height: 1.3;">
                        <p style="margin-top:0; margin-bottom:12px;">When finding missing numbers in a pattern, look at the example and follow these 3 steps!</p>
                        
                        <div style="text-align:center; background:#fff; border:2px solid #ccc; border-radius:10px; padding:15px 10px 5px 10px; margin-bottom:15px; break-inside: avoid;">
                            <svg width="300" height="90" viewBox="0 0 300 90">
                                <line x1="20" y1="40" x2="280" y2="40" stroke="#333" stroke-width="3" />
                                <polygon points="20,40 30,35 30,45" fill="#333" />
                                <polygon points="280,40 270,35 270,45" fill="#333" />
                                
                                <line x1="70" y1="30" x2="70" y2="50" stroke="#333" stroke-width="3" />
                                <text x="70" y="20" font-size="20" font-weight="bold" fill="#333" text-anchor="middle">12</text>
                                
                                <line x1="120" y1="30" x2="120" y2="50" stroke="#333" stroke-width="3" />
                                <text x="120" y="20" font-size="20" font-weight="bold" fill="#333" text-anchor="middle">15</text>
                                
                                <line x1="170" y1="30" x2="170" y2="50" stroke="#333" stroke-width="3" />
                                <rect x="150" y="0" width="40" height="26" fill="#fff9c4" stroke="#e74c3c" stroke-width="2" rx="4" />
                                <text x="170" y="20" font-size="20" font-weight="bold" fill="#e74c3c" text-anchor="middle">?</text>
                                
                                <line x1="220" y1="30" x2="220" y2="50" stroke="#333" stroke-width="3" />
                                <text x="220" y="20" font-size="20" font-weight="bold" fill="#333" text-anchor="middle">21</text>
                                
                                <path d="M 70 55 Q 95 85 120 55" fill="none" stroke="#2c7be5" stroke-width="3" />
                                <text x="95" y="85" font-size="16" font-weight="bold" fill="#2c7be5" text-anchor="middle">+3</text>
                                
                                <path d="M 120 55 Q 145 85 170 55" fill="none" stroke="#e74c3c" stroke-width="3" stroke-dasharray="5,3" />
                                <text x="145" y="85" font-size="16" font-weight="bold" fill="#e74c3c" text-anchor="middle">+3</text>
                                
                                <path d="M 170 55 Q 195 85 220 55" fill="none" stroke="#e74c3c" stroke-width="3" stroke-dasharray="5,3" />
                                <text x="195" y="85" font-size="16" font-weight="bold" fill="#e74c3c" text-anchor="middle">+3</text>
                            </svg>
                        </div>
                        
                        <div style="display:grid; grid-template-columns: 1fr; gap:10px; break-inside: avoid;">
                            <div style="border:2px solid #ccc; padding:10px; border-radius:10px; background:#fff;">
                                <strong style="font-size:16px; color:#2c7be5;">Step 1: Find Neighbors</strong><br>
                                Find two numbers next to each other. <strong style="color:#2c7be5;">(12 and 15)</strong>
                            </div>
                            <div style="border:2px solid #ccc; padding:10px; border-radius:10px; background:#fff;">
                                <strong style="font-size:16px; color:#2c7be5;">Step 2: Find the "Jump"</strong><br>
                                How much does it go up or down? <strong style="color:#2c7be5;">(12 + 3 = 15)</strong>
                            </div>
                            <div style="border:2px solid #ccc; padding:10px; border-radius:10px; background:#fff;">
                                <strong style="font-size:16px; color:#e74c3c;">Step 3: Test & Apply!</strong><br>
                                Use the jump to find the missing number! <strong style="color:#e74c3c;">(15 + 3 = 18)</strong>
                            </div>
                        </div>
                    </div>
                `
            },
            days: [
                {
                    id: "m7-w1-mon", name: "Mon", title: "Week 1: Monday",
                    sections: [
                        { type: "input", instruction: "Solve the problem below.", problems: [ 
                            { patternLine: { values: [12, 15, null, 21, 24, null], answers: [18, 27] }, text: "1. &nbsp; What unknown numbers complete the pattern on the number line? Enter them in the boxes.", answer: "" }
                        ] },
                        { type: "input", instruction: "Solve the problem below.", problems: [ 
                            { text: "2. &nbsp; Mia collected 245 seashells. Her brother collected 187 seashells. How many seashells did they collect in total?", answer: "432" }
                        ] }
                    ]
                },
                {
                    id: "m7-w1-tue", name: "Tue", title: "Week 1: Tuesday",
                    sections: [
                        { type: "input", instruction: "Solve the problem below.", problems: [ 
                            { patternLine: { values: [13, 18, 23, null, 33, null, 43], answers: [28, 38] }, text: "1. &nbsp; What unknown numbers complete the pattern on the number line? Enter them in the boxes.", answer: "" }
                        ] },
                        { type: "input", instruction: "Solve the problem below.", problems: [ 
                            { text: "2. &nbsp; A book has 95 pages. Sam has read 48 pages. How many pages does he have left to read?", answer: "47" }
                        ] }
                    ]
                },
                {
                    id: "m7-w1-wed", name: "Wed", title: "Week 1: Wednesday",
                    sections: [
                        { type: "input", instruction: "Solve the problem below.", problems: [ 
                            { table: [ ["10", "14", "18", "22"], ["14", "ans:18", "22", "26"], ["18", "22", "ans:26", "30"], ["22", "26", "30", "ans:34"] ], text: "1. &nbsp; Part of an addition table is shown. What three numbers correctly complete the pattern in the table?", answer: "" }
                        ] },
                        { type: "input", instruction: "Solve the problem below.", problems: [ 
                            { patternLine: { values: [7, 11, null, 19, null, 27], answers: [15, 23] }, text: "2. &nbsp; What unknown numbers complete the pattern on the number line? Enter them in the boxes.", answer: "" }
                        ] }
                    ]
                },
                {
                    id: "m7-w1-thu", name: "Thu", title: "Week 1: Thursday",
                    sections: [
                        { type: "input", instruction: "Solve the problem below.", problems: [ 
                            { table: [ ["12", "15", "18", "21"], ["16", "ans:20", "24", "28"], ["20", "25", "ans:30", "35"], ["24", "30", "36", "ans:42"] ], text: "1. &nbsp; Part of a multiplication table is shown. What three numbers correctly complete the pattern in the table?", answer: "" }
                        ] },
                        { type: "input", instruction: "Solve the problem below.", problems: [ 
                            { text: "2. &nbsp; A toy store had 412 teddy bears. They sold 158 of them. How many teddy bears are left?", answer: "254" }
                        ] }
                    ]
                },
                {
                    id: "m7-w1-fri", name: "Fri", title: "Week 1: Friday",
                    sections: [
                        { type: "input", instruction: "Solve the problem below.", problems: [ 
                            { patternLine: { values: [null, 24, 30, 36, 42], answers: [18] }, text: "1. &nbsp; What unknown number completes the pattern on the number line? Enter it in the box.", answer: "" }
                        ] },
                        { type: "input", instruction: "Solve the problem below.", problems: [ 
                            { text: "2. &nbsp; A farmer has 4 baskets of eggs. There are 6 eggs in each basket. He packs all the eggs into cartons that hold 8 eggs each. How many cartons does he use?", answer: "3" }
                        ] }
                    ]
                }
            ]
        },
        {
            weekNum: 2,
            helperHub: {
                title: "★ Helper Hub: Word Problem Decoder",
                content: `
                    <div style="font-size:15px; line-height: 1.3;">
                        <p style="margin-top:0; margin-bottom:12px;">Don't just guess the math! Ask yourself: <strong>What ACTION is happening in the story?</strong></p>
                        
                        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; break-inside: avoid;">
                            <div style="border:2px solid #ccc; padding:10px; border-radius:10px; background:#fff;">
                                <strong style="font-size:16px; color:#2c7be5;">➕ Adding (Joining)</strong><br>
                                Are you putting different amounts together?<br>
                                <em style="color:#555;">"Mia found 12 shells and 8 rocks. How many total?"</em>
                            </div>
                            
                            <div style="border:2px solid #ccc; padding:10px; border-radius:10px; background:#fff;">
                                <strong style="font-size:16px; color:#e74c3c;">➖ Subtracting (Difference)</strong><br>
                                Are you taking some away, or finding how many are left?<br>
                                <em style="color:#555;">"Sam had 50 pages, but read 20. How many are left?"</em>
                            </div>
                            
                            <div style="border:2px solid #ccc; padding:10px; border-radius:10px; background:#fff;">
                                <strong style="font-size:16px; color:#27ae60;">&times; Multiplying (Equal Groups)</strong><br>
                                Are you combining groups of the SAME size?<br>
                                <em style="color:#555;">"There are 4 baskets with 6 eggs in EACH basket."</em>
                            </div>
                            
                            <div style="border:2px solid #ccc; padding:10px; border-radius:10px; background:#fff;">
                                <strong style="font-size:16px; color:#8e44ad;">&divide; Dividing (Sharing)</strong><br>
                                Are you splitting a big total into equal groups?<br>
                                <em style="color:#555;">"30 markers shared EQUALLY with 5 friends."</em>
                            </div>
                        </div>
                    </div>
                `
            },
            days: [
                {
                    id: "m7-w2-mon", name: "Mon", title: "Week 2: Monday",
                    sections: [
                        { type: "input", instruction: "Solve the problem below.", problems: [ 
                            { text: "1. &nbsp; Lisa buys 5 packs of stickers. Each pack has 8 stickers. She gives 10 stickers to her friend. How many stickers does Lisa have left?", answer: "30" }
                        ] },
                        { type: "input", instruction: "Solve the problem below.", problems: [ 
                            { patternLine: { values: [20, 35, 50, null, 80, null], answers: [65, 95] }, text: "2. &nbsp; What unknown numbers complete the pattern on the number line? Enter them in the boxes.", answer: "" }
                        ] }
                    ]
                },
                {
                    id: "m7-w2-tue", name: "Tue", title: "Week 2: Tuesday",
                    sections: [
                        { type: "input", instruction: "Solve the problem below.", problems: [ 
                            { table: [ ["35", "ans:40", "45", "50"], ["42", "48", "ans:54", "60"], ["49", "56", "63", "ans:70"], ["56", "64", "72", "80"] ], text: "1. &nbsp; Part of a multiplication table is shown. What three numbers correctly complete the pattern in the table?", answer: "" }
                        ] },
                        { type: "input", instruction: "Solve the problem below.", problems: [ 
                            { text: "2. &nbsp; A classroom has 6 tables. Each table has 4 chairs. If 21 students sit in the chairs, how many chairs are empty?", answer: "3" }
                        ] }
                    ]
                },
                {
                    id: "m7-w2-wed", name: "Wed", title: "Week 2: Wednesday",
                    sections: [
                        { type: "input", instruction: "Solve the problem below.", problems: [ 
                            { text: "1. &nbsp; The students in Mrs. Smith's class lined up in 4 equal rows. The class has more than 10 students but fewer than 25 students. If there was 1 fewer student, they could line up in 3 equal rows. How many students are in the class?", answer: "16" }
                        ] },
                        { type: "input", instruction: "Solve the problem below.", problems: [ 
                            { text: "2. &nbsp; A factory made 384 red cars and 267 blue cars. How many cars did the factory make in total?", answer: "651" }
                        ] }
                    ]
                },
                {
                    id: "m7-w2-thu", name: "Thu", title: "Week 2: Thursday",
                    sections: [
                        { type: "input", instruction: "Solve the problem below.", problems: [ 
                            { text: "1. &nbsp; A chef is baking cookies on trays. He places them in 5 equal rows. He baked more than 20 but fewer than 40 cookies. If he baked 1 more cookie, he could place them in 6 equal rows. How many cookies did he bake?", answer: "35" }
                        ] },
                        { type: "input", instruction: "Solve the problem below.", problems: [ 
                            { patternLine: { values: [null, 22, 30, 38, null], answers: [14, 46] }, text: "2. &nbsp; What unknown numbers complete the pattern on the number line? Enter them in the boxes.", answer: "" }
                        ] }
                    ]
                },
                {
                    id: "m7-w2-fri", name: "Fri", title: "Week 2: Friday",
                    sections: [
                        { type: "input", instruction: "Solve the problem below.", problems: [ 
                            { table: [ ["21", "26", "31", "36"], ["26", "ans:31", "36", "41"], ["31", "36", "ans:41", "46"], ["36", "41", "46", "ans:51"] ], text: "1. &nbsp; Part of an addition table is shown. What three numbers correctly complete the pattern?", answer: "" }
                        ] },
                        { type: "input", instruction: "Solve the problem below.", problems: [ 
                            { text: "2. &nbsp; Tom has 3 boxes of markers. Each box has 10 markers. He shares them equally among 5 friends. How many markers does each friend get?", answer: "6" }
                        ] },
                        { type: "input", instruction: "Solve the problem below.", problems: [ 
                            { patternLine: { values: [18, 30, null, 54, null], answers: [42, 66] }, text: "3. &nbsp; What unknown numbers complete the pattern on the number line?", answer: "" }
                        ] }
                    ]
                }
            ]
        }
    ]
};