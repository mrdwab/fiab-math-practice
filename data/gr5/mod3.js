// --- WEEK 1 HELPER HUB ---
const helperHubW1_Mod3 = {
    title: "★ Helper Hub: Area Models with Fractions",
    content: `
        <div style="font-size:16px; line-height: 1.5;">
            <p style="margin-top:0; margin-bottom:15px;">Finding the area of a rectangle with fractional sides is just like finding the area of a whole number! We can draw a grid to find the answer.</p>
            
            <div style="display:flex; gap:15px; justify-content: center; flex-wrap: wrap; text-align:center;">
                
                <div style="border:2px solid #e67e22; padding:20px; border-radius:10px; background:#fdf2e9; display: flex; flex-direction: column; align-items: center; min-width: 300px;">
                    <strong style="font-size:18px; color:#d35400; margin-bottom: 20px;">
                        <div class="fraction-wrap"><span class="frac-top">2</span><span class="frac-bottom">3</span></div> &times; <div class="fraction-wrap"><span class="frac-top">3</span><span class="frac-bottom">4</span></div> = ?
                    </strong>
                    
                    <svg width="250" height="200" viewBox="-40 -45 260 205" style="overflow: visible;">
                        <rect x="0" y="0" width="120" height="120" fill="#fff" stroke="#ccc" stroke-width="2" stroke-dasharray="4"/>
                        
                        <line x1="40" y1="0" x2="40" y2="120" stroke="#ccc" stroke-width="1" />
                        <line x1="80" y1="0" x2="80" y2="120" stroke="#ccc" stroke-width="1" />
                        <line x1="0" y1="30" x2="120" y2="30" stroke="#ccc" stroke-width="1" />
                        <line x1="0" y1="60" x2="120" y2="60" stroke="#ccc" stroke-width="1" />
                        <line x1="0" y1="90" x2="120" y2="90" stroke="#ccc" stroke-width="1" />

                        <rect x="0" y="0" width="80" height="90" fill="#e67e22" stroke="#d35400" stroke-width="3" fill-opacity="0.8"/>
                        
                        <line x1="40" y1="0" x2="40" y2="90" stroke="#d35400" stroke-width="2" />
                        <line x1="0" y1="30" x2="80" y2="30" stroke="#d35400" stroke-width="2" />
                        <line x1="0" y1="60" x2="80" y2="60" stroke="#d35400" stroke-width="2" />

                        <text x="40" y="-28" font-family="Fredoka, sans-serif" font-size="14" font-weight="bold" fill="#d35400" text-anchor="middle">2</text>
                        <line x1="32" y1="-23" x2="48" y2="-23" stroke="#d35400" stroke-width="1.5"/>
                        <text x="40" y="-11" font-family="Fredoka, sans-serif" font-size="14" font-weight="bold" fill="#d35400" text-anchor="middle">3</text>
                        
                        <text x="-28" y="42" font-family="Fredoka, sans-serif" font-size="14" font-weight="bold" fill="#d35400" text-anchor="middle">3</text>
                        <line x1="-36" y1="47" x2="-20" y2="47" stroke="#d35400" stroke-width="1.5"/>
                        <text x="-28" y="59" font-family="Fredoka, sans-serif" font-size="14" font-weight="bold" fill="#d35400" text-anchor="middle">4</text>
                    </svg>

                    <div style="background: #fff; padding: 10px; border-radius: 8px; border: 2px solid #fad7a1; margin-top: 15px; width: 100%;">
                        Count the shaded boxes! There are <strong>6</strong> shaded boxes out of <strong>12</strong> total boxes in the whole square.
                        <div style="font-size: 22px; font-weight: bold; margin-top: 10px; color: #d35400;">
                            <div class="fraction-wrap"><span class="frac-top">2</span><span class="frac-bottom">3</span></div> &times; <div class="fraction-wrap"><span class="frac-top">3</span><span class="frac-bottom">4</span></div> = <div class="fraction-wrap"><span class="frac-top">6</span><span class="frac-bottom">12</span></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    `
};

