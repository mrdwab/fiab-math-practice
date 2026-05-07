// --- MODULE 9 DATA ---
const module9 = {
    id: "mod-9", 
    name: "Angle Measurement and Data", 
    
    helperHubs: {
        week1: {
            title: "★ Helper Hub: The Magic Numbers of Angles",
            content: `
                <div style="font-size:15px; line-height: 1.4;">
                    <p style="margin-top:0; margin-bottom:10px;">Angles are just fractions of a circle! If you memorize the three magic numbers below, you can solve anything.</p>
                    
                    <div class="print-stack" style="display:flex; gap:15px; align-items:flex-start; break-inside: avoid;">
                        <div style="flex:1; padding:15px; border:2px solid #ccc; border-radius:10px; background:#fff; text-align:center;">
                            <strong style="font-size:16px; color:#2c7be5;">The 3 Magic Numbers</strong><br><br>
                            <span style="color:#e74c3c; font-weight:bold; font-size:16px;">90°</span> = A Right Angle (Perfect Corner)<br>
                            <span style="color:#f39c12; font-weight:bold; font-size:16px;">180°</span> = A Straight Line (Half Circle)<br>
                            <span style="color:#27ae60; font-weight:bold; font-size:16px;">360°</span> = A Full Circle!<br><br>
                            <em>If an angle is exactly <span style="font-size:1.2em;">&frac14;</span> of a circle, it is 90°! (Because 360 &divide; 4 = 90).</em>
                        </div>
                        <div style="flex:1; padding:15px; border:2px solid #ccc; border-radius:10px; background:#fff; text-align:center;">
                            <strong style="font-size:16px; color:#8e44ad;">Angle Addition (Part + Part = Whole)</strong><br><br>
                            Angles fit together like puzzle pieces.<br><br>
                            If a big angle is 140° and one small piece of it is 60°, just subtract to find the missing piece!<br><br>
                            <span style="font-family:monospace; font-size:18px; font-weight:bold; color:#8e44ad;">140 - 60 = 80°</span>
                        </div>
                    </div>
                </div>`
        },
        week2: {
            title: "★ Helper Hub: Protractor Power & Line Plots",
            content: `
                <div style="font-size:15px; line-height: 1.4;">
                    <div class="print-stack" style="display:flex; gap:15px; align-items:stretch; break-inside: avoid;">
                        <div style="flex:1; padding:15px; border:2px solid #ccc; border-radius:10px; background:#fff;">
                            <strong style="font-size:16px; color:#e74c3c;">The Golden Rule of Protractors</strong><br><br>
                            Protractors have two sets of numbers. Which one do you use?<br><br>
                            <strong>Always start at ZERO!</strong><br>
                            Look at the bottom line of the angle. If the arrow points to the ZERO on the outside ring, use the outside numbers. If it points to the ZERO on the inside ring, use the inside numbers!
                        </div>
                        <div style="flex:1; padding:15px; border:2px solid #ccc; border-radius:10px; background:#fff;">
                            <strong style="font-size:16px; color:#2c7be5;">The Line Plot Trap</strong><br><br>
                            Line plots show data using X's. A common test question asks: <em>"What is the difference between the longest and shortest jump?"</em><br><br>
                            <span style="color:#e74c3c; font-weight:bold;">DO NOT count the X's!</span><br>
                            Look at the FRACTIONS on the bottom line. Find the fraction with the furthest right X, and subtract the fraction with the furthest left X.
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
                            id: "m9-w1-mon", name: "Mon", title: "Week 1: Monday",
                            sections: [
                                {
                                    instructionSegments: [{ type: 'text', val: 'Find the total measure of ∠ABC.' }], type: "angle_diagram",
                                    vertex: "B", rayLabels: ["A", "D", "C"],
                                    arcs: [{start: 0, end: 50, label: "50°"}, {start: 50, end: 115, label: "65°"}], rays: [0, 50, 115],
                                    problems: [{ segments: [{ type: 'text', val: 'Total Angle: &nbsp;' }, { type: 'input', ans: '115' }, { type: 'text', val: '°' }] }]
                                },
                                {
                                    instructionSegments: [{ type: 'text', val: 'An angle turns through ' }, { type: 'fraction', n: '1', d: '6' }, { type: 'text', val: ' of a circle. What is its measure in degrees?' }], type: "multiple_choice",
                                    options: [
                                        { text: "30°", correct: false },
                                        { text: "60°", correct: true },
                                        { text: "90°", correct: false },
                                        { text: "120°", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the difference.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("45,218", "12,405", "-") }, { type: 'input', ans: "32813" }] }]
                                }
                            ]
                        },
                        { 
                            id: "m9-w1-tue", name: "Tue", title: "Week 1: Tuesday", 
                            sections: [
                                {
                                    instructionSegments: [{ type: 'text', val: 'The angle ∠XYZ is a straight line. Find the missing measure of ∠XYW.' }], type: "angle_diagram",
                                    vertex: "Y", rayLabels: ["X", "W", "Z"],
                                    arcs: [{start: 0, end: 130, label: "130°"}, {start: 130, end: 180, label: "?°", color: "#2c7be5"}], rays: [0, 130, 180],
                                    problems: [{ segments: [{ type: 'text', val: 'Missing Angle: &nbsp;' }, { type: 'input', ans: '50' }, { type: 'text', val: '°' }] }]
                                },
                                {
                                    instruction: "Determine if each statement is True or False.", type: "grid", col1: "True", col2: "False",
                                    rows: [
                                        { segments: [{ type: 'text', val: 'An angle that turns through ' }, { type: 'fraction', n: '1', d: '4' }, { type: 'text', val: ' of a circle is 90°.' }], correct: true },
                                        { segments: [{ type: 'text', val: 'An angle that turns through ' }, { type: 'fraction', n: '1', d: '2' }, { type: 'text', val: ' of a circle is 90°.' }], correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the missing factor.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "6 &times; &nbsp;" }, { type: 'input', ans: "7" }, { type: 'text', val: " = 42" }] }]
                                }
                            ] 
                        },
                        { 
                            id: "m9-w1-wed", name: "Wed", title: "Week 1: Wednesday", 
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: "The measure of ∠PQR is 155° and is made up of two smaller angles. The measure of ∠PQS is 80°. What is the measurement of ∠SQR?" }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '75' }, { type: 'text', val: '°' }] }]
                                },
                                {
                                    instruction: "An angle measures 90° and is split into two smaller angles. One is 25°. Which equation matches how to find the missing angle?", type: "multiple_choice",
                                    options: [
                                        { text: "90 + 25 = 115", correct: false },
                                        { text: "90 - 25 = 65", correct: true },
                                        { text: "180 - 25 = 155", correct: false },
                                        { text: "25 + 25 = 50", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the product.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("24", "18", "&times;") }, { type: 'input', ans: "432" }] }]
                                }
                            ] 
                        },
                        {
                            id: "m9-w1-thu", name: "Thu", title: "Week 1: Thursday",
                            sections: [
                                {
                                    instructionSegments: [{ type: 'text', val: 'The total measure of ∠MJN is 150°. Find the missing measure of ∠LJN.' }], type: "angle_diagram",
                                    vertex: "J", rayLabels: ["M", "K", "L", "N"],
                                    arcs: [{start: 0, end: 45, label: "45°"}, {start: 45, end: 95, label: "50°"}, {start: 95, end: 150, label: "?°", color: "#2c7be5"}], rays: [0, 45, 95, 150],
                                    problems: [{ segments: [{ type: 'text', val: 'Missing Angle: &nbsp;' }, { type: 'input', ans: '55' }, { type: 'text', val: '°' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: "An angle cuts through exactly " }, { type: 'fraction', n: '3', d: '12' }, { type: 'text', val: " of a circle. What is the measurement of the angle in degrees? (Hint: simplify the fraction first!)" }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '90' }, { type: 'text', val: '°' }] }]
                                },
                                { 
                                    instruction: "Enter the unknown number to make the fractions equivalent.", type: "mixed_row", 
                                    problems: [{ segments: [{ type: 'fraction', n: 1, d: 4 }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', ansN: '3', d: 12 }] }]
                                }
                            ]
                        },
                        { 
                            id: "m9-w1-fri", name: "Fri", title: "Week 1: Friday", 
                            sections: [
                                {
                                    instructionSegments: [{ type: 'text', val: 'Find the total measure of ∠EFH. (Hint: The square symbol indicates a right angle!)' }], type: "angle_diagram",
                                    vertex: "F", rayLabels: ["E", "G", "H"],
                                    arcs: [{start: 0, end: 90, isRight: true}, {start: 90, end: 135, label: "45°"}], rays: [0, 90, 135],
                                    problems: [{ segments: [{ type: 'text', val: 'Total Angle: &nbsp;' }, { type: 'input', ans: '135' }, { type: 'text', val: '°' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: "A full circle (360°) is divided perfectly into 6 equal angles. What is the measurement of just one of those angles?" }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '60' }, { type: 'text', val: '°' }] }]
                                },
                                {
                                    instruction: "Decide whether each number is prime or composite.", type: "grid", col1: "Prime", col2: "Composite",
                                    rows: [
                                        { text: "19", correct: true },
                                        { text: "21", correct: false }
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
                            id: "m9-w2-mon", name: "Mon", title: "Week 2: Monday",
                            sections: [
                                {
                                    instructionSegments: [{ type: 'text', val: 'Read the protractor to find the measure of ∠PQR.' }], type: "protractor",
                                    vertex: "Q", rayLabels: ["P", "R"],
                                    rays: [0, 75], arcs: [{start:0, end:75, label: "?°"}],
                                    problems: [{ segments: [{ type: 'text', val: 'Angle Measure: &nbsp;' }, { type: 'input', ans: '75' }, { type: 'text', val: '°' }] }]
                                },
                                {
                                    instruction: "The line plot shows the length of toy cars in inches. What is the difference between the longest toy car and the shortest toy car?", type: "line_plot",
                                    start: 2, end: 4, denominator: 4, points: [2.25, 2.5, 2.5, 3.25, 3.75], title: "Toy Car Lengths", xLabel: "Inches",
                                    problems: [{ segments: [{ type: 'text', val: 'Difference: &nbsp;' }, { type: 'mixed_input', ans: 1.5 }, { type: 'text', val: '&nbsp; inches' }] }]
                                }
                            ]
                        },
                        { 
                            id: "m9-w2-tue", name: "Tue", title: "Week 2: Tuesday", 
                            sections: [
                                {
                                    instructionSegments: [{ type: 'text', val: 'A student wants to draw a 145° angle. Ray A is already on the 0° mark. At what number on the protractor should Ray B be drawn?' }], type: "protractor",
                                    vertex: "O", rayLabels: ["A"], rays: [0],
                                    problems: [{ segments: [{ type: 'text', val: 'Draw Ray B at: &nbsp;' }, { type: 'input', ans: '145' }, { type: 'text', val: '°' }] }]
                                },
                                {
                                    instructionSegments: [{ type: 'text', val: 'The line plot shows how many hours students read over the weekend. How many students read for exactly ' }, { type: 'fraction', w: '2', n: '1', d: '2' }, { type: 'text', val: ' hours?' }], type: "line_plot",
                                    start: 1, end: 3, denominator: 2, points: [1.5, 1.5, 2, 2.5, 2.5, 2.5, 3], title: "Weekend Reading", xLabel: "Hours",
                                    problems: [{ segments: [{ type: 'text', val: 'Number of students: &nbsp;' }, { type: 'input', ans: '3' }] }]
                                }
                            ]
                        },
                        { 
                            id: "m9-w2-wed", name: "Wed", title: "Week 2: Wednesday", 
                            sections: [
                                {
                                    instructionSegments: [{ type: 'text', val: "What is the measure of ∠TSU shown on the protractor? (Hint: It doesn't start at zero!)" }], type: "protractor",
                                    vertex: "S", rayLabels: ["T", "U"],
                                    rays: [15, 85], arcs: [{start:15, end:85, label: "?°"}],
                                    problems: [{ segments: [{ type: 'text', val: 'Angle Measure: &nbsp;' }, { type: 'input', ans: '70' }, { type: 'text', val: '°' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A scientist measures bugs. The longest bug is ' }, { type: 'fraction', n: '7', d: '8' }, { type: 'text', val: ' of an inch. The shortest bug is ' }, { type: 'fraction', n: '3', d: '8' }, { type: 'text', val: ' of an inch. What is the difference in length?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Difference: &nbsp;' }, { type: 'fraction_group', ans: 0.5 }, { type: 'text', val: '&nbsp; inch' }] }]
                                }
                            ] 
                        },
                        {
                            id: "m9-w2-thu", name: "Thu", title: "Week 2: Thursday",
                            sections: [
                                {
                                    instructionSegments: [{ type: 'text', val: 'A right angle (90°) is split into two smaller angles. Find the missing measure of ∠XVY.' }], type: "protractor",
                                    vertex: "V", rayLabels: ["W", "X", "Y"],
                                    rays: [0, 35, 90], arcs: [{start:0, end:35, label:"35°"}, {start:35, end:90, isRight: true, color: 'none'}],
                                    problems: [{ segments: [{ type: 'text', val: 'Missing Angle: &nbsp;' }, { type: 'input', ans: '55' }, { type: 'text', val: '°' }] }]
                                },
                                {
                                    instruction: "Use the line plot to determine if each statement is True or False.", type: "line_plot",
                                    start: 0, end: 1, denominator: 4, points: [0.25, 0.5, 0.5, 0.75, 1, 1], title: "Plant Heights", xLabel: "Feet",
                                    grid: {
                                        col1: "True", col2: "False",
                                        rows: [
                                            { segments: [{ type: 'text', val: 'The difference between the tallest and shortest plant is ' }, { type: 'fraction', n: '3', d: '4' }, { type: 'text', val: ' feet.' }], correct: true },
                                            { segments: [{ type: 'text', val: 'Exactly two plants are ' }, { type: 'fraction', n: '1', d: '2' }, { type: 'text', val: ' foot tall.' }], correct: true }
                                        ]
                                    }
                                }
                            ]
                        },
                        { 
                            id: "m9-w2-fri", name: "Fri", title: "Week 2: Friday", 
                            sections: [
                                {
                                    instruction: "The line plot shows the amount of rainfall in inches over several days. What is the difference between the most rainfall and the least rainfall?", type: "line_plot",
                                    start: 1, end: 2, denominator: 8, points: [1.125, 1.25, 1.5, 1.875], title: "Daily Rainfall", xLabel: "Inches",
                                    problems: [{ segments: [{ type: 'text', val: 'Difference: &nbsp;' }, { type: 'fraction_group', ans: 0.75 }, { type: 'text', val: '&nbsp; inches' }] }]
                                },
                                {
                                    instructionSegments: [{ type: 'text', val: 'What is the measure of ∠DEF shown on the protractor?' }], type: "protractor",
                                    vertex: "E", rayLabels: ["D", "F"],
                                    rays: [40, 115], arcs: [{start:40, end:115, label:"?°"}],
                                    problems: [{ segments: [{ type: 'text', val: 'Angle Measure: &nbsp;' }, { type: 'input', ans: '75' }, { type: 'text', val: '°' }] }]
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
                            id: "m9-w1-mon", name: "Mon", title: "Week 1: Monday",
                            sections: [
                                {
                                    instructionSegments: [{ type: 'text', val: 'Find the total measure of ∠DEF.' }], type: "angle_diagram",
                                    vertex: "E", rayLabels: ["D", "G", "F"],
                                    arcs: [{start: 0, end: 40, label: "40°"}, {start: 40, end: 125, label: "85°"}], rays: [0, 40, 125],
                                    problems: [{ segments: [{ type: 'text', val: 'Total Angle: &nbsp;' }, { type: 'input', ans: '125' }, { type: 'text', val: '°' }] }]
                                },
                                {
                                    instructionSegments: [{ type: 'text', val: 'An angle turns through ' }, { type: 'fraction', n: '1', d: '4' }, { type: 'text', val: ' of a circle. What is its measure in degrees?' }], type: "multiple_choice",
                                    options: [
                                        { text: "45°", correct: false },
                                        { text: "90°", correct: true },
                                        { text: "120°", correct: false },
                                        { text: "180°", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the difference.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("62,514", "24,183", "-") }, { type: 'input', ans: "38331" }] }]
                                }
                            ]
                        },
                        { 
                            id: "m9-w1-tue", name: "Tue", title: "Week 1: Tuesday", 
                            sections: [
                                {
                                    instructionSegments: [{ type: 'text', val: 'The angle ∠UVW is a straight line. Find the missing measure of ∠UVT.' }], type: "angle_diagram",
                                    vertex: "V", rayLabels: ["U", "T", "W"],
                                    arcs: [{start: 0, end: 110, label: "110°"}, {start: 110, end: 180, label: "?°", color: "#2c7be5"}], rays: [0, 110, 180],
                                    problems: [{ segments: [{ type: 'text', val: 'Missing Angle: &nbsp;' }, { type: 'input', ans: '70' }, { type: 'text', val: '°' }] }]
                                },
                                {
                                    instruction: "Determine if each statement is True or False.", type: "grid", col1: "True", col2: "False",
                                    rows: [
                                        { segments: [{ type: 'text', val: 'An angle that turns through ' }, { type: 'fraction', n: '1', d: '3' }, { type: 'text', val: ' of a circle is 120°.' }], correct: true },
                                        { segments: [{ type: 'text', val: 'An angle that turns through ' }, { type: 'fraction', n: '1', d: '2' }, { type: 'text', val: ' of a circle is 100°.' }], correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the missing factor.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "5 &times; &nbsp;" }, { type: 'input', ans: "8" }, { type: 'text', val: " = 40" }] }]
                                }
                            ] 
                        },
                        { 
                            id: "m9-w1-wed", name: "Wed", title: "Week 1: Wednesday", 
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: "The measure of ∠LMN is 165° and is made up of two smaller angles. One of the smaller angles is 70°. What is the measurement of the other smaller angle?" }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '95' }, { type: 'text', val: '°' }] }]
                                },
                                {
                                    instruction: "An angle measures 180° and is split into two smaller angles. One is 65°. Which equation matches how to find the missing angle?", type: "multiple_choice",
                                    options: [
                                        { text: "180 + 65 = 245", correct: false },
                                        { text: "90 - 65 = 25", correct: false },
                                        { text: "180 - 65 = 115", correct: true },
                                        { text: "65 + 65 = 130", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the product.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("32", "15", "&times;") }, { type: 'input', ans: "480" }] }]
                                }
                            ] 
                        },
                        {
                            id: "m9-w1-thu", name: "Thu", title: "Week 1: Thursday",
                            sections: [
                                {
                                    instructionSegments: [{ type: 'text', val: 'The total measure of ∠RST is 140°. Find the missing measure of ∠UST.' }], type: "angle_diagram",
                                    vertex: "S", rayLabels: ["R", "U", "V", "T"],
                                    arcs: [{start: 0, end: 55, label: "55°"}, {start: 55, end: 105, label: "50°"}, {start: 105, end: 140, label: "?°", color: "#2c7be5"}], rays: [0, 55, 105, 140],
                                    problems: [{ segments: [{ type: 'text', val: 'Missing Angle: &nbsp;' }, { type: 'input', ans: '35' }, { type: 'text', val: '°' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: "An angle cuts through exactly " }, { type: 'fraction', n: '2', d: '6' }, { type: 'text', val: " of a circle. What is the measurement of the angle in degrees? (Hint: simplify the fraction first!)" }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '120' }, { type: 'text', val: '°' }] }]
                                },
                                { 
                                    instruction: "Enter the unknown number to make the fractions equivalent.", type: "mixed_row", 
                                    problems: [{ segments: [{ type: 'fraction', n: 1, d: 3 }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', ansN: '4', d: 12 }] }]
                                }
                            ]
                        },
                        { 
                            id: "m9-w1-fri", name: "Fri", title: "Week 1: Friday", 
                            sections: [
                                {
                                    instructionSegments: [{ type: 'text', val: 'Find the total measure of ∠HIJ. (Hint: The square symbol indicates a right angle!)' }], type: "angle_diagram",
                                    vertex: "I", rayLabels: ["H", "K", "J"],
                                    arcs: [{start: 0, end: 90, isRight: true}, {start: 90, end: 155, label: "65°"}], rays: [0, 90, 155],
                                    problems: [{ segments: [{ type: 'text', val: 'Total Angle: &nbsp;' }, { type: 'input', ans: '155' }, { type: 'text', val: '°' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: "A full circle (360°) is divided perfectly into 4 equal angles. What is the measurement of just one of those angles?" }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '90' }, { type: 'text', val: '°' }] }]
                                },
                                {
                                    instruction: "Decide whether each number is prime or composite.", type: "grid", col1: "Prime", col2: "Composite",
                                    rows: [
                                        { text: "23", correct: true },
                                        { text: "27", correct: false }
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
                            id: "m9-w2-mon", name: "Mon", title: "Week 2: Monday",
                            sections: [
                                {
                                    instructionSegments: [{ type: 'text', val: 'Read the protractor to find the measure of ∠MNO.' }], type: "protractor",
                                    vertex: "N", rayLabels: ["M", "O"],
                                    rays: [0, 85], arcs: [{start:0, end:85, label: "?°"}],
                                    problems: [{ segments: [{ type: 'text', val: 'Angle Measure: &nbsp;' }, { type: 'input', ans: '85' }, { type: 'text', val: '°' }] }]
                                },
                                {
                                    instruction: "The line plot shows the length of toy blocks in inches. What is the difference between the longest block and the shortest block?", type: "line_plot",
                                    start: 3, end: 5, denominator: 4, points: [3.25, 3.5, 3.5, 4.25, 4.75], title: "Toy Block Lengths", xLabel: "Inches",
                                    problems: [{ segments: [{ type: 'text', val: 'Difference: &nbsp;' }, { type: 'mixed_input', ans: 1.5 }, { type: 'text', val: '&nbsp; inches' }] }]
                                }
                            ]
                        },
                        { 
                            id: "m9-w2-tue", name: "Tue", title: "Week 2: Tuesday", 
                            sections: [
                                {
                                    instructionSegments: [{ type: 'text', val: 'A student wants to draw a 135° angle. Ray A is already on the 0° mark. At what number on the protractor should Ray B be drawn?' }], type: "protractor",
                                    vertex: "P", rayLabels: ["A"], rays: [0],
                                    problems: [{ segments: [{ type: 'text', val: 'Draw Ray B at: &nbsp;' }, { type: 'input', ans: '135' }, { type: 'text', val: '°' }] }]
                                },
                                {
                                    instructionSegments: [{ type: 'text', val: 'The line plot shows how many hours students practiced piano. How many students practiced for exactly ' }, { type: 'fraction', w: '1', n: '1', d: '2' }, { type: 'text', val: ' hours?' }], type: "line_plot",
                                    start: 1, end: 3, denominator: 2, points: [1, 1.5, 1.5, 1.5, 1.5, 2, 2.5], title: "Piano Practice", xLabel: "Hours",
                                    problems: [{ segments: [{ type: 'text', val: 'Number of students: &nbsp;' }, { type: 'input', ans: '4' }] }]
                                }
                            ]
                        },
                        { 
                            id: "m9-w2-wed", name: "Wed", title: "Week 2: Wednesday", 
                            sections: [
                                {
                                    instructionSegments: [{ type: 'text', val: "What is the measure of ∠QRS shown on the protractor? (Hint: It doesn't start at zero!)" }], type: "protractor",
                                    vertex: "R", rayLabels: ["Q", "S"],
                                    rays: [20, 105], arcs: [{start:20, end:105, label: "?°"}],
                                    problems: [{ segments: [{ type: 'text', val: 'Angle Measure: &nbsp;' }, { type: 'input', ans: '85' }, { type: 'text', val: '°' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A carpenter measures nails. The longest nail is ' }, { type: 'fraction', n: '5', d: '8' }, { type: 'text', val: ' of an inch. The shortest nail is ' }, { type: 'fraction', n: '1', d: '8' }, { type: 'text', val: ' of an inch. What is the difference in length?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Difference: &nbsp;' }, { type: 'fraction_group', ans: 0.5 }, { type: 'text', val: '&nbsp; inch' }] }]
                                }
                            ] 
                        },
                        {
                            id: "m9-w2-thu", name: "Thu", title: "Week 2: Thursday",
                            sections: [
                                {
                                    instructionSegments: [{ type: 'text', val: 'A right angle (90°) is split into two smaller angles. Find the missing measure of ∠TUV.' }], type: "protractor",
                                    vertex: "U", rayLabels: ["W", "T", "V"],
                                    rays: [0, 45, 90], arcs: [{start:0, end:45, label:"45°"}, {start:45, end:90, isRight: true, color: 'none'}],
                                    problems: [{ segments: [{ type: 'text', val: 'Missing Angle: &nbsp;' }, { type: 'input', ans: '45' }, { type: 'text', val: '°' }] }]
                                },
                                {
                                    instruction: "Use the line plot to determine if each statement is True or False.", type: "line_plot",
                                    start: 0, end: 1, denominator: 4, points: [0.25, 0.5, 0.5, 0.5, 1], title: "String Lengths", xLabel: "Yards",
                                    grid: {
                                        col1: "True", col2: "False",
                                        rows: [
                                            { segments: [{ type: 'text', val: 'The difference between the longest and shortest string is ' }, { type: 'fraction', n: '3', d: '4' }, { type: 'text', val: ' yards.' }], correct: true },
                                            { segments: [{ type: 'text', val: 'Exactly two strings are ' }, { type: 'fraction', n: '1', d: '2' }, { type: 'text', val: ' yard long.' }], correct: false }
                                        ]
                                    }
                                }
                            ]
                        },
                        { 
                            id: "m9-w2-fri", name: "Fri", title: "Week 2: Friday", 
                            sections: [
                                {
                                    instruction: "The line plot shows the amount of rainfall in inches over several days. What is the difference between the most rainfall and the least rainfall?", type: "line_plot",
                                    start: 3, end: 4, denominator: 8, points: [3.125, 3.5, 3.5, 3.875], title: "Daily Rainfall", xLabel: "Inches",
                                    problems: [{ segments: [{ type: 'text', val: 'Difference: &nbsp;' }, { type: 'fraction_group', ans: 0.75 }, { type: 'text', val: '&nbsp; inches' }] }]
                                },
                                {
                                    instructionSegments: [{ type: 'text', val: 'What is the measure of ∠ABC shown on the protractor?' }], type: "protractor",
                                    vertex: "B", rayLabels: ["A", "C"],
                                    rays: [50, 135], arcs: [{start:50, end:135, label:"?°"}],
                                    problems: [{ segments: [{ type: 'text', val: 'Angle Measure: &nbsp;' }, { type: 'input', ans: '85' }, { type: 'text', val: '°' }] }]
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
                            id: "m9-w1-mon", name: "Mon", title: "Week 1: Monday",
                            sections: [
                                {
                                    instructionSegments: [{ type: 'text', val: 'Find the total measure of ∠GHI.' }], type: "angle_diagram",
                                    vertex: "H", rayLabels: ["G", "J", "I"],
                                    arcs: [{start: 0, end: 35, label: "35°"}, {start: 35, end: 110, label: "75°"}], rays: [0, 35, 110],
                                    problems: [{ segments: [{ type: 'text', val: 'Total Angle: &nbsp;' }, { type: 'input', ans: '110' }, { type: 'text', val: '°' }] }]
                                },
                                {
                                    instructionSegments: [{ type: 'text', val: 'An angle turns through ' }, { type: 'fraction', n: '1', d: '3' }, { type: 'text', val: ' of a circle. What is its measure in degrees?' }], type: "multiple_choice",
                                    options: [
                                        { text: "90°", correct: false },
                                        { text: "120°", correct: true },
                                        { text: "150°", correct: false },
                                        { text: "180°", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the difference.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("73,156", "38,429", "-") }, { type: 'input', ans: "34727" }] }]
                                }
                            ]
                        },
                        { 
                            id: "m9-w1-tue", name: "Tue", title: "Week 1: Tuesday", 
                            sections: [
                                {
                                    instructionSegments: [{ type: 'text', val: 'The angle ∠OPQ is a straight line. Find the missing measure of ∠OPR.' }], type: "angle_diagram",
                                    vertex: "P", rayLabels: ["O", "R", "Q"],
                                    arcs: [{start: 0, end: 125, label: "125°"}, {start: 125, end: 180, label: "?°", color: "#2c7be5"}], rays: [0, 125, 180],
                                    problems: [{ segments: [{ type: 'text', val: 'Missing Angle: &nbsp;' }, { type: 'input', ans: '55' }, { type: 'text', val: '°' }] }]
                                },
                                {
                                    instruction: "Determine if each statement is True or False.", type: "grid", col1: "True", col2: "False",
                                    rows: [
                                        { segments: [{ type: 'text', val: 'An angle that turns through ' }, { type: 'fraction', n: '1', d: '6' }, { type: 'text', val: ' of a circle is 60°.' }], correct: true },
                                        { segments: [{ type: 'text', val: 'An angle that turns through ' }, { type: 'fraction', n: '1', d: '4' }, { type: 'text', val: ' of a circle is 45°.' }], correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the missing factor.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "7 &times; &nbsp;" }, { type: 'input', ans: "8" }, { type: 'text', val: " = 56" }] }]
                                }
                            ] 
                        },
                        { 
                            id: "m9-w1-wed", name: "Wed", title: "Week 1: Wednesday", 
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: "The measure of ∠STU is 175° and is made up of two smaller angles. One of the smaller angles is 95°. What is the measurement of the other smaller angle?" }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '80' }, { type: 'text', val: '°' }] }]
                                },
                                {
                                    instruction: "An angle measures 180° and is split into two smaller angles. One is 55°. Which equation matches how to find the missing angle?", type: "multiple_choice",
                                    options: [
                                        { text: "90 - 55 = 35", correct: false },
                                        { text: "180 - 55 = 125", correct: true },
                                        { text: "180 + 55 = 235", correct: false },
                                        { text: "55 + 55 = 110", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the product.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: stackedHTML("45", "16", "&times;") }, { type: 'input', ans: "720" }] }]
                                }
                            ] 
                        },
                        {
                            id: "m9-w1-thu", name: "Thu", title: "Week 1: Thursday",
                            sections: [
                                {
                                    instructionSegments: [{ type: 'text', val: 'The total measure of ∠WXZ is 160°. Find the missing measure of ∠YXZ.' }], type: "angle_diagram",
                                    vertex: "X", rayLabels: ["W", "V", "Y", "Z"],
                                    arcs: [{start: 0, end: 65, label: "65°"}, {start: 65, end: 115, label: "50°"}, {start: 115, end: 160, label: "?°", color: "#2c7be5"}], rays: [0, 65, 115, 160],
                                    problems: [{ segments: [{ type: 'text', val: 'Missing Angle: &nbsp;' }, { type: 'input', ans: '45' }, { type: 'text', val: '°' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: "An angle cuts through exactly " }, { type: 'fraction', n: '4', d: '8' }, { type: 'text', val: " of a circle. What is the measurement of the angle in degrees? (Hint: simplify the fraction first!)" }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '180' }, { type: 'text', val: '°' }] }]
                                },
                                { 
                                    instruction: "Enter the unknown number to make the fractions equivalent.", type: "mixed_row", 
                                    problems: [{ segments: [{ type: 'fraction', n: 1, d: 5 }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', ansN: '2', d: 10 }] }]
                                }
                            ]
                        },
                        { 
                            id: "m9-w1-fri", name: "Fri", title: "Week 1: Friday", 
                            sections: [
                                {
                                    instructionSegments: [{ type: 'text', val: 'Find the total measure of ∠KLM. (Hint: The square symbol indicates a right angle!)' }], type: "angle_diagram",
                                    vertex: "L", rayLabels: ["K", "N", "M"],
                                    arcs: [{start: 0, end: 90, isRight: true}, {start: 90, end: 145, label: "55°"}], rays: [0, 90, 145],
                                    problems: [{ segments: [{ type: 'text', val: 'Total Angle: &nbsp;' }, { type: 'input', ans: '145' }, { type: 'text', val: '°' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: "A full circle (360°) is divided perfectly into 8 equal angles. What is the measurement of just one of those angles?" }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '45' }, { type: 'text', val: '°' }] }]
                                },
                                {
                                    instruction: "Decide whether each number is prime or composite.", type: "grid", col1: "Prime", col2: "Composite",
                                    rows: [
                                        { text: "31", correct: true },
                                        { text: "35", correct: false }
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
                            id: "m9-w2-mon", name: "Mon", title: "Week 2: Monday",
                            sections: [
                                {
                                    instructionSegments: [{ type: 'text', val: 'Read the protractor to find the measure of ∠BCD.' }], type: "protractor",
                                    vertex: "C", rayLabels: ["B", "D"],
                                    rays: [0, 65], arcs: [{start:0, end:65, label: "?°"}],
                                    problems: [{ segments: [{ type: 'text', val: 'Angle Measure: &nbsp;' }, { type: 'input', ans: '65' }, { type: 'text', val: '°' }] }]
                                },
                                {
                                    instruction: "The line plot shows the length of jump ropes in yards. What is the difference between the longest rope and the shortest rope?", type: "line_plot",
                                    start: 1, end: 3, denominator: 4, points: [1.25, 1.5, 1.5, 2.25, 2.75], title: "Jump Rope Lengths", xLabel: "Yards",
                                    problems: [{ segments: [{ type: 'text', val: 'Difference: &nbsp;' }, { type: 'mixed_input', ans: 1.5 }, { type: 'text', val: '&nbsp; yards' }] }]
                                }
                            ]
                        },
                        { 
                            id: "m9-w2-tue", name: "Tue", title: "Week 2: Tuesday", 
                            sections: [
                                {
                                    instructionSegments: [{ type: 'text', val: 'A student wants to draw a 125° angle. Ray A is already on the 0° mark. At what number on the protractor should Ray B be drawn?' }], type: "protractor",
                                    vertex: "M", rayLabels: ["A"], rays: [0],
                                    problems: [{ segments: [{ type: 'text', val: 'Draw Ray B at: &nbsp;' }, { type: 'input', ans: '125' }, { type: 'text', val: '°' }] }]
                                },
                                {
                                    instructionSegments: [{ type: 'text', val: 'The line plot shows how many hours students slept. How many students slept for exactly ' }, { type: 'fraction', w: '8', n: '1', d: '2' }, { type: 'text', val: ' hours?' }], type: "line_plot",
                                    start: 7, end: 9, denominator: 2, points: [7.5, 8, 8, 8.5, 8.5, 8.5, 8.5, 9], title: "Hours of Sleep", xLabel: "Hours",
                                    problems: [{ segments: [{ type: 'text', val: 'Number of students: &nbsp;' }, { type: 'input', ans: '4' }] }]
                                }
                            ]
                        },
                        { 
                            id: "m9-w2-wed", name: "Wed", title: "Week 2: Wednesday", 
                            sections: [
                                {
                                    instructionSegments: [{ type: 'text', val: "What is the measure of ∠FGH shown on the protractor? (Hint: It doesn't start at zero!)" }], type: "protractor",
                                    vertex: "G", rayLabels: ["F", "H"],
                                    rays: [20, 105], arcs: [{start:20, end:105, label: "?°"}],
                                    problems: [{ segments: [{ type: 'text', val: 'Angle Measure: &nbsp;' }, { type: 'input', ans: '85' }, { type: 'text', val: '°' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A jeweler measures beads. The longest bead is ' }, { type: 'fraction', n: '6', d: '8' }, { type: 'text', val: ' of an inch. The shortest bead is ' }, { type: 'fraction', n: '2', d: '8' }, { type: 'text', val: ' of an inch. What is the difference in length?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Difference: &nbsp;' }, { type: 'fraction_group', ans: 0.5 }, { type: 'text', val: '&nbsp; inch' }] }]
                                }
                            ] 
                        },
                        {
                            id: "m9-w2-thu", name: "Thu", title: "Week 2: Thursday",
                            sections: [
                                {
                                    instructionSegments: [{ type: 'text', val: 'A right angle (90°) is split into two smaller angles. Find the missing measure of ∠IJK.' }], type: "protractor",
                                    vertex: "J", rayLabels: ["H", "I", "K"],
                                    rays: [0, 45, 90], arcs: [{start:0, end:45, label:"45°"}, {start:45, end:90, isRight: true, color: 'none'}],
                                    problems: [{ segments: [{ type: 'text', val: 'Missing Angle: &nbsp;' }, { type: 'input', ans: '45' }, { type: 'text', val: '°' }] }]
                                },
                                {
                                    instruction: "Use the line plot to determine if each statement is True or False.", type: "line_plot",
                                    start: 0, end: 1, denominator: 4, points: [0.25, 0.5, 0.5, 0.5, 1], title: "String Lengths", xLabel: "Yards",
                                    grid: {
                                        col1: "True", col2: "False",
                                        rows: [
                                            { segments: [{ type: 'text', val: 'The difference between the longest and shortest string is ' }, { type: 'fraction', n: '3', d: '4' }, { type: 'text', val: ' yards.' }], correct: true },
                                            { segments: [{ type: 'text', val: 'Exactly two strings are ' }, { type: 'fraction', n: '1', d: '2' }, { type: 'text', val: ' yard long.' }], correct: false }
                                        ]
                                    }
                                }
                            ]
                        },
                        { 
                            id: "m9-w2-fri", name: "Fri", title: "Week 2: Friday", 
                            sections: [
                                {
                                    instruction: "The line plot shows the amount of rainfall in inches over several days. What is the difference between the most rainfall and the least rainfall?", type: "line_plot",
                                    start: 3, end: 4, denominator: 8, points: [3.125, 3.5, 3.5, 3.875], title: "Daily Rainfall", xLabel: "Inches",
                                    problems: [{ segments: [{ type: 'text', val: 'Difference: &nbsp;' }, { type: 'fraction_group', ans: 0.75 }, { type: 'text', val: '&nbsp; inches' }] }]
                                },
                                {
                                    instructionSegments: [{ type: 'text', val: 'What is the measure of ∠LMN shown on the protractor?' }], type: "protractor",
                                    vertex: "M", rayLabels: ["L", "N"],
                                    rays: [50, 135], arcs: [{start:50, end:135, label:"?°"}],
                                    problems: [{ segments: [{ type: 'text', val: 'Angle Measure: &nbsp;' }, { type: 'input', ans: '85' }, { type: 'text', val: '°' }] }]
                                }
                            ] 
                        }
                    ]
                }
            ]
        }
    }
};