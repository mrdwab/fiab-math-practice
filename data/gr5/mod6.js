    // --- MODULE 6: NUMERICAL EXPRESSIONS (INLINE DATA) ---
    const module6 = {
        id: "mod-6",
        name: "Numerical Expressions",
        weeks: [
            {
                weekNum: 1,
                days: [
                    {
                        id: "m6-w1-mon", name: "Mon", title: "Order of Operations & Translations",
                        sections: [
                            {
                                instruction: "Calculate the exact value of the expression:",
                                instructionMath: [{ type: "text", val: "(10 x 4) - (15 ÷ 3)" }],
                                type: "mixed_row",
                                problems: [ { segments: [{ type: 'whole_number', ans: 35 }] } ]
                            },
                            {
                                instruction: "Which statement best describes the value of the expression below?",
                                instructionMath: [{ type: "text", val: "(6 x 2) + 9" }],
                                type: "multiple_choice",
                                options: [
                                    { id: 'opt1', content: [{ type: "text", val: "The value is 9 more than the product of 6 and 2." }], correct: true },
                                    { id: 'opt2', content: [{ type: "text", val: "The value is 9 times as large as the sum of 6 and 2." }], correct: false },
                                    { id: 'opt3', content: [{ type: "text", val: "The value is 6 more than the product of 9 and 2." }], correct: false },
                                    { id: 'opt4', content: [{ type: "text", val: "The value is the product of 6 and 2 subtracted from 9." }], correct: false }
                                ]
                            }
                        ]
                    },
                    {
                        id: "m6-w1-tue", name: "Tue", title: "Writing Expressions & Sequential Ops",
                        sections: [
                            {
                                instruction: "Use the buttons to write an expression for: \"The sum of 10 and 14, divided by 6.\"",
                                type: "mixed_row",
                                problems: [ 
                                    { segments: [{ type: 'expression_input', ans: ["(10+14)÷6", "(14+10)÷6"] }] } 
                                ]
                            },
                            {
                                instruction: "Enter the value:",
                                instructionMath: [{ type: "text", val: "30 + (8 x 5) - 20" }],
                                type: "mixed_row",
                                problems: [ { segments: [{ type: 'whole_number', ans: 50 }] } ]
                            }
                        ]
                    },
                    {
                        id: "m6-w1-wed", name: "Wed", title: "Translation & Calculation",
                        sections: [
                            {
                                instruction: "Which statement describes the value of the expression?",
                                instructionMath: [{ type: "text", val: "14 x (300 - 120)" }],
                                type: "multiple_choice",
                                options: [
                                    { id: 'opt1', content: [{ type: "text", val: "The value is 120 less than the product of 14 and 300." }], correct: false },
                                    { id: 'opt2', content: [{ type: "text", val: "The value is 14 times as large as the difference between 300 and 120." }], correct: true },
                                    { id: 'opt3', content: [{ type: "text", val: "The value is the product of 14 and 300 subtracted from 120." }], correct: false },
                                    { id: 'opt4', content: [{ type: "text", val: "The value is 14 times as large as the quotient of 300 and 120." }], correct: false }
                                ]
                            },
                            {
                                instruction: "Enter the value:",
                                instructionMath: [{ type: "text", val: "60 - (5 x 4) + 15" }],
                                type: "mixed_row",
                                problems: [ { segments: [{ type: 'whole_number', ans: 55 }] } ]
                            }
                        ]
                    },
                    {
                        id: "m6-w1-thu", name: "Thu", title: "Compound Expressions",
                        sections: [
                            {
                                instruction: "Use the buttons to write an expression for: \"The quotient of the sum of 12 and 8, and the difference of 9 and 4.\"",
                                type: "mixed_row",
                                problems: [ 
                                    { segments: [{ type: 'expression_input', ans: ["(12+8)÷(9-4)", "(8+12)÷(9-4)"] }] } 
                                ]
                            },
                            {
                                instruction: "Which statement best describes the value of the expression?",
                                instructionMath: [{ type: "text", val: "7 x (20 + 4)" }],
                                type: "multiple_choice",
                                options: [
                                    { id: 'opt1', content: [{ type: "text", val: "The value is 7 more than the product of 20 and 4." }], correct: false },
                                    { id: 'opt2', content: [{ type: "text", val: "The value is 4 more than the product of 7 and 20." }], correct: false },
                                    { id: 'opt3', content: [{ type: "text", val: "The value is 7 times as large as the sum of 20 and 4." }], correct: true },
                                    { id: 'opt4', content: [{ type: "text", val: "The value is the sum of 7 and 20 multiplied by 4." }], correct: false }
                                ]
                            }
                        ]
                    },
                    {
                        id: "m6-w1-fri", name: "Fri", title: "Weekly Quiz",
                        sections: [
                            {
                                instruction: "Enter the exact value:",
                                instructionMath: [{ type: "text", val: "(15 ÷ 3) + (9 x 6)" }],
                                type: "mixed_row",
                                problems: [ { segments: [{ type: 'whole_number', ans: 59 }] } ]
                            },
                            {
                                instruction: "Use the buttons to write an expression for: \"5 less than the product of 8 and 3.\"",
                                type: "mixed_row",
                                problems: [ 
                                    { segments: [{ type: 'expression_input', ans: ["(8x3)-5", "(3x8)-5", "8x3-5", "3x8-5"] }] } 
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
                        id: "m6-w2-mon", name: "Mon", title: "Decimals & Translations",
                        sections: [
                            {
                                instruction: "Enter the exact value:",
                                instructionMath: [{ type: "text", val: "(3.2 x 0.5) ÷ (0.8 x 0.2)" }],
                                type: "mixed_row",
                                problems: [ { segments: [{ type: 'whole_number', ans: 10 }] } ]
                            },
                            {
                                instruction: "Which statement describes the value of the expression?",
                                instructionMath: [{ type: "text", val: "40 x (5,200 - 600)" }],
                                type: "multiple_choice",
                                options: [
                                    { id: 'opt1', content: [{ type: "text", val: "The value is 40 times as large as the difference of 5,200 and 600." }], correct: true },
                                    { id: 'opt2', content: [{ type: "text", val: "The value is 600 less than the product of 40 and 5,200." }], correct: false },
                                    { id: 'opt3', content: [{ type: "text", val: "The value is the product of 40 and 5,200 subtracted from 600." }], correct: false },
                                    { id: 'opt4', content: [{ type: "text", val: "The value is 40 times as large as the quotient of 5,200 and 600." }], correct: false }
                                ]
                            }
                        ]
                    },
                    {
                        id: "m6-w2-tue", name: "Tue", title: "Building Expressions",
                        sections: [
                            {
                                instruction: "Write an expression for: \"The product of 9 and the sum of 6 and 3.\"",
                                type: "mixed_row",
                                problems: [ 
                                    { segments: [{ type: 'expression_input', ans: ["9x(6+3)", "9x(3+6)", "(6+3)x9", "(3+6)x9"] }] } 
                                ]
                            },
                            {
                                instruction: "Enter the exact value:",
                                instructionMath: [{ type: "text", val: "12.5 + (3.1 x 2) - 4.3" }],
                                type: "mixed_row",
                                problems: [ { segments: [{ type: 'whole_number', ans: 14.4 }] } ]
                            }
                        ]
                    },
                    {
                        id: "m6-w2-wed", name: "Wed", title: "Mixed Operations",
                        sections: [
                            {
                                instruction: "Which statement describes the value of the expression?",
                                instructionMath: [{ type: "text", val: "(12 x 6) + 18" }],
                                type: "multiple_choice",
                                options: [
                                    { id: 'opt1', content: [{ type: "text", val: "The value is 18 times as large as the product of 12 and 6." }], correct: false },
                                    { id: 'opt2', content: [{ type: "text", val: "The value is 18 more than the product of 12 and 6." }], correct: true },
                                    { id: 'opt3', content: [{ type: "text", val: "The value is 12 times as large as the sum of 6 and 18." }], correct: false },
                                    { id: 'opt4', content: [{ type: "text", val: "The value is 12 more than the product of 6 and 18." }], correct: false }
                                ]
                            },
                            {
                                instruction: "Enter the exact value:",
                                instructionMath: [{ type: "text", val: "(8.4 - 3.2) x (10 ÷ 2)" }],
                                type: "mixed_row",
                                problems: [ { segments: [{ type: 'whole_number', ans: 26 }] } ]
                            }
                        ]
                    },
                    {
                        id: "m6-w2-thu", name: "Thu", title: "Subtle Distractors",
                        sections: [
                            {
                                instruction: "Write an expression for: \"Add 20 and 5, then multiply by 4.\"",
                                type: "mixed_row",
                                problems: [ 
                                    { segments: [{ type: 'expression_input', ans: ["(20+5)x4", "(5+20)x4", "4x(20+5)", "4x(5+20)"] }] } 
                                ]
                            },
                            {
                                instruction: "Which statement best describes the value of the expression?",
                                instructionMath: [{ type: "text", val: "15 x (42 + 8)" }],
                                type: "multiple_choice",
                                options: [
                                    { id: 'opt1', content: [{ type: "text", val: "The value is the sum of 15 and 42 multiplied by 8." }], correct: false },
                                    { id: 'opt2', content: [{ type: "text", val: "The value is 15 times as large as the product of 42 and 8." }], correct: false },
                                    { id: 'opt3', content: [{ type: "text", val: "The value is 15 times as large as the sum of 42 and 8." }], correct: true },
                                    { id: 'opt4', content: [{ type: "text", val: "The value is 8 more than the product of 15 and 42." }], correct: false }
                                ]
                            }
                        ]
                    },
                    {
                        id: "m6-w2-fri", name: "Fri", title: "Module Quiz",
                        sections: [
                            {
                                instruction: "Enter the exact value:",
                                instructionMath: [{ type: "text", val: "(6.5 x 0.4) ÷ (1.3 x 0.2)" }],
                                type: "mixed_row",
                                problems: [ { segments: [{ type: 'whole_number', ans: 10 }] } ]
                            },
                            {
                                instruction: "Write an expression for: \"The difference between 50 and 20, divided by the sum of 4 and 2.\"",
                                type: "mixed_row",
                                problems: [ 
                                    { segments: [{ type: 'expression_input', ans: ["(50-20)÷(4+2)", "(50-20)÷(2+4)"] }] } 
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    };