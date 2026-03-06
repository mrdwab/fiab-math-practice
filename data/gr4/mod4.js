// --- NEW MODULE 4 DATA ---
const module4 = {
    id: "mod-4", 
    name: "Place Value and Multidigit Whole Numbers", 
    weeks: [
        {
            weekNum: 1,
            days: [
                {
                    id: "m4-w1-mon", name: "Mon", title: "Week 1: Monday",
                    sections: [
                        {
                            instruction: "Select the statement that explains how the values of the numbers 420 and 4200 are different.",
                            type: "multiple_choice",
                            options: [
                                { text: "4200 is 1000 times as large as 420.", correct: false },
                                { text: "4200 is 100 times as large as 420.", correct: false },
                                { text: "4200 is 10 times as large as 420.", correct: true },
                                { text: "4200 is 1 time as large as 420.", correct: false }
                            ]
                        },
                        {
                            instruction: "Round the number to the requested place value.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: 'text', val: "Round 3,482 to the nearest ten: &nbsp;" },
                                        { type: 'input', ans: "3480" }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                { 
                    id: "m4-w1-tue", name: "Tue", title: "Week 1: Tuesday", 
                    sections: [
                        {
                            instruction: "Enter the symbol (<, >, or =) that goes in the box that makes this comparison true.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: 'text', val: "5082 &nbsp; " },
                                        { type: 'input', ans: "=" },
                                        { type: 'text', val: "&nbsp; 2 ones + 8 tens + 5 thousands" }
                                    ]
                                },
                                {
                                    segments: [
                                        { type: 'text', val: "300 + 40 + 8000 + 2 &nbsp; " },
                                        { type: 'input', ans: "<" },
                                        { type: 'text', val: "&nbsp; 8 thousands + 4 hundreds + 2 tens" }
                                    ]
                                }
                            ]
                        },
                        {
                            instruction: "Round the number to the requested place value.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: 'text', val: "Round 72,195 to the nearest thousand: &nbsp;" },
                                        { type: 'input', ans: "72000" }
                                    ]
                                }
                            ]
                        }
                    ] 
                },
                { 
                    id: "m4-w1-wed", name: "Wed", title: "Week 1: Wednesday", 
                    sections: [
                        {
                            instruction: "What digit can you put in the box to make the comparison true?",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: 'text', val: "67,_37 &nbsp; > &nbsp; 67,737 &nbsp;&nbsp;&nbsp;&nbsp; Missing digit: " },
                                        { type: 'input', ans: "8|9" }
                                    ]
                                }
                            ]
                        },
                        {
                            instruction: "Round the number to the requested place value.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: 'text', val: "Round 14,810 to the nearest hundred: &nbsp;" },
                                        { type: 'input', ans: "14800" }
                                    ]
                                }
                            ]
                        }
                    ] 
                },
                {
                    id: "m4-w1-thu", name: "Thu", title: "Week 1: Thursday",
                    sections: [
                        {
                            instruction: "Select True or False for each comparison.",
                            type: "grid",
                            col1: "True", col2: "False",
                            rows: [
                                { segments: [{ type: 'text', val: '805 = 800 + 50' }], correct: false },
                                { segments: [{ type: 'text', val: 'four thousand twenty > 4 thousands + 2 ones' }], correct: true },
                                { segments: [{ type: 'text', val: 'eight hundred ninety-nine < one thousand' }], correct: true }
                            ]
                        },
                        {
                            instruction: "Round the number to the requested place value.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: 'text', val: "Round 568,211 to the nearest ten thousand: &nbsp;" },
                                        { type: 'input', ans: "570000" }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                { 
                    id: "m4-w1-fri", name: "Fri", title: "Week 1: Friday", 
                    sections: [
                        {
                            instruction: "Select the statement that explains how the values of the numbers 65 and 6500 are different.",
                            type: "multiple_choice",
                            options: [
                                { text: "6500 is 100 times as large as 65.", correct: true },
                                { text: "6500 is 10 times as large as 65.", correct: false },
                                { text: "6500 is 1000 times as large as 65.", correct: false }
                            ]
                        },
                        {
                            instruction: "Enter the symbol (<, >, or =) to make the comparison true.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: 'text', val: "7 thousands + 2 tens &nbsp; " },
                                        { type: 'input', ans: ">" },
                                        { type: 'text', val: "&nbsp; 700 + 20" }
                                    ]
                                }
                            ]
                        },
                        {
                            instruction: "Round the number to the requested place value.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: 'text', val: "Round 9,845 to the nearest hundred: &nbsp;" },
                                        { type: 'input', ans: "9800" }
                                    ]
                                }
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
                    id: "m4-w2-mon", name: "Mon", title: "Week 2: Monday",
                    sections: [
                        {
                            instruction: "Round the numbers to the requested place value. Enter your answer in the box.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: 'text', val: "Round 62,894 to the nearest thousand: &nbsp;" },
                                        { type: 'input', ans: "63000" }
                                    ]
                                },
                                {
                                    segments: [
                                        { type: 'text', val: "Round 485,219 to the nearest ten thousand: &nbsp;" },
                                        { type: 'input', ans: "490000" }
                                    ]
                                }
                            ]
                        },
                        {
                            instruction: "What digit can you put in the box to make the comparison true?",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: 'text', val: "13,4_5 &nbsp; < &nbsp; 13,425 &nbsp;&nbsp;&nbsp;&nbsp; Missing digit: " },
                                        { type: 'input', ans: "0|1" }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                { 
                    id: "m4-w2-tue", name: "Tue", title: "Week 2: Tuesday", 
                    sections: [
                        {
                            instruction: "When rounding to the nearest thousand, which numbers round to 45,000? Select Yes if the number rounds to 45,000. Select No if it does not.",
                            type: "grid",
                            col1: "Yes", col2: "No",
                            rows: [
                                { text: "44,812", correct: true },
                                { text: "45,601", correct: false },
                                { text: "44,499", correct: false }
                            ]
                        },
                        {
                            instruction: "Round the number to the requested place value.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: 'text', val: "Round 84,502 to the nearest thousand: &nbsp;" },
                                        { type: 'input', ans: "85000" }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                { 
                    id: "m4-w2-wed", name: "Wed", title: "Week 2: Wednesday", 
                    sections: [
                        {
                            instruction: "Round the number to the requested place value.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: 'text', val: "Round 312,987 to the nearest hundred: &nbsp;" },
                                        { type: 'input', ans: "313000" }
                                    ]
                                }
                            ]
                        },
                        {
                            instruction: "Enter the symbol (<, >, or =) to make the comparison true.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: 'text', val: "4 thousands + 5 tens &nbsp; " },
                                        { type: 'input', ans: "=" },
                                        { type: 'text', val: "&nbsp; 4,050" }
                                    ]
                                }
                            ]
                        }
                    ] 
                },
                {
                    id: "m4-w2-thu", name: "Thu", title: "Week 2: Thursday",
                    sections: [
                        {
                            instruction: "When rounding to the nearest ten thousand, which numbers round to 80,000? Select Yes or No.",
                            type: "grid",
                            col1: "Yes", col2: "No",
                            rows: [
                                { text: "82,199", correct: true },
                                { text: "78,000", correct: true },
                                { text: "85,000", correct: false }
                            ]
                        },
                        {
                            instruction: "Round the number to the requested place value.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: 'text', val: "Round 95,612 to the nearest ten thousand: &nbsp;" },
                                        { type: 'input', ans: "100000" }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                { 
                    id: "m4-w2-fri", name: "Fri", title: "Week 2: Friday", 
                    sections: [
                        {
                            instruction: "Round 19,532 to the nearest hundred. Enter your answer below.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: 'input', ans: "19500" }
                                    ]
                                }
                            ]
                        },
                        {
                            instruction: "Select True or False for the comparison.",
                            type: "grid",
                            col1: "True", col2: "False",
                            rows: [
                                { segments: [{ type: 'text', val: '5000 + 400 + 10 = 5041' }], correct: false }
                            ]
                        },
                        {
                            instruction: "Round the number to the requested place value.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: 'text', val: "Round 4,561 to the nearest ten: &nbsp;" },
                                        { type: 'input', ans: "4560" }
                                    ]
                                }
                            ]
                        }
                    ] 
                }
            ]
        }
    ]
};