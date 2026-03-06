const module3 = {
    id: "mod-3",
    name: "Multiply and Divide Fractions II",
    weeks: [
        {
            weekNum: 1,
            days: [
                {
                    id: "m3-w1-mon", name: "Mon", title: "Division: Whole ÷ Unit Fraction",
                    sections: [
                        {
                            instruction: "Enter the quotient.",
                            type: "mixed_row",
                            problems: [ { segments: [{ type: 'text', val: '4 ÷ ' }, { type: 'fraction', n:'1', d:'3' }, { type: 'text', val: ' = ' }, { type: 'whole_number', ans: 12 }] } ]
                        },
                        {
                            instruction: [ {type:'text', val:"Tracey divides 5 meters of ribbon into equal pieces. Each piece is "}, {type:'fraction', n:'1', d:'3'}, {type:'text', val:" meter long. How many pieces can she make?"} ],
                            type: "mixed_row", problems: [ { segments: [{ type: 'text', val: 'Pieces: '}, { type: 'whole_number', ans: 15 }] } ]
                        }
                    ]
                },
                {
                    id: "m3-w1-tue", name: "Tue", title: "Area with Fractional Sides",
                    sections: [
                        {
                            instruction: "Find the area of the rectangle.",
                            type: "visual_problem",
                            models: [{ type: 'rectangle', wLabel: "2/3 ft", hLabel: "3/4 ft", color: "#e67e22" }],
                            problems: [ { segments: [{ type: 'text', val: 'Area: ' }, { type: 'fraction_group', ans: 0.5 }, { type: 'text', val: ' sq ft' }] } ]
                        },
                        {
                            instruction: "Enter the product.",
                            type: "mixed_row",
                            problems: [ { segments: [{ type: 'fraction', n:'5', d:'6' }, { type: 'text', val: ' x ' }, { type: 'fraction', n:'1', d:'2' }, { type: 'text', val: ' = ' }, { type: 'fraction_group', ans: 0.4166 }] } ]
                        }
                    ]
                },
                {
                    id: "m3-w1-wed", name: "Wed", title: "Division: Unit Fraction ÷ Whole",
                    sections: [
                        {
                            instruction: "Enter the quotient.",
                            type: "mixed_row",
                            problems: [ { segments: [{ type: 'fraction', n:'1', d:'4' }, { type: 'text', val: ' ÷ 2 = ' }, { type: 'fraction_group', ans: 0.125 }] } ]
                        },
                        {
                            instruction: [ {type:'text', val:"Fred has "}, {type:'fraction', n:'1', d:'6'}, {type:'text', val:" of a bucket of paint. He divides it equally into 4 jars. What fraction of the whole bucket is in each jar?"} ],
                            type: "mixed_row", problems: [ { segments: [{ type: 'text', val: 'Fraction: '}, { type: 'fraction_group', ans: 0.0416 }] } ] // 1/24
                        }
                    ]
                },
                {
                    id: "m3-w1-thu", name: "Thu", title: "Area with Mixed Numbers",
                    sections: [
                        {
                            instruction: "Find the area of the rectangle.",
                            type: "visual_problem",
                            models: [{ type: 'rectangle', wLabel: "1 1/2 in", hLabel: "3/4 in", color: "#3498db" }],
                            problems: [ { segments: [{ type: 'text', val: 'Area: ' }, { type: 'mixed_group', ans: 1.125 }, { type: 'text', val: ' sq in' }] } ]
                        },
                        {
                            instruction: [ {type:'text', val:"A rug is "}, {type:'mixed', w:'2', n:'1', d:'2'}, {type:'text', val:" meters long and "}, {type:'fraction', n:'1', d:'2'}, {type:'text', val:" meter wide. What is the area of the rug?"} ],
                            type: "mixed_row", problems: [ { segments: [{ type: 'text', val: 'Area: '}, { type: 'mixed_group', ans: 1.25 }] } ]
                        }
                    ]
                },
                {
                    id: "m3-w1-fri", name: "Fri", title: "Weekly Quiz",
                    sections: [
                        {
                            instruction: "Enter the quotient.",
                            type: "mixed_row",
                            problems: [ { segments: [{ type: 'text', val: '6 ÷ ' }, { type: 'fraction', n:'1', d:'5' }, { type: 'text', val: ' = ' }, { type: 'whole_number', ans: 30 }] } ]
                        },
                        {
                            instruction: "Find the area of the rectangle.",
                            type: "visual_problem",
                            models: [{ type: 'rectangle', wLabel: "5/8 yd", hLabel: "2/3 yd", color: "#9b59b6" }],
                            problems: [ { segments: [{ type: 'text', val: 'Area: ' }, { type: 'fraction_group', ans: 0.4166 }, { type: 'text', val: ' sq yd' }] } ]
                        }
                    ]
                }
            ]
        },
        {
            weekNum: 2,
            days: [
                {
                    id: "m3-w2-mon", name: "Mon", title: "Scaling: Greater or Less",
                    sections: [
                        {
                            instruction: "Select all expressions where the product is greater than 8.",
                            type: "multiple_choice",
                            select_all: true,
                            options: [
                                { id: 'opt1', content: [{type:'text', val:'8 x '}, {type:'fraction', n:'1', d:'2'}], correct: false },
                                { id: 'opt2', content: [{type:'text', val:'8 x '}, {type:'fraction', n:'3', d:'2'}], correct: true },
                                { id: 'opt3', content: [{type:'text', val:'8 x '}, {type:'fraction', n:'4', d:'4'}], correct: false },
                                { id: 'opt4', content: [{type:'text', val:'8 x '}, {type:'fraction', n:'8', d:'5'}], correct: true },
                                { id: 'opt5', content: [{type:'text', val:'8 x '}, {type:'fraction', n:'2', d:'3'}], correct: false }
                            ]
                        },
                        {
                            instruction: "Select the expression where the product is less than 5.",
                            type: "multiple_choice",
                            options: [
                                { id: 'opt1', content: [{type:'text', val:'5 x '}, {type:'fraction', n:'5', d:'4'}], correct: false },
                                { id: 'opt2', content: [{type:'text', val:'5 x '}, {type:'fraction', n:'1', d:'1'}], correct: false },
                                { id: 'opt3', content: [{type:'text', val:'5 x '}, {type:'fraction', n:'3', d:'4'}], correct: true }
                            ]
                        }
                    ]
                },
                {
                    id: "m3-w2-tue", name: "Tue", title: "Scaling: Box Comparisons",
                    sections: [
                        {
                            instruction: "Select the fraction that makes the comparison true: ",
                            instructionMath: [{type:'text', val:'1 x '}, {type:'box'}, {type:'text', val:' > 1'}],
                            type: "multiple_choice",
                            options: [
                                { id: 'opt1', content: [{type:'fraction', n:'1', d:'4'}], correct: false },
                                { id: 'opt2', content: [{type:'fraction', n:'4', d:'4'}], correct: false },
                                { id: 'opt3', content: [{type:'fraction', n:'5', d:'4'}], correct: true }
                            ]
                        },
                        {
                            instruction: "Select the fraction that makes the comparison true: ",
                            instructionMath: [{type:'text', val:'1 x '}, {type:'box'}, {type:'text', val:' < 1'}],
                            type: "multiple_choice",
                            options: [
                                { id: 'opt1', content: [{type:'fraction', n:'3', d:'2'}], correct: false },
                                { id: 'opt2', content: [{type:'fraction', n:'7', d:'8'}], correct: true },
                                { id: 'opt3', content: [{type:'fraction', n:'8', d:'8'}], correct: false }
                            ]
                        }
                    ]
                },
                {
                    id: "m3-w2-wed", name: "Wed", title: "Mixed Review (Area & Division)",
                    sections: [
                        {
                            instruction: "Find the area of the rectangle.",
                            type: "visual_problem",
                            models: [{ type: 'rectangle', wLabel: "3/4 m", hLabel: "1/5 m", color: "#e67e22" }],
                            problems: [ { segments: [{ type: 'text', val: 'Area: ' }, { type: 'fraction_group', ans: 0.15 }, { type: 'text', val: ' sq m' }] } ]
                        },
                        {
                            instruction: "Enter the quotient.",
                            type: "mixed_row",
                            problems: [ { segments: [{ type: 'text', val: '9 ÷ ' }, { type: 'fraction', n:'1', d:'4' }, { type: 'text', val: ' = ' }, { type: 'whole_number', ans: 36 }] } ]
                        }
                    ]
                },
                {
                    id: "m3-w2-thu", name: "Thu", title: "Mixed Review (Scaling & Area)",
                    sections: [
                        {
                            instruction: "Select all expressions where the product is less than 5.",
                            type: "multiple_choice",
                            select_all: true,
                            options: [
                                { id: 'opt1', content: [{type:'text', val:'5 x '}, {type:'fraction', n:'1', d:'4'}], correct: true },
                                { id: 'opt2', content: [{type:'text', val:'5 x '}, {type:'fraction', n:'5', d:'4'}], correct: false },
                                { id: 'opt3', content: [{type:'text', val:'5 x '}, {type:'fraction', n:'3', d:'8'}], correct: true }
                            ]
                        },
                        {
                            instruction: [ {type:'text', val:"A photo is "}, {type:'fraction', n:'2', d:'3'}, {type:'text', val:" ft wide and "}, {type:'fraction', n:'5', d:'6'}, {type:'text', val:" ft tall. What is the area?"} ],
                            type: "mixed_row", problems: [ { segments: [{ type: 'text', val: 'Area: '}, { type: 'fraction_group', ans: 0.5555 }] } ] // 10/18 -> 5/9
                        }
                    ]
                },
                {
                    id: "m3-w2-fri", name: "Fri", title: "Module Quiz",
                    sections: [
                        {
                            instruction: "Select the fraction that makes the comparison true: ",
                            instructionMath: [{type:'text', val:'1 x '}, {type:'box'}, {type:'text', val:' > 1'}],
                            type: "multiple_choice",
                            options: [
                                { id: 'opt1', content: [{type:'fraction', n:'2', d:'3'}], correct: false },
                                { id: 'opt2', content: [{type:'fraction', n:'3', d:'3'}], correct: false },
                                { id: 'opt3', content: [{type:'fraction', n:'4', d:'3'}], correct: true }
                            ]
                        },
                        {
                            instruction: "Find the area of the rectangle.",
                            type: "visual_problem",
                            models: [{ type: 'rectangle', wLabel: "1/2 in", hLabel: "4/5 in", color: "#e74c3c" }],
                            problems: [ { segments: [{ type: 'text', val: 'Area: ' }, { type: 'fraction_group', ans: 0.4 }, { type: 'text', val: ' sq in' }] } ]
                        },
                        {
                            instruction: "Enter the quotient.",
                            type: "mixed_row",
                            problems: [ { segments: [{ type: 'fraction', n:'1', d:'8' }, { type: 'text', val: ' ÷ 4 = ' }, { type: 'fraction_group', ans: 0.03125 }] } ]
                        }
                    ]
                }
            ]
        }
    ]
};