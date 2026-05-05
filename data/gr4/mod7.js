const module7 = {
    id: "mod-7", 
    name: "Multidigit Arithmetic: Place Value and Operations", 
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
                            instruction: "Review: Determine whether the comparison is true or false.", type: "grid", col1: "True", col2: "False",
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
};