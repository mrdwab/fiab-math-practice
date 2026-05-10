// --- WEEK 1 HELPER HUB ---
const helperHubW1_Mod5 = {
    title: "★ Helper Hub: The Place Value Decoder",
    content: `
        <div style="font-size:16px; line-height: 1.5;">
            <p style="margin-top:0; margin-bottom:15px;">Decimals are just another way to write fractions! Use this map to turn digits into <strong>Expanded Form</strong>.</p>
            
            <div style="display:flex; flex-direction:column; align-items:center; gap:10px;">
                <table style="border-collapse: collapse; text-align: center; font-family: sans-serif; background: #fff; border: 2px solid #3498db;">
                    <tr style="background: #3498db; color: #fff; font-size: 14px;">
                        <th style="padding: 10px; border: 1px solid #2980b9;">Tens</th>
                        <th style="padding: 10px; border: 1px solid #2980b9;">Ones</th>
                        <th style="padding: 10px; border: 1px solid #2980b9;">.</th>
                        <th style="padding: 10px; border: 1px solid #2980b9;">Tenths</th>
                        <th style="padding: 10px; border: 1px solid #2980b9;">Hundredths</th>
                        <th style="padding: 10px; border: 1px solid #2980b9;">Thousandths</th>
                    </tr>
                    <tr style="font-size: 20px; font-weight: bold; color: #2c3e50;">
                        <td style="padding: 10px; border: 1px solid #ccc;">4</td>
                        <td style="padding: 10px; border: 1px solid #ccc;">7</td>
                        <td style="padding: 10px; border: 1px solid #ccc; color: #e74c3c;">.</td>
                        <td style="padding: 10px; border: 1px solid #ccc;">3</td>
                        <td style="padding: 10px; border: 1px solid #ccc;">8</td>
                        <td style="padding: 10px; border: 1px solid #ccc;">2</td>
                    </tr>
                    <tr style="font-size: 13px; color: #7f8c8d; background: #f9f9f9;">
                        <td style="padding: 5px; border: 1px solid #ccc;">&times; 10</td>
                        <td style="padding: 5px; border: 1px solid #ccc;">&times; 1</td>
                        <td style="padding: 5px; border: 1px solid #ccc;"></td>
                        <td style="padding: 5px; border: 1px solid #ccc;">&times; <div class="fraction-wrap"><span class="frac-top">1</span><span class="frac-bottom">10</span></div></td>
                        <td style="padding: 5px; border: 1px solid #ccc;">&times; <div class="fraction-wrap"><span class="frac-top">1</span><span class="frac-bottom">100</span></div></td>
                        <td style="padding: 5px; border: 1px solid #ccc;">&times; <div class="fraction-wrap"><span class="frac-top">1</span><span class="frac-bottom">1000</span></div></td>
                    </tr>
                </table>

                <div style="background: #ebf5fb; padding: 15px; border-radius: 8px; border: 1px dashed #3498db; width: 100%; margin-top: 10px;">
                    <strong style="color: #2980b9;">Example:</strong> 0.08 is the same as <strong>8 hundredths</strong>. <br>
                    In expanded form, we write it as: <span style="font-family: monospace; font-size: 18px;">8 &times; <div class="fraction-wrap"><span class="frac-top">1</span><span class="frac-bottom">100</span></div></span>
                </div>
            </div>
        </div>
    `
};

