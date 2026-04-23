const module5 = {
    id: "mod-5",
    name: "Place Value Systems",
    weeks: [
        {
            weekNum: 1,
            days: [
                {
                    id: "m5-w1-mon", name: "Mon", title: "Expanded Form & Rounding",
                    sections: [
                        {
                            instruction: "Which expression is equal to 825.914?",
                            type: "multiple_choice",
                            options: [
                                { id: 'opt1', content: [
                                    {type:'term_wrap', items: [{type:'text', val:'8 x 100'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 2 x 10'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 5 x 1'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 9 x 10'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 1 x 100'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 4 x 1,000'}]}
                                ], correct: false },
                                { id: 'opt2', content: [
                                    {type:'term_wrap', items: [{type:'text', val:'8 x 100'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 2 x 10'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 5 x 1'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 9 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 1 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 4 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]}
                                ], correct: true },
                                { id: 'opt3', content: [
                                    {type:'term_wrap', items: [{type:'text', val:'8 x 100'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 2 x 10'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 5 x 1'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 9 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 1 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 4 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]}
                                ], correct: false },
                                { id: 'opt4', content: [
                                    {type:'term_wrap', items: [{type:'text', val:'8 x 10,000'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 2 x 1,000'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 5 x 100'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 9 x 10'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 1 x 1'}]}
                                ], correct: false }
                            ]
                        },
                        {
                            instruction: "Enter the number that 47.382 rounds to when rounded to the nearest hundredth.",
                            type: "mixed_row", 
                            problems: [ { segments: [{ type: 'whole_number', ans: 47.38 }] } ]
                        },
                        {
                            instruction: "Round 6.541 to the nearest tenth.",
                            type: "mixed_row", 
                            problems: [ { segments: [{ type: 'whole_number', ans: 6.5 }] } ]
                        }
                    ]
                },
                {
                    id: "m5-w1-tue", name: "Tue", title: "Expanded Form & Comparisons",
                    sections: [
                        {
                            instruction: "Enter a number equal to the value of the expression:",
                            instructionMath: [
                                {type:'term_wrap', items: [{type:'text', val:'(4 x 1000)'}]},
                                {type:'term_wrap', items: [{type:'text', val:' + (8 x 10)'}]},
                                {type:'term_wrap', items: [{type:'text', val:' + 2 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                {type:'term_wrap', items: [{type:'text', val:' + 7 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]}
                            ],
                            type: "mixed_row", 
                            problems: [ { segments: [{ type: 'whole_number', ans: 4080.207 }] } ]
                        },
                        {
                            instruction: "Select the symbol that correctly completes this comparison.",
                            instructionMath: [
                                {type:'text', val:'0.52 '}, {type:'circle_box'}, {type:'text', val:' 0.052'}
                            ],
                            type: "multiple_choice",
                            options: [
                                { id: 'opt1', content: [{type:'text', val:'>'}], correct: true },
                                { id: 'opt2', content: [{type:'text', val:'<'}], correct: false },
                                { id: 'opt3', content: [{type:'text', val:'='}], correct: false }
                            ]
                        }
                    ]
                },
                {
                    id: "m5-w1-wed", name: "Wed", title: "Expanded Form & Rounding",
                    sections: [
                        {
                            instruction: "Which expression is equal to 6,042.085?",
                            type: "multiple_choice",
                            options: [
                                { id: 'opt1', content: [
                                    {type:'term_wrap', items: [{type:'text', val:'6 x 1000'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 4 x 10'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 2 x 1'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 8 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 5 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]}
                                ], correct: false },
                                { id: 'opt2', content: [
                                    {type:'term_wrap', items: [{type:'text', val:'6 x 1,000,000'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 4 x 10,000'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 2 x 1,000'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 8 x 10'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 5 x 1'}]}
                                ], correct: false },
                                { id: 'opt3', content: [
                                    {type:'term_wrap', items: [{type:'text', val:'6 x 1000'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 4 x 10'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 2 x 1'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 8 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 5 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]}
                                ], correct: true },
                                { id: 'opt4', content: [
                                    {type:'term_wrap', items: [{type:'text', val:'6 x 1000'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 4 x 100'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 2 x 10'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 8 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 5 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]}
                                ], correct: false }
                            ]
                        },
                        {
                            instruction: "What is 308.451 rounded to the nearest tenth? Enter your answer in the box.",
                            type: "mixed_row", 
                            problems: [ { segments: [{ type: 'whole_number', ans: 308.5 }] } ]
                        },
                        {
                            instruction: "Enter the value of 92.17 rounded to the nearest tenth.",
                            type: "mixed_row", 
                            problems: [ { segments: [{ type: 'whole_number', ans: 92.2 }] } ]
                        }
                    ]
                },
                {
                    id: "m5-w1-thu", name: "Thu", title: "Comparisons & Expanded Form",
                    sections: [
                        {
                            instruction: "Select all true comparisons.",
                            type: "multiple_choice",
                            select_all: true,
                            options: [
                                { id: 'opt1', content: [{type:'text', val:'45.602 > 45.62'}], correct: false },
                                { id: 'opt2', content: [{type:'text', val:'7.080 = 7.08'}], correct: true },
                                { id: 'opt3', content: [{type:'text', val:'19.34 < 19.341'}], correct: true },
                                { id: 'opt4', content: [{type:'text', val:'0.09 > 0.1'}], correct: false }
                            ]
                        },
                        {
                            instruction: "Enter a number equal to the value of the expression:",
                            instructionMath: [
                                {type:'term_wrap', items: [{type:'text', val:'(9 x 100)'}]},
                                {type:'term_wrap', items: [{type:'text', val:' + (1 x 1)'}]},
                                {type:'term_wrap', items: [{type:'text', val:' + 5 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                {type:'term_wrap', items: [{type:'text', val:' + 3 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]}
                            ],
                            type: "mixed_row", 
                            problems: [ { segments: [{ type: 'whole_number', ans: 901.53 }] } ]
                        }
                    ]
                },
                {
                    id: "m5-w1-fri", name: "Fri", title: "Weekly Quiz",
                    sections: [
                        {
                            instruction: "Round 7.391 to the nearest hundredth.",
                            type: "mixed_row", 
                            problems: [ { segments: [{ type: 'whole_number', ans: 7.39 }] } ]
                        },
                        {
                            instruction: "Enter the number that 0.384 rounds to when rounded to the nearest tenth.",
                            type: "mixed_row", 
                            problems: [ { segments: [{ type: 'whole_number', ans: 0.4 }] } ]
                        },
                        {
                            instruction: "Which expression is equal to 107.493?",
                            type: "multiple_choice",
                            options: [
                                { id: 'opt1', content: [
                                    {type:'term_wrap', items: [{type:'text', val:'1 x 100'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 7 x 1'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 4 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 9 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 3 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]}
                                ], correct: true },
                                { id: 'opt2', content: [
                                    {type:'term_wrap', items: [{type:'text', val:'1 x 100'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 7 x 10'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 4 x ('}, {type:'fraction', n:'1', d:'1'}, {type:'text', val:')'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 9 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 3 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]}
                                ], correct: false },
                                { id: 'opt3', content: [
                                    {type:'term_wrap', items: [{type:'text', val:'1 x 100'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 7 x 1'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 4 x 10'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 9 x 100'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 3 x 1,000'}]}
                                ], correct: false },
                                { id: 'opt4', content: [
                                    {type:'term_wrap', items: [{type:'text', val:'1 x 100'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 7 x 10'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 4 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 9 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 3 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]}
                                ], correct: false }
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
                    id: "m5-w2-mon", name: "Mon", title: "Comparisons & Rounding",
                    sections: [
                        {
                            instruction: "Select all true comparisons.",
                            type: "multiple_choice",
                            select_all: true,
                            options: [
                                { id: 'opt1', content: [{type:'text', val:'304.15 > 304.05'}], correct: true },
                                { id: 'opt2', content: [{type:'text', val:'22.9 > 22.901'}], correct: false },
                                { id: 'opt3', content: [{type:'text', val:'0.88 < 0.880'}], correct: false },
                                { id: 'opt4', content: [{type:'text', val:'5.01 = 5.010'}], correct: true }
                            ]
                        },
                        {
                            instruction: "What is 15.2846 rounded to the nearest thousandth?",
                            type: "mixed_row", 
                            problems: [ { segments: [{ type: 'whole_number', ans: 15.285 }] } ]
                        },
                        {
                            instruction: "Round 19.063 to the nearest hundredth.",
                            type: "mixed_row", 
                            problems: [ { segments: [{ type: 'whole_number', ans: 19.06 }] } ]
                        }
                    ]
                },
                {
                    id: "m5-w2-tue", name: "Tue", title: "Reasoning & Expanded Form",
                    sections: [
                        {
                            instruction: "Select all the decimals below that are greater than 28.3 and less than 28.4.",
                            type: "multiple_choice",
                            select_all: true,
                            options: [
                                { id: 'opt1', content: [{type:'text', val:'28.35'}], correct: true },
                                { id: 'opt2', content: [{type:'text', val:'28.04'}], correct: false },
                                { id: 'opt3', content: [{type:'text', val:'28.391'}], correct: true },
                                { id: 'opt4', content: [{type:'text', val:'28.41'}], correct: false },
                                { id: 'opt5', content: [{type:'text', val:'28.30'}], correct: false }
                            ]
                        },
                        {
                            instruction: "Enter a number equal to the value of the expression:",
                            instructionMath: [
                                {type:'term_wrap', items: [{type:'text', val:'(5 x 10)'}]},
                                {type:'term_wrap', items: [{type:'text', val:' + 6 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                {type:'term_wrap', items: [{type:'text', val:' + 2 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]}
                            ],
                            type: "mixed_row", 
                            problems: [ { segments: [{ type: 'whole_number', ans: 50.602 }] } ]
                        }
                    ]
                },
                {
                    id: "m5-w2-wed", name: "Wed", title: "Comparisons & Expanded Form",
                    sections: [
                        {
                            instruction: "Select all true comparisons.",
                            type: "multiple_choice",
                            select_all: true,
                            options: [
                                { id: 'opt1', content: [{type:'text', val:'14.5 = 14.50'}], correct: true },
                                { id: 'opt2', content: [{type:'text', val:'6.07 < 6.007'}], correct: false },
                                { id: 'opt3', content: [{type:'text', val:'9.102 > 9.12'}], correct: false },
                                { id: 'opt4', content: [{type:'text', val:'1.23 > 1.203'}], correct: true }
                            ]
                        },
                        {
                            instruction: "Which expression is equal to 80.037?",
                            type: "multiple_choice",
                            options: [
                                { id: 'opt1', content: [
                                    {type:'term_wrap', items: [{type:'text', val:'8 x 10'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 3 x ('}, {type:'fraction', n:'1', d:'10'}, {type:'text', val:')'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 7 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]}
                                ], correct: false },
                                { id: 'opt2', content: [
                                    {type:'term_wrap', items: [{type:'text', val:'8 x 10'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 3 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 7 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]}
                                ], correct: true },
                                { id: 'opt3', content: [
                                    {type:'term_wrap', items: [{type:'text', val:'8 x 100'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 3 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 7 x ('}, {type:'fraction', n:'1', d:'1000'}, {type:'text', val:')'}]}
                                ], correct: false },
                                { id: 'opt4', content: [
                                    {type:'term_wrap', items: [{type:'text', val:'8 x 100'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 3 x 10'}]},
                                    {type:'term_wrap', items: [{type:'text', val:' + 7 x 1'}]}
                                ], correct: false }
                            ]
                        }
                    ]
                },
                {
                    id: "m5-w2-thu", name: "Thu", title: "Reasoning & Rounding",
                    sections: [
                        {
                            instruction: "Select all the decimals below that are greater than 105.6 and less than 105.7.",
                            type: "multiple_choice",
                            select_all: true,
                            options: [
                                { id: 'opt1', content: [{type:'text', val:'105.62'}], correct: true },
                                { id: 'opt2', content: [{type:'text', val:'105.71'}], correct: false },
                                { id: 'opt3', content: [{type:'text', val:'105.608'}], correct: true },
                                { id: 'opt4', content: [{type:'text', val:'105.06'}], correct: false },
                                { id: 'opt5', content: [{type:'text', val:'105.70'}], correct: false }
                            ]
                        },
                        {
                            instruction: "Enter the value of 9.996 rounded to the nearest hundredth.",
                            type: "mixed_row", 
                            problems: [ { segments: [{ type: 'whole_number', ans: 10 }] } ]
                        },
                        {
                            instruction: "Round 2.45 to the nearest tenth.",
                            type: "mixed_row", 
                            problems: [ { segments: [{ type: 'whole_number', ans: 2.5 }] } ]
                        }
                    ]
                },
                {
                    id: "m5-w2-fri", name: "Fri", title: "Module Quiz",
                    sections: [
                        {
                            instruction: "Select all the decimals below that are greater than 9.8 and less than 9.9.",
                            type: "multiple_choice",
                            select_all: true,
                            options: [
                                { id: 'opt1', content: [{type:'text', val:'9.85'}], correct: true },
                                { id: 'opt2', content: [{type:'text', val:'9.805'}], correct: true },
                                { id: 'opt3', content: [{type:'text', val:'9.91'}], correct: false },
                                { id: 'opt4', content: [{type:'text', val:'9.80'}], correct: false },
                                { id: 'opt5', content: [{type:'text', val:'9.89'}], correct: true }
                            ]
                        },
                        {
                            instruction: "Enter a number equal to the value of the expression:",
                            instructionMath: [
                                {type:'term_wrap', items: [{type:'text', val:'(3 x 100)'}]},
                                {type:'term_wrap', items: [{type:'text', val:' + (2 x 10)'}]},
                                {type:'term_wrap', items: [{type:'text', val:' + 4 x ('}, {type:'fraction', n:'1', d:'100'}, {type:'text', val:')'}]}
                            ],
                            type: "mixed_row", 
                            problems: [ { segments: [{ type: 'whole_number', ans: 320.04 }] } ]
                        }
                    ]
                }
            ]
        }
    ]
};