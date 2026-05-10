const module7 = {
    id: "mod-7",
    name: "Ops: Whole Num & Dec",
    weeks: [
        {
            weekNum: 1,
            days: [
                {
                    id: "m7-w1-mon", name: "Mon", title: "Division & Unknown Decimals",
                    sections: [
                        {
                            instruction: "Enter the quotient.",
                            instructionMath: [{ type: "text", val: "2,184 ÷ 52" }],
                            type: "mixed_row",
                            problems: [ { segments: [{ type: 'whole_number', ans: 42 }] } ]
                        },
                        {
                            instruction: "Enter the unknown value in the equation.",
                            instructionMath: [
                                { type: "box" },
                                { type: "text", val: " - 35.8 = 14.15" }
                            ],
                            type: "mixed_row",
                            problems: [ { segments: [{ type: 'whole_number', ans: 49.95 }] } ]
                        }
                    ]
                },
                {
                    id: "m7-w1-tue", name: "Tue", title: "Stacked Multiplication & Decomposed Division",
                    sections: [
                        {
                            instruction: "Enter the product.",
                            type: "mixed_row",
                            problems: [ 
                                { segments: [{ type: 'stacked_math', top: '2,314', bottom: '36', operator: 'x', ans: 83304 }] } 
                            ]
                        },
                        {
                            instruction: "Enter the number that makes the equation true.",
                            instructionMath: [
                                { type: "fraction", n: "4325", d: "8" },
                                { type: "text", val: " = " },
                                { type: "fraction", n: "4000", d: "8" },
                                { type: "text", val: " + " },
                                { type: "fraction", n: "?", d: "8" }, // Visual representation of empty box
                                { type: "text", val: " + " },
                                { type: "fraction", n: "5", d: "8" }
                            ],
                            type: "mixed_row",
                            problems: [ { segments: [{ type: 'whole_number', ans: 320 }] } ]
                        }
                    ]
                },
                {
                    id: "m7-w1-wed", name: "Wed", title: "Decimal Subtraction & Missing Divisors",
                    sections: [
                        {
                            instruction: "Enter the difference.",
                            instructionMath: [{ type: "text", val: "512.4 - 186.27" }],
                            type: "mixed_row",
                            problems: [ { segments: [{ type: 'whole_number', ans: 326.13 }] } ]
                        },
                        {
                            instruction: "Enter the unknown value in the equation.",
                            instructionMath: [
                                { type: "text", val: "540 ÷ " },
                                { type: "box" },
                                { type: "text", val: " = 12" }
                            ],
                            type: "mixed_row",
                            problems: [ { segments: [{ type: 'whole_number', ans: 45 }] } ]
                        }
                    ]
                },
                {
                    id: "m7-w1-thu", name: "Thu", title: "Multiplication & Symbolic Algebra",
                    sections: [
                        {
                            instruction: "Enter the product.",
                            instructionMath: [{ type: "text", val: "1,805 x 43" }],
                            type: "mixed_row",
                            problems: [ { segments: [{ type: 'whole_number', ans: 77615 }] } ]
                        },
                        {
                            instruction: "What numbers correctly complete each equation?",
                            instructionMath: [
                                { type: "box" }, { type: "text", val: " + " }, { type: "box" }, { type: "text", val: " = " }, { type: "circle_box" },
                                { type: "break" },
                                { type: "box" }, { type: "text", val: " x " }, { type: "circle_box" }, { type: "text", val: " = 18" }
                            ],
                            type: "mixed_row",
                            problems: [ 
                                { segments: [
                                    { type: "box" }, { type: "text", val: " = " }, { type: 'whole_number', ans: 3 },
                                    { type: "text", val: "&nbsp;&nbsp;&nbsp;&nbsp;" }, // Spacing
                                    { type: "circle_box" }, { type: "text", val: " = " }, { type: 'whole_number', ans: 6 }
                                ]} 
                            ]
                        }
                    ]
                },
                {
                    id: "m7-w1-fri", name: "Fri", title: "Weekly Quiz",
                    sections: [
                        {
                            instruction: "Enter the quotient.",
                            instructionMath: [{ type: "text", val: "3,456 ÷ 48" }],
                            type: "mixed_row",
                            problems: [ { segments: [{ type: 'whole_number', ans: 72 }] } ]
                        },
                        {
                            instruction: "Enter the difference.",
                            instructionMath: [{ type: "text", val: "105.2 - 68.74" }],
                            type: "mixed_row",
                            problems: [ { segments: [{ type: 'whole_number', ans: 36.46 }] } ]
                        }
                    ]
                }
            ]
        },
        {
            weekNum: 2,
            days: [
                {
                    id: "m7-w2-mon", name: "Mon", title: "Unknown Addends & Decomposed Division",
                    sections: [
                        {
                            instruction: "Enter the unknown value in the equation.",
                            instructionMath: [
                                { type: "box" },
                                { type: "text", val: " + 17.05 = 62.3" }
                            ],
                            type: "mixed_row",
                            problems: [ { segments: [{ type: 'whole_number', ans: 45.25 }] } ]
                        },
                        {
                            instruction: "Enter the number that makes the equation true.",
                            instructionMath: [
                                { type: "fraction", n: "8472", d: "15" },
                                { type: "text", val: " = " },
                                { type: "fraction", n: "7500", d: "15" },
                                { type: "text", val: " + " },
                                { type: "fraction", n: "900", d: "15" },
                                { type: "text", val: " + " },
                                { type: "fraction", n: " ", d: "15" }, 
                                { type: "text", val: " + " },
                                { type: "fraction", n: "12", d: "15" }
                            ],
                            type: "mixed_row",
                            problems: [ { segments: [{ type: 'whole_number', ans: 60 }] } ]
                        }
                    ]
                },
                {
                    id: "m7-w2-tue", name: "Tue", title: "Stacked Multiplication & Symbolic Algebra II",
                    sections: [
                        {
                            instruction: "Enter the product.",
                            type: "mixed_row",
                            problems: [ 
                                { segments: [{ type: 'stacked_math', top: '3,052', bottom: '28', operator: 'x', ans: 85456 }] } 
                            ]
                        },
                        {
                            instruction: "What numbers correctly complete each equation?",
                            instructionMath: [
                                { type: "box" }, { type: "text", val: " = " }, { type: "circle_box" }, { type: "text", val: " x 3" },
                                { type: "break" },
                                { type: "box" }, { type: "text", val: " x " }, { type: "circle_box" }, { type: "text", val: " = 48" }
                            ],
                            type: "mixed_row",
                            problems: [ 
                                { segments: [
                                    { type: "box" }, { type: "text", val: " = " }, { type: 'whole_number', ans: 12 },
                                    { type: "text", val: "&nbsp;&nbsp;&nbsp;&nbsp;" }, 
                                    { type: "circle_box" }, { type: "text", val: " = " }, { type: 'whole_number', ans: 4 }
                                ]} 
                            ]
                        }
                    ]
                },
                {
                    id: "m7-w2-wed", name: "Wed", title: "Division & Missing Dividends",
                    sections: [
                        {
                            instruction: "Enter the quotient.",
                            instructionMath: [{ type: "text", val: "6,164 ÷ 67" }],
                            type: "mixed_row",
                            problems: [ { segments: [{ type: 'whole_number', ans: 92 }] } ]
                        },
                        {
                            instruction: "Enter the unknown value in the equation.",
                            instructionMath: [
                                { type: "box" },
                                { type: "text", val: " ÷ 18 = 25" }
                            ],
                            type: "mixed_row",
                            problems: [ { segments: [{ type: 'whole_number', ans: 450 }] } ]
                        }
                    ]
                },
                {
                    id: "m7-w2-thu", name: "Thu", title: "Decimal Subtraction & Symbolic Algebra III",
                    sections: [
                        {
                            instruction: "Enter the difference.",
                            instructionMath: [{ type: "text", val: "300.5 - 124.81" }],
                            type: "mixed_row",
                            problems: [ { segments: [{ type: 'whole_number', ans: 175.69 }] } ]
                        },
                        {
                            instruction: "What numbers correctly complete each equation?",
                            instructionMath: [
                                { type: "box" }, { type: "text", val: " x " }, { type: "box" }, { type: "text", val: " = 36" },
                                { type: "break" },
                                { type: "box" }, { type: "text", val: " + " }, { type: "circle_box" }, { type: "text", val: " = 15" }
                            ],
                            type: "mixed_row",
                            problems: [ 
                                { segments: [
                                    { type: "box" }, { type: "text", val: " = " }, { type: 'whole_number', ans: 6 },
                                    { type: "text", val: "&nbsp;&nbsp;&nbsp;&nbsp;" }, 
                                    { type: "circle_box" }, { type: "text", val: " = " }, { type: 'whole_number', ans: 9 }
                                ]} 
                            ]
                        }
                    ]
                },
                {
                    id: "m7-w2-fri", name: "Fri", title: "Module Quiz",
                    sections: [
                        {
                            instruction: "Enter the number that makes the equation true.",
                            instructionMath: [
                                { type: "fraction", n: "5291", d: "13" },
                                { type: "text", val: " = " },
                                { type: "fraction", n: "3900", d: "13" },
                                { type: "text", val: " + " },
                                { type: "fraction", n: "1300", d: "13" },
                                { type: "text", val: " + " },
                                { type: "fraction", n: " ", d: "13" }, 
                                { type: "text", val: " + " },
                                { type: "fraction", n: "13", d: "13" }
                            ],
                            type: "mixed_row",
                            problems: [ { segments: [{ type: 'whole_number', ans: 78 }] } ]
                        },
                        {
                            instruction: "Enter the unknown value in the equation.",
                            instructionMath: [
                                { type: "text", val: "960 ÷ " },
                                { type: "box" },
                                { type: "text", val: " = 32" }
                            ],
                            type: "mixed_row",
                            problems: [ { segments: [{ type: 'whole_number', ans: 30 }] } ]
                        }
                    ]
                }
            ]
        }
    ]
};