// --- WEEK 2 HELPER HUB ---
const helperHubW2_Mod3 = {
    title: "★ Helper Hub: The Scaling Secret!",
    content: `
        <div style="font-size:16px; line-height: 1.5;">
            <p style="margin-top:0; margin-bottom:15px;">Multiplication doesn't always make numbers bigger! Look at the fraction you are multiplying by to see if the product shrinks, stays the same, or grows.</p>
            
            <div style="display:flex; gap:15px; justify-content: center; flex-wrap: wrap; text-align:center;">
                
                <div style="border:2px solid #e74c3c; padding:15px; border-radius:10px; background:#fdedec; flex: 1; min-width: 200px;">
                    <strong style="font-size:16px; color:#c0392b;">Fraction &lt; 1 (Shrinks)</strong><br>
                    <div style="margin: 10px 0; font-size: 20px; font-weight: bold; color: #333; display: flex; align-items: center; justify-content: center; gap: 5px;">
                        8 &times; <div class="fraction-wrap"><span class="frac-top">1</span><span class="frac-bottom">2</span></div> = 4
                    </div>
                    <svg width="180" height="50" viewBox="0 0 180 50">
                        <rect x="0" y="20" width="10" height="10" fill="#e74c3c" stroke="#000"/><rect x="12" y="20" width="10" height="10" fill="#e74c3c" stroke="#000"/><rect x="24" y="20" width="10" height="10" fill="#e74c3c" stroke="#000"/><rect x="36" y="20" width="10" height="10" fill="#e74c3c" stroke="#000"/>
                        <rect x="48" y="20" width="10" height="10" fill="#e74c3c" stroke="#000"/><rect x="60" y="20" width="10" height="10" fill="#e74c3c" stroke="#000"/><rect x="72" y="20" width="10" height="10" fill="#e74c3c" stroke="#000"/><rect x="84" y="20" width="10" height="10" fill="#e74c3c" stroke="#000"/>
                        <polygon points="105,20 120,25 105,30" fill="#333"/>
                        <line x1="95" y1="25" x2="115" y2="25" stroke="#333" stroke-width="2"/>
                        <rect x="130" y="20" width="10" height="10" fill="#c0392b" stroke="#000"/><rect x="142" y="20" width="10" height="10" fill="#c0392b" stroke="#000"/><rect x="154" y="20" width="10" height="10" fill="#c0392b" stroke="#000"/><rect x="166" y="20" width="10" height="10" fill="#c0392b" stroke="#000"/>
                    </svg>
                    <div style="font-size: 13px; color: #555; margin-top: 5px;">Since <div class="fraction-wrap" style="font-size:11px;"><span class="frac-top">1</span><span class="frac-bottom">2</span></div> is less than a whole, the answer shrinks!</div>
                </div>

                <div style="border:2px solid #3498db; padding:15px; border-radius:10px; background:#ebf5fb; flex: 1; min-width: 200px;">
                    <strong style="font-size:16px; color:#2980b9;">Fraction = 1 (Stays Same)</strong><br>
                    <div style="margin: 10px 0; font-size: 20px; font-weight: bold; color: #333; display: flex; align-items: center; justify-content: center; gap: 5px;">
                        8 &times; <div class="fraction-wrap"><span class="frac-top">2</span><span class="frac-bottom">2</span></div> = 8
                    </div>
                    <svg width="180" height="50" viewBox="0 0 180 50">
                        <rect x="0" y="20" width="10" height="10" fill="#3498db" stroke="#000"/><rect x="12" y="20" width="10" height="10" fill="#3498db" stroke="#000"/><rect x="24" y="20" width="10" height="10" fill="#3498db" stroke="#000"/><rect x="36" y="20" width="10" height="10" fill="#3498db" stroke="#000"/>
                        <rect x="48" y="20" width="10" height="10" fill="#3498db" stroke="#000"/><rect x="60" y="20" width="10" height="10" fill="#3498db" stroke="#000"/><rect x="72" y="20" width="10" height="10" fill="#3498db" stroke="#000"/><rect x="84" y="20" width="10" height="10" fill="#3498db" stroke="#000"/>
                        <polygon points="105,20 120,25 105,30" fill="#333"/>
                        <line x1="95" y1="25" x2="115" y2="25" stroke="#333" stroke-width="2"/>
                        <g transform="translate(130,0)">
                            <rect x="0" y="14" width="10" height="10" fill="#2980b9" stroke="#000"/><rect x="12" y="14" width="10" height="10" fill="#2980b9" stroke="#000"/><rect x="24" y="14" width="10" height="10" fill="#2980b9" stroke="#000"/><rect x="36" y="14" width="10" height="10" fill="#2980b9" stroke="#000"/>
                            <rect x="0" y="26" width="10" height="10" fill="#2980b9" stroke="#000"/><rect x="12" y="26" width="10" height="10" fill="#2980b9" stroke="#000"/><rect x="24" y="26" width="10" height="10" fill="#2980b9" stroke="#000"/><rect x="36" y="26" width="10" height="10" fill="#2980b9" stroke="#000"/>
                        </g>
                    </svg>
                    <div style="font-size: 13px; color: #555; margin-top: 5px;">Since <div class="fraction-wrap" style="font-size:11px;"><span class="frac-top">2</span><span class="frac-bottom">2</span></div> is exactly one whole, the answer is the same.</div>
                </div>
                
                <div style="border:2px solid #27ae60; padding:15px; border-radius:10px; background:#eafaf1; flex: 1; min-width: 200px;">
                    <strong style="font-size:16px; color:#1e8449;">Fraction &gt; 1 (Grows!)</strong><br>
                    <div style="margin: 10px 0; font-size: 20px; font-weight: bold; color: #333; display: flex; align-items: center; justify-content: center; gap: 5px;">
                        8 &times; <div class="fraction-wrap"><span class="frac-top">3</span><span class="frac-bottom">2</span></div> = 12
                    </div>
                    <svg width="220" height="50" viewBox="0 0 220 50">
                        <rect x="0" y="20" width="10" height="10" fill="#27ae60" stroke="#000"/><rect x="12" y="20" width="10" height="10" fill="#27ae60" stroke="#000"/><rect x="24" y="20" width="10" height="10" fill="#27ae60" stroke="#000"/><rect x="36" y="20" width="10" height="10" fill="#27ae60" stroke="#000"/>
                        <rect x="48" y="20" width="10" height="10" fill="#27ae60" stroke="#000"/><rect x="60" y="20" width="10" height="10" fill="#27ae60" stroke="#000"/><rect x="72" y="20" width="10" height="10" fill="#27ae60" stroke="#000"/><rect x="84" y="20" width="10" height="10" fill="#27ae60" stroke="#000"/>
                        <polygon points="105,20 120,25 105,30" fill="#333"/>
                        <line x1="95" y1="25" x2="115" y2="25" stroke="#333" stroke-width="2"/>
                        <g transform="translate(130,0)">
                            <rect x="0" y="8" width="10" height="10" fill="#1e8449" stroke="#000"/><rect x="12" y="8" width="10" height="10" fill="#1e8449" stroke="#000"/><rect x="24" y="8" width="10" height="10" fill="#1e8449" stroke="#000"/><rect x="36" y="8" width="10" height="10" fill="#1e8449" stroke="#000"/>
                            <rect x="0" y="20" width="10" height="10" fill="#1e8449" stroke="#000"/><rect x="12" y="20" width="10" height="10" fill="#1e8449" stroke="#000"/><rect x="24" y="20" width="10" height="10" fill="#1e8449" stroke="#000"/><rect x="36" y="20" width="10" height="10" fill="#1e8449" stroke="#000"/>
                            <rect x="0" y="32" width="10" height="10" fill="#1e8449" stroke="#000"/><rect x="12" y="32" width="10" height="10" fill="#1e8449" stroke="#000"/><rect x="24" y="32" width="10" height="10" fill="#1e8449" stroke="#000"/><rect x="36" y="32" width="10" height="10" fill="#1e8449" stroke="#000"/>
                        </g>
                    </svg>
                    <div style="font-size: 13px; color: #555; margin-top: 5px;">Since <div class="fraction-wrap" style="font-size:11px;"><span class="frac-top">3</span><span class="frac-bottom">2</span></div> is more than a whole, the answer grows!</div>
                </div>

            </div>
        </div>
    `
};


