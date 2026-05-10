// --- WEEK 1 HELPER HUB ---
const helperHubW1_Mod6 = {
    title: "★ Helper Hub: The Parentheses Power-Up!",
    content: `
        <div style="font-size:16px; line-height: 1.5; color: #000;">
            <p style="margin-top:0; margin-bottom:15px;">In math, parentheses <strong>( )</strong> are like a VIP pass. Whatever is inside them gets to go <strong>FIRST!</strong></p>
            
            <div style="display:flex; justify-content: center; flex-wrap: wrap; text-align:center;">
                
                <div style="border:2px solid #333; padding:20px; border-radius:10px; background:#f9f9f9; width: 100%; max-width: 400px; position: relative;">
                    <strong style="font-size:16px; text-transform: uppercase; letter-spacing: 1px;">Step-by-Step Funnel</strong><br><br>
                    
                    <div style="display: flex; justify-content: center; align-items: center; gap: 10px; font-size: 20px; font-weight: bold;">
                        <div style="border: 2px solid #2980b9; color: #2980b9; padding: 5px 15px; border-radius: 5px; background: #ebf5fb;">
                            (12 + 8)
                        </div>
                        <div style="color: #333;">&divide;</div>
                        <div style="border: 2px dashed #27ae60; color: #27ae60; padding: 5px 15px; border-radius: 5px; background: #eafaf1;">
                            (9 - 4)
                        </div>
                    </div>

                    <svg width="300" height="40" viewBox="0 0 300 40" style="margin: 0 auto; display: block;">
                        <line x1="90" y1="5" x2="90" y2="30" stroke="#2980b9" stroke-width="2"/>
                        <polygon points="85,25 95,25 90,35" fill="#2980b9"/>
                        <line x1="210" y1="5" x2="210" y2="30" stroke="#27ae60" stroke-width="2" stroke-dasharray="4"/>
                        <polygon points="205,25 215,25 210,35" fill="#27ae60"/>
                    </svg>

                    <div style="display: flex; justify-content: center; align-items: center; gap: 40px; font-size: 20px; font-weight: bold;">
                        <div style="border: 2px solid #2980b9; color: #2980b9; padding: 5px 15px; border-radius: 5px; background: #ebf5fb;">
                            20
                        </div>
                        <div style="position: absolute; left: 50%; transform: translateX(-50%); color: #333;">&divide;</div>
                        <div style="border: 2px dashed #27ae60; color: #27ae60; padding: 5px 15px; border-radius: 5px; background: #eafaf1;">
                            5
                        </div>
                    </div>

                    <svg width="300" height="40" viewBox="0 0 300 40" style="margin: 0 auto; display: block;">
                        <line x1="120" y1="5" x2="145" y2="30" stroke="#8e44ad" stroke-width="2"/>
                        <line x1="180" y1="5" x2="155" y2="30" stroke="#8e44ad" stroke-width="2"/>
                        <polygon points="143,30 157,30 150,38" fill="#8e44ad"/>
                    </svg>

                    <div style="display: flex; justify-content: center; align-items: center; font-size: 24px; font-weight: bold;">
                        <div style="border: 3px solid #8e44ad; color: #8e44ad; padding: 5px 25px; border-radius: 5px; background: #f4ecf7; box-shadow: 2px 2px 0px #d2b4de;">
                            4
                        </div>
                    </div>

                </div>

            </div>
        </div>
    `
};

