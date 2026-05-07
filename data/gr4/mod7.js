// --- MODULE 7 DATA ---
const module7 = {
    id: "mod-7", 
    name: "Multidigit Arithmetic: Place Value and Operations", 
    
    helperHubs: {
        week1: {
            title: "★ Helper Hub: Breaking Down Big Multiplication",
            content: `
                <div style="font-size:15px; line-height: 1.4;">
                    <p style="margin-top:0; margin-bottom:10px;">When multiplying large numbers, you can break them into smaller, easier pieces using expanded form!</p>
                    
                    <div style="display:flex; gap:15px; align-items:flex-start; break-inside: avoid;">
                        <div style="flex:1; padding:15px; border:2px solid #ccc; border-radius:10px; background:#fff;">
                            <strong style="font-size:16px; color:#2c7be5;">Partial Products Strategy</strong><br><br>
                            How do we solve <strong>234 &times; 7</strong>?<br>
                            Break 234 into its place values: <strong>200 + 30 + 4</strong><br><br>
                            Set up the expression:<br>
                            <div style="font-family:monospace; font-weight:bold; font-size:16px; margin:5px 0; color:#e74c3c;">
                                7 &times; (200 + 30 + 4)
                            </div>
                            Multiply each piece by 7:<br>
                            • 200 &times; 7 = 1,400<br>
                            • 30 &times; 7 = 210<br>
                            • 4 &times; 7 = 28<br><br>
                            Add them all up! <strong>1,400 + 210 + 28 = 1,638</strong>
                        </div>
                        <div style="flex:1; padding:15px; border:2px solid #ccc; border-radius:10px; background:#fff; text-align:center;">
                            <strong style="font-size:16px; color:#27ae60;">Writing the Expression</strong><br><br>
                            Sometimes tests will ask you to pick the expression that matches this strategy. It looks like this:<br><br>
                            <span style="font-family:monospace; font-weight:bold; font-size: 16px;">
                                (200 &times; 7) + (30 &times; 7) + (4 &times; 7)
                            </span><br><br>
                            <em>Remember: Each place value piece MUST be multiplied by the outside number!</em>
                        </div>
                    </div>
                </div>`
        },
        week2: {
            title: "★ Helper Hub: The Area Model & Remainders",
            content: `
                <div style="font-size:15px; line-height: 1.4;">
                    <div class="print-stack" style="display:flex; gap:15px; align-items:stretch; break-inside: avoid;">
                        <div style="flex:1.2; padding:10px 15px; border:2px solid #ccc; border-radius:10px; background:#fff;">
                            <strong style="font-size:16px; color:#e74c3c;">The Area Model (Box Method)</strong><br>
                            Solve <strong>34 &times; 15</strong> by breaking BOTH numbers apart!<br>
                            34 becomes <span style="color:#2c7be5; font-weight:bold;">(30 + 4)</span>. 15 becomes <span style="color:#e74c3c; font-weight:bold;">(10 + 5)</span>.<br>
                            
                            <table style="width:100%; text-align:center; border-collapse:collapse; margin: 10px 0; font-size: 14px;">
                                <tr>
                                    <td></td>
                                    <td style="color:#2c7be5; font-weight:bold; padding-bottom:5px;">30</td>
                                    <td style="color:#2c7be5; font-weight:bold; padding-bottom:5px;">4</td>
                                </tr>
                                <tr>
                                    <td style="color:#e74c3c; font-weight:bold; padding-right:5px;">10</td>
                                    <td style="border:2px solid #333; background:#f0f8ff; padding:8px;">30 &times; 10 = <strong>300</strong></td>
                                    <td style="border:2px solid #333; background:#f0f8ff; padding:8px;">4 &times; 10 = <strong>40</strong></td>
                                </tr>
                                <tr>
                                    <td style="color:#e74c3c; font-weight:bold; padding-right:5px;">5</td>
                                    <td style="border:2px solid #333; background:#fff9e6; padding:8px;">30 &times; 5 = <strong>150</strong></td>
                                    <td style="border:2px solid #333; background:#fff9e6; padding:8px;">4 &times; 5 = <strong>20</strong></td>
                                </tr>
                            </table>
                            Add the inside pieces: <strong>300 + 150 + 40 + 20 = 510</strong>
                        </div>
                        <div style="flex:0.8; padding:10px 15px; border:2px solid #ccc; border-radius:10px; background:#fff;">
                            <strong style="font-size:16px; color:#8e44ad;">What is a Remainder?</strong><br><br>
                            Division is about making equal groups. But sometimes, things don't fit perfectly!<br><br>
                            <strong>17 &divide; 5 = ?</strong><br>
                            If you have 17 cookies and put 5 in each bag, you can fill 3 bags completely (15 cookies).<br><br>
                            You have 2 cookies left over. That is your <strong>Remainder</strong>!<br>
                            Answer: <strong>3 R2</strong>
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
                            id: "m7-w1-mon", name: "Mon", title: "Week 1: Monday",
                            sections: [
                                {
                                    instruction: "Enter the sum.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("38,452", "25,694", "+") }, { type: 'input', ans: "64146" }] }]
                                },
                                {
                                    instruction: "Select the equation that has the same unknown number as 834 &divide; 6 = <span class='unknown-box'></span>.", type: "multiple_choice",
                                    options: [
                                        { text: "834 &times; 6 = <span class='unknown-box'></span>", correct: false },
                                        { text: "834 &times; <span class='unknown-box'></span> = 6", correct: false },
                                        { text: "6 &times; <span class='unknown-box'></span> = 834", correct: true },
                                        { text: "<span class='unknown-box'></span> &times; 834 = 6", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Review: Solve the word problem.", type: "word_problem",
                                    textSegments: [{ type: 'text', val: "A dog weighs 15 pounds. A bear weighs 60 pounds. How many times heavier is the bear than the dog?" }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '4' }, { type: 'text', val: ' times heavier' }] }]
                                }
                            ]
                        },
                        { 
                            id: "m7-w1-tue", name: "Tue", title: "Week 1: Tuesday", 
                            sections: [
                                {
                                    instruction: "Enter the difference.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("8,452", "3,175", "-") }, { type: 'input', ans: "5277" }] }]
                                },
                                {
                                    instruction: "Which expression is equal to 234 &times; 7?", type: "multiple_choice",
                                    options: [
                                        { text: "(200 + 30 + 4) + 7", correct: false },
                                        { text: "(200 &times; 30 &times; 4) &times; 7", correct: false },
                                        { text: "(200 &times; 7) + (30 &times; 7) + (4 &times; 7)", correct: true },
                                        { text: "(200 &times; 7) &times; (30 &times; 7) &times; (4 &times; 7)", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Review: Determine whether the comparison is true or false.", type: "grid", col0: "Equation", col1: "True", col2: "False",
                                    rows: [{ segments: [{ type: 'text', val: '0.40 = 0.04' }], correct: false }]
                                }
                            ] 
                        },
                        { 
                            id: "m7-w1-wed", name: "Wed", title: "Week 1: Wednesday", 
                            sections: [
                                {
                                    instruction: "Enter the product.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("4,285", "4", "&times;") }, { type: 'input', ans: "17140" }] }]
                                },
                                {
                                    instruction: "Enter the unknown number that makes the equation true.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "63 &times; 48 = (60 + 3) &times; ( &nbsp;" }, { type: 'input', ans: "40" }, { type: 'text', val: "&nbsp; + 8 )" }] }]
                                },
                                {
                                    instruction: "Review: Find the equivalent fraction.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'fraction', n: 1, d: 4 }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', ansN: '3', d: 12 }] }]
                                }
                            ] 
                        },
                        {
                            id: "m7-w1-thu", name: "Thu", title: "Week 1: Thursday",
                            sections: [
                                {
                                    instruction: "Enter the difference.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("60,000", "24,318", "-") }, { type: 'input', ans: "35682" }] }]
                                },
                                {
                                    instruction: "Select the equation that has the same unknown number as 525 &divide; 5 = <span class='unknown-box'></span>.", type: "multiple_choice",
                                    options: [
                                        { text: "<span class='unknown-box'></span> &times; 5 = 525", correct: true },
                                        { text: "525 &times; 5 = <span class='unknown-box'></span>", correct: false },
                                        { text: "525 &times; <span class='unknown-box'></span> = 5", correct: false }
                                    ]
                                },
                                { 
                                    instruction: "Review: Round the number to the requested place value.", type: "mixed_row", 
                                    problems: [{ segments: [{ type: 'text', val: "Round 73,815 to the nearest thousand: &nbsp;" }, { type: 'input', ans: "74000" }] }]
                                }
                            ]
                        },
                        { 
                            id: "m7-w1-fri", name: "Fri", title: "Week 1: Friday", 
                            sections: [
                                {
                                    instruction: "Enter the sum.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("57,841", "19,032", "+") }, { type: 'input', ans: "76873" }] }]
                                },
                                {
                                    instruction: "Enter the product.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("357", "8", "&times;") }, { type: 'input', ans: "2856" }] }]
                                },
                                {
                                    instruction: "Which expression is equal to 453 &times; 6?", type: "multiple_choice",
                                    options: [
                                        { text: "(400 &times; 6) + (50 &times; 6) + (3 &times; 6)", correct: true },
                                        { text: "(400 + 50 + 3) + 6", correct: false },
                                        { text: "(400 &times; 6) &times; (50 &times; 6) &times; (3 &times; 6)", correct: false }
                                    ]
                                }
                            ] 
                        }
                    ]
                },
                {
                    weekNum: 2,
                    days: [
                        {
                            id: "m7-w2-mon", name: "Mon", title: "Week 2: Monday",
                            sections: [
                                {
                                    instruction: "Enter the quotient in the first response box. If there is a remainder, enter it in the second response box.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: '92 &divide; 7 = &nbsp;&nbsp; Quotient: ' }, { type: 'input', ans: '13' }, { type: 'text', val: '&nbsp;&nbsp; Remainder: ' }, { type: 'input', ans: '1' }] }]
                                },
                                {
                                    instruction: "Which strategy for multiplying 34 and 15 should result in the correct product?", type: "multiple_choice",
                                    options: [
                                        { text: "(30 &times; 10) + (4 &times; 5)", correct: false },
                                        { text: "300 + 150 + 40 + 20", correct: true },
                                        { text: "300 + 20", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Review: Add the fractions.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'fraction', n: '4', d: '10' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '3', d: '10' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', ansN: '7', d: 10 }] }]
                                }
                            ]
                        },
                        { 
                            id: "m7-w2-tue", name: "Tue", title: "Week 2: Tuesday", 
                            sections: [
                                {
                                    instruction: "Enter the quotient in the first response box. If there is a remainder, enter it in the second response box.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: '2453 &divide; 6 = &nbsp;&nbsp; Quotient: ' }, { type: 'input', ans: '408' }, { type: 'text', val: '&nbsp;&nbsp; Remainder: ' }, { type: 'input', ans: '5' }] }]
                                },
                                {
                                    instruction: "Enter the unknown number that makes the equation true.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "72 &times; 16 = (70 + 2) &times; (10 + &nbsp;" }, { type: 'input', ans: "6" }, { type: 'text', val: "&nbsp; )" }] }]
                                },
                                {
                                    instruction: "Review: Solve the word problem.", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A library has 120 books to organize equally onto 5 shelves. How many books will be placed on each shelf?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '24' }, { type: 'text', val: ' books' }] }]
                                }
                            ]
                        },
                        { 
                            id: "m7-w2-wed", name: "Wed", title: "Week 2: Wednesday", 
                            sections: [
                                {
                                    instruction: "Enter the product.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("6,084", "5", "&times;") }, { type: 'input', ans: "30420" }] }]
                                },
                                {
                                    instruction: "Enter the quotient in the first response box. If there is a remainder, enter it in the second response box.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: '3817 &divide; 4 = &nbsp;&nbsp; Quotient: ' }, { type: 'input', ans: '954' }, { type: 'text', val: '&nbsp;&nbsp; Remainder: ' }, { type: 'input', ans: '1' }] }]
                                },
                                {
                                    instruction: "Review: Enter the symbol (<, >, or =) to make the comparison true.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "5 thousands + 8 tens &nbsp; " }, { type: 'input', ans: "=" }, { type: 'text', val: "&nbsp; 5,080" }] }]
                                }
                            ] 
                        },
                        {
                            id: "m7-w2-thu", name: "Thu", title: "Week 2: Thursday",
                            sections: [
                                {
                                    instruction: "Select the equation that has the same unknown number as <span class='unknown-box'></span> &divide; 6 = 205.", type: "multiple_choice",
                                    options: [
                                        { text: "205 &times; <span class='unknown-box'></span> = 6", correct: false },
                                        { text: "205 &times; 6 = <span class='unknown-box'></span>", correct: true },
                                        { text: "<span class='unknown-box'></span> &times; 6 = 205", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the quotient in the first response box. If there is a remainder, enter it in the second box.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: '835 &divide; 7 = &nbsp;&nbsp; Quotient: ' }, { type: 'input', ans: '119' }, { type: 'text', val: '&nbsp;&nbsp; Remainder: ' }, { type: 'input', ans: '2' }] }]
                                },
                                { 
                                    instruction: "Review: What is the value of point Q?", type: "number_line", start: 0, end: 1, step: 0.1, target: 0.8, label: "Q", ans: "0.8" 
                                }
                            ]
                        },
                        { 
                            id: "m7-w2-fri", name: "Fri", title: "Week 2: Friday", 
                            sections: [
                                {
                                    instruction: "Enter the difference.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("20,406", "8,527", "-") }, { type: 'input', ans: "11879" }] }]
                                },
                                {
                                    instruction: "Enter the quotient in the first response box. If there is a remainder, enter it in the second box.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: '4062 &divide; 5 = &nbsp;&nbsp; Quotient: ' }, { type: 'input', ans: '812' }, { type: 'text', val: '&nbsp;&nbsp; Remainder: ' }, { type: 'input', ans: '2' }] }]
                                },
                                {
                                    instruction: "Which strategy for multiplying 52 and 18 should result in the correct product?", type: "multiple_choice",
                                    options: [
                                        { text: "(50 &times; 10) + (2 &times; 8)", correct: false },
                                        { text: "500 + 400 + 20 + 16", correct: true },
                                        { text: "50 + 2 + 10 + 8", correct: false }
                                    ]
                                }
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
                            id: "m7-w1-mon", name: "Mon", title: "Week 1: Monday",
                            sections: [
                                {
                                    instruction: "Enter the sum.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("47,215", "18,342", "+") }, { type: 'input', ans: "65557" }] }]
                                },
                                {
                                    instruction: "Select the equation that has the same unknown number as 745 &divide; 5 = <span class='unknown-box'></span>.", type: "multiple_choice",
                                    options: [
                                        { text: "745 &times; <span class='unknown-box'></span> = 5", correct: false },
                                        { text: "5 &times; <span class='unknown-box'></span> = 745", correct: true },
                                        { text: "745 &times; 5 = <span class='unknown-box'></span>", correct: false },
                                        { text: "<span class='unknown-box'></span> &times; 745 = 5", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Review: Solve the word problem.", type: "word_problem",
                                    textSegments: [{ type: 'text', val: "A cat weighs 12 pounds. A large dog weighs 48 pounds. How many times heavier is the dog than the cat?" }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '4' }, { type: 'text', val: ' times heavier' }] }]
                                }
                            ]
                        },
                        { 
                            id: "m7-w1-tue", name: "Tue", title: "Week 1: Tuesday", 
                            sections: [
                                {
                                    instruction: "Enter the difference.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("9,234", "4,581", "-") }, { type: 'input', ans: "4653" }] }]
                                },
                                {
                                    instruction: "Which expression is equal to 416 &times; 5?", type: "multiple_choice",
                                    options: [
                                        { text: "(400 + 10 + 6) + 5", correct: false },
                                        { text: "(400 &times; 5) + (10 &times; 5) + (6 &times; 5)", correct: true },
                                        { text: "(400 &times; 10 &times; 6) &times; 5", correct: false },
                                        { text: "(400 &times; 5) &times; (10 &times; 5) &times; (6 &times; 5)", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Review: Determine whether the comparison is true or false.", type: "grid", col0: "Equation", col1: "True", col2: "False",
                                    rows: [{ segments: [{ type: 'text', val: '0.50 = 0.05' }], correct: false }]
                                }
                            ] 
                        },
                        { 
                            id: "m7-w1-wed", name: "Wed", title: "Week 1: Wednesday", 
                            sections: [
                                {
                                    instruction: "Enter the product.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("3,174", "5", "&times;") }, { type: 'input', ans: "15870" }] }]
                                },
                                {
                                    instruction: "Enter the unknown number that makes the equation true.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "54 &times; 39 = (50 + 4) &times; ( &nbsp;" }, { type: 'input', ans: "30" }, { type: 'text', val: "&nbsp; + 9 )" }] }]
                                },
                                {
                                    instruction: "Review: Find the equivalent fraction.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'fraction', n: 1, d: 3 }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', ansN: '4', d: 12 }] }]
                                }
                            ] 
                        },
                        {
                            id: "m7-w1-thu", name: "Thu", title: "Week 1: Thursday",
                            sections: [
                                {
                                    instruction: "Enter the difference.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("50,000", "16,425", "-") }, { type: 'input', ans: "33575" }] }]
                                },
                                {
                                    instruction: "Select the equation that has the same unknown number as 618 &divide; 6 = <span class='unknown-box'></span>.", type: "multiple_choice",
                                    options: [
                                        { text: "618 &times; 6 = <span class='unknown-box'></span>", correct: false },
                                        { text: "618 &times; <span class='unknown-box'></span> = 6", correct: false },
                                        { text: "<span class='unknown-box'></span> &times; 6 = 618", correct: true }
                                    ]
                                },
                                { 
                                    instruction: "Review: Round the number to the requested place value.", type: "mixed_row", 
                                    problems: [{ segments: [{ type: 'text', val: "Round 42,681 to the nearest thousand: &nbsp;" }, { type: 'input', ans: "43000" }] }]
                                }
                            ]
                        },
                        { 
                            id: "m7-w1-fri", name: "Fri", title: "Week 1: Friday", 
                            sections: [
                                {
                                    instruction: "Enter the sum.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("46,285", "29,147", "+") }, { type: 'input', ans: "75432" }] }]
                                },
                                {
                                    instruction: "Enter the product.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("468", "7", "&times;") }, { type: 'input', ans: "3276" }] }]
                                },
                                {
                                    instruction: "Which expression is equal to 372 &times; 5?", type: "multiple_choice",
                                    options: [
                                        { text: "(300 + 70 + 2) + 5", correct: false },
                                        { text: "(300 &times; 5) &times; (70 &times; 5) &times; (2 &times; 5)", correct: false },
                                        { text: "(300 &times; 5) + (70 &times; 5) + (2 &times; 5)", correct: true }
                                    ]
                                }
                            ] 
                        }
                    ]
                },
                {
                    weekNum: 2,
                    days: [
                        {
                            id: "m7-w2-mon", name: "Mon", title: "Week 2: Monday",
                            sections: [
                                {
                                    instruction: "Enter the quotient in the first response box. If there is a remainder, enter it in the second response box.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: '85 &divide; 6 = &nbsp;&nbsp; Quotient: ' }, { type: 'input', ans: '14' }, { type: 'text', val: '&nbsp;&nbsp; Remainder: ' }, { type: 'input', ans: '1' }] }]
                                },
                                {
                                    instruction: "Which strategy for multiplying 42 and 16 should result in the correct product?", type: "multiple_choice",
                                    options: [
                                        { text: "400 + 240 + 20 + 12", correct: true },
                                        { text: "(40 &times; 10) + (2 &times; 6)", correct: false },
                                        { text: "400 + 12", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Review: Add the fractions.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'fraction', n: '2', d: '8' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '3', d: '8' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', ansN: '5', d: 8 }] }]
                                }
                            ]
                        },
                        { 
                            id: "m7-w2-tue", name: "Tue", title: "Week 2: Tuesday", 
                            sections: [
                                {
                                    instruction: "Enter the quotient in the first response box. If there is a remainder, enter it in the second response box.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: '3542 &divide; 5 = &nbsp;&nbsp; Quotient: ' }, { type: 'input', ans: '708' }, { type: 'text', val: '&nbsp;&nbsp; Remainder: ' }, { type: 'input', ans: '2' }] }]
                                },
                                {
                                    instruction: "Enter the unknown number that makes the equation true.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "65 &times; 24 = (60 + 5) &times; (20 + &nbsp;" }, { type: 'input', ans: "4" }, { type: 'text', val: "&nbsp; )" }] }]
                                },
                                {
                                    instruction: "Review: Solve the word problem.", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A teacher has 150 books to organize equally onto 6 shelves. How many books will be placed on each shelf?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '25' }, { type: 'text', val: ' books' }] }]
                                }
                            ]
                        },
                        { 
                            id: "m7-w2-wed", name: "Wed", title: "Week 2: Wednesday", 
                            sections: [
                                {
                                    instruction: "Enter the product.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("5,093", "6", "&times;") }, { type: 'input', ans: "30558" }] }]
                                },
                                {
                                    instruction: "Enter the quotient in the first response box. If there is a remainder, enter it in the second response box.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: '4629 &divide; 8 = &nbsp;&nbsp; Quotient: ' }, { type: 'input', ans: '578' }, { type: 'text', val: '&nbsp;&nbsp; Remainder: ' }, { type: 'input', ans: '5' }] }]
                                },
                                {
                                    instruction: "Review: Enter the symbol (<, >, or =) to make the comparison true.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "4 thousands + 6 tens &nbsp; " }, { type: 'input', ans: "=" }, { type: 'text', val: "&nbsp; 4,060" }] }]
                                }
                            ] 
                        },
                        {
                            id: "m7-w2-thu", name: "Thu", title: "Week 2: Thursday",
                            sections: [
                                {
                                    instruction: "Select the equation that has the same unknown number as <span class='unknown-box'></span> &divide; 7 = 304.", type: "multiple_choice",
                                    options: [
                                        { text: "304 &times; <span class='unknown-box'></span> = 7", correct: false },
                                        { text: "<span class='unknown-box'></span> &times; 7 = 304", correct: false },
                                        { text: "304 &times; 7 = <span class='unknown-box'></span>", correct: true }
                                    ]
                                },
                                {
                                    instruction: "Enter the quotient in the first response box. If there is a remainder, enter it in the second box.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: '746 &divide; 8 = &nbsp;&nbsp; Quotient: ' }, { type: 'input', ans: '93' }, { type: 'text', val: '&nbsp;&nbsp; Remainder: ' }, { type: 'input', ans: '2' }] }]
                                },
                                { 
                                    instruction: "Review: What is the value of point P?", type: "number_line", start: 0, end: 1, step: 0.1, target: 0.6, label: "P", ans: "0.6" 
                                }
                            ]
                        },
                        { 
                            id: "m7-w2-fri", name: "Fri", title: "Week 2: Friday", 
                            sections: [
                                {
                                    instruction: "Enter the difference.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("30,504", "9,638", "-") }, { type: 'input', ans: "20866" }] }]
                                },
                                {
                                    instruction: "Enter the quotient in the first response box. If there is a remainder, enter it in the second box.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: '3174 &divide; 4 = &nbsp;&nbsp; Quotient: ' }, { type: 'input', ans: '793' }, { type: 'text', val: '&nbsp;&nbsp; Remainder: ' }, { type: 'input', ans: '2' }] }]
                                },
                                {
                                    instruction: "Which strategy for multiplying 63 and 17 should result in the correct product?", type: "multiple_choice",
                                    options: [
                                        { text: "600 + 21", correct: false },
                                        { text: "(60 &times; 10) + (3 &times; 7)", correct: false },
                                        { text: "600 + 420 + 30 + 21", correct: true }
                                    ]
                                }
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
                            id: "m7-w1-mon", name: "Mon", title: "Week 1: Monday",
                            sections: [
                                {
                                    instruction: "Enter the sum.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("52,198", "36,419", "+") }, { type: 'input', ans: "88617" }] }]
                                },
                                {
                                    instruction: "Select the equation that has the same unknown number as 924 &divide; 7 = <span class='unknown-box'></span>.", type: "multiple_choice",
                                    options: [
                                        { text: "924 &times; 7 = <span class='unknown-box'></span>", correct: false },
                                        { text: "7 &times; <span class='unknown-box'></span> = 924", correct: true },
                                        { text: "924 &times; <span class='unknown-box'></span> = 7", correct: false },
                                        { text: "<span class='unknown-box'></span> &times; 924 = 7", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Review: Solve the word problem.", type: "word_problem",
                                    textSegments: [{ type: 'text', val: "A cat weighs 14 pounds. A human weighs 70 pounds. How many times heavier is the human than the cat?" }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '5' }, { type: 'text', val: ' times heavier' }] }]
                                }
                            ]
                        },
                        { 
                            id: "m7-w1-tue", name: "Tue", title: "Week 1: Tuesday", 
                            sections: [
                                {
                                    instruction: "Enter the difference.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("7,516", "2,839", "-") }, { type: 'input', ans: "4677" }] }]
                                },
                                {
                                    instruction: "Which expression is equal to 528 &times; 4?", type: "multiple_choice",
                                    options: [
                                        { text: "(500 &times; 4) &times; (20 &times; 4) &times; (8 &times; 4)", correct: false },
                                        { text: "(500 + 20 + 8) + 4", correct: false },
                                        { text: "(500 &times; 4) + (20 &times; 4) + (8 &times; 4)", correct: true },
                                        { text: "(500 &times; 20 &times; 8) &times; 4", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Review: Determine whether the comparison is true or false.", type: "grid", col0: "Equation", col1: "True", col2: "False",
                                    rows: [{ segments: [{ type: 'text', val: '0.70 = 0.07' }], correct: false }]
                                }
                            ] 
                        },
                        { 
                            id: "m7-w1-wed", name: "Wed", title: "Week 1: Wednesday", 
                            sections: [
                                {
                                    instruction: "Enter the product.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("5,426", "3", "&times;") }, { type: 'input', ans: "16278" }] }]
                                },
                                {
                                    instruction: "Enter the unknown number that makes the equation true.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "82 &times; 27 = (80 + 2) &times; ( &nbsp;" }, { type: 'input', ans: "20" }, { type: 'text', val: "&nbsp; + 7 )" }] }]
                                },
                                {
                                    instruction: "Review: Find the equivalent fraction.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'fraction', n: 1, d: 5 }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', ansN: '3', d: 15 }] }]
                                }
                            ] 
                        },
                        {
                            id: "m7-w1-thu", name: "Thu", title: "Week 1: Thursday",
                            sections: [
                                {
                                    instruction: "Enter the difference.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("80,000", "37,154", "-") }, { type: 'input', ans: "42846" }] }]
                                },
                                {
                                    instruction: "Select the equation that has the same unknown number as 432 &divide; 4 = <span class='unknown-box'></span>.", type: "multiple_choice",
                                    options: [
                                        { text: "<span class='unknown-box'></span> &times; 4 = 432", correct: true },
                                        { text: "432 &times; 4 = <span class='unknown-box'></span>", correct: false },
                                        { text: "432 &times; <span class='unknown-box'></span> = 4", correct: false }
                                    ]
                                },
                                { 
                                    instruction: "Review: Round the number to the requested place value.", type: "mixed_row", 
                                    problems: [{ segments: [{ type: 'text', val: "Round 85,294 to the nearest thousand: &nbsp;" }, { type: 'input', ans: "85000" }] }]
                                }
                            ]
                        },
                        { 
                            id: "m7-w1-fri", name: "Fri", title: "Week 1: Friday", 
                            sections: [
                                {
                                    instruction: "Enter the sum.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("63,159", "28,493", "+") }, { type: 'input', ans: "91652" }] }]
                                },
                                {
                                    instruction: "Enter the product.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("584", "6", "&times;") }, { type: 'input', ans: "3504" }] }]
                                },
                                {
                                    instruction: "Which expression is equal to 649 &times; 3?", type: "multiple_choice",
                                    options: [
                                        { text: "(600 + 40 + 9) + 3", correct: false },
                                        { text: "(600 &times; 3) + (40 &times; 3) + (9 &times; 3)", correct: true },
                                        { text: "(600 &times; 3) &times; (40 &times; 3) &times; (9 &times; 3)", correct: false }
                                    ]
                                }
                            ] 
                        }
                    ]
                },
                {
                    weekNum: 2,
                    days: [
                        {
                            id: "m7-w2-mon", name: "Mon", title: "Week 2: Monday",
                            sections: [
                                {
                                    instruction: "Enter the quotient in the first response box. If there is a remainder, enter it in the second response box.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: '97 &divide; 8 = &nbsp;&nbsp; Quotient: ' }, { type: 'input', ans: '12' }, { type: 'text', val: '&nbsp;&nbsp; Remainder: ' }, { type: 'input', ans: '1' }] }]
                                },
                                {
                                    instruction: "Which strategy for multiplying 23 and 14 should result in the correct product?", type: "multiple_choice",
                                    options: [
                                        { text: "(20 &times; 10) + (3 &times; 4)", correct: false },
                                        { text: "200 + 80 + 30 + 12", correct: true },
                                        { text: "200 + 12", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Review: Add the fractions.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'fraction', n: '3', d: '12' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '4', d: '12' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', ansN: '7', d: 12 }] }]
                                }
                            ]
                        },
                        { 
                            id: "m7-w2-tue", name: "Tue", title: "Week 2: Tuesday", 
                            sections: [
                                {
                                    instruction: "Enter the quotient in the first response box. If there is a remainder, enter it in the second response box.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: '4183 &divide; 7 = &nbsp;&nbsp; Quotient: ' }, { type: 'input', ans: '597' }, { type: 'text', val: '&nbsp;&nbsp; Remainder: ' }, { type: 'input', ans: '4' }] }]
                                },
                                {
                                    instruction: "Enter the unknown number that makes the equation true.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "48 &times; 35 = (40 + 8) &times; (30 + &nbsp;" }, { type: 'input', ans: "5" }, { type: 'text', val: "&nbsp; )" }] }]
                                },
                                {
                                    instruction: "Review: Solve the word problem.", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A librarian has 180 books to organize equally onto 4 shelves. How many books will be placed on each shelf?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '45' }, { type: 'text', val: ' books' }] }]
                                }
                            ]
                        },
                        { 
                            id: "m7-w2-wed", name: "Wed", title: "Week 2: Wednesday", 
                            sections: [
                                {
                                    instruction: "Enter the product.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("7,048", "4", "&times;") }, { type: 'input', ans: "28192" }] }]
                                },
                                {
                                    instruction: "Enter the quotient in the first response box. If there is a remainder, enter it in the second response box.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: '5318 &divide; 6 = &nbsp;&nbsp; Quotient: ' }, { type: 'input', ans: '886' }, { type: 'text', val: '&nbsp;&nbsp; Remainder: ' }, { type: 'input', ans: '2' }] }]
                                },
                                {
                                    instruction: "Review: Enter the symbol (<, >, or =) to make the comparison true.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "7 thousands + 2 tens &nbsp; " }, { type: 'input', ans: "=" }, { type: 'text', val: "&nbsp; 7,020" }] }]
                                }
                            ] 
                        },
                        {
                            id: "m7-w2-thu", name: "Thu", title: "Week 2: Thursday",
                            sections: [
                                {
                                    instruction: "Select the equation that has the same unknown number as <span class='unknown-box'></span> &divide; 7 = 304.", type: "multiple_choice",
                                    options: [
                                        { text: "304 &times; <span class='unknown-box'></span> = 7", correct: false },
                                        { text: "<span class='unknown-box'></span> &times; 7 = 304", correct: false },
                                        { text: "304 &times; 7 = <span class='unknown-box'></span>", correct: true }
                                    ]
                                },
                                {
                                    instruction: "Enter the quotient in the first response box. If there is a remainder, enter it in the second box.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: '746 &divide; 8 = &nbsp;&nbsp; Quotient: ' }, { type: 'input', ans: '93' }, { type: 'text', val: '&nbsp;&nbsp; Remainder: ' }, { type: 'input', ans: '2' }] }]
                                },
                                { 
                                    instruction: "Review: What is the value of point P?", type: "number_line", start: 0, end: 1, step: 0.1, target: 0.6, label: "P", ans: "0.6" 
                                }
                            ]
                        },
                        { 
                            id: "m7-w2-fri", name: "Fri", title: "Week 2: Friday", 
                            sections: [
                                {
                                    instruction: "Enter the difference.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("30,504", "9,638", "-") }, { type: 'input', ans: "20866" }] }]
                                },
                                {
                                    instruction: "Enter the quotient in the first response box. If there is a remainder, enter it in the second box.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: '3174 &divide; 4 = &nbsp;&nbsp; Quotient: ' }, { type: 'input', ans: '793' }, { type: 'text', val: '&nbsp;&nbsp; Remainder: ' }, { type: 'input', ans: '2' }] }]
                                },
                                {
                                    instruction: "Which strategy for multiplying 63 and 17 should result in the correct product?", type: "multiple_choice",
                                    options: [
                                        { text: "600 + 21", correct: false },
                                        { text: "(60 &times; 10) + (3 &times; 7)", correct: false },
                                        { text: "600 + 420 + 30 + 21", correct: true }
                                    ]
                                }
                            ] 
                        }
                    ]
                }
            ]
        }
    }
};