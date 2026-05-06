// --- MODULE 5 DATA (REVIEW) ---

const helperHubW1_Mod5 = {
    title: "★ Helper Hub: Be a Math Detective!",
    content: `
        <div style="font-size:15px; line-height: 1.4;">
            <p style="margin-top:0; margin-bottom:12px;">Fourth-grade math requires you to be a math detective. Don't just guess—prove it!</p>
            
            <div class="print-stack" style="display:flex; gap:15px; align-items:stretch; break-inside: avoid;">
                <div style="flex:1; border:2px solid #ccc; padding:15px; border-radius:10px; background:#fff;">
                    <strong style="font-size:16px; color:#e74c3c;">Show Your Evidence (Scratch Paper)</strong><br><br>
                    Your scratch paper is your best tool. Use it to draw area models, fraction bars, and number lines. 
                    When you write down your steps, you give your brain a break from holding all the numbers, which prevents silly mistakes!
                </div>
                
                <div style="flex:1; border:2px solid #ccc; padding:15px; border-radius:10px; background:#fff;">
                    <strong style="font-size:16px; color:#2c7be5;">The "Does It Make Sense?" Check</strong><br><br>
                    Before you answer, use <strong>Estimation</strong>. <br><br>
                    If a problem asks for <em>48 &times; 12</em>, think: "50 &times; 10 is 500." If your exact answer is 48,000, you instantly know something went wrong! Catch those errors before they catch you.
                </div>
            </div>
        </div>
    `
};

const helperHubW2_Mod5 = {
    title: "★ Helper Hub: Test-Day Superpowers",
    content: `
        <div style="font-size:15px; line-height: 1.4;">
            <p style="margin-top:0; margin-bottom:12px;">Big tests like the CAASPP are just a chance to show off your hard work. Use these two superpowers!</p>
            
            <div class="print-stack" style="display:flex; gap:15px; align-items:stretch; break-inside: avoid;">
                <div style="flex:1; border:2px solid #ccc; padding:15px; border-radius:10px; background:#fff;">
                    <strong style="font-size:16px; color:#27ae60;">Superpower 1: The "3 Reads" Method</strong><br><br>
                    Don't just rush to the numbers! Read word problems 3 times:<br>
                    <span style="color:#27ae60; font-weight:bold;">1. The Story:</span> What is happening in this problem?<br>
                    <span style="color:#27ae60; font-weight:bold;">2. The Clues:</span> What are the numbers, and are there any extra numbers we <em>don't</em> need?<br>
                    <span style="color:#27ae60; font-weight:bold;">3. The Goal:</span> What is the exact question asking? Is it a multi-step problem?
                </div>
                <div style="flex:1; border:2px solid #ccc; padding:15px; border-radius:10px; background:#fff;">
                    <strong style="font-size:16px; color:#8e44ad;">Superpower 2: The Bullseye Approach</strong><br><br>
                    Aim for the very best answer on multiple choice!<br>
                    <span style="color:#8e44ad; font-weight:bold;">1. Eliminate</span> options that are obviously too big or too small.<br>
                    <span style="color:#8e44ad; font-weight:bold;">2. Trap Alert!</span> Watch out for "halfway" answers (the answer to step 1 of a 2-step problem).<br>
                    <span style="color:#8e44ad; font-weight:bold;">3. Verify:</span> Does this option actually answer the question being asked?
                </div>
            </div>
        </div>
    `
};