// --- WEEK 2 HELPER HUB ---
const helperHubW2_Mod6 = {
    title: "★ Helper Hub: The Math Translator",
    content: `
        <div style="font-size:16px; line-height: 1.5; color: #000;">
            <p style="margin-top:0; margin-bottom:15px;">Math is its own language! Look for clue words to help you translate English sentences into math expressions.</p>
            
            <div style="display:flex; flex-direction: column; gap:15px; justify-content: center;">
                
                <div style="border:2px solid #e67e22; padding:15px; border-radius:10px; background:#fdf2e9;">
                    <strong style="font-size:16px; color: #d35400;">Clue #1: Secret Parentheses</strong><br>
                    <div style="font-size: 14px; margin: 5px 0 10px 0;">Words like "<strong>the sum of</strong>" or "<strong>the difference between</strong>" are secret codes that tell you to <u>put parentheses around those numbers</u>!</div>
                    
                    <div style="background: #fff; border: 1px solid #fad7a1; padding: 15px; border-radius: 8px; text-align: center;">
                        <div style="font-size: 16px; margin-bottom: 10px;">
                            The product of 9 and <span style="color: #d35400; font-weight: bold; border-bottom: 2px dashed #d35400; padding-bottom: 2px;">the sum of 6 and 3</span>
                        </div>
                        <div style="font-size: 20px; font-weight: bold; color: #333;">
                            9 &times; <span style="color: #d35400; border: 2px dashed #d35400; padding: 2px 6px; border-radius: 4px; background: #fdf2e9;">(6 + 3)</span>
                        </div>
                    </div>
                </div>

                <div style="border:2px solid #555; padding:15px; border-radius:10px; background:#f4f4f4;">
                    <strong style="font-size:16px;">Clue #2: Mapping the Sentence</strong><br>
                    <div style="font-size: 14px; margin: 5px 0 10px 0;">Match the pattern and color of the text directly to the math symbols.</div>
                    
                    <div style="background: #fff; border: 1px solid #aaa; padding: 15px; border-radius: 8px; text-align: center;">
                        <div style="font-size: 16px; margin-bottom: 10px; line-height: 1.8;">
                            <span style="color: #2980b9; border-bottom: 3px solid #2980b9; padding-bottom: 2px; font-weight: bold;">15 times as large as</span> 
                            <span style="color: #27ae60; font-weight: bold; border-bottom: 2px dashed #27ae60; padding-bottom: 2px;">the sum of 42 and 8</span>
                        </div>
                        <div style="font-size: 20px; font-weight: bold; margin-top: 15px;">
                            <span style="color: #2980b9; border: 3px solid #2980b9; background: #ebf5fb; padding: 2px 6px; border-radius: 4px;">15 &times;</span> 
                            <span style="color: #27ae60; border: 2px dashed #27ae60; background: #eafaf1; padding: 2px 6px; border-radius: 4px; margin-left: 5px;">(42 + 8)</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    `
};

