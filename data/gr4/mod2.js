const module2 = {
    id: "mod-2",
    name: "Fractions and Decimal Notation",
    weeks: [
        {
            weekNum: 1,
            days: [
                {
                    id: "m2-w1-mon", name: "Mon", title: "Week 1: Monday",
                    sections: [
                        {
                            instruction: "What is the value of point N?",
                            type: "number_line",
                            start: 0, end: 1, step: 0.1, target: 0.4, label: "N",
                            ans: "0.4"
                        },
                        {
                            instruction: "Determine whether each comparison is true or false.",
                            type: "grid",
                            rows: [
                                { segments: [{ type: 'fraction', n: '3', d: '10' }, { type: 'text', val: ' > ' }, { type: 'fraction', n: '30', d: '100' }], correct: false },
                                { segments: [{ type: 'text', val: '0.4 = ' }, { type: 'fraction', n: '4', d: '10' }], correct: true },
                                { segments: [{ type: 'text', val: '0.2 > 0.02' }], correct: true }
                            ]
                        }
                    ]
                },
                {
                    id: "m2-w1-tue", name: "Tue", title: "Week 1: Tuesday",
                    sections: [
                        {
                            instruction: "Enter the unknown numerator.",
                            type: "mixed_row",
                            problems: [
                                { segments: [{ type: 'fraction', n: '4', d: '10' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '100', ans: '40' }] }
                            ]
                        },
                        {
                            instruction: "Determine whether each comparison is true or false.",
                            type: "grid",
                            rows: [
                                { segments: [{ type: 'fraction', n: '50', d: '100' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: '5', d: '10' }], correct: true },
                                { segments: [{ type: 'text', val: '0.7 < ' }, { type: 'fraction', n: '6', d: '10' }], correct: false },
                                { segments: [{ type: 'text', val: '0.80 = 0.8' }], correct: true }
                            ]
                        }
                    ]
                },
                {
                    id: "m2-w1-wed", name: "Wed", title: "Week 1: Wednesday",
                    sections: [
                        {
                            instruction: "What is the value of point A?",
                            type: "number_line",
                            start: 0.3, end: 0.4, step: 0.01, target: 0.37, label: "A",
                            ans: "0.37"
                        },
                        {
                            instruction: "Determine whether each comparison is true or false.",
                            type: "grid",
                            rows: [
                                { segments: [{ type: 'fraction', n: '2', d: '10' }, { type: 'text', val: ' = 0.2' }], correct: true },
                                { segments: [{ type: 'fraction', n: '9', d: '100' }, { type: 'text', val: ' > 0.9' }], correct: false },
                                { segments: [{ type: 'text', val: '0.15 < 0.2' }], correct: true }
                            ]
                        }
                    ]
                },
                {
                    id: "m2-w1-thu", name: "Thu", title: "Week 1: Thursday",
                    sections: [
                        {
                            instruction: "Enter <, >, or = to make a true comparison.",
                            type: "mixed_row",
                            problems: [
                                { segments: [{ type: 'text', val: '0.7 ' }, { type: 'input', ans: '=' }, { type: 'text', val: ' 0.70' }] }
                            ]
                        },
                        {
                            instruction: "Determine whether each comparison is true or false.",
                            type: "grid",
                            rows: [
                                { segments: [{ type: 'fraction', n: '7', d: '10' }, { type: 'text', val: ' > 0.75' }], correct: false },
                                { segments: [{ type: 'text', val: '0.60 = ' }, { type: 'fraction', n: '60', d: '100' }], correct: true },
                                { segments: [{ type: 'fraction', n: '4', d: '100' }, { type: 'text', val: ' < 0.4' }], correct: true }
                            ]
                        }
                    ]
                },
                {
                    id: "m2-w1-fri", name: "Fri", title: "Week 1: Friday (Quiz)",
                    sections: [
                        {
                            instruction: "Enter the unknown numerator.",
                            type: "mixed_row",
                            problems: [
                                { segments: [{ type: 'fraction', n: '3', d: '10' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '4', d: '100' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '100', ans: '34' }] }
                            ]
                        },
                        {
                            instruction: "Determine whether each comparison is true or false.",
                            type: "grid",
                            rows: [
                                { segments: [{ type: 'text', val: '0.3 = ' }, { type: 'fraction', n: '3', d: '100' }], correct: false },
                                { segments: [{ type: 'fraction', n: '8', d: '10' }, { type: 'text', val: ' > 0.79' }], correct: true },
                                { segments: [{ type: 'text', val: '0.50 = ' }, { type: 'fraction', n: '5', d: '10' }], correct: true }
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
                    id: "m2-w2-mon", name: "Mon", title: "Week 2: Monday",
                    sections: [
                        {
                            instruction: "What is the value of point X?",
                            type: "number_line",
                            start: 5, end: 6, step: 0.1, target: 5.8, label: "X",
                            ans: "5.8"
                        },
                        {
                            instruction: "Determine whether each comparison is true or false.",
                            type: "grid",
                            rows: [
                                { segments: [{ type: 'fraction', n: '6', d: '100' }, { type: 'text', val: ' < 0.6' }], correct: true },
                                { segments: [{ type: 'text', val: '0.90 = ' }, { type: 'fraction', n: '9', d: '10' }], correct: true },
                                { segments: [{ type: 'text', val: '0.4 > 0.40' }], correct: false }
                            ]
                        }
                    ]
                },
                {
                    id: "m2-w2-tue", name: "Tue", title: "Week 2: Tuesday",
                    sections: [
                        {
                            instruction: "Enter the unknown numerator.",
                            type: "mixed_row",
                            problems: [
                                { segments: [{ type: 'fraction', n: '7', d: '10' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '100', ans: '70' }] }
                            ]
                        },
                        {
                            instruction: "Determine whether each comparison is true or false.",
                            type: "grid",
                            rows: [
                                { segments: [{ type: 'text', val: '0.9 > ' }, { type: 'fraction', n: '88', d: '100' }], correct: true },
                                { segments: [{ type: 'fraction', n: '2', d: '10' }, { type: 'text', val: ' = 0.20' }], correct: true },
                                { segments: [{ type: 'text', val: '0.15 < 0.1' }], correct: false }
                            ]
                        }
                    ]
                },
                {
                    id: "m2-w2-wed", name: "Wed", title: "Week 2: Wednesday",
                    sections: [
                        {
                            instruction: "What is the value of point B?",
                            type: "number_line",
                            start: 0.55, end: 0.65, step: 0.01, target: 0.62, label: "B",
                            ans: "0.62"
                        },
                        {
                            instruction: "Determine whether each comparison is true or false.",
                            type: "grid",
                            rows: [
                                { segments: [{ type: 'fraction', n: '30', d: '100' }, { type: 'text', val: ' = 0.3' }], correct: true },
                                { segments: [{ type: 'text', val: '0.05 > ' }, { type: 'fraction', n: '5', d: '10' }], correct: false },
                                { segments: [{ type: 'text', val: '0.7 = 0.70' }], correct: true }
                            ]
                        }
                    ]
                },
                {
                    id: "m2-w2-thu", name: "Thu", title: "Week 2: Thursday",
                    sections: [
                        {
                            instruction: "Enter <, >, or = to make a true comparison.",
                            type: "mixed_row",
                            problems: [
                                { segments: [{ type: 'text', val: '0.04 ' }, { type: 'input', ans: '<' }, { type: 'text', val: ' 0.40' }] }
                            ]
                        },
                        {
                            instruction: "Determine whether each comparison is true or false.",
                            type: "grid",
                            rows: [
                                { segments: [{ type: 'fraction', n: '9', d: '10' }, { type: 'text', val: ' > 0.89' }], correct: true },
                                { segments: [{ type: 'text', val: '0.1 = ' }, { type: 'fraction', n: '10', d: '100' }], correct: true },
                                { segments: [{ type: 'text', val: '0.6 < 0.59' }], correct: false }
                            ]
                        }
                    ]
                },
                {
                    id: "m2-w2-fri", name: "Fri", title: "Week 2: Friday (Quiz)",
                    sections: [
                        {
                            instruction: "Enter the unknown numerator.",
                            type: "mixed_row",
                            problems: [
                                { segments: [{ type: 'fraction', n: '5', d: '10' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '12', d: '100' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '100', ans: '62' }] }
                            ]
                        },
                        {
                            instruction: "Determine whether each comparison is true or false.",
                            type: "grid",
                            rows: [
                                { segments: [{ type: 'text', val: '0.50 > 0.05' }], correct: true },
                                { segments: [{ type: 'fraction', n: '4', d: '10' }, { type: 'text', val: ' = 0.04' }], correct: false },
                                { segments: [{ type: 'text', val: '0.1 = 0.10' }], correct: true }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};