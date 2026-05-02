// --- SHARED HELPER HUBS ---
const helperHubW1_Mod8 = {
    title: "★ Helper Hub: Area vs. Perimeter",
    content: `
        <div style="display:flex; flex-direction:column; gap:15px; font-size:16px;">
            <div style="border:2px solid #ccc; padding:15px; border-radius:10px; background:#fff;">
                <strong style="font-size:18px; color:#2c7be5;">Perimeter = The Fence</strong>
                <p style="margin:8px 0;">Perimeter is the total length of the <strong>outside edge</strong>. Always add all the sides together!</p>
                <div style="text-align:center; margin:10px 0;">
                    <svg width="140" height="90" viewBox="0 0 140 90">
                        <rect x="20" y="15" width="100" height="60" fill="none" stroke="#e74c3c" stroke-width="4" stroke-dasharray="8,4"/>
                        <text x="70" y="10" font-size="14" font-weight="bold" text-anchor="middle">5</text>
                        <text x="70" y="88" font-size="14" font-weight="bold" text-anchor="middle">5</text>
                        <text x="10" y="50" font-size="14" font-weight="bold" text-anchor="middle">3</text>
                        <text x="130" y="50" font-size="14" font-weight="bold" text-anchor="middle">3</text>
                    </svg>
                </div>
                <div style="text-align:center; font-weight:bold;">5 + 3 + 5 + 3 = 16 units</div>
            </div>
            <div style="border:2px solid #ccc; padding:15px; border-radius:10px; background:#fff;">
                <strong style="font-size:18px; color:#2c7be5;">Area = The Grass</strong>
                <p style="margin:8px 0;">Area is the <strong>inside space</strong>. Multiply the length by the width to find the square units!</p>
                <div style="text-align:center; margin:10px 0;">
                    ${drawGridArea(5, 3, rectCoords(1,1,3,5)).replace('margin:10px auto;', 'margin:0 auto; max-height:80px;')}
                </div>
                <div style="text-align:center; font-weight:bold;">5 &times; 3 = 15 square units</div>
            </div>
        </div>
    `
};

const helperHubW2_Mod8 = {
    title: "★ Helper Hub: The Chop & Add Strategy",
    content: `
        <div style="font-size:15px; line-height: 1.3;">
            <p style="margin-top:0; margin-bottom:12px;">When you need to find the area of a weird shape, follow these 3 steps!</p>
            
            <div style="display:flex; align-items:center; gap:15px; border:2px solid #ccc; padding:10px; border-radius:10px; background:#fff; margin-bottom:10px; break-inside: avoid;">
                <div style="flex:1;">
                    <strong style="font-size:16px;">Step 1: Chop It!</strong><br>
                    Draw a line to chop the shape into 2 easy rectangles.
                </div>
                <svg width="120" height="70" viewBox="0 0 250 140">
                    <polygon points="40,20 120,20 120,80 220,80 220,120 40,120" fill="#e3f2fd" stroke="#333" stroke-width="3"/>
                    <line x1="40" y1="80" x2="120" y2="80" stroke="#e74c3c" stroke-width="4" stroke-dasharray="6,4"/>
                    <text x="80" y="15" font-size="18" fill="#333" text-anchor="middle">4</text>
                    <text x="25" y="75" font-size="18" fill="#333" text-anchor="middle">5</text>
                    <text x="130" y="135" font-size="18" fill="#333" text-anchor="middle">9</text>
                    <text x="235" y="105" font-size="18" fill="#333" text-anchor="middle">2</text>
                </svg>
            </div>
            
            <div style="display:flex; align-items:center; gap:15px; border:2px solid #ccc; padding:10px; border-radius:10px; background:#fff; margin-bottom:10px; break-inside: avoid;">
                <div style="flex:1;">
                    <strong style="font-size:16px; color:#e74c3c;">Step 2: Find the Hidden Side</strong><br>
                    Look at the parallel lines! The full left side is 5, but the bottom piece is 2. So the hidden top piece is <strong style="color:#e74c3c;">5 - 2 = 3</strong>.
                </div>
                <svg width="120" height="70" viewBox="0 0 250 140">
                    <polygon points="40,20 120,20 120,80 220,80 220,120 40,120" fill="#e3f2fd" stroke="#333" stroke-width="3"/>
                    <line x1="40" y1="80" x2="120" y2="80" stroke="#333" stroke-width="2" stroke-dasharray="4,4"/>
                    <line x1="40" y1="20" x2="40" y2="120" stroke="#2c7be5" stroke-width="6"/>
                    <line x1="220" y1="80" x2="220" y2="120" stroke="#2c7be5" stroke-width="6"/>
                    <line x1="120" y1="20" x2="120" y2="80" stroke="#e74c3c" stroke-width="6"/>
                    <text x="25" y="75" font-size="18" font-weight="bold" fill="#2c7be5" text-anchor="middle">5</text>
                    <text x="235" y="105" font-size="18" font-weight="bold" fill="#2c7be5" text-anchor="middle">2</text>
                    <text x="165" y="55" font-size="18" font-weight="bold" fill="#e74c3c" text-anchor="middle">5 - 2 = 3</text>
                </svg>
            </div>
            
            <div style="display:flex; align-items:center; gap:15px; border:2px solid #ccc; padding:10px; border-radius:10px; background:#fff; break-inside: avoid;">
                <div style="flex:1;">
                    <strong style="font-size:16px;">Step 3: Multiply & Add!</strong><br>
                    <em>A = 4 &times; 3 = 12</em><br>
                    <em>B = 9 &times; 2 = 18</em><br>
                    <strong>Total = 12 + 18 = 30 sq units</strong>
                </div>
                <svg width="120" height="70" viewBox="0 0 250 140">
                    <rect x="40" y="20" width="80" height="60" fill="#fff9c4" stroke="#333" stroke-width="3"/>
                    <rect x="40" y="80" width="180" height="40" fill="#c8e6c9" stroke="#333" stroke-width="3"/>
                    <text x="80" y="58" font-size="22" font-weight="bold" fill="#333" text-anchor="middle">A: 12</text>
                    <text x="130" y="108" font-size="22" font-weight="bold" fill="#333" text-anchor="middle">B: 18</text>
                </svg>
            </div>
        </div>
    `
};


