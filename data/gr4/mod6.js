// --- MODULE 6 DATA (INLINE FOR TESTING) ---
const module6 = {
    id: "mod-6", 
    name: "Four Operations: Interpret, Represent, and Solve", 
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
};