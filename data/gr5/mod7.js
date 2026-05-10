// --- WEEK 1 HELPER HUB ---
const helperHubW1_Mod7 = {
    title: "★ Helper Hub: Decimals in Disguise",
    content: `
        <div style="font-size:16px; line-height: 1.5; color: #000;">
            <p style="margin-top:0; margin-bottom:15px;">Want to know a secret for multiplying decimals? Turn them into fractions first! Pay close attention to the denominators.</p>
            
            <div style="display:flex; justify-content: center; flex-wrap: wrap; text-align:center;">
                
                <div style="border:2px solid #555; padding:20px; border-radius:10px; background:#f9f9f9; width: 100%; max-width: 450px;">
                    
                    <div style="display: flex; justify-content: center; align-items: center; gap: 15px; font-size: 26px; font-weight: bold; margin-bottom: 5px;">
                        <div>0.24</div>
                        <div>&times;</div>
                        <div>0.7</div>
                        <div>=</div>
                        <div style="color: #7f8c8d;">?</div>
                    </div>

                    <svg width="200" height="40" viewBox="0 0 200 40" style="margin: 0 auto; display: block;">
                        <line x1="30" y1="5" x2="30" y2="30" stroke="#000" stroke-width="2" stroke-dasharray="4"/>
                        <polygon points="25,25 35,25 30,35" fill="#000"/>
                        <line x1="95" y1="5" x2="95" y2="30" stroke="#000" stroke-width="2" stroke-dasharray="4"/>
                        <polygon points="90,25 100,25 95,35" fill="#000"/>
                    </svg>

                    <div style="display: flex; justify-content: center; align-items: center; gap: 15px; font-size: 22px; font-weight: bold;">
                        <div class="fraction-wrap"><span class="frac-top">24</span><span class="frac-bottom" style="border-bottom: 3px solid #e74c3c; color: #e74c3c;">100</span></div>
                        <div>&times;</div>
                        <div class="fraction-wrap"><span class="frac-top">7</span><span class="frac-bottom" style="border-bottom: 3px solid #e74c3c; color: #e74c3c;">10</span></div>
                        <div>=</div>
                        <div class="fraction-wrap"><span class="frac-top">168</span><span class="frac-bottom" style="border-bottom: 3px solid #e74c3c; color: #e74c3c;">1000</span></div>
                    </div>

                    <div style="background: #fff; border: 2px dashed #e74c3c; padding: 15px; border-radius: 8px; margin-top: 20px;">
                        <strong>Look at the bottom numbers!</strong><br>
                        <span style="font-size: 18px; color: #c0392b; font-weight: bold;">100 &times; 10 = 1000</span><br>
                        <div style="margin-top: 10px; font-size: 14px;">That means your final answer will be in the <strong>thousandths</strong>.</div>
                        <div style="margin-top: 5px; font-size: 20px; font-weight: bold;">0.168</div>
                    </div>

                </div>

            </div>
        </div>
    `
};

// --- WEEK 2 HELPER HUB ---
const helperHubW2_Mod7 = {
    title: "★ Helper Hub: Break It Down! (Friendly Chunks)",
    content: `
        <div style="font-size:16px; line-height: 1.5; color: #000;">
            <p style="margin-top:0; margin-bottom:15px;">When you have a giant fraction, you can break the top number into <strong>"friendly chunks"</strong> to make dividing easy. Just make sure your chunks add back up to the original number!</p>
            
            <div style="display:flex; justify-content: center;">
                
                <div style="border:2px solid #555; padding:20px; border-radius:10px; background:#f4f4f4; width: 100%; max-width: 500px; text-align: center;">
                    
                    <div style="display: flex; flex-direction: column; align-items: center; margin-bottom: 15px;">
                        <div style="border: 3px solid #2980b9; background: #ebf5fb; padding: 10px; border-radius: 6px; width: 300px; font-weight: bold; font-size: 20px; color: #2980b9;">
                            4825
                        </div>
                        
                        <div style="font-size: 24px; font-weight: bold; margin: 5px 0;">&darr;</div>
                        
                        <div style="display: flex; gap: 10px; justify-content: center;">
                            <div style="border: 2px solid #27ae60; background: #eafaf1; padding: 10px; border-radius: 6px; width: 130px; font-weight: bold; font-size: 18px; color: #27ae60;">
                                4500
                            </div>
                            <div style="font-size: 24px; font-weight: bold; align-self: center;">+</div>
                            <div style="border: 2px solid #27ae60; background: #eafaf1; padding: 10px; border-radius: 6px; width: 70px; font-weight: bold; font-size: 18px; color: #27ae60;">
                                300
                            </div>
                            <div style="font-size: 24px; font-weight: bold; align-self: center;">+</div>
                            <div style="border: 2px dashed #e67e22; background: #fdf2e9; padding: 10px; border-radius: 6px; width: 50px; font-weight: bold; font-size: 18px; color: #d35400;">
                                ?
                            </div>
                        </div>
                    </div>
                    
                    <div style="background: #fff; border: 1px solid #ccc; padding: 15px; border-radius: 8px;">
                        <div style="display: flex; justify-content: center; align-items: center; gap: 10px; font-size: 20px; font-weight: bold;">
                            <div class="fraction-wrap"><span class="frac-top" style="color: #2980b9;">4825</span><span class="frac-bottom">5</span></div>
                            <div>=</div>
                            <div class="fraction-wrap"><span class="frac-top" style="color: #27ae60;">4500</span><span class="frac-bottom">5</span></div>
                            <div>+</div>
                            <div class="fraction-wrap"><span class="frac-top" style="color: #27ae60;">300</span><span class="frac-bottom">5</span></div>
                            <div>+</div>
                            <div class="fraction-wrap"><span class="frac-top" style="color: #d35400;">25</span><span class="frac-bottom">5</span></div>
                        </div>
                        <div style="margin-top: 15px; font-size: 14px; border-top: 1px dashed #aaa; padding-top: 10px;">
                            <strong>The Secret:</strong> Since <span style="color: #27ae60; font-weight: bold;">4500 + 300</span> = 4800, the missing chunk has to be <span style="color: #d35400; font-weight: bold;">25</span>!
                        </div>
                    </div>

                </div>

            </div>
        </div>
    `
};

const module7 = {
    id: "mod-7",
    name: "Ops: Whole Num & Dec",
    versions: [
        // ==========================================
        // VERSION A (Baseline)
        // ==========================================
        {
            id: "A",
            weeks: [
                {
                    weekNum: 1,
                    helperHub: helperHubW1_Mod7,
                    days: [
                        {
                            id: "m7-w1-mon-a",
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
                            id: "m7-w1-tue-a",
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
                            id: "m7-w1-wed-a",
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
                            id: "m7-w1-thu-a",
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
                            id: "m7-w1-fri-a",
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
                                    instruction: "Write an expression for: 'Add 15 and 9, then multiply by 4'.",
                                    type: "mixed_row",
                                    problems: [
                                        {
                                            segments: [
                                                { type: "expression_input", ans: ["(15+9)x4", "4x(15+9)", "(9+15)x4", "4x(9+15)"] }
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
                    helperHub: helperHubW2_Mod7,
                    days: [
                        {
                            id: "m7-w2-mon-a",
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
                            id: "m7-w2-tue-a",
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
                            id: "m7-w2-wed-a",
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
                            id: "m7-w2-thu-a",
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
                            id: "m7-w2-fri-a",
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
        },

        // ==========================================
        // VERSION B
        // ==========================================
        {
            id: "B",
            weeks: [
                {
                    weekNum: 1,
                    helperHub: helperHubW1_Mod7,
                    days: [
                        {
                            id: "m7-w1-mon-b",
                            name: "Mon",
                            title: "Standard Calculations & Fraction Review",
                            sections: [
                                {
                                    instruction: "Enter the quotient.",
                                    instructionMath: [{ type: "text", val: "1,404 ÷ 39" }],
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: "whole_number", ans: 36 }] }
                                    ]
                                },
                                {
                                    instruction: "Enter the sum.",
                                    instructionMath: [
                                        { type: "mixed", w: "3", n: "1", d: "4" },
                                        { type: "text", val: " + " },
                                        { type: "mixed", w: "1", n: "1", d: "2" }
                                    ],
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: "mixed_group", ans: 4.75 }] } 
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m7-w1-tue-b",
                            name: "Tue",
                            title: "Decimals to Fractions & Unknown Values",
                            sections: [
                                {
                                    instruction: "Which expression is equal to 0.35 x 0.4?",
                                    type: "multiple_choice",
                                    options: [
                                        { id: "opt1", content: [{ type: "fraction", n: "35", d: "10" }, { type: "text", val: " x " }, { type: "fraction", n: "4", d: "10" }], correct: false },
                                        { id: "opt2", content: [{ type: "fraction", n: "35", d: "100" }, { type: "text", val: " x " }, { type: "fraction", n: "4", d: "10" }], correct: true },
                                        { id: "opt3", content: [{ type: "fraction", n: "35", d: "100" }, { type: "text", val: " x " }, { type: "fraction", n: "4", d: "100" }], correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the unknown value in the equation.",
                                    instructionMath: [
                                        { type: "text", val: "1,598 ÷ " },
                                        { type: "box" },
                                        { type: "text", val: " = 47" }
                                    ],
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: "whole_number", ans: 34 }] }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m7-w1-wed-b",
                            name: "Wed",
                            title: "Stacked Multiplication & Volume Review",
                            sections: [
                                {
                                    instruction: "Enter the product.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: "stacked_math", top: "3,142", bottom: "25", operator: "x", ans: 78550 }] }
                                    ]
                                },
                                {
                                    instruction: "A rectangular prism has a length of 6 cm, a width of 4 cm, and a height of 5 cm. Enter the volume.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: "whole_number", ans: 120 }, { type: "text", val: " cubic cm" }] }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m7-w1-thu-b",
                            name: "Thu",
                            title: "Symbolic Algebra & Decomposed Fractions",
                            sections: [
                                {
                                    instruction: "What numbers correctly complete each equation? All squares have the same value.",
                                    instructionMath: [
                                        { type: "text", val: "6400 ÷ " }, { type: "box" }, { type: "text", val: " = " }, { type: "box" },
                                        { type: "break" },
                                        { type: "circle_box" }, { type: "text", val: " x " }, { type: "box" }, { type: "text", val: " = 1600" }
                                    ],
                                    type: "mixed_row",
                                    problems: [
                                        {
                                            segments: [
                                                { type: "box" }, { type: "text", val: " = " }, { type: "whole_number", ans: 80 },
                                                { type: "text", val: "&nbsp;&nbsp;&nbsp;&nbsp;" },
                                                { type: "circle_box" }, { type: "text", val: " = " }, { type: "whole_number", ans: 20 }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    instruction: "Enter the number that makes the equation true.",
                                    instructionMath: [
                                        { type: "fraction", n: "5236", d: "4" }, { type: "text", val: " = " },
                                        { type: "fraction", n: "4000", d: "4" }, { type: "text", val: " + " },
                                        { type: "fraction", n: "1200", d: "4" }, { type: "text", val: " + " },
                                        { type: "fraction", n: "&#9633;", d: "4" }
                                    ],
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: "whole_number", ans: 36 }] }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m7-w1-fri-b",
                            name: "Fri",
                            title: "Standard Calc & Expression Review",
                            sections: [
                                {
                                    instruction: "Enter the difference.",
                                    instructionMath: [{ type: "text", val: "623.57 - 394.8" }],
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: "whole_number", ans: 228.77 }] }
                                    ]
                                },
                                {
                                    instruction: "Write an expression for: 'Add 12 and 8, then multiply by 5'.",
                                    type: "mixed_row",
                                    problems: [
                                        {
                                            segments: [
                                                { type: "expression_input", ans: ["(12+8)x5", "5x(12+8)", "(8+12)x5", "5x(8+12)"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    instruction: "Enter the sum.",
                                    instructionMath: [{ type: "text", val: "15.4 + 26.75" }],
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: "whole_number", ans: 42.15 }] }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    weekNum: 2,
                    helperHub: helperHubW2_Mod7,
                    days: [
                        {
                            id: "m7-w2-mon-b",
                            name: "Mon",
                            title: "Base-10 Fractions & Place Value Review",
                            sections: [
                                {
                                    instruction: "Which expression is equal to 0.28 x 0.5?",
                                    type: "multiple_choice",
                                    options: [
                                        { id: "opt1", content: [{ type: "fraction", n: "28", d: "10" }, { type: "text", val: " x " }, { type: "fraction", n: "5", d: "10" }], correct: false },
                                        { id: "opt2", content: [{ type: "fraction", n: "28", d: "100" }, { type: "text", val: " x " }, { type: "fraction", n: "5", d: "100" }], correct: false },
                                        { id: "opt3", content: [{ type: "fraction", n: "28", d: "100" }, { type: "text", val: " x " }, { type: "fraction", n: "5", d: "10" }], correct: true }
                                    ]
                                },
                                {
                                    instruction: "Enter the decimal in standard form.",
                                    instructionMath: [
                                        { type: "text", val: "(3 x 10) + (4 x 1) + 6 x "}, 
                                        { type: "fraction", n: "1", d: "10" }, 
                                        { type: "text", val: " + 2 x " }, 
                                        { type: "fraction", n: "1", d: "1000" }
                                    ],
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: "whole_number", ans: 34.602 }] }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m7-w2-tue-b",
                            name: "Tue",
                            title: "Unknown Values & Products",
                            sections: [
                                {
                                    instruction: "Enter the unknown value in the equation.",
                                    instructionMath: [
                                        { type: "box" },
                                        { type: "text", val: " - 35.82 = 14.38" }
                                    ],
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: "whole_number", ans: 50.2 }] }
                                    ]
                                },
                                {
                                    instruction: "Enter the product.",
                                    instructionMath: [{ type: "text", val: "2,136 x 35" }],
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: "whole_number", ans: 74760 }] }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m7-w2-wed-b",
                            name: "Wed",
                            title: "Decomposed Fractions & Fraction Mult Review",
                            sections: [
                                {
                                    instruction: "Enter the number that makes the equation true.",
                                    instructionMath: [
                                        { type: "fraction", n: "5438", d: "15" }, { type: "text", val: " = " },
                                        { type: "fraction", n: "4500", d: "15" }, { type: "text", val: " + " },
                                        { type: "fraction", n: "&#9633;", d: "15" }, { type: "text", val: " + " },
                                        { type: "fraction", n: "30", d: "15" }, { type: "text", val: " + " },
                                        { type: "fraction", n: "8", d: "15" }
                                    ],
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: "whole_number", ans: 900 }] }
                                    ]
                                },
                                {
                                    instruction: [
                                        { type: "text", val: "A baker uses " },
                                        { type: "fraction", n: "1", d: "4" },
                                        { type: "text", val: " of a 7-pound bag of flour. How many pounds did they use?" }
                                    ],
                                    type: "mixed_row",
                                    problems: [
                                        {
                                            segments: [
                                                { type: "mixed_group", ans: 1.75 },
                                                { type: "text", val: " pounds" }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m7-w2-thu-b",
                            name: "Thu",
                            title: "Stacked Mult & Shape Algebra",
                            sections: [
                                {
                                    instruction: "Enter the product.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: "stacked_math", top: "1,524", bottom: "36", operator: "x", ans: 54864 }] }
                                    ]
                                },
                                {
                                    instruction: "What numbers correctly complete each equation?",
                                    instructionMath: [
                                        { type: "box" }, { type: "text", val: " x " }, { type: "box" }, { type: "text", val: " = 64" },
                                        { type: "break" },
                                        { type: "text", val: "120 - " }, { type: "box" }, { type: "text", val: " = " }, { type: "circle_box" }
                                    ],
                                    type: "mixed_row",
                                    problems: [
                                        {
                                            segments: [
                                                { type: "box" }, { type: "text", val: " = " }, { type: "whole_number", ans: 8 },
                                                { type: "text", val: "&nbsp;&nbsp;&nbsp;&nbsp;" },
                                                { type: "circle_box" }, { type: "text", val: " = " }, { type: "whole_number", ans: 112 }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m7-w2-fri-b",
                            name: "Fri",
                            title: "Final Unknowns & Volume Review",
                            sections: [
                                {
                                    instruction: "Enter the unknown value in the equation.",
                                    instructionMath: [
                                        { type: "text", val: "1,440 ÷ " },
                                        { type: "box" },
                                        { type: "text", val: " = 32" }
                                    ],
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: "whole_number", ans: 45 }] }
                                    ]
                                },
                                {
                                    instruction: "Find the total volume of two stacked prisms: Bottom (8x5x2) and Top (4x5x3).",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: "whole_number", ans: 140 }, { type: "text", val: " cubic units" }] }
                                    ]
                                },
                                {
                                    instruction: "Enter the sum.",
                                    instructionMath: [{ type: "text", val: "112.6 + 45.85" }],
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: "whole_number", ans: 158.45 }] }
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
                    helperHub: helperHubW1_Mod7,
                    days: [
                        {
                            id: "m7-w1-mon-c",
                            name: "Mon",
                            title: "Standard Calculations & Fraction Review",
                            sections: [
                                {
                                    instruction: "Enter the quotient.",
                                    instructionMath: [{ type: "text", val: "1,632 ÷ 48" }],
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: "whole_number", ans: 34 }] }
                                    ]
                                },
                                {
                                    instruction: "Enter the sum.",
                                    instructionMath: [
                                        { type: "mixed", w: "3", n: "1", d: "5" },
                                        { type: "text", val: " + " },
                                        { type: "mixed", w: "1", n: "1", d: "2" }
                                    ],
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: "mixed_group", ans: 4.7 }] } 
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m7-w1-tue-c",
                            name: "Tue",
                            title: "Decimals to Fractions & Unknown Values",
                            sections: [
                                {
                                    instruction: "Which expression is equal to 0.42 x 0.8?",
                                    type: "multiple_choice",
                                    options: [
                                        { id: "opt1", content: [{ type: "fraction", n: "42", d: "10" }, { type: "text", val: " x " }, { type: "fraction", n: "8", d: "10" }], correct: false },
                                        { id: "opt2", content: [{ type: "fraction", n: "42", d: "100" }, { type: "text", val: " x " }, { type: "fraction", n: "8", d: "100" }], correct: false },
                                        { id: "opt3", content: [{ type: "fraction", n: "42", d: "100" }, { type: "text", val: " x " }, { type: "fraction", n: "8", d: "10" }], correct: true }
                                    ]
                                },
                                {
                                    instruction: "Enter the unknown value in the equation.",
                                    instructionMath: [
                                        { type: "text", val: "1,368 ÷ " },
                                        { type: "box" },
                                        { type: "text", val: " = 38" }
                                    ],
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: "whole_number", ans: 36 }] }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m7-w1-wed-c",
                            name: "Wed",
                            title: "Stacked Multiplication & Volume Review",
                            sections: [
                                {
                                    instruction: "Enter the product.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: "stacked_math", top: "4,125", bottom: "24", operator: "x", ans: 99000 }] }
                                    ]
                                },
                                {
                                    instruction: "A rectangular prism has a length of 7 cm, a width of 4 cm, and a height of 5 cm. Enter the volume.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: "whole_number", ans: 140 }, { type: "text", val: " cubic cm" }] }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m7-w1-thu-c",
                            name: "Thu",
                            title: "Symbolic Algebra & Decomposed Fractions",
                            sections: [
                                {
                                    instruction: "What numbers correctly complete each equation? All squares have the same value.",
                                    instructionMath: [
                                        { type: "text", val: "8100 ÷ " }, { type: "box" }, { type: "text", val: " = " }, { type: "box" },
                                        { type: "break" },
                                        { type: "circle_box" }, { type: "text", val: " x " }, { type: "box" }, { type: "text", val: " = 2700" }
                                    ],
                                    type: "mixed_row",
                                    problems: [
                                        {
                                            segments: [
                                                { type: "box" }, { type: "text", val: " = " }, { type: "whole_number", ans: 90 },
                                                { type: "text", val: "&nbsp;&nbsp;&nbsp;&nbsp;" },
                                                { type: "circle_box" }, { type: "text", val: " = " }, { type: "whole_number", ans: 30 }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    instruction: "Enter the number that makes the equation true.",
                                    instructionMath: [
                                        { type: "fraction", n: "6342", d: "6" }, { type: "text", val: " = " },
                                        { type: "fraction", n: "6000", d: "6" }, { type: "text", val: " + " },
                                        { type: "fraction", n: "&#9633;", d: "6" }, { type: "text", val: " + " },
                                        { type: "fraction", n: "42", d: "6" }
                                    ],
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: "whole_number", ans: 300 }] }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m7-w1-fri-c",
                            name: "Fri",
                            title: "Standard Calc & Expression Review",
                            sections: [
                                {
                                    instruction: "Enter the difference.",
                                    instructionMath: [{ type: "text", val: "734.15 - 458.3" }],
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: "whole_number", ans: 275.85 }] }
                                    ]
                                },
                                {
                                    instruction: "Write an expression for: 'Add 20 and 5, then multiply by 6'.",
                                    type: "mixed_row",
                                    problems: [
                                        {
                                            segments: [
                                                { type: "expression_input", ans: ["(20+5)x6", "6x(20+5)", "(5+20)x6", "6x(5+20)"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    instruction: "Enter the sum.",
                                    instructionMath: [{ type: "text", val: "16.8 + 21.45" }],
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: "whole_number", ans: 38.25 }] }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    weekNum: 2,
                    helperHub: helperHubW2_Mod7,
                    days: [
                        {
                            id: "m7-w2-mon-c",
                            name: "Mon",
                            title: "Base-10 Fractions & Place Value Review",
                            sections: [
                                {
                                    instruction: "Which expression is equal to 0.55 x 0.6?",
                                    type: "multiple_choice",
                                    options: [
                                        { id: "opt1", content: [{ type: "fraction", n: "55", d: "10" }, { type: "text", val: " x " }, { type: "fraction", n: "6", d: "10" }], correct: false },
                                        { id: "opt2", content: [{ type: "fraction", n: "55", d: "100" }, { type: "text", val: " x " }, { type: "fraction", n: "6", d: "100" }], correct: false },
                                        { id: "opt3", content: [{ type: "fraction", n: "55", d: "100" }, { type: "text", val: " x " }, { type: "fraction", n: "6", d: "10" }], correct: true }
                                    ]
                                },
                                {
                                    instruction: "Enter the decimal in standard form.",
                                    instructionMath: [
                                        { type: "text", val: "(5 x 10) + (7 x 1) + 2 x "}, 
                                        { type: "fraction", n: "1", d: "10" }, 
                                        { type: "text", val: " + 9 x " }, 
                                        { type: "fraction", n: "1", d: "1000" }
                                    ],
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: "whole_number", ans: 57.209 }] }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m7-w2-tue-c",
                            name: "Tue",
                            title: "Unknown Values & Products",
                            sections: [
                                {
                                    instruction: "Enter the unknown value in the equation.",
                                    instructionMath: [
                                        { type: "box" },
                                        { type: "text", val: " - 52.46 = 18.15" }
                                    ],
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: "whole_number", ans: 70.61 }] }
                                    ]
                                },
                                {
                                    instruction: "Enter the product.",
                                    instructionMath: [{ type: "text", val: "3,214 x 26" }],
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: "whole_number", ans: 83564 }] }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m7-w2-wed-c",
                            name: "Wed",
                            title: "Decomposed Fractions & Fraction Mult Review",
                            sections: [
                                {
                                    instruction: "Enter the number that makes the equation true.",
                                    instructionMath: [
                                        { type: "fraction", n: "8425", d: "15" }, { type: "text", val: " = " },
                                        { type: "fraction", n: "7500", d: "15" }, { type: "text", val: " + " },
                                        { type: "fraction", n: "&#9633;", d: "15" }, { type: "text", val: " + " },
                                        { type: "fraction", n: "25", d: "15" }
                                    ],
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: "whole_number", ans: 900 }] }
                                    ]
                                },
                                {
                                    instruction: [
                                        { type: "text", val: "A baker uses " },
                                        { type: "fraction", n: "1", d: "5" },
                                        { type: "text", val: " of an 8-pound bag of flour. How many pounds did they use?" }
                                    ],
                                    type: "mixed_row",
                                    problems: [
                                        {
                                            segments: [
                                                { type: "mixed_group", ans: 1.6 },
                                                { type: "text", val: " pounds" }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m7-w2-thu-c",
                            name: "Thu",
                            title: "Stacked Mult & Shape Algebra",
                            sections: [
                                {
                                    instruction: "Enter the product.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: "stacked_math", top: "2,418", bottom: "35", operator: "x", ans: 84630 }] }
                                    ]
                                },
                                {
                                    instruction: "What numbers correctly complete each equation?",
                                    instructionMath: [
                                        { type: "box" }, { type: "text", val: " x " }, { type: "box" }, { type: "text", val: " = 49" },
                                        { type: "break" },
                                        { type: "text", val: "100 - " }, { type: "box" }, { type: "text", val: " = " }, { type: "circle_box" }
                                    ],
                                    type: "mixed_row",
                                    problems: [
                                        {
                                            segments: [
                                                { type: "box" }, { type: "text", val: " = " }, { type: "whole_number", ans: 7 },
                                                { type: "text", val: "&nbsp;&nbsp;&nbsp;&nbsp;" },
                                                { type: "circle_box" }, { type: "text", val: " = " }, { type: "whole_number", ans: 93 }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m7-w2-fri-c",
                            name: "Fri",
                            title: "Final Unknowns & Volume Review",
                            sections: [
                                {
                                    instruction: "Enter the unknown value in the equation.",
                                    instructionMath: [
                                        { type: "text", val: "1,728 ÷ " },
                                        { type: "box" },
                                        { type: "text", val: " = 36" }
                                    ],
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: "whole_number", ans: 48 }] }
                                    ]
                                },
                                {
                                    instruction: "Find the total volume of two stacked prisms: Bottom (12x3x2) and Top (6x3x4).",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: "whole_number", ans: 144 }, { type: "text", val: " cubic units" }] }
                                    ]
                                },
                                {
                                    instruction: "Enter the sum.",
                                    instructionMath: [{ type: "text", val: "124.3 + 57.28" }],
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: "whole_number", ans: 181.58 }] }
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