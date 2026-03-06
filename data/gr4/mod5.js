// --- MODULE 5 DATA (REVIEW) ---
const module5 = {
    id: "mod-5",
    name: "Mixed Review (Modules 1 - 4)",
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
                        { instruction: "What is the value of point P?", type: "number_line", start: 0, end: 1, step: 0.1, target: 0.7, label: "P", ans: "0.7" },
                        {
                            instruction: "Enter the unknown numerator.", type: "mixed_row",
                            problems: [{ segments: [{ type: 'fraction', n: '4', d: '10' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '25', d: '100' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '100', ans: '65' }] }]
                        }
                    ]
                },
                {
                    id: "m5-w1-wed", name: "Wed", title: "Week 1: Wednesday",
                    sections: [
                        {
                            instruction: "Enter the unknown number to make the equation true.", type: "mixed_row",
                            problems: [{ segments: [{ type: 'fraction', n: '7', d: '8' }, { type: 'text', val: ' - ' }, { type: 'fraction', n: 'box', d: '8', ans: '2' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: '5', d: '8' }] }]
                        },
                        {
                            instruction: "Determine whether each equation is true or false.", type: "grid", col1: "True", col2: "False",
                            rows: [
                                { segments: [{ type: 'fraction', n: '6', d: '10' }, { type: 'text', val: ' = 0.60' }], correct: true },
                                { segments: [{ type: 'fraction', n: '8', d: '100' }, { type: 'text', val: ' = 0.8' }], correct: false }
                            ]
                        }
                    ]
                },
                {
                    id: "m5-w1-thu", name: "Thu", title: "Week 1: Thursday",
                    sections: [
                        {
                            instruction: "Solve the word problem:", type: "word_problem",
                            textSegments: [{ type: 'text', val: 'A rabbit eats ' }, { type: 'fraction', n: '1', d: '4' }, { type: 'text', val: ' cup of carrots every day. How many cups does the rabbit eat in 3 days?' }],
                            problems: [{ segments: [{ type: 'text', val: 'Answer: ' }, { type: 'fraction_group', ans: 0.75 }, { type: 'text', val: ' cups' }] }]
                        },
                        {
                            instruction: "Enter the unknown fraction.", type: "mixed_row",
                            problems: [{ segments: [{ type: 'text', val: '4 &times; ' }, { type: 'fraction', n: '1', d: '5' }, { type: 'text', val: ' = ' }, { type: 'fraction_group', ans: 0.8 }] }]
                        }
                    ]
                },
                {
                    id: "m5-w1-fri", name: "Fri", title: "Week 1: Friday",
                    sections: [
                        {
                            instruction: "Enter the unknown numerator.", type: "mixed_row",
                            problems: [{ segments: [{ type: 'fraction', n: '3', d: '10' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '50', d: '100' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '100', ans: '80' }] }]
                        },
                        {
                            instruction: "Select True or False for each comparison.", type: "grid", col1: "True", col2: "False",
                            rows: [
                                { segments: [{ type: 'text', val: '0.8 > 0.75' }], correct: true },
                                { segments: [{ type: 'fraction', n: '12', d: '100' }, { type: 'text', val: ' > 0.2' }], correct: false }
                            ]
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
                            instruction: "Select all the equivalent fractions in the table below.", type: "matrix_match",
                            colHeaders: [{ type: 'fraction', n: 2, d: 6 }, { type: 'fraction', n: 4, d: 8 }, { type: 'fraction', n: 8, d: 10 }],
                            rows: [
                                { label: { type: 'fraction', n: 1, d: 3 }, matches: [true, false, false] },
                                { label: { type: 'fraction', n: 1, d: 2 }, matches: [false, true, false] },
                                { label: { type: 'fraction', n: 4, d: 5 }, matches: [false, false, true] }
                            ]
                        },
                        {
                            instruction: "Round the number to the requested place value.", type: "mixed_row",
                            problems: [{ segments: [{ type: 'text', val: "Round 54,291 to the nearest thousand: &nbsp;" }, { type: 'input', ans: "54000" }] }]
                        }
                    ]
                },
                {
                    id: "m5-w2-tue", name: "Tue", title: "Week 2: Tuesday",
                    sections: [
                        {
                            instruction: "Select the statement that explains how the values of the numbers 75 and 7500 are different.", type: "multiple_choice",
                            options: [
                                { text: "7500 is 10 times as large as 75.", correct: false },
                                { text: "7500 is 100 times as large as 75.", correct: true },
                                { text: "7500 is 1000 times as large as 75.", correct: false }
                            ]
                        },
                        {
                            instruction: "Enter a fraction equivalent to the one shown.", type: "mixed_row",
                            problems: [{ segments: [{ type: 'fraction', n: 3, d: 4 }, { type: 'text', val: ' = ' }, { type: 'fraction_group', ans: 0.75 }] }]
                        }
                    ]
                },
                {
                    id: "m5-w2-wed", name: "Wed", title: "Week 2: Wednesday",
                    sections: [
                        {
                            instruction: "When rounding to the nearest thousand, which numbers round to 16,000?", type: "grid", col1: "Yes", col2: "No",
                            rows: [
                                { text: "15,812", correct: true },
                                { text: "16,500", correct: false },
                                { text: "15,499", correct: false }
                            ]
                        },
                        {
                            instruction: "What digit can you put in the box to make the comparison true?", type: "mixed_row",
                            problems: [{ segments: [{ type: 'text', val: "42,_19 &nbsp; > &nbsp; 42,819 &nbsp;&nbsp;&nbsp;&nbsp; Missing digit: " }, { type: 'input', ans: "9" }] }]
                        }
                    ]
                },
                {
                    id: "m5-w2-thu", name: "Thu", title: "Week 2: Thursday",
                    sections: [
                        {
                            instruction: "Figure A has part of its whole shaded. Enter another fraction that is equal to the shaded amount.", type: "rect_model_equiv",
                            problems: [{ rows: 2, cols: 5, shaded: 6, fillMode: 'row', textSegments: [{ type: 'text', val: "Figure A has " }, { type: 'fraction', n: 6, d: 10 }, { type: 'text', val: " shaded. Enter an equivalent fraction:" }], ans: "0.6" }]
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
};