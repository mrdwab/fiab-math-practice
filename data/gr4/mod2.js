// --- MODULE 2 DATA ---
const module2 = {
    id: "mod-2",
    name: "Fractions & Decimal Notation",
    
    helperHubs: {
        week1: {
            title: "★ Helper Hub: Decimals on the Number Line",
            content: `
                <div style="font-size:16px; line-height: 1.5;">
                    <p style="margin-top:0; margin-bottom:10px;">Decimals are just another way to write fractions! Think of a whole number (1) like a <strong>Dollar</strong>.</p>
                    
                    <div style="background:#fff; border:2px solid #ccc; border-radius:10px; padding:15px; text-align:center; margin-bottom:15px; break-inside: avoid;">
                        <svg width="100%" height="80" viewBox="0 0 500 80" style="max-width: 450px;">
                            <line x1="20" y1="40" x2="480" y2="40" stroke="black" stroke-width="3"/>
                            
                            <line x1="20" y1="30" x2="20" y2="50" stroke="black" stroke-width="3"/>
                            <text x="20" y="70" font-size="16" font-weight="bold" text-anchor="middle">0</text>
                            
                            <line x1="66" y1="35" x2="66" y2="45" stroke="black" stroke-width="1"/>
                            <text x="66" y="25" font-size="14" fill="#2c7be5" text-anchor="middle">1/10</text>
                            <text x="66" y="70" font-size="14" text-anchor="middle">0.1</text>

                            <line x1="250" y1="30" x2="250" y2="50" stroke="black" stroke-width="2"/>
                            <text x="250" y="25" font-size="14" font-weight="bold" fill="#2c7be5" text-anchor="middle">5/10</text>
                            <text x="250" y="70" font-size="14" font-weight="bold" text-anchor="middle">0.5</text>
                            
                            <line x1="434" y1="35" x2="434" y2="45" stroke="black" stroke-width="1"/>
                            <text x="434" y="25" font-size="14" fill="#2c7be5" text-anchor="middle">9/10</text>
                            <text x="434" y="70" font-size="14" text-anchor="middle">0.9</text>

                            <line x1="480" y1="30" x2="480" y2="50" stroke="black" stroke-width="3"/>
                            <text x="480" y="25" font-size="14" font-weight="bold" fill="#2c7be5" text-anchor="middle">10/10</text>
                            <text x="480" y="70" font-size="16" font-weight="bold" text-anchor="middle">1</text>
                        </svg>
                    </div>

                    <div style="display:flex; gap:15px; align-items:flex-start; break-inside: avoid;">
                        <div style="flex:1; padding:15px; border:2px solid #ccc; border-radius:10px; background:#fff; text-align:center;">
                            <strong style="font-size:18px; color:#2c7be5;">Tenths = Dimes</strong><br><br>
                            ${f(1,10)} is one out of 10. That's like 1 dime!<br>
                            We write it as <strong>0.1</strong>
                        </div>
                        <div style="flex:1; padding:15px; border:2px solid #ccc; border-radius:10px; background:#fff; text-align:center;">
                            <strong style="font-size:18px; color:#e74c3c;">Hundredths = Pennies</strong><br><br>
                            ${f(1,100)} is one out of 100. That's like 1 penny!<br>
                            We write it as <strong>0.01</strong>
                        </div>
                    </div>
                </div>`
        },
        week2: {
            title: "★ Helper Hub: The Secret Zero Trick",
            content: `
                <div style="font-size:16px; line-height: 1.5;">
                    <div style="display:flex; gap:15px; align-items:flex-start; break-inside: avoid;">
                        <div style="flex:1; padding:15px; border:2px solid #ccc; border-radius:10px; background:#fff; text-align:center;">
                            <strong style="font-size:18px; color:#2c7be5;">Comparing Decimals</strong><br><br>
                            Which is bigger: <strong>0.4</strong> or <strong>0.35</strong>?<br><br>
                            Don't let the 35 trick you! Give 0.4 a "secret zero" so they both have two digits:<br><br>
                            <div style="font-weight:bold; font-size:18px;">0.4<span style="color:#e74c3c;">0</span> &gt; 0.35</div><br>
                            <em>(40 hundredths is more than 35 hundredths!)</em>
                        </div>
                        <div style="flex:1; padding:15px; border:2px solid #ccc; border-radius:10px; background:#fff; text-align:center;">
                            <strong style="font-size:18px; color:#e74c3c;">Adding 10ths & 100ths</strong><br><br>
                            You cannot add tenths and hundredths together without making them match!<br><br>
                            <div style="display:flex; justify-content:center; align-items:center; font-weight:bold;">
                                ${f(3,10)} + ${f(15,100)} = ❓
                            </div><br>
                            Multiply the top and bottom of the tenth by 10 (add a zero to both!):<br>
                            <div style="display:flex; justify-content:center; align-items:center; font-weight:bold; margin-top:5px;">
                                ${f("3<span style='color:#e74c3c'>0</span>","10<span style='color:#e74c3c'>0</span>")} + ${f(15,100)} = ${f(45,100)}
                            </div>
                        </div>
                    </div>
                </div>`
        }
    },

    versions: {
        A: {
            weeks: [
                {
                    weekNum: 1,
                    days: [
                        {
                            id: "m2-w1-mon", name: "Mon", title: "Week 1: Monday",
                            sections: [
                                { instruction: "What is the value of point N?", type: "number_line", start: 0, end: 1, step: 0.1, target: 0.4, label: "N", ans: "0.4" },
                                { instruction: "Determine whether each comparison is true or false.", type: "grid", rows: [
                                    { segments: [{ type: 'fraction', n: '3', d: '10' }, { type: 'text', val: ' > ' }, { type: 'fraction', n: '30', d: '100' }], correct: false },
                                    { segments: [{ type: 'text', val: '0.4 = ' }, { type: 'fraction', n: '4', d: '10' }], correct: true },
                                    { segments: [{ type: 'text', val: '0.2 > 0.02' }], correct: true }
                                ]}
                            ]
                        },
                        {
                            id: "m2-w1-tue", name: "Tue", title: "Week 1: Tuesday",
                            sections: [
                                { instruction: "Enter the unknown numerator.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: '2', d: '10' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '40', d: '100' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '100', ans: '60' }] }] },
                                { instruction: "Solve the word problem:", type: "word_problem", textSegments: [{ type: 'text', val: 'A plant grew ' }, { type: 'fraction', n: '3', d: '10' }, { type: 'text', val: ' of a meter in week one and ' }, { type: 'fraction', n: '25', d: '100' }, { type: 'text', val: ' of a meter in week two. How much did it grow in total?' }], problems: [{ segments: [{ type: 'text', val: 'Answer: ' }, { type: 'fraction_group', ans: 0.55 }, { type: 'text', val: ' of a meter' }] }] }
                            ]
                        },
                        {
                            id: "m2-w1-wed", name: "Wed", title: "Week 1: Wednesday",
                            sections: [
                                { instruction: "What is the value of point P?", type: "number_line", start: 0, end: 1, step: 0.1, target: 0.7, label: "P", ans: "0.7" },
                                { instruction: "Determine whether each comparison is true or false.", type: "grid", rows: [
                                    { segments: [{ type: 'text', val: '0.5 > 0.05' }], correct: true },
                                    { segments: [{ type: 'text', val: '0.3 = ' }, { type: 'fraction', n: '3', d: '10' }], correct: true },
                                    { segments: [{ type: 'fraction', n: '7', d: '10' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: '70', d: '100' }], correct: true }
                                ]}
                            ]
                        },
                        {
                            id: "m2-w1-thu", name: "Thu", title: "Week 1: Thursday",
                            sections: [
                                { instruction: "Enter the unknown numerator.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: '4', d: '10' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '15', d: '100' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '100', ans: '55' }] }] },
                                { instruction: "Determine whether each comparison is true or false.", type: "grid", rows: [
                                    { segments: [{ type: 'text', val: '0.15 > 0.2' }], correct: false },
                                    { segments: [{ type: 'text', val: '0.6 = 0.60' }], correct: true },
                                    { segments: [{ type: 'fraction', n: '2', d: '10' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: '20', d: '100' }], correct: true }
                                ]}
                            ]
                        },
                        {
                            id: "m2-w1-fri", name: "Fri", title: "Week 1: Friday",
                            sections: [
                                { instruction: "Enter the unknown numerator.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: '3', d: '10' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '35', d: '100' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '100', ans: '65' }] }] },
                                { instruction: "Determine whether each comparison is true or false.", type: "grid", rows: [
                                    { segments: [{ type: 'fraction', n: '5', d: '10' }, { type: 'text', val: ' = 0.50' }], correct: true },
                                    { segments: [{ type: 'text', val: '0.8 < 0.79' }], correct: false },
                                    { segments: [{ type: 'text', val: '0.4 > 0.04' }], correct: true }
                                ]}
                            ]
                        }
                    ]
                },
                {
                    weekNum: 2,
                    days: [
                        {
                            id: "m2-w2-mon", name: "Mon", title: "Week 2: Monday",
                            sections: [
                                { instruction: "What is the value of point Y?", type: "number_line", start: 0, end: 1, step: 0.1, target: 0.6, label: "Y", ans: "0.6" },
                                { instruction: "Determine whether each comparison is true or false.", type: "grid", rows: [
                                    { segments: [{ type: 'text', val: '0.4 > 0.44' }], correct: false },
                                    { segments: [{ type: 'fraction', n: '8', d: '10' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: '80', d: '100' }], correct: true },
                                    { segments: [{ type: 'text', val: '0.9 = 0.90' }], correct: true }
                                ]}
                            ]
                        },
                        {
                            id: "m2-w2-tue", name: "Tue", title: "Week 2: Tuesday",
                            sections: [
                                { instruction: "Enter the unknown numerator.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: '7', d: '10' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '15', d: '100' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '100', ans: '85' }] }] },
                                { instruction: "Solve the word problem:", type: "word_problem", textSegments: [{ type: 'text', val: 'A bug crawled ' }, { type: 'fraction', n: '6', d: '10' }, { type: 'text', val: ' of a meter in the morning and ' }, { type: 'fraction', n: '12', d: '100' }, { type: 'text', val: ' of a meter in the afternoon. How far did it crawl in total?' }], problems: [{ segments: [{ type: 'text', val: 'Answer: ' }, { type: 'fraction_group', ans: 0.72 }, { type: 'text', val: ' of a meter' }] }] }
                            ]
                        },
                        {
                            id: "m2-w2-wed", name: "Wed", title: "Week 2: Wednesday",
                            sections: [
                                { instruction: "What is the value of point Q?", type: "number_line", start: 0, end: 1, step: 0.1, target: 0.2, label: "Q", ans: "0.2" },
                                { instruction: "Determine whether each comparison is true or false.", type: "grid", rows: [
                                    { segments: [{ type: 'text', val: '0.7 > 0.07' }], correct: true },
                                    { segments: [{ type: 'fraction', n: '2', d: '10' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: '20', d: '100' }], correct: true },
                                    { segments: [{ type: 'text', val: '0.5 < 0.49' }], correct: false }
                                ]}
                            ]
                        },
                        {
                            id: "m2-w2-thu", name: "Thu", title: "Week 2: Thursday",
                            sections: [
                                { instruction: "Enter the unknown numerator.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: '1', d: '10' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '45', d: '100' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '100', ans: '55' }] }] },
                                { instruction: "Determine whether each comparison is true or false.", type: "grid", rows: [
                                    { segments: [{ type: 'text', val: '0.8 = 0.80' }], correct: true },
                                    { segments: [{ type: 'text', val: '0.2 > 0.22' }], correct: false },
                                    { segments: [{ type: 'fraction', n: '9', d: '10' }, { type: 'text', val: ' = 0.90' }], correct: true }
                                ]}
                            ]
                        },
                        {
                            id: "m2-w2-fri", name: "Fri", title: "Week 2: Friday",
                            sections: [
                                { instruction: "Enter the unknown numerator.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: '5', d: '10' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '12', d: '100' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '100', ans: '62' }] }] },
                                { instruction: "Determine whether each comparison is true or false.", type: "grid", rows: [
                                    { segments: [{ type: 'text', val: '0.50 > 0.05' }], correct: true },
                                    { segments: [{ type: 'fraction', n: '4', d: '10' }, { type: 'text', val: ' = 0.04' }], correct: false },
                                    { segments: [{ type: 'text', val: '0.1 = 0.10' }], correct: true }
                                ]}
                            ]
                        }
                    ]
                }
            ]
        },
        B: {
            weeks: [
                {
                    weekNum: 1,
                    days: [
                        {
                            id: "m2-w1-mon", name: "Mon", title: "Week 1: Monday",
                            sections: [
                                { instruction: "What is the value of point N?", type: "number_line", start: 0, end: 1, step: 0.1, target: 0.6, label: "N", ans: "0.6" },
                                { instruction: "Determine whether each comparison is true or false.", type: "grid", rows: [
                                    { segments: [{ type: 'fraction', n: '2', d: '10' }, { type: 'text', val: ' > ' }, { type: 'fraction', n: '20', d: '100' }], correct: false },
                                    { segments: [{ type: 'text', val: '0.7 = ' }, { type: 'fraction', n: '7', d: '10' }], correct: true },
                                    { segments: [{ type: 'text', val: '0.3 > 0.03' }], correct: true }
                                ]}
                            ]
                        },
                        {
                            id: "m2-w1-tue", name: "Tue", title: "Week 1: Tuesday",
                            sections: [
                                { instruction: "Enter the unknown numerator.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: '3', d: '10' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '20', d: '100' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '100', ans: '50' }] }] },
                                { instruction: "Solve the word problem:", type: "word_problem", textSegments: [{ type: 'text', val: 'A plant grew ' }, { type: 'fraction', n: '4', d: '10' }, { type: 'text', val: ' of a meter in week one and ' }, { type: 'fraction', n: '15', d: '100' }, { type: 'text', val: ' of a meter in week two. How much did it grow in total?' }], problems: [{ segments: [{ type: 'text', val: 'Answer: ' }, { type: 'fraction_group', ans: 0.55 }, { type: 'text', val: ' of a meter' }] }] }
                            ]
                        },
                        {
                            id: "m2-w1-wed", name: "Wed", title: "Week 1: Wednesday",
                            sections: [
                                { instruction: "What is the value of point P?", type: "number_line", start: 0, end: 1, step: 0.1, target: 0.2, label: "P", ans: "0.2" },
                                { instruction: "Determine whether each comparison is true or false.", type: "grid", rows: [
                                    { segments: [{ type: 'text', val: '0.8 > 0.08' }], correct: true },
                                    { segments: [{ type: 'text', val: '0.5 = ' }, { type: 'fraction', n: '5', d: '10' }], correct: true },
                                    { segments: [{ type: 'fraction', n: '6', d: '10' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: '60', d: '100' }], correct: true }
                                ]}
                            ]
                        },
                        {
                            id: "m2-w1-thu", name: "Thu", title: "Week 1: Thursday",
                            sections: [
                                { instruction: "Enter the unknown numerator.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: '5', d: '10' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '10', d: '100' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '100', ans: '60' }] }] },
                                { instruction: "Determine whether each comparison is true or false.", type: "grid", rows: [
                                    { segments: [{ type: 'text', val: '0.12 > 0.2' }], correct: false },
                                    { segments: [{ type: 'text', val: '0.8 = 0.80' }], correct: true },
                                    { segments: [{ type: 'fraction', n: '3', d: '10' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: '30', d: '100' }], correct: true }
                                ]}
                            ]
                        },
                        {
                            id: "m2-w1-fri", name: "Fri", title: "Week 1: Friday",
                            sections: [
                                { instruction: "Enter the unknown numerator.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: '1', d: '10' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '45', d: '100' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '100', ans: '55' }] }] },
                                { instruction: "Determine whether each comparison is true or false.", type: "grid", rows: [
                                    { segments: [{ type: 'fraction', n: '4', d: '10' }, { type: 'text', val: ' = 0.40' }], correct: true },
                                    { segments: [{ type: 'text', val: '0.9 < 0.89' }], correct: false },
                                    { segments: [{ type: 'text', val: '0.5 > 0.05' }], correct: true }
                                ]}
                            ]
                        }
                    ]
                },
                {
                    weekNum: 2,
                    days: [
                        {
                            id: "m2-w2-mon", name: "Mon", title: "Week 2: Monday",
                            sections: [
                                { instruction: "What is the value of point Y?", type: "number_line", start: 0, end: 1, step: 0.1, target: 0.8, label: "Y", ans: "0.8" },
                                { instruction: "Determine whether each comparison is true or false.", type: "grid", rows: [
                                    { segments: [{ type: 'text', val: '0.3 > 0.33' }], correct: false },
                                    { segments: [{ type: 'fraction', n: '5', d: '10' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: '50', d: '100' }], correct: true },
                                    { segments: [{ type: 'text', val: '0.7 = 0.70' }], correct: true }
                                ]}
                            ]
                        },
                        {
                            id: "m2-w2-tue", name: "Tue", title: "Week 2: Tuesday",
                            sections: [
                                { instruction: "Enter the unknown numerator.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: '6', d: '10' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '15', d: '100' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '100', ans: '75' }] }] },
                                { instruction: "Solve the word problem:", type: "word_problem", textSegments: [{ type: 'text', val: 'A bug crawled ' }, { type: 'fraction', n: '5', d: '10' }, { type: 'text', val: ' of a meter in the morning and ' }, { type: 'fraction', n: '25', d: '100' }, { type: 'text', val: ' of a meter in the afternoon. How far did it crawl in total?' }], problems: [{ segments: [{ type: 'text', val: 'Answer: ' }, { type: 'fraction_group', ans: 0.75 }, { type: 'text', val: ' of a meter' }] }] }
                            ]
                        },
                        {
                            id: "m2-w2-wed", name: "Wed", title: "Week 2: Wednesday",
                            sections: [
                                { instruction: "What is the value of point Q?", type: "number_line", start: 0, end: 1, step: 0.1, target: 0.3, label: "Q", ans: "0.3" },
                                { instruction: "Determine whether each comparison is true or false.", type: "grid", rows: [
                                    { segments: [{ type: 'text', val: '0.6 > 0.06' }], correct: true },
                                    { segments: [{ type: 'fraction', n: '8', d: '10' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: '80', d: '100' }], correct: true },
                                    { segments: [{ type: 'text', val: '0.4 < 0.39' }], correct: false }
                                ]}
                            ]
                        },
                        {
                            id: "m2-w2-thu", name: "Thu", title: "Week 2: Thursday",
                            sections: [
                                { instruction: "Enter the unknown numerator.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: '2', d: '10' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '35', d: '100' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '100', ans: '55' }] }] },
                                { instruction: "Determine whether each comparison is true or false.", type: "grid", rows: [
                                    { segments: [{ type: 'text', val: '0.9 = 0.90' }], correct: true },
                                    { segments: [{ type: 'text', val: '0.1 > 0.11' }], correct: false },
                                    { segments: [{ type: 'fraction', n: '6', d: '10' }, { type: 'text', val: ' = 0.60' }], correct: true }
                                ]}
                            ]
                        },
                        {
                            id: "m2-w2-fri", name: "Fri", title: "Week 2: Friday",
                            sections: [
                                { instruction: "Enter the unknown numerator.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: '4', d: '10' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '25', d: '100' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '100', ans: '65' }] }] },
                                { instruction: "Determine whether each comparison is true or false.", type: "grid", rows: [
                                    { segments: [{ type: 'text', val: '0.60 > 0.06' }], correct: true },
                                    { segments: [{ type: 'fraction', n: '3', d: '10' }, { type: 'text', val: ' = 0.03' }], correct: false },
                                    { segments: [{ type: 'text', val: '0.2 = 0.20' }], correct: true }
                                ]}
                            ]
                        }
                    ]
                }
            ]
        },
        C: {
            weeks: [
                {
                    weekNum: 1,
                    days: [
                        {
                            id: "m2-w1-mon", name: "Mon", title: "Week 1: Monday",
                            sections: [
                                { instruction: "What is the value of point N?", type: "number_line", start: 0, end: 1, step: 0.1, target: 0.7, label: "N", ans: "0.7" },
                                { instruction: "Determine whether each comparison is true or false.", type: "grid", rows: [
                                    { segments: [{ type: 'fraction', n: '4', d: '10' }, { type: 'text', val: ' > ' }, { type: 'fraction', n: '40', d: '100' }], correct: false },
                                    { segments: [{ type: 'text', val: '0.9 = ' }, { type: 'fraction', n: '9', d: '10' }], correct: true },
                                    { segments: [{ type: 'text', val: '0.5 > 0.05' }], correct: true }
                                ]}
                            ]
                        },
                        {
                            id: "m2-w1-tue", name: "Tue", title: "Week 1: Tuesday",
                            sections: [
                                { instruction: "Enter the unknown numerator.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: '4', d: '10' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '30', d: '100' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '100', ans: '70' }] }] },
                                { instruction: "Solve the word problem:", type: "word_problem", textSegments: [{ type: 'text', val: 'A plant grew ' }, { type: 'fraction', n: '2', d: '10' }, { type: 'text', val: ' of a meter in week one and ' }, { type: 'fraction', n: '45', d: '100' }, { type: 'text', val: ' of a meter in week two. How much did it grow in total?' }], problems: [{ segments: [{ type: 'text', val: 'Answer: ' }, { type: 'fraction_group', ans: 0.65 }, { type: 'text', val: ' of a meter' }] }] }
                            ]
                        },
                        {
                            id: "m2-w1-wed", name: "Wed", title: "Week 1: Wednesday",
                            sections: [
                                { instruction: "What is the value of point P?", type: "number_line", start: 0, end: 1, step: 0.1, target: 0.5, label: "P", ans: "0.5" },
                                { instruction: "Determine whether each comparison is true or false.", type: "grid", rows: [
                                    { segments: [{ type: 'text', val: '0.6 > 0.06' }], correct: true },
                                    { segments: [{ type: 'text', val: '0.2 = ' }, { type: 'fraction', n: '2', d: '10' }], correct: true },
                                    { segments: [{ type: 'fraction', n: '8', d: '10' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: '80', d: '100' }], correct: true }
                                ]}
                            ]
                        },
                        {
                            id: "m2-w1-thu", name: "Thu", title: "Week 1: Thursday",
                            sections: [
                                { instruction: "Enter the unknown numerator.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: '1', d: '10' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '50', d: '100' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '100', ans: '60' }] }] },
                                { instruction: "Determine whether each comparison is true or false.", type: "grid", rows: [
                                    { segments: [{ type: 'text', val: '0.15 > 0.5' }], correct: false },
                                    { segments: [{ type: 'text', val: '0.4 = 0.40' }], correct: true },
                                    { segments: [{ type: 'fraction', n: '7', d: '10' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: '70', d: '100' }], correct: true }
                                ]}
                            ]
                        },
                        {
                            id: "m2-w1-fri", name: "Fri", title: "Week 1: Friday",
                            sections: [
                                { instruction: "Enter the unknown numerator.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: '6', d: '10' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '15', d: '100' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '100', ans: '75' }] }] },
                                { instruction: "Determine whether each comparison is true or false.", type: "grid", rows: [
                                    { segments: [{ type: 'fraction', n: '8', d: '10' }, { type: 'text', val: ' = 0.80' }], correct: true },
                                    { segments: [{ type: 'text', val: '0.7 < 0.69' }], correct: false },
                                    { segments: [{ type: 'text', val: '0.3 > 0.03' }], correct: true }
                                ]}
                            ]
                        }
                    ]
                },
                {
                    weekNum: 2,
                    days: [
                        {
                            id: "m2-w2-mon", name: "Mon", title: "Week 2: Monday",
                            sections: [
                                { instruction: "What is the value of point Y?", type: "number_line", start: 0, end: 1, step: 0.1, target: 0.9, label: "Y", ans: "0.9" },
                                { instruction: "Determine whether each comparison is true or false.", type: "grid", rows: [
                                    { segments: [{ type: 'text', val: '0.2 > 0.22' }], correct: false },
                                    { segments: [{ type: 'fraction', n: '6', d: '10' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: '60', d: '100' }], correct: true },
                                    { segments: [{ type: 'text', val: '0.5 = 0.50' }], correct: true }
                                ]}
                            ]
                        },
                        {
                            id: "m2-w2-tue", name: "Tue", title: "Week 2: Tuesday",
                            sections: [
                                { instruction: "Enter the unknown numerator.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: '7', d: '10' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '10', d: '100' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '100', ans: '80' }] }] },
                                { instruction: "Solve the word problem:", type: "word_problem", textSegments: [{ type: 'text', val: 'A bug crawled ' }, { type: 'fraction', n: '3', d: '10' }, { type: 'text', val: ' of a meter in the morning and ' }, { type: 'fraction', n: '55', d: '100' }, { type: 'text', val: ' of a meter in the afternoon. How far did it crawl in total?' }], problems: [{ segments: [{ type: 'text', val: 'Answer: ' }, { type: 'fraction_group', ans: 0.85 }, { type: 'text', val: ' of a meter' }] }] }
                            ]
                        },
                        {
                            id: "m2-w2-wed", name: "Wed", title: "Week 2: Wednesday",
                            sections: [
                                { instruction: "What is the value of point Q?", type: "number_line", start: 0, end: 1, step: 0.1, target: 0.1, label: "Q", ans: "0.1" },
                                { instruction: "Determine whether each comparison is true or false.", type: "grid", rows: [
                                    { segments: [{ type: 'text', val: '0.8 > 0.08' }], correct: true },
                                    { segments: [{ type: 'fraction', n: '4', d: '10' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: '40', d: '100' }], correct: true },
                                    { segments: [{ type: 'text', val: '0.7 < 0.69' }], correct: false }
                                ]}
                            ]
                        },
                        {
                            id: "m2-w2-thu", name: "Thu", title: "Week 2: Thursday",
                            sections: [
                                { instruction: "Enter the unknown numerator.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: '3', d: '10' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '45', d: '100' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '100', ans: '75' }] }] },
                                { instruction: "Determine whether each comparison is true or false.", type: "grid", rows: [
                                    { segments: [{ type: 'text', val: '0.3 = 0.30' }], correct: true },
                                    { segments: [{ type: 'text', val: '0.4 > 0.44' }], correct: false },
                                    { segments: [{ type: 'fraction', n: '9', d: '10' }, { type: 'text', val: ' = 0.90' }], correct: true }
                                ]}
                            ]
                        },
                        {
                            id: "m2-w2-fri", name: "Fri", title: "Week 2: Friday",
                            sections: [
                                { instruction: "Enter the unknown numerator.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: '8', d: '10' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '15', d: '100' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '100', ans: '95' }] }] },
                                { instruction: "Determine whether each comparison is true or false.", type: "grid", rows: [
                                    { segments: [{ type: 'text', val: '0.80 > 0.08' }], correct: true },
                                    { segments: [{ type: 'fraction', n: '7', d: '10' }, { type: 'text', val: ' = 0.07' }], correct: false },
                                    { segments: [{ type: 'text', val: '0.5 = 0.50' }], correct: true }
                                ]}
                            ]
                        }
                    ]
                }
            ]
        }
    }
};