// --- WEEK 2 HELPER HUB ---
const helperHubW2_Mod5 = {
    title: "★ Helper Hub: Decimal Detective",
    content: `
        <div style="font-size:16px; line-height: 1.5;">
            <p style="margin-top:0; margin-bottom:15px;">Decimals have a few secret tricks. Master these two to become a Decimal Detective!</p>
            
            <div style="display:flex; gap:15px; justify-content: center; flex-wrap: wrap; text-align:center;">
                
                <div style="border:2px solid #9b59b6; padding:15px; border-radius:10px; background:#f4ecf7; flex: 1; min-width: 250px;">
                    <strong style="font-size:16px; color:#8e44ad;">Trick 1: Phantom Zeros</strong><br>
                    <div style="font-size: 13px; color: #555; margin: 5px 0 10px 0;">To compare decimals easily, add invisible zeros so they have the exact same number of digits!</div>
                    <div style="background: #fff; border-radius: 8px; padding: 10px; border: 1px solid #d2b4de;">
                        <div style="font-size: 16px; margin-bottom: 5px;">Which is greater?</div>
                        <div style="display: flex; justify-content: center; align-items: center; gap: 15px; font-size: 24px; font-weight: bold; color: #333;">
                            <div>1.23<span style="color: #bbb; border: 2px dashed #bbb; border-radius: 4px; padding: 0 4px; margin-left: 2px;">0</span></div>
                            <div style="color: #8e44ad;">&gt;</div>
                            <div>1.203</div>
                        </div>
                        <div style="font-size: 14px; color: #8e44ad; margin-top: 10px; font-weight: bold;">1,230 is greater than 1,203!</div>
                    </div>
                </div>

                <div style="border:2px solid #e67e22; padding:15px; border-radius:10px; background:#fdf2e9; flex: 1; min-width: 250px;">
                    <strong style="font-size:16px; color:#d35400;">Trick 2: The Rounding Rollercoaster</strong><br>
                    <div style="font-size: 13px; color: #555; margin: 5px 0 10px 0;">Look at the digit to the right. 5 is at the top of the hill—once you reach 5, you slide to the next number!</div>
                    
                    <svg width="220" height="100" viewBox="0 0 220 100" style="margin: 0 auto; display: block; overflow: visible;">
                        <path d="M 10 90 Q 110 10 210 90" fill="none" stroke="#d35400" stroke-width="4" stroke-linecap="round"/>
                        
                        <circle cx="35" cy="73" r="14" fill="#fff" stroke="#e74c3c" stroke-width="2"/>
                        <text x="35" y="78" font-family="Fredoka, sans-serif" font-weight="bold" font-size="14" fill="#e74c3c" text-anchor="middle">1-4</text>
                        <text x="35" y="105" font-size="12" fill="#e74c3c" font-weight="bold" text-anchor="middle">STAY</text>
                        
                        <circle cx="110" cy="30" r="16" fill="#f1c40f" stroke="#d35400" stroke-width="2"/>
                        <text x="110" y="36" font-family="Fredoka, sans-serif" font-weight="bold" font-size="18" fill="#d35400" text-anchor="middle">5</text>
                        <text x="110" y="8" font-size="12" fill="#d35400" font-weight="bold" text-anchor="middle">GO UP!</text>

                        <circle cx="185" cy="73" r="14" fill="#fff" stroke="#27ae60" stroke-width="2"/>
                        <text x="185" y="78" font-family="Fredoka, sans-serif" font-weight="bold" font-size="14" fill="#27ae60" text-anchor="middle">6-9</text>
                        <text x="185" y="105" font-size="12" fill="#27ae60" font-weight="bold" text-anchor="middle">ROUND UP</text>
                    </svg>
                </div>

            </div>
        </div>
    `
};

