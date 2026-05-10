const module7 = {
    id: "mod-7",
    name: "Ops: Whole Num & Dec",
    weeks: [
        {
            weekNum: 1,
            days: [
                {
                    id: "m7-w1-mon",
                    name: "Mon",
                    title: "Standard Calculations & Fraction Review",
                    sections: [
                        {
                            instruction: "Enter the quotient.",
                            instructionMath: [{ type: "text", val: "1,512 ÷ 36" }],
                            type: "mixed_row",
                            problems: [
                                { segments: [{ type: "whole_number", ans: 42 }] }
                            ]
                        },
                        {
                            instruction: "Enter the sum.",
                            instructionMath: [
                                { type: "mixed", w: "2", n: "1", d: "3" },
                                { type: "text", val: " + " },
                                { type: "mixed", w: "1", n: "1", d: "2" }
                            ],
                            type: "mixed_row",
                            problems: [
                                { segments: [{ type: "mixed_group", ans: 3.8333 }] } 
                            ]
                        }
                    ]
                },
                {
                    id: "m7-w1-tue",
                    name: "Tue",
                    title: "Decimals to Fractions & Unknown Values",
                    sections: [
                        {
                            instruction: "Which expression is equal to 0.24 x 0.7?",
                            type: "multiple_choice",
                            options: [
                                { id: "opt1", content: [{ type: "fraction", n: "24", d: "10" }, { type: "text", val: " x " }, { type: "fraction", n: "7", d: "10" }], correct: false },
                                { id: "opt2", content: [{ type: "fraction", n: "24", d: "100" }, { type: "text", val: " x " }, { type: "fraction", n: "7", d: "10" }], correct: true },
                                { id: "opt3", content: [{ type: "fraction", n: "24", d: "100" }, { type: "text", val: " x " }, { type: "fraction", n: "7", d: "100" }], correct: false }
                            ]
                        },
                        {
                            instruction: "Enter the unknown value in the equation.",
                            instructionMath: [
                                { type: "text", val: "1,872 ÷ " },
                                { type: "box" },
                                { type: "text", val: " = 52" }
                            ],
                            type: "mixed_row",
                            problems: [
                                { segments: [{ type: "whole_number", ans: 36 }] }
                            ]
                        }
                    ]
                },
                {
                    id: "m7-w1-wed",
                    name: "Wed",
                    title: "Stacked Multiplication & Volume Review",
                    sections: [
                        {
                            instruction: "Enter the product.",
                            type: "mixed_row",
                            problems: [
                                { segments: [{ type: "stacked_math", top: "2,415", bottom: "32", operator: "x", ans: 77280 }] }
                            ]
                        },
                        {
                            instruction: "A rectangular prism has a length of 8 cm, a width of 3 cm, and a height of 5 cm. Enter the volume.",
                            type: "mixed_row",
                            problems: [
                                { segments: [{ type: "whole_number", ans: 120 }, { type: "text", val: " cubic cm" }] }
                            ]
                        }
                    ]
                },
                {
                    id: "m7-w1-thu",
                    name: "Thu",
                    title: "Symbolic Algebra & Decomposed Fractions",
                    sections: [
                        {
                            instruction: "What numbers correctly complete each equation? All squares have the same value.",
                            instructionMath: [
                                { type: "text", val: "3600 ÷ " }, { type: "box" }, { type: "text", val: " = " }, { type: "box" },
                                { type: "break" },
                                { type: "circle_box" }, { type: "text", val: " x " }, { type: "box" }, { type: "text", val: " = 1200" }
                            ],
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "box" }, { type: "text", val: " = " }, { type: "whole_number", ans: 60 },
                                        { type: "text", val: "&nbsp;&nbsp;&nbsp;&nbsp;" },
                                        { type: "circle_box" }, { type: "text", val: " = " }, { type: "whole_number", ans: 20 }
                                    ]
                                }
                            ]
                        },
                        {
                            instruction: "Enter the number that makes the equation true.",
                            instructionMath: [
                                { type: "fraction", n: "4825", d: "5" }, { type: "text", val: " = " },
                                { type: "fraction", n: "4500", d: "5" }, { type: "text", val: " + " },
                                { type: "fraction", n: "300", d: "5" }, { type: "text", val: " + " },
                                { type: "fraction", n: "&#9633;", d: "5" }
                            ],
                            type: "mixed_row",
                            problems: [
                                { segments: [{ type: "whole_number", ans: 25 }] }
                            ]
                        }
                    ]
                },
                {
                    id: "m7-w1-fri",
                    name: "Fri",
                    title: "Standard Calc & Expression Review",
                    sections: [
                        {
                            instruction: "Enter the difference.",
                            instructionMath: [{ type: "text", val: "512.48 - 289.6" }],
                            type: "mixed_row",
                            problems: [
                                { segments: [{ type: "whole_number", ans: 222.88 }] }
                            ]
                        },
                        {
                            instruction: "Use the buttons to write an expression for: 'Add 15 and 9, then multiply by 4'.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "expression_input", ans: ["(15+9)x4", "4x(15+9)"] }
                                    ]
                                }
                            ]
                        },
                        {
                            instruction: "Enter the sum.",
                            instructionMath: [{ type: "text", val: "14.5 + 23.82" }],
                            type: "mixed_row",
                            problems: [
                                { segments: [{ type: "whole_number", ans: 38.32 }] }
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
                    id: "m7-w2-mon",
                    name: "Mon",
                    title: "Base-10 Fractions & Place Value Review",
                    sections: [
                        {
                            instruction: "Which expression is equal to 0.15 x 0.30?",
                            type: "multiple_choice",
                            options: [
                                { id: "opt1", content: [{ type: "fraction", n: "15", d: "10" }, { type: "text", val: " x " }, { type: "fraction", n: "3", d: "10" }], correct: false },
                                { id: "opt2", content: [{ type: "fraction", n: "15", d: "100" }, { type: "text", val: " x " }, { type: "fraction", n: "3", d: "10" }], correct: true },
                                { id: "opt3", content: [{ type: "fraction", n: "15", d: "100" }, { type: "text", val: " x " }, { type: "fraction", n: "3", d: "100" }], correct: false }
                            ]
                        },
                        {
                            instruction: "Enter the decimal in standard form.",
                            instructionMath: [
                                { type: "text", val: "(4 x 10) + (2 x 1) + 5 x "}, 
                                { type: "fraction", n: "1", d: "10" }, 
                                { type: "text", val: " + 8 x " }, 
                                { type: "fraction", n: "1", d: "1000" }
                            ],
                            type: "mixed_row",
                            problems: [
                                { segments: [{ type: "whole_number", ans: 42.508 }] }
                            ]
                        }
                    ]
                },
                {
                    id: "m7-w2-tue",
                    name: "Tue",
                    title: "Unknown Values & Products",
                    sections: [
                        {
                            instruction: "Enter the unknown value in the equation.",
                            instructionMath: [
                                { type: "box" },
                                { type: "text", val: " - 43.91 = 12.29" }
                            ],
                            type: "mixed_row",
                            problems: [
                                { segments: [{ type: "whole_number", ans: 56.2 }] }
                            ]
                        },
                        {
                            instruction: "Enter the product.",
                            instructionMath: [{ type: "text", val: "1,245 x 48" }],
                            type: "mixed_row",
                            problems: [
                                { segments: [{ type: "whole_number", ans: 59760 }] }
                            ]
                        }
                    ]
                },
                {
                    id: "m7-w2-wed",
                    name: "Wed",
                    title: "Decomposed Fractions & Fraction Mult Review",
                    sections: [
                        {
                            instruction: "Enter the number that makes the equation true.",
                            instructionMath: [
                                { type: "fraction", n: "6554", d: "12" }, { type: "text", val: " = " },
                                { type: "fraction", n: "6000", d: "12" }, { type: "text", val: " + " },
                                { type: "fraction", n: "&#9633;", d: "12" }, { type: "text", val: " + " },
                                { type: "fraction", n: "72", d: "12" }, { type: "text", val: " + " },
                                { type: "fraction", n: "2", d: "12" }
                            ],
                            type: "mixed_row",
                            problems: [
                                { segments: [{ type: "whole_number", ans: 480 }] }
                            ]
                        },
                        {
                            instruction: [
                                { type: "text", val: "A baker uses " },
                                { type: "fraction", n: "1", d: "3" },
                                { type: "text", val: " of a 5-pound bag of flour. How many pounds did they use?" }
                            ],
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "mixed_group", ans: 1.6666 },
                                        { type: "text", val: " pounds" }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "m7-w2-thu",
                    name: "Thu",
                    title: "Stacked Mult & Shape Algebra",
                    sections: [
                        {
                            instruction: "Enter the product.",
                            type: "mixed_row",
                            problems: [
                                { segments: [{ type: "stacked_math", top: "1,645", bottom: "45", operator: "x", ans: 74025 }] }
                            ]
                        },
                        {
                            instruction: "What numbers correctly complete each equation?",
                            instructionMath: [
                                { type: "box" }, { type: "text", val: " x " }, { type: "box" }, { type: "text", val: " = 81" },
                                { type: "break" },
                                { type: "text", val: "150 - " }, { type: "box" }, { type: "text", val: " = " }, { type: "circle_box" }
                            ],
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "box" }, { type: "text", val: " = " }, { type: "whole_number", ans: 9 },
                                        { type: "text", val: "&nbsp;&nbsp;&nbsp;&nbsp;" },
                                        { type: "circle_box" }, { type: "text", val: " = " }, { type: "whole_number", ans: 141 }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "m7-w2-fri",
                    name: "Fri",
                    title: "Final Unknowns & Volume Review",
                    sections: [
                        {
                            instruction: "Enter the unknown value in the equation.",
                            instructionMath: [
                                { type: "text", val: "1,680 ÷ " },
                                { type: "box" },
                                { type: "text", val: " = 24" }
                            ],
                            type: "mixed_row",
                            problems: [
                                { segments: [{ type: "whole_number", ans: 70 }] }
                            ]
                        },
                        {
                            instruction: "Find the total volume of two stacked prisms: Bottom (10x4x2) and Top (5x4x3).",
                            type: "mixed_row",
                            problems: [
                                { segments: [{ type: "whole_number", ans: 140 }, { type: "text", val: " cubic units" }] }
                            ]
                        },
                        {
                            instruction: "Enter the sum.",
                            instructionMath: [{ type: "text", val: "105.7 + 68.45" }],
                            type: "mixed_row",
                            problems: [
                                { segments: [{ type: "whole_number", ans: 174.15 }] }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};