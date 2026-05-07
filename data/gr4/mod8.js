// --- MODULE 8 DATA ---
const module8 = {
    id: "mod-8", 
    name: "Factors and Multiples", 
    
    helperHubs: {
        week1: {
            title: "★ Helper Hub: The 'Math Hacker' Guide to Divisibility",
            content: `
                <div style="font-size:15px; line-height: 1.4;">
                    <div style="margin-bottom:15px; padding:10px; border-radius:8px; background:#f0f8ff; border:2px solid #2c7be5;">
                        <strong style="color:#2c7be5;">Vocabulary Check!</strong><br>
                        • A <strong>Factor</strong> is a number that fits perfectly into a bigger number (e.g., 5 is a factor of 45).<br>
                        • A <strong>Multiple</strong> is what you get when you multiply a number (e.g., 45 is a multiple of 5).
                    </div>
                    <p style="margin-top:0; margin-bottom:10px;">Finding factors is much easier when you know the secret codes for dividing numbers!</p>
                    
                    <div class="print-stack" style="display:flex; gap:15px; align-items:flex-start; break-inside: avoid;">
                        <div style="flex:1; padding:15px; border:2px solid #ccc; border-radius:10px; background:#fff;">
                            <strong style="font-size:16px; color:#2c7be5;">The Easy Rules (2, 5, 10)</strong><br><br>
                            • <strong>Rule of 2:</strong> If the number is EVEN (ends in 0, 2, 4, 6, 8), then 2 is a factor!<br>
                            • <strong>Rule of 5:</strong> If the number ends in 0 or 5, then 5 is a factor!<br>
                            • <strong>Rule of 10:</strong> If the number ends in exactly 0, then 10 is a factor!<br><br>
                            <em>Example: 45 ends in 5. That means 5 is a factor of 45!</em>
                        </div>
                        <div style="flex:1; padding:15px; border:2px solid #ccc; border-radius:10px; background:#fff;">
                            <strong style="font-size:16px; color:#27ae60;">The Secret Rule of 3</strong><br><br>
                            Not sure if 3 is a factor of a big number? Just add the digits together!<br><br>
                            If the sum of the digits is a multiple of 3, then 3 is a factor of the big number!<br><br>
                            <em>Test the number 84:</em><br>
                            8 + 4 = 12. Since 12 is a multiple of 3, we know 3 is a factor of 84!
                        </div>
                    </div>
                </div>`
        },
        week2: {
            title: "★ Helper Hub: Factor Rainbows & Primes",
            content: `
                <div style="font-size:15px; line-height: 1.4;">
                    <div class="print-stack" style="display:flex; gap:15px; align-items:stretch; break-inside: avoid;">
                        <div style="flex:1.2; padding:15px; border:2px solid #ccc; border-radius:10px; background:#fff; text-align:center;">
                            <strong style="font-size:16px; color:#e74c3c;">Factor Rainbows</strong><br>
                            <p style="margin-top:5px; margin-bottom:10px; text-align:left;">When listing factors, always work from the outside in! Drawing arcs connects your factor pairs so you never miss the numbers in the middle.</p>
                            
                            <svg width="100%" viewBox="0 0 300 130" style="max-width:320px; display:block; margin:0 auto;">
                                <path d="M 20 90 Q 142 -20 265 90" fill="none" stroke="#e74c3c" stroke-width="3" />
                                <path d="M 55 90 Q 142 20 230 90" fill="none" stroke="#f39c12" stroke-width="3" />
                                <path d="M 90 90 Q 142 50 195 90" fill="none" stroke="#27ae60" stroke-width="3" />
                                <path d="M 125 90 Q 142 70 160 90" fill="none" stroke="#2c7be5" stroke-width="3" />
                                <text x="20" y="115" font-family="monospace" font-size="18" font-weight="bold" fill="#e74c3c" text-anchor="middle">1</text>
                                <text x="55" y="115" font-family="monospace" font-size="18" font-weight="bold" fill="#f39c12" text-anchor="middle">2</text>
                                <text x="90" y="115" font-family="monospace" font-size="18" font-weight="bold" fill="#27ae60" text-anchor="middle">3</text>
                                <text x="125" y="115" font-family="monospace" font-size="18" font-weight="bold" fill="#2c7be5" text-anchor="middle">4</text>
                                <text x="160" y="115" font-family="monospace" font-size="18" font-weight="bold" fill="#2c7be5" text-anchor="middle">6</text>
                                <text x="195" y="115" font-family="monospace" font-size="18" font-weight="bold" fill="#27ae60" text-anchor="middle">8</text>
                                <text x="230" y="115" font-family="monospace" font-size="18" font-weight="bold" fill="#f39c12" text-anchor="middle">12</text>
                                <text x="265" y="115" font-family="monospace" font-size="18" font-weight="bold" fill="#e74c3c" text-anchor="middle">24</text>
                            </svg>
                            <div style="font-size:13px; color:#555; margin-top:5px;">Factors of 24: (1&times;24), (2&times;12), (3&times;8), (4&times;6)</div>
                        </div>
                        <div style="flex:0.8; padding:15px; border:2px solid #ccc; border-radius:10px; background:#fff;">
                            <strong style="font-size:16px; color:#8e44ad;">Prime vs. Composite</strong><br><br>
                            • <strong>Prime:</strong> A "lonely" number. It only has exactly TWO factors: 1 and itself. <em>(Examples: 7, 13, 19)</em><br><br>
                            • <strong>Composite:</strong> A number with a "crew". It has MORE than two factors! <em>(Examples: 8, 15, 20)</em>
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
                            id: "m8-w1-mon", name: "Mon", title: "Week 1: Monday",
                            sections: [
                                {
                                    instruction: "Enter the first four multiples of 7 in order.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'input', ans: "7" }, { type: 'text', val: ', &nbsp;' }, { type: 'input', ans: "14" }, { type: 'text', val: ', &nbsp;' }, { type: 'input', ans: "21" }, { type: 'text', val: ', &nbsp;' }, { type: 'input', ans: "28" }] }]
                                },
                                {
                                    instruction: "Is the number a factor of 42? Select Yes or No.", type: "grid", col0: "Number", col1: "Yes", col2: "No",
                                    rows: [
                                        { text: "6", correct: true },
                                        { text: "8", correct: false },
                                        { text: "14", correct: true }
                                    ]
                                },
                                {
                                    instruction: "Enter the sum.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("35,421", "12,895", "+") }, { type: 'input', ans: "48316" }] }]
                                }
                            ]
                        },
                        { 
                            id: "m8-w1-tue", name: "Tue", title: "Week 1: Tuesday", 
                            sections: [
                                {
                                    instruction: "Which number is a multiple of both 2 and 5?", type: "multiple_choice",
                                    options: [
                                        { text: "12", correct: false },
                                        { text: "10", correct: true },
                                        { text: "25", correct: false },
                                        { text: "15", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the missing factor to complete the equation.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: '4 &times; &nbsp;' }, { type: 'input', ans: '9' }, { type: 'text', val: '&nbsp; = 36' }] }]
                                },
                                {
                                    instruction: "Solve the word problem.", type: "word_problem",
                                    textSegments: [{ type: 'text', val: "A store has 450 apples. They throw away 24 rotten apples, and then receive a new shipment of 150 apples. How many apples do they have now?" }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '576' }, { type: 'text', val: ' apples' }] }]
                                }
                            ] 
                        },
                        { 
                            id: "m8-w1-wed", name: "Wed", title: "Week 1: Wednesday", 
                            sections: [
                                {
                                    instruction: "Are all the numbers in the list multiples of 8? Select True or False.", type: "grid", col0: "List", col1: "True", col2: "False",
                                    rows: [
                                        { text: "8, 16, 24", correct: true },
                                        { text: "12, 16, 20", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Which number is a factor of both 24 and 36?", type: "multiple_choice",
                                    options: [
                                        { text: "5", correct: false },
                                        { text: "8", correct: false },
                                        { text: "9", correct: false },
                                        { text: "12", correct: true }
                                    ]
                                },
                                {
                                    instruction: "Enter the product.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("3,152", "4", "&times;") }, { type: 'input', ans: "12608" }] }]
                                }
                            ] 
                        },
                        {
                            id: "m8-w1-thu", name: "Thu", title: "Week 1: Thursday",
                            sections: [
                                {
                                    instruction: "Decide whether each number is prime or composite.", type: "grid", col0: "Number", col1: "Prime", col2: "Composite",
                                    rows: [
                                        { text: "15", correct: false },
                                        { text: "23", correct: true },
                                        { text: "29", correct: true }
                                    ]
                                },
                                {
                                    instruction: "Enter the smallest number that is a multiple of both 3 and 5.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "Smallest multiple: &nbsp;" }, { type: 'input', ans: "15" }] }]
                                },
                                { 
                                    instruction: "Enter the unknown number to make the fractions equivalent.", type: "mixed_row", 
                                    problems: [{ segments: [{ type: 'fraction', n: 1, d: 3 }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', ansN: '3', d: 9 }] }]
                                }
                            ]
                        },
                        { 
                            id: "m8-w1-fri", name: "Fri", title: "Week 1: Friday", 
                            sections: [
                                {
                                    instruction: "Which list contains numbers that are factors of BOTH 12 and 20?", type: "multiple_choice",
                                    options: [
                                        { text: "1, 2, 3", correct: false },
                                        { text: "1, 2, 4", correct: true },
                                        { text: "1, 2, 5", correct: false },
                                        { text: "1, 4, 6", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Decide whether each number is prime or composite.", type: "grid", col0: "Number", col1: "Prime", col2: "Composite",
                                    rows: [
                                        { text: "21", correct: false },
                                        { text: "41", correct: true },
                                        { text: "39", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Fill in the missing multiple in the sequence.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "8, 16, &nbsp;" }, { type: 'input', ans: "24" }, { type: 'text', val: "&nbsp;, 32" }] }]
                                }
                            ] 
                        }
                    ]
                },
                {
                    weekNum: 2,
                    days: [
                        {
                            id: "m8-w2-mon", name: "Mon", title: "Week 2: Monday",
                            sections: [
                                {
                                    instruction: "Is the number a factor of 45? Select Yes or No.", type: "grid", col0: "Number", col1: "Yes", col2: "No",
                                    rows: [
                                        { text: "3", correct: true },
                                        { text: "5", correct: true },
                                        { text: "10", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Which list contains ONLY prime numbers?", type: "multiple_choice",
                                    options: [
                                        { text: "2, 5, 9", correct: false },
                                        { text: "3, 7, 15", correct: false },
                                        { text: "2, 5, 11", correct: true },
                                        { text: "1, 2, 3", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the product.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("24", "15", "&times;") }, { type: 'input', ans: "360" }] }]
                                }
                            ]
                        },
                        { 
                            id: "m8-w2-tue", name: "Tue", title: "Week 2: Tuesday", 
                            sections: [
                                {
                                    instruction: "Enter a number that is a factor of BOTH 14 and 21 (do not use 1).", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: 'Factor: &nbsp;' }, { type: 'input', ans: '7' }] }]
                                },
                                {
                                    instruction: "Select True or False for the statement.", type: "grid", col0: "Statement", col1: "True", col2: "False",
                                    rows: [{ text: "40 is a multiple of both 5 and 8.", correct: true }]
                                },
                                {
                                    instruction: "Enter the quotient in the first box and the remainder in the second box.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: '415 &divide; 4 = &nbsp;&nbsp; Quotient: ' }, { type: 'input', ans: '103' }, { type: 'text', val: '&nbsp;&nbsp; Remainder: ' }, { type: 'input', ans: '3' }] }]
                                }
                            ]
                        },
                        { 
                            id: "m8-w2-wed", name: "Wed", title: "Week 2: Wednesday", 
                            sections: [
                                {
                                    instruction: "Decide whether each number is prime or composite.", type: "grid", col0: "Number", col1: "Prime", col2: "Composite",
                                    rows: [
                                        { text: "47", correct: true },
                                        { text: "49", correct: false },
                                        { text: "51", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Which numbers are factors of both 20 and 32?", type: "multiple_choice",
                                    options: [
                                        { text: "1, 2, 4", correct: true },
                                        { text: "1, 4, 8", correct: false },
                                        { text: "1, 2, 5", correct: false },
                                        { text: "1, 2, 10", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Round the number to the requested place value.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "Round 35,281 to the nearest thousand: &nbsp;" }, { type: 'input', ans: "35000" }] }]
                                }
                            ] 
                        },
                        {
                            id: "m8-w2-thu", name: "Thu", title: "Week 2: Thursday",
                            sections: [
                                {
                                    instruction: "Sort the numbers into Multiples of 4 and Not Multiples of 4.", type: "grid", col0: "Number", col1: "Multiple", col2: "Not Multiple",
                                    rows: [
                                        { text: "12", correct: true },
                                        { text: "18", correct: false },
                                        { text: "24", correct: true }
                                    ]
                                },
                                {
                                    instruction: "How many total factors does the number 15 have? (Count all of them!)", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "Total number of factors: &nbsp;" }, { type: 'input', ans: "4" }] }]
                                },
                                { 
                                    instruction: "Add the fractions.", type: "mixed_row", 
                                    problems: [{ segments: [{ type: 'fraction', n: '2', d: '8' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '3', d: '8' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', ansN: '5', d: 8 }] }] 
                                }
                            ]
                        },
                        { 
                            id: "m8-w2-fri", name: "Fri", title: "Week 2: Friday", 
                            sections: [
                                {
                                    instruction: "Enter a prime number that is between 20 and 30.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: 'Prime number: &nbsp;' }, { type: 'input', ans: '23|29' }] }]
                                },
                                {
                                    instruction: "Which list contains ONLY multiples of 7?", type: "multiple_choice",
                                    options: [
                                        { text: "1, 7, 14", correct: false },
                                        { text: "7, 14, 20", correct: false },
                                        { text: "14, 21, 28", correct: true },
                                        { text: "21, 27, 35", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Is the number a factor of 32? Select Yes or No.", type: "grid", col0: "Number", col1: "Yes", col2: "No",
                                    rows: [
                                        { text: "4", correct: true },
                                        { text: "6", correct: false },
                                        { text: "8", correct: true }
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
                            id: "m8-w1-mon", name: "Mon", title: "Week 1: Monday",
                            sections: [
                                {
                                    instruction: "Enter the first four multiples of 8 in order.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'input', ans: "8" }, { type: 'text', val: ', &nbsp;' }, { type: 'input', ans: "16" }, { type: 'text', val: ', &nbsp;' }, { type: 'input', ans: "24" }, { type: 'text', val: ', &nbsp;' }, { type: 'input', ans: "32" }] }]
                                },
                                {
                                    instruction: "Is the number a factor of 48? Select Yes or No.", type: "grid", col0: "Number", col1: "Yes", col2: "No",
                                    rows: [
                                        { text: "6", correct: true },
                                        { text: "9", correct: false },
                                        { text: "12", correct: true }
                                    ]
                                },
                                {
                                    instruction: "Enter the sum.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("46,132", "25,914", "+") }, { type: 'input', ans: "72046" }] }]
                                }
                            ]
                        },
                        { 
                            id: "m8-w1-tue", name: "Tue", title: "Week 1: Tuesday", 
                            sections: [
                                {
                                    instruction: "Which number is a multiple of both 3 and 5?", type: "multiple_choice",
                                    options: [
                                        { text: "10", correct: false },
                                        { text: "15", correct: true },
                                        { text: "20", correct: false },
                                        { text: "25", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the missing factor to complete the equation.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: '5 &times; &nbsp;' }, { type: 'input', ans: '9' }, { type: 'text', val: '&nbsp; = 45' }] }]
                                },
                                {
                                    instruction: "Solve the word problem.", type: "word_problem",
                                    textSegments: [{ type: 'text', val: "A farmer has 520 seeds. He plants 45 seeds, and then buys 200 more seeds. How many seeds does he have now?" }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '675' }, { type: 'text', val: ' seeds' }] }]
                                }
                            ] 
                        },
                        { 
                            id: "m8-w1-wed", name: "Wed", title: "Week 1: Wednesday", 
                            sections: [
                                {
                                    instruction: "Are all the numbers in the list multiples of 7? Select True or False.", type: "grid", col0: "List", col1: "True", col2: "False",
                                    rows: [
                                        { text: "7, 14, 21", correct: true },
                                        { text: "14, 20, 28", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Which number is a factor of both 20 and 30?", type: "multiple_choice",
                                    options: [
                                        { text: "4", correct: false },
                                        { text: "6", correct: false },
                                        { text: "10", correct: true },
                                        { text: "15", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the product.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("4,261", "3", "&times;") }, { type: 'input', ans: "12783" }] }]
                                }
                            ] 
                        },
                        {
                            id: "m8-w1-thu", name: "Thu", title: "Week 1: Thursday",
                            sections: [
                                {
                                    instruction: "Decide whether each number is prime or composite.", type: "grid", col0: "Number", col1: "Prime", col2: "Composite",
                                    rows: [
                                        { text: "14", correct: false },
                                        { text: "17", correct: true },
                                        { text: "33", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the smallest number that is a multiple of both 3 and 4.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "Smallest multiple: &nbsp;" }, { type: 'input', ans: "12" }] }]
                                },
                                { 
                                    instruction: "Enter the unknown number to make the fractions equivalent.", type: "mixed_row", 
                                    problems: [{ segments: [{ type: 'fraction', n: 1, d: 4 }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', ansN: '3', d: 12 }] }]
                                }
                            ]
                        },
                        { 
                            id: "m8-w1-fri", name: "Fri", title: "Week 1: Friday", 
                            sections: [
                                {
                                    instruction: "Which list contains numbers that are factors of BOTH 18 and 24?", type: "multiple_choice",
                                    options: [
                                        { text: "1, 2, 3, 6", correct: true },
                                        { text: "1, 2, 4, 8", correct: false },
                                        { text: "1, 3, 6, 9", correct: false },
                                        { text: "1, 2, 4, 6", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Decide whether each number is prime or composite.", type: "grid", col0: "Number", col1: "Prime", col2: "Composite",
                                    rows: [
                                        { text: "25", correct: false },
                                        { text: "43", correct: true },
                                        { text: "51", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Fill in the missing multiple in the sequence.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "6, 12, &nbsp;" }, { type: 'input', ans: "18" }, { type: 'text', val: "&nbsp;, 24" }] }]
                                }
                            ] 
                        }
                    ]
                },
                {
                    weekNum: 2,
                    days: [
                        {
                            id: "m8-w2-mon", name: "Mon", title: "Week 2: Monday",
                            sections: [
                                {
                                    instruction: "Is the number a factor of 50? Select Yes or No.", type: "grid", col0: "Number", col1: "Yes", col2: "No",
                                    rows: [
                                        { text: "5", correct: true },
                                        { text: "10", correct: true },
                                        { text: "15", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Which list contains ONLY prime numbers?", type: "multiple_choice",
                                    options: [
                                        { text: "2, 6, 11", correct: false },
                                        { text: "3, 7, 13", correct: true },
                                        { text: "3, 9, 17", correct: false },
                                        { text: "1, 5, 7", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the product.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("35", "12", "&times;") }, { type: 'input', ans: "420" }] }]
                                }
                            ]
                        },
                        { 
                            id: "m8-w2-tue", name: "Tue", title: "Week 2: Tuesday", 
                            sections: [
                                {
                                    instruction: "Enter a number that is a factor of BOTH 15 and 25 (do not use 1).", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: 'Factor: &nbsp;' }, { type: 'input', ans: '5' }] }]
                                },
                                {
                                    instruction: "Select True or False for the statement.", type: "grid", col0: "Statement", col1: "True", col2: "False",
                                    rows: [{ text: "24 is a multiple of both 4 and 6.", correct: true }]
                                },
                                {
                                    instruction: "Enter the quotient in the first box and the remainder in the second box.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: '526 &divide; 5 = &nbsp;&nbsp; Quotient: ' }, { type: 'input', ans: '105' }, { type: 'text', val: '&nbsp;&nbsp; Remainder: ' }, { type: 'input', ans: '1' }] }]
                                }
                            ]
                        },
                        { 
                            id: "m8-w2-wed", name: "Wed", title: "Week 2: Wednesday", 
                            sections: [
                                {
                                    instruction: "Decide whether each number is prime or composite.", type: "grid", col0: "Number", col1: "Prime", col2: "Composite",
                                    rows: [
                                        { text: "41", correct: true },
                                        { text: "45", correct: false },
                                        { text: "53", correct: true }
                                    ]
                                },
                                {
                                    instruction: "Which numbers are factors of both 16 and 24?", type: "multiple_choice",
                                    options: [
                                        { text: "1, 2, 4, 8", correct: true },
                                        { text: "1, 2, 4, 6", correct: false },
                                        { text: "1, 3, 4, 8", correct: false },
                                        { text: "1, 4, 8, 12", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Round the number to the requested place value.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "Round 48,612 to the nearest ten thousand: &nbsp;" }, { type: 'input', ans: "50000" }] }]
                                }
                            ] 
                        },
                        {
                            id: "m8-w2-thu", name: "Thu", title: "Week 2: Thursday",
                            sections: [
                                {
                                    instruction: "Sort the numbers into Multiples of 6 and Not Multiples of 6.", type: "grid", col0: "Number", col1: "Multiple", col2: "Not Multiple",
                                    rows: [
                                        { text: "18", correct: true },
                                        { text: "26", correct: false },
                                        { text: "30", correct: true }
                                    ]
                                },
                                {
                                    instruction: "How many total factors does the number 14 have? (Count all of them!)", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "Total number of factors: &nbsp;" }, { type: 'input', ans: "4" }] }]
                                },
                                { 
                                    instruction: "Add the fractions.", type: "mixed_row", 
                                    problems: [{ segments: [{ type: 'fraction', n: '3', d: '10' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '4', d: '10' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', ansN: '7', d: 10 }] }] 
                                }
                            ]
                        },
                        { 
                            id: "m8-w2-fri", name: "Fri", title: "Week 2: Friday", 
                            sections: [
                                {
                                    instruction: "Enter a prime number that is between 30 and 40.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: 'Prime number: &nbsp;' }, { type: 'input', ans: '31|37' }] }]
                                },
                                {
                                    instruction: "Which list contains ONLY multiples of 6?", type: "multiple_choice",
                                    options: [
                                        { text: "1, 6, 12", correct: false },
                                        { text: "6, 12, 20", correct: false },
                                        { text: "12, 18, 24", correct: true },
                                        { text: "18, 26, 32", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Is the number a factor of 36? Select Yes or No.", type: "grid", col0: "Number", col1: "Yes", col2: "No",
                                    rows: [
                                        { text: "4", correct: true },
                                        { text: "8", correct: false },
                                        { text: "9", correct: true }
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
                            id: "m8-w1-mon", name: "Mon", title: "Week 1: Monday",
                            sections: [
                                {
                                    instruction: "Enter the first four multiples of 9 in order.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'input', ans: "9" }, { type: 'text', val: ', &nbsp;' }, { type: 'input', ans: "18" }, { type: 'text', val: ', &nbsp;' }, { type: 'input', ans: "27" }, { type: 'text', val: ', &nbsp;' }, { type: 'input', ans: "36" }] }]
                                },
                                {
                                    instruction: "Is the number a factor of 56? Select Yes or No.", type: "grid", col0: "Number", col1: "Yes", col2: "No",
                                    rows: [
                                        { text: "7", correct: true },
                                        { text: "8", correct: true },
                                        { text: "12", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the sum.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("51,824", "19,365", "+") }, { type: 'input', ans: "71189" }] }]
                                }
                            ]
                        },
                        { 
                            id: "m8-w1-tue", name: "Tue", title: "Week 1: Tuesday", 
                            sections: [
                                {
                                    instruction: "Which number is a multiple of both 4 and 5?", type: "multiple_choice",
                                    options: [
                                        { text: "10", correct: false },
                                        { text: "15", correct: false },
                                        { text: "20", correct: true },
                                        { text: "24", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the missing factor to complete the equation.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: '6 &times; &nbsp;' }, { type: 'input', ans: '7' }, { type: 'text', val: '&nbsp; = 42' }] }]
                                },
                                {
                                    instruction: "Solve the word problem.", type: "word_problem",
                                    textSegments: [{ type: 'text', val: "A baker has 620 cookies. He sells 55 cookies, and then bakes 150 more. How many cookies does he have now?" }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '715' }, { type: 'text', val: ' cookies' }] }]
                                }
                            ] 
                        },
                        { 
                            id: "m8-w1-wed", name: "Wed", title: "Week 1: Wednesday", 
                            sections: [
                                {
                                    instruction: "Are all the numbers in the list multiples of 6? Select True or False.", type: "grid", col0: "List", col1: "True", col2: "False",
                                    rows: [
                                        { text: "6, 12, 18", correct: true },
                                        { text: "12, 16, 24", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Which number is a factor of both 30 and 45?", type: "multiple_choice",
                                    options: [
                                        { text: "5", correct: false },
                                        { text: "9", correct: false },
                                        { text: "10", correct: false },
                                        { text: "15", correct: true }
                                    ]
                                },
                                {
                                    instruction: "Enter the product.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("5,142", "4", "&times;") }, { type: 'input', ans: "20568" }] }]
                                }
                            ] 
                        },
                        {
                            id: "m8-w1-thu", name: "Thu", title: "Week 1: Thursday",
                            sections: [
                                {
                                    instruction: "Decide whether each number is prime or composite.", type: "grid", col0: "Number", col1: "Prime", col2: "Composite",
                                    rows: [
                                        { text: "21", correct: false },
                                        { text: "37", correct: true },
                                        { text: "39", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the smallest number that is a multiple of both 4 and 6.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "Smallest multiple: &nbsp;" }, { type: 'input', ans: "12" }] }]
                                },
                                { 
                                    instruction: "Enter the unknown number to make the fractions equivalent.", type: "mixed_row", 
                                    problems: [{ segments: [{ type: 'fraction', n: 1, d: 5 }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', ansN: '2', d: 10 }] }]
                                }
                            ]
                        },
                        { 
                            id: "m8-w1-fri", name: "Fri", title: "Week 1: Friday", 
                            sections: [
                                {
                                    instruction: "Which list contains numbers that are factors of BOTH 24 and 32?", type: "multiple_choice",
                                    options: [
                                        { text: "1, 2, 3, 8", correct: false },
                                        { text: "1, 2, 4, 8", correct: true },
                                        { text: "1, 4, 6, 8", correct: false },
                                        { text: "1, 2, 4, 6", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Decide whether each number is prime or composite.", type: "grid", col0: "Number", col1: "Prime", col2: "Composite",
                                    rows: [
                                        { text: "27", correct: false },
                                        { text: "47", correct: true },
                                        { text: "57", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Fill in the missing multiple in the sequence.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "9, 18, &nbsp;" }, { type: 'input', ans: "27" }, { type: 'text', val: "&nbsp;, 36" }] }]
                                }
                            ] 
                        }
                    ]
                },
                {
                    weekNum: 2,
                    days: [
                        {
                            id: "m8-w2-mon", name: "Mon", title: "Week 2: Monday",
                            sections: [
                                {
                                    instruction: "Is the number a factor of 60? Select Yes or No.", type: "grid", col0: "Number", col1: "Yes", col2: "No",
                                    rows: [
                                        { text: "6", correct: true },
                                        { text: "10", correct: true },
                                        { text: "16", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Which list contains ONLY prime numbers?", type: "multiple_choice",
                                    options: [
                                        { text: "3, 9, 13", correct: false },
                                        { text: "5, 11, 17", correct: true },
                                        { text: "2, 7, 15", correct: false },
                                        { text: "1, 3, 5", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the product.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("42", "15", "&times;") }, { type: 'input', ans: "630" }] }]
                                }
                            ]
                        },
                        { 
                            id: "m8-w2-tue", name: "Tue", title: "Week 2: Tuesday", 
                            sections: [
                                {
                                    instruction: "Enter a number that is a factor of BOTH 22 and 33 (do not use 1).", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: 'Factor: &nbsp;' }, { type: 'input', ans: '11' }] }]
                                },
                                {
                                    instruction: "Select True or False for the statement.", type: "grid", col0: "Statement", col1: "True", col2: "False",
                                    rows: [{ text: "36 is a multiple of both 4 and 9.", correct: true }]
                                },
                                {
                                    instruction: "Enter the quotient in the first box and the remainder in the second box.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: '619 &divide; 6 = &nbsp;&nbsp; Quotient: ' }, { type: 'input', ans: '103' }, { type: 'text', val: '&nbsp;&nbsp; Remainder: ' }, { type: 'input', ans: '1' }] }]
                                }
                            ]
                        },
                        { 
                            id: "m8-w2-wed", name: "Wed", title: "Week 2: Wednesday", 
                            sections: [
                                {
                                    instruction: "Decide whether each number is prime or composite.", type: "grid", col0: "Number", col1: "Prime", col2: "Composite",
                                    rows: [
                                        { text: "59", correct: true },
                                        { text: "63", correct: false },
                                        { text: "61", correct: true }
                                    ]
                                },
                                {
                                    instruction: "Which numbers are factors of both 12 and 28?", type: "multiple_choice",
                                    options: [
                                        { text: "1, 2, 4", correct: true },
                                        { text: "1, 3, 4", correct: false },
                                        { text: "1, 2, 6", correct: false },
                                        { text: "1, 4, 7", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Round the number to the requested place value.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "Round 72,499 to the nearest thousand: &nbsp;" }, { type: 'input', ans: "72000" }] }]
                                }
                            ] 
                        },
                        {
                            id: "m8-w2-thu", name: "Thu", title: "Week 2: Thursday",
                            sections: [
                                {
                                    instruction: "Sort the numbers into Multiples of 7 and Not Multiples of 7.", type: "grid", col0: "Number", col1: "Multiple", col2: "Not Multiple",
                                    rows: [
                                        { text: "14", correct: true },
                                        { text: "24", correct: false },
                                        { text: "28", correct: true }
                                    ]
                                },
                                {
                                    instruction: "How many total factors does the number 21 have? (Count all of them!)", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "Total number of factors: &nbsp;" }, { type: 'input', ans: "4" }] }]
                                },
                                { 
                                    instruction: "Add the fractions.", type: "mixed_row", 
                                    problems: [{ segments: [{ type: 'fraction', n: '1', d: '5' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '3', d: '5' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', ansN: '4', d: 5 }] }] 
                                }
                            ]
                        },
                        { 
                            id: "m8-w2-fri", name: "Fri", title: "Week 2: Friday", 
                            sections: [
                                {
                                    instruction: "Enter a prime number that is between 40 and 50.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: 'Prime number: &nbsp;' }, { type: 'input', ans: '41|43|47' }] }]
                                },
                                {
                                    instruction: "Which list contains ONLY multiples of 5?", type: "multiple_choice",
                                    options: [
                                        { text: "1, 5, 10", correct: false },
                                        { text: "5, 10, 15", correct: true },
                                        { text: "10, 15, 21", correct: false },
                                        { text: "15, 20, 26", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Is the number a factor of 40? Select Yes or No.", type: "grid", col0: "Number", col1: "Yes", col2: "No",
                                    rows: [
                                        { text: "5", correct: true },
                                        { text: "8", correct: true },
                                        { text: "12", correct: false }
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