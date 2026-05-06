// --- MODULE 6 DATA ---
const module6 = {
    id: "mod-6",
    name: "Four Ops: Interpret, Represent, & Solve",
    
    helperHubs: {
        week1: {
            title: "★ Helper Hub: Solving Word Problems Like a Pro",
            content: `
                <div style="font-size:15px; line-height: 1.3;">
                    <p style="margin-top:0; margin-bottom:10px;">Word problems can look tricky, but you can break them down with these two powerful keys!</p>
                    
                    <div style="display:flex; gap:15px; align-items:flex-start; break-inside: avoid;">
                        <div style="flex:1; padding:15px; border:2px solid #ccc; border-radius:10px; background:#fff;">
                            <strong style="font-size:16px; color:#2c7be5;">1. Comparison Phrases</strong><br><br>
                            When a problem says <strong>"4 times as many"</strong>, it means you multiply the smaller group by 4 to find the larger group!<br><br>
                            <em>Example:</em> A shop makes 10 bikes. A factory makes 4 times as many. <br>
                            <div style="text-align:center; font-family:monospace; font-size:18px; font-weight:bold; margin-top:5px; color:#2c7be5;">10 &times; 4 = 40 bikes</div>
                        </div>
                        <div style="flex:1; padding:15px; border:2px solid #ccc; border-radius:10px; background:#fff;">
                            <strong style="font-size:16px; color:#27ae60;">2. Filter Out Extra Info</strong><br><br>
                            Sometimes problems give you numbers you don't even need! <br><br>
                            Always ask yourself: <em>"What is the question actually asking me to find?"</em> and cross out any numbers that don't help you answer that specific question!
                        </div>
                    </div>
                </div>`
        },
        week2: {
            title: "★ Helper Hub: Multi-Step Problems",
            content: `
                <div style="font-size:15px; line-height: 1.3;">
                    <p style="margin-top:0; margin-bottom:10px;">Don't let a math problem trick you into stopping early! Many word problems require two or more steps to find the final answer.</p>
                    <div class="print-stack" style="display:flex; gap:15px; align-items:stretch; break-inside: avoid;">
                    <div style="display:flex; gap:15px; align-items:flex-start; break-inside: avoid;">
                        <div style="flex:1; padding:15px; border:2px solid #ccc; border-radius:10px; background:#fff; text-align:center;">
                            <strong style="font-size:16px; color:#e74c3c;">The Hidden Middle Step</strong><br><br>
                            <em>Example:</em> "A factory shipped 400 boxes on Monday. On Tuesday, they shipped 2 times as many. How many boxes did they ship in total?"<br><br>
                            <strong>Step 1:</strong> Find Tuesday! (2 &times; 400 = 800)<br>
                            <strong>Step 2:</strong> Find the Total! (400 + 800 = 1,200)<br><br>
                            <span style="color:#e74c3c; font-weight:bold;">Don't forget Step 2!</span>
                        </div>
                        <br />
                        <div style="flex:1; padding:15px; border:2px solid #ccc; border-radius:10px; background:#fff; text-align:center;">
                            <strong style="font-size:16px; color:#8e44ad;">Working Backwards</strong><br><br>
                            <em>Example:</em> "A store has 200 shirts left after selling 3 times that amount. What did they start with?"<br><br>
                            <strong>Step 1:</strong> Find what was sold! (3 &times; 200 = 600 sold)<br>
                            <strong>Step 2:</strong> Find the Starting Total! (200 left + 600 sold = 800)<br><br>
                            <span style="color:#8e44ad; font-weight:bold;">They started with 800!</span>
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
                            id: "m6-w1-mon", name: "Mon", title: "Week 1: Monday",
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A factory produces 4 times as many bicycles as a small shop. The shop produces 125 bicycles. How many bicycles does the factory produce in total?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '500' }, { type: 'text', val: ' bicycles' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'Mrs. Smith pays $45 each month for her phone bill. She pays for 6 months. What amount of money, in dollars, does she pay?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: $ ' }, { type: 'input', ans: '270' }] }]
                                },
                                {
                                    instruction: "Select all the equivalent fractions in the table below.", type: "matrix_match",
                                    colHeaders: [{ type: 'fraction', n: 2, d: 4 }, { type: 'fraction', n: 3, d: 9 }, { type: 'fraction', n: 2, d: 8 }],
                                    rows: [
                                        { label: { type: 'fraction', n: 1, d: 2 }, matches: [true, false, false] },
                                        { label: { type: 'fraction', n: 1, d: 4 }, matches: [false, false, true] },
                                        { label: { type: 'fraction', n: 1, d: 3 }, matches: [false, true, false] }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m6-w1-tue", name: "Tue", title: "Week 1: Tuesday", 
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'There are 5 times as many students on a bus as in a car. The car has 14 students. Enter the number of students on the bus.' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '70' }, { type: 'text', val: ' students' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A baker makes 8 trays of muffins. Each tray holds 24 muffins. How many muffins does the baker make in all?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '192' }, { type: 'text', val: ' muffins' }] }]
                                },
                                {
                                    instruction: "Determine whether each comparison is true or false.", type: "grid", col1: "True", col2: "False",
                                    rows: [
                                        { segments: [{ type: 'text', val: '0.4 = ' }, { type: 'fraction', n: '4', d: '100' }], correct: false },
                                        { segments: [{ type: 'text', val: '0.8 > 0.08' }], correct: true }
                                    ]
                                }
                            ] 
                        },
                        { 
                            id: "m6-w1-wed", name: "Wed", title: "Week 1: Wednesday", 
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A library has 3,450 fiction books and 2,195 non-fiction books. How many books does the library have in total?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '5645' }, { type: 'text', val: ' books' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A farm has 852 chickens. They sell 238 of them. How many chickens are left on the farm?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '614' }, { type: 'text', val: ' chickens' }] }]
                                },
                                {
                                    instruction: "Enter the unknown numerator.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'fraction', n: '3', d: '10' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '45', d: '100' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '100', ans: '75' }] }]
                                }
                            ] 
                        },
                        {
                            id: "m6-w1-thu", name: "Thu", title: "Week 1: Thursday",
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: "A team's score was 3 times as much as their opponent's score. The opponent's score was 115. What was the team's score?" }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '345' }, { type: 'text', val: ' points' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'Sara uses beads to make a necklace. She uses a total of 210 beads. There are 85 blue beads and the rest are green. How many green beads are there?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '125' }, { type: 'text', val: ' green beads' }] }]
                                },
                                { 
                                    instruction: "What is the value of point Q?", type: "number_line", start: 0, end: 1, step: 0.1, target: 0.3, label: "Q", ans: "0.3" 
                                }
                            ]
                        },
                        { 
                            id: "m6-w1-fri", name: "Fri", title: "Week 1: Friday", 
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'David earns $32 each week for walking dogs. How much money will he earn in 4 weeks?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: $ ' }, { type: 'input', ans: '128' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A train travels 458 miles on Monday and 394 miles on Tuesday. How many miles did the train travel in all?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '852' }, { type: 'text', val: ' miles' }] }]
                                },
                                {
                                    instruction: "Determine whether each equation or comparison is true or false.", type: "grid", col1: "True", col2: "False",
                                    rows: [
                                        { segments: [{ type: 'fraction', n: '4', d: '10' }, { type: 'text', val: ' = 0.4' }], correct: true },
                                        { segments: [{ type: 'text', val: '0.7 < 0.65' }], correct: false }
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
                            id: "m6-w2-mon", name: "Mon", title: "Week 2: Monday",
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A teacher has 112 markers. She places them equally into 4 bins. How many markers does she place in each bin?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '28' }, { type: 'text', val: ' markers' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A desk is 48 inches long. A book is 8 inches long. How many times as long as the book is the desk?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '6' }, { type: 'text', val: ' times as long' }] }]
                                },
                                {
                                    instruction: "Round the number to the requested place value.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "Round 45,812 to the nearest thousand: &nbsp;" }, { type: 'input', ans: "46000" }] }]
                                }
                            ]
                        },
                        { 
                            id: "m6-w2-tue", name: "Tue", title: "Week 2: Tuesday", 
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'Maria scores 4 times as many points as Leo in a game. Maria scores 48 points. How many points does Leo score?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '12' }, { type: 'text', val: ' points' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A baker has 135 cookies. He puts them into boxes of 5. How many boxes does he fill?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '27' }, { type: 'text', val: ' boxes' }] }]
                                },
                                {
                                    instruction: "Select True or False for each comparison.", type: "grid", col1: "True", col2: "False",
                                    rows: [
                                        { segments: [{ type: 'text', val: '500 + 40 + 2 = 542' }], correct: true },
                                        { segments: [{ type: 'text', val: '3 thousands + 5 tens > 3050' }], correct: false }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m6-w2-wed", name: "Wed", title: "Week 2: Wednesday", 
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A store has 200 shirts left after selling 3 times that amount. What is the total number of shirts the store started with before any were sold?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '800' }, { type: 'text', val: ' shirts' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A snake is 45 centimeters long. A worm is 9 centimeters long. How many times as long as the worm is the snake?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '5' }, { type: 'text', val: ' times as long' }] }]
                                },
                                {
                                    instruction: "What digit can you put in the box to make the comparison true?", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "64,_12 &nbsp; < &nbsp; 64,312 &nbsp;&nbsp;&nbsp;&nbsp; Missing digit: " }, { type: 'input', ans: "0|1|2" }] }]
                                }
                            ] 
                        },
                        {
                            id: "m6-w2-thu", name: "Thu", title: "Week 2: Thursday",
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'John has 6 times as many cards as Sam. John has 54 cards. How many cards does Sam have?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '9' }, { type: 'text', val: ' cards' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A factory shipped 400 boxes on Monday. On Tuesday, they shipped 2 times as many boxes as they did on Monday. How many boxes did they ship in total over the two days?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '1200' }, { type: 'text', val: ' boxes' }] }]
                                },
                                {
                                    instruction: "When rounding to the nearest ten thousand, which numbers round to 60,000?", type: "grid", col1: "Yes", col2: "No",
                                    rows: [
                                        { text: "59,500", correct: true },
                                        { text: "65,100", correct: false },
                                        { text: "60,200", correct: true }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m6-w2-fri", name: "Fri", title: "Week 2: Friday", 
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'There are 150 chairs arranged equally into 6 rows. How many chairs are in each row?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '25' }, { type: 'text', val: ' chairs' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A baker makes 120 loaves of bread. He sells 45 loaves in the morning and 38 loaves in the afternoon. How many loaves are left?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '37' }, { type: 'text', val: ' loaves' }] }]
                                },
                                {
                                    instruction: "Round the number to the requested place value.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "Round 842,599 to the nearest ten thousand: &nbsp;" }, { type: 'input', ans: "840000" }] }]
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
                            id: "m6-w1-mon", name: "Mon", title: "Week 1: Monday",
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A company produces 3 times as many laptops as a local workshop. The workshop produces 140 laptops. How many laptops does the company produce in total?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '420' }, { type: 'text', val: ' laptops' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'Mr. Jones pays $35 each month for his internet bill. He pays for 8 months. What amount of money, in dollars, does he pay?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: $ ' }, { type: 'input', ans: '280' }] }]
                                },
                                {
                                    instruction: "Select all the equivalent fractions in the table below.", type: "matrix_match",
                                    colHeaders: [{ type: 'fraction', n: 3, d: 6 }, { type: 'fraction', n: 2, d: 6 }, { type: 'fraction', n: 3, d: 12 }],
                                    rows: [
                                        { label: { type: 'fraction', n: 1, d: 2 }, matches: [true, false, false] },
                                        { label: { type: 'fraction', n: 1, d: 4 }, matches: [false, false, true] },
                                        { label: { type: 'fraction', n: 1, d: 3 }, matches: [false, true, false] }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m6-w1-tue", name: "Tue", title: "Week 1: Tuesday", 
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'There are 4 times as many books on a shelf as in a box. The box has 18 books. Enter the number of books on the shelf.' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '72' }, { type: 'text', val: ' books' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A gardener plants 6 rows of tomatoes. Each row holds 32 tomato plants. How many tomato plants does the gardener plant in all?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '192' }, { type: 'text', val: ' plants' }] }]
                                },
                                {
                                    instruction: "Determine whether each comparison is true or false.", type: "grid", col1: "True", col2: "False",
                                    rows: [
                                        { segments: [{ type: 'text', val: '0.7 = ' }, { type: 'fraction', n: '7', d: '100' }], correct: false },
                                        { segments: [{ type: 'text', val: '0.5 > 0.05' }], correct: true }
                                    ]
                                }
                            ] 
                        },
                        { 
                            id: "m6-w1-wed", name: "Wed", title: "Week 1: Wednesday", 
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A warehouse has 4,260 boxes of shoes and 1,835 boxes of boots. How many boxes does the warehouse have in total?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '6095' }, { type: 'text', val: ' boxes' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A store has 743 coats. They sell 265 of them. How many coats are left in the store?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '478' }, { type: 'text', val: ' coats' }] }]
                                },
                                {
                                    instruction: "Enter the unknown numerator.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'fraction', n: '4', d: '10' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '25', d: '100' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '100', ans: '65' }] }]
                                }
                            ] 
                        },
                        {
                            id: "m6-w1-thu", name: "Thu", title: "Week 1: Thursday",
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: "A runner's distance was 2 times as much as her partner's distance. The partner's distance was 135 blocks. What was the runner's distance?" }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '270' }, { type: 'text', val: ' blocks' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'Mark uses blocks to build a tower. He uses a total of 250 blocks. There are 95 red blocks and the rest are yellow. How many yellow blocks are there?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '155' }, { type: 'text', val: ' yellow blocks' }] }]
                                },
                                { 
                                    instruction: "What is the value of point P?", type: "number_line", start: 0, end: 1, step: 0.1, target: 0.6, label: "P", ans: "0.6" 
                                }
                            ]
                        },
                        { 
                            id: "m6-w1-fri", name: "Fri", title: "Week 1: Friday", 
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'Anna earns $24 each week for tutoring. How much money will she earn in 5 weeks?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: $ ' }, { type: 'input', ans: '120' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A plane flies 536 miles on Thursday and 287 miles on Friday. How many miles did the plane fly in all?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '823' }, { type: 'text', val: ' miles' }] }]
                                },
                                {
                                    instruction: "Determine whether each equation or comparison is true or false.", type: "grid", col1: "True", col2: "False",
                                    rows: [
                                        { segments: [{ type: 'fraction', n: '6', d: '10' }, { type: 'text', val: ' = 0.6' }], correct: true },
                                        { segments: [{ type: 'text', val: '0.5 < 0.45' }], correct: false }
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
                            id: "m6-w2-mon", name: "Mon", title: "Week 2: Monday",
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A coach has 135 tennis balls. She places them equally into 5 baskets. How many tennis balls does she place in each basket?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '27' }, { type: 'text', val: ' tennis balls' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A flagpole is 35 feet tall. A fence is 7 feet tall. How many times as tall as the fence is the flagpole?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '5' }, { type: 'text', val: ' times as tall' }] }]
                                },
                                {
                                    instruction: "Round the number to the requested place value.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "Round 34,275 to the nearest thousand: &nbsp;" }, { type: 'input', ans: "34000" }] }]
                                }
                            ]
                        },
                        { 
                            id: "m6-w2-tue", name: "Tue", title: "Week 2: Tuesday", 
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'Sarah picks 3 times as many apples as Tom in an orchard. Sarah picks 45 apples. How many apples does Tom pick?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '15' }, { type: 'text', val: ' apples' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A florist has 144 roses. He puts them into bouquets of 6. How many bouquets does he fill?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '24' }, { type: 'text', val: ' bouquets' }] }]
                                },
                                {
                                    instruction: "Select True or False for each comparison.", type: "grid", col1: "True", col2: "False",
                                    rows: [
                                        { segments: [{ type: 'text', val: '600 + 70 + 3 = 673' }], correct: true },
                                        { segments: [{ type: 'text', val: '4 thousands + 8 tens > 4080' }], correct: false }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m6-w2-wed", name: "Wed", title: "Week 2: Wednesday", 
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A bakery has 150 muffins left after selling 4 times that amount. What is the total number of muffins the bakery started with before any were sold?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '750' }, { type: 'text', val: ' muffins' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A rope is 56 inches long. A string is 8 inches long. How many times as long as the string is the rope?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '7' }, { type: 'text', val: ' times as long' }] }]
                                },
                                {
                                    instruction: "What digit can you put in the box to make the comparison true?", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "37,_45 &nbsp; < &nbsp; 37,245 &nbsp;&nbsp;&nbsp;&nbsp; Missing digit: " }, { type: 'input', ans: "0|1" }] }]
                                }
                            ] 
                        },
                        {
                            id: "m6-w2-thu", name: "Thu", title: "Week 2: Thursday",
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'Chloe has 7 times as many stamps as Dan. Chloe has 63 stamps. How many stamps does Dan have?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '9' }, { type: 'text', val: ' stamps' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A fruit stand sold 200 crates on Friday. On Saturday, they sold 3 times as many crates as they did on Friday. How many crates did they sell in total over the two days?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '800' }, { type: 'text', val: ' crates' }] }]
                                },
                                {
                                    instruction: "When rounding to the nearest ten thousand, which numbers round to 40,000?", type: "grid", col1: "Yes", col2: "No",
                                    rows: [
                                        { text: "39,600", correct: true },
                                        { text: "45,200", correct: false },
                                        { text: "40,300", correct: true }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m6-w2-fri", name: "Fri", title: "Week 2: Friday", 
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'There are 160 books arranged equally into 5 stacks. How many books are in each stack?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '32' }, { type: 'text', val: ' books' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A vendor has 150 balloons. She sells 62 balloons in the morning and 43 balloons in the afternoon. How many balloons are left?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '45' }, { type: 'text', val: ' balloons' }] }]
                                },
                                {
                                    instruction: "Round the number to the requested place value.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "Round 631,488 to the nearest ten thousand: &nbsp;" }, { type: 'input', ans: "630000" }] }]
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
                            id: "m6-w1-mon", name: "Mon", title: "Week 1: Monday",
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A bakery produces 5 times as many loaves of bread as a small cafe. The cafe produces 110 loaves. How many loaves does the bakery produce in total?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '550' }, { type: 'text', val: ' loaves' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'Ms. Davis pays $55 each month for her gym membership. She pays for 4 months. What amount of money, in dollars, does she pay?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: $ ' }, { type: 'input', ans: '220' }] }]
                                },
                                {
                                    instruction: "Select all the equivalent fractions in the table below.", type: "matrix_match",
                                    colHeaders: [{ type: 'fraction', n: 4, d: 8 }, { type: 'fraction', n: 4, d: 12 }, { type: 'fraction', n: 2, d: 10 }],
                                    rows: [
                                        { label: { type: 'fraction', n: 1, d: 2 }, matches: [true, false, false] },
                                        { label: { type: 'fraction', n: 1, d: 3 }, matches: [false, true, false] },
                                        { label: { type: 'fraction', n: 1, d: 5 }, matches: [false, false, true] }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m6-w1-tue", name: "Tue", title: "Week 1: Tuesday", 
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'There are 6 times as many apples in a crate as in a basket. The basket has 15 apples. Enter the number of apples in the crate.' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '90' }, { type: 'text', val: ' apples' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A theater has 7 rows of seats. Each row holds 28 seats. How many seats does the theater have in all?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '196' }, { type: 'text', val: ' seats' }] }]
                                },
                                {
                                    instruction: "Determine whether each comparison is true or false.", type: "grid", col1: "True", col2: "False",
                                    rows: [
                                        { segments: [{ type: 'text', val: '0.3 = ' }, { type: 'fraction', n: '3', d: '100' }], correct: false },
                                        { segments: [{ type: 'text', val: '0.9 > 0.09' }], correct: true }
                                    ]
                                }
                            ] 
                        },
                        { 
                            id: "m6-w1-wed", name: "Wed", title: "Week 1: Wednesday", 
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A concert hall sold 2,580 adult tickets and 1,645 child tickets. How many tickets did the concert hall sell in total?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '4225' }, { type: 'text', val: ' tickets' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A school has 921 students. On Friday, 148 of them are on a field trip. How many students are left at the school?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '773' }, { type: 'text', val: ' students' }] }]
                                },
                                {
                                    instruction: "Enter the unknown numerator.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'fraction', n: '5', d: '10' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '34', d: '100' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '100', ans: '84' }] }]
                                }
                            ] 
                        },
                        {
                            id: "m6-w1-thu", name: "Thu", title: "Week 1: Thursday",
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: "A collector's coin total was 4 times as much as his brother's coin total. The brother's coin total was 105 coins. What was the collector's coin total?" }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '420' }, { type: 'text', val: ' coins' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'Elena uses flowers to make a bouquet. She uses a total of 180 flowers. There are 65 roses and the rest are daisies. How many daisies are there?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '115' }, { type: 'text', val: ' daisies' }] }]
                                },
                                { 
                                    instruction: "What is the value of point R?", type: "number_line", start: 0, end: 1, step: 0.1, target: 0.7, label: "R", ans: "0.7" 
                                }
                            ]
                        },
                        { 
                            id: "m6-w1-fri", name: "Fri", title: "Week 1: Friday", 
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'Kevin earns $35 each week for mowing lawns. How much money will he earn in 4 weeks?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: $ ' }, { type: 'input', ans: '140' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A ship sails 364 miles on Wednesday and 459 miles on Thursday. How many miles did the ship sail in all?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '823' }, { type: 'text', val: ' miles' }] }]
                                },
                                {
                                    instruction: "Determine whether each equation or comparison is true or false.", type: "grid", col1: "True", col2: "False",
                                    rows: [
                                        { segments: [{ type: 'fraction', n: '8', d: '10' }, { type: 'text', val: ' = 0.8' }], correct: true },
                                        { segments: [{ type: 'text', val: '0.3 < 0.25' }], correct: false }
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
                            id: "m6-w2-mon", name: "Mon", title: "Week 2: Monday",
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A librarian has 144 books. She places them equally onto 6 shelves. How many books does she place on each shelf?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '24' }, { type: 'text', val: ' books' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A ribbon is 54 centimeters long. A clip is 6 centimeters long. How many times as long as the clip is the ribbon?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '9' }, { type: 'text', val: ' times as long' }] }]
                                },
                                {
                                    instruction: "Round the number to the requested place value.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "Round 56,641 to the nearest thousand: &nbsp;" }, { type: 'input', ans: "57000" }] }]
                                }
                            ]
                        },
                        { 
                            id: "m6-w2-tue", name: "Tue", title: "Week 2: Tuesday", 
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'James reads 5 times as many pages as Lily. James reads 60 pages. How many pages does Lily read?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '12' }, { type: 'text', val: ' pages' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A farmer has 112 eggs. She puts them into cartons of 4. How many cartons does she fill?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '28' }, { type: 'text', val: ' cartons' }] }]
                                },
                                {
                                    instruction: "Select True or False for each comparison.", type: "grid", col1: "True", col2: "False",
                                    rows: [
                                        { segments: [{ type: 'text', val: '800 + 20 + 5 = 825' }], correct: true },
                                        { segments: [{ type: 'text', val: '2 thousands + 6 tens > 2060' }], correct: false }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m6-w2-wed", name: "Wed", title: "Week 2: Wednesday", 
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A car dealership has 120 cars left after selling 2 times that amount. What is the total number of cars the dealership started with before any were sold?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '360' }, { type: 'text', val: ' cars' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A branch is 42 inches long. A leaf is 7 inches long. How many times as long as the leaf is the branch?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '6' }, { type: 'text', val: ' times as long' }] }]
                                },
                                {
                                    instruction: "What digit can you put in the box to make the comparison true?", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "82,_59 &nbsp; < &nbsp; 82,459 &nbsp;&nbsp;&nbsp;&nbsp; Missing digit: " }, { type: 'input', ans: "0|1|2|3" }] }]
                                }
                            ] 
                        },
                        {
                            id: "m6-w2-thu", name: "Thu", title: "Week 2: Thursday",
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'Ryan has 8 times as many coins as Maya. Ryan has 48 coins. How many coins does Maya have?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '6' }, { type: 'text', val: ' coins' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A printer made 300 posters on Wednesday. On Thursday, it made 2 times as many posters as it did on Wednesday. How many posters did it make in total over the two days?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '900' }, { type: 'text', val: ' posters' }] }]
                                },
                                {
                                    instruction: "When rounding to the nearest ten thousand, which numbers round to 70,000?", type: "grid", col1: "Yes", col2: "No",
                                    rows: [
                                        { text: "69,500", correct: true },
                                        { text: "75,300", correct: false },
                                        { text: "70,100", correct: true }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m6-w2-fri", name: "Fri", title: "Week 2: Friday", 
                            sections: [
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'There are 240 students arranged equally into 8 rows for graduation. How many students are in each row?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '30' }, { type: 'text', val: ' students' }] }]
                                },
                                {
                                    instruction: "Solve the word problem:", type: "word_problem",
                                    textSegments: [{ type: 'text', val: 'A bakery makes 150 croissants. They sell 62 in the morning and 45 in the afternoon. How many croissants are left?' }],
                                    problems: [{ segments: [{ type: 'text', val: 'Answer: &nbsp;' }, { type: 'input', ans: '43' }, { type: 'text', val: ' croissants' }] }]
                                },
                                {
                                    instruction: "Round the number to the requested place value.", type: "mixed_row",
                                    problems: [{ segments: [{ type: 'text', val: "Round 753,912 to the nearest ten thousand: &nbsp;" }, { type: 'input', ans: "750000" }] }]
                                }
                            ] 
                        }
                    ]
                }
            ]
        }
    }
};