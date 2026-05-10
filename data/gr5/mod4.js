// --- WEEK 1 HELPER HUB ---
const helperHubW1_Mod4 = {
    title: "★ Helper Hub: Two Ways to Find Volume!",
    content: `
        <div style="font-size:16px; line-height: 1.5;">
            <p style="margin-top:0; margin-bottom:15px;">Did you know there are <strong>two ways</strong> to find the volume of a rectangular prism? They both give you the same answer!</p>
            
            <div style="display:flex; gap:15px; justify-content: center; flex-wrap: wrap; text-align:center;">
                
                <div style="border:2px solid #3498db; padding:15px; border-radius:10px; background:#ebf5fb; flex: 1; min-width: 250px;">
                    <strong style="font-size:16px; color:#2980b9;">Method 1: Length &times; Width &times; Height</strong><br>
                    <div style="margin: 10px 0; font-size: 20px; font-weight: bold;">
                        5 &times; 3 &times; 4 = 60
                    </div>
                    <svg width="250" height="150" viewBox="-50 0 280 150">
                        <polygon points="30,60 70,30 170,30 130,60" fill="#fff" stroke="#000" stroke-width="2" />
                        <polygon points="30,60 130,60 130,120 30,120" fill="#fff" stroke="#000" stroke-width="2" />
                        <polygon points="130,60 170,30 170,90 130,120" fill="#fff" stroke="#000" stroke-width="2" />
                        
                        <text x="80" y="140" font-family="Fredoka, sans-serif" font-weight="bold" font-size="14">Length = 5</text>
                        <text x="145" y="115" font-family="Fredoka, sans-serif" font-weight="bold" font-size="14">Width = 3</text>
                        <text x="20" y="95" font-family="Fredoka, sans-serif" font-weight="bold" font-size="14" text-anchor="end">Height = 4</text>
                    </svg>
                </div>

                <div style="border:2px solid #f39c12; padding:15px; border-radius:10px; background:#fef9e7; flex: 1; min-width: 250px;">
                    <strong style="font-size:16px; color:#d35400;">Method 2: Base Area &times; Height</strong><br>
                    <div style="margin: 10px 0; font-size: 20px; font-weight: bold;">
                        15 &times; 4 = 60
                    </div>
                    <svg width="250" height="150" viewBox="-50 0 280 150">
                        <polygon points="30,120 130,120 170,90 70,90" fill="#f1c40f" stroke="#000" stroke-width="1" />
                        <polyline points="30,60 70,30 70,90" fill="none" stroke="#ccc" stroke-dasharray="4" stroke-width="1" />
                        <line x1="70" y1="30" x2="170" y2="30" stroke="#ccc" stroke-dasharray="4" stroke-width="1" />
                        
                        <polygon points="30,60 70,30 170,30 130,60" fill="none" stroke="#000" stroke-width="2" />
                        <polygon points="30,60 130,60 130,120 30,120" fill="none" stroke="#000" stroke-width="2" />
                        <polygon points="130,60 170,30 170,90 130,120" fill="none" stroke="#000" stroke-width="2" />

                        <text x="100" y="110" font-family="Fredoka, sans-serif" font-weight="bold" font-size="14" text-anchor="middle" fill="#d35400">Base Area = 15</text>
                        <text x="20" y="95" font-family="Fredoka, sans-serif" font-weight="bold" font-size="14" text-anchor="end">Height = 4</text>
                    </svg>
                    <div style="font-size: 14px; color: #555; margin-top: 5px;">
                        <em>(The Base Area is just Length &times; Width!)</em>
                    </div>
                </div>

            </div>
        </div>
    `
};