const module3 = {
    id: "mod-3",
    name: "Multiply & Divide Fractions II",
    versions: [
        // ==========================================
        // VERSION A (Baseline)
        // ==========================================
        {
            id: "A",
            weeks: [
                {
                    weekNum: 1,
                    helperHub: helperHubW1_Mod3,
                    days: [
                        {
                            id: "m3-w1-mon-a", name: "Mon", title: "Division: Whole ÷ Unit Fraction",
                            sections: [
                                {
                                    instruction: "Enter the quotient.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'text', val: '4 ÷ ' }, { type: 'fraction', n:'1', d:'3' }, { type: 'text', val: ' = ' }, { type: 'whole_number', ans: 12 }] } ]
                                },
                                {
                                    instruction: [ {type:'text', val:"Tracey divides 5 meters of ribbon into equal pieces. Each piece is "}, {type:'fraction', n:'1', d:'3'}, {type:'text', val:" meter long. How many pieces can she make?"} ],
                                    type: "mixed_row", problems: [ { segments: [{ type: 'text', val: 'Pieces: '}, { type: 'whole_number', ans: 15 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m3-w1-tue-a", name: "Tue", title: "Area with Fractional Sides",
                            sections: [
                                {
                                    instruction: "Find the area of the rectangle.",
                                    type: "visual_problem",
                                    models: [{ type: 'rectangle', wLabel: "2/3 ft", hLabel: "3/4 ft", color: "#e67e22" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Area: ' }, { type: 'fraction_group', ans: 0.5 }, { type: 'text', val: ' sq ft' }] } ]
                                },
                                {
                                    instruction: "Enter the product.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'fraction', n:'5', d:'6' }, { type: 'text', val: ' x ' }, { type: 'fraction', n:'1', d:'2' }, { type: 'text', val: ' = ' }, { type: 'fraction_group', ans: 0.4166 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m3-w1-wed-a", name: "Wed", title: "Division: Unit Fraction ÷ Whole",
                            sections: [
                                {
                                    instruction: "Enter the quotient.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'fraction', n:'1', d:'4' }, { type: 'text', val: ' ÷ 2 = ' }, { type: 'fraction_group', ans: 0.125 }] } ]
                                },
                                {
                                    instruction: [ {type:'text', val:"Fred has "}, {type:'fraction', n:'1', d:'6'}, {type:'text', val:" of a bucket of paint. He divides it equally into 4 jars. What fraction of the whole bucket is in each jar?"} ],
                                    type: "mixed_row", problems: [ { segments: [{ type: 'text', val: 'Fraction: '}, { type: 'fraction_group', ans: 0.0416 }] } ] 
                                }
                            ]
                        },
                        {
                            id: "m3-w1-thu-a", name: "Thu", title: "Area with Mixed Numbers",
                            sections: [
                                {
                                    instruction: "Find the area of the rectangle.",
                                    type: "visual_problem",
                                    models: [{ type: 'rectangle', wLabel: "1 1/2 in", hLabel: "3/4 in", color: "#3498db" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Area: ' }, { type: 'mixed_group', ans: 1.125 }, { type: 'text', val: ' sq in' }] } ]
                                },
                                {
                                    instruction: [ {type:'text', val:"A rug is "}, {type:'mixed', w:'2', n:'1', d:'2'}, {type:'text', val:" meters long and "}, {type:'fraction', n:'1', d:'2'}, {type:'text', val:" meter wide. What is the area of the rug?"} ],
                                    type: "mixed_row", problems: [ { segments: [{ type: 'text', val: 'Area: '}, { type: 'mixed_group', ans: 1.25 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m3-w1-fri-a", name: "Fri", title: "Weekly Quiz",
                            sections: [
                                {
                                    instruction: "Enter the quotient.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'text', val: '6 ÷ ' }, { type: 'fraction', n:'1', d:'5' }, { type: 'text', val: ' = ' }, { type: 'whole_number', ans: 30 }] } ]
                                },
                                {
                                    instruction: "Find the area of the rectangle.",
                                    type: "visual_problem",
                                    models: [{ type: 'rectangle', wLabel: "5/8 yd", hLabel: "2/3 yd", color: "#9b59b6" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Area: ' }, { type: 'fraction_group', ans: 0.4166 }, { type: 'text', val: ' sq yd' }] } ]
                                }
                            ]
                        }
                    ]
                },
                {
                    weekNum: 2,
                    helperHub: helperHubW2_Mod3,
                    days: [
                        {
                            id: "m3-w2-mon-a", name: "Mon", title: "Scaling: Greater or Less",
                            sections: [
                                {
                                    instruction: "Select all expressions where the product is greater than 8.",
                                    type: "multiple_choice",
                                    select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'8 x '}, {type:'fraction', n:'1', d:'2'}], correct: false },
                                        { id: 'opt2', content: [{type:'text', val:'8 x '}, {type:'fraction', n:'3', d:'2'}], correct: true },
                                        { id: 'opt3', content: [{type:'text', val:'8 x '}, {type:'fraction', n:'4', d:'4'}], correct: false },
                                        { id: 'opt4', content: [{type:'text', val:'8 x '}, {type:'fraction', n:'8', d:'5'}], correct: true },
                                        { id: 'opt5', content: [{type:'text', val:'8 x '}, {type:'fraction', n:'2', d:'3'}], correct: false }
                                    ]
                                },
                                {
                                    instruction: "Select the expression where the product is less than 5.",
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'5 x '}, {type:'fraction', n:'5', d:'4'}], correct: false },
                                        { id: 'opt2', content: [{type:'text', val:'5 x '}, {type:'fraction', n:'1', d:'1'}], correct: false },
                                        { id: 'opt3', content: [{type:'text', val:'5 x '}, {type:'fraction', n:'3', d:'4'}], correct: true }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m3-w2-tue-a", name: "Tue", title: "Scaling: Box Comparisons",
                            sections: [
                                {
                                    instruction: "Select the fraction that makes the comparison true: ",
                                    instructionMath: [{type:'text', val:'1 x '}, {type:'box'}, {type:'text', val:' > 1'}],
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [{type:'fraction', n:'1', d:'4'}], correct: false },
                                        { id: 'opt2', content: [{type:'fraction', n:'4', d:'4'}], correct: false },
                                        { id: 'opt3', content: [{type:'fraction', n:'5', d:'4'}], correct: true }
                                    ]
                                },
                                {
                                    instruction: "Select the fraction that makes the comparison true: ",
                                    instructionMath: [{type:'text', val:'1 x '}, {type:'box'}, {type:'text', val:' < 1'}],
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [{type:'fraction', n:'3', d:'2'}], correct: false },
                                        { id: 'opt2', content: [{type:'fraction', n:'7', d:'8'}], correct: true },
                                        { id: 'opt3', content: [{type:'fraction', n:'8', d:'8'}], correct: false }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m3-w2-wed-a", name: "Wed", title: "Mixed Review (Area & Division)",
                            sections: [
                                {
                                    instruction: "Find the area of the rectangle.",
                                    type: "visual_problem",
                                    models: [{ type: 'rectangle', wLabel: "3/4 m", hLabel: "1/5 m", color: "#e67e22" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Area: ' }, { type: 'fraction_group', ans: 0.15 }, { type: 'text', val: ' sq m' }] } ]
                                },
                                {
                                    instruction: "Enter the quotient.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'text', val: '9 ÷ ' }, { type: 'fraction', n:'1', d:'4' }, { type: 'text', val: ' = ' }, { type: 'whole_number', ans: 36 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m3-w2-thu-a", name: "Thu", title: "Mixed Review (Scaling & Area)",
                            sections: [
                                {
                                    instruction: "Select all expressions where the product is less than 5.",
                                    type: "multiple_choice",
                                    select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'5 x '}, {type:'fraction', n:'1', d:'4'}], correct: true },
                                        { id: 'opt2', content: [{type:'text', val:'5 x '}, {type:'fraction', n:'5', d:'4'}], correct: false },
                                        { id: 'opt3', content: [{type:'text', val:'5 x '}, {type:'fraction', n:'3', d:'8'}], correct: true }
                                    ]
                                },
                                {
                                    instruction: [ {type:'text', val:"A photo is "}, {type:'fraction', n:'2', d:'3'}, {type:'text', val:" ft wide and "}, {type:'fraction', n:'5', d:'6'}, {type:'text', val:" ft tall. What is the area?"} ],
                                    type: "mixed_row", problems: [ { segments: [{ type: 'text', val: 'Area: '}, { type: 'fraction_group', ans: 0.5555 }] } ] 
                                }
                            ]
                        },
                        {
                            id: "m3-w2-fri-a", name: "Fri", title: "Module Quiz",
                            sections: [
                                {
                                    instruction: "Select the fraction that makes the comparison true: ",
                                    instructionMath: [{type:'text', val:'1 x '}, {type:'box'}, {type:'text', val:' > 1'}],
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [{type:'fraction', n:'2', d:'3'}], correct: false },
                                        { id: 'opt2', content: [{type:'fraction', n:'3', d:'3'}], correct: false },
                                        { id: 'opt3', content: [{type:'fraction', n:'4', d:'3'}], correct: true }
                                    ]
                                },
                                {
                                    instruction: "Find the area of the rectangle.",
                                    type: "visual_problem",
                                    models: [{ type: 'rectangle', wLabel: "1/2 in", hLabel: "4/5 in", color: "#e74c3c" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Area: ' }, { type: 'fraction_group', ans: 0.4 }, { type: 'text', val: ' sq in' }] } ]
                                },
                                {
                                    instruction: "Enter the quotient.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'fraction', n:'1', d:'8' }, { type: 'text', val: ' ÷ 4 = ' }, { type: 'fraction_group', ans: 0.03125 }] } ]
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
                    helperHub: helperHubW1_Mod3,
                    days: [
                        {
                            id: "m3-w1-mon-b", name: "Mon", title: "Division: Whole ÷ Unit Fraction",
                            sections: [
                                {
                                    instruction: "Enter the quotient.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'text', val: '5 ÷ ' }, { type: 'fraction', n:'1', d:'4' }, { type: 'text', val: ' = ' }, { type: 'whole_number', ans: 20 }] } ]
                                },
                                {
                                    instruction: [ {type:'text', val:"Tracey divides 4 meters of ribbon into equal pieces. Each piece is "}, {type:'fraction', n:'1', d:'3'}, {type:'text', val:" meter long. How many pieces can she make?"} ],
                                    type: "mixed_row", problems: [ { segments: [{ type: 'text', val: 'Pieces: '}, { type: 'whole_number', ans: 12 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m3-w1-tue-b", name: "Tue", title: "Area with Fractional Sides",
                            sections: [
                                {
                                    instruction: "Find the area of the rectangle.",
                                    type: "visual_problem",
                                    models: [{ type: 'rectangle', wLabel: "3/4 ft", hLabel: "4/5 ft", color: "#e67e22" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Area: ' }, { type: 'fraction_group', ans: 0.6 }, { type: 'text', val: ' sq ft' }] } ]
                                },
                                {
                                    instruction: "Enter the product.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'fraction', n:'4', d:'5' }, { type: 'text', val: ' x ' }, { type: 'fraction', n:'1', d:'3' }, { type: 'text', val: ' = ' }, { type: 'fraction_group', ans: 0.2666 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m3-w1-wed-b", name: "Wed", title: "Division: Unit Fraction ÷ Whole",
                            sections: [
                                {
                                    instruction: "Enter the quotient.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'fraction', n:'1', d:'5' }, { type: 'text', val: ' ÷ 3 = ' }, { type: 'fraction_group', ans: 0.0666 }] } ]
                                },
                                {
                                    instruction: [ {type:'text', val:"Fred has "}, {type:'fraction', n:'1', d:'4'}, {type:'text', val:" of a bucket of paint. He divides it equally into 3 jars. What fraction of the whole bucket is in each jar?"} ],
                                    type: "mixed_row", problems: [ { segments: [{ type: 'text', val: 'Fraction: '}, { type: 'fraction_group', ans: 0.0833 }] } ] 
                                }
                            ]
                        },
                        {
                            id: "m3-w1-thu-b", name: "Thu", title: "Area with Mixed Numbers",
                            sections: [
                                {
                                    instruction: "Find the area of the rectangle.",
                                    type: "visual_problem",
                                    models: [{ type: 'rectangle', wLabel: "2 1/2 in", hLabel: "1/4 in", color: "#3498db" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Area: ' }, { type: 'mixed_group', ans: 0.625 }, { type: 'text', val: ' sq in' }] } ]
                                },
                                {
                                    instruction: [ {type:'text', val:"A rug is "}, {type:'mixed', w:'1', n:'1', d:'2'}, {type:'text', val:" meters long and "}, {type:'fraction', n:'3', d:'4'}, {type:'text', val:" meter wide. What is the area of the rug?"} ],
                                    type: "mixed_row", problems: [ { segments: [{ type: 'text', val: 'Area: '}, { type: 'mixed_group', ans: 1.125 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m3-w1-fri-b", name: "Fri", title: "Weekly Quiz",
                            sections: [
                                {
                                    instruction: "Enter the quotient.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'text', val: '5 ÷ ' }, { type: 'fraction', n:'1', d:'3' }, { type: 'text', val: ' = ' }, { type: 'whole_number', ans: 15 }] } ]
                                },
                                {
                                    instruction: "Find the area of the rectangle.",
                                    type: "visual_problem",
                                    models: [{ type: 'rectangle', wLabel: "3/5 yd", hLabel: "1/2 yd", color: "#9b59b6" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Area: ' }, { type: 'fraction_group', ans: 0.3 }, { type: 'text', val: ' sq yd' }] } ]
                                }
                            ]
                        }
                    ]
                },
                {
                    weekNum: 2,
                    helperHub: helperHubW2_Mod3,
                    days: [
                        {
                            id: "m3-w2-mon-b", name: "Mon", title: "Scaling: Greater or Less",
                            sections: [
                                {
                                    instruction: "Select all expressions where the product is greater than 6.",
                                    type: "multiple_choice",
                                    select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'6 x '}, {type:'fraction', n:'1', d:'2'}], correct: false },
                                        { id: 'opt2', content: [{type:'text', val:'6 x '}, {type:'fraction', n:'5', d:'4'}], correct: true },
                                        { id: 'opt3', content: [{type:'text', val:'6 x '}, {type:'fraction', n:'3', d:'3'}], correct: false },
                                        { id: 'opt4', content: [{type:'text', val:'6 x '}, {type:'fraction', n:'7', d:'5'}], correct: true },
                                        { id: 'opt5', content: [{type:'text', val:'6 x '}, {type:'fraction', n:'1', d:'3'}], correct: false }
                                    ]
                                },
                                {
                                    instruction: "Select the expression where the product is less than 4.",
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'4 x '}, {type:'fraction', n:'3', d:'2'}], correct: false },
                                        { id: 'opt2', content: [{type:'text', val:'4 x '}, {type:'fraction', n:'4', d:'4'}], correct: false },
                                        { id: 'opt3', content: [{type:'text', val:'4 x '}, {type:'fraction', n:'1', d:'4'}], correct: true }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m3-w2-tue-b", name: "Tue", title: "Scaling: Box Comparisons",
                            sections: [
                                {
                                    instruction: "Select the fraction that makes the comparison true: ",
                                    instructionMath: [{type:'text', val:'1 x '}, {type:'box'}, {type:'text', val:' > 1'}],
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [{type:'fraction', n:'2', d:'5'}], correct: false },
                                        { id: 'opt2', content: [{type:'fraction', n:'5', d:'5'}], correct: false },
                                        { id: 'opt3', content: [{type:'fraction', n:'6', d:'5'}], correct: true }
                                    ]
                                },
                                {
                                    instruction: "Select the fraction that makes the comparison true: ",
                                    instructionMath: [{type:'text', val:'1 x '}, {type:'box'}, {type:'text', val:' < 1'}],
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [{type:'fraction', n:'4', d:'3'}], correct: false },
                                        { id: 'opt2', content: [{type:'fraction', n:'5', d:'6'}], correct: true },
                                        { id: 'opt3', content: [{type:'fraction', n:'6', d:'6'}], correct: false }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m3-w2-wed-b", name: "Wed", title: "Mixed Review (Area & Division)",
                            sections: [
                                {
                                    instruction: "Find the area of the rectangle.",
                                    type: "visual_problem",
                                    models: [{ type: 'rectangle', wLabel: "4/5 m", hLabel: "2/3 m", color: "#e67e22" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Area: ' }, { type: 'fraction_group', ans: 0.5333 }, { type: 'text', val: ' sq m' }] } ]
                                },
                                {
                                    instruction: "Enter the quotient.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'text', val: '7 ÷ ' }, { type: 'fraction', n:'1', d:'2' }, { type: 'text', val: ' = ' }, { type: 'whole_number', ans: 14 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m3-w2-thu-b", name: "Thu", title: "Mixed Review (Scaling & Area)",
                            sections: [
                                {
                                    instruction: "Select all expressions where the product is less than 4.",
                                    type: "multiple_choice",
                                    select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'4 x '}, {type:'fraction', n:'1', d:'3'}], correct: true },
                                        { id: 'opt2', content: [{type:'text', val:'4 x '}, {type:'fraction', n:'4', d:'3'}], correct: false },
                                        { id: 'opt3', content: [{type:'text', val:'4 x '}, {type:'fraction', n:'5', d:'8'}], correct: true }
                                    ]
                                },
                                {
                                    instruction: [ {type:'text', val:"A photo is "}, {type:'fraction', n:'3', d:'4'}, {type:'text', val:" ft wide and "}, {type:'fraction', n:'4', d:'5'}, {type:'text', val:" ft tall. What is the area?"} ],
                                    type: "mixed_row", problems: [ { segments: [{ type: 'text', val: 'Area: '}, { type: 'fraction_group', ans: 0.6 }] } ] 
                                }
                            ]
                        },
                        {
                            id: "m3-w2-fri-b", name: "Fri", title: "Module Quiz",
                            sections: [
                                {
                                    instruction: "Select the fraction that makes the comparison true: ",
                                    instructionMath: [{type:'text', val:'1 x '}, {type:'box'}, {type:'text', val:' > 1'}],
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [{type:'fraction', n:'3', d:'4'}], correct: false },
                                        { id: 'opt2', content: [{type:'fraction', n:'4', d:'4'}], correct: false },
                                        { id: 'opt3', content: [{type:'fraction', n:'5', d:'4'}], correct: true }
                                    ]
                                },
                                {
                                    instruction: "Find the area of the rectangle.",
                                    type: "visual_problem",
                                    models: [{ type: 'rectangle', wLabel: "2/3 in", hLabel: "3/5 in", color: "#e74c3c" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Area: ' }, { type: 'fraction_group', ans: 0.4 }, { type: 'text', val: ' sq in' }] } ]
                                },
                                {
                                    instruction: "Enter the quotient.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'fraction', n:'1', d:'5' }, { type: 'text', val: ' ÷ 4 = ' }, { type: 'fraction_group', ans: 0.05 }] } ]
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
                    helperHub: helperHubW1_Mod3,
                    days: [
                        {
                            id: "m3-w1-mon-c", name: "Mon", title: "Division: Whole ÷ Unit Fraction",
                            sections: [
                                {
                                    instruction: "Enter the quotient.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'text', val: '3 ÷ ' }, { type: 'fraction', n:'1', d:'6' }, { type: 'text', val: ' = ' }, { type: 'whole_number', ans: 18 }] } ]
                                },
                                {
                                    instruction: [ {type:'text', val:"Tracey divides 2 meters of ribbon into equal pieces. Each piece is "}, {type:'fraction', n:'1', d:'5'}, {type:'text', val:" meter long. How many pieces can she make?"} ],
                                    type: "mixed_row", problems: [ { segments: [{ type: 'text', val: 'Pieces: '}, { type: 'whole_number', ans: 10 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m3-w1-tue-c", name: "Tue", title: "Area with Fractional Sides",
                            sections: [
                                {
                                    instruction: "Find the area of the rectangle.",
                                    type: "visual_problem",
                                    models: [{ type: 'rectangle', wLabel: "1/2 ft", hLabel: "3/5 ft", color: "#e67e22" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Area: ' }, { type: 'fraction_group', ans: 0.3 }, { type: 'text', val: ' sq ft' }] } ]
                                },
                                {
                                    instruction: "Enter the product.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'fraction', n:'2', d:'3' }, { type: 'text', val: ' x ' }, { type: 'fraction', n:'5', d:'8' }, { type: 'text', val: ' = ' }, { type: 'fraction_group', ans: 0.4166 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m3-w1-wed-c", name: "Wed", title: "Division: Unit Fraction ÷ Whole",
                            sections: [
                                {
                                    instruction: "Enter the quotient.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'fraction', n:'1', d:'3' }, { type: 'text', val: ' ÷ 4 = ' }, { type: 'fraction_group', ans: 0.0833 }] } ]
                                },
                                {
                                    instruction: [ {type:'text', val:"Fred has "}, {type:'fraction', n:'1', d:'5'}, {type:'text', val:" of a bucket of paint. He divides it equally into 2 jars. What fraction of the whole bucket is in each jar?"} ],
                                    type: "mixed_row", problems: [ { segments: [{ type: 'text', val: 'Fraction: '}, { type: 'fraction_group', ans: 0.1 }] } ] 
                                }
                            ]
                        },
                        {
                            id: "m3-w1-thu-c", name: "Thu", title: "Area with Mixed Numbers",
                            sections: [
                                {
                                    instruction: "Find the area of the rectangle.",
                                    type: "visual_problem",
                                    models: [{ type: 'rectangle', wLabel: "2 1/4 in", hLabel: "1/2 in", color: "#3498db" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Area: ' }, { type: 'mixed_group', ans: 1.125 }, { type: 'text', val: ' sq in' }] } ]
                                },
                                {
                                    instruction: [ {type:'text', val:"A rug is "}, {type:'mixed', w:'3', n:'1', d:'2'}, {type:'text', val:" meters long and "}, {type:'fraction', n:'1', d:'3'}, {type:'text', val:" meter wide. What is the area of the rug?"} ],
                                    type: "mixed_row", problems: [ { segments: [{ type: 'text', val: 'Area: '}, { type: 'mixed_group', ans: 1.1666 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m3-w1-fri-c", name: "Fri", title: "Weekly Quiz",
                            sections: [
                                {
                                    instruction: "Enter the quotient.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'text', val: '7 ÷ ' }, { type: 'fraction', n:'1', d:'2' }, { type: 'text', val: ' = ' }, { type: 'whole_number', ans: 14 }] } ]
                                },
                                {
                                    instruction: "Find the area of the rectangle.",
                                    type: "visual_problem",
                                    models: [{ type: 'rectangle', wLabel: "3/8 yd", hLabel: "1/3 yd", color: "#9b59b6" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Area: ' }, { type: 'fraction_group', ans: 0.125 }, { type: 'text', val: ' sq yd' }] } ]
                                }
                            ]
                        }
                    ]
                },
                {
                    weekNum: 2,
                    helperHub: helperHubW2_Mod3,
                    days: [
                        {
                            id: "m3-w2-mon-c", name: "Mon", title: "Scaling: Greater or Less",
                            sections: [
                                {
                                    instruction: "Select all expressions where the product is greater than 5.",
                                    type: "multiple_choice",
                                    select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'5 x '}, {type:'fraction', n:'1', d:'4'}], correct: false },
                                        { id: 'opt2', content: [{type:'text', val:'5 x '}, {type:'fraction', n:'3', d:'2'}], correct: true },
                                        { id: 'opt3', content: [{type:'text', val:'5 x '}, {type:'fraction', n:'5', d:'5'}], correct: false },
                                        { id: 'opt4', content: [{type:'text', val:'5 x '}, {type:'fraction', n:'6', d:'5'}], correct: true },
                                        { id: 'opt5', content: [{type:'text', val:'5 x '}, {type:'fraction', n:'1', d:'2'}], correct: false }
                                    ]
                                },
                                {
                                    instruction: "Select the expression where the product is less than 9.",
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'9 x '}, {type:'fraction', n:'4', d:'3'}], correct: false },
                                        { id: 'opt2', content: [{type:'text', val:'9 x '}, {type:'fraction', n:'8', d:'8'}], correct: false },
                                        { id: 'opt3', content: [{type:'text', val:'9 x '}, {type:'fraction', n:'5', d:'6'}], correct: true }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m3-w2-tue-c", name: "Tue", title: "Scaling: Box Comparisons",
                            sections: [
                                {
                                    instruction: "Select the fraction that makes the comparison true: ",
                                    instructionMath: [{type:'text', val:'1 x '}, {type:'box'}, {type:'text', val:' > 1'}],
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [{type:'fraction', n:'3', d:'8'}], correct: false },
                                        { id: 'opt2', content: [{type:'fraction', n:'8', d:'8'}], correct: false },
                                        { id: 'opt3', content: [{type:'fraction', n:'9', d:'8'}], correct: true }
                                    ]
                                },
                                {
                                    instruction: "Select the fraction that makes the comparison true: ",
                                    instructionMath: [{type:'text', val:'1 x '}, {type:'box'}, {type:'text', val:' < 1'}],
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [{type:'fraction', n:'6', d:'5'}], correct: false },
                                        { id: 'opt2', content: [{type:'fraction', n:'3', d:'4'}], correct: true },
                                        { id: 'opt3', content: [{type:'fraction', n:'4', d:'4'}], correct: false }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m3-w2-wed-c", name: "Wed", title: "Mixed Review (Area & Division)",
                            sections: [
                                {
                                    instruction: "Find the area of the rectangle.",
                                    type: "visual_problem",
                                    models: [{ type: 'rectangle', wLabel: "2/5 m", hLabel: "1/4 m", color: "#e67e22" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Area: ' }, { type: 'fraction_group', ans: 0.1 }, { type: 'text', val: ' sq m' }] } ]
                                },
                                {
                                    instruction: "Enter the quotient.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'text', val: '8 ÷ ' }, { type: 'fraction', n:'1', d:'3' }, { type: 'text', val: ' = ' }, { type: 'whole_number', ans: 24 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m3-w2-thu-c", name: "Thu", title: "Mixed Review (Scaling & Area)",
                            sections: [
                                {
                                    instruction: "Select all expressions where the product is less than 6.",
                                    type: "multiple_choice",
                                    select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'6 x '}, {type:'fraction', n:'2', d:'3'}], correct: true },
                                        { id: 'opt2', content: [{type:'text', val:'6 x '}, {type:'fraction', n:'4', d:'3'}], correct: false },
                                        { id: 'opt3', content: [{type:'text', val:'6 x '}, {type:'fraction', n:'1', d:'6'}], correct: true }
                                    ]
                                },
                                {
                                    instruction: [ {type:'text', val:"A photo is "}, {type:'fraction', n:'1', d:'2'}, {type:'text', val:" ft wide and "}, {type:'fraction', n:'7', d:'8'}, {type:'text', val:" ft tall. What is the area?"} ],
                                    type: "mixed_row", problems: [ { segments: [{ type: 'text', val: 'Area: '}, { type: 'fraction_group', ans: 0.4375 }] } ] 
                                }
                            ]
                        },
                        {
                            id: "m3-w2-fri-c", name: "Fri", title: "Module Quiz",
                            sections: [
                                {
                                    instruction: "Select the fraction that makes the comparison true: ",
                                    instructionMath: [{type:'text', val:'1 x '}, {type:'box'}, {type:'text', val:' > 1'}],
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [{type:'fraction', n:'1', d:'5'}], correct: false },
                                        { id: 'opt2', content: [{type:'fraction', n:'5', d:'5'}], correct: false },
                                        { id: 'opt3', content: [{type:'fraction', n:'7', d:'5'}], correct: true }
                                    ]
                                },
                                {
                                    instruction: "Find the area of the rectangle.",
                                    type: "visual_problem",
                                    models: [{ type: 'rectangle', wLabel: "3/4 in", hLabel: "2/3 in", color: "#e74c3c" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Area: ' }, { type: 'fraction_group', ans: 0.5 }, { type: 'text', val: ' sq in' }] } ]
                                },
                                {
                                    instruction: "Enter the quotient.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'fraction', n:'1', d:'4' }, { type: 'text', val: ' ÷ 5 = ' }, { type: 'fraction_group', ans: 0.05 }] } ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};