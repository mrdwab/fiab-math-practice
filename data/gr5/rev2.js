const reviewModule2 = {
    id: "mod-review-2",
    name: "Interim Review: Area, Fractions & Volume",
    weeks: [
        {
            weekNum: 1,
            days: [
                {
                    id: "r2-w1-mon", name: "Mon", title: "Review: Area & Volume",
                    sections: [
                        {
                            instruction: "Find the area of the rectangle.",
                            type: "visual_problem",
                            models: [{ type: 'rectangle', wLabel: "1/2 ft", hLabel: "3/4 ft", color: "#3498db" }],
                            problems: [ { segments: [{ type: 'text', val: 'Area: ' }, { type: 'fraction_group', ans: 0.375 }, { type: 'text', val: ' sq ft' }] } ]
                        },
                        {
                            instruction: "Enter the volume, in cubic centimeters, of this prism.",
                            type: "visual_problem",
                            models: [{ type: 'prism', lLabel: "6 cm", wLabel: "3 cm", hLabel: "4 cm", color: "#ccc" }],
                            problems: [ { segments: [{ type: 'text', val: 'Volume: ' }, { type: 'whole_number', ans: 72 }, { type: 'text', val: ' cubic cm' }] } ]
                        }
                    ]
                },
                {
                    id: "r2-w1-tue", name: "Tue", title: "Review: Missing Dimensions & Division",
                    sections: [
                        {
                            instruction: "The volume of a shipping box is 150 cubic inches. The area of the base is 30 square inches. Enter the height.",
                            type: "mixed_row", 
                            problems: [ { segments: [{ type: 'text', val: 'Height: '}, { type: 'whole_number', ans: 5 }, { type: 'text', val: ' in' }] } ]
                        },
                        {
                            instruction: [ {type:'text', val:"Liam has 4 gallons of water. He divides it into jugs that hold "}, {type:'fraction', n:'1', d:'5'}, {type:'text', val:" gallon each. How many jugs can he fill?"} ],
                            type: "mixed_row", problems: [ { segments: [{ type: 'text', val: 'Jugs: '}, { type: 'whole_number', ans: 20 }] } ]
                        }
                    ]
                },
                {
                    id: "r2-w1-wed", name: "Wed", title: "Review: Unit Layers & Scaling",
                    sections: [
                        {
                            instruction: "A student is building a rectangular prism. The bottom layer of the prism is shown.<br><br>&bull; Each block represents 1 cubic cm.<br>&bull; They build a prism that has 4 layers.<br><br>Enter the volume, in cubic centimeters, of the completed rectangular prism.",
                            type: "visual_problem",
                            models: [{ type: 'block_layer', cols: 4, rows: 3, color: "#2ecc71" }],
                            problems: [ { segments: [{ type: 'text', val: 'Total Volume: ' }, { type: 'whole_number', ans: 48 }, { type: 'text', val: ' cubic cm' }] } ]
                        },
                        {
                            instruction: "Select the fraction that makes the comparison true: ",
                            instructionMath: [{type:'text', val:'1 x '}, {type:'box'}, {type:'text', val:' > 1'}],
                            type: "multiple_choice",
                            options: [
                                { id: 'opt1', content: [{type:'fraction', n:'1', d:'2'}], correct: false },
                                { id: 'opt2', content: [{type:'fraction', n:'3', d:'3'}], correct: false },
                                { id: 'opt3', content: [{type:'fraction', n:'5', d:'4'}], correct: true }
                            ]
                        }
                    ]
                },
                {
                    id: "r2-w1-thu", name: "Thu", title: "Review: Composite Volume & Division",
                    sections: [
                        {
                            instruction: "Prisms A and B are combined to create this model.<br><br>&bull; The dimensions of Prism A are 5 by 4 by 2 inches.<br>&bull; The dimensions of Prism B are 3 by 4 by 2 inches.<br><br>Enter the combined volume.",
                            type: "visual_problem",
                            models: [{ type: 'composite', compType: 'stacked', nameA: "A", nameB: "B", colorA: "#e0e0e0", colorB: "#f9f9f9" }],
                            problems: [ { segments: [{ type: 'text', val: 'Total Volume: ' }, { type: 'whole_number', ans: 64 }, { type: 'text', val: ' cubic in' }] } ]
                        },
                        {
                            instruction: "Enter the quotient.",
                            type: "mixed_row",
                            problems: [ { segments: [{ type: 'fraction', n:'1', d:'6' }, { type: 'text', val: ' ÷ 3 = ' }, { type: 'fraction_group', ans: 0.05555 }] } ]
                        }
                    ]
                },
                {
                    id: "r2-w1-fri", name: "Fri", title: "Review Quiz",
                    sections: [
                        {
                            instruction: [ {type:'text', val:"A rectangular rug is "}, {type:'mixed', w:'2', n:'1', d:'2'}, {type:'text', val:" meters long and "}, {type:'fraction', n:'1', d:'4'}, {type:'text', val:" meter wide. What is the area of the rug?"} ],
                            type: "mixed_row", problems: [ { segments: [{ type: 'text', val: 'Area: '}, { type: 'fraction_group', ans: 0.625 }] } ]
                        },
                        {
                            instruction: "Prisms A and B are combined to create this model.<br><br>&bull; The dimensions of Prism A are 4 by 2 by 5 meters.<br>&bull; The dimensions of Prism B are 3 by 2 by 4 meters.<br><br>Enter the combined volume.",
                            type: "visual_problem",
                            models: [{ type: 'composite', compType: 'side_by_side', nameA: "A", nameB: "B", colorA: "#e0e0e0", colorB: "#f9f9f9" }],
                            problems: [ { segments: [{ type: 'text', val: 'Total Volume: ' }, { type: 'whole_number', ans: 64 }, { type: 'text', val: ' cubic m' }] } ]
                        },
                        {
                            instruction: "A prism has a length of 8 cm, width of 3 cm, and height of 5 cm. Select all valid equations for its volume.",
                            type: "multiple_choice",
                            select_all: true,
                            options: [
                                { id: 'opt1', content: [{type:'text', val:'V = 8 x 3 x 5'}], correct: true },
                                { id: 'opt2', content: [{type:'text', val:'V = 24 x 5'}], correct: true },
                                { id: 'opt3', content: [{type:'text', val:'V = 11 x 5'}], correct: false },
                                { id: 'opt4', content: [{type:'text', val:'V = 8 x 15'}], correct: true }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};