const module6 = {
    id: "mod-6",
    name: "Numerical Expressions",
    versions: [
        // ==========================================
        // VERSION A (Baseline)
        // ==========================================
        {
            id: "A",
            weeks: [
                {
                    weekNum: 1,
                    helperHub: helperHubW1_Mod6,
                    days: [
                        {
                            id: "m6-w1-mon-a", name: "Mon", title: "Order of Operations & Translations",
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
                            id: "m6-w1-tue-a", name: "Tue", title: "Writing Expressions & Sequential Ops",
                            sections: [
                                {
                                    instruction: "Write an expression for: \"The sum of 10 and 14, divided by 6.\"",
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
                            id: "m6-w1-wed-a", name: "Wed", title: "Translation & Calculation",
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
                            id: "m6-w1-thu-a", name: "Thu", title: "Compound Expressions",
                            sections: [
                                {
                                    instruction: "Write an expression for: \"The quotient of the sum of 12 and 8, and the difference of 9 and 4.\"",
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
                            id: "m6-w1-fri-a", name: "Fri", title: "Weekly Quiz",
                            sections: [
                                {
                                    instruction: "Enter the exact value:",
                                    instructionMath: [{ type: "text", val: "(15 ÷ 3) + (9 x 6)" }],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 59 }] } ]
                                },
                                {
                                    instruction: "Write an expression for: \"5 less than the product of 8 and 3.\"",
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
                    helperHub: helperHubW2_Mod6,
                    days: [
                        {
                            id: "m6-w2-mon-a", name: "Mon", title: "Decimals & Translations",
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
                            id: "m6-w2-tue-a", name: "Tue", title: "Building Expressions",
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
                            id: "m6-w2-wed-a", name: "Wed", title: "Mixed Operations",
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
                                }
                            ]
                        },
                        {
                            id: "m6-w2-thu-a", name: "Thu", title: "Subtle Distractors",
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
                            id: "m6-w2-fri-a", name: "Fri", title: "Module Quiz",
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
        },

        // ==========================================
        // VERSION B
        // ==========================================
        {
            id: "B",
            weeks: [
                {
                    weekNum: 1,
                    helperHub: helperHubW1_Mod6,
                    days: [
                        {
                            id: "m6-w1-mon-b", name: "Mon", title: "Order of Operations & Translations",
                            sections: [
                                {
                                    instruction: "Calculate the exact value of the expression:",
                                    instructionMath: [{ type: "text", val: "(12 x 3) - (20 ÷ 4)" }],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 31 }] } ]
                                },
                                {
                                    instruction: "Which statement best describes the value of the expression below?",
                                    instructionMath: [{ type: "text", val: "(8 x 3) + 7" }],
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [{ type: "text", val: "The value is 7 more than the product of 8 and 3." }], correct: true },
                                        { id: 'opt2', content: [{ type: "text", val: "The value is 7 times as large as the sum of 8 and 3." }], correct: false },
                                        { id: 'opt3', content: [{ type: "text", val: "The value is 8 more than the product of 7 and 3." }], correct: false },
                                        { id: 'opt4', content: [{ type: "text", val: "The value is the product of 8 and 3 subtracted from 7." }], correct: false }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m6-w1-tue-b", name: "Tue", title: "Writing Expressions & Sequential Ops",
                            sections: [
                                {
                                    instruction: "Write an expression for: \"The sum of 15 and 9, divided by 4.\"",
                                    type: "mixed_row",
                                    problems: [ 
                                        { segments: [{ type: 'expression_input', ans: ["(15+9)÷4", "(9+15)÷4"] }] } 
                                    ]
                                },
                                {
                                    instruction: "Enter the value:",
                                    instructionMath: [{ type: "text", val: "40 + (6 x 3) - 15" }],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 43 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m6-w1-wed-b", name: "Wed", title: "Translation & Calculation",
                            sections: [
                                {
                                    instruction: "Which statement describes the value of the expression?",
                                    instructionMath: [{ type: "text", val: "12 x (400 - 150)" }],
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [{ type: "text", val: "The value is 150 less than the product of 12 and 400." }], correct: false },
                                        { id: 'opt2', content: [{ type: "text", val: "The value is 12 times as large as the difference between 400 and 150." }], correct: true },
                                        { id: 'opt3', content: [{ type: "text", val: "The value is the product of 12 and 400 subtracted from 150." }], correct: false },
                                        { id: 'opt4', content: [{ type: "text", val: "The value is 12 times as large as the quotient of 400 and 150." }], correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the value:",
                                    instructionMath: [{ type: "text", val: "50 - (4 x 6) + 12" }],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 38 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m6-w1-thu-b", name: "Thu", title: "Compound Expressions",
                            sections: [
                                {
                                    instruction: "Write an expression for: \"The quotient of the sum of 10 and 14, and the difference of 8 and 2.\"",
                                    type: "mixed_row",
                                    problems: [ 
                                        { segments: [{ type: 'expression_input', ans: ["(10+14)÷(8-2)", "(14+10)÷(8-2)"] }] } 
                                    ]
                                },
                                {
                                    instruction: "Which statement best describes the value of the expression?",
                                    instructionMath: [{ type: "text", val: "8 x (30 + 5)" }],
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [{ type: "text", val: "The value is 8 more than the product of 30 and 5." }], correct: false },
                                        { id: 'opt2', content: [{ type: "text", val: "The value is 5 more than the product of 8 and 30." }], correct: false },
                                        { id: 'opt3', content: [{ type: "text", val: "The value is 8 times as large as the sum of 30 and 5." }], correct: true },
                                        { id: 'opt4', content: [{ type: "text", val: "The value is the sum of 8 and 30 multiplied by 5." }], correct: false }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m6-w1-fri-b", name: "Fri", title: "Weekly Quiz",
                            sections: [
                                {
                                    instruction: "Enter the exact value:",
                                    instructionMath: [{ type: "text", val: "(18 ÷ 2) + (7 x 5)" }],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 44 }] } ]
                                },
                                {
                                    instruction: "Write an expression for: \"4 less than the product of 9 and 2.\"",
                                    type: "mixed_row",
                                    problems: [ 
                                        { segments: [{ type: 'expression_input', ans: ["(9x2)-4", "(2x9)-4", "9x2-4", "2x9-4"] }] } 
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    weekNum: 2,
                    helperHub: helperHubW2_Mod6,
                    days: [
                        {
                            id: "m6-w2-mon-b", name: "Mon", title: "Decimals & Translations",
                            sections: [
                                {
                                    instruction: "Enter the exact value:",
                                    instructionMath: [{ type: "text", val: "(4.2 x 0.5) ÷ (0.7 x 0.3)" }],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 10 }] } ]
                                },
                                {
                                    instruction: "Which statement describes the value of the expression?",
                                    instructionMath: [{ type: "text", val: "30 x (4,100 - 500)" }],
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [{ type: "text", val: "The value is 30 times as large as the difference of 4,100 and 500." }], correct: true },
                                        { id: 'opt2', content: [{ type: "text", val: "The value is 500 less than the product of 30 and 4,100." }], correct: false },
                                        { id: 'opt3', content: [{ type: "text", val: "The value is the product of 30 and 4,100 subtracted from 500." }], correct: false },
                                        { id: 'opt4', content: [{ type: "text", val: "The value is 30 times as large as the quotient of 4,100 and 500." }], correct: false }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m6-w2-tue-b", name: "Tue", title: "Building Expressions",
                            sections: [
                                {
                                    instruction: "Write an expression for: \"The product of 8 and the sum of 7 and 4.\"",
                                    type: "mixed_row",
                                    problems: [ 
                                        { segments: [{ type: 'expression_input', ans: ["8x(7+4)", "8x(4+7)", "(7+4)x8", "(4+7)x8"] }] } 
                                    ]
                                },
                                {
                                    instruction: "Enter the exact value:",
                                    instructionMath: [{ type: "text", val: "15.5 + (4.2 x 2) - 3.1" }],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 20.8 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m6-w2-wed-b", name: "Wed", title: "Mixed Operations",
                            sections: [
                                {
                                    instruction: "Which statement describes the value of the expression?",
                                    instructionMath: [{ type: "text", val: "(15 x 4) + 20" }],
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [{ type: "text", val: "The value is 20 times as large as the product of 15 and 4." }], correct: false },
                                        { id: 'opt2', content: [{ type: "text", val: "The value is 20 more than the product of 15 and 4." }], correct: true },
                                        { id: 'opt3', content: [{ type: "text", val: "The value is 15 times as large as the sum of 4 and 20." }], correct: false },
                                        { id: 'opt4', content: [{ type: "text", val: "The value is 15 more than the product of 4 and 20." }], correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the exact value:",
                                    instructionMath: [{ type: "text", val: "(9.5 - 2.3) x (12 ÷ 3)" }],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 28.8 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m6-w2-thu-b", name: "Thu", title: "Subtle Distractors",
                            sections: [
                                {
                                    instruction: "Write an expression for: \"Add 15 and 6, then multiply by 3.\"",
                                    type: "mixed_row",
                                    problems: [ 
                                        { segments: [{ type: 'expression_input', ans: ["(15+6)x3", "(6+15)x3", "3x(15+6)", "3x(6+15)"] }] } 
                                    ]
                                },
                                {
                                    instruction: "Which statement best describes the value of the expression?",
                                    instructionMath: [{ type: "text", val: "12 x (35 + 5)" }],
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [{ type: "text", val: "The value is the sum of 12 and 35 multiplied by 5." }], correct: false },
                                        { id: 'opt2', content: [{ type: "text", val: "The value is 12 times as large as the product of 35 and 5." }], correct: false },
                                        { id: 'opt3', content: [{ type: "text", val: "The value is 12 times as large as the sum of 35 and 5." }], correct: true },
                                        { id: 'opt4', content: [{ type: "text", val: "The value is 5 more than the product of 12 and 35." }], correct: false }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m6-w2-fri-b", name: "Fri", title: "Module Quiz",
                            sections: [
                                {
                                    instruction: "Enter the exact value:",
                                    instructionMath: [{ type: "text", val: "(7.5 x 0.2) ÷ (1.5 x 0.1)" }],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 10 }] } ]
                                },
                                {
                                    instruction: "Write an expression for: \"The difference between 60 and 10, divided by the sum of 3 and 2.\"",
                                    type: "mixed_row",
                                    problems: [ 
                                        { segments: [{ type: 'expression_input', ans: ["(60-10)÷(3+2)", "(60-10)÷(2+3)"] }] } 
                                    ]
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
                    helperHub: helperHubW1_Mod6,
                    days: [
                        {
                            id: "m6-w1-mon-c", name: "Mon", title: "Order of Operations & Translations",
                            sections: [
                                {
                                    instruction: "Calculate the exact value of the expression:",
                                    instructionMath: [{ type: "text", val: "(15 x 2) - (24 ÷ 6)" }],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 26 }] } ]
                                },
                                {
                                    instruction: "Which statement best describes the value of the expression below?",
                                    instructionMath: [{ type: "text", val: "(5 x 4) + 8" }],
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [{ type: "text", val: "The value is 8 more than the product of 5 and 4." }], correct: true },
                                        { id: 'opt2', content: [{ type: "text", val: "The value is 8 times as large as the sum of 5 and 4." }], correct: false },
                                        { id: 'opt3', content: [{ type: "text", val: "The value is 5 more than the product of 8 and 4." }], correct: false },
                                        { id: 'opt4', content: [{ type: "text", val: "The value is the product of 5 and 4 subtracted from 8." }], correct: false }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m6-w1-tue-c", name: "Tue", title: "Writing Expressions & Sequential Ops",
                            sections: [
                                {
                                    instruction: "Write an expression for: \"The sum of 18 and 12, divided by 5.\"",
                                    type: "mixed_row",
                                    problems: [ 
                                        { segments: [{ type: 'expression_input', ans: ["(18+12)÷5", "(12+18)÷5"] }] } 
                                    ]
                                },
                                {
                                    instruction: "Enter the value:",
                                    instructionMath: [{ type: "text", val: "50 + (7 x 4) - 25" }],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 53 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m6-w1-wed-c", name: "Wed", title: "Translation & Calculation",
                            sections: [
                                {
                                    instruction: "Which statement describes the value of the expression?",
                                    instructionMath: [{ type: "text", val: "16 x (500 - 200)" }],
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [{ type: "text", val: "The value is 200 less than the product of 16 and 500." }], correct: false },
                                        { id: 'opt2', content: [{ type: "text", val: "The value is 16 times as large as the difference between 500 and 200." }], correct: true },
                                        { id: 'opt3', content: [{ type: "text", val: "The value is the product of 16 and 500 subtracted from 200." }], correct: false },
                                        { id: 'opt4', content: [{ type: "text", val: "The value is 16 times as large as the quotient of 500 and 200." }], correct: false }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m6-w1-thu-c", name: "Thu", title: "Compound Expressions",
                            sections: [
                                {
                                    instruction: "Write an expression for: \"The quotient of the sum of 15 and 5, and the difference of 10 and 6.\"",
                                    type: "mixed_row",
                                    problems: [ 
                                        { segments: [{ type: 'expression_input', ans: ["(15+5)÷(10-6)", "(5+15)÷(10-6)"] }] } 
                                    ]
                                },
                                {
                                    instruction: "Which statement best describes the value of the expression?",
                                    instructionMath: [{ type: "text", val: "9 x (40 + 6)" }],
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [{ type: "text", val: "The value is 9 more than the product of 40 and 6." }], correct: false },
                                        { id: 'opt2', content: [{ type: "text", val: "The value is 6 more than the product of 9 and 40." }], correct: false },
                                        { id: 'opt3', content: [{ type: "text", val: "The value is 9 times as large as the sum of 40 and 6." }], correct: true },
                                        { id: 'opt4', content: [{ type: "text", val: "The value is the sum of 9 and 40 multiplied by 6." }], correct: false }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m6-w1-fri-c", name: "Fri", title: "Weekly Quiz",
                            sections: [
                                {
                                    instruction: "Enter the exact value:",
                                    instructionMath: [{ type: "text", val: "(20 ÷ 4) + (8 x 3)" }],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 29 }] } ]
                                },
                                {
                                    instruction: "Write an expression for: \"6 less than the product of 7 and 4.\"",
                                    type: "mixed_row",
                                    problems: [ 
                                        { segments: [{ type: 'expression_input', ans: ["(7x4)-6", "(4x7)-6", "7x4-6", "4x7-6"] }] } 
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    weekNum: 2,
                    helperHub: helperHubW2_Mod6,
                    days: [
                        {
                            id: "m6-w2-mon-c", name: "Mon", title: "Decimals & Translations",
                            sections: [
                                {
                                    instruction: "Enter the exact value:",
                                    instructionMath: [{ type: "text", val: "(5.4 x 0.5) ÷ (0.9 x 0.3)" }],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 10 }] } ]
                                },
                                {
                                    instruction: "Which statement describes the value of the expression?",
                                    instructionMath: [{ type: "text", val: "50 x (6,300 - 400)" }],
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [{ type: "text", val: "The value is 50 times as large as the difference of 6,300 and 400." }], correct: true },
                                        { id: 'opt2', content: [{ type: "text", val: "The value is 400 less than the product of 50 and 6,300." }], correct: false },
                                        { id: 'opt3', content: [{ type: "text", val: "The value is the product of 50 and 6,300 subtracted from 400." }], correct: false },
                                        { id: 'opt4', content: [{ type: "text", val: "The value is 50 times as large as the quotient of 6,300 and 400." }], correct: false }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m6-w2-tue-c", name: "Tue", title: "Building Expressions",
                            sections: [
                                {
                                    instruction: "Write an expression for: \"The product of 7 and the sum of 8 and 2.\"",
                                    type: "mixed_row",
                                    problems: [ 
                                        { segments: [{ type: 'expression_input', ans: ["7x(8+2)", "7x(2+8)", "(8+2)x7", "(2+8)x7"] }] } 
                                    ]
                                },
                                {
                                    instruction: "Enter the exact value:",
                                    instructionMath: [{ type: "text", val: "18.5 + (2.3 x 3) - 5.2" }],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 20.2 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m6-w2-wed-c", name: "Wed", title: "Mixed Operations",
                            sections: [
                                {
                                    instruction: "Which statement describes the value of the expression?",
                                    instructionMath: [{ type: "text", val: "(14 x 5) + 25" }],
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [{ type: "text", val: "The value is 25 times as large as the product of 14 and 5." }], correct: false },
                                        { id: 'opt2', content: [{ type: "text", val: "The value is 25 more than the product of 14 and 5." }], correct: true },
                                        { id: 'opt3', content: [{ type: "text", val: "The value is 14 times as large as the sum of 5 and 25." }], correct: false },
                                        { id: 'opt4', content: [{ type: "text", val: "The value is 14 more than the product of 5 and 25." }], correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the exact value:",
                                    instructionMath: [{ type: "text", val: "(7.6 - 2.4) x (16 ÷ 4)" }],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 20.8 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m6-w2-thu-c", name: "Thu", title: "Subtle Distractors",
                            sections: [
                                {
                                    instruction: "Write an expression for: \"Add 25 and 10, then multiply by 5.\"",
                                    type: "mixed_row",
                                    problems: [ 
                                        { segments: [{ type: 'expression_input', ans: ["(25+10)x5", "(10+25)x5", "5x(25+10)", "5x(10+25)"] }] } 
                                    ]
                                },
                                {
                                    instruction: "Which statement best describes the value of the expression?",
                                    instructionMath: [{ type: "text", val: "14 x (50 + 7)" }],
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [{ type: "text", val: "The value is the sum of 14 and 50 multiplied by 7." }], correct: false },
                                        { id: 'opt2', content: [{ type: "text", val: "The value is 14 times as large as the product of 50 and 7." }], correct: false },
                                        { id: 'opt3', content: [{ type: "text", val: "The value is 14 times as large as the sum of 50 and 7." }], correct: true },
                                        { id: 'opt4', content: [{ type: "text", val: "The value is 7 more than the product of 14 and 50." }], correct: false }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m6-w2-fri-c", name: "Fri", title: "Module Quiz",
                            sections: [
                                {
                                    instruction: "Enter the exact value:",
                                    instructionMath: [{ type: "text", val: "(8.5 x 0.4) ÷ (1.7 x 0.2)" }],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 10 }] } ]
                                },
                                {
                                    instruction: "Write an expression for: \"The difference between 80 and 30, divided by the sum of 6 and 4.\"",
                                    type: "mixed_row",
                                    problems: [ 
                                        { segments: [{ type: 'expression_input', ans: ["(80-30)÷(6+4)", "(80-30)÷(4+6)"] }] } 
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