// --- VERSIONS DATA ---
const mod8Versions = {
    A: {
        id: "mod-8-a",
        name: "Linear Area & Measurement",
        weeks: [
            {
                weekNum: 1,
                helperHub: helperHubW1_Mod8,
                days: [
                    {
                        id: "m8-w1-mon-a", name: "Mon", title: "Week 1: Monday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { svg: drawPolygon(220, 160, [[40,60], [160,60], [160,120], [40,120]], [{x: 100, y: 45, t: "8 cm"}, {x: 185, y: 90, t: "5 cm"}]), text: "1. &nbsp; The rectangle shown has side lengths of 8 centimeters and 5 centimeters. Enter the perimeter, in centimeters, of the rectangle.", answer: "26" }
                            ] },
                            { type: "input", instruction: "A shaded rectangle is shown on the grid. One square represents 1 square unit. Solve the related problems below.", problems: [ 
                                { svg: drawGridArea(10, 8, rectCoords(2,2,4,6)), text: "2. &nbsp; Part A: What is the perimeter, in units, of the rectangle?", answer: "20" },
                                { text: "Part B: What is the area, in square units, of the rectangle?", answer: "24" }
                            ] }
                        ]
                    },
                    {
                        id: "m8-w1-tue-a", name: "Tue", title: "Week 1: Tuesday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { svg: drawPolygon(240, 180, [[90,40], [150,40], [180,92], [150,144], [90,144], [60,92]], [{x: 120, y: 25, t: "6 in"}]), text: "1. &nbsp; The regular hexagon shown has equal side lengths of 6 inches. Enter the perimeter, in inches, of the polygon.", answer: "36" }
                            ] },
                            { type: "mc", instruction: "2. &nbsp; A rectangle has an area of 45 square feet and a length of 9 feet. Which equation can be used to find the width, w, of the rectangle?", options: [ { text: "9 &times; w = 45", correct: true }, { text: "9 + w = 45", correct: false }, { text: "45 &times; 9 = w", correct: false } ] }
                        ]
                    },
                    {
                        id: "m8-w1-wed-a", name: "Wed", title: "Week 1: Wednesday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { svg: drawRulerRectangle(5, 3), text: "1. &nbsp; The sides of a rectangle are shown matching up to rulers. The rulers measure in inches. What is the perimeter of the rectangle?", answer: "16" }
                            ] },
                            { type: "mc", instruction: "2. &nbsp; A shaded rectangle is shown on the grid. Which expression can be used to find the area of the rectangle?", problems: [{ svg: drawGridArea(10, 8, rectCoords(1,2,5,7)) }], options: [ { text: "5 + 7", correct: false }, { text: "7 + 7 + 7 + 7 + 7", correct: true }, { text: "5 &times; 5", correct: false } ] }
                        ]
                    },
                    {
                        id: "m8-w1-thu-a", name: "Thu", title: "Week 1: Thursday",
                        sections: [
                            { type: "input", instruction: "A shaded rectangle is shown on the grid. One square represents 1 square unit. Solve the related problems below.", problems: [ 
                                { svg: drawGridArea(8, 8, rectCoords(2,2,5,5)), text: "1. &nbsp; Part A: What is the perimeter, in units, of the rectangle?", answer: "20" },
                                { text: "Part B: What is the area, in square units, of the rectangle?", answer: "25" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { svg: drawGridArea(8, 8, [...rectCoords(2,2,4,2), ...rectCoords(4,4,2,3)]), text: "2. &nbsp; An irregular shape is shaded on the grid. One square represents 1 square unit. What is the area of the shape?", answer: "14" }
                            ] }
                        ]
                    },
                    {
                        id: "m8-w1-fri-a", name: "Fri", title: "Week 1: Friday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { svg: drawPolygon(240, 180, [[97,45], [143,45], [175,77], [175,123], [143,155], [97,155], [65,123], [65,77]], [{x: 120, y: 30, t: "4 ft"}]), text: "1. &nbsp; The regular octagon shown has equal side lengths of 4 feet. Enter the perimeter, in feet, of the polygon.", answer: "32" }
                            ] },
                            { type: "mc", instruction: "2. &nbsp; A shaded rectangle is shown on the grid. Which expression can be used to find the area of the rectangle?", problems: [{ svg: drawGridArea(8, 8, rectCoords(1,1,6,4)) }], options: [ { text: "6 &times; 4", correct: true }, { text: "6 + 4", correct: false }, { text: "4 + 4 + 4 + 4", correct: false } ] }
                        ]
                    }
                ]
            },
            {
                weekNum: 2,
                helperHub: helperHubW2_Mod8,
                days: [
                    {
                        id: "m8-w2-mon-a", name: "Mon", title: "Week 2: Monday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { svg: drawPolygon(260, 230, [[50,40], [130,40], [130,140], [210,140], [210,200], [50,200]], [{x: 90, y: 25, t: "6 in"}, {x: 145, y: 90, t: "5 in"}, {x: 170, y: 125, t: "4 in"}, {x: 235, y: 170, t: "3 in"}, {x: 130, y: 215, t: "10 in"}, {x: 30, y: 120, t: "8 in"}]), text: "1. &nbsp; The side lengths of a shape are shown. Enter the perimeter, in inches, of the shape.", answer: "36" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { svg: drawRulerRectangle(4, 7), text: "2. &nbsp; The sides of a rectangle are shown matching up to rulers. The rulers measure in inches. What is the perimeter of the rectangle?", answer: "22" }
                            ] }
                        ]
                    },
                    {
                        id: "m8-w2-tue-a", name: "Tue", title: "Week 2: Tuesday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { svg: drawPolygon(220, 200, [[40,40], [160,40], [160,90], [80,90], [80,160], [40,160]], [{x: 100, y: 25, t: "10 m"}, {x: 180, y: 65, t: "4 m"}, {x: 60, y: 175, t: "3 m"}, {x: 20, y: 100, t: "9 m"}]), text: "1. &nbsp; This figure is made by joining two rectangles. Some of the outer side lengths are shown. Enter the total area, in square meters, of the figure.", answer: "55" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; A garden has an area of 42 square feet. If the width of the garden is 6 feet, what is the length of the garden in feet?", answer: "7" }
                            ] }
                        ]
                    },
                    {
                        id: "m8-w2-wed-a", name: "Wed", title: "Week 2: Wednesday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { svg: drawPolygon(280, 200, [[50,40], [230,40], [230,90], [160,90], [160,180], [120,180], [120,90], [50,90]], [{x: 140, y: 25, t: "14 in"}, {x: 250, y: 65, t: "4 in"}, {x: 195, y: 105, t: "5 in"}, {x: 180, y: 135, t: "7 in"}, {x: 140, y: 195, t: "4 in"}, {x: 100, y: 135, t: "7 in"}, {x: 85, y: 105, t: "5 in"}, {x: 30, y: 65, t: "4 in"}]), text: "1. &nbsp; The side lengths of a T-shaped window are shown. Enter the perimeter, in inches, of the window.", answer: "50" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; A rectangular rug has an area of 54 square feet. If the length of the rug is 9 feet, what is the width of the rug in feet?", answer: "6" }
                            ] }
                        ]
                    },
                    {
                        id: "m8-w2-thu-a", name: "Thu", title: "Week 2: Thursday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { svg: drawPolygon(260, 200, [[50,40], [210,40], [210,180], [160,180], [160,100], [50,100]], [{x: 130, y: 25, t: "12 m"}, {x: 235, y: 110, t: "10 m"}, {x: 185, y: 195, t: "4 m"}, {x: 30, y: 70, t: "4 m"}]), text: "1. &nbsp; This figure is made by joining two rectangles. Some of the outer side lengths are shown. Enter the total area, in square meters, of the figure.", answer: "72" }
                            ] },
                            { type: "input", instruction: "A shaded rectangle is shown on the grid. One square represents 1 square unit. Solve the related problems below.", problems: [ 
                                { svg: drawGridArea(10, 6, rectCoords(2,1,2,8)), text: "2. &nbsp; Part A: What is the perimeter, in units, of the rectangle?", answer: "20" },
                                { text: "Part B: What is the area, in square units, of the rectangle?", answer: "16" }
                            ] }
                        ]
                    },
                    {
                        id: "m8-w2-fri-a", name: "Fri", title: "Week 2: Friday",
                        sections: [
                            { type: "input", instruction: "This figure is made by joining two rectangles. Some of the outer side lengths are shown. Solve the related problems below.", problems: [ 
                                { svg: drawPolygon(240, 180, [[50,40], [190,40], [190,100], [110,100], [110,160], [50,160]], [{x: 120, y: 25, t: "8 m"}, {x: 215, y: 70, t: "3 m"}, {x: 80, y: 175, t: "3 m"}, {x: 30, y: 100, t: "6 m"}]), text: "1. &nbsp; Part A: What is the perimeter, in meters, of the figure?", answer: "28" },
                                { text: "Part B: What is the total area, in square meters, of the figure?", answer: "33" }
                            ] },
                            { type: "mc", instruction: "2. &nbsp; A shaded rectangle is shown on the grid. Which expression can be used to find the area of the rectangle?", problems: [{ svg: drawGridArea(8, 8, rectCoords(2,2,5,6)) }], options: [ { text: "6 + 6 + 6 + 6 + 6", correct: true }, { text: "5 + 6", correct: false }, { text: "5 + 5 + 5 + 5 + 5", correct: false } ] }
                        ]
                    }
                ]
            }
        ]
    },
    B: {
        id: "mod-8-b",
        name: "Linear Area & Measurement",
        weeks: [
            {
                weekNum: 1,
                helperHub: helperHubW1_Mod8,
                days: [
                    {
                        id: "m8-w1-mon-b", name: "Mon", title: "Week 1: Monday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { svg: drawPolygon(220, 160, [[40,60], [160,60], [160,120], [40,120]], [{x: 100, y: 45, t: "7 cm"}, {x: 185, y: 90, t: "4 cm"}]), text: "1. &nbsp; The rectangle shown has side lengths of 7 centimeters and 4 centimeters. Enter the perimeter, in centimeters, of the rectangle.", answer: "22" }
                            ] },
                            { type: "input", instruction: "A shaded rectangle is shown on the grid. One square represents 1 square unit. Solve the related problems below.", problems: [ 
                                { svg: drawGridArea(10, 8, rectCoords(2,2,3,5)), text: "2. &nbsp; Part A: What is the perimeter, in units, of the rectangle?", answer: "16" },
                                { text: "Part B: What is the area, in square units, of the rectangle?", answer: "15" }
                            ] }
                        ]
                    },
                    {
                        id: "m8-w1-tue-b", name: "Tue", title: "Week 1: Tuesday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { svg: drawPolygon(240, 180, [[90,40], [150,40], [180,92], [150,144], [90,144], [60,92]], [{x: 120, y: 25, t: "5 in"}]), text: "1. &nbsp; The regular hexagon shown has equal side lengths of 5 inches. Enter the perimeter, in inches, of the polygon.", answer: "30" }
                            ] },
                            { type: "mc", instruction: "2. &nbsp; A rectangle has an area of 32 square feet and a length of 8 feet. Which equation can be used to find the width, w, of the rectangle?", options: [ { text: "8 &times; w = 32", correct: true }, { text: "8 + w = 32", correct: false }, { text: "32 &times; 8 = w", correct: false } ] }
                        ]
                    },
                    {
                        id: "m8-w1-wed-b", name: "Wed", title: "Week 1: Wednesday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { svg: drawRulerRectangle(6, 4), text: "1. &nbsp; The sides of a rectangle are shown matching up to rulers. The rulers measure in inches. What is the perimeter of the rectangle?", answer: "20" }
                            ] },
                            { type: "mc", instruction: "2. &nbsp; A shaded rectangle is shown on the grid. Which expression can be used to find the area of the rectangle?", problems: [{ svg: drawGridArea(10, 8, rectCoords(1,2,4,6)) }], options: [ { text: "4 + 6", correct: false }, { text: "6 + 6 + 6 + 6", correct: true }, { text: "4 &times; 4", correct: false } ] }
                        ]
                    },
                    {
                        id: "m8-w1-thu-b", name: "Thu", title: "Week 1: Thursday",
                        sections: [
                            { type: "input", instruction: "A shaded rectangle is shown on the grid. One square represents 1 square unit. Solve the related problems below.", problems: [ 
                                { svg: drawGridArea(8, 8, rectCoords(1,1,6,6)), text: "1. &nbsp; Part A: What is the perimeter, in units, of the rectangle?", answer: "24" },
                                { text: "Part B: What is the area, in square units, of the rectangle?", answer: "36" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { svg: drawGridArea(8, 8, [...rectCoords(2,2,3,3), ...rectCoords(5,3,2,2)]), text: "2. &nbsp; An irregular shape is shaded on the grid. One square represents 1 square unit. What is the area of the shape?", answer: "13" }
                            ] }
                        ]
                    },
                    {
                        id: "m8-w1-fri-b", name: "Fri", title: "Week 1: Friday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { svg: drawPolygon(240, 180, [[97,45], [143,45], [175,77], [175,123], [143,155], [97,155], [65,123], [65,77]], [{x: 120, y: 30, t: "5 ft"}]), text: "1. &nbsp; The regular octagon shown has equal side lengths of 5 feet. Enter the perimeter, in feet, of the polygon.", answer: "40" }
                            ] },
                            { type: "mc", instruction: "2. &nbsp; A shaded rectangle is shown on the grid. Which expression can be used to find the area of the rectangle?", problems: [{ svg: drawGridArea(8, 8, rectCoords(1,1,5,3)) }], options: [ { text: "5 &times; 3", correct: true }, { text: "5 + 3", correct: false }, { text: "3 + 3 + 3", correct: false } ] }
                        ]
                    }
                ]
            },
            {
                weekNum: 2,
                helperHub: helperHubW2_Mod8,
                days: [
                    {
                        id: "m8-w2-mon-b", name: "Mon", title: "Week 2: Monday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { svg: drawPolygon(260, 230, [[50,40], [130,40], [130,140], [210,140], [210,200], [50,200]], [{x: 90, y: 25, t: "7 in"}, {x: 145, y: 90, t: "4 in"}, {x: 170, y: 125, t: "3 in"}, {x: 235, y: 170, t: "4 in"}, {x: 130, y: 215, t: "10 in"}, {x: 30, y: 120, t: "8 in"}]), text: "1. &nbsp; The side lengths of a shape are shown. Enter the perimeter, in inches, of the shape.", answer: "36" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { svg: drawRulerRectangle(5, 6), text: "2. &nbsp; The sides of a rectangle are shown matching up to rulers. The rulers measure in inches. What is the perimeter of the rectangle?", answer: "22" }
                            ] }
                        ]
                    },
                    {
                        id: "m8-w2-tue-b", name: "Tue", title: "Week 2: Tuesday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { svg: drawPolygon(220, 200, [[40,40], [160,40], [160,90], [80,90], [80,160], [40,160]], [{x: 100, y: 25, t: "8 m"}, {x: 180, y: 65, t: "3 m"}, {x: 60, y: 175, t: "2 m"}, {x: 20, y: 100, t: "7 m"}]), text: "1. &nbsp; This figure is made by joining two rectangles. Some of the outer side lengths are shown. Enter the total area, in square meters, of the figure.", answer: "32" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; A garden has an area of 56 square feet. If the width of the garden is 8 feet, what is the length of the garden in feet?", answer: "7" }
                            ] }
                        ]
                    },
                    {
                        id: "m8-w2-wed-b", name: "Wed", title: "Week 2: Wednesday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { svg: drawPolygon(280, 200, [[50,40], [230,40], [230,90], [160,90], [160,180], [120,180], [120,90], [50,90]], [{x: 140, y: 25, t: "16 in"}, {x: 250, y: 65, t: "3 in"}, {x: 195, y: 105, t: "6 in"}, {x: 180, y: 135, t: "8 in"}, {x: 140, y: 195, t: "4 in"}, {x: 100, y: 135, t: "8 in"}, {x: 85, y: 105, t: "6 in"}, {x: 30, y: 65, t: "3 in"}]), text: "1. &nbsp; The side lengths of a T-shaped window are shown. Enter the perimeter, in inches, of the window.", answer: "54" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; A rectangular rug has an area of 63 square feet. If the length of the rug is 9 feet, what is the width of the rug in feet?", answer: "7" }
                            ] }
                        ]
                    },
                    {
                        id: "m8-w2-thu-b", name: "Thu", title: "Week 2: Thursday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { svg: drawPolygon(260, 200, [[50,40], [210,40], [210,180], [160,180], [160,100], [50,100]], [{x: 130, y: 25, t: "10 m"}, {x: 235, y: 110, t: "8 m"}, {x: 185, y: 195, t: "3 m"}, {x: 30, y: 70, t: "5 m"}]), text: "1. &nbsp; This figure is made by joining two rectangles. Some of the outer side lengths are shown. Enter the total area, in square meters, of the figure.", answer: "59" }
                            ] },
                            { type: "input", instruction: "A shaded rectangle is shown on the grid. One square represents 1 square unit. Solve the related problems below.", problems: [ 
                                { svg: drawGridArea(10, 8, rectCoords(2,1,3,7)), text: "2. &nbsp; Part A: What is the perimeter, in units, of the rectangle?", answer: "20" },
                                { text: "Part B: What is the area, in square units, of the rectangle?", answer: "21" }
                            ] }
                        ]
                    },
                    {
                        id: "m8-w2-fri-b", name: "Fri", title: "Week 2: Friday",
                        sections: [
                            { type: "input", instruction: "This figure is made by joining two rectangles. Some of the outer side lengths are shown. Solve the related problems below.", problems: [ 
                                { svg: drawPolygon(240, 180, [[50,40], [190,40], [190,100], [110,100], [110,160], [50,160]], [{x: 120, y: 25, t: "10 m"}, {x: 215, y: 70, t: "4 m"}, {x: 80, y: 175, t: "4 m"}, {x: 30, y: 100, t: "9 m"}]), text: "1. &nbsp; Part A: What is the perimeter, in meters, of the figure?", answer: "38" },
                                { text: "Part B: What is the total area, in square meters, of the figure?", answer: "60" }
                            ] },
                            { type: "mc", instruction: "2. &nbsp; A shaded rectangle is shown on the grid. Which expression can be used to find the area of the rectangle?", problems: [{ svg: drawGridArea(8, 8, rectCoords(2,1,4,7)) }], options: [ { text: "7 + 7 + 7 + 7", correct: true }, { text: "4 + 7", correct: false }, { text: "4 + 4 + 4 + 4", correct: false } ] }
                        ]
                    }
                ]
            }
        ]
    },
    C: {
        id: "mod-8-c",
        name: "Linear Area & Measurement",
        weeks: [
            {
                weekNum: 1,
                helperHub: helperHubW1_Mod8,
                days: [
                    {
                        id: "m8-w1-mon-c", name: "Mon", title: "Week 1: Monday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { svg: drawPolygon(220, 160, [[40,60], [160,60], [160,120], [40,120]], [{x: 100, y: 45, t: "9 cm"}, {x: 185, y: 90, t: "6 cm"}]), text: "1. &nbsp; The rectangle shown has side lengths of 9 centimeters and 6 centimeters. Enter the perimeter, in centimeters, of the rectangle.", answer: "30" }
                            ] },
                            { type: "input", instruction: "A shaded rectangle is shown on the grid. One square represents 1 square unit. Solve the related problems below.", problems: [ 
                                { svg: drawGridArea(10, 8, rectCoords(2,2,5,4)), text: "2. &nbsp; Part A: What is the perimeter, in units, of the rectangle?", answer: "18" },
                                { text: "Part B: What is the area, in square units, of the rectangle?", answer: "20" }
                            ] }
                        ]
                    },
                    {
                        id: "m8-w1-tue-c", name: "Tue", title: "Week 1: Tuesday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { svg: drawPolygon(240, 180, [[90,40], [150,40], [180,92], [150,144], [90,144], [60,92]], [{x: 120, y: 25, t: "8 in"}]), text: "1. &nbsp; The regular hexagon shown has equal side lengths of 8 inches. Enter the perimeter, in inches, of the polygon.", answer: "48" }
                            ] },
                            { type: "mc", instruction: "2. &nbsp; A rectangle has an area of 42 square feet and a length of 7 feet. Which equation can be used to find the width, w, of the rectangle?", options: [ { text: "7 &times; w = 42", correct: true }, { text: "7 + w = 42", correct: false }, { text: "42 &times; 7 = w", correct: false } ] }
                        ]
                    },
                    {
                        id: "m8-w1-wed-c", name: "Wed", title: "Week 1: Wednesday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { svg: drawRulerRectangle(4, 5), text: "1. &nbsp; The sides of a rectangle are shown matching up to rulers. The rulers measure in inches. What is the perimeter of the rectangle?", answer: "18" }
                            ] },
                            { type: "mc", instruction: "2. &nbsp; A shaded rectangle is shown on the grid. Which expression can be used to find the area of the rectangle?", problems: [{ svg: drawGridArea(10, 10, rectCoords(1,2,3,8)) }], options: [ { text: "3 + 8", correct: false }, { text: "8 + 8 + 8", correct: true }, { text: "3 &times; 3", correct: false } ] }
                        ]
                    },
                    {
                        id: "m8-w1-thu-c", name: "Thu", title: "Week 1: Thursday",
                        sections: [
                            { type: "input", instruction: "A shaded rectangle is shown on the grid. One square represents 1 square unit. Solve the related problems below.", problems: [ 
                                { svg: drawGridArea(8, 8, rectCoords(2,2,4,4)), text: "1. &nbsp; Part A: What is the perimeter, in units, of the rectangle?", answer: "16" },
                                { text: "Part B: What is the area, in square units, of the rectangle?", answer: "16" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { svg: drawGridArea(8, 8, [...rectCoords(2,2,2,4), ...rectCoords(4,2,3,2)]), text: "2. &nbsp; An irregular shape is shaded on the grid. One square represents 1 square unit. What is the area of the shape?", answer: "14" }
                            ] }
                        ]
                    },
                    {
                        id: "m8-w1-fri-c", name: "Fri", title: "Week 1: Friday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { svg: drawPolygon(240, 180, [[97,45], [143,45], [175,77], [175,123], [143,155], [97,155], [65,123], [65,77]], [{x: 120, y: 30, t: "3 ft"}]), text: "1. &nbsp; The regular octagon shown has equal side lengths of 3 feet. Enter the perimeter, in feet, of the polygon.", answer: "24" }
                            ] },
                            { type: "mc", instruction: "2. &nbsp; A shaded rectangle is shown on the grid. Which expression can be used to find the area of the rectangle?", problems: [{ svg: drawGridArea(8, 8, rectCoords(1,1,7,2)) }], options: [ { text: "7 &times; 2", correct: true }, { text: "7 + 2", correct: false }, { text: "2 + 2 + 2", correct: false } ] }
                        ]
                    }
                ]
            },
            {
                weekNum: 2,
                helperHub: helperHubW2_Mod8,
                days: [
                    {
                        id: "m8-w2-mon-c", name: "Mon", title: "Week 2: Monday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { svg: drawPolygon(260, 230, [[50,40], [130,40], [130,140], [210,140], [210,200], [50,200]], [{x: 90, y: 25, t: "8 in"}, {x: 145, y: 90, t: "6 in"}, {x: 170, y: 125, t: "2 in"}, {x: 235, y: 170, t: "3 in"}, {x: 130, y: 215, t: "10 in"}, {x: 30, y: 120, t: "9 in"}]), text: "1. &nbsp; The side lengths of a shape are shown. Enter the perimeter, in inches, of the shape.", answer: "38" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { svg: drawRulerRectangle(3, 8), text: "2. &nbsp; The sides of a rectangle are shown matching up to rulers. The rulers measure in inches. What is the perimeter of the rectangle?", answer: "22" }
                            ] }
                        ]
                    },
                    {
                        id: "m8-w2-tue-c", name: "Tue", title: "Week 2: Tuesday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { svg: drawPolygon(220, 200, [[40,40], [160,40], [160,90], [80,90], [80,160], [40,160]], [{x: 100, y: 25, t: "12 m"}, {x: 180, y: 65, t: "5 m"}, {x: 60, y: 175, t: "4 m"}, {x: 20, y: 100, t: "10 m"}]), text: "1. &nbsp; This figure is made by joining two rectangles. Some of the outer side lengths are shown. Enter the total area, in square meters, of the figure.", answer: "80" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; A garden has an area of 48 square feet. If the width of the garden is 6 feet, what is the length of the garden in feet?", answer: "8" }
                            ] }
                        ]
                    },
                    {
                        id: "m8-w2-wed-c", name: "Wed", title: "Week 2: Wednesday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { svg: drawPolygon(280, 200, [[50,40], [230,40], [230,90], [160,90], [160,180], [120,180], [120,90], [50,90]], [{x: 140, y: 25, t: "12 in"}, {x: 250, y: 65, t: "5 in"}, {x: 195, y: 105, t: "4 in"}, {x: 180, y: 135, t: "6 in"}, {x: 140, y: 195, t: "4 in"}, {x: 100, y: 135, t: "6 in"}, {x: 85, y: 105, t: "4 in"}, {x: 30, y: 65, t: "5 in"}]), text: "1. &nbsp; The side lengths of a T-shaped window are shown. Enter the perimeter, in inches, of the window.", answer: "46" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; A rectangular rug has an area of 72 square feet. If the length of the rug is 8 feet, what is the width of the rug in feet?", answer: "9" }
                            ] }
                        ]
                    },
                    {
                        id: "m8-w2-thu-c", name: "Thu", title: "Week 2: Thursday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { svg: drawPolygon(260, 200, [[50,40], [210,40], [210,180], [160,180], [160,100], [50,100]], [{x: 130, y: 25, t: "15 m"}, {x: 235, y: 110, t: "9 m"}, {x: 185, y: 195, t: "6 m"}, {x: 30, y: 70, t: "4 m"}]), text: "1. &nbsp; This figure is made by joining two rectangles. Some of the outer side lengths are shown. Enter the total area, in square meters, of the figure.", answer: "90" }
                            ] },
                            { type: "input", instruction: "A shaded rectangle is shown on the grid. One square represents 1 square unit. Solve the related problems below.", problems: [ 
                                { svg: drawGridArea(10, 6, rectCoords(1,1,4,5)), text: "2. &nbsp; Part A: What is the perimeter, in units, of the rectangle?", answer: "18" },
                                { text: "Part B: What is the area, in square units, of the rectangle?", answer: "20" }
                            ] }
                        ]
                    },
                    {
                        id: "m8-w2-fri-c", name: "Fri", title: "Week 2: Friday",
                        sections: [
                            { type: "input", instruction: "This figure is made by joining two rectangles. Some of the outer side lengths are shown. Solve the related problems below.", problems: [ 
                                { svg: drawPolygon(240, 180, [[50,40], [190,40], [190,100], [110,100], [110,160], [50,160]], [{x: 120, y: 25, t: "9 m"}, {x: 215, y: 70, t: "2 m"}, {x: 80, y: 175, t: "5 m"}, {x: 30, y: 100, t: "7 m"}]), text: "1. &nbsp; Part A: What is the perimeter, in meters, of the figure?", answer: "32" },
                                { text: "Part B: What is the total area, in square meters, of the figure?", answer: "43" }
                            ] },
                            { type: "mc", instruction: "2. &nbsp; A shaded rectangle is shown on the grid. Which expression can be used to find the area of the rectangle?", problems: [{ svg: drawGridArea(10, 8, rectCoords(1,1,3,8)) }], options: [ { text: "8 + 8 + 8", correct: true }, { text: "3 + 8", correct: false }, { text: "3 + 3 + 3", correct: false } ] }
                        ]
                    }
                ]
            }
        ]
    }
};