// --- WEEK 2 HELPER HUB ---
const helperHubW2_Mod4 = {
    title: "★ Helper Hub: Break It Apart!",
    content: `
        <div style="font-size:16px; line-height: 1.5;">
            <p style="margin-top:0; margin-bottom:15px;">When a shape looks like a staircase or an 'L', you can't find the volume all at once. You have to <strong>Break It Apart!</strong></p>
            
            <div style="display:flex; gap:15px; justify-content: center; flex-wrap: wrap; text-align:center;">
                
                <div style="border:2px solid #bdc3c7; padding:15px; border-radius:10px; background:#f4f6f7; flex: 1; min-width: 150px;">
                    <strong style="font-size:16px; color:#7f8c8d;">1. One Big Shape</strong><br>
                    <svg width="150" height="120" viewBox="-20 10 160 120" style="margin-top:10px; overflow:visible;">
                        <polygon points="10,50 30,30 60,30 40,50" fill="#e0e0e0" stroke="#000" stroke-width="2"/>
                        <polygon points="40,50 60,30 60,60 40,80" fill="#e0e0e0" stroke="#000" stroke-width="2"/>
                        <polygon points="40,80 60,60 110,60 90,80" fill="#e0e0e0" stroke="#000" stroke-width="2"/>
                        <polygon points="90,80 110,60 110,80 90,100" fill="#e0e0e0" stroke="#000" stroke-width="2"/>
                        <polygon points="10,50 40,50 40,80 90,80 90,100 10,100" fill="#e0e0e0" stroke="#000" stroke-width="2"/>

                        <text x="-2" y="80" font-family="Fredoka, sans-serif" font-size="14" font-weight="bold" fill="#555" text-anchor="end">5</text>
                        <text x="50" y="118" font-family="Fredoka, sans-serif" font-size="14" font-weight="bold" fill="#555" text-anchor="middle">8</text>
                        <text x="25" y="45" font-family="Fredoka, sans-serif" font-size="14" font-weight="bold" fill="#555" text-anchor="middle">3</text>
                        <text x="65" y="75" font-family="Fredoka, sans-serif" font-size="14" font-weight="bold" fill="#555" text-anchor="middle">5</text>
                        <text x="115" y="75" font-family="Fredoka, sans-serif" font-size="14" font-weight="bold" fill="#555" text-anchor="start">2</text>
                        <text x="15" y="35" font-family="Fredoka, sans-serif" font-size="14" font-weight="bold" fill="#555" text-anchor="end">2</text>
                    </svg>
                </div>

                <div style="border:2px solid #9b59b6; padding:15px; border-radius:10px; background:#f4ecf7; flex: 1; min-width: 250px;">
                    <strong style="font-size:16px; color:#8e44ad;">2. Slice into 2 Boxes!</strong><br>
                    <svg width="220" height="120" viewBox="-30 10 220 120" style="margin-top:10px; overflow:visible;">
                        
                        <polygon points="0,50 20,30 50,30 30,50" fill="#3498db" stroke="#000" stroke-width="2"/> 
                        <polygon points="30,50 50,30 50,80 30,100" fill="#3498db" stroke="#000" stroke-width="2"/> 
                        <polygon points="0,50 30,50 30,100 0,100" fill="#3498db" stroke="#000" stroke-width="2"/> 
                        
                        <text x="15" y="118" font-family="Fredoka, sans-serif" font-size="14" font-weight="bold" fill="#2980b9" text-anchor="middle">3</text>
                        <text x="-5" y="80" font-family="Fredoka, sans-serif" font-size="14" font-weight="bold" fill="#2980b9" text-anchor="end">5</text> 
                        <text x="5" y="35" font-family="Fredoka, sans-serif" font-size="14" font-weight="bold" fill="#2980b9" text-anchor="end">2</text>
                        
                        <polygon points="90,80 110,60 160,60 140,80" fill="#2ecc71" stroke="#000" stroke-width="2"/> 
                        <polygon points="140,80 160,60 160,80 140,100" fill="#2ecc71" stroke="#000" stroke-width="2"/> 
                        <polygon points="90,80 140,80 140,100 90,100" fill="#2ecc71" stroke="#000" stroke-width="2"/> 

                        <text x="115" y="118" font-family="Fredoka, sans-serif" font-size="14" font-weight="bold" fill="#27ae60" text-anchor="middle">5</text>
                        <text x="165" y="75" font-family="Fredoka, sans-serif" font-size="14" font-weight="bold" fill="#27ae60" text-anchor="start">2</text>
                        <text x="95" y="65" font-family="Fredoka, sans-serif" font-size="14" font-weight="bold" fill="#27ae60" text-anchor="end">2</text>
                    </svg>
                </div>
                
                <div style="border:2px solid #e67e22; padding:15px; border-radius:10px; background:#fdf2e9; flex: 1; min-width: 180px;">
                    <strong style="font-size:16px; color:#d35400;">3. Add their Volumes</strong><br>
                    <div style="margin-top:20px; font-size: 16px; font-weight: bold; color: #333;">
                        <span style="color:#2980b9;">Vol A = 3 &times; 5 &times; 2 = 30</span><br>
                        <span style="color:#27ae60;">Vol B = 5 &times; 2 &times; 2 = 20</span><br>
                        <hr style="border: 1px dashed #ccc; margin: 10px 0;">
                        <span style="font-size: 20px;">30 + 20 = 50</span>
                    </div>
                </div>

            </div>
        </div>
    `
};

