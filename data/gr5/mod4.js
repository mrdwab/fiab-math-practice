// --- MODULE 4 DATA (INTERNAL) ---
const module4 = {
    id: "mod-4",
    name: "Volume Concepts",
    weeks: [
        {
            weekNum: 1,
            days: [
                {
                    id: "m4-w1-mon", name: "Mon", title: "Visual Volume (LxWxH)",
                    sections: [
                        {
                            instruction: "Enter the volume, in cubic centimeters, of this prism.",
                            type: "visual_problem",
                            models: [{ type: 'prism', lLabel: "5 cm", wLabel: "2 cm", hLabel: "3 cm", color: "#ccc" }],
                            problems: [ { segments: [{ type: 'text', val: 'Volume: ' }, { type: 'whole_number', ans: 30 }, { type: 'text', val: ' cubic cm' }] } ]
                        },
                        {
                            instruction: "A shipping box has a length of 8 inches, width of 4 inches, and height of 5 inches. Enter the volume.",
                            type: "mixed_row", 
                            problems: [ { segments: [{ type: 'text', val: 'Volume: '}, { type: 'whole_number', ans: 160 }, { type: 'text', val: ' cubic in' }] } ]
                        }
                    ]
                },
                {
                    id: "m4-w1-tue", name: "Tue", title: "Visual Volume (Base Area)",
                    sections: [
                        {
                            instruction: "Enter the volume, in cubic meters, of this prism.",
                            type: "visual_problem",
                            models: [{ type: 'prism', bLabel: "20 sq m", hLabel: "6 m", color: "#ccc" }],
                            problems: [ { segments: [{ type: 'text', val: 'Volume: ' }, { type: 'whole_number', ans: 120 }, { type: 'text', val: ' cubic m' }] } ]
                        },
                        {
                            instruction: "A right rectangular prism has a length of 6 cm, a width of 3 cm, and a height of 5 cm. Select all equations that calculate the volume.",
                            type: "multiple_choice",
                            select_all: true,
                            options: [
                                { id: 'opt1', content: [{type:'text', val:'V = 6 x 3 x 5'}], correct: true },
                                { id: 'opt2', content: [{type:'text', val:'V = 18 x 5'}], correct: true },
                                { id: 'opt3', content: [{type:'text', val:'V = 6 + 3 + 5'}], correct: false },
                                { id: 'opt4', content: [{type:'text', val:'V = 6 x 15'}], correct: true },
                                { id: 'opt5', content: [{type:'text', val:'V = 9 x 5'}], correct: false }
                            ]
                        }
                    ]
                },
                {
                    id: "m4-w1-wed", name: "Wed", title: "Missing Dimensions",
                    sections: [
                        {
                            instruction: "A rectangular fish tank has a base area of 40 square inches and a height of 12 inches. Enter the volume.",
                            type: "mixed_row", 
                            problems: [ { segments: [{ type: 'text', val: 'Volume: '}, { type: 'whole_number', ans: 480 }, { type: 'text', val: ' cubic in' }] } ]
                        },
                        {
                            instruction: "Mike has a tissue box with a volume of 80 cubic inches. The area of the base is 40 square inches. Enter the height.",
                            type: "mixed_row", 
                            problems: [ { segments: [{ type: 'text', val: 'Height: '}, { type: 'whole_number', ans: 2 }, { type: 'text', val: ' in' }] } ]
                        }
                    ]
                },
                {
                    id: "m4-w1-thu", name: "Thu", title: "Applying Volume",
                    sections: [
                        {
                            instruction: "Enter the volume, in cubic feet, of this prism.",
                            type: "visual_problem",
                            models: [{ type: 'prism', lLabel: "10 ft", wLabel: "4 ft", hLabel: "2 ft", color: "#ccc" }],
                            problems: [ { segments: [{ type: 'text', val: 'Volume: ' }, { type: 'whole_number', ans: 80 }, { type: 'text', val: ' cubic ft' }] } ]
                        },
                        {
                            instruction: "The volume of a moving box is 100 cubic feet. The length is 5 ft and the width is 4 ft. Enter the height.",
                            type: "mixed_row", 
                            problems: [ { segments: [{ type: 'text', val: 'Height: '}, { type: 'whole_number', ans: 5 }, { type: 'text', val: ' ft' }] } ]
                        }
                    ]
                },
                {
                    id: "m4-w1-fri", name: "Fri", title: "Weekly Quiz",
                    sections: [
                        {
                            instruction: "Enter the volume, in cubic inches.",
                            type: "visual_problem",
                            models: [{ type: 'prism', lLabel: "4 in", wLabel: "3 in", hLabel: "5 in", color: "#ccc" }],
                            problems: [ { segments: [{ type: 'text', val: 'Volume: ' }, { type: 'whole_number', ans: 60 }, { type: 'text', val: ' cubic in' }] } ]
                        },
                        {
                            instruction: "Enter the volume, in cubic yards.",
                            type: "visual_problem",
                            models: [{ type: 'prism', bLabel: "15 sq yd", hLabel: "4 yd", color: "#ccc" }],
                            problems: [ { segments: [{ type: 'text', val: 'Volume: ' }, { type: 'whole_number', ans: 60 }, { type: 'text', val: ' cubic yd' }] } ]
                        },
                        {
                            instruction: "A prism has a length of 7 cm, width of 2 cm, and height of 4 cm. Select all valid equations for its volume.",
                            type: "multiple_choice",
                            select_all: true,
                            options: [
                                { id: 'opt1', content: [{type:'text', val:'V = 7 x 2 x 4'}], correct: true },
                                { id: 'opt2', content: [{type:'text', val:'V = 14 x 4'}], correct: true },
                                { id: 'opt3', content: [{type:'text', val:'V = 9 x 4'}], correct: false },
                                { id: 'opt4', content: [{type:'text', val:'V = 7 x 8'}], correct: true }
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
                    id: "m4-w2-mon", name: "Mon", title: "Composite Volume (Stacked)",
                    sections: [
                        {
                            instruction: "Prisms A and B are combined to create this model.<br><br>&bull; The dimensions of Prism A are 8 by 3 by 4 inches.<br>&bull; The dimensions of Prism B are 4 by 3 by 4 inches.<br><br>Enter the combined volume.",
                            type: "visual_problem",
                            models: [{ type: 'composite', compType: 'stacked', nameA: "A", nameB: "B", colorA: "#e0e0e0", colorB: "#f9f9f9" }],
                            problems: [ { segments: [{ type: 'text', val: 'Total Volume: ' }, { type: 'whole_number', ans: 144 }, { type: 'text', val: ' cubic in' }] } ]
                        },
                        {
                            instruction: "Box A is 5 ft by 4 ft by 2 ft. Box B is 3 ft by 4 ft by 2 ft. What is their combined volume?",
                            type: "mixed_row", 
                            problems: [ { segments: [{ type: 'text', val: 'Total Volume: '}, { type: 'whole_number', ans: 64 }, { type: 'text', val: ' cubic ft' }] } ]
                        }
                    ]
                },
                {
                    id: "m4-w2-tue", name: "Tue", title: "Composite Volume (Side-by-Side)",
                    sections: [
                        {
                            instruction: "Prisms A and B are combined to create this model.<br><br>&bull; The dimensions of Prism A are 3 by 2 by 7 meters.<br>&bull; The dimensions of Prism B are 4 by 2 by 3 meters.<br><br>Enter the combined volume.",
                            type: "visual_problem",
                            models: [{ type: 'composite', compType: 'side_by_side', nameA: "A", nameB: "B", colorA: "#e0e0e0", colorB: "#f9f9f9" }],
                            problems: [ { segments: [{ type: 'text', val: 'Total Volume: ' }, { type: 'whole_number', ans: 66 }, { type: 'text', val: ' cubic m' }] } ]
                        },
                        {
                            instruction: "A structure is made of Block 1 and Block 2. Select all valid methods to determine the correct volume.",
                            type: "multiple_choice",
                            select_all: true,
                            options: [
                                { id: 'opt1', content: [{type:'text', val:'Add the volume of Block 1 and the volume of Block 2'}], correct: true },
                                { id: 'opt2', content: [{type:'text', val:'Multiply the length, width, and height of Block 1, then add to Block 2 volume'}], correct: true },
                                { id: 'opt3', content: [{type:'text', val:'Multiply the volume of Block 1 by the volume of Block 2'}], correct: false }
                            ]
                        }
                    ]
                },
                {
                    id: "m4-w2-wed", name: "Wed", title: "Missing Dimension & Unit Layers",
                    sections: [
                        {
                            instruction: "The volume of a box is 120 cubic units. The length is 6 units and width is 4 units. Enter the height.",
                            type: "mixed_row", 
                            problems: [ { segments: [{ type: 'text', val: 'Height: '}, { type: 'whole_number', ans: 5 }] } ]
                        },
                        {
                            instruction: "Ethan is building a rectangular prism. The bottom layer of the prism is shown.<br><br>&bull; Each block represents 1 cubic cm.<br>&bull; He builds a prism that has 4 layers.<br><br>Enter the volume, in cubic centimeters, of the completed rectangular prism.",
                            type: "visual_problem",
                            models: [{ type: 'block_layer', cols: 5, rows: 3, color: "#3498db" }],
                            problems: [ { segments: [{ type: 'text', val: 'Total Volume: ' }, { type: 'whole_number', ans: 60 }, { type: 'text', val: ' cubic cm' }] } ]
                        }
                    ]
                },
                {
                    id: "m4-w2-thu", name: "Thu", title: "Composite Review & Unit Layers",
                    sections: [
                        {
                            instruction: "Prisms A and B are combined to create this model.<br><br>&bull; The dimensions of Prism A are 2 by 3 by 5 yd.<br>&bull; The dimensions of Prism B are 6 by 3 by 2 yd.<br><br>Enter the combined volume.",
                            type: "visual_problem",
                            models: [{ type: 'composite', compType: 'side_by_side', nameA: "A", nameB: "B", colorA: "#e0e0e0", colorB: "#f9f9f9" }],
                            problems: [ { segments: [{ type: 'text', val: 'Total Volume: ' }, { type: 'whole_number', ans: 66 }, { type: 'text', val: ' cubic yd' }] } ]
                        },
                        {
                            instruction: "Chloe is building a rectangular prism. The bottom layer of the prism is shown.<br><br>&bull; Each block represents 1 cubic cm.<br>&bull; She builds a prism that has 5 layers.<br><br>Enter the volume, in cubic centimeters, of the completed rectangular prism.",
                            type: "visual_problem",
                            models: [{ type: 'block_layer', cols: 4, rows: 2, color: "#9b59b6" }],
                            problems: [ { segments: [{ type: 'text', val: 'Total Volume: ' }, { type: 'whole_number', ans: 40 }, { type: 'text', val: ' cubic cm' }] } ]
                        }
                    ]
                },
                {
                    id: "m4-w2-fri", name: "Fri", title: "Module Quiz",
                    sections: [
                        {
                            instruction: "Prisms A and B are combined to create this model.<br><br>&bull; The dimensions of Prism A are 6 by 5 by 2 ft.<br>&bull; The dimensions of Prism B are 3 by 5 by 2 ft.<br><br>Enter the combined volume.",
                            type: "visual_problem",
                            models: [{ type: 'composite', compType: 'stacked', nameA: "A", nameB: "B", colorA: "#e0e0e0", colorB: "#f9f9f9" }],
                            problems: [ { segments: [{ type: 'text', val: 'Total Volume: ' }, { type: 'whole_number', ans: 90 }, { type: 'text', val: ' cubic ft' }] } ]
                        },
                        {
                            instruction: "A prism is 5 in long, 3 in wide, and 4 in tall. Select all valid equations for its volume.",
                            type: "multiple_choice",
                            select_all: true,
                            options: [
                                { id: 'opt1', content: [{type:'text', val:'V = 5 x 3 x 4'}], correct: true },
                                { id: 'opt2', content: [{type:'text', val:'V = 15 x 4'}], correct: true },
                                { id: 'opt3', content: [{type:'text', val:'V = 20 x 3'}], correct: true },
                                { id: 'opt4', content: [{type:'text', val:'V = 8 x 4'}], correct: false }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

