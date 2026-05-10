// --- WEEK 1 HELPER HUB ---
const helperHubW1_Mod1 = {
    title: "★ Helper Hub: Finding Common Denominators",
    content: `
        <div style="font-size:16px; line-height: 1.5;">
            <p style="margin-top:0; margin-bottom:15px;">You can't add or subtract pieces that are different sizes! Here is how you find a <strong>Common Denominator</strong>.</p>
            
            <div style="display:flex; gap:15px; justify-content: center; flex-wrap: wrap; text-align:center;">
                
                <div style="border:2px solid #ccc; padding:15px; border-radius:10px; background:#fff; min-width: 180px;">
                    <strong style="font-size:16px; color:#e74c3c;">Step 1: Different Sizes</strong><br>
                    <div style="margin: 10px 0; font-size: 20px;">
                        <div class="fraction-wrap"><span class="frac-top">1</span><span class="frac-bottom">2</span></div>
                        + 
                        <div class="fraction-wrap"><span class="frac-top">1</span><span class="frac-bottom">3</span></div>
                    </div>
                    <svg width="150" height="60" viewBox="0 0 100 40">
                        <rect x="5" y="10" width="40" height="20" fill="none" stroke="#000" stroke-width="2"/>
                        <rect x="5" y="10" width="20" height="20" fill="#e74c3c"/>
                        
                        <rect x="55" y="10" width="40" height="20" fill="none" stroke="#000" stroke-width="2"/>
                        <rect x="55" y="10" width="13.3" height="20" fill="#e74c3c"/>
                    </svg>
                </div>

                <div style="border:2px dashed #95a5a6; padding:15px; border-radius:10px; background:#f9f9f9; min-width: 180px;">
                    <strong style="font-size:16px; color:#7f8c8d;">Step 2: Multiply!</strong><br>
                    <div style="margin: 10px 0; font-size: 18px;">
                        <div class="fraction-wrap"><span class="frac-top">1 &times; 3</span><span class="frac-bottom">2 &times; 3</span></div>
                        &nbsp;&nbsp;&nbsp;
                        <div class="fraction-wrap"><span class="frac-top">1 &times; 2</span><span class="frac-bottom">3 &times; 2</span></div>
                    </div>
                    <div style="font-size: 14px; color: #555; margin-top: 15px; font-weight: bold;">
                        <em>Whatever you multiply the bottom by,<br>you MUST multiply the top by!</em>
                    </div>
                </div>

                <div style="border:2px solid #ccc; padding:15px; border-radius:10px; background:#fff; min-width: 180px;">
                    <strong style="font-size:16px; color:#27ae60;">Step 3: Same Sizes!</strong><br>
                    <div style="margin: 10px 0; font-size: 20px;">
                        <div class="fraction-wrap"><span class="frac-top">3</span><span class="frac-bottom">6</span></div>
                        + 
                        <div class="fraction-wrap"><span class="frac-top">2</span><span class="frac-bottom">6</span></div>
                        =
                        <div class="fraction-wrap"><span class="frac-top">5</span><span class="frac-bottom">6</span></div>
                    </div>
                    <svg width="150" height="60" viewBox="0 0 100 40">
                        <rect x="5" y="10" width="40" height="20" fill="none" stroke="#000" stroke-width="2"/>
                        <rect x="5" y="10" width="20" height="20" fill="#27ae60"/>
                        <line x1="18.3" y1="10" x2="18.3" y2="30" stroke="#000" stroke-width="1"/>
                        <line x1="31.6" y1="10" x2="31.6" y2="30" stroke="#000" stroke-width="1"/>
                        
                        <rect x="55" y="10" width="40" height="20" fill="none" stroke="#000" stroke-width="2"/>
                        <rect x="55" y="10" width="13.3" height="20" fill="#27ae60"/>
                        <line x1="68.3" y1="10" x2="68.3" y2="30" stroke="#000" stroke-width="1"/>
                        <line x1="81.6" y1="10" x2="81.6" y2="30" stroke="#000" stroke-width="1"/>
                    </svg>
                </div>

            </div>
        </div>
    `
};

// --- WEEK 2 HELPER HUB ---
const helperHubW2_Mod1 = {
    title: "★ Helper Hub: Adding Mixed Numbers",
    content: `
        <div style="font-size:16px; line-height: 1.5;">
            <p style="margin-top:0; margin-bottom:15px;">When adding or subtracting Mixed Numbers, break them apart! Group the <strong>Wholes</strong> together and the <strong>Fractions</strong> together.</p>
            
            <div style="display:flex; flex-direction: column; gap:15px;">
                
                <div style="text-align: center; font-size: 24px; font-weight: bold; background: #fff; padding: 10px; border-radius: 10px; border: 2px solid #eee;">
                    <span class="whole-part">2</span><div class="fraction-wrap"><span class="frac-top">1</span><span class="frac-bottom">4</span></div>
                    + 
                    <span class="whole-part">1</span><div class="fraction-wrap"><span class="frac-top">2</span><span class="frac-bottom">4</span></div>
                </div>

                <div style="display:flex; gap:15px; justify-content: center; flex-wrap: wrap; text-align:center;">
                    <div style="border:2px solid #3498db; padding:15px; border-radius:10px; background:#ebf5fb; flex: 1; min-width: 200px;">
                        <strong style="font-size:16px; color:#2980b9;">Step 1. Add the Wholes</strong><br>
                        <div style="margin: 10px 0; font-size: 20px; font-weight: bold;">
                            2 + 1 = 3
                        </div>
                        <svg width="150" height="40" viewBox="0 0 100 30">
                            <rect x="5" y="5" width="20" height="20" fill="#3498db" stroke="#000" stroke-width="2"/>
                            <rect x="30" y="5" width="20" height="20" fill="#3498db" stroke="#000" stroke-width="2"/>
                            <text x="58" y="20" font-family="Fredoka, sans-serif" font-size="16" font-weight="bold">+</text>
                            <rect x="70" y="5" width="20" height="20" fill="#3498db" stroke="#000" stroke-width="2"/>
                        </svg>
                    </div>

                    <div style="border:2px solid #2ecc71; padding:15px; border-radius:10px; background:#eafaf1; flex: 1; min-width: 200px;">
                        <strong style="font-size:16px; color:#27ae60;">Step 2. Add the Fractions</strong><br>
                        <div style="margin: 10px 0; font-size: 20px; font-weight: bold;">
                            <div class="fraction-wrap"><span class="frac-top">1</span><span class="frac-bottom">4</span></div>
                            +
                            <div class="fraction-wrap"><span class="frac-top">2</span><span class="frac-bottom">4</span></div>
                            =
                            <div class="fraction-wrap"><span class="frac-top">3</span><span class="frac-bottom">4</span></div>
                        </div>
                        <svg width="150" height="40" viewBox="0 0 100 30">
                            <rect x="5" y="5" width="20" height="20" fill="none" stroke="#000" stroke-width="2"/>
                            <rect x="5" y="5" width="5" height="20" fill="#2ecc71"/>
                            
                            <text x="32" y="20" font-family="Fredoka, sans-serif" font-size="16" font-weight="bold">+</text>
                            
                            <rect x="45" y="5" width="20" height="20" fill="none" stroke="#000" stroke-width="2"/>
                            <rect x="45" y="5" width="10" height="20" fill="#2ecc71"/>
                            
                            <text x="72" y="20" font-family="Fredoka, sans-serif" font-size="16" font-weight="bold">=</text>
                            
                            <rect x="85" y="5" width="20" height="20" fill="none" stroke="#000" stroke-width="2"/>
                            <rect x="85" y="5" width="15" height="20" fill="#2ecc71"/>
                        </svg>
                    </div>
                </div>
                
                <div style="border:2px solid #f39c12; padding:15px; border-radius:10px; background:#fef9e7; text-align: center;">
                    <strong style="font-size:16px; color:#d35400;">Step 3. Put them together!</strong><br>
                    <div style="margin: 10px 0; font-size: 28px; font-weight: bold;">
                        <span class="whole-part">3</span><div class="fraction-wrap"><span class="frac-top">3</span><span class="frac-bottom">4</span></div>
                    </div>
                </div>

            </div>
        </div>
    `
};

