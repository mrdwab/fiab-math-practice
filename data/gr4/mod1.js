const module1 = {
    id: "mod-1",
    name: "Build Fractions from Unit Fractions",
    weeks: [
        // ... (Module 1 Content) ...
        {
            weekNum: 1,
            days: [
                {
                    id: "m1-w1-mon", name: "Mon", title: "Week 1: Monday",
                    sections: [
                        {
                            instruction: "Enter the unknown number to make the equation true.",
                            type: "mixed_row",
                            problems: [
                                { segments: [{ type: 'fraction', n: '5', d: '6' }, { type: 'text', val: ' - ' }, { type: 'fraction', n: 'box', d: '6', ans: '4' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: '1', d: '6' }] }
                            ]
                        },
                        {
                            instructionSegments: [{ type: 'text', val: 'Decide whether each expression is equal to ' }, { type: 'fraction', w: '1', n: '3', d: '5' }],
                            type: "grid",
                            rows: [
                                { segments: [{ type: 'text', val: '1 + ' }, { type: 'fraction', n: '3', d: '5' }], correct: true },
                                { segments: [{ type: 'fraction', n: '4', d: '5' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '4', d: '5' }], correct: true },
                                { segments: [{ type: 'fraction', n: '2', d: '5' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '2', d: '5' }], correct: false }
                            ]
                        }
                    ]
                },
                {
                    id: "m1-w1-tue", name: "Tue", title: "Week 1: Tuesday",
                    sections: [
                        { instruction: "Enter the unknown number.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: '1', d: '8' }, { type: 'text', val: ' &times; 5 = ' }, { type: 'fraction', n: 'box', d: '8', ans: '5' }] }] },
                        { instruction: "Solve the word problem:", type: "word_problem", textSegments: [{ type: 'text', val: 'Tom runs ' }, { type: 'fraction', n: '2', d: '5' }, { type: 'text', val: ' of a mile. Jerry runs ' }, { type: 'fraction', n: '1', d: '5' }, { type: 'text', val: ' of a mile more than Tom. How far does Jerry run?' }], problems: [{ segments: [{ type: 'text', val: 'Answer: ' }, { type: 'fraction_group', ans: 0.6 }, { type: 'text', val: ' of a mile' }] }] }
                    ]
                },
                {
                    id: "m1-w1-wed", name: "Wed", title: "Week 1: Wednesday",
                    sections: [
                        { instruction: "Enter the unknown number.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: 'box', d: '10', ans: '4' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '3', d: '10' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: '7', d: '10' }] }] },
                        { instructionSegments: [{ type: 'text', val: 'Decide whether each expression is equal to ' }, { type: 'fraction', w: '3', n: '1', d: '4' }], type: "grid", rows: [{ segments: [{ type: 'text', val: '3 + ' }, { type: 'fraction', n: '1', d: '4' }], correct: true }, { segments: [{ type: 'fraction', n: '12', d: '4' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '1', d: '4' }], correct: true }, { segments: [{ type: 'text', val: '2 + ' }, { type: 'fraction', n: '3', d: '4' }], correct: false }] }
                    ]
                },
                {
                    id: "m1-w1-thu", name: "Thu", title: "Week 1: Thursday",
                    sections: [
                        { instruction: "Enter the unknown number.", type: "mixed_row", problems: [{ segments: [{ type: 'text', val: '4 &times; ' }, { type: 'fraction', n: '1', d: '6' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '6', ans: '4' }] }] },
                        { instruction: "Solve the word problem:", type: "word_problem", textSegments: [{ type: 'text', val: 'A cookie recipe uses ' }, { type: 'fraction', n: '1', d: '8' }, { type: 'text', val: ' pound of flour per batch. If we make 5 batches, how much flour is needed?' }], problems: [{ segments: [{ type: 'text', val: 'Answer: ' }, { type: 'fraction_group', ans: 0.625 }, { type: 'text', val: ' pounds' }] }] }
                    ]
                },
                {
                    id: "m1-w1-fri", name: "Fri", title: "Week 1: Friday (Quiz)",
                    sections: [
                        { instruction: "Enter the unknown number.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: '2', d: '7' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '3', d: '7' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '7', ans: '5' }] }] },
                        { instruction: "Is the expression equal to 1?", type: "grid", rows: [{ segments: [{ type: 'fraction', n: '1', d: '3' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '1', d: '3' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '1', d: '3' }], correct: true }, { segments: [{ type: 'fraction', n: '3', d: '4' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '2', d: '4' }], correct: false }, { segments: [{ type: 'fraction', n: '1', d: '2' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '1', d: '2' }], correct: true }] }
                    ]
                }
            ]
        },
        {
            weekNum: 2,
            days: [
                {
                    id: "m1-w2-mon", name: "Mon", title: "Week 2: Monday",
                    sections: [
                        { instruction: "Enter the unknown number.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: '11', d: '12' }, { type: 'text', val: ' - ' }, { type: 'fraction', n: 'box', d: '12', ans: '9' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: '2', d: '12' }] }] },
                        { instructionSegments: [{ type: 'text', val: 'Decide whether each expression is equal to ' }, { type: 'fraction', w: '2', n: '1', d: '8' }], type: "grid", rows: [{ segments: [{ type: 'text', val: '1 + 1 + ' }, { type: 'fraction', n: '1', d: '8' }], correct: true }, { segments: [{ type: 'fraction', n: '17', d: '8' }], correct: true }, { segments: [{ type: 'text', val: '1 + ' }, { type: 'fraction', n: '10', d: '8' }], correct: false }] }
                    ]
                },
                {
                    id: "m1-w2-tue", name: "Tue", title: "Week 2: Tuesday",
                    sections: [
                        { instruction: "Enter the unknown number.", type: "mixed_row", problems: [{ segments: [{ type: 'text', val: '3 &times; ' }, { type: 'fraction', n: 'box', d: '5', ans: '1' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: '3', d: '5' }] }] },
                        { instruction: "Solve the word problem:", type: "word_problem", textSegments: [{ type: 'text', val: 'Max has ' }, { type: 'fraction', n: '5', d: '8' }, { type: 'text', val: ' of a yard of fabric. He uses ' }, { type: 'fraction', n: '2', d: '8' }, { type: 'text', val: ' of a yard. How much fabric does he have left?' }], problems: [{ segments: [{ type: 'text', val: 'Answer: ' }, { type: 'fraction_group', ans: 0.375 }, { type: 'text', val: ' yards' }] }] }
                    ]
                },
                {
                    id: "m1-w2-wed", name: "Wed", title: "Week 2: Wednesday",
                    sections: [
                        { instruction: "Enter the unknown number.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: 'box', d: '9', ans: '5' }, { type: 'text', val: ' - ' }, { type: 'fraction', n: '4', d: '9' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: '1', d: '9' }] }] },
                        { instructionSegments: [{ type: 'text', val: 'Decide whether each expression is equal to ' }, { type: 'fraction', n: '4', d: '3' }], type: "grid", rows: [{ segments: [{ type: 'text', val: '4 &times; ' }, { type: 'fraction', n: '1', d: '3' }], correct: true }, { segments: [{ type: 'text', val: '1 ' }, { type: 'fraction', n: '1', d: '3' }], correct: true }, { segments: [{ type: 'fraction', n: '2', d: '3' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '1', d: '3' }], correct: false }] }
                    ]
                },
                {
                    id: "m1-w2-thu", name: "Thu", title: "Week 2: Thursday",
                    sections: [
                        { instruction: "Enter the unknown number.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: '1', d: '2' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '1', d: '2' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '2', ans: '2' }] }] },
                        { instruction: "Enter the answer as an improper fraction AND as a mixed number.", type: "word_problem", textSegments: [{ type: 'text', val: 'Each student receives ' }, { type: 'fraction', n: '1', d: '10' }, { type: 'text', val: ' liter of water. There are 12 students. How much water is used in total?' }], problems: [{ segments: [{ type: 'text', val: 'Answer: ' }, { type: 'fraction_group', ans: 1.2 }, { type: 'text', val: ' OR ' }, { type: 'mixed_input', ans: 1.2 }, { type: 'text', val: ' liters' }] }] }
                    ]
                },
                {
                    id: "m1-w2-fri", name: "Fri", title: "Week 2: Friday (Quiz)",
                    sections: [
                        { instruction: "Enter the unknown number.", type: "mixed_row", problems: [{ segments: [{ type: 'text', val: '5 &times; ' }, { type: 'fraction', n: '1', d: '4' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '4', ans: '5' }] }] },
                        { instruction: "Solve the word problem:", type: "word_problem", textSegments: [{ type: 'text', val: 'Sara reads ' }, { type: 'fraction', n: '1', d: '6' }, { type: 'text', val: ' of a book on Monday and ' }, { type: 'fraction', n: '1', d: '6' }, { type: 'text', val: ' of the book on Tuesday. What fraction of the book has she read?' }], problems: [{ segments: [{ type: 'text', val: 'Answer: ' }, { type: 'fraction_group', ans: 0.3333 }, { type: 'text', val: ' of the book' }] }] }
                    ]
                }
            ]
        }
    ]
};