// --- MODULE 10 DATA ---
const module10 = {
    id: "mod-10", 
    name: "Geometry & Symmetry", 
    
    helperHubs: {
        week1: {
            title: "★ Helper Hub: The Geometry Detective",
            content: `
                <div style="font-size:15px; line-height: 1.4;">
                    <p style="margin-top:0; margin-bottom:10px;">To identify shapes, you need to be a detective looking for two clues: <strong>Lines</strong> and <strong>Angles</strong>.</p>
                    <div class="print-stack" style="display:flex; gap:15px; align-items:flex-start; break-inside: avoid;">
                        <div style="flex:1; padding:15px; border:2px solid #ccc; border-radius:10px; background:#fff; text-align:center;">
                            <strong style="font-size:16px; color:#2c7be5;">Lines</strong><br>
                            <div style="display:flex; justify-content:center; gap:20px; margin: 15px 0;">
                                <div style="text-align:center;">
                                    <svg width="120" height="120" viewBox="0 0 100 100" style="background:#f8f9fa; border:1px solid #ccc; border-radius:5px;">
                                        <line x1="10" y1="35" x2="90" y2="35" stroke="#3498db" stroke-width="6"/>
                                        <line x1="10" y1="65" x2="90" y2="65" stroke="#3498db" stroke-width="6"/>
                                    </svg><br><small><strong>Parallel</strong><br>(Train tracks)</small>
                                </div>
                                <div style="text-align:center;">
                                    <svg width="120" height="120" viewBox="0 0 100 100" style="background:#f8f9fa; border:1px solid #ccc; border-radius:5px;">
                                        <line x1="15" y1="75" x2="85" y2="75" stroke="#e74c3c" stroke-width="6"/>
                                        <line x1="50" y1="15" x2="50" y2="75" stroke="#e74c3c" stroke-width="6"/>
                                        <rect x="50" y="55" width="20" height="20" fill="none" stroke="#e74c3c" stroke-width="3"/>
                                    </svg><br><small><strong>Perpendicular</strong><br>(Intersection)</small>
                                </div>
                            </div>
                        </div>
                        <div style="flex:1; padding:15px; border:2px solid #ccc; border-radius:10px; background:#fff; text-align:center;">
                            <strong style="font-size:16px; color:#8e44ad;">The Angle Family</strong><br>
                            <div style="display:flex; justify-content:center; gap:10px; margin: 25px 0;">
                                <div style="text-align:center;">
                                    <svg width="80" height="80" viewBox="0 0 100 100"><polyline points="80,70 20,70 50,20" fill="none" stroke="#27ae60" stroke-width="6"/></svg><br><small><strong>Acute</strong><br>(Tiny)</small>
                                </div>
                                <div style="text-align:center;">
                                    <svg width="80" height="80" viewBox="0 0 100 100"><polyline points="80,70 20,70 20,10" fill="none" stroke="#2c7be5" stroke-width="6"/><rect x="20" y="50" width="20" height="20" fill="none" stroke="#2c7be5" stroke-width="4"/></svg><br><small><strong>Right</strong><br>(Square)</small>
                                </div>
                                <div style="text-align:center;">
                                    <svg width="80" height="80" viewBox="0 0 100 100"><polyline points="90,70 40,70 10,30" fill="none" stroke="#8e44ad" stroke-width="6"/></svg><br><small><strong>Obtuse</strong><br>(Wide)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
        },
        week2: {
            title: "★ Helper Hub: The Fold Test (Symmetry)",
            content: `
                <div style="font-size:15px; line-height: 1.4;">
                    <div class="print-stack" style="display:flex; gap:15px; align-items:stretch; break-inside: avoid;">
                        <div style="flex:1; padding:15px; border:2px solid #ccc; border-radius:10px; background:#fff;">
                            <strong style="font-size:16px; color:#e74c3c;">What is a Line of Symmetry?</strong><br><br>
                            Imagine a dashed line is a fold on a piece of paper. If you fold the shape perfectly along that line, <strong>do the halves match exactly?</strong>
                            <div style="text-align:center; margin-top:15px;">
                                <svg width="140" height="140" viewBox="0 0 100 100" style="background:#f8f9fa; border:1px solid #ccc; border-radius:5px;">
                                    <path d="M 50,85 C 50,85 10,50 10,25 A 20,20 0 0,1 50,25 A 20,20 0 0,1 90,25 C 90,50 50,85 50,85 Z" fill="#e0f7fa" stroke="#00bcd4" stroke-width="2"/>
                                    <line x1="50" y1="5" x2="50" y2="95" stroke="#27ae60" stroke-width="4" stroke-dasharray="5,5"/>
                                    <circle cx="85" cy="85" r="12" fill="#27ae60"/>
                                    <path d="M79,85 L83,89 L91,80" fill="none" stroke="white" stroke-width="3"/>
                                </svg><br><small style="color:#27ae60; font-weight:bold; font-size:14px;">Yes! Halves match perfectly.</small>
                            </div>
                        </div>
                        <div style="flex:1; padding:15px; border:2px solid #ccc; border-radius:10px; background:#fff;">
                            <strong style="font-size:16px; color:#2c7be5;">The Rectangle Trap!</strong><br><br>
                            A common test trap is folding a rectangle diagonally. <em>Don't fall for it!</em> If you fold a piece of printer paper corner-to-corner, the edges stick out!
                            <div style="text-align:center; margin-top:15px;">
                                <svg width="140" height="140" viewBox="0 0 100 100" style="background:#f8f9fa; border:1px solid #ccc; border-radius:5px;">
                                    <polygon points="10,30 90,30 90,70 10,70" fill="#e0f7fa" stroke="#00bcd4" stroke-width="2"/>
                                    <line x1="10" y1="70" x2="90" y2="30" stroke="#333" stroke-width="4" stroke-dasharray="5,5"/>
                                    <circle cx="85" cy="85" r="12" fill="#e74c3c"/>
                                    <path d="M79,79 L91,91 M91,79 L79,91" stroke="white" stroke-width="3"/>
                                </svg><br><small style="color:#e74c3c; font-weight:bold; font-size:14px;">No! Edges stick out.</small>
                            </div>
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
                            id: "m10-w1-mon", name: "Mon", title: "Week 1: Monday",
                            sections: [
                                {
                                    instruction: "Determine whether each polygon shown has at least one acute angle. Select Yes or No for each polygon.", type: "matrix_match",
                                    colHeaders: [shapes.rect, shapes.parallelogram, shapes.kite],
                                    rows: [
                                        { label: {val: "Yes"}, matches: [false, true, true] },
                                        { label: {val: "No"}, matches: [true, false, false] }
                                    ]
                                },
                                {
                                    instruction: "Which geometric term describes lines that never touch and stay the same distance apart?", type: "multiple_choice",
                                    options: [
                                        { text: "Perpendicular Lines", correct: false },
                                        { text: "Parallel Lines", correct: true },
                                        { text: "Intersecting Lines", correct: false },
                                        { text: "Symmetry Lines", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the sum.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("18,342", "6,195", "+") }, { type: 'input', ans: "24537" }] }]
                                }
                            ]
                        },
                        { 
                            id: "m10-w1-tue", name: "Tue", title: "Week 1: Tuesday", 
                            sections: [
                                {
                                    instruction: "Decide whether the shape appears to be a right triangle. Select Yes or No for each shape.", type: "matrix_match",
                                    colHeaders: [shapes.rightTri, shapes.obtuseTri, shapes.acuteTri],
                                    rows: [
                                        { label: {val: "Yes"}, matches: [true, false, false] },
                                        { label: {val: "No"}, matches: [false, true, true] }
                                    ]
                                },
                                {
                                    instruction: "Determine whether each shape has at least one pair of perpendicular sides.", type: "matrix_match",
                                    colHeaders: [shapes.rect, shapes.rhombus],
                                    rows: [
                                        { label: {val: "Yes"}, matches: [true, false] },
                                        { label: {val: "No"}, matches: [false, true] }
                                    ]
                                },
                                {
                                    instruction: "Enter the difference.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'fraction', w: '3', n: '4', d: '5' }, { type: 'text', val: ' &minus; ' }, { type: 'fraction', w: '1', n: '1', d: '5' }, { type: 'text', val: ' = ' }, { type: 'mixed_input', ans: 2.6 }] }]
                                }
                            ] 
                        },
                        { 
                            id: "m10-w1-wed", name: "Wed", title: "Week 1: Wednesday", 
                            sections: [
                                {
                                    instruction: "Match each figure with its description. A figure may match more than one description.", type: "matrix_match",
                                    colHeaders: [shapes.hexagon, shapes.rightTrapezoid, shapes.obtuseTri],
                                    rows: [
                                        { label: {val: "Has at least one obtuse angle"}, matches: [true, false, true] },
                                        { label: {val: "Has at least one pair of perpendicular sides"}, matches: [false, true, false] },
                                        { label: {val: "Has at least one pair of parallel sides"}, matches: [true, true, false] }
                                    ]
                                },
                                {
                                    instruction: "Enter the product.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("35", "14", "&times;") }, { type: 'input', ans: "490" }] }]
                                }
                            ] 
                        },
                        {
                            id: "m10-w1-thu", name: "Thu", title: "Week 1: Thursday",
                            sections: [
                                {
                                    instruction: "Determine whether each polygon shown has at least two pairs of parallel opposite sides.", type: "matrix_match",
                                    colHeaders: [shapes.octagon, shapes.trapezoid, shapes.hexagon],
                                    rows: [
                                        { label: {val: "Yes"}, matches: [true, false, true] },
                                        { label: {val: "No"}, matches: [false, true, false] }
                                    ]
                                },
                                {
                                    instruction: "Which polygon has exactly one pair of parallel sides?", type: "multiple_choice",
                                    options: [
                                        { text: "Square", correct: false },
                                        { text: "Parallelogram", correct: false },
                                        { text: "Trapezoid", correct: true },
                                        { text: "Rhombus", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the missing factor.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "9 &times; &nbsp;" }, { type: 'input', ans: "6" }, { type: 'text', val: " = 54" }] }]
                                }
                            ]
                        },
                        { 
                            id: "m10-w1-fri", name: "Fri", title: "Week 1: Friday", 
                            sections: [
                                {
                                    instruction: "Match each figure with its description. A figure may match more than one description.", type: "matrix_match",
                                    colHeaders: [shapes.parallelogram, shapes.acuteTri, shapes.kite],
                                    rows: [
                                        { label: {val: "Has exactly 4 sides"}, matches: [true, false, true] },
                                        { label: {val: "Has only acute angles"}, matches: [false, true, false] },
                                        { label: {val: "Has parallel sides"}, matches: [true, false, false] }
                                    ]
                                },
                                {
                                    instruction: "Look closely at the parallelogram from the previous question. How many pairs of parallel sides does it have?", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '2' }] }]
                                }
                            ] 
                        }
                    ]
                },
                {
                    weekNum: 2,
                    days: [
                        {
                            id: "m10-w2-mon", name: "Mon", title: "Week 2: Monday",
                            sections: [
                                {
                                    instruction: "Is the dashed line a line of symmetry for the shape? Select Yes or No.", type: "matrix_match",
                                    colHeaders: [
                                        { type: 'shape', path: shapes.heart.path, symmetryLine: {x1: 50, y1: 10, x2: 50, y2: 95} },
                                        { type: 'shape', points: shapes.rect.points, symmetryLine: {x1: 15, y1: 25, x2: 85, y2: 75} },
                                        { type: 'shape', points: shapes.arrow.points, symmetryLine: {x1: 5, y1: 50, x2: 95, y2: 50} }
                                    ],
                                    rows: [
                                        { label: {val: "Yes"}, matches: [true, false, true] },
                                        { label: {val: "No"}, matches: [false, true, false] }
                                    ]
                                },
                                {
                                    instruction: "Which capital letter has both a horizontal and vertical line of symmetry?", type: "multiple_choice",
                                    options: [
                                        { text: "A", correct: false },
                                        { text: "E", correct: false },
                                        { text: "H", correct: true },
                                        { text: "Z", correct: false }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m10-w2-tue", name: "Tue", title: "Week 2: Tuesday", 
                            sections: [
                                {
                                    instruction: "How many total lines of symmetry does a regular hexagon have?", type: "multiple_choice",
                                    options: [
                                        { text: "2", correct: false },
                                        { text: "4", correct: false },
                                        { text: "6", correct: true }
                                    ]
                                },
                                {
                                    instruction: "Is the dashed line a line of symmetry for the shape? Select Yes or No.", type: "matrix_match",
                                    colHeaders: [
                                        { type: 'shape', points: shapes.star.points, symmetryLine: {x1: 50, y1: 0, x2: 50, y2: 95} },
                                        { type: 'shape', points: shapes.parallelogram.points, symmetryLine: {x1: 50, y1: 10, x2: 50, y2: 90} }
                                    ],
                                    rows: [
                                        { label: {val: "Yes"}, matches: [true, false] },
                                        { label: {val: "No"}, matches: [false, true] }
                                    ]
                                },
                                {
                                    instruction: `A line plot shows plant heights. The tallest plant is ${mf(1, 3, 4)} feet, and the shortest is ${mf(1, 1, 4)} feet. What is the difference?`, type: "mixed_row",
                                    problems: [{ segments: [{ type: 'fraction_group', ans: 0.5 }, { type: 'text', val: ' feet' }] }]
                                }
                            ]
                        },
                        { 
                            id: "m10-w2-wed", name: "Wed", title: "Week 2: Wednesday", 
                            sections: [
                                {
                                    instruction: "Determine the number of lines of symmetry for each shape. Match the shape to the correct number.", type: "matrix_match",
                                    colHeaders: [shapes.parallelogram, shapes.kite, shapes.rect, shapes.star],
                                    rows: [
                                        { label: {val: "None"}, matches: [true, false, false, false] },
                                        { label: {val: "Exactly 1"}, matches: [false, true, false, false] },
                                        { label: {val: "Exactly 2"}, matches: [false, false, true, false] },
                                        { label: {val: "More than 2"}, matches: [false, false, false, true] }
                                    ]
                                },
                                {
                                    instruction: "Enter the unknown number to make the fractions equivalent.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'fraction', n: 1, d: 3 }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', ansN: '4', d: 12 }] }]
                                }
                            ] 
                        },
                        {
                            id: "m10-w2-thu", name: "Thu", title: "Week 2: Thursday",
                            sections: [
                                {
                                    instruction: "Determine the number of lines of symmetry for each shape.", type: "matrix_match",
                                    colHeaders: [shapes.arrow, shapes.acuteTri, shapes.rect, shapes.octagon],
                                    rows: [
                                        { label: {val: "None"}, matches: [false, false, false, false] },
                                        { label: {val: "Exactly 1"}, matches: [true, true, false, false] },
                                        { label: {val: "Exactly 2"}, matches: [false, false, true, false] },
                                        { label: {val: "More than 2"}, matches: [false, false, false, true] }
                                    ]
                                },
                                {
                                    instruction: "Determine if the statement is True or False.", type: "grid", col0: "Statement", col1: "True", col2: "False",
                                    rows: [
                                        { text: "A rectangle always has exactly 4 lines of symmetry.", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Decide whether each number is prime or composite.", type: "grid", col0: "Number", col1: "Prime", col2: "Composite",
                                    rows: [
                                        { text: "17", correct: true },
                                        { text: "21", correct: false }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m10-w2-fri", name: "Fri", title: "Week 2: Friday", 
                            sections: [
                                {
                                    instruction: "Match each shape to ALL the properties it has. You may select more than one box per row.", type: "matrix_match",
                                    colHeaders: [shapes.rightTrapezoid, shapes.rect, shapes.chevron],
                                    rows: [
                                        { label: {val: "Has Parallel Lines"}, matches: [true, true, false] },
                                        { label: {val: "Has a Right Angle"}, matches: [true, true, false] },
                                        { label: {val: "Has a Line of Symmetry"}, matches: [false, true, true] }
                                    ]
                                },
                                {
                                    instruction: "Enter the quotient and remainder.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "47 &divide; 5 = &nbsp; Quotient: " }, { type: 'input', ans: "9" }, { type: 'text', val: " &nbsp; Remainder: " }, { type: 'input', ans: "2" }] }]
                                }
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
                            id: "m10-w1-mon", name: "Mon", title: "Week 1: Monday",
                            sections: [
                                {
                                    instruction: "Determine whether each polygon shown has at least one acute angle.", type: "matrix_match",
                                    colHeaders: [shapes.hexagon, shapes.rightTri, shapes.rhombus],
                                    rows: [
                                        { label: {val: "Yes"}, matches: [false, true, true] },
                                        { label: {val: "No"}, matches: [true, false, false] }
                                    ]
                                },
                                {
                                    instruction: "Which geometric term describes lines that cross and form perfect square corners?", type: "multiple_choice",
                                    options: [
                                        { text: "Parallel Lines", correct: false },
                                        { text: "Symmetry Lines", correct: false },
                                        { text: "Perpendicular Lines", correct: true },
                                        { text: "Obtuse Lines", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the sum.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("27,419", "5,284", "+") }, { type: 'input', ans: "32703" }] }]
                                }
                            ]
                        },
                        { 
                            id: "m10-w1-tue", name: "Tue", title: "Week 1: Tuesday", 
                            sections: [
                                {
                                    instruction: "Decide whether the shape appears to be a right triangle.", type: "matrix_match",
                                    colHeaders: [shapes.obtuseTri, shapes.acuteTri, shapes.rightTri],
                                    rows: [
                                        { label: {val: "Yes"}, matches: [false, false, true] },
                                        { label: {val: "No"}, matches: [true, true, false] }
                                    ]
                                },
                                {
                                    instruction: "Determine whether each shape has at least one pair of perpendicular sides.", type: "matrix_match",
                                    colHeaders: [shapes.rightTrapezoid, shapes.parallelogram],
                                    rows: [
                                        { label: {val: "Yes"}, matches: [true, false] },
                                        { label: {val: "No"}, matches: [false, true] }
                                    ]
                                },
                                {
                                    instruction: "Enter the difference.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'fraction', w: '4', n: '5', d: '6' }, { type: 'text', val: ' &minus; ' }, { type: 'fraction', w: '2', n: '1', d: '6' }, { type: 'text', val: ' = ' }, { type: 'mixed_input', ans: 2.666 }] }]
                                }
                            ] 
                        },
                        { 
                            id: "m10-w1-wed", name: "Wed", title: "Week 1: Wednesday", 
                            sections: [
                                {
                                    instruction: "Match each figure with its description. A figure may match more than one description.", type: "matrix_match",
                                    colHeaders: [shapes.kite, shapes.rect, shapes.obtuseTri],
                                    rows: [
                                        { label: {val: "Has exactly 4 angles"}, matches: [true, true, false] },
                                        { label: {val: "Has at least one acute angle"}, matches: [true, false, true] },
                                        { label: {val: "Has NO parallel sides"}, matches: [true, false, true] }
                                    ]
                                },
                                {
                                    instruction: "Enter the product.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("42", "15", "&times;") }, { type: 'input', ans: "630" }] }]
                                }
                            ] 
                        },
                        {
                            id: "m10-w1-thu", name: "Thu", title: "Week 1: Thursday",
                            sections: [
                                {
                                    instruction: "Determine whether each polygon shown has at least two pairs of parallel opposite sides.", type: "matrix_match",
                                    colHeaders: [shapes.rightTrapezoid, shapes.rhombus, shapes.kite],
                                    rows: [
                                        { label: {val: "Yes"}, matches: [false, true, false] },
                                        { label: {val: "No"}, matches: [true, false, true] }
                                    ]
                                },
                                {
                                    instruction: "Which polygon always has exactly four right angles?", type: "multiple_choice",
                                    options: [
                                        { text: "Rhombus", correct: false },
                                        { text: "Rectangle", correct: true },
                                        { text: "Trapezoid", correct: false },
                                        { text: "Kite", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the missing factor.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "8 &times; &nbsp;" }, { type: 'input', ans: "7" }, { type: 'text', val: " = 56" }] }]
                                }
                            ]
                        },
                        { 
                            id: "m10-w1-fri", name: "Fri", title: "Week 1: Friday", 
                            sections: [
                                {
                                    instruction: "Match each figure with its description. A figure may match more than one description.", type: "matrix_match",
                                    colHeaders: [shapes.rightTrapezoid, shapes.rightTri, shapes.rhombus],
                                    rows: [
                                        { label: {val: "Has perpendicular sides"}, matches: [true, true, false] },
                                        { label: {val: "Has at least one obtuse angle"}, matches: [true, false, true] },
                                        { label: {val: "Has exactly 3 sides"}, matches: [false, true, false] }
                                    ]
                                },
                                {
                                    instruction: "Look closely at the right trapezoid from the previous question. How many pairs of parallel sides does it have?", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '1' }] }]
                                }
                            ] 
                        }
                    ]
                },
                {
                    weekNum: 2,
                    days: [
                        {
                            id: "m10-w2-mon", name: "Mon", title: "Week 2: Monday",
                            sections: [
                                {
                                    instruction: "Is the dashed line a line of symmetry for the shape? Select Yes or No.", type: "matrix_match",
                                    colHeaders: [
                                        { type: 'shape', points: shapes.kite.points, symmetryLine: {x1: 50, y1: 0, x2: 50, y2: 100} },
                                        { type: 'shape', points: shapes.parallelogram.points, symmetryLine: {x1: 15, y1: 25, x2: 85, y2: 75} },
                                        { type: 'shape', points: shapes.chevron.points, symmetryLine: {x1: 5, y1: 50, x2: 95, y2: 50} }
                                    ],
                                    rows: [
                                        { label: {val: "Yes"}, matches: [true, false, true] },
                                        { label: {val: "No"}, matches: [false, true, false] }
                                    ]
                                },
                                {
                                    instruction: "Which capital letter has only a vertical line of symmetry?", type: "multiple_choice",
                                    options: [
                                        { text: "B", correct: false },
                                        { text: "C", correct: false },
                                        { text: "M", correct: true },
                                        { text: "S", correct: false }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m10-w2-tue", name: "Tue", title: "Week 2: Tuesday", 
                            sections: [
                                {
                                    instruction: "How many total lines of symmetry does a regular octagon have?", type: "multiple_choice",
                                    options: [
                                        { text: "4", correct: false },
                                        { text: "6", correct: false },
                                        { text: "8", correct: true }
                                    ]
                                },
                                {
                                    instruction: "Is the dashed line a line of symmetry for the shape? Select Yes or No.", type: "matrix_match",
                                    colHeaders: [
                                        { type: 'shape', points: shapes.hexagon.points, symmetryLine: {x1: 25, y1: 15, x2: 75, y2: 85} },
                                        { type: 'shape', points: shapes.rightTri.points, symmetryLine: {x1: 50, y1: 50, x2: 50, y2: 90} }
                                    ],
                                    rows: [
                                        { label: {val: "Yes"}, matches: [true, false] },
                                        { label: {val: "No"}, matches: [false, true] }
                                    ]
                                },
                                {
                                    instruction: `A line plot shows string lengths. The longest string is ${mf(2, 3, 8)} inches, and the shortest is ${mf(1, 1, 8)} inches. What is the difference?`, type: "mixed_row",
                                    problems: [{ segments: [{ type: 'mixed_input', ans: 1.25 }, { type: 'text', val: ' inches' }] }]
                                }
                            ]
                        },
                        { 
                            id: "m10-w2-wed", name: "Wed", title: "Week 2: Wednesday", 
                            sections: [
                                {
                                    instruction: "Determine the number of lines of symmetry for each shape. Match the shape to the correct number.", type: "matrix_match",
                                    colHeaders: [shapes.trapezoid, shapes.rightTrapezoid, shapes.rhombus, shapes.octagon],
                                    rows: [
                                        { label: {val: "None"}, matches: [false, true, false, false] },
                                        { label: {val: "Exactly 1"}, matches: [true, false, false, false] },
                                        { label: {val: "Exactly 2"}, matches: [false, false, true, false] },
                                        { label: {val: "More than 2"}, matches: [false, false, false, true] }
                                    ]
                                },
                                {
                                    instruction: "Enter the unknown number to make the fractions equivalent.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'fraction', n: 1, d: 5 }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', ansN: '2', d: 10 }] }]
                                }
                            ] 
                        },
                        {
                            id: "m10-w2-thu", name: "Thu", title: "Week 2: Thursday",
                            sections: [
                                {
                                    instruction: "Determine the number of lines of symmetry for each shape.", type: "matrix_match",
                                    colHeaders: [shapes.chevron, shapes.acuteTri, shapes.hexagon, shapes.parallelogram],
                                    rows: [
                                        { label: {val: "None"}, matches: [false, false, false, true] },
                                        { label: {val: "Exactly 1"}, matches: [true, true, false, false] },
                                        { label: {val: "Exactly 6"}, matches: [false, false, true, false] }
                                    ]
                                },
                                {
                                    instruction: "Determine if the statement is True or False.", type: "grid", col0: "Statement", col1: "True", col2: "False",
                                    rows: [
                                        { text: "An obtuse triangle can never have a line of symmetry.", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Decide whether each number is prime or composite.", type: "grid", col0: "Number", col1: "Prime", col2: "Composite",
                                    rows: [
                                        { text: "23", correct: true },
                                        { text: "27", correct: false }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m10-w2-fri", name: "Fri", title: "Week 2: Friday", 
                            sections: [
                                {
                                    instruction: "Match each shape to ALL the properties it has. You may select more than one box per row.", type: "matrix_match",
                                    colHeaders: [shapes.parallelogram, shapes.arrow, shapes.kite],
                                    rows: [
                                        { label: {val: "Has Perpendicular Lines"}, matches: [false, true, false] },
                                        { label: {val: "Has Parallel Lines"}, matches: [true, true, false] },
                                        { label: {val: "Has EXACTLY 1 Line of Symmetry"}, matches: [false, true, true] }
                                    ]
                                },
                                {
                                    instruction: "Enter the quotient and remainder.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "61 &divide; 7 = &nbsp; Quotient: " }, { type: 'input', ans: "8" }, { type: 'text', val: " &nbsp; Remainder: " }, { type: 'input', ans: "5" }] }]
                                }
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
                            id: "m10-w1-mon", name: "Mon", title: "Week 1: Monday",
                            sections: [
                                {
                                    instruction: "Determine whether each polygon shown has at least one acute angle.", type: "matrix_match",
                                    colHeaders: [shapes.octagon, shapes.trapezoid, shapes.kite],
                                    rows: [
                                        { label: {val: "Yes"}, matches: [false, true, true] },
                                        { label: {val: "No"}, matches: [true, false, false] }
                                    ]
                                },
                                {
                                    instruction: "Which geometric term describes an angle that is smaller than a right angle?", type: "multiple_choice",
                                    options: [
                                        { text: "Obtuse Angle", correct: false },
                                        { text: "Straight Angle", correct: false },
                                        { text: "Acute Angle", correct: true },
                                        { text: "Parallel Angle", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the sum.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("38,517", "7,392", "+") }, { type: 'input', ans: "45909" }] }]
                                }
                            ]
                        },
                        { 
                            id: "m10-w1-tue", name: "Tue", title: "Week 1: Tuesday", 
                            sections: [
                                {
                                    instruction: "Decide whether the shape appears to be a right triangle.", type: "matrix_match",
                                    colHeaders: [shapes.acuteTri, shapes.rightTri, shapes.obtuseTri],
                                    rows: [
                                        { label: {val: "Yes"}, matches: [false, true, false] },
                                        { label: {val: "No"}, matches: [true, false, true] }
                                    ]
                                },
                                {
                                    instruction: "Determine whether each shape has at least one pair of perpendicular sides.", type: "matrix_match",
                                    colHeaders: [shapes.rect, shapes.hexagon],
                                    rows: [
                                        { label: {val: "Yes"}, matches: [true, false] },
                                        { label: {val: "No"}, matches: [false, true] }
                                    ]
                                },
                                {
                                    instruction: "Enter the difference.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'fraction', w: '5', n: '7', d: '8' }, { type: 'text', val: ' &minus; ' }, { type: 'fraction', w: '3', n: '3', d: '8' }, { type: 'text', val: ' = ' }, { type: 'mixed_input', ans: 2.5 }] }]
                                }
                            ] 
                        },
                        { 
                            id: "m10-w1-wed", name: "Wed", title: "Week 1: Wednesday", 
                            sections: [
                                {
                                    instruction: "Match each figure with its description. A figure may match more than one description.", type: "matrix_match",
                                    colHeaders: [shapes.rhombus, shapes.rightTri, shapes.trapezoid],
                                    rows: [
                                        { label: {val: "Has at least one obtuse angle"}, matches: [true, false, true] },
                                        { label: {val: "Has at least one pair of perpendicular sides"}, matches: [false, true, false] },
                                        { label: {val: "Has at least one pair of parallel sides"}, matches: [true, false, true] }
                                    ]
                                },
                                {
                                    instruction: "Enter the product.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("54", "16", "&times;") }, { type: 'input', ans: "864" }] }]
                                }
                            ] 
                        },
                        {
                            id: "m10-w1-thu", name: "Thu", title: "Week 1: Thursday",
                            sections: [
                                {
                                    instruction: "Determine whether each polygon shown has at least two pairs of parallel opposite sides.", type: "matrix_match",
                                    colHeaders: [shapes.rect, shapes.rightTrapezoid, shapes.parallelogram],
                                    rows: [
                                        { label: {val: "Yes"}, matches: [true, false, true] },
                                        { label: {val: "No"}, matches: [false, true, false] }
                                    ]
                                },
                                {
                                    instruction: "Which polygon has exactly four sides of equal length, but does NOT always have right angles?", type: "multiple_choice",
                                    options: [
                                        { text: "Square", correct: false },
                                        { text: "Rectangle", correct: false },
                                        { text: "Rhombus", correct: true },
                                        { text: "Kite", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the missing factor.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "7 &times; &nbsp;" }, { type: 'input', ans: "8" }, { type: 'text', val: " = 56" }] }]
                                }
                            ]
                        },
                        { 
                            id: "m10-w1-fri", name: "Fri", title: "Week 1: Friday", 
                            sections: [
                                {
                                    instruction: "Match each figure with its description. A figure may match more than one description.", type: "matrix_match",
                                    colHeaders: [shapes.octagon, shapes.rect, shapes.rightTri],
                                    rows: [
                                        { label: {val: "All sides are equal length"}, matches: [true, false, false] },
                                        { label: {val: "Has exactly 4 angles"}, matches: [false, true, false] },
                                        { label: {val: "Has right angles"}, matches: [false, true, true] }
                                    ]
                                },
                                {
                                    instruction: "Look closely at the rectangle from the previous question. How many right angles does it have?", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '4' }] }]
                                }
                            ] 
                        }
                    ]
                },
                {
                    weekNum: 2,
                    days: [
                        {
                            id: "m10-w2-mon", name: "Mon", title: "Week 2: Monday",
                            sections: [
                                {
                                    instruction: "Is the dashed line a line of symmetry for the shape? Select Yes or No.", type: "matrix_match",
                                    colHeaders: [
                                        { type: 'shape', points: shapes.rect.points, symmetryLine: {x1: 50, y1: 15, x2: 50, y2: 85} },
                                        { type: 'shape', path: shapes.heart.path, symmetryLine: {x1: 15, y1: 50, x2: 85, y2: 50} },
                                        { type: 'shape', points: shapes.chevron.points, symmetryLine: {x1: 5, y1: 50, x2: 95, y2: 50} }
                                    ],
                                    rows: [
                                        { label: {val: "Yes"}, matches: [true, false, true] },
                                        { label: {val: "No"}, matches: [false, true, false] }
                                    ]
                                },
                                {
                                    instruction: "Which capital letter has only a horizontal line of symmetry?", type: "multiple_choice",
                                    options: [
                                        { text: "A", correct: false },
                                        { text: "E", correct: true },
                                        { text: "O", correct: false },
                                        { text: "Y", correct: false }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m10-w2-tue", name: "Tue", title: "Week 2: Tuesday", 
                            sections: [
                                {
                                    instruction: "How many total lines of symmetry does a regular pentagon have?", type: "multiple_choice",
                                    options: [
                                        { text: "3", correct: false },
                                        { text: "5", correct: true },
                                        { text: "10", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Is the dashed line a line of symmetry for the shape? Select Yes or No.", type: "matrix_match",
                                    colHeaders: [
                                        { type: 'shape', points: shapes.rhombus.points, symmetryLine: {x1: 15, y1: 50, x2: 85, y2: 50} },
                                        { type: 'shape', points: shapes.trapezoid.points, symmetryLine: {x1: 15, y1: 80, x2: 85, y2: 30} }
                                    ],
                                    rows: [
                                        { label: {val: "Yes"}, matches: [true, false] },
                                        { label: {val: "No"}, matches: [false, true] }
                                    ]
                                },
                                {
                                    instruction: `A line plot shows string lengths. The longest string is ${mf(3, 3, 4)} inches, and the shortest is ${mf(1, 1, 4)} inches. What is the difference?`, type: "mixed_row",
                                    problems: [{ segments: [{ type: 'mixed_input', ans: 2.5 }, { type: 'text', val: ' inches' }] }]
                                }
                            ]
                        },
                        { 
                            id: "m10-w2-wed", name: "Wed", title: "Week 2: Wednesday", 
                            sections: [
                                {
                                    instruction: "Determine the number of lines of symmetry for each shape. Match the shape to the correct number.", type: "matrix_match",
                                    colHeaders: [shapes.rightTri, shapes.arrow, shapes.rhombus, shapes.hexagon],
                                    rows: [
                                        { label: {val: "None"}, matches: [true, false, false, false] },
                                        { label: {val: "Exactly 1"}, matches: [false, true, false, false] },
                                        { label: {val: "Exactly 2"}, matches: [false, false, true, false] },
                                        { label: {val: "More than 2"}, matches: [false, false, false, true] }
                                    ]
                                },
                                {
                                    instruction: "Enter the unknown number to make the fractions equivalent.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'fraction', n: 1, d: 4 }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', ansN: '2', d: 8 }] }]
                                }
                            ] 
                        },
                        {
                            id: "m10-w2-thu", name: "Thu", title: "Week 2: Thursday",
                            sections: [
                                {
                                    instruction: "Determine the number of lines of symmetry for each shape.", type: "matrix_match",
                                    colHeaders: [shapes.heart, shapes.acuteTri, shapes.star, shapes.parallelogram],
                                    rows: [
                                        { label: {val: "None"}, matches: [false, false, false, true] },
                                        { label: {val: "Exactly 1"}, matches: [true, true, false, false] },
                                        { label: {val: "More than 3"}, matches: [false, false, true, false] }
                                    ]
                                },
                                {
                                    instruction: "Determine if the statement is True or False.", type: "grid", col0: "Statement", col1: "True", col2: "False",
                                    rows: [
                                        { text: "A rectangle always has exactly 4 lines of symmetry.", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Decide whether each number is prime or composite.", type: "grid", col0: "Number", col1: "Prime", col2: "Composite",
                                    rows: [
                                        { text: "19", correct: true },
                                        { text: "25", correct: false }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m10-w2-fri", name: "Fri", title: "Week 2: Friday", 
                            sections: [
                                {
                                    instruction: "Match each shape to ALL the properties it has. You may select more than one box per row.", type: "matrix_match",
                                    colHeaders: [shapes.rhombus, shapes.rightTri, shapes.hexagon],
                                    rows: [
                                        { label: {val: "Has EXACTLY 4 Sides"}, matches: [true, false, false] },
                                        { label: {val: "Has No Parallel Lines"}, matches: [false, true, false] },
                                        { label: {val: "Has More Than 2 Lines of Symmetry"}, matches: [false, false, true] }
                                    ]
                                },
                                {
                                    instruction: "Enter the quotient and remainder.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "52 &divide; 6 = &nbsp; Quotient: " }, { type: 'input', ans: "8" }, { type: 'text', val: " &nbsp; Remainder: " }, { type: 'input', ans: "4" }] }]
                                }
                            ] 
                        }
                    ]
                }
            ]
        }
    }
};