const module1 = {
    id: "mod-1",
    name: "Add & Subtract with Equivalent Fractions",
    versions: [
        // ==========================================
        // VERSION A (Baseline)
        // ==========================================
        {
            id: "A",
            weeks: [
                {
                    weekNum: 1,
                    helperHub: helperHubW1_Mod1,
                    days: [
                        {
                            id: "m1-w1-mon", name: "Mon", title: "Module 1: Practice Set 1",
                            sections: [
                                {
                                    instruction: "Which set of steps shows a correct strategy and solution for adding: ",
                                    instructionMath: [ { type: "mixed", w: "2", n: "2", d: "3" }, { type: "text", val: "+" }, { type: "mixed", w: "1", n: "3", d: "4" } ],
                                    type: "multiple_choice",
                                    options: [
                                        { id: "opt1", correct: true, content: [ { type: "fraction", n: "8 x 4", d: "3 x 4" }, { type: "text", val: "+" }, { type: "fraction", n: "7 x 3", d: "4 x 3" }, { type: "text", val: "=" }, { type: "fraction", n: "32", d: "12" }, { type: "text", val: "+" }, { type: "fraction", n: "21", d: "12" }, { type: "text", val: "=" }, { type: "fraction", n: "53", d: "12" }, { type: "text", val: "=" }, { type: "mixed", w: "4", n: "5", d: "12" } ] },
                                        { id: "opt2", correct: false, content: [ { type: "fraction", n: "2 x 3", d: "3 x 4" }, { type: "text", val: "+" }, { type: "fraction", n: "3 x 4", d: "4 x 3" }, { type: "text", val: "=" }, { type: "fraction", n: "6", d: "12" }, { type: "text", val: "+" }, { type: "fraction", n: "12", d: "12" }, { type: "text", val: "=" }, { type: "fraction", n: "18", d: "12" }, { type: "text", val: "=" }, { type: "mixed", w: "1", n: "6", d: "12" } ] },
                                        { id: "opt3", correct: false, content: [ { type: "text", val: "3" }, { type: "fraction", n: "2+3", d: "3+4" }, { type: "text", val: "=" }, { type: "text", val: "3" }, { type: "fraction", n: "5", d: "7" } ] },
                                        { id: "opt4", correct: false, content: [ { type: "fraction", n: "8", d: "3 x 4" }, { type: "text", val: "+" }, { type: "fraction", n: "7", d: "4 x 3" }, { type: "text", val: "=" }, { type: "fraction", n: "8", d: "12" }, { type: "text", val: "+" }, { type: "fraction", n: "7", d: "12" }, { type: "text", val: "=" }, { type: "fraction", n: "15", d: "12" } ] }
                                    ]
                                },
                                {
                                    instruction: "Enter the difference. (Equivalent answers are allowed)",
                                    type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "80", d: "100" }, { type: "text", val: " - " }, { type: "fraction", n: "3", d: "10" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.5 } ] } ]
                                }
                            ]
                        },
                        {
                            id: "m1-w1-tue", name: "Tue", title: "Module 1: Practice Set 2",
                            sections: [
                                { instruction: "Enter the sum. (Equivalent answers are allowed)", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "3", d: "10" }, { type: "text", val: " + " }, { type: "fraction", n: "40", d: "100" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.7 } ] } ] },
                                { instruction: "Enter the sum.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "2", d: "3" }, { type: "text", val: " + " }, { type: "fraction", n: "1", d: "5" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.8666 } ] } ] },
                                {
                                    instruction: [ { type: "text", val: "Point C is at " }, { type: "fraction", n: "2", d: "5" }, { type: "text", val: ". Move right " }, { type: "fraction", n: "3", d: "10" }, { type: "text", val: ". Enter your new location." } ],
                                    type: "number_line", min: 0, max: 1, step: 0.1, points: [{ val: 0.4, label: "C" }],
                                    problems: [ { segments: [ { type: "text", val: "Location: " }, { type: "fraction_group", ans: 0.7 } ] } ]
                                }
                            ]
                        },
                        {
                            id: "m1-w1-wed", name: "Wed", title: "Module 1: Practice Set 3",
                            sections: [
                                {
                                    instruction: "Which set of steps shows a correct strategy and solution for adding: ",
                                    instructionMath: [ { type: "mixed", w: "1", n: "1", d: "4" }, { type: "text", val: "+" }, { type: "fraction", n: "5", d: "6" } ],
                                    type: "multiple_choice",
                                    options: [
                                        { id: "opt1", correct: true, content: [ { type: "fraction", n: "5 x 3", d: "4 x 3" }, { type: "text", val: "+" }, { type: "fraction", n: "5 x 2", d: "6 x 2" }, { type: "text", val: "=" }, { type: "fraction", n: "15", d: "12" }, { type: "text", val: "+" }, { type: "fraction", n: "10", d: "12" }, { type: "text", val: "=" }, { type: "fraction", n: "25", d: "12" }, { type: "text", val: "=" }, { type: "mixed", w: "2", n: "1", d: "12" } ] },
                                        { id: "opt2", correct: false, content: [ { type: "text", val: "1" }, { type: "fraction", n: "1+5", d: "4+6" }, { type: "text", val: "=" }, { type: "text", val: "1" }, { type: "fraction", n: "6", d: "10" } ] },
                                        { id: "opt3", correct: false, content: [ { type: "fraction", n: "5 x 6", d: "4 x 6" }, { type: "text", val: "+" }, { type: "fraction", n: "5 x 4", d: "6 x 4" }, { type: "text", val: "=" }, { type: "fraction", n: "30", d: "24" }, { type: "text", val: "+" }, { type: "fraction", n: "20", d: "24" }, { type: "text", val: "=" }, { type: "fraction", n: "50", d: "24" } ] }
                                    ]
                                },
                                { instruction: "Enter the difference.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "70", d: "100" }, { type: "text", val: " - " }, { type: "fraction", n: "5", d: "10" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.2 } ] } ] }
                            ]
                        },
                        {
                            id: "m1-w1-thu", name: "Thu", title: "Module 1: Practice Set 4",
                            sections: [
                                { instruction: "Enter the sum.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "2", d: "100" }, { type: "text", val: " + " }, { type: "fraction", n: "5", d: "10" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.52 } ] } ] },
                                { instruction: "Enter the difference.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "7", d: "8" }, { type: "text", val: " - " }, { type: "fraction", n: "1", d: "4" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.625 } ] } ] },
                                {
                                    instruction: [ { type: "text", val: "Point D is at " }, { type: "fraction", n: "7", d: "8" }, { type: "text", val: ". Move left " }, { type: "fraction", n: "1", d: "2" }, { type: "text", val: ". Enter your new location." } ],
                                    type: "number_line", min: 0, max: 1, step: 0.125, points: [{ val: 0.875, label: "D" }],
                                    problems: [ { segments: [ { type: "text", val: "Location: " }, { type: "fraction_group", ans: 0.375 } ] } ]
                                }
                            ]
                        },
                        {
                            id: "m1-w1-fri", name: "Fri", title: "Module 1: Quiz",
                            sections: [
                                {
                                    instruction: "Which set of steps shows a correct strategy and solution for adding: ",
                                    instructionMath: [ { type: "mixed", w: "2", n: "1", d: "7" }, { type: "text", val: "+" }, { type: "mixed", w: "1", n: "2", d: "3" } ],
                                    type: "multiple_choice",
                                    options: [
                                        { id: "opt1", correct: true, content: [ { type: "fraction", n: "15 x 3", d: "7 x 3" }, { type: "text", val: "+" }, { type: "fraction", n: "5 x 7", d: "3 x 7" }, { type: "text", val: "=" }, { type: "fraction", n: "45", d: "21" }, { type: "text", val: "+" }, { type: "fraction", n: "35", d: "21" }, { type: "text", val: "=" }, { type: "fraction", n: "80", d: "21" }, { type: "text", val: "=" }, { type: "mixed", w: "3", n: "17", d: "21" } ] },
                                        { id: "opt2", correct: false, content: [ { type: "fraction", n: "15", d: "7 x 3" }, { type: "text", val: "+" }, { type: "fraction", n: "5", d: "3 x 7" }, { type: "text", val: "=" }, { type: "fraction", n: "15", d: "21" }, { type: "text", val: "+" }, { type: "fraction", n: "5", d: "21" }, { type: "text", val: "=" }, { type: "fraction", n: "20", d: "21" } ] },
                                        { id: "opt3", correct: false, content: [ { type: "fraction", n: "1 x 3", d: "7 x 3" }, { type: "text", val: "+" }, { type: "fraction", n: "2 x 7", d: "3 x 7" }, { type: "text", val: "=" }, { type: "fraction", n: "3", d: "21" }, { type: "text", val: "+" }, { type: "fraction", n: "14", d: "21" }, { type: "text", val: "=" }, { type: "fraction", n: "17", d: "21" } ] }
                                    ]
                                },
                                { instruction: "Enter the sum.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "50", d: "100" }, { type: "text", val: " + " }, { type: "fraction", n: "2", d: "10" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.7 } ] } ] }
                            ]
                        }
                    ]
                },
                {
                    weekNum: 2,
                    helperHub: helperHubW2_Mod1,
                    days: [
                        {
                            id: "m1-w2-mon", name: "Mon", title: "Module 1: Practice Set 6",
                            sections: [
                                { instruction: "Enter the difference.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "9", d: "10" }, { type: "text", val: " - " }, { type: "fraction", n: "20", d: "100" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.7 } ] } ] },
                                {
                                    instruction: [ { type: "text", val: "Liam had " }, { type: "mixed", w: "2", n: "1", d: "2" }, { type: "text", val: " meters of ribbon. He has " }, { type: "mixed", w: "1", n: "1", d: "3" }, { type: "text", val: " meters left as shown in the model below. Enter the fraction of ribbon he used." } ],
                                    type: "visual_problem", models: [{ label: "Ribbon Left", whole: 1, num: 1, den: 3, color: "#e67e22" }],
                                    problems: [ { segments: [ { type: "text", val: "Used: " }, { type: "mixed_group", ans: 1.1666 } ] } ]
                                }
                            ]
                        },
                        {
                            id: "m1-w2-tue", name: "Tue", title: "Module 1: Practice Set 7",
                            sections: [
                                { instruction: "Enter the sum.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "4", d: "10" }, { type: "text", val: " + " }, { type: "fraction", n: "45", d: "100" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.85 } ] } ] },
                                { instruction: "Enter the sum.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "3", d: "4" }, { type: "text", val: " + " }, { type: "fraction", n: "1", d: "6" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.9166 } ] } ] },
                                {
                                    instruction: [ { type: "text", val: "The distance Anna walked in the morning is plotted at point A. Anna walked " }, { type: "fraction", n: "2", d: "5" }, { type: "text", val: " mile in the afternoon. Enter the total distance Anna walked." } ],
                                    type: "number_line", min: 0, max: 1, step: 0.1, points: [{ val: 0.3, label: "A" }],
                                    problems: [ { segments: [ { type: "text", val: "Total: " }, { type: "fraction_group", ans: 0.7 } ] } ]
                                }
                            ]
                        },
                        {
                            id: "m1-w2-wed", name: "Wed", title: "Module 1: Practice Set 8",
                            sections: [
                                { instruction: "Enter the difference.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "60", d: "100" }, { type: "text", val: " - " }, { type: "fraction", n: "1", d: "10" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.5 } ] } ] },
                                {
                                    instruction: "Figure A and Figure B represent bags of soil. The shaded parts show how much of each bag has been used. How many bags of soil have been used combined?",
                                    type: "visual_problem", models: [ { label: "Figure A", whole: 0, num: 2, den: 3, color: "#e74c3c" }, { label: "Figure B", whole: 0, num: 3, den: 4, color: "#f1c40f" } ],
                                    problems: [ { segments: [ { type: "text", val: "Total: " }, { type: "mixed_group", ans: 1.4166 } ] } ]
                                }
                            ]
                        },
                        {
                            id: "m1-w2-thu", name: "Thu", title: "Module 1: Practice Set 9",
                            sections: [
                                { instruction: "Enter the sum.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "7", d: "10" }, { type: "text", val: " + " }, { type: "fraction", n: "15", d: "100" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.85 } ] } ] },
                                { instruction: "Enter the difference.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "4", d: "5" }, { type: "text", val: " - " }, { type: "fraction", n: "1", d: "2" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.3 } ] } ] },
                                {
                                    instruction: [ { type: "text", val: "The distance Bob walked in the morning is plotted at point B. Bob walked " }, { type: "fraction", n: "1", d: "4" }, { type: "text", val: " mile in the afternoon. Enter the total distance Bob walked." } ],
                                    type: "number_line", min: 0, max: 1, step: 0.125, points: [{ val: 0.375, label: "B" }],
                                    problems: [ { segments: [ { type: "text", val: "Total: " }, { type: "fraction_group", ans: 0.625 } ] } ]
                                }
                            ]
                        },
                        {
                            id: "m1-w2-fri", name: "Fri", title: "Module 1: Quiz",
                            sections: [
                                { instruction: "Enter the difference.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "95", d: "100" }, { type: "text", val: " - " }, { type: "fraction", n: "8", d: "10" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.15 } ] } ] },
                                {
                                    instruction: [ { type: "text", val: "Jane had " }, { type: "mixed", w: "2", n: "2", d: "3" }, { type: "text", val: " liters of juice. She has " }, { type: "mixed", w: "1", n: "1", d: "3" }, { type: "text", val: " liters left as shown below. Enter the fraction of juice she served." } ],
                                    type: "visual_problem", models: [{ label: "Juice Left", whole: 1, num: 1, den: 3, color: "#9b59b6" }],
                                    problems: [ { segments: [ { type: "text", val: "Served: " }, { type: "mixed_group", ans: 1.3333 } ] } ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        
        // ==========================================
        // VERSION B 
        // ==========================================
        {
            id: "B",
            weeks: [
                {
                    weekNum: 1,
                    helperHub: helperHubW1_Mod1,
                    days: [
                        {
                            id: "m1-w1-mon", name: "Mon", title: "Module 1: Practice Set 1",
                            sections: [
                                {
                                    instruction: "Which set of steps shows a correct strategy and solution for adding: ",
                                    instructionMath: [ { type: "mixed", w: "1", n: "1", d: "2" }, { type: "text", val: "+" }, { type: "mixed", w: "2", n: "3", d: "5" } ],
                                    type: "multiple_choice",
                                    options: [
                                        { id: "opt1", correct: true, content: [ { type: "fraction", n: "3 x 5", d: "2 x 5" }, { type: "text", val: "+" }, { type: "fraction", n: "13 x 2", d: "5 x 2" }, { type: "text", val: "=" }, { type: "fraction", n: "15", d: "10" }, { type: "text", val: "+" }, { type: "fraction", n: "26", d: "10" }, { type: "text", val: "=" }, { type: "fraction", n: "41", d: "10" }, { type: "text", val: "=" }, { type: "mixed", w: "4", n: "1", d: "10" } ] },
                                        { id: "opt2", correct: false, content: [ { type: "text", val: "3" }, { type: "fraction", n: "1+3", d: "2+5" }, { type: "text", val: "=" }, { type: "text", val: "3" }, { type: "fraction", n: "4", d: "7" } ] },
                                        { id: "opt3", correct: false, content: [ { type: "fraction", n: "3 x 2", d: "2 x 5" }, { type: "text", val: "+" }, { type: "fraction", n: "13 x 5", d: "5 x 2" }, { type: "text", val: "=" }, { type: "fraction", n: "6", d: "10" }, { type: "text", val: "+" }, { type: "fraction", n: "65", d: "10" }, { type: "text", val: "=" }, { type: "fraction", n: "71", d: "10" } ] },
                                        { id: "opt4", correct: false, content: [ { type: "fraction", n: "3", d: "2 x 5" }, { type: "text", val: "+" }, { type: "fraction", n: "13", d: "5 x 2" }, { type: "text", val: "=" }, { type: "fraction", n: "3", d: "10" }, { type: "text", val: "+" }, { type: "fraction", n: "13", d: "10" }, { type: "text", val: "=" }, { type: "fraction", n: "16", d: "10" } ] }
                                    ]
                                },
                                { instruction: "Enter the difference. (Equivalent answers are allowed)", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "70", d: "100" }, { type: "text", val: " - " }, { type: "fraction", n: "2", d: "10" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.5 } ] } ] }
                            ]
                        },
                        {
                            id: "m1-w1-tue", name: "Tue", title: "Module 1: Practice Set 2",
                            sections: [
                                { instruction: "Enter the sum. (Equivalent answers are allowed)", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "4", d: "10" }, { type: "text", val: " + " }, { type: "fraction", n: "20", d: "100" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.6 } ] } ] },
                                { instruction: "Enter the sum.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "3", d: "4" }, { type: "text", val: " + " }, { type: "fraction", n: "1", d: "3" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 1.0833 } ] } ] },
                                {
                                    instruction: [ { type: "text", val: "Point C is at " }, { type: "fraction", n: "1", d: "5" }, { type: "text", val: ". Move right " }, { type: "fraction", n: "4", d: "10" }, { type: "text", val: ". Enter your new location." } ],
                                    type: "number_line", min: 0, max: 1, step: 0.1, points: [{ val: 0.2, label: "C" }],
                                    problems: [ { segments: [ { type: "text", val: "Location: " }, { type: "fraction_group", ans: 0.6 } ] } ]
                                }
                            ]
                        },
                        {
                            id: "m1-w1-wed", name: "Wed", title: "Module 1: Practice Set 3",
                            sections: [
                                {
                                    instruction: "Which set of steps shows a correct strategy and solution for adding: ",
                                    instructionMath: [ { type: "mixed", w: "2", n: "1", d: "3" }, { type: "text", val: "+" }, { type: "fraction", n: "3", d: "4" } ],
                                    type: "multiple_choice",
                                    options: [
                                        { id: "opt1", correct: true, content: [ { type: "fraction", n: "7 x 4", d: "3 x 4" }, { type: "text", val: "+" }, { type: "fraction", n: "3 x 3", d: "4 x 3" }, { type: "text", val: "=" }, { type: "fraction", n: "28", d: "12" }, { type: "text", val: "+" }, { type: "fraction", n: "9", d: "12" }, { type: "text", val: "=" }, { type: "fraction", n: "37", d: "12" }, { type: "text", val: "=" }, { type: "mixed", w: "3", n: "1", d: "12" } ] },
                                        { id: "opt2", correct: false, content: [ { type: "text", val: "2" }, { type: "fraction", n: "1+3", d: "3+4" }, { type: "text", val: "=" }, { type: "text", val: "2" }, { type: "fraction", n: "4", d: "7" } ] },
                                        { id: "opt3", correct: false, content: [ { type: "fraction", n: "7 x 3", d: "3 x 4" }, { type: "text", val: "+" }, { type: "fraction", n: "3 x 4", d: "4 x 3" }, { type: "text", val: "=" }, { type: "fraction", n: "21", d: "12" }, { type: "text", val: "+" }, { type: "fraction", n: "12", d: "12" }, { type: "text", val: "=" }, { type: "fraction", n: "33", d: "12" } ] }
                                    ]
                                },
                                { instruction: "Enter the difference.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "80", d: "100" }, { type: "text", val: " - " }, { type: "fraction", n: "4", d: "10" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.4 } ] } ] }
                            ]
                        },
                        {
                            id: "m1-w1-thu", name: "Thu", title: "Module 1: Practice Set 4",
                            sections: [
                                { instruction: "Enter the sum.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "3", d: "100" }, { type: "text", val: " + " }, { type: "fraction", n: "4", d: "10" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.43 } ] } ] },
                                { instruction: "Enter the difference.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "5", d: "6" }, { type: "text", val: " - " }, { type: "fraction", n: "1", d: "3" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.5 } ] } ] },
                                {
                                    instruction: [ { type: "text", val: "Point D is at " }, { type: "fraction", n: "3", d: "4" }, { type: "text", val: ". Move left " }, { type: "fraction", n: "1", d: "4" }, { type: "text", val: ". Enter your new location." } ],
                                    type: "number_line", min: 0, max: 1, step: 0.25, points: [{ val: 0.75, label: "D" }],
                                    problems: [ { segments: [ { type: "text", val: "Location: " }, { type: "fraction_group", ans: 0.5 } ] } ]
                                }
                            ]
                        },
                        {
                            id: "m1-w1-fri", name: "Fri", title: "Module 1: Quiz",
                            sections: [
                                {
                                    instruction: "Which set of steps shows a correct strategy and solution for adding: ",
                                    instructionMath: [ { type: "mixed", w: "1", n: "2", d: "5" }, { type: "text", val: "+" }, { type: "mixed", w: "2", n: "1", d: "4" } ],
                                    type: "multiple_choice",
                                    options: [
                                        { id: "opt1", correct: true, content: [ { type: "fraction", n: "7 x 4", d: "5 x 4" }, { type: "text", val: "+" }, { type: "fraction", n: "9 x 5", d: "4 x 5" }, { type: "text", val: "=" }, { type: "fraction", n: "28", d: "20" }, { type: "text", val: "+" }, { type: "fraction", n: "45", d: "20" }, { type: "text", val: "=" }, { type: "fraction", n: "73", d: "20" }, { type: "text", val: "=" }, { type: "mixed", w: "3", n: "13", d: "20" } ] },
                                        { id: "opt2", correct: false, content: [ { type: "text", val: "3" }, { type: "fraction", n: "2+1", d: "5+4" }, { type: "text", val: "=" }, { type: "text", val: "3" }, { type: "fraction", n: "3", d: "9" } ] },
                                        { id: "opt3", correct: false, content: [ { type: "fraction", n: "7", d: "5 x 4" }, { type: "text", val: "+" }, { type: "fraction", n: "9", d: "4 x 5" }, { type: "text", val: "=" }, { type: "fraction", n: "7", d: "20" }, { type: "text", val: "+" }, { type: "fraction", n: "9", d: "20" }, { type: "text", val: "=" }, { type: "fraction", n: "16", d: "20" } ] }
                                    ]
                                },
                                { instruction: "Enter the sum.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "40", d: "100" }, { type: "text", val: " + " }, { type: "fraction", n: "3", d: "10" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.7 } ] } ] }
                            ]
                        }
                    ]
                },
                {
                    weekNum: 2,
                    helperHub: helperHubW2_Mod1,
                    days: [
                        {
                            id: "m1-w2-mon", name: "Mon", title: "Module 1: Practice Set 6",
                            sections: [
                                { instruction: "Enter the difference.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "8", d: "10" }, { type: "text", val: " - " }, { type: "fraction", n: "30", d: "100" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.5 } ] } ] },
                                {
                                    instruction: [ { type: "text", val: "Noah had " }, { type: "mixed", w: "3", n: "1", d: "3" }, { type: "text", val: " meters of ribbon. He has " }, { type: "mixed", w: "1", n: "1", d: "4" }, { type: "text", val: " meters left as shown in the model below. Enter the fraction of ribbon he used." } ],
                                    type: "visual_problem", models: [{ label: "Ribbon Left", whole: 1, num: 1, den: 4, color: "#e67e22" }],
                                    problems: [ { segments: [ { type: "text", val: "Used: " }, { type: "mixed_group", ans: 2.0833 } ] } ]
                                }
                            ]
                        },
                        {
                            id: "m1-w2-tue", name: "Tue", title: "Module 1: Practice Set 7",
                            sections: [
                                { instruction: "Enter the sum.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "5", d: "10" }, { type: "text", val: " + " }, { type: "fraction", n: "25", d: "100" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.75 } ] } ] },
                                { instruction: "Enter the sum.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "2", d: "5" }, { type: "text", val: " + " }, { type: "fraction", n: "1", d: "4" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.65 } ] } ] },
                                {
                                    instruction: [ { type: "text", val: "The distance Anna walked in the morning is plotted at point A. Anna walked " }, { type: "fraction", n: "1", d: "5" }, { type: "text", val: " mile in the afternoon. Enter the total distance Anna walked." } ],
                                    type: "number_line", min: 0, max: 1, step: 0.2, points: [{ val: 0.4, label: "A" }],
                                    problems: [ { segments: [ { type: "text", val: "Total: " }, { type: "fraction_group", ans: 0.6 } ] } ]
                                }
                            ]
                        },
                        {
                            id: "m1-w2-wed", name: "Wed", title: "Module 1: Practice Set 8",
                            sections: [
                                { instruction: "Enter the difference.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "90", d: "100" }, { type: "text", val: " - " }, { type: "fraction", n: "3", d: "10" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.6 } ] } ] },
                                {
                                    instruction: "Figure A and Figure B represent bags of soil. The shaded parts show how much of each bag has been used. How many bags of soil have been used combined?",
                                    type: "visual_problem", models: [ { label: "Figure A", whole: 0, num: 1, den: 3, color: "#e74c3c" }, { label: "Figure B", whole: 0, num: 2, den: 5, color: "#f1c40f" } ],
                                    problems: [ { segments: [ { type: "text", val: "Total: " }, { type: "mixed_group", ans: 0.7333 } ] } ]
                                }
                            ]
                        },
                        {
                            id: "m1-w2-thu", name: "Thu", title: "Module 1: Practice Set 9",
                            sections: [
                                { instruction: "Enter the sum.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "6", d: "10" }, { type: "text", val: " + " }, { type: "fraction", n: "25", d: "100" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.85 } ] } ] },
                                { instruction: "Enter the difference.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "3", d: "4" }, { type: "text", val: " - " }, { type: "fraction", n: "1", d: "3" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.4166 } ] } ] },
                                {
                                    instruction: [ { type: "text", val: "The distance Bob walked in the morning is plotted at point B. Bob walked " }, { type: "fraction", n: "3", d: "8" }, { type: "text", val: " mile in the afternoon. Enter the total distance Bob walked." } ],
                                    type: "number_line", min: 0, max: 1, step: 0.125, points: [{ val: 0.25, label: "B" }],
                                    problems: [ { segments: [ { type: "text", val: "Total: " }, { type: "fraction_group", ans: 0.625 } ] } ]
                                }
                            ]
                        },
                        {
                            id: "m1-w2-fri", name: "Fri", title: "Module 1: Quiz",
                            sections: [
                                { instruction: "Enter the difference.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "85", d: "100" }, { type: "text", val: " - " }, { type: "fraction", n: "4", d: "10" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.45 } ] } ] },
                                {
                                    instruction: [ { type: "text", val: "Maya had " }, { type: "mixed", w: "3", n: "3", d: "4" }, { type: "text", val: " liters of juice. She has " }, { type: "mixed", w: "1", n: "1", d: "4" }, { type: "text", val: " liters left as shown below. Enter the fraction of juice she served." } ],
                                    type: "visual_problem", models: [{ label: "Juice Left", whole: 1, num: 1, den: 4, color: "#9b59b6" }],
                                    problems: [ { segments: [ { type: "text", val: "Served: " }, { type: "mixed_group", ans: 2.5 } ] } ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        // ==========================================
        // VERSION C 
        // ==========================================
        {
            id: "C",
            weeks: [
                {
                    weekNum: 1,
                    helperHub: helperHubW1_Mod1,
                    days: [
                        {
                            id: "m1-w1-mon", name: "Mon", title: "Module 1: Practice Set 1",
                            sections: [
                                {
                                    instruction: "Which set of steps shows a correct strategy and solution for adding: ",
                                    instructionMath: [ { type: "mixed", w: "3", n: "1", d: "4" }, { type: "text", val: "+" }, { type: "mixed", w: "1", n: "2", d: "3" } ],
                                    type: "multiple_choice",
                                    options: [
                                        { id: "opt1", correct: true, content: [ { type: "fraction", n: "13 x 3", d: "4 x 3" }, { type: "text", val: "+" }, { type: "fraction", n: "5 x 4", d: "3 x 4" }, { type: "text", val: "=" }, { type: "fraction", n: "39", d: "12" }, { type: "text", val: "+" }, { type: "fraction", n: "20", d: "12" }, { type: "text", val: "=" }, { type: "fraction", n: "59", d: "12" }, { type: "text", val: "=" }, { type: "mixed", w: "4", n: "11", d: "12" } ] },
                                        { id: "opt2", correct: false, content: [ { type: "text", val: "4" }, { type: "fraction", n: "1+2", d: "4+3" }, { type: "text", val: "=" }, { type: "text", val: "4" }, { type: "fraction", n: "3", d: "7" } ] },
                                        { id: "opt3", correct: false, content: [ { type: "fraction", n: "13 x 4", d: "4 x 3" }, { type: "text", val: "+" }, { type: "fraction", n: "5 x 3", d: "3 x 4" }, { type: "text", val: "=" }, { type: "fraction", n: "52", d: "12" }, { type: "text", val: "+" }, { type: "fraction", n: "15", d: "12" }, { type: "text", val: "=" }, { type: "fraction", n: "67", d: "12" } ] },
                                        { id: "opt4", correct: false, content: [ { type: "fraction", n: "13", d: "4 x 3" }, { type: "text", val: "+" }, { type: "fraction", n: "5", d: "3 x 4" }, { type: "text", val: "=" }, { type: "fraction", n: "13", d: "12" }, { type: "text", val: "+" }, { type: "fraction", n: "5", d: "12" }, { type: "text", val: "=" }, { type: "fraction", n: "18", d: "12" } ] }
                                    ]
                                },
                                { instruction: "Enter the difference. (Equivalent answers are allowed)", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "90", d: "100" }, { type: "text", val: " - " }, { type: "fraction", n: "6", d: "10" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.3 } ] } ] }
                            ]
                        },
                        {
                            id: "m1-w1-tue", name: "Tue", title: "Module 1: Practice Set 2",
                            sections: [
                                { instruction: "Enter the sum. (Equivalent answers are allowed)", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "5", d: "10" }, { type: "text", val: " + " }, { type: "fraction", n: "15", d: "100" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.65 } ] } ] },
                                { instruction: "Enter the sum.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "2", d: "5" }, { type: "text", val: " + " }, { type: "fraction", n: "1", d: "3" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.7333 } ] } ] },
                                {
                                    instruction: [ { type: "text", val: "Point C is at " }, { type: "fraction", n: "3", d: "5" }, { type: "text", val: ". Move right " }, { type: "fraction", n: "1", d: "10" }, { type: "text", val: ". Enter your new location." } ],
                                    type: "number_line", min: 0, max: 1, step: 0.1, points: [{ val: 0.6, label: "C" }],
                                    problems: [ { segments: [ { type: "text", val: "Location: " }, { type: "fraction_group", ans: 0.7 } ] } ]
                                }
                            ]
                        },
                        {
                            id: "m1-w1-wed", name: "Wed", title: "Module 1: Practice Set 3",
                            sections: [
                                {
                                    instruction: "Which set of steps shows a correct strategy and solution for adding: ",
                                    instructionMath: [ { type: "mixed", w: "1", n: "1", d: "5" }, { type: "text", val: "+" }, { type: "fraction", n: "3", d: "4" } ],
                                    type: "multiple_choice",
                                    options: [
                                        { id: "opt1", correct: true, content: [ { type: "fraction", n: "6 x 4", d: "5 x 4" }, { type: "text", val: "+" }, { type: "fraction", n: "3 x 5", d: "4 x 5" }, { type: "text", val: "=" }, { type: "fraction", n: "24", d: "20" }, { type: "text", val: "+" }, { type: "fraction", n: "15", d: "20" }, { type: "text", val: "=" }, { type: "fraction", n: "39", d: "20" }, { type: "text", val: "=" }, { type: "mixed", w: "1", n: "19", d: "20" } ] },
                                        { id: "opt2", correct: false, content: [ { type: "text", val: "1" }, { type: "fraction", n: "1+3", d: "5+4" }, { type: "text", val: "=" }, { type: "text", val: "1" }, { type: "fraction", n: "4", d: "9" } ] },
                                        { id: "opt3", correct: false, content: [ { type: "fraction", n: "6 x 5", d: "5 x 4" }, { type: "text", val: "+" }, { type: "fraction", n: "3 x 4", d: "4 x 5" }, { type: "text", val: "=" }, { type: "fraction", n: "30", d: "20" }, { type: "text", val: "+" }, { type: "fraction", n: "12", d: "20" }, { type: "text", val: "=" }, { type: "fraction", n: "42", d: "20" } ] }
                                    ]
                                },
                                { instruction: "Enter the difference.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "80", d: "100" }, { type: "text", val: " - " }, { type: "fraction", n: "5", d: "10" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.3 } ] } ] }
                            ]
                        },
                        {
                            id: "m1-w1-thu", name: "Thu", title: "Module 1: Practice Set 4",
                            sections: [
                                { instruction: "Enter the sum.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "5", d: "100" }, { type: "text", val: " + " }, { type: "fraction", n: "7", d: "10" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.75 } ] } ] },
                                { instruction: "Enter the difference.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "7", d: "8" }, { type: "text", val: " - " }, { type: "fraction", n: "1", d: "2" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.375 } ] } ] },
                                {
                                    instruction: [ { type: "text", val: "Point D is at " }, { type: "fraction", n: "5", d: "8" }, { type: "text", val: ". Move left " }, { type: "fraction", n: "1", d: "4" }, { type: "text", val: ". Enter your new location." } ],
                                    type: "number_line", min: 0, max: 1, step: 0.125, points: [{ val: 0.625, label: "D" }],
                                    problems: [ { segments: [ { type: "text", val: "Location: " }, { type: "fraction_group", ans: 0.375 } ] } ]
                                }
                            ]
                        },
                        {
                            id: "m1-w1-fri", name: "Fri", title: "Module 1: Quiz",
                            sections: [
                                {
                                    instruction: "Which set of steps shows a correct strategy and solution for adding: ",
                                    instructionMath: [ { type: "mixed", w: "2", n: "1", d: "3" }, { type: "text", val: "+" }, { type: "mixed", w: "1", n: "2", d: "5" } ],
                                    type: "multiple_choice",
                                    options: [
                                        { id: "opt1", correct: true, content: [ { type: "fraction", n: "7 x 5", d: "3 x 5" }, { type: "text", val: "+" }, { type: "fraction", n: "7 x 3", d: "5 x 3" }, { type: "text", val: "=" }, { type: "fraction", n: "35", d: "15" }, { type: "text", val: "+" }, { type: "fraction", n: "21", d: "15" }, { type: "text", val: "=" }, { type: "fraction", n: "56", d: "15" }, { type: "text", val: "=" }, { type: "mixed", w: "3", n: "11", d: "15" } ] },
                                        { id: "opt2", correct: false, content: [ { type: "text", val: "3" }, { type: "fraction", n: "1+2", d: "3+5" }, { type: "text", val: "=" }, { type: "text", val: "3" }, { type: "fraction", n: "3", d: "8" } ] },
                                        { id: "opt3", correct: false, content: [ { type: "fraction", n: "7", d: "3 x 5" }, { type: "text", val: "+" }, { type: "fraction", n: "7", d: "5 x 3" }, { type: "text", val: "=" }, { type: "fraction", n: "7", d: "15" }, { type: "text", val: "+" }, { type: "fraction", n: "7", d: "15" }, { type: "text", val: "=" }, { type: "fraction", n: "14", d: "15" } ] }
                                    ]
                                },
                                { instruction: "Enter the sum.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "60", d: "100" }, { type: "text", val: " + " }, { type: "fraction", n: "1", d: "10" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.7 } ] } ] }
                            ]
                        }
                    ]
                },
                {
                    weekNum: 2,
                    helperHub: helperHubW2_Mod1,
                    days: [
                        {
                            id: "m1-w2-mon", name: "Mon", title: "Module 1: Practice Set 6",
                            sections: [
                                { instruction: "Enter the difference.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "7", d: "10" }, { type: "text", val: " - " }, { type: "fraction", n: "40", d: "100" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.3 } ] } ] },
                                {
                                    instruction: [ { type: "text", val: "Leo had " }, { type: "mixed", w: "4", n: "1", d: "2" }, { type: "text", val: " meters of ribbon. He has " }, { type: "mixed", w: "2", n: "1", d: "3" }, { type: "text", val: " meters left as shown in the model below. Enter the fraction of ribbon he used." } ],
                                    type: "visual_problem", models: [{ label: "Ribbon Left", whole: 2, num: 1, den: 3, color: "#e67e22" }],
                                    problems: [ { segments: [ { type: "text", val: "Used: " }, { type: "mixed_group", ans: 2.1666 } ] } ]
                                }
                            ]
                        },
                        {
                            id: "m1-w2-tue", name: "Tue", title: "Module 1: Practice Set 7",
                            sections: [
                                { instruction: "Enter the sum.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "3", d: "10" }, { type: "text", val: " + " }, { type: "fraction", n: "55", d: "100" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.85 } ] } ] },
                                { instruction: "Enter the sum.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "3", d: "5" }, { type: "text", val: " + " }, { type: "fraction", n: "1", d: "6" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.7666 } ] } ] },
                                {
                                    instruction: [ { type: "text", val: "The distance Anna walked in the morning is plotted at point A. Anna walked " }, { type: "fraction", n: "3", d: "10" }, { type: "text", val: " mile in the afternoon. Enter the total distance Anna walked." } ],
                                    type: "number_line", min: 0, max: 1, step: 0.1, points: [{ val: 0.5, label: "A" }],
                                    problems: [ { segments: [ { type: "text", val: "Total: " }, { type: "fraction_group", ans: 0.8 } ] } ]
                                }
                            ]
                        },
                        {
                            id: "m1-w2-wed", name: "Wed", title: "Module 1: Practice Set 8",
                            sections: [
                                { instruction: "Enter the difference.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "70", d: "100" }, { type: "text", val: " - " }, { type: "fraction", n: "2", d: "10" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.5 } ] } ] },
                                {
                                    instruction: "Figure A and Figure B represent bags of soil. The shaded parts show how much of each bag has been used. How many bags of soil have been used combined?",
                                    type: "visual_problem", models: [ { label: "Figure A", whole: 0, num: 1, den: 4, color: "#e74c3c" }, { label: "Figure B", whole: 0, num: 3, den: 5, color: "#f1c40f" } ],
                                    problems: [ { segments: [ { type: "text", val: "Total: " }, { type: "mixed_group", ans: 0.85 } ] } ]
                                }
                            ]
                        },
                        {
                            id: "m1-w2-thu", name: "Thu", title: "Module 1: Practice Set 9",
                            sections: [
                                { instruction: "Enter the sum.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "2", d: "10" }, { type: "text", val: " + " }, { type: "fraction", n: "65", d: "100" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.85 } ] } ] },
                                { instruction: "Enter the difference.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "4", d: "5" }, { type: "text", val: " - " }, { type: "fraction", n: "1", d: "3" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.4666 } ] } ] },
                                {
                                    instruction: [ { type: "text", val: "The distance Bob walked in the morning is plotted at point B. Bob walked " }, { type: "fraction", n: "1", d: "2" }, { type: "text", val: " mile in the afternoon. Enter the total distance Bob walked." } ],
                                    type: "number_line", min: 0, max: 1, step: 0.125, points: [{ val: 0.125, label: "B" }],
                                    problems: [ { segments: [ { type: "text", val: "Total: " }, { type: "fraction_group", ans: 0.625 } ] } ]
                                }
                            ]
                        },
                        {
                            id: "m1-w2-fri", name: "Fri", title: "Module 1: Quiz",
                            sections: [
                                { instruction: "Enter the difference.", type: "mixed_row", problems: [ { segments: [ { type: "fraction", n: "75", d: "100" }, { type: "text", val: " - " }, { type: "fraction", n: "3", d: "10" }, { type: "text", val: " = " }, { type: "fraction_group", ans: 0.45 } ] } ] },
                                {
                                    instruction: [ { type: "text", val: "Sam had " }, { type: "mixed", w: "4", n: "2", d: "3" }, { type: "text", val: " liters of juice. He has " }, { type: "mixed", w: "2", n: "1", d: "3" }, { type: "text", val: " liters left as shown below. Enter the fraction of juice he served." } ],
                                    type: "visual_problem", models: [{ label: "Juice Left", whole: 2, num: 1, den: 3, color: "#9b59b6" }],
                                    problems: [ { segments: [ { type: "text", val: "Served: " }, { type: "mixed_group", ans: 2.3333 } ] } ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};