const module5 = {
    id: "mod-5",
    name: "Place Value Systems",
    versions: [
        // ==========================================
        // VERSION A (Baseline)
        // ==========================================
        {
            id: "A",
            weeks: [
                {
                    weekNum: 1,
                    helperHub: helperHubW1_Mod5,
                    days: [
                        {
                            id: "m5-w1-mon-a", name: "Mon", title: "Expanded Form & Rounding",
                            sections: [
                                {
                                    instruction: "Which expression is equal to 825.914?",
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'8 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 2 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 5 x 1'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 9 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 1 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 4 x 1,000'}]}
                                        ], correct: false },
                                        { id: 'opt2', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'8 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 2 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 5 x 1'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 9 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 1 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 4 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]}
                                        ], correct: true },
                                        { id: 'opt3', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'8 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 2 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 5 x 1'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 9 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 1 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 4 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]}
                                        ], correct: false },
                                        { id: 'opt4', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'8 x 10,000'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 2 x 1,000'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 5 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 9 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 1 x 1'}]}
                                        ], correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the number that 47.382 rounds to when rounded to the nearest hundredth.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 47.38 }] } ]
                                },
                                {
                                    instruction: "Round 6.541 to the nearest tenth.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 6.5 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m5-w1-tue-a", name: "Tue", title: "Expanded Form & Comparisons",
                            sections: [
                                {
                                    instruction: "Enter a number equal to the value of the expression:",
                                    instructionMath: [
                                        {type:'term_wrap', items: [{type:'text', val:'(4 x 1000)'}]},
                                        {type:'term_wrap', items: [{type:'text', val:' + (8 x 10)'}]},
                                        {type:'term_wrap', items: [{type:'text', val:' + 2 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                        {type:'term_wrap', items: [{type:'text', val:' + 7 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]}
                                    ],
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 4080.207 }] } ]
                                },
                                {
                                    instruction: "Select the symbol that correctly completes this comparison.",
                                    instructionMath: [
                                        {type:'text', val:'0.52 '}, {type:'circle_box'}, {type:'text', val:' 0.052'}
                                    ],
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'>'}], correct: true },
                                        { id: 'opt2', content: [{type:'text', val:'<'}], correct: false },
                                        { id: 'opt3', content: [{type:'text', val:'='}], correct: false }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m5-w1-wed-a", name: "Wed", title: "Expanded Form & Rounding",
                            sections: [
                                {
                                    instruction: "Which expression is equal to 6,042.085?",
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'6 x 1000'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 4 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 2 x 1'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 8 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 5 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]}
                                        ], correct: false },
                                        { id: 'opt2', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'6 x 1,000,000'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 4 x 10,000'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 2 x 1,000'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 8 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 5 x 1'}]}
                                        ], correct: false },
                                        { id: 'opt3', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'6 x 1000'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 4 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 2 x 1'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 8 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 5 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]}
                                        ], correct: true },
                                        { id: 'opt4', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'6 x 1000'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 4 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 2 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 8 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 5 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]}
                                        ], correct: false }
                                    ]
                                },
                                {
                                    instruction: "What is 308.451 rounded to the nearest tenth? Enter your answer in the box.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 308.5 }] } ]
                                },
                                {
                                    instruction: "Enter the value of 92.17 rounded to the nearest tenth.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 92.2 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m5-w1-thu-a", name: "Thu", title: "Comparisons & Expanded Form",
                            sections: [
                                {
                                    instruction: "Select all true comparisons.",
                                    type: "multiple_choice",
                                    select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'45.602 > 45.62'}], correct: false },
                                        { id: 'opt2', content: [{type:'text', val:'7.080 = 7.08'}], correct: true },
                                        { id: 'opt3', content: [{type:'text', val:'19.34 < 19.341'}], correct: true },
                                        { id: 'opt4', content: [{type:'text', val:'0.09 > 0.1'}], correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter a number equal to the value of the expression:",
                                    instructionMath: [
                                        {type:'term_wrap', items: [{type:'text', val:'(9 x 100)'}]},
                                        {type:'term_wrap', items: [{type:'text', val:' + (1 x 1)'}]},
                                        {type:'term_wrap', items: [{type:'text', val:' + 5 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                        {type:'term_wrap', items: [{type:'text', val:' + 3 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]}
                                    ],
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 901.53 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m5-w1-fri-a", name: "Fri", title: "Weekly Quiz",
                            sections: [
                                {
                                    instruction: "Round 7.391 to the nearest hundredth.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 7.39 }] } ]
                                },
                                {
                                    instruction: "Enter the number that 0.384 rounds to when rounded to the nearest tenth.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 0.4 }] } ]
                                },
                                {
                                    instruction: "Which expression is equal to 107.493?",
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'1 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 7 x 1'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 4 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 9 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 3 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]}
                                        ], correct: true },
                                        { id: 'opt2', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'1 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 7 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 4 x ('}, {type:'fraction', n:'1', d:'1'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 9 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 3 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]}
                                        ], correct: false },
                                        { id: 'opt3', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'1 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 7 x 1'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 4 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 9 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 3 x 1,000'}]}
                                        ], correct: false },
                                        { id: 'opt4', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'1 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 7 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 4 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 9 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 3 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]}
                                        ], correct: false }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    weekNum: 2,
                    helperHub: helperHubW2_Mod5,
                    days: [
                        {
                            id: "m5-w2-mon-a", name: "Mon", title: "Comparisons & Rounding",
                            sections: [
                                {
                                    instruction: "Select all true comparisons.",
                                    type: "multiple_choice",
                                    select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'304.15 > 304.05'}], correct: true },
                                        { id: 'opt2', content: [{type:'text', val:'22.9 > 22.901'}], correct: false },
                                        { id: 'opt3', content: [{type:'text', val:'0.88 < 0.880'}], correct: false },
                                        { id: 'opt4', content: [{type:'text', val:'5.01 = 5.010'}], correct: true }
                                    ]
                                },
                                {
                                    instruction: "What is 15.2846 rounded to the nearest thousandth?",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 15.285 }] } ]
                                },
                                {
                                    instruction: "Round 19.063 to the nearest hundredth.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 19.06 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m5-w2-tue-a", name: "Tue", title: "Reasoning & Expanded Form",
                            sections: [
                                {
                                    instruction: "Select all the decimals below that are greater than 28.3 and less than 28.4.",
                                    type: "multiple_choice",
                                    select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'28.35'}], correct: true },
                                        { id: 'opt2', content: [{type:'text', val:'28.04'}], correct: false },
                                        { id: 'opt3', content: [{type:'text', val:'28.391'}], correct: true },
                                        { id: 'opt4', content: [{type:'text', val:'28.41'}], correct: false },
                                        { id: 'opt5', content: [{type:'text', val:'28.30'}], correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter a number equal to the value of the expression:",
                                    instructionMath: [
                                        {type:'term_wrap', items: [{type:'text', val:'(5 x 10)'}]},
                                        {type:'term_wrap', items: [{type:'text', val:' + 6 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                        {type:'term_wrap', items: [{type:'text', val:' + 2 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]}
                                    ],
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 50.602 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m5-w2-wed-a", name: "Wed", title: "Comparisons & Expanded Form",
                            sections: [
                                {
                                    instruction: "Select all true comparisons.",
                                    type: "multiple_choice",
                                    select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'14.5 = 14.50'}], correct: true },
                                        { id: 'opt2', content: [{type:'text', val:'6.07 < 6.007'}], correct: false },
                                        { id: 'opt3', content: [{type:'text', val:'9.102 > 9.12'}], correct: false },
                                        { id: 'opt4', content: [{type:'text', val:'1.23 > 1.203'}], correct: true }
                                    ]
                                },
                                {
                                    instruction: "Which expression is equal to 80.037?",
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'8 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 3 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 7 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]}
                                        ], correct: false },
                                        { id: 'opt2', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'8 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 3 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 7 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]}
                                        ], correct: true },
                                        { id: 'opt3', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'8 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 3 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 7 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]}
                                        ], correct: false },
                                        { id: 'opt4', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'8 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 3 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 7 x 1'}]}
                                        ], correct: false }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m5-w2-thu-a", name: "Thu", title: "Reasoning & Rounding",
                            sections: [
                                {
                                    instruction: "Select all the decimals below that are greater than 105.6 and less than 105.7.",
                                    type: "multiple_choice",
                                    select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'105.62'}], correct: true },
                                        { id: 'opt2', content: [{type:'text', val:'105.71'}], correct: false },
                                        { id: 'opt3', content: [{type:'text', val:'105.608'}], correct: true },
                                        { id: 'opt4', content: [{type:'text', val:'105.06'}], correct: false },
                                        { id: 'opt5', content: [{type:'text', val:'105.70'}], correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the value of 9.996 rounded to the nearest hundredth.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 10 }] } ]
                                },
                                {
                                    instruction: "Round 2.45 to the nearest tenth.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 2.5 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m5-w2-fri-a", name: "Fri", title: "Module Quiz",
                            sections: [
                                {
                                    instruction: "Select all the decimals below that are greater than 9.8 and less than 9.9.",
                                    type: "multiple_choice",
                                    select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'9.85'}], correct: true },
                                        { id: 'opt2', content: [{type:'text', val:'9.805'}], correct: true },
                                        { id: 'opt3', content: [{type:'text', val:'9.91'}], correct: false },
                                        { id: 'opt4', content: [{type:'text', val:'9.80'}], correct: false },
                                        { id: 'opt5', content: [{type:'text', val:'9.89'}], correct: true }
                                    ]
                                },
                                {
                                    instruction: "Enter a number equal to the value of the expression:",
                                    instructionMath: [
                                        {type:'term_wrap', items: [{type:'text', val:'(3 x 100)'}]},
                                        {type:'term_wrap', items: [{type:'text', val:' + (2 x 10)'}]},
                                        {type:'term_wrap', items: [{type:'text', val:' + 4 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]}
                                    ],
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 320.04 }] } ]
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
                    helperHub: helperHubW1_Mod5,
                    days: [
                        {
                            id: "m5-w1-mon-b", name: "Mon", title: "Expanded Form & Rounding",
                            sections: [
                                {
                                    instruction: "Which expression is equal to 614.825?",
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'6 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 1 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 4 x 1'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 8 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 2 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 5 x 1,000'}]}
                                        ], correct: false },
                                        { id: 'opt2', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'6 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 1 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 4 x 1'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 8 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 2 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 5 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]}
                                        ], correct: true },
                                        { id: 'opt3', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'6 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 1 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 4 x 1'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 8 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 2 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 5 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]}
                                        ], correct: false },
                                        { id: 'opt4', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'6 x 10,000'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 1 x 1,000'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 4 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 8 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 2 x 1'}]}
                                        ], correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the number that 81.493 rounds to when rounded to the nearest hundredth.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 81.49 }] } ]
                                },
                                {
                                    instruction: "Round 4.382 to the nearest tenth.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 4.4 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m5-w1-tue-b", name: "Tue", title: "Expanded Form & Comparisons",
                            sections: [
                                {
                                    instruction: "Enter a number equal to the value of the expression:",
                                    instructionMath: [
                                        {type:'term_wrap', items: [{type:'text', val:'(7 x 1000)'}]},
                                        {type:'term_wrap', items: [{type:'text', val:' + (4 x 10)'}]},
                                        {type:'term_wrap', items: [{type:'text', val:' + 3 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                        {type:'term_wrap', items: [{type:'text', val:' + 9 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]}
                                    ],
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 7040.309 }] } ]
                                },
                                {
                                    instruction: "Select the symbol that correctly completes this comparison.",
                                    instructionMath: [
                                        {type:'text', val:'0.63 '}, {type:'circle_box'}, {type:'text', val:' 0.063'}
                                    ],
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'>'}], correct: true },
                                        { id: 'opt2', content: [{type:'text', val:'<'}], correct: false },
                                        { id: 'opt3', content: [{type:'text', val:'='}], correct: false }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m5-w1-wed-b", name: "Wed", title: "Expanded Form & Rounding",
                            sections: [
                                {
                                    instruction: "Which expression is equal to 4,051.096?",
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'4 x 1000'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 5 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 1 x 1'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 9 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 6 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]}
                                        ], correct: false },
                                        { id: 'opt2', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'4 x 1,000,000'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 5 x 10,000'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 1 x 1,000'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 9 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 6 x 1'}]}
                                        ], correct: false },
                                        { id: 'opt3', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'4 x 1000'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 5 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 1 x 1'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 9 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 6 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]}
                                        ], correct: true },
                                        { id: 'opt4', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'4 x 1000'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 5 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 1 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 9 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 6 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]}
                                        ], correct: false }
                                    ]
                                },
                                {
                                    instruction: "What is 409.562 rounded to the nearest tenth? Enter your answer in the box.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 409.6 }] } ]
                                },
                                {
                                    instruction: "Enter the value of 81.28 rounded to the nearest tenth.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 81.3 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m5-w1-thu-b", name: "Thu", title: "Comparisons & Expanded Form",
                            sections: [
                                {
                                    instruction: "Select all true comparisons.",
                                    type: "multiple_choice",
                                    select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'36.504 > 36.54'}], correct: false },
                                        { id: 'opt2', content: [{type:'text', val:'5.090 = 5.09'}], correct: true },
                                        { id: 'opt3', content: [{type:'text', val:'12.45 < 12.451'}], correct: true },
                                        { id: 'opt4', content: [{type:'text', val:'0.07 > 0.1'}], correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter a number equal to the value of the expression:",
                                    instructionMath: [
                                        {type:'term_wrap', items: [{type:'text', val:'(8 x 100)'}]},
                                        {type:'term_wrap', items: [{type:'text', val:' + (2 x 1)'}]},
                                        {type:'term_wrap', items: [{type:'text', val:' + 4 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                        {type:'term_wrap', items: [{type:'text', val:' + 6 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]}
                                    ],
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 802.46 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m5-w1-fri-b", name: "Fri", title: "Weekly Quiz",
                            sections: [
                                {
                                    instruction: "Round 8.482 to the nearest hundredth.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 8.48 }] } ]
                                },
                                {
                                    instruction: "Enter the number that 0.495 rounds to when rounded to the nearest tenth.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 0.5 }] } ]
                                },
                                {
                                    instruction: "Which expression is equal to 208.584?",
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'2 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 8 x 1'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 5 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 8 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 4 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]}
                                        ], correct: true },
                                        { id: 'opt2', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'2 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 8 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 5 x ('}, {type:'fraction', n:'1', d:'1'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 8 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 4 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]}
                                        ], correct: false },
                                        { id: 'opt3', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'2 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 8 x 1'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 5 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 8 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 4 x 1,000'}]}
                                        ], correct: false },
                                        { id: 'opt4', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'2 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 8 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 5 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 8 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 4 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]}
                                        ], correct: false }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    weekNum: 2,
                    helperHub: helperHubW2_Mod5,
                    days: [
                        {
                            id: "m5-w2-mon-b", name: "Mon", title: "Comparisons & Rounding",
                            sections: [
                                {
                                    instruction: "Select all true comparisons.",
                                    type: "multiple_choice",
                                    select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'405.26 > 405.06'}], correct: true },
                                        { id: 'opt2', content: [{type:'text', val:'33.8 > 33.801'}], correct: false },
                                        { id: 'opt3', content: [{type:'text', val:'0.77 < 0.770'}], correct: false },
                                        { id: 'opt4', content: [{type:'text', val:'4.02 = 4.020'}], correct: true }
                                    ]
                                },
                                {
                                    instruction: "What is 26.3957 rounded to the nearest thousandth?",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 26.396 }] } ]
                                },
                                {
                                    instruction: "Round 28.174 to the nearest hundredth.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 28.17 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m5-w2-tue-b", name: "Tue", title: "Reasoning & Expanded Form",
                            sections: [
                                {
                                    instruction: "Select all the decimals below that are greater than 35.4 and less than 35.5.",
                                    type: "multiple_choice",
                                    select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'35.45'}], correct: true },
                                        { id: 'opt2', content: [{type:'text', val:'35.04'}], correct: false },
                                        { id: 'opt3', content: [{type:'text', val:'35.482'}], correct: true },
                                        { id: 'opt4', content: [{type:'text', val:'35.51'}], correct: false },
                                        { id: 'opt5', content: [{type:'text', val:'35.40'}], correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter a number equal to the value of the expression:",
                                    instructionMath: [
                                        {type:'term_wrap', items: [{type:'text', val:'(6 x 10)'}]},
                                        {type:'term_wrap', items: [{type:'text', val:' + 5 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                        {type:'term_wrap', items: [{type:'text', val:' + 3 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]}
                                    ],
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 60.503 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m5-w2-wed-b", name: "Wed", title: "Comparisons & Expanded Form",
                            sections: [
                                {
                                    instruction: "Select all true comparisons.",
                                    type: "multiple_choice",
                                    select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'12.6 = 12.60'}], correct: true },
                                        { id: 'opt2', content: [{type:'text', val:'5.08 < 5.008'}], correct: false },
                                        { id: 'opt3', content: [{type:'text', val:'8.103 > 8.13'}], correct: false },
                                        { id: 'opt4', content: [{type:'text', val:'2.34 > 2.304'}], correct: true }
                                    ]
                                },
                                {
                                    instruction: "Which expression is equal to 60.048?",
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'6 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 4 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 8 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]}
                                        ], correct: false },
                                        { id: 'opt2', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'6 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 4 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 8 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]}
                                        ], correct: true },
                                        { id: 'opt3', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'6 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 4 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 8 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]}
                                        ], correct: false },
                                        { id: 'opt4', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'6 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 4 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 8 x 1'}]}
                                        ], correct: false }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m5-w2-thu-b", name: "Thu", title: "Reasoning & Rounding",
                            sections: [
                                {
                                    instruction: "Select all the decimals below that are greater than 204.7 and less than 204.8.",
                                    type: "multiple_choice",
                                    select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'204.73'}], correct: true },
                                        { id: 'opt2', content: [{type:'text', val:'204.81'}], correct: false },
                                        { id: 'opt3', content: [{type:'text', val:'204.709'}], correct: true },
                                        { id: 'opt4', content: [{type:'text', val:'204.07'}], correct: false },
                                        { id: 'opt5', content: [{type:'text', val:'204.80'}], correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the value of 8.887 rounded to the nearest hundredth.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 8.89 }] } ]
                                },
                                {
                                    instruction: "Round 3.54 to the nearest tenth.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 3.5 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m5-w2-fri-b", name: "Fri", title: "Module Quiz",
                            sections: [
                                {
                                    instruction: "Select all the decimals below that are greater than 8.7 and less than 8.8.",
                                    type: "multiple_choice",
                                    select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'8.76'}], correct: true },
                                        { id: 'opt2', content: [{type:'text', val:'8.704'}], correct: true },
                                        { id: 'opt3', content: [{type:'text', val:'8.81'}], correct: false },
                                        { id: 'opt4', content: [{type:'text', val:'8.70'}], correct: false },
                                        { id: 'opt5', content: [{type:'text', val:'8.79'}], correct: true }
                                    ]
                                },
                                {
                                    instruction: "Enter a number equal to the value of the expression:",
                                    instructionMath: [
                                        {type:'term_wrap', items: [{type:'text', val:'(4 x 100)'}]},
                                        {type:'term_wrap', items: [{type:'text', val:' + (3 x 10)'}]},
                                        {type:'term_wrap', items: [{type:'text', val:' + 5 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]}
                                    ],
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 430.05 }] } ]
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
                    helperHub: helperHubW1_Mod5,
                    days: [
                        {
                            id: "m5-w1-mon-c", name: "Mon", title: "Expanded Form & Rounding",
                            sections: [
                                {
                                    instruction: "Which expression is equal to 436.725?",
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'4 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 3 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 6 x 1'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 7 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 2 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 5 x 1,000'}]}
                                        ], correct: false },
                                        { id: 'opt2', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'4 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 3 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 6 x 1'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 7 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 2 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 5 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]}
                                        ], correct: true },
                                        { id: 'opt3', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'4 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 3 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 6 x 1'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 7 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 2 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 5 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]}
                                        ], correct: false },
                                        { id: 'opt4', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'4 x 10,000'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 3 x 1,000'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 6 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 7 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 2 x 1'}]}
                                        ], correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the number that 52.174 rounds to when rounded to the nearest hundredth.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 52.17 }] } ]
                                },
                                {
                                    instruction: "Round 8.452 to the nearest tenth.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 8.5 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m5-w1-tue-c", name: "Tue", title: "Expanded Form & Comparisons",
                            sections: [
                                {
                                    instruction: "Enter a number equal to the value of the expression:",
                                    instructionMath: [
                                        {type:'term_wrap', items: [{type:'text', val:'(5 x 1000)'}]},
                                        {type:'term_wrap', items: [{type:'text', val:' + (2 x 10)'}]},
                                        {type:'term_wrap', items: [{type:'text', val:' + 4 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                        {type:'term_wrap', items: [{type:'text', val:' + 8 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]}
                                    ],
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 5020.408 }] } ]
                                },
                                {
                                    instruction: "Select the symbol that correctly completes this comparison.",
                                    instructionMath: [
                                        {type:'text', val:'0.74 '}, {type:'circle_box'}, {type:'text', val:' 0.074'}
                                    ],
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'>'}], correct: true },
                                        { id: 'opt2', content: [{type:'text', val:'<'}], correct: false },
                                        { id: 'opt3', content: [{type:'text', val:'='}], correct: false }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m5-w1-wed-c", name: "Wed", title: "Expanded Form & Rounding",
                            sections: [
                                {
                                    instruction: "Which expression is equal to 8,035.074?",
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'8 x 1000'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 3 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 5 x 1'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 7 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 4 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]}
                                        ], correct: false },
                                        { id: 'opt2', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'8 x 1,000,000'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 3 x 10,000'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 5 x 1,000'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 7 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 4 x 1'}]}
                                        ], correct: false },
                                        { id: 'opt3', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'8 x 1000'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 3 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 5 x 1'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 7 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 4 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]}
                                        ], correct: true },
                                        { id: 'opt4', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'8 x 1000'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 3 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 5 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 7 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 4 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]}
                                        ], correct: false }
                                    ]
                                },
                                {
                                    instruction: "What is 207.653 rounded to the nearest tenth? Enter your answer in the box.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 207.7 }] } ]
                                },
                                {
                                    instruction: "Enter the value of 73.48 rounded to the nearest tenth.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 73.5 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m5-w1-thu-c", name: "Thu", title: "Comparisons & Expanded Form",
                            sections: [
                                {
                                    instruction: "Select all true comparisons.",
                                    type: "multiple_choice",
                                    select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'52.703 > 52.73'}], correct: false },
                                        { id: 'opt2', content: [{type:'text', val:'8.060 = 8.06'}], correct: true },
                                        { id: 'opt3', content: [{type:'text', val:'17.58 < 17.581'}], correct: true },
                                        { id: 'opt4', content: [{type:'text', val:'0.06 > 0.1'}], correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter a number equal to the value of the expression:",
                                    instructionMath: [
                                        {type:'term_wrap', items: [{type:'text', val:'(7 x 100)'}]},
                                        {type:'term_wrap', items: [{type:'text', val:' + (3 x 1)'}]},
                                        {type:'term_wrap', items: [{type:'text', val:' + 6 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                        {type:'term_wrap', items: [{type:'text', val:' + 2 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]}
                                    ],
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 703.62 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m5-w1-fri-c", name: "Fri", title: "Weekly Quiz",
                            sections: [
                                {
                                    instruction: "Round 5.273 to the nearest hundredth.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 5.27 }] } ]
                                },
                                {
                                    instruction: "Enter the number that 0.281 rounds to when rounded to the nearest tenth.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 0.3 }] } ]
                                },
                                {
                                    instruction: "Which expression is equal to 309.672?",
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'3 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 9 x 1'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 6 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 7 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 2 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]}
                                        ], correct: true },
                                        { id: 'opt2', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'3 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 9 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 6 x ('}, {type:'fraction', n:'1', d:'1'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 7 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 2 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]}
                                        ], correct: false },
                                        { id: 'opt3', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'3 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 9 x 1'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 6 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 7 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 2 x 1,000'}]}
                                        ], correct: false },
                                        { id: 'opt4', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'3 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 9 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 6 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 7 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 2 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]}
                                        ], correct: false }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    weekNum: 2,
                    helperHub: helperHubW2_Mod5,
                    days: [
                        {
                            id: "m5-w2-mon-c", name: "Mon", title: "Comparisons & Rounding",
                            sections: [
                                {
                                    instruction: "Select all true comparisons.",
                                    type: "multiple_choice",
                                    select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'506.38 > 506.08'}], correct: true },
                                        { id: 'opt2', content: [{type:'text', val:'41.7 > 41.701'}], correct: false },
                                        { id: 'opt3', content: [{type:'text', val:'0.55 < 0.550'}], correct: false },
                                        { id: 'opt4', content: [{type:'text', val:'7.03 = 7.030'}], correct: true }
                                    ]
                                },
                                {
                                    instruction: "What is 34.1758 rounded to the nearest thousandth?",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 34.176 }] } ]
                                },
                                {
                                    instruction: "Round 37.082 to the nearest hundredth.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 37.08 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m5-w2-tue-c", name: "Tue", title: "Reasoning & Expanded Form",
                            sections: [
                                {
                                    instruction: "Select all the decimals below that are greater than 42.6 and less than 42.7.",
                                    type: "multiple_choice",
                                    select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'42.65'}], correct: true },
                                        { id: 'opt2', content: [{type:'text', val:'42.07'}], correct: false },
                                        { id: 'opt3', content: [{type:'text', val:'42.691'}], correct: true },
                                        { id: 'opt4', content: [{type:'text', val:'42.71'}], correct: false },
                                        { id: 'opt5', content: [{type:'text', val:'42.60'}], correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter a number equal to the value of the expression:",
                                    instructionMath: [
                                        {type:'term_wrap', items: [{type:'text', val:'(4 x 10)'}]},
                                        {type:'term_wrap', items: [{type:'text', val:' + 7 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                        {type:'term_wrap', items: [{type:'text', val:' + 8 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]}
                                    ],
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 40.708 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m5-w2-wed-c", name: "Wed", title: "Comparisons & Expanded Form",
                            sections: [
                                {
                                    instruction: "Select all true comparisons.",
                                    type: "multiple_choice",
                                    select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'23.8 = 23.80'}], correct: true },
                                        { id: 'opt2', content: [{type:'text', val:'7.05 < 7.005'}], correct: false },
                                        { id: 'opt3', content: [{type:'text', val:'6.104 > 6.14'}], correct: false },
                                        { id: 'opt4', content: [{type:'text', val:'3.45 > 3.405'}], correct: true }
                                    ]
                                },
                                {
                                    instruction: "Which expression is equal to 40.059?",
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'4 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 5 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 9 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]}
                                        ], correct: false },
                                        { id: 'opt2', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'4 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 5 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 9 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]}
                                        ], correct: true },
                                        { id: 'opt3', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'4 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 5 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 9 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]}
                                        ], correct: false },
                                        { id: 'opt4', content: [
                                            {type:'term_wrap', items: [{type:'text', val:'4 x 100'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 5 x 10'}]},
                                            {type:'term_wrap', items: [{type:'text', val:' + 9 x 1'}]}
                                        ], correct: false }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m5-w2-thu-c", name: "Thu", title: "Reasoning & Rounding",
                            sections: [
                                {
                                    instruction: "Select all the decimals below that are greater than 306.8 and less than 306.9.",
                                    type: "multiple_choice",
                                    select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'306.84'}], correct: true },
                                        { id: 'opt2', content: [{type:'text', val:'306.91'}], correct: false },
                                        { id: 'opt3', content: [{type:'text', val:'306.805'}], correct: true },
                                        { id: 'opt4', content: [{type:'text', val:'306.08'}], correct: false },
                                        { id: 'opt5', content: [{type:'text', val:'306.90'}], correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the value of 7.778 rounded to the nearest hundredth.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 7.78 }] } ]
                                },
                                {
                                    instruction: "Round 4.65 to the nearest tenth.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 4.7 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m5-w2-fri-c", name: "Fri", title: "Module Quiz",
                            sections: [
                                {
                                    instruction: "Select all the decimals below that are greater than 7.6 and less than 7.7.",
                                    type: "multiple_choice",
                                    select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'7.65'}], correct: true },
                                        { id: 'opt2', content: [{type:'text', val:'7.608'}], correct: true },
                                        { id: 'opt3', content: [{type:'text', val:'7.71'}], correct: false },
                                        { id: 'opt4', content: [{type:'text', val:'7.60'}], correct: false },
                                        { id: 'opt5', content: [{type:'text', val:'7.69'}], correct: true }
                                    ]
                                },
                                {
                                    instruction: "Enter a number equal to the value of the expression:",
                                    instructionMath: [
                                        {type:'term_wrap', items: [{type:'text', val:'(6 x 100)'}]},
                                        {type:'term_wrap', items: [{type:'text', val:' + (4 x 10)'}]},
                                        {type:'term_wrap', items: [{type:'text', val:' + 2 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]}
                                    ],
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'whole_number', ans: 640.02 }] } ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};