const module4 = {
    id: "mod-4",
    name: "Volume Concepts",
    versions: [
        // ==========================================
        // VERSION A (Baseline)
        // ==========================================
        {
            id: "A",
            weeks: [
                {
                    weekNum: 1,
                    helperHub: helperHubW1_Mod4,
                    days: [
                        {
                            id: "m4-w1-mon-a", name: "Mon", title: "Visual Volume (LxWxH)",
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
                            id: "m4-w1-tue-a", name: "Tue", title: "Visual Volume (Base Area)",
                            sections: [
                                {
                                    instruction: "Enter the volume, in cubic meters, of this prism.",
                                    type: "visual_problem",
                                    models: [{ type: 'prism', bLabel: "20 sq m", hLabel: "6 m", color: "#ccc" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Volume: ' }, { type: 'whole_number', ans: 120 }, { type: 'text', val: ' cubic m' }] } ]
                                },
                                {
                                    instruction: "A right rectangular prism has a length of 6 cm, a width of 3 cm, and a height of 5 cm. Select all equations that calculate the volume.",
                                    type: "multiple_choice", select_all: true,
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
                            id: "m4-w1-wed-a", name: "Wed", title: "Missing Dimensions",
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
                            id: "m4-w1-thu-a", name: "Thu", title: "Applying Volume",
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
                            id: "m4-w1-fri-a", name: "Fri", title: "Weekly Quiz",
                            sections: [
                                {
                                    instruction: "Enter the volume, in cubic yards.",
                                    type: "visual_problem",
                                    models: [{ type: 'prism', bLabel: "15 sq yd", hLabel: "4 yd", color: "#ccc" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Volume: ' }, { type: 'whole_number', ans: 60 }, { type: 'text', val: ' cubic yd' }] } ]
                                },
                                {
                                    instruction: "A prism has a length of 7 cm, width of 2 cm, and height of 4 cm. Select all valid equations for its volume.",
                                    type: "multiple_choice", select_all: true,
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
                    helperHub: helperHubW2_Mod4,
                    days: [
                        {
                            id: "m4-w2-mon-a", name: "Mon", title: "Composite Volume (Stacked)",
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
                            id: "m4-w2-tue-a", name: "Tue", title: "Composite Volume (Side-by-Side)",
                            sections: [
                                {
                                    instruction: "Prisms A and B are combined to create this model.<br><br>&bull; The dimensions of Prism A are 3 by 2 by 7 meters.<br>&bull; The dimensions of Prism B are 4 by 2 by 3 meters.<br><br>Enter the combined volume.",
                                    type: "visual_problem",
                                    models: [{ type: 'composite', compType: 'side_by_side', nameA: "A", nameB: "B", colorA: "#e0e0e0", colorB: "#f9f9f9" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Total Volume: ' }, { type: 'whole_number', ans: 66 }, { type: 'text', val: ' cubic m' }] } ]
                                },
                                {
                                    instruction: "A structure is made of Block 1 and Block 2. Select all valid methods to determine the correct volume.",
                                    type: "multiple_choice", select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'Add the volume of Block 1 and the volume of Block 2'}], correct: true },
                                        { id: 'opt2', content: [{type:'text', val:'Multiply the length, width, and height of Block 1, then add to Block 2 volume'}], correct: true },
                                        { id: 'opt3', content: [{type:'text', val:'Multiply the volume of Block 1 by the volume of Block 2'}], correct: false }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m4-w2-wed-a", name: "Wed", title: "Missing Dimension & Unit Layers",
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
                            id: "m4-w2-thu-a", name: "Thu", title: "Composite Review & Unit Layers",
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
                            id: "m4-w2-fri-a", name: "Fri", title: "Module Quiz",
                            sections: [
                                {
                                    instruction: "Prisms A and B are combined to create this model.<br><br>&bull; The dimensions of Prism A are 6 by 5 by 2 ft.<br>&bull; The dimensions of Prism B are 3 by 5 by 2 ft.<br><br>Enter the combined volume.",
                                    type: "visual_problem",
                                    models: [{ type: 'composite', compType: 'stacked', nameA: "A", nameB: "B", colorA: "#e0e0e0", colorB: "#f9f9f9" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Total Volume: ' }, { type: 'whole_number', ans: 90 }, { type: 'text', val: ' cubic ft' }] } ]
                                },
                                {
                                    instruction: "A prism is 5 in long, 3 in wide, and 4 in tall. Select all valid equations for its volume.",
                                    type: "multiple_choice", select_all: true,
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
        },
        
        // ==========================================
        // VERSION B
        // ==========================================
        {
            id: "B",
            weeks: [
                {
                    weekNum: 1,
                    helperHub: helperHubW1_Mod4,
                    days: [
                        {
                            id: "m4-w1-mon-b", name: "Mon", title: "Visual Volume (LxWxH)",
                            sections: [
                                {
                                    instruction: "Enter the volume, in cubic centimeters, of this prism.",
                                    type: "visual_problem",
                                    models: [{ type: 'prism', lLabel: "6 cm", wLabel: "3 cm", hLabel: "4 cm", color: "#ccc" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Volume: ' }, { type: 'whole_number', ans: 72 }, { type: 'text', val: ' cubic cm' }] } ]
                                },
                                {
                                    instruction: "A shipping box has a length of 10 inches, width of 5 inches, and height of 3 inches. Enter the volume.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'text', val: 'Volume: '}, { type: 'whole_number', ans: 150 }, { type: 'text', val: ' cubic in' }] } ]
                                }
                            ]
                        },
                        {
                            id: "m4-w1-tue-b", name: "Tue", title: "Visual Volume (Base Area)",
                            sections: [
                                {
                                    instruction: "Enter the volume, in cubic meters, of this prism.",
                                    type: "visual_problem",
                                    models: [{ type: 'prism', bLabel: "30 sq m", hLabel: "4 m", color: "#ccc" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Volume: ' }, { type: 'whole_number', ans: 120 }, { type: 'text', val: ' cubic m' }] } ]
                                },
                                {
                                    instruction: "A right rectangular prism has a length of 6 cm, a width of 4 cm, and a height of 3 cm. Select all equations that calculate the volume.",
                                    type: "multiple_choice", select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'V = 6 x 4 x 3'}], correct: true },
                                        { id: 'opt2', content: [{type:'text', val:'V = 24 x 3'}], correct: true },
                                        { id: 'opt3', content: [{type:'text', val:'V = 6 + 4 + 3'}], correct: false },
                                        { id: 'opt4', content: [{type:'text', val:'V = 6 x 12'}], correct: true },
                                        { id: 'opt5', content: [{type:'text', val:'V = 10 x 3'}], correct: false }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m4-w1-wed-b", name: "Wed", title: "Missing Dimensions",
                            sections: [
                                {
                                    instruction: "A rectangular fish tank has a base area of 50 square inches and a height of 10 inches. Enter the volume.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'text', val: 'Volume: '}, { type: 'whole_number', ans: 500 }, { type: 'text', val: ' cubic in' }] } ]
                                },
                                {
                                    instruction: "Mike has a tissue box with a volume of 90 cubic inches. The area of the base is 30 square inches. Enter the height.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'text', val: 'Height: '}, { type: 'whole_number', ans: 3 }, { type: 'text', val: ' in' }] } ]
                                }
                            ]
                        },
                        {
                            id: "m4-w1-thu-b", name: "Thu", title: "Applying Volume",
                            sections: [
                                {
                                    instruction: "Enter the volume, in cubic feet, of this prism.",
                                    type: "visual_problem",
                                    models: [{ type: 'prism', lLabel: "12 ft", wLabel: "3 ft", hLabel: "2 ft", color: "#ccc" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Volume: ' }, { type: 'whole_number', ans: 72 }, { type: 'text', val: ' cubic ft' }] } ]
                                },
                                {
                                    instruction: "The volume of a moving box is 120 cubic feet. The length is 6 ft and the width is 4 ft. Enter the height.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'text', val: 'Height: '}, { type: 'whole_number', ans: 5 }, { type: 'text', val: ' ft' }] } ]
                                }
                            ]
                        },
                        {
                            id: "m4-w1-fri-b", name: "Fri", title: "Weekly Quiz",
                            sections: [
                                {
                                    instruction: "Enter the volume, in cubic yards.",
                                    type: "visual_problem",
                                    models: [{ type: 'prism', bLabel: "20 sq yd", hLabel: "5 yd", color: "#ccc" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Volume: ' }, { type: 'whole_number', ans: 100 }, { type: 'text', val: ' cubic yd' }] } ]
                                },
                                {
                                    instruction: "A prism has a length of 8 cm, width of 3 cm, and height of 2 cm. Select all valid equations for its volume.",
                                    type: "multiple_choice", select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'V = 8 x 3 x 2'}], correct: true },
                                        { id: 'opt2', content: [{type:'text', val:'V = 24 x 2'}], correct: true },
                                        { id: 'opt3', content: [{type:'text', val:'V = 11 x 2'}], correct: false },
                                        { id: 'opt4', content: [{type:'text', val:'V = 8 x 6'}], correct: true }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    weekNum: 2,
                    helperHub: helperHubW2_Mod4,
                    days: [
                        {
                            id: "m4-w2-mon-b", name: "Mon", title: "Composite Volume (Stacked)",
                            sections: [
                                {
                                    instruction: "Prisms A and B are combined to create this model.<br><br>&bull; The dimensions of Prism A are 6 by 4 by 5 inches.<br>&bull; The dimensions of Prism B are 3 by 4 by 5 inches.<br><br>Enter the combined volume.",
                                    type: "visual_problem",
                                    models: [{ type: 'composite', compType: 'stacked', nameA: "A", nameB: "B", colorA: "#e0e0e0", colorB: "#f9f9f9" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Total Volume: ' }, { type: 'whole_number', ans: 180 }, { type: 'text', val: ' cubic in' }] } ]
                                },
                                {
                                    instruction: "Box A is 4 ft by 3 ft by 3 ft. Box B is 2 ft by 3 ft by 3 ft. What is their combined volume?",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'text', val: 'Total Volume: '}, { type: 'whole_number', ans: 54 }, { type: 'text', val: ' cubic ft' }] } ]
                                }
                            ]
                        },
                        {
                            id: "m4-w2-tue-b", name: "Tue", title: "Composite Volume (Side-by-Side)",
                            sections: [
                                {
                                    instruction: "Prisms A and B are combined to create this model.<br><br>&bull; The dimensions of Prism A are 4 by 3 by 5 meters.<br>&bull; The dimensions of Prism B are 5 by 3 by 2 meters.<br><br>Enter the combined volume.",
                                    type: "visual_problem",
                                    models: [{ type: 'composite', compType: 'side_by_side', nameA: "A", nameB: "B", colorA: "#e0e0e0", colorB: "#f9f9f9" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Total Volume: ' }, { type: 'whole_number', ans: 90 }, { type: 'text', val: ' cubic m' }] } ]
                                },
                                {
                                    instruction: "A structure is made of Block 1 and Block 2. Select all valid methods to determine the correct volume.",
                                    type: "multiple_choice", select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'Add the volume of Block 1 and the volume of Block 2'}], correct: true },
                                        { id: 'opt2', content: [{type:'text', val:'Multiply the length, width, and height of Block 1, then add to Block 2 volume'}], correct: true },
                                        { id: 'opt3', content: [{type:'text', val:'Multiply the volume of Block 1 by the volume of Block 2'}], correct: false }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m4-w2-wed-b", name: "Wed", title: "Missing Dimension & Unit Layers",
                            sections: [
                                {
                                    instruction: "The volume of a box is 150 cubic units. The length is 5 units and width is 6 units. Enter the height.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'text', val: 'Height: '}, { type: 'whole_number', ans: 5 }] } ]
                                },
                                {
                                    instruction: "Ethan is building a rectangular prism. The bottom layer of the prism is shown.<br><br>&bull; Each block represents 1 cubic cm.<br>&bull; He builds a prism that has 5 layers.<br><br>Enter the volume, in cubic centimeters, of the completed rectangular prism.",
                                    type: "visual_problem",
                                    models: [{ type: 'block_layer', cols: 4, rows: 3, color: "#3498db" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Total Volume: ' }, { type: 'whole_number', ans: 60 }, { type: 'text', val: ' cubic cm' }] } ]
                                }
                            ]
                        },
                        {
                            id: "m4-w2-thu-b", name: "Thu", title: "Composite Review & Unit Layers",
                            sections: [
                                {
                                    instruction: "Prisms A and B are combined to create this model.<br><br>&bull; The dimensions of Prism A are 3 by 4 by 6 yd.<br>&bull; The dimensions of Prism B are 5 by 4 by 2 yd.<br><br>Enter the combined volume.",
                                    type: "visual_problem",
                                    models: [{ type: 'composite', compType: 'side_by_side', nameA: "A", nameB: "B", colorA: "#e0e0e0", colorB: "#f9f9f9" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Total Volume: ' }, { type: 'whole_number', ans: 112 }, { type: 'text', val: ' cubic yd' }] } ]
                                },
                                {
                                    instruction: "Chloe is building a rectangular prism. The bottom layer of the prism is shown.<br><br>&bull; Each block represents 1 cubic cm.<br>&bull; She builds a prism that has 4 layers.<br><br>Enter the volume, in cubic centimeters, of the completed rectangular prism.",
                                    type: "visual_problem",
                                    models: [{ type: 'block_layer', cols: 6, rows: 2, color: "#9b59b6" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Total Volume: ' }, { type: 'whole_number', ans: 48 }, { type: 'text', val: ' cubic cm' }] } ]
                                }
                            ]
                        },
                        {
                            id: "m4-w2-fri-b", name: "Fri", title: "Module Quiz",
                            sections: [
                                {
                                    instruction: "Prisms A and B are combined to create this model.<br><br>&bull; The dimensions of Prism A are 7 by 4 by 3 ft.<br>&bull; The dimensions of Prism B are 2 by 4 by 3 ft.<br><br>Enter the combined volume.",
                                    type: "visual_problem",
                                    models: [{ type: 'composite', compType: 'stacked', nameA: "A", nameB: "B", colorA: "#e0e0e0", colorB: "#f9f9f9" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Total Volume: ' }, { type: 'whole_number', ans: 108 }, { type: 'text', val: ' cubic ft' }] } ]
                                },
                                {
                                    instruction: "A prism is 6 in long, 4 in wide, and 3 in tall. Select all valid equations for its volume.",
                                    type: "multiple_choice", select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'V = 6 x 4 x 3'}], correct: true },
                                        { id: 'opt2', content: [{type:'text', val:'V = 24 x 3'}], correct: true },
                                        { id: 'opt3', content: [{type:'text', val:'V = 10 x 3'}], correct: false },
                                        { id: 'opt4', content: [{type:'text', val:'V = 6 x 12'}], correct: true }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        // ==========================================
        // VERSION C
        // ==========================================
        {
            id: "C",
            weeks: [
                {
                    weekNum: 1,
                    helperHub: helperHubW1_Mod4,
                    days: [
                        {
                            id: "m4-w1-mon-c", name: "Mon", title: "Visual Volume (LxWxH)",
                            sections: [
                                {
                                    instruction: "Enter the volume, in cubic centimeters, of this prism.",
                                    type: "visual_problem",
                                    models: [{ type: 'prism', lLabel: "4 cm", wLabel: "4 cm", hLabel: "5 cm", color: "#ccc" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Volume: ' }, { type: 'whole_number', ans: 80 }, { type: 'text', val: ' cubic cm' }] } ]
                                },
                                {
                                    instruction: "A shipping box has a length of 9 inches, width of 6 inches, and height of 2 inches. Enter the volume.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'text', val: 'Volume: '}, { type: 'whole_number', ans: 108 }, { type: 'text', val: ' cubic in' }] } ]
                                }
                            ]
                        },
                        {
                            id: "m4-w1-tue-c", name: "Tue", title: "Visual Volume (Base Area)",
                            sections: [
                                {
                                    instruction: "Enter the volume, in cubic meters, of this prism.",
                                    type: "visual_problem",
                                    models: [{ type: 'prism', bLabel: "25 sq m", hLabel: "6 m", color: "#ccc" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Volume: ' }, { type: 'whole_number', ans: 150 }, { type: 'text', val: ' cubic m' }] } ]
                                },
                                {
                                    instruction: "A right rectangular prism has a length of 5 cm, a width of 5 cm, and a height of 4 cm. Select all equations that calculate the volume.",
                                    type: "multiple_choice", select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'V = 5 x 5 x 4'}], correct: true },
                                        { id: 'opt2', content: [{type:'text', val:'V = 25 x 4'}], correct: true },
                                        { id: 'opt3', content: [{type:'text', val:'V = 10 x 4'}], correct: false },
                                        { id: 'opt4', content: [{type:'text', val:'V = 5 x 20'}], correct: true },
                                        { id: 'opt5', content: [{type:'text', val:'V = 25 + 4'}], correct: false }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m4-w1-wed-c", name: "Wed", title: "Missing Dimensions",
                            sections: [
                                {
                                    instruction: "A rectangular fish tank has a base area of 60 square inches and a height of 5 inches. Enter the volume.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'text', val: 'Volume: '}, { type: 'whole_number', ans: 300 }, { type: 'text', val: ' cubic in' }] } ]
                                },
                                {
                                    instruction: "Mike has a tissue box with a volume of 100 cubic inches. The area of the base is 25 square inches. Enter the height.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'text', val: 'Height: '}, { type: 'whole_number', ans: 4 }, { type: 'text', val: ' in' }] } ]
                                }
                            ]
                        },
                        {
                            id: "m4-w1-thu-c", name: "Thu", title: "Applying Volume",
                            sections: [
                                {
                                    instruction: "Enter the volume, in cubic feet, of this prism.",
                                    type: "visual_problem",
                                    models: [{ type: 'prism', lLabel: "8 ft", wLabel: "5 ft", hLabel: "3 ft", color: "#ccc" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Volume: ' }, { type: 'whole_number', ans: 120 }, { type: 'text', val: ' cubic ft' }] } ]
                                },
                                {
                                    instruction: "The volume of a moving box is 144 cubic feet. The length is 6 ft and the width is 6 ft. Enter the height.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'text', val: 'Height: '}, { type: 'whole_number', ans: 4 }, { type: 'text', val: ' ft' }] } ]
                                }
                            ]
                        },
                        {
                            id: "m4-w1-fri-c", name: "Fri", title: "Weekly Quiz",
                            sections: [
                                {
                                    instruction: "Enter the volume, in cubic yards.",
                                    type: "visual_problem",
                                    models: [{ type: 'prism', bLabel: "12 sq yd", hLabel: "8 yd", color: "#ccc" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Volume: ' }, { type: 'whole_number', ans: 96 }, { type: 'text', val: ' cubic yd' }] } ]
                                },
                                {
                                    instruction: "A prism has a length of 9 cm, width of 2 cm, and height of 5 cm. Select all valid equations for its volume.",
                                    type: "multiple_choice", select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'V = 9 x 2 x 5'}], correct: true },
                                        { id: 'opt2', content: [{type:'text', val:'V = 18 x 5'}], correct: true },
                                        { id: 'opt3', content: [{type:'text', val:'V = 11 x 5'}], correct: false },
                                        { id: 'opt4', content: [{type:'text', val:'V = 9 x 10'}], correct: true }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    weekNum: 2,
                    helperHub: helperHubW2_Mod4,
                    days: [
                        {
                            id: "m4-w2-mon-c", name: "Mon", title: "Composite Volume (Stacked)",
                            sections: [
                                {
                                    instruction: "Prisms A and B are combined to create this model.<br><br>&bull; The dimensions of Prism A are 9 by 2 by 5 inches.<br>&bull; The dimensions of Prism B are 4 by 2 by 5 inches.<br><br>Enter the combined volume.",
                                    type: "visual_problem",
                                    models: [{ type: 'composite', compType: 'stacked', nameA: "A", nameB: "B", colorA: "#e0e0e0", colorB: "#f9f9f9" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Total Volume: ' }, { type: 'whole_number', ans: 130 }, { type: 'text', val: ' cubic in' }] } ]
                                },
                                {
                                    instruction: "Box A is 6 ft by 2 ft by 4 ft. Box B is 3 ft by 2 ft by 4 ft. What is their combined volume?",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'text', val: 'Total Volume: '}, { type: 'whole_number', ans: 72 }, { type: 'text', val: ' cubic ft' }] } ]
                                }
                            ]
                        },
                        {
                            id: "m4-w2-tue-c", name: "Tue", title: "Composite Volume (Side-by-Side)",
                            sections: [
                                {
                                    instruction: "Prisms A and B are combined to create this model.<br><br>&bull; The dimensions of Prism A are 5 by 2 by 6 meters.<br>&bull; The dimensions of Prism B are 3 by 2 by 4 meters.<br><br>Enter the combined volume.",
                                    type: "visual_problem",
                                    models: [{ type: 'composite', compType: 'side_by_side', nameA: "A", nameB: "B", colorA: "#e0e0e0", colorB: "#f9f9f9" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Total Volume: ' }, { type: 'whole_number', ans: 84 }, { type: 'text', val: ' cubic m' }] } ]
                                },
                                {
                                    instruction: "A structure is made of Block 1 and Block 2. Select all valid methods to determine the correct volume.",
                                    type: "multiple_choice", select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'Add the volume of Block 1 and the volume of Block 2'}], correct: true },
                                        { id: 'opt2', content: [{type:'text', val:'Multiply the length, width, and height of Block 1, then add to Block 2 volume'}], correct: true },
                                        { id: 'opt3', content: [{type:'text', val:'Multiply the volume of Block 1 by the volume of Block 2'}], correct: false }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m4-w2-wed-c", name: "Wed", title: "Missing Dimension & Unit Layers",
                            sections: [
                                {
                                    instruction: "The volume of a box is 180 cubic units. The length is 6 units and width is 5 units. Enter the height.",
                                    type: "mixed_row", 
                                    problems: [ { segments: [{ type: 'text', val: 'Height: '}, { type: 'whole_number', ans: 6 }] } ]
                                },
                                {
                                    instruction: "Ethan is building a rectangular prism. The bottom layer of the prism is shown.<br><br>&bull; Each block represents 1 cubic cm.<br>&bull; He builds a prism that has 3 layers.<br><br>Enter the volume, in cubic centimeters, of the completed rectangular prism.",
                                    type: "visual_problem",
                                    models: [{ type: 'block_layer', cols: 5, rows: 4, color: "#3498db" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Total Volume: ' }, { type: 'whole_number', ans: 60 }, { type: 'text', val: ' cubic cm' }] } ]
                                }
                            ]
                        },
                        {
                            id: "m4-w2-thu-c", name: "Thu", title: "Composite Review & Unit Layers",
                            sections: [
                                {
                                    instruction: "Prisms A and B are combined to create this model.<br><br>&bull; The dimensions of Prism A are 4 by 2 by 8 yd.<br>&bull; The dimensions of Prism B are 6 by 2 by 3 yd.<br><br>Enter the combined volume.",
                                    type: "visual_problem",
                                    models: [{ type: 'composite', compType: 'side_by_side', nameA: "A", nameB: "B", colorA: "#e0e0e0", colorB: "#f9f9f9" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Total Volume: ' }, { type: 'whole_number', ans: 100 }, { type: 'text', val: ' cubic yd' }] } ]
                                },
                                {
                                    instruction: "Chloe is building a rectangular prism. The bottom layer of the prism is shown.<br><br>&bull; Each block represents 1 cubic cm.<br>&bull; She builds a prism that has 6 layers.<br><br>Enter the volume, in cubic centimeters, of the completed rectangular prism.",
                                    type: "visual_problem",
                                    models: [{ type: 'block_layer', cols: 5, rows: 2, color: "#9b59b6" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Total Volume: ' }, { type: 'whole_number', ans: 60 }, { type: 'text', val: ' cubic cm' }] } ]
                                }
                            ]
                        },
                        {
                            id: "m4-w2-fri-c", name: "Fri", title: "Module Quiz",
                            sections: [
                                {
                                    instruction: "Prisms A and B are combined to create this model.<br><br>&bull; The dimensions of Prism A are 8 by 3 by 4 ft.<br>&bull; The dimensions of Prism B are 4 by 3 by 4 ft.<br><br>Enter the combined volume.",
                                    type: "visual_problem",
                                    models: [{ type: 'composite', compType: 'stacked', nameA: "A", nameB: "B", colorA: "#e0e0e0", colorB: "#f9f9f9" }],
                                    problems: [ { segments: [{ type: 'text', val: 'Total Volume: ' }, { type: 'whole_number', ans: 144 }, { type: 'text', val: ' cubic ft' }] } ]
                                },
                                {
                                    instruction: "A prism is 7 in long, 3 in wide, and 5 in tall. Select all valid equations for its volume.",
                                    type: "multiple_choice", select_all: true,
                                    options: [
                                        { id: 'opt1', content: [{type:'text', val:'V = 7 x 3 x 5'}], correct: true },
                                        { id: 'opt2', content: [{type:'text', val:'V = 21 x 5'}], correct: true },
                                        { id: 'opt3', content: [{type:'text', val:'V = 10 x 5'}], correct: false },
                                        { id: 'opt4', content: [{type:'text', val:'V = 7 x 15'}], correct: true }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};