const module5 = {
    id: "mod-5",
    name: "Mixed Review (Modules 1 - 4)",
    
    helperHubs: {
        week1: helperHubW1_Mod5,
        week2: helperHubW2_Mod5
    },

    versions: {
        A: {
            weeks: [
                {
                    weekNum: 1, // Week 1 focuses on Modules 1 & 2
                    days: [
                        {
                            id: "m5-w1-mon", name: "Mon", title: "Week 1: Monday",
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A recipe calls for ' }, { type: 'fraction', n: '3', d: '8' }, { type: 'text', val: ' cup of sugar and ' }, { type: 'fraction', n: '2', d: '8' }, { type: 'text', val: ' cup of flour. How many cups of ingredients are used in total?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: ' }, { type: 'fraction_group', ans: 0.625 }, { type: 'text', val: ' cups' }] }]
                                },
                                {
                                    instruction: "Determine whether each comparison is true or false.", type: "grid", col1: "True", col2: "False",
                                    rows: [
                                        { segments: [{ type: 'text', val: '0.7 > 0.07' }], correct: true },
                                        { segments: [{ type: 'text', val: '0.45 = 0.54' }], correct: false }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m5-w1-tue", name: "Tue", title: "Week 1: Tuesday", 
                            sections: [
                                {
                                    instruction: "Enter the unknown number to make the fractions equivalent.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'fraction', n: '3', d: '4' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '12', ans: '9' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A ribbon is ' }, { type: 'fraction', n: '7', d: '10' }, { type: 'text', val: ' meter long. Sarah cuts off ' }, { type: 'fraction', n: '4', d: '10' }, { type: 'text', val: ' meter. How much ribbon is left?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: ' }, { type: 'fraction_group', ans: 0.3 }, { type: 'text', val: ' meter' }] }]
                                }
                            ] 
                        },
                        { 
                            id: "m5-w1-wed", name: "Wed", title: "Week 1: Wednesday", 
                            sections: [
                                {
                                    instruction: "Select all the fractions that are equivalent to 1/2.", type: "matrix_match",
                                    colHeaders: [{ type: 'fraction', n: 2, d: 4 }, { type: 'fraction', n: 4, d: 8 }, { type: 'fraction', n: 3, d: 5 }],
                                    rows: [
                                        { label: { type: 'fraction', n: 1, d: 2 }, matches: [true, true, false] }
                                    ]
                                },
                                {
                                    instruction: "Enter the sum.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'fraction', n: '5', d: '10' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '23', d: '100' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '100', ans: '73' }] }]
                                }
                            ] 
                        },
                        {
                            id: "m5-w1-thu", name: "Thu", title: "Week 1: Thursday",
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'John runs ' }, { type: 'fraction', n: '1', d: '5' }, { type: 'text', val: ' of a mile on Monday, ' }, { type: 'fraction', n: '2', d: '5' }, { type: 'text', val: ' of a mile on Tuesday, and ' }, { type: 'fraction', n: '1', d: '5' }, { type: 'text', val: ' of a mile on Wednesday. How far did he run in total?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: ' }, { type: 'fraction_group', ans: 0.8 }, { type: 'text', val: ' miles' }] }]
                                },
                                {
                                    instruction: "Determine whether each comparison is true or false.", type: "grid", col1: "True", col2: "False",
                                    rows: [
                                        { segments: [{ type: 'fraction', n: '8', d: '10' }, { type: 'text', val: ' = 0.8' }], correct: true },
                                        { segments: [{ type: 'text', val: '0.3 < 0.25' }], correct: false }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m5-w1-fri", name: "Fri", title: "Week 1: Friday", 
                            sections: [
                                {
                                    instruction: "Enter the unknown number to make the equation true.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'fraction', n: '3', d: '6' }, { type: 'text', val: ' = ' }, { type: 'text', val: '3 &times; ' }, { type: 'fraction', n: '1', d: 'box', ans: '6' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A baker uses ' }, { type: 'fraction', n: '2', d: '3' }, { type: 'text', val: ' cup of flour for one batch of cookies. How much flour is needed for 4 batches?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: ' }, { type: 'fraction_group', ans: 2.666 }, { type: 'text', val: ' OR ' }, { type: 'mixed_input', ans: 2.666 }, { type: 'text', val: ' cups' }] }]
                                }
                            ] 
                        }
                    ]
                },
                {
                    weekNum: 2, // Week 2 focuses on Modules 3 & 4
                    days: [
                        {
                            id: "m5-w2-mon", name: "Mon", title: "Week 2: Monday",
                            sections: [
                                {
                                    instruction: "Enter the sum.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("54,291", "28,347", "+") }, { type: 'input', ans: "82638" }] }]
                                },
                                {
                                    instruction: "Select True or False for each comparison.", type: "grid", col1: "True", col2: "False",
                                    rows: [
                                        { segments: [{ type: 'fraction', n: '3', d: '8' }, { type: 'text', val: ' > ' }, { type: 'fraction', n: '1', d: '4' }], correct: true },
                                        { segments: [{ type: 'fraction', n: '2', d: '5' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: '4', d: '10' }], correct: true },
                                        { segments: [{ type: 'fraction', n: '5', d: '6' }, { type: 'text', val: ' < ' }, { type: 'fraction', n: '2', d: '3' }], correct: false }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m5-w2-tue", name: "Tue", title: "Week 2: Tuesday", 
                            sections: [
                                {
                                    instruction: "Enter the difference.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("40,000", "15,824", "-") }, { type: 'input', ans: "24176" }] }]
                                },
                                {
                                    instruction: "Select the statement that explains how the values of the numbers 420 and 4200 are different.", type: "multiple_choice",
                                    options: [
                                        { text: "4200 is 10 times as large as 420.", correct: true },
                                        { text: "4200 is 100 times as large as 420.", correct: false },
                                        { text: "4200 is 1000 times as large as 420.", correct: false }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m5-w2-wed", name: "Wed", title: "Week 2: Wednesday", 
                            sections: [
                                {
                                    instruction: "Order the fractions from least to greatest.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: 'Fractions: ' }, { type: 'fraction', n: '2', d: '3' }, { type: 'text', val: ', ' }, { type: 'fraction', n: '1', d: '6' }, { type: 'text', val: ', ' }, { type: 'fraction', n: '4', d: '12' }, { type: 'text', val: '<br><br>Order: ' }, { type: 'fraction_group', ans: 0.166 }, { type: 'text', val: ', ' }, { type: 'fraction_group', ans: 0.333 }, { type: 'text', val: ', ' }, { type: 'fraction_group', ans: 0.666 }] }]
                                },
                                {
                                    instruction: "What digit can you put in the box to make the comparison true?", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "35,_12 &nbsp; < &nbsp; 35,412 &nbsp;&nbsp;&nbsp;&nbsp; Missing digit: " }, { type: 'input', ans: "0|1|2|3" }] }]
                                }
                            ] 
                        },
                        {
                            id: "m5-w2-thu", name: "Thu", title: "Week 2: Thursday",
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A rope is ' }, { type: 'fraction', n: '3', d: '4' }, { type: 'text', val: ' yard long. A string is ' }, { type: 'fraction', n: '5', d: '8' }, { type: 'text', val: ' yard long. Which is longer, the rope or the string?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer (type rope or string): ' }, { type: 'input', ans: 'rope' }] }]
                                },
                                {
                                    instruction: "Enter the symbol (<, >, or =) to make the comparison true.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "8 thousands + 4 tens &nbsp; " }, { type: 'input', ans: "=" }, { type: 'text', val: "&nbsp; 8,040" }] }]
                                }
                            ]
                        },
                        { 
                            id: "m5-w2-fri", name: "Fri", title: "Week 2: Friday", 
                            sections: [
                                {
                                    instruction: "Match the fraction to the equivalent visual model.", type: "matrix_match",
                                    colHeaders: [{ type: 'pie', n: 1, d: 2 }, { type: 'pie', n: 3, d: 4 }, { type: 'pie', n: 2, d: 6 }],
                                    rows: [
                                        { label: { type: 'fraction', n: 4, d: 8 }, matches: [true, false, false] },
                                        { label: { type: 'fraction', n: 1, d: 3 }, matches: [false, false, true] },
                                        { label: { type: 'fraction', n: 75, d: 100 }, matches: [false, true, false] }
                                    ]
                                },
                                {
                                    instruction: "Round the number to the requested place value.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "Round 192,499 to the nearest ten thousand: &nbsp;" }, { type: 'input', ans: "190000" }] }]
                                }
                            ] 
                        }
                    ]
                }
            ]
        }
    }
};