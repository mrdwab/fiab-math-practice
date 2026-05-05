// --- MODULE 1 DATA ---
const module1 = {
    id: "mod-1",
    name: "Build Fractions from Unit Fractions",
    
    helperHubs: {
        week1: {
            title: "★ Helper Hub: Building with Fractions",
            content: `
                <div style="font-size:16px; line-height: 1.5;">
                    <p style="margin-top:0; margin-bottom:15px;">Fractions are just like building blocks! A <strong>unit fraction</strong> is a single block (like ${f(1,4)} or ${f(1,5)}). You can add them together to build bigger fractions or mixed numbers.</p>
                    
                    <div style="display:flex; gap:15px; align-items:flex-start; break-inside: avoid;">
                        <div style="flex:1; padding:15px; border:2px solid #ccc; border-radius:10px; background:#fff; text-align:center;">
                            <strong style="font-size:18px; color:#2c7be5;">Decomposing Fractions</strong><br><br>
                            Just like 3 is 1 + 1 + 1, you can break apart fractions!<br><br>
                            <div style="font-weight:bold; display: flex; align-items: center; justify-content: center;">${f(3,4)} = ${f(1,4)} + ${f(1,4)} + ${f(1,4)}</div><br>
                            <div style="font-weight:bold; display: flex; align-items: center; justify-content: center;">${f(5,8)} = ${f(2,8)} + ${f(3,8)}</div>
                        </div>
                        <div style="flex:1; padding:15px; border:2px solid #ccc; border-radius:10px; background:#fff; text-align:center;">
                            <strong style="font-size:18px; color:#e74c3c;">Mixed to Improper</strong><br><br>
                            A whole number is a fraction where the top and bottom are the same!<br><br>
                            <div style="font-weight:bold; display: flex; align-items: center; justify-content: center;">1 = ${f(5,5)}</div><br>
                            So, <div style="font-weight:bold; display:flex; align-items:center; justify-content: center; margin-top: 5px;">${mf(1,2,5)} = ${f(5,5)} + ${f(2,5)} = ${f(7,5)}</div>
                        </div>
                    </div>
                </div>`
        },
        week2: {
            title: "★ Helper Hub: Multiplying & Mixed Numbers",
            content: `
                <div style="font-size:16px; line-height: 1.5;">
                    <p style="margin-top:0; margin-bottom:15px;">When we multiply a whole number by a fraction, we are just doing repeated addition!</p>
                    
                    <div style="display:flex; gap:15px; align-items:flex-start; break-inside: avoid;">
                        <div style="flex:1; padding:15px; border:2px solid #ccc; border-radius:10px; background:#fff; text-align:center;">
                            <strong style="font-size:18px; color:#2c7be5;">Multiplying Fractions</strong><br><br>
                            Think of "4 &times; ${f(1,3)}" as "4 copies of ${f(1,3)}".<br><br>
                            <div style="font-weight:bold; display: flex; align-items: center; justify-content: center;">4 &times; ${f(1,3)} = ${f(1,3)} + ${f(1,3)} + ${f(1,3)} + ${f(1,3)} = ${f(4,3)}</div><br>
                            <em>Multiply the whole number by the top, the bottom stays the same!</em>
                        </div>
                        <div style="flex:1; padding:15px; border:2px solid #ccc; border-radius:10px; background:#fff; text-align:center;">
                            <strong style="font-size:18px; color:#e74c3c;">Improper to Mixed Numbers</strong><br><br>
                            If the top is bigger than the bottom, you have more than 1 whole!<br><br>
                            <div style="font-weight:bold; display: flex; align-items: center; justify-content: center;">${f(5,4)}</div><br>
                            Pull out a whole (${f(4,4)}):<br>
                            <div style="font-weight:bold; display: flex; align-items: center; justify-content: center;">${f(4,4)} + ${f(1,4)} = ${mf(1,1,4)}</div>
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
                            id: "m1-w1-fri", name: "Fri", title: "Week 1: Friday",
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
                                { instruction: "Enter the answer as an improper fraction AND as a mixed number.", type: "word_problem", textSegments: [{ type: 'text', val: 'Each student receives ' }, { type: 'fraction', n: '1', d: '10' }, { type: 'text', val: ' liter of water. There are 12 students. How much water is used in total?' }], problems: [{ segments: [{ type: 'text', val: 'Answer: ' }, { type: 'fraction_group', ans: 1.2, ak: "12/10" }, { type: 'text', val: ' AND ' }, { type: 'mixed_input', ans: 1.2, ak: "1 2/10" }, { type: 'text', val: ' liters' }] }] }
                            ]
                        },
                        {
                            id: "m1-w2-fri", name: "Fri", title: "Week 2: Friday",
                            sections: [
                                { instruction: "Enter the unknown number.", type: "mixed_row", problems: [{ segments: [{ type: 'text', val: '5 &times; ' }, { type: 'fraction', n: '1', d: '4' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '4', ans: '5' }] }] },
                                { instruction: "Solve the word problem:", type: "word_problem", textSegments: [{ type: 'text', val: 'Sara reads ' }, { type: 'fraction', n: '1', d: '6' }, { type: 'text', val: ' of a book on Monday and ' }, { type: 'fraction', n: '1', d: '6' }, { type: 'text', val: ' of the book on Tuesday. What fraction of the book has she read?' }], problems: [{ segments: [{ type: 'text', val: 'Answer: ' }, { type: 'fraction_group', ans: 0.3333 }, { type: 'text', val: ' of the book' }] }] }
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
                            id: "m1-w1-mon", name: "Mon", title: "Week 1: Monday",
                            sections: [
                                {
                                    instruction: "Enter the unknown number to make the equation true.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'fraction', n: '7', d: '8' }, { type: 'text', val: ' - ' }, { type: 'fraction', n: 'box', d: '8', ans: '6' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: '1', d: '8' }] }
                                    ]
                                },
                                {
                                    instructionSegments: [{ type: 'text', val: 'Decide whether each expression is equal to ' }, { type: 'fraction', w: '1', n: '2', d: '6' }],
                                    type: "grid",
                                    rows: [
                                        { segments: [{ type: 'text', val: '1 + ' }, { type: 'fraction', n: '2', d: '6' }], correct: true },
                                        { segments: [{ type: 'fraction', n: '4', d: '6' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '4', d: '6' }], correct: true },
                                        { segments: [{ type: 'fraction', n: '3', d: '6' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '3', d: '6' }], correct: false }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m1-w1-tue", name: "Tue", title: "Week 1: Tuesday",
                            sections: [
                                { instruction: "Enter the unknown number.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: '1', d: '10' }, { type: 'text', val: ' &times; 7 = ' }, { type: 'fraction', n: 'box', d: '10', ans: '7' }] }] },
                                { instruction: "Solve the word problem:", type: "word_problem", textSegments: [{ type: 'text', val: 'Sam runs ' }, { type: 'fraction', n: '3', d: '8' }, { type: 'text', val: ' of a mile. Leo runs ' }, { type: 'fraction', n: '2', d: '8' }, { type: 'text', val: ' of a mile more than Sam. How far does Leo run?' }], problems: [{ segments: [{ type: 'text', val: 'Answer: ' }, { type: 'fraction_group', ans: 0.625 }, { type: 'text', val: ' of a mile' }] }] }
                            ]
                        },
                        {
                            id: "m1-w1-wed", name: "Wed", title: "Week 1: Wednesday",
                            sections: [
                                { instruction: "Enter the unknown number.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: 'box', d: '12', ans: '5' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '4', d: '12' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: '9', d: '12' }] }] },
                                { instructionSegments: [{ type: 'text', val: 'Decide whether each expression is equal to ' }, { type: 'fraction', w: '2', n: '1', d: '5' }], type: "grid", rows: [{ segments: [{ type: 'text', val: '2 + ' }, { type: 'fraction', n: '1', d: '5' }], correct: true }, { segments: [{ type: 'fraction', n: '10', d: '5' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '1', d: '5' }], correct: true }, { segments: [{ type: 'text', val: '1 + ' }, { type: 'fraction', n: '4', d: '5' }], correct: false }] }
                            ]
                        },
                        {
                            id: "m1-w1-thu", name: "Thu", title: "Week 1: Thursday",
                            sections: [
                                { instruction: "Enter the unknown number.", type: "mixed_row", problems: [{ segments: [{ type: 'text', val: '3 &times; ' }, { type: 'fraction', n: '1', d: '8' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '8', ans: '3' }] }] },
                                { instruction: "Solve the word problem:", type: "word_problem", textSegments: [{ type: 'text', val: 'A recipe calls for ' }, { type: 'fraction', n: '1', d: '4' }, { type: 'text', val: ' cup of sugar per batch. If we make 3 batches, how much sugar is needed?' }], problems: [{ segments: [{ type: 'text', val: 'Answer: ' }, { type: 'fraction_group', ans: 0.75 }, { type: 'text', val: ' cups' }] }] }
                            ]
                        },
                        {
                            id: "m1-w1-fri", name: "Fri", title: "Week 1: Friday",
                            sections: [
                                { instruction: "Enter the unknown number.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: '4', d: '9' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '3', d: '9' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '9', ans: '7' }] }] },
                                { instruction: "Is the expression equal to 1?", type: "grid", rows: [{ segments: [{ type: 'fraction', n: '1', d: '4' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '1', d: '4' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '1', d: '4' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '1', d: '4' }], correct: true }, { segments: [{ type: 'fraction', n: '2', d: '5' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '4', d: '5' }], correct: false }, { segments: [{ type: 'fraction', n: '1', d: '2' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '1', d: '2' }], correct: true }] }
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
                                { instruction: "Enter the unknown number.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: '9', d: '10' }, { type: 'text', val: ' - ' }, { type: 'fraction', n: 'box', d: '10', ans: '6' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: '3', d: '10' }] }] },
                                { instructionSegments: [{ type: 'text', val: 'Decide whether each expression is equal to ' }, { type: 'fraction', w: '3', n: '1', d: '5' }], type: "grid", rows: [{ segments: [{ type: 'text', val: '1 + 1 + 1 + ' }, { type: 'fraction', n: '1', d: '5' }], correct: true }, { segments: [{ type: 'fraction', n: '16', d: '5' }], correct: true }, { segments: [{ type: 'text', val: '2 + ' }, { type: 'fraction', n: '7', d: '5' }], correct: false }] }
                            ]
                        },
                        {
                            id: "m1-w2-tue", name: "Tue", title: "Week 2: Tuesday",
                            sections: [
                                { instruction: "Enter the unknown number.", type: "mixed_row", problems: [{ segments: [{ type: 'text', val: '4 &times; ' }, { type: 'fraction', n: 'box', d: '7', ans: '1' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: '4', d: '7' }] }] },
                                { instruction: "Solve the word problem:", type: "word_problem", textSegments: [{ type: 'text', val: 'Leo has ' }, { type: 'fraction', n: '4', d: '5' }, { type: 'text', val: ' of a yard of fabric. He uses ' }, { type: 'fraction', n: '2', d: '5' }, { type: 'text', val: ' of a yard. How much fabric does he have left?' }], problems: [{ segments: [{ type: 'text', val: 'Answer: ' }, { type: 'fraction_group', ans: 0.4 }, { type: 'text', val: ' yards' }] }] }
                            ]
                        },
                        {
                            id: "m1-w2-wed", name: "Wed", title: "Week 2: Wednesday",
                            sections: [
                                { instruction: "Enter the unknown number.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: 'box', d: '12', ans: '7' }, { type: 'text', val: ' - ' }, { type: 'fraction', n: '5', d: '12' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: '2', d: '12' }] }] },
                                { instructionSegments: [{ type: 'text', val: 'Decide whether each expression is equal to ' }, { type: 'fraction', n: '5', d: '4' }], type: "grid", rows: [{ segments: [{ type: 'text', val: '5 &times; ' }, { type: 'fraction', n: '1', d: '4' }], correct: true }, { segments: [{ type: 'text', val: '1 ' }, { type: 'fraction', n: '1', d: '4' }], correct: true }, { segments: [{ type: 'fraction', n: '3', d: '4' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '1', d: '4' }], correct: false }] }
                            ]
                        },
                        {
                            id: "m1-w2-thu", name: "Thu", title: "Week 2: Thursday",
                            sections: [
                                { instruction: "Enter the unknown number.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: '1', d: '4' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '1', d: '4' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '4', ans: '2' }] }] },
                                { instruction: "Enter the answer as an improper fraction AND as a mixed number.", type: "word_problem", textSegments: [{ type: 'text', val: 'Each student receives ' }, { type: 'fraction', n: '1', d: '5' }, { type: 'text', val: ' liter of water. There are 6 students. How much water is used in total?' }], problems: [{ segments: [{ type: 'text', val: 'Answer: ' }, { type: 'fraction_group', ans: 1.2, ak: "6/5" }, { type: 'text', val: ' AND ' }, { type: 'mixed_input', ans: 1.2, ak: "1 1/5" }, { type: 'text', val: ' liters' }] }] }
                            ]
                        },
                        {
                            id: "m1-w2-fri", name: "Fri", title: "Week 2: Friday",
                            sections: [
                                { instruction: "Enter the unknown number.", type: "mixed_row", problems: [{ segments: [{ type: 'text', val: '6 &times; ' }, { type: 'fraction', n: '1', d: '5' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '5', ans: '6' }] }] },
                                { instruction: "Solve the word problem:", type: "word_problem", textSegments: [{ type: 'text', val: 'Ben paints ' }, { type: 'fraction', n: '1', d: '4' }, { type: 'text', val: ' of a wall on Monday and ' }, { type: 'fraction', n: '1', d: '4' }, { type: 'text', val: ' of the wall on Tuesday. What fraction of the wall has he painted?' }], problems: [{ segments: [{ type: 'text', val: 'Answer: ' }, { type: 'fraction_group', ans: 0.5 }, { type: 'text', val: ' of the wall' }] }] }
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
                            id: "m1-w1-mon", name: "Mon", title: "Week 1: Monday",
                            sections: [
                                {
                                    instruction: "Enter the unknown number to make the equation true.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'fraction', n: '4', d: '5' }, { type: 'text', val: ' - ' }, { type: 'fraction', n: 'box', d: '5', ans: '3' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: '1', d: '5' }] }
                                    ]
                                },
                                {
                                    instructionSegments: [{ type: 'text', val: 'Decide whether each expression is equal to ' }, { type: 'fraction', w: '1', n: '4', d: '8' }],
                                    type: "grid",
                                    rows: [
                                        { segments: [{ type: 'text', val: '1 + ' }, { type: 'fraction', n: '4', d: '8' }], correct: true },
                                        { segments: [{ type: 'fraction', n: '6', d: '8' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '6', d: '8' }], correct: true },
                                        { segments: [{ type: 'fraction', n: '3', d: '8' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '4', d: '8' }], correct: false }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m1-w1-tue", name: "Tue", title: "Week 1: Tuesday",
                            sections: [
                                { instruction: "Enter the unknown number.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: '1', d: '6' }, { type: 'text', val: ' &times; 4 = ' }, { type: 'fraction', n: 'box', d: '6', ans: '4' }] }] },
                                { instruction: "Solve the word problem:", type: "word_problem", textSegments: [{ type: 'text', val: 'Mia runs ' }, { type: 'fraction', n: '3', d: '10' }, { type: 'text', val: ' of a mile. Zoe runs ' }, { type: 'fraction', n: '5', d: '10' }, { type: 'text', val: ' of a mile more than Mia. How far does Zoe run?' }], problems: [{ segments: [{ type: 'text', val: 'Answer: ' }, { type: 'fraction_group', ans: 0.8 }, { type: 'text', val: ' of a mile' }] }] }
                            ]
                        },
                        {
                            id: "m1-w1-wed", name: "Wed", title: "Week 1: Wednesday",
                            sections: [
                                { instruction: "Enter the unknown number.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: 'box', d: '7', ans: '2' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '3', d: '7' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: '5', d: '7' }] }] },
                                { instructionSegments: [{ type: 'text', val: 'Decide whether each expression is equal to ' }, { type: 'fraction', w: '4', n: '2', d: '3' }], type: "grid", rows: [{ segments: [{ type: 'text', val: '4 + ' }, { type: 'fraction', n: '2', d: '3' }], correct: true }, { segments: [{ type: 'fraction', n: '12', d: '3' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '2', d: '3' }], correct: true }, { segments: [{ type: 'text', val: '3 + ' }, { type: 'fraction', n: '1', d: '3' }], correct: false }] }
                            ]
                        },
                        {
                            id: "m1-w1-thu", name: "Thu", title: "Week 1: Thursday",
                            sections: [
                                { instruction: "Enter the unknown number.", type: "mixed_row", problems: [{ segments: [{ type: 'text', val: '5 &times; ' }, { type: 'fraction', n: '1', d: '12' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '12', ans: '5' }] }] },
                                { instruction: "Solve the word problem:", type: "word_problem", textSegments: [{ type: 'text', val: 'A bread recipe uses ' }, { type: 'fraction', n: '1', d: '5' }, { type: 'text', val: ' ounce of salt per loaf. If we make 4 loaves, how much salt is needed?' }], problems: [{ segments: [{ type: 'text', val: 'Answer: ' }, { type: 'fraction_group', ans: 0.8 }, { type: 'text', val: ' ounces' }] }] }
                            ]
                        },
                        {
                            id: "m1-w1-fri", name: "Fri", title: "Week 1: Friday",
                            sections: [
                                { instruction: "Enter the unknown number.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: '5', d: '12' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '6', d: '12' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '12', ans: '11' }] }] },
                                { instruction: "Is the expression equal to 1?", type: "grid", rows: [{ segments: [{ type: 'fraction', n: '1', d: '2' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '1', d: '2' }], correct: true }, { segments: [{ type: 'fraction', n: '5', d: '8' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '4', d: '8' }], correct: false }, { segments: [{ type: 'fraction', n: '1', d: '5' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '1', d: '5' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '1', d: '5' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '1', d: '5' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '1', d: '5' }], correct: true }] }
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
                                { instruction: "Enter the unknown number.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: '7', d: '8' }, { type: 'text', val: ' - ' }, { type: 'fraction', n: 'box', d: '8', ans: '2' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: '5', d: '8' }] }] },
                                { instructionSegments: [{ type: 'text', val: 'Decide whether each expression is equal to ' }, { type: 'fraction', w: '2', n: '3', d: '4' }], type: "grid", rows: [{ segments: [{ type: 'text', val: '1 + 1 + ' }, { type: 'fraction', n: '3', d: '4' }], correct: true }, { segments: [{ type: 'fraction', n: '11', d: '4' }], correct: true }, { segments: [{ type: 'text', val: '1 + ' }, { type: 'fraction', n: '8', d: '4' }], correct: false }] }
                            ]
                        },
                        {
                            id: "m1-w2-tue", name: "Tue", title: "Week 2: Tuesday",
                            sections: [
                                { instruction: "Enter the unknown number.", type: "mixed_row", problems: [{ segments: [{ type: 'text', val: '2 &times; ' }, { type: 'fraction', n: 'box', d: '9', ans: '1' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: '2', d: '9' }] }] },
                                { instruction: "Solve the word problem:", type: "word_problem", textSegments: [{ type: 'text', val: 'Ava has ' }, { type: 'fraction', n: '3', d: '4' }, { type: 'text', val: ' of a yard of ribbon. She uses ' }, { type: 'fraction', n: '2', d: '4' }, { type: 'text', val: ' of a yard. How much ribbon does she have left?' }], problems: [{ segments: [{ type: 'text', val: 'Answer: ' }, { type: 'fraction_group', ans: 0.25 }, { type: 'text', val: ' yards' }] }] }
                            ]
                        },
                        {
                            id: "m1-w2-wed", name: "Wed", title: "Week 2: Wednesday",
                            sections: [
                                { instruction: "Enter the unknown number.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: 'box', d: '10', ans: '8' }, { type: 'text', val: ' - ' }, { type: 'fraction', n: '5', d: '10' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: '3', d: '10' }] }] },
                                { instructionSegments: [{ type: 'text', val: 'Decide whether each expression is equal to ' }, { type: 'fraction', n: '7', d: '5' }], type: "grid", rows: [{ segments: [{ type: 'text', val: '7 &times; ' }, { type: 'fraction', n: '1', d: '5' }], correct: true }, { segments: [{ type: 'text', val: '1 ' }, { type: 'fraction', n: '2', d: '5' }], correct: true }, { segments: [{ type: 'fraction', n: '4', d: '5' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '2', d: '5' }], correct: false }] }
                            ]
                        },
                        {
                            id: "m1-w2-thu", name: "Thu", title: "Week 2: Thursday",
                            sections: [
                                { instruction: "Enter the unknown number.", type: "mixed_row", problems: [{ segments: [{ type: 'fraction', n: '1', d: '3' }, { type: 'text', val: ' + ' }, { type: 'fraction', n: '1', d: '3' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '3', ans: '2' }] }] },
                                { instruction: "Enter the answer as an improper fraction AND as a mixed number.", type: "word_problem", textSegments: [{ type: 'text', val: 'A dress maker uses ' }, { type: 'fraction', n: '1', d: '5' }, { type: 'text', val: ' meter of lace per dress. There are 6 dresses. How much lace is used in total?' }], problems: [{ segments: [{ type: 'text', val: 'Answer: ' }, { type: 'fraction_group', ans: 1.2, ak: "6/5" }, { type: 'text', val: ' AND ' }, { type: 'mixed_input', ans: 1.2, ak: "1 1/5" }, { type: 'text', val: ' meters' }] }] }
                            ]
                        },
                        {
                            id: "m1-w2-fri", name: "Fri", title: "Week 2: Friday",
                            sections: [
                                { instruction: "Enter the unknown number.", type: "mixed_row", problems: [{ segments: [{ type: 'text', val: '7 &times; ' }, { type: 'fraction', n: '1', d: '8' }, { type: 'text', val: ' = ' }, { type: 'fraction', n: 'box', d: '8', ans: '7' }] }] },
                                { instruction: "Solve the word problem:", type: "word_problem", textSegments: [{ type: 'text', val: 'Chloe walks ' }, { type: 'fraction', n: '1', d: '5' }, { type: 'text', val: ' of a mile on Saturday and ' }, { type: 'fraction', n: '2', d: '5' }, { type: 'text', val: ' of a mile on Sunday. What fraction of a mile has she walked?' }], problems: [{ segments: [{ type: 'text', val: 'Answer: ' }, { type: 'fraction_group', ans: 0.6 }, { type: 'text', val: ' of a mile' }] }] }
                            ]
                        }
                    ]
                }
            ]
        }
    }
};