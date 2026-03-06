// --- MODULE 3 DATA ---
const module3 = {
    id: "mod-3", 
    name: "Fraction Equivalence and Ordering", 
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
                                {
                                    segments: [
                                        { type: 'fraction', n: 1, d: 3 },
                                        { type: 'text', val: ' = ' },
                                        { type: 'fraction_group', ans: 0.3333 } 
                                    ]
                                }
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
                            type: "grid",
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
                                { 
                                    rows: 2, cols: 4, shaded: 6, fillMode: 'row',
                                    textSegments: [
                                        { type: 'text', val: "Figure A has " },
                                        { type: 'fraction', n: 6, d: 8 },
                                        { type: 'text', val: " shaded. Enter an equivalent fraction:" }
                                    ],
                                    ans: "0.75" 
                                },
                                { 
                                    rows: 2, cols: 3, shaded: 2, fillMode: 'col',
                                    textSegments: [
                                        { type: 'text', val: "Figure B has " },
                                        { type: 'fraction', n: 2, d: 6 },
                                        { type: 'text', val: " shaded. Enter an equivalent fraction:" }
                                    ],
                                    ans: "0.3333" 
                                }
                            ]
                        },
                        {
                            instruction: "Enter a fraction that makes the equation true.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: 'fraction', n: 2, d: 5 },
                                        { type: 'text', val: ' = ' },
                                        { type: 'fraction_group', ans: 0.4 } 
                                    ]
                                }
                            ]
                        }
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
                        {
                            instruction: "Compare the fractions using <, >, or =.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: 'fraction', n: 1, d: 2 },
                                        { type: 'input', ans: '=' }, 
                                        { type: 'fraction', n: 4, d: 8 }
                                    ]
                                },
                                {
                                    segments: [
                                        { type: 'fraction', n: 2, d: 3 },
                                        { type: 'input', ans: '>' }, 
                                        { type: 'fraction', n: 2, d: 5 }
                                    ]
                                }
                            ]
                        }
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
                        {
                            instruction: "Find an equivalent fraction.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: 'fraction', n: 3, d: 4 },
                                        { type: 'text', val: ' = ' },
                                        { type: 'fraction_group', ans: 0.75 } 
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
                        {
                            instruction: "Enter a fraction equivalent to the one shown.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: 'fraction', n: 1, d: 4 },
                                        { type: 'text', val: ' = ' },
                                        { type: 'fraction_group', ans: 0.25 }
                                    ]
                                }
                            ]
                        }
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
                        {
                            instruction: "Select True or False for each comparison.",
                            type: "grid",
                            rows: [
                                { segments: [{ type: 'fraction', n: 2, d: 3 }, { type: 'text', val: ' > ' }, { type: 'fraction', n: 2, d: 5 }], correct: true },
                                { segments: [{ type: 'fraction', n: 3, d: 10 }, { type: 'text', val: ' > ' }, { type: 'fraction', n: 40, d: 100 }], correct: false }
                            ]
                        }
                    ]
                },
                { 
                    id: "m3-w2-wed", name: "Wed", title: "Week 2: Wednesday", 
                    sections: [
                        {
                            instruction: "Enter a fraction equivalent to the shaded area in the figure.",
                            type: "rect_model_equiv",
                            problems: [
                                { 
                                    rows: 2, cols: 5, shaded: 4, fillMode: 'row',
                                    textSegments: [
                                        { type: 'text', val: "Figure C has " },
                                        { type: 'fraction', n: 4, d: 10 },
                                        { type: 'text', val: " shaded. Enter an equivalent fraction:" }
                                    ],
                                    ans: "0.4"
                                },
                                { 
                                    rows: 3, cols: 4, shaded: 9, fillMode: 'col',
                                    textSegments: [
                                        { type: 'text', val: "Figure D has " },
                                        { type: 'fraction', n: 9, d: 12 },
                                        { type: 'text', val: " shaded. Enter an equivalent fraction:" }
                                    ],
                                    ans: "0.75"
                                }
                            ]
                        },
                        {
                            instruction: "Enter a fraction that makes the equation true.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: 'fraction', n: 6, d: 10 },
                                        { type: 'text', val: ' = ' },
                                        { type: 'fraction_group', ans: 0.6 } 
                                    ]
                                }
                            ]
                        }
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
                        {
                            instruction: "Compare the fractions using <, >, or =.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: 'fraction', n: 4, d: 5 },
                                        { type: 'input', ans: '=' },
                                        { type: 'fraction', n: 8, d: 10 }
                                    ]
                                },
                                {
                                    segments: [
                                        { type: 'fraction', n: 1, d: 3 },
                                        { type: 'input', ans: '<' },
                                        { type: 'fraction', n: 1, d: 2 }
                                    ]
                                }
                            ]
                        }
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
                        {
                            instruction: "Enter a fraction equivalent to the one shown.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: 'fraction', n: 1, d: 2 },
                                        { type: 'text', val: ' = ' },
                                        { type: 'fraction_group', ans: 0.5 }
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