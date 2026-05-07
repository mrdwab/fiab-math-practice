// --- MODULE 3 DATA ---
const module3 = {
    id: "mod-3", 
    name: "Fraction Equivalence & Ordering", 
    
    helperHubs: {
        week1: {
            title: "★ Helper Hub: The Golden Rule of Fractions",
            content: `
                <div style="font-size:16px; line-height: 1.5;">
                    <p style="margin-top:0; margin-bottom:15px;">Fractions can look different but have the exact same value! We call these <strong>Equivalent Fractions</strong>.</p>
                    
                    <div style="display:flex; gap:15px; align-items:flex-start; break-inside: avoid;">
                        <div style="flex:1; padding:15px; border:2px solid #ccc; border-radius:10px; background:#fff; text-align:center;">
                            <strong style="font-size:18px; color:#2c7be5;">The Golden Rule</strong><br><br>
                            Whatever you do to the top (numerator), you MUST do to the bottom (denominator)!<br><br>
                            <div style="font-weight:bold; display: flex; align-items: center; justify-content: center;">${f(1,2)} &times; ${f(2,2)} = ${f(2,4)}</div><br>
                            <em>Because multiplying by ${f(2,2)} is the same as multiplying by 1 whole!</em>
                        </div>
                        <div style="flex:1; padding:15px; border:2px solid #ccc; border-radius:10px; background:#fff; text-align:center;">
                            <strong style="font-size:18px; color:#e74c3c;">Dividing Works Too!</strong><br><br>
                            You can also group pieces together by dividing the top and bottom by the same number.<br><br>
                            <div style="font-weight:bold; display: flex; align-items: center; justify-content: center;">${f(4,8)} &divide; ${f(4,4)} = ${f(1,2)}</div><br>
                            <em>This is called simplifying the fraction!</em>
                        </div>
                    </div>
                </div>`
        },
        week2: {
            title: "★ Helper Hub: Strategies for Comparing",
            content: `
                <div style="font-size:16px; line-height: 1.5;">
                    <p style="margin-top:0; margin-bottom:15px;">When fractions have different denominators, it's like comparing apples and oranges. You need a strategy to figure out which is bigger!</p>
                    
                    <div style="display:flex; gap:15px; align-items:flex-start; break-inside: avoid;">
                        <div style="flex:1; padding:15px; border:2px solid #ccc; border-radius:10px; background:#fff; text-align:center;">
                            <strong style="font-size:18px; color:#2c7be5;">Common Denominators</strong><br><br>
                            Turn them into the same kind of pieces! Compare ${f(2,3)} and ${f(5,6)}.<br><br>
                            Use the Golden Rule to change thirds into sixths:<br>
                            <div style="font-weight:bold; display: flex; align-items: center; justify-content: center; margin: 10px 0;">${f(2,3)} &times; ${f(2,2)} = ${f(4,6)}</div>
                            Now it's easy: <strong style="color:#e74c3c;">${f(4,6)} &lt; ${f(5,6)}</strong>
                        </div>
                        <div style="flex:1; padding:15px; border:2px solid #ccc; border-radius:10px; background:#fff; text-align:center;">
                            <strong style="font-size:18px; color:#e74c3c;">Benchmark to ${f(1,2)}</strong><br><br>
                            Compare to a half! Which is bigger: ${f(3,8)} or ${f(4,6)}?<br><br>
                            Half of 8 is 4, so ${f(3,8)} is <strong>less</strong> than a half.<br>
                            Half of 6 is 3, so ${f(4,6)} is <strong>more</strong> than a half.<br><br>
                            So, <strong style="color:#2c7be5;">${f(4,6)} &gt; ${f(3,8)}</strong>
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
                            id: "m3-w1-mon", name: "Mon", title: "Week 1: Monday",
                            sections: [
                                {
                                    instruction: "Select all the equivalent fractions in the table below.",
                                    type: "matrix_match",
                                    colHeaders: [
                                        { type: 'fraction', n: 2, d: 4 },
                                        { type: 'fraction', n: 4, d: 6 },
                                        { type: 'fraction', n: 6, d: 8 },
                                        { type: 'fraction', n: 2, d: 10 }
                                    ],
                                    rows: [
                                        { label: { type: 'fraction', n: 1, d: 2 }, matches: [true, false, false, false] },
                                        { label: { type: 'fraction', n: 2, d: 3 }, matches: [false, true, false, false] },
                                        { label: { type: 'fraction', n: 1, d: 5 }, matches: [false, false, false, true] },
                                        { label: { type: 'fraction', n: 3, d: 4 }, matches: [false, false, true, false] }
                                    ]
                                },
                                {
                                    instruction: "Enter a fraction that is equivalent to the one shown.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'fraction', n: 1, d: 3 }, { type: 'text', val: ' = ' }, { type: 'fraction_group', ans: 0.3333 }] }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m3-w1-tue", name: "Tue", title: "Week 1: Tuesday", 
                            sections: [
                                {
                                    instruction: "Match the fraction to the diagram that shows an equivalent amount.",
                                    type: "matrix_match",
                                    colHeaders: [
                                        { type: 'pie', n: 1, d: 2 },
                                        { type: 'pie', n: 2, d: 6 },
                                        { type: 'pie', n: 6, d: 8 },
                                        { type: 'pie', n: 3, d: 12 }
                                    ],
                                    rows: [
                                        { label: { type: 'fraction', n: 3, d: 4 }, matches: [false, false, true, false] },
                                        { label: { type: 'fraction', n: 2, d: 4 }, matches: [true, false, false, false] },
                                        { label: { type: 'fraction', n: 1, d: 3 }, matches: [false, true, false, false] },
                                        { label: { type: 'fraction', n: 25, d: 100 }, matches: [false, false, false, true] }
                                    ]
                                },
                                {
                                    instruction: "Select True or False for each comparison.",
                                    type: "grid", col0: "Equation/Inequality",
                                    col1: "True", col2: "False",
                                    rows: [
                                        { segments: [{ type: 'fraction', n: 3, d: 4 }, { type: 'text', val: ' > ' }, { type: 'fraction', n: 1, d: 2 }], correct: true },
                                        { segments: [{ type: 'fraction', n: 2, d: 5 }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 1, d: 2 }], correct: false }
                                    ]
                                }
                            ] 
                        },
                        { 
                            id: "m3-w1-wed", name: "Wed", title: "Week 1: Wednesday", 
                            sections: [
                                {
                                    instruction: "Figure A has part of its whole shaded. Enter another fraction that is equal to the shaded amount.",
                                    type: "rect_model_equiv",
                                    problems: [
                                        { rows: 2, cols: 4, shaded: 6, fillMode: 'row', textSegments: [{ type: 'text', val: "Figure A has " }, { type: 'fraction', n: 6, d: 8 }, { type: 'text', val: " shaded. Enter an equivalent fraction:" }], ans: "0.75" },
                                        { rows: 2, cols: 3, shaded: 2, fillMode: 'col', textSegments: [{ type: 'text', val: "Figure B has " }, { type: 'fraction', n: 2, d: 6 }, { type: 'text', val: " shaded. Enter an equivalent fraction:" }], ans: "0.3333" }
                                    ]
                                },
                                { instruction: "Enter a fraction that makes the equation true.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: 2, d: 5 }, { type: 'text', val: ' = ' }, { type: 'fraction_group', ans: 0.4 }] }] }
                            ] 
                        },
                        {
                            id: "m3-w1-thu", name: "Thu", title: "Week 1: Thursday",
                            sections: [
                                {
                                    instruction: "Match the equivalent fractions.",
                                    type: "matrix_match",
                                    colHeaders: [
                                        { type: 'fraction', n: 4, d: 12 }, 
                                        { type: 'fraction', n: 9, d: 12 }, 
                                        { type: 'fraction', n: 4, d: 10 }, 
                                        { type: 'fraction', n: 50, d: 100 }
                                    ],
                                    rows: [
                                        { label: { type: 'fraction', n: 1, d: 3 }, matches: [true, false, false, false] },
                                        { label: { type: 'fraction', n: 3, d: 4 }, matches: [false, true, false, false] },
                                        { label: { type: 'fraction', n: 2, d: 5 }, matches: [false, false, true, false] },
                                        { label: { type: 'fraction', n: 1, d: 2 }, matches: [false, false, false, true] }
                                    ]
                                },
                                { instruction: "Compare the fractions using <, >, or =.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: 1, d: 2 }, { type: 'input', ans: '=' }, { type: 'fraction', n: 4, d: 8 }] }, { segments: [{ type: 'fraction', n: 2, d: 3 }, { type: 'input', ans: '>' }, { type: 'fraction', n: 2, d: 5 }] }] }
                            ]
                        },
                        { 
                            id: "m3-w1-fri", name: "Fri", title: "Week 1: Friday", 
                            sections: [
                                {
                                    instruction: "Match the fraction to the equivalent model.",
                                    type: "matrix_match",
                                    colHeaders: [
                                        { type: 'pie', n: 4, d: 5 },
                                        { type: 'pie', n: 4, d: 12 }, 
                                        { type: 'pie', n: 6, d: 12 }, 
                                        { type: 'pie', n: 2, d: 8 } 
                                    ],
                                    rows: [
                                        { label: { type: 'fraction', n: 80, d: 100 }, matches: [true, false, false, false] },
                                        { label: { type: 'fraction', n: 1, d: 2 }, matches: [false, false, true, false] },
                                        { label: { type: 'fraction', n: 2, d: 6 }, matches: [false, true, false, false] },
                                        { label: { type: 'fraction', n: 3, d: 12 }, matches: [false, false, false, true] }
                                    ]
                                },
                                { instruction: "Find an equivalent fraction.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: 3, d: 4 }, { type: 'text', val: ' = ' }, { type: 'fraction_group', ans: 0.75 }] }] }
                            ] 
                        }
                    ]
                },
                {
                    weekNum: 2,
                    days: [
                        {
                            id: "m3-w2-mon", name: "Mon", title: "Week 2: Monday",
                            sections: [
                                {
                                    instruction: "Determine which fractions are equivalent.",
                                    type: "matrix_match",
                                    colHeaders: [
                                        { type: 'fraction', n: 40, d: 100 },
                                        { type: 'fraction', n: 70, d: 100 },
                                        { type: 'fraction', n: 5, d: 10 },
                                        { type: 'fraction', n: 8, d: 10 }
                                    ],
                                    rows: [
                                        { label: { type: 'fraction', n: 4, d: 10 }, matches: [true, false, false, false] },
                                        { label: { type: 'fraction', n: 7, d: 10 }, matches: [false, true, false, false] },
                                        { label: { type: 'fraction', n: 50, d: 100 }, matches: [false, false, true, false] },
                                        { label: { type: 'fraction', n: 80, d: 100 }, matches: [false, false, false, true] }
                                    ]
                                },
                                { instruction: "Enter a fraction equivalent to the one shown.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: 1, d: 4 }, { type: 'text', val: ' = ' }, { type: 'fraction_group', ans: 0.25 }] }] }
                            ]
                        },
                        { 
                            id: "m3-w2-tue", name: "Tue", title: "Week 2: Tuesday", 
                            sections: [
                                {
                                    instruction: "Select the model that matches each fraction.",
                                    type: "matrix_match",
                                    colHeaders: [
                                        { type: 'pie', n: 1, d: 4 },
                                        { type: 'pie', n: 2, d: 3 },
                                        { type: 'pie', n: 5, d: 10 },
                                        { type: 'pie', n: 6, d: 8 }
                                    ],
                                    rows: [
                                        { label: { type: 'fraction', n: 4, d: 6 }, matches: [false, true, false, false] },
                                        { label: { type: 'fraction', n: 75, d: 100 }, matches: [false, false, false, true] },
                                        { label: { type: 'fraction', n: 3, d: 12 }, matches: [true, false, false, false] },
                                        { label: { type: 'fraction', n: 4, d: 8 }, matches: [false, false, true, false] }
                                    ]
                                },
                                { instruction: "Select True or False for each comparison.", type: "grid", col0: "Equation/Inequality",
                                    col1: "True", col2: "False", rows: [{ segments: [{ type: 'fraction', n: 2, d: 3 }, { type: 'text', val: ' > ' }, { type: 'fraction', n: 2, d: 5 }], correct: true }, { segments: [{ type: 'fraction', n: 3, d: 10 }, { type: 'text', val: ' > ' }, { type: 'fraction', n: 40, d: 100 }], correct: false }] }
                            ]
                        },
                        { 
                            id: "m3-w2-wed", name: "Wed", title: "Week 2: Wednesday", 
                            sections: [
                                {
                                    instruction: "Enter a fraction equivalent to the shaded area in the figure.",
                                    type: "rect_model_equiv",
                                    problems: [
                                        { rows: 2, cols: 5, shaded: 4, fillMode: 'row', textSegments: [{ type: 'text', val: "Figure C has " }, { type: 'fraction', n: 4, d: 10 }, { type: 'text', val: " shaded. Enter an equivalent fraction:" }], ans: "0.4" },
                                        { rows: 3, cols: 4, shaded: 9, fillMode: 'col', textSegments: [{ type: 'text', val: "Figure D has " }, { type: 'fraction', n: 9, d: 12 }, { type: 'text', val: " shaded. Enter an equivalent fraction:" }], ans: "0.75" }
                                    ]
                                },
                                { instruction: "Enter a fraction that makes the equation true.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: 6, d: 10 }, { type: 'text', val: ' = ' }, { type: 'fraction_group', ans: 0.6 }] }] }
                            ] 
                        },
                        {
                            id: "m3-w2-thu", name: "Thu", title: "Week 2: Thursday",
                            sections: [
                                {
                                    instruction: "Select the checkboxes that show equivalent fractions.",
                                    type: "matrix_match",
                                    colHeaders: [
                                        { type: 'fraction', n: 25, d: 100 }, 
                                        { type: 'fraction', n: 8, d: 12 },   
                                        { type: 'fraction', n: 80, d: 100 }, 
                                        { type: 'fraction', n: 1, d: 2 }      
                                    ],
                                    rows: [
                                        { label: { type: 'fraction', n: 1, d: 4 }, matches: [true, false, false, false] },
                                        { label: { type: 'fraction', n: 2, d: 3 }, matches: [false, true, false, false] },
                                        { label: { type: 'fraction', n: 4, d: 5 }, matches: [false, false, true, false] },
                                        { label: { type: 'fraction', n: 3, d: 6 }, matches: [false, false, false, true] }
                                    ]
                                },
                                { instruction: "Compare the fractions using <, >, or =.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: 4, d: 5 }, { type: 'input', ans: '=' }, { type: 'fraction', n: 8, d: 10 }] }, { segments: [{ type: 'fraction', n: 1, d: 3 }, { type: 'input', ans: '<' }, { type: 'fraction', n: 1, d: 2 }] }] }
                            ]
                        },
                        { 
                            id: "m3-w2-fri", name: "Fri", title: "Week 2: Friday", 
                            sections: [
                                {
                                    instruction: "Find the equivalent visual models.",
                                    type: "matrix_match",
                                    colHeaders: [
                                        { type: 'pie', n: 1, d: 5 },
                                        { type: 'pie', n: 4, d: 6 },
                                        { type: 'pie', n: 2, d: 8 },
                                        { type: 'pie', n: 5, d: 10 }
                                    ],
                                    rows: [
                                        { label: { type: 'fraction', n: 2, d: 10 }, matches: [true, false, false, false] },
                                        { label: { type: 'fraction', n: 2, d: 4 }, matches: [false, false, false, true] },
                                        { label: { type: 'fraction', n: 8, d: 12 }, matches: [false, true, false, false] },
                                        { label: { type: 'fraction', n: 25, d: 100 }, matches: [false, false, true, false] }
                                    ]
                                },
                                { instruction: "Enter a fraction equivalent to the one shown.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: 1, d: 2 }, { type: 'text', val: ' = ' }, { type: 'fraction_group', ans: 0.5 }] }] }
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
                            id: "m3-w1-mon", name: "Mon", title: "Week 1: Monday",
                            sections: [
                                {
                                    instruction: "Select all the equivalent fractions in the table below.",
                                    type: "matrix_match",
                                    colHeaders: [
                                        { type: 'fraction', n: 3, d: 6 },
                                        { type: 'fraction', n: 2, d: 8 },
                                        { type: 'fraction', n: 4, d: 10 },
                                        { type: 'fraction', n: 6, d: 9 }
                                    ],
                                    rows: [
                                        { label: { type: 'fraction', n: 1, d: 2 }, matches: [true, false, false, false] },
                                        { label: { type: 'fraction', n: 1, d: 4 }, matches: [false, true, false, false] },
                                        { label: { type: 'fraction', n: 2, d: 5 }, matches: [false, false, true, false] },
                                        { label: { type: 'fraction', n: 2, d: 3 }, matches: [false, false, false, true] }
                                    ]
                                },
                                {
                                    instruction: "Enter a fraction that is equivalent to the one shown.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'fraction', n: 1, d: 4 }, { type: 'text', val: ' = ' }, { type: 'fraction_group', ans: 0.25 }] }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m3-w1-tue", name: "Tue", title: "Week 1: Tuesday", 
                            sections: [
                                {
                                    instruction: "Match the fraction to the diagram that shows an equivalent amount.",
                                    type: "matrix_match",
                                    colHeaders: [
                                        { type: 'pie', n: 2, d: 6 },
                                        { type: 'pie', n: 6, d: 8 },
                                        { type: 'pie', n: 4, d: 8 },
                                        { type: 'pie', n: 2, d: 10 }
                                    ],
                                    rows: [
                                        { label: { type: 'fraction', n: 1, d: 3 }, matches: [true, false, false, false] },
                                        { label: { type: 'fraction', n: 3, d: 4 }, matches: [false, true, false, false] },
                                        { label: { type: 'fraction', n: 1, d: 2 }, matches: [false, false, true, false] },
                                        { label: { type: 'fraction', n: 1, d: 5 }, matches: [false, false, false, true] }
                                    ]
                                },
                                {
                                    instruction: "Select True or False for each comparison.",
                                    type: "grid", col0: "Equation/Inequality",
                                    col1: "True", col2: "False",
                                    rows: [
                                        { segments: [{ type: 'fraction', n: 2, d: 3 }, { type: 'text', val: ' > ' }, { type: 'fraction', n: 1, d: 4 }], correct: true },
                                        { segments: [{ type: 'fraction', n: 3, d: 8 }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 1, d: 2 }], correct: false }
                                    ]
                                }
                            ] 
                        },
                        { 
                            id: "m3-w1-wed", name: "Wed", title: "Week 1: Wednesday", 
                            sections: [
                                {
                                    instruction: "Figure A has part of its whole shaded. Enter another fraction that is equal to the shaded amount.",
                                    type: "rect_model_equiv",
                                    problems: [
                                        { rows: 2, cols: 5, shaded: 6, fillMode: 'row', textSegments: [{ type: 'text', val: "Figure A has " }, { type: 'fraction', n: 6, d: 10 }, { type: 'text', val: " shaded. Enter an equivalent fraction:" }], ans: "0.6" },
                                        { rows: 2, cols: 4, shaded: 2, fillMode: 'col', textSegments: [{ type: 'text', val: "Figure B has " }, { type: 'fraction', n: 2, d: 8 }, { type: 'text', val: " shaded. Enter an equivalent fraction:" }], ans: "0.25" }
                                    ]
                                },
                                { instruction: "Enter a fraction that makes the equation true.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: 3, d: 5 }, { type: 'text', val: ' = ' }, { type: 'fraction_group', ans: 0.6 }] }] }
                            ] 
                        },
                        {
                            id: "m3-w1-thu", name: "Thu", title: "Week 1: Thursday",
                            sections: [
                                {
                                    instruction: "Match the equivalent fractions.",
                                    type: "matrix_match",
                                    colHeaders: [
                                        { type: 'fraction', n: 6, d: 12 }, 
                                        { type: 'fraction', n: 8, d: 10 }, 
                                        { type: 'fraction', n: 25, d: 100 }, 
                                        { type: 'fraction', n: 4, d: 6 }
                                    ],
                                    rows: [
                                        { label: { type: 'fraction', n: 1, d: 2 }, matches: [true, false, false, false] },
                                        { label: { type: 'fraction', n: 4, d: 5 }, matches: [false, true, false, false] },
                                        { label: { type: 'fraction', n: 1, d: 4 }, matches: [false, false, true, false] },
                                        { label: { type: 'fraction', n: 2, d: 3 }, matches: [false, false, false, true] }
                                    ]
                                },
                                { instruction: "Compare the fractions using <, >, or =.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: 1, d: 4 }, { type: 'input', ans: '<' }, { type: 'fraction', n: 1, d: 2 }] }, { segments: [{ type: 'fraction', n: 3, d: 4 }, { type: 'input', ans: '>' }, { type: 'fraction', n: 2, d: 3 }] }] }
                            ]
                        },
                        { 
                            id: "m3-w1-fri", name: "Fri", title: "Week 1: Friday", 
                            sections: [
                                {
                                    instruction: "Match the fraction to the equivalent model.",
                                    type: "matrix_match",
                                    colHeaders: [
                                        { type: 'pie', n: 3, d: 5 },
                                        { type: 'pie', n: 2, d: 12 }, 
                                        { type: 'pie', n: 5, d: 10 }, 
                                        { type: 'pie', n: 6, d: 8 } 
                                    ],
                                    rows: [
                                        { label: { type: 'fraction', n: 60, d: 100 }, matches: [true, false, false, false] },
                                        { label: { type: 'fraction', n: 1, d: 6 }, matches: [false, true, false, false] },
                                        { label: { type: 'fraction', n: 1, d: 2 }, matches: [false, false, true, false] },
                                        { label: { type: 'fraction', n: 3, d: 4 }, matches: [false, false, false, true] }
                                    ]
                                },
                                { instruction: "Find an equivalent fraction.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: 1, d: 2 }, { type: 'text', val: ' = ' }, { type: 'fraction_group', ans: 0.5 }] }] }
                            ] 
                        }
                    ]
                },
                {
                    weekNum: 2,
                    days: [
                        {
                            id: "m3-w2-mon", name: "Mon", title: "Week 2: Monday",
                            sections: [
                                {
                                    instruction: "Determine which fractions are equivalent.",
                                    type: "matrix_match",
                                    colHeaders: [
                                        { type: 'fraction', n: 20, d: 100 },
                                        { type: 'fraction', n: 90, d: 100 },
                                        { type: 'fraction', n: 6, d: 10 },
                                        { type: 'fraction', n: 4, d: 10 }
                                    ],
                                    rows: [
                                        { label: { type: 'fraction', n: 2, d: 10 }, matches: [true, false, false, false] },
                                        { label: { type: 'fraction', n: 9, d: 10 }, matches: [false, true, false, false] },
                                        { label: { type: 'fraction', n: 60, d: 100 }, matches: [false, false, true, false] },
                                        { label: { type: 'fraction', n: 40, d: 100 }, matches: [false, false, false, true] }
                                    ]
                                },
                                { instruction: "Enter a fraction equivalent to the one shown.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: 3, d: 4 }, { type: 'text', val: ' = ' }, { type: 'fraction_group', ans: 0.75 }] }] }
                            ]
                        },
                        { 
                            id: "m3-w2-tue", name: "Tue", title: "Week 2: Tuesday", 
                            sections: [
                                {
                                    instruction: "Select the model that matches each fraction.",
                                    type: "matrix_match",
                                    colHeaders: [
                                        { type: 'pie', n: 2, d: 10 },
                                        { type: 'pie', n: 3, d: 4 },
                                        { type: 'pie', n: 2, d: 8 },
                                        { type: 'pie', n: 4, d: 10 }
                                    ],
                                    rows: [
                                        { label: { type: 'fraction', n: 1, d: 5 }, matches: [true, false, false, false] },
                                        { label: { type: 'fraction', n: 75, d: 100 }, matches: [false, true, false, false] },
                                        { label: { type: 'fraction', n: 1, d: 4 }, matches: [false, false, true, false] },
                                        { label: { type: 'fraction', n: 40, d: 100 }, matches: [false, false, false, true] }
                                    ]
                                },
                                { instruction: "Select True or False for each comparison.", type: "grid", col0: "Equation/Inequality",
                                    col1: "True", col2: "False", rows: [{ segments: [{ type: 'fraction', n: 3, d: 4 }, { type: 'text', val: ' > ' }, { type: 'fraction', n: 1, d: 2 }], correct: true }, { segments: [{ type: 'fraction', n: 2, d: 5 }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 4, d: 10 }], correct: true }] }
                            ]
                        },
                        { 
                            id: "m3-w2-wed", name: "Wed", title: "Week 2: Wednesday", 
                            sections: [
                                {
                                    instruction: "Enter a fraction equivalent to the shaded area in the figure.",
                                    type: "rect_model_equiv",
                                    problems: [
                                        { rows: 2, cols: 5, shaded: 8, fillMode: 'row', textSegments: [{ type: 'text', val: "Figure C has " }, { type: 'fraction', n: 8, d: 10 }, { type: 'text', val: " shaded. Enter an equivalent fraction:" }], ans: "0.8" },
                                        { rows: 2, cols: 4, shaded: 6, fillMode: 'col', textSegments: [{ type: 'text', val: "Figure D has " }, { type: 'fraction', n: 6, d: 8 }, { type: 'text', val: " shaded. Enter an equivalent fraction:" }], ans: "0.75" }
                                    ]
                                },
                                { instruction: "Enter a fraction that makes the equation true.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: 4, d: 5 }, { type: 'text', val: ' = ' }, { type: 'fraction_group', ans: 0.8 }] }] }
                            ] 
                        },
                        {
                            id: "m3-w2-thu", name: "Thu", title: "Week 2: Thursday",
                            sections: [
                                {
                                    instruction: "Select the checkboxes that show equivalent fractions.",
                                    type: "matrix_match",
                                    colHeaders: [
                                        { type: 'fraction', n: 75, d: 100 }, 
                                        { type: 'fraction', n: 2, d: 6 },   
                                        { type: 'fraction', n: 20, d: 100 }, 
                                        { type: 'fraction', n: 6, d: 12 }      
                                    ],
                                    rows: [
                                        { label: { type: 'fraction', n: 3, d: 4 }, matches: [true, false, false, false] },
                                        { label: { type: 'fraction', n: 1, d: 3 }, matches: [false, true, false, false] },
                                        { label: { type: 'fraction', n: 1, d: 5 }, matches: [false, false, true, false] },
                                        { label: { type: 'fraction', n: 1, d: 2 }, matches: [false, false, false, true] }
                                    ]
                                },
                                { instruction: "Compare the fractions using <, >, or =.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: 2, d: 5 }, { type: 'input', ans: '<' }, { type: 'fraction', n: 5, d: 10 }] }, { segments: [{ type: 'fraction', n: 1, d: 2 }, { type: 'input', ans: '=' }, { type: 'fraction', n: 3, d: 6 }] }] }
                            ]
                        },
                        { 
                            id: "m3-w2-fri", name: "Fri", title: "Week 2: Friday", 
                            sections: [
                                {
                                    instruction: "Find the equivalent visual models.",
                                    type: "matrix_match",
                                    colHeaders: [
                                        { type: 'pie', n: 1, d: 4 },
                                        { type: 'pie', n: 3, d: 5 },
                                        { type: 'pie', n: 2, d: 6 },
                                        { type: 'pie', n: 4, d: 8 }
                                    ],
                                    rows: [
                                        { label: { type: 'fraction', n: 25, d: 100 }, matches: [true, false, false, false] },
                                        { label: { type: 'fraction', n: 6, d: 10 }, matches: [false, true, false, false] },
                                        { label: { type: 'fraction', n: 1, d: 3 }, matches: [false, false, true, false] },
                                        { label: { type: 'fraction', n: 1, d: 2 }, matches: [false, false, false, true] }
                                    ]
                                },
                                { instruction: "Enter a fraction equivalent to the one shown.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: 2, d: 5 }, { type: 'text', val: ' = ' }, { type: 'fraction_group', ans: 0.4 }] }] }
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
                            id: "m3-w1-mon", name: "Mon", title: "Week 1: Monday",
                            sections: [
                                {
                                    instruction: "Select all the equivalent fractions in the table below.",
                                    type: "matrix_match",
                                    colHeaders: [
                                        { type: 'fraction', n: 2, d: 6 },
                                        { type: 'fraction', n: 6, d: 8 },
                                        { type: 'fraction', n: 4, d: 8 },
                                        { type: 'fraction', n: 4, d: 5 }
                                    ],
                                    rows: [
                                        { label: { type: 'fraction', n: 1, d: 3 }, matches: [true, false, false, false] },
                                        { label: { type: 'fraction', n: 3, d: 4 }, matches: [false, true, false, false] },
                                        { label: { type: 'fraction', n: 1, d: 2 }, matches: [false, false, true, false] },
                                        { label: { type: 'fraction', n: 8, d: 10 }, matches: [false, false, false, true] }
                                    ]
                                },
                                {
                                    instruction: "Enter a fraction that is equivalent to the one shown.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'fraction', n: 2, d: 5 }, { type: 'text', val: ' = ' }, { type: 'fraction_group', ans: 0.4 }] }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m3-w1-tue", name: "Tue", title: "Week 1: Tuesday", 
                            sections: [
                                {
                                    instruction: "Match the fraction to the diagram that shows an equivalent amount.",
                                    type: "matrix_match",
                                    colHeaders: [
                                        { type: 'pie', n: 3, d: 6 },
                                        { type: 'pie', n: 2, d: 8 },
                                        { type: 'pie', n: 8, d: 10 },
                                        { type: 'pie', n: 4, d: 12 }
                                    ],
                                    rows: [
                                        { label: { type: 'fraction', n: 1, d: 2 }, matches: [true, false, false, false] },
                                        { label: { type: 'fraction', n: 1, d: 4 }, matches: [false, true, false, false] },
                                        { label: { type: 'fraction', n: 4, d: 5 }, matches: [false, false, true, false] },
                                        { label: { type: 'fraction', n: 1, d: 3 }, matches: [false, false, false, true] }
                                    ]
                                },
                                {
                                    instruction: "Select True or False for each comparison.",
                                    type: "grid", col0: "Equation/Inequality",
                                    col1: "True", col2: "False",
                                    rows: [
                                        { segments: [{ type: 'fraction', n: 1, d: 3 }, { type: 'text', val: ' < ' }, { type: 'fraction', n: 3, d: 4 }], correct: true },
                                        { segments: [{ type: 'fraction', n: 1, d: 4 }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 2, d: 5 }], correct: false }
                                    ]
                                }
                            ] 
                        },
                        { 
                            id: "m3-w1-wed", name: "Wed", title: "Week 1: Wednesday", 
                            sections: [
                                {
                                    instruction: "Figure A has part of its whole shaded. Enter another fraction that is equal to the shaded amount.",
                                    type: "rect_model_equiv",
                                    problems: [
                                        { rows: 2, cols: 5, shaded: 2, fillMode: 'row', textSegments: [{ type: 'text', val: "Figure A has " }, { type: 'fraction', n: 2, d: 10 }, { type: 'text', val: " shaded. Enter an equivalent fraction:" }], ans: "0.2" },
                                        { rows: 3, cols: 4, shaded: 6, fillMode: 'col', textSegments: [{ type: 'text', val: "Figure B has " }, { type: 'fraction', n: 6, d: 12 }, { type: 'text', val: " shaded. Enter an equivalent fraction:" }], ans: "0.5" }
                                    ]
                                },
                                { instruction: "Enter a fraction that makes the equation true.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: 3, d: 4 }, { type: 'text', val: ' = ' }, { type: 'fraction_group', ans: 0.75 }] }] }
                            ] 
                        },
                        {
                            id: "m3-w1-thu", name: "Thu", title: "Week 1: Thursday",
                            sections: [
                                {
                                    instruction: "Match the equivalent fractions.",
                                    type: "matrix_match",
                                    colHeaders: [
                                        { type: 'fraction', n: 2, d: 12 }, 
                                        { type: 'fraction', n: 8, d: 12 }, 
                                        { type: 'fraction', n: 6, d: 10 }, 
                                        { type: 'fraction', n: 75, d: 100 }
                                    ],
                                    rows: [
                                        { label: { type: 'fraction', n: 1, d: 6 }, matches: [true, false, false, false] },
                                        { label: { type: 'fraction', n: 2, d: 3 }, matches: [false, true, false, false] },
                                        { label: { type: 'fraction', n: 3, d: 5 }, matches: [false, false, true, false] },
                                        { label: { type: 'fraction', n: 3, d: 4 }, matches: [false, false, false, true] }
                                    ]
                                },
                                { instruction: "Compare the fractions using <, >, or =.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: 2, d: 5 }, { type: 'input', ans: '<' }, { type: 'fraction', n: 4, d: 8 }] }, { segments: [{ type: 'fraction', n: 3, d: 4 }, { type: 'input', ans: '>' }, { type: 'fraction', n: 1, d: 3 }] }] }
                            ]
                        },
                        { 
                            id: "m3-w1-fri", name: "Fri", title: "Week 1: Friday", 
                            sections: [
                                {
                                    instruction: "Match the fraction to the equivalent model.",
                                    type: "matrix_match",
                                    colHeaders: [
                                        { type: 'pie', n: 2, d: 5 },
                                        { type: 'pie', n: 3, d: 12 }, 
                                        { type: 'pie', n: 4, d: 10 }, 
                                        { type: 'pie', n: 4, d: 8 } 
                                    ],
                                    rows: [
                                        { label: { type: 'fraction', n: 40, d: 100 }, matches: [true, false, false, false] },
                                        { label: { type: 'fraction', n: 1, d: 4 }, matches: [false, true, false, false] },
                                        { label: { type: 'fraction', n: 2, d: 5 }, matches: [false, false, true, false] },
                                        { label: { type: 'fraction', n: 1, d: 2 }, matches: [false, false, false, true] }
                                    ]
                                },
                                { instruction: "Find an equivalent fraction.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: 1, d: 3 }, { type: 'text', val: ' = ' }, { type: 'fraction_group', ans: 0.3333 }] }] }
                            ] 
                        }
                    ]
                },
                {
                    weekNum: 2,
                    days: [
                        {
                            id: "m3-w2-mon", name: "Mon", title: "Week 2: Monday",
                            sections: [
                                {
                                    instruction: "Determine which fractions are equivalent.",
                                    type: "matrix_match",
                                    colHeaders: [
                                        { type: 'fraction', n: 30, d: 100 },
                                        { type: 'fraction', n: 80, d: 100 },
                                        { type: 'fraction', n: 2, d: 10 },
                                        { type: 'fraction', n: 9, d: 10 }
                                    ],
                                    rows: [
                                        { label: { type: 'fraction', n: 3, d: 10 }, matches: [true, false, false, false] },
                                        { label: { type: 'fraction', n: 8, d: 10 }, matches: [false, true, false, false] },
                                        { label: { type: 'fraction', n: 20, d: 100 }, matches: [false, false, true, false] },
                                        { label: { type: 'fraction', n: 90, d: 100 }, matches: [false, false, false, true] }
                                    ]
                                },
                                { instruction: "Enter a fraction equivalent to the one shown.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: 1, d: 2 }, { type: 'text', val: ' = ' }, { type: 'fraction_group', ans: 0.5 }] }] }
                            ]
                        },
                        { 
                            id: "m3-w2-tue", name: "Tue", title: "Week 2: Tuesday", 
                            sections: [
                                {
                                    instruction: "Select the model that matches each fraction.",
                                    type: "matrix_match",
                                    colHeaders: [
                                        { type: 'pie', n: 3, d: 10 },
                                        { type: 'pie', n: 1, d: 4 },
                                        { type: 'pie', n: 6, d: 8 },
                                        { type: 'pie', n: 2, d: 6 }
                                    ],
                                    rows: [
                                        { label: { type: 'fraction', n: 30, d: 100 }, matches: [true, false, false, false] },
                                        { label: { type: 'fraction', n: 25, d: 100 }, matches: [false, true, false, false] },
                                        { label: { type: 'fraction', n: 3, d: 4 }, matches: [false, false, true, false] },
                                        { label: { type: 'fraction', n: 1, d: 3 }, matches: [false, false, false, true] }
                                    ]
                                },
                                { instruction: "Select True or False for each comparison.", type: "grid", col0: "Equation/Inequality",
                                    col1: "True", col2: "False", rows: [{ segments: [{ type: 'fraction', n: 1, d: 4 }, { type: 'text', val: ' < ' }, { type: 'fraction', n: 1, d: 2 }], correct: true }, { segments: [{ type: 'fraction', n: 4, d: 5 }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 8, d: 10 }], correct: true }] }
                            ]
                        },
                        { 
                            id: "m3-w2-wed", name: "Wed", title: "Week 2: Wednesday", 
                            sections: [
                                {
                                    instruction: "Enter a fraction equivalent to the shaded area in the figure.",
                                    type: "rect_model_equiv",
                                    problems: [
                                        { rows: 2, cols: 4, shaded: 2, fillMode: 'row', textSegments: [{ type: 'text', val: "Figure C has " }, { type: 'fraction', n: 2, d: 8 }, { type: 'text', val: " shaded. Enter an equivalent fraction:" }], ans: "0.25" },
                                        { rows: 2, cols: 5, shaded: 8, fillMode: 'col', textSegments: [{ type: 'text', val: "Figure D has " }, { type: 'fraction', n: 8, d: 10 }, { type: 'text', val: " shaded. Enter an equivalent fraction:" }], ans: "0.8" }
                                    ]
                                },
                                { instruction: "Enter a fraction that makes the equation true.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: 1, d: 3 }, { type: 'text', val: ' = ' }, { type: 'fraction_group', ans: 0.3333 }] }] }
                            ] 
                        },
                        {
                            id: "m3-w2-thu", name: "Thu", title: "Week 2: Thursday",
                            sections: [
                                {
                                    instruction: "Select the checkboxes that show equivalent fractions.",
                                    type: "matrix_match",
                                    colHeaders: [
                                        { type: 'fraction', n: 50, d: 100 }, 
                                        { type: 'fraction', n: 4, d: 12 },   
                                        { type: 'fraction', n: 40, d: 100 }, 
                                        { type: 'fraction', n: 6, d: 8 }      
                                    ],
                                    rows: [
                                        { label: { type: 'fraction', n: 1, d: 2 }, matches: [true, false, false, false] },
                                        { label: { type: 'fraction', n: 1, d: 3 }, matches: [false, true, false, false] },
                                        { label: { type: 'fraction', n: 2, d: 5 }, matches: [false, false, true, false] },
                                        { label: { type: 'fraction', n: 3, d: 4 }, matches: [false, false, false, true] }
                                    ]
                                },
                                { instruction: "Compare the fractions using <, >, or =.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: 3, d: 4 }, { type: 'input', ans: '>' }, { type: 'fraction', n: 2, d: 5 }] }, { segments: [{ type: 'fraction', n: 1, d: 4 }, { type: 'input', ans: '=' }, { type: 'fraction', n: 2, d: 8 }] }] }
                            ]
                        },
                        { 
                            id: "m3-w2-fri", name: "Fri", title: "Week 2: Friday", 
                            sections: [
                                {
                                    instruction: "Find the equivalent visual models.",
                                    type: "matrix_match",
                                    colHeaders: [
                                        { type: 'pie', n: 2, d: 6 },
                                        { type: 'pie', n: 6, d: 10 },
                                        { type: 'pie', n: 4, d: 8 },
                                        { type: 'pie', n: 6, d: 8 }
                                    ],
                                    rows: [
                                        { label: { type: 'fraction', n: 1, d: 3 }, matches: [true, false, false, false] },
                                        { label: { type: 'fraction', n: 3, d: 5 }, matches: [false, true, false, false] },
                                        { label: { type: 'fraction', n: 1, d: 2 }, matches: [false, false, true, false] },
                                        { label: { type: 'fraction', n: 3, d: 4 }, matches: [false, false, false, true] }
                                    ]
                                },
                                { instruction: "Enter a fraction equivalent to the one shown.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: 3, d: 4 }, { type: 'text', val: ' = ' }, { type: 'fraction_group', ans: 0.75 }] }] }
                            ] 
                        }
                    ]
                }
            ]
        }
    }
};