// --- SHARED HELPER HUBS ---
const helperHubW1_Mod10 = {
    title: "★ Helper Hub: The Quadrilateral Family Tree",
    content: `
        <div style="font-size:15px; line-height: 1.3;">
            <p style="margin-top:0; margin-bottom:10px;">A <strong>Quadrilateral</strong> is any shape with 4 straight sides. But some shapes follow extra rules to get special names!</p>
            
            <div style="display:flex; flex-wrap:wrap; gap:10px; justify-content:center; margin-top:10px; break-inside: avoid;">
                <div style="text-align:center; width:30%; background:#fff; border:2px solid #ccc; border-radius:10px; padding:10px;">
                    ${drawGeomShape('quad-irr')}
                    <strong style="font-size:16px; color:#333;">Quadrilateral</strong><br>Any 4 sides
                </div>
                <div style="text-align:center; width:30%; background:#fff; border:2px solid #ccc; border-radius:10px; padding:10px;">
                    ${drawGeomShape('para')}
                    <strong style="font-size:16px; color:#2c7be5;">Parallelogram</strong><br>Opposite sides are parallel
                </div>
                <div style="text-align:center; width:30%; background:#fff; border:2px solid #ccc; border-radius:10px; padding:10px;">
                    ${drawGeomShape('rect-w')}
                    <strong style="font-size:16px; color:#27ae60;">Rectangle</strong><br>4 square corners
                </div>
                <div style="text-align:center; width:30%; background:#fff; border:2px solid #ccc; border-radius:10px; padding:10px;">
                    ${drawGeomShape('rhombus')}
                    <strong style="font-size:16px; color:#8e44ad;">Rhombus</strong><br>4 equal sides
                </div>
                <div style="text-align:center; width:30%; background:#fff; border:2px solid #ccc; border-radius:10px; padding:10px;">
                    ${drawGeomShape('square')}
                    <strong style="font-size:16px; color:#e74c3c;">Square</strong><br>Square corners AND equal sides!
                </div>
            </div>
            
            <div style="background:#fff3e0; border-left:5px solid #f39c12; padding:10px 12px; margin-top:10px; border-radius:0 8px 8px 0; break-inside: avoid;">
                <strong>Did you know?</strong> A square is very greedy. It has 4 equal sides, so it is a <strong>Rhombus</strong>. It has 4 square corners, so it is a <strong>Rectangle</strong>. And its sides are parallel, so it is a <strong>Parallelogram</strong>! It is all of them at once!
            </div>
        </div>
    `
};

const helperHubW2_Mod10 = {
    title: "★ Helper Hub: Fractions as Area",
    content: `
        <div style="font-size:15px; line-height: 1.3;">
            <p style="margin-top:0; margin-bottom:12px;">We can use fractions to talk about the area of a shape. But there is one very important rule!</p>
            
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; break-inside: avoid;">
                <div style="border:2px solid #27ae60; padding:10px; border-radius:10px; background:#e8f5e9; text-align:center;">
                    <strong style="font-size:16px; color:#27ae60;">Rule 1: Equal Parts!</strong><br>
                    To write a fraction, the shape MUST be cut into equal-sized pieces.
                    <div style="margin-top:10px;">
                        <svg width="100" height="100" viewBox="0 0 100 100">
                            <rect x="10" y="10" width="80" height="80" fill="#fff" stroke="#333" stroke-width="2"/>
                            <rect x="10" y="10" width="40" height="40" fill="#81ecec" stroke="#333" stroke-width="2"/>
                            <rect x="50" y="10" width="40" height="40" fill="#fff" stroke="#333" stroke-width="2"/>
                            <rect x="10" y="50" width="40" height="40" fill="#fff" stroke="#333" stroke-width="2"/>
                            <rect x="50" y="50" width="40" height="40" fill="#fff" stroke="#333" stroke-width="2"/>
                        </svg>
                    </div>
                    <div style="margin-top:5px; font-weight:bold; color:#27ae60;">YES! This is 1/4.</div>
                </div>
                
                <div style="border:2px solid #e74c3c; padding:10px; border-radius:10px; background:#fdf2f0; text-align:center;">
                    <strong style="font-size:16px; color:#e74c3c;">Rule 2: No Weird Shapes!</strong><br>
                    If the pieces are different sizes, it is NOT a fraction.
                    <div style="margin-top:10px;">
                        <svg width="100" height="100" viewBox="0 0 100 100">
                            <rect x="10" y="10" width="80" height="80" fill="#fff" stroke="#333" stroke-width="2"/>
                            <rect x="10" y="10" width="20" height="80" fill="#81ecec" stroke="#333" stroke-width="2"/>
                            <rect x="30" y="10" width="60" height="40" fill="#fff" stroke="#333" stroke-width="2"/>
                            <rect x="30" y="50" width="30" height="40" fill="#fff" stroke="#333" stroke-width="2"/>
                            <rect x="60" y="50" width="30" height="40" fill="#fff" stroke="#333" stroke-width="2"/>
                        </svg>
                    </div>
                    <div style="margin-top:5px; font-weight:bold; color:#e74c3c;">NO! Not equal pieces.</div>
                </div>
            </div>
            
            <div style="margin-top:15px; border:2px solid #ccc; padding:10px; border-radius:10px; background:#fff; text-align:center; break-inside: avoid;">
                <strong style="font-size:16px; color:#2c7be5;">Finding the Area Fraction</strong><br>
                Look at the shaded shape. It has <strong>6</strong> total pieces. <strong>5</strong> pieces are shaded.<br>
                So the shaded area is <strong style="color:#2c7be5; font-size:18px;">5/6</strong> of the whole shape!
                <div style="margin-top:10px;">
                    ${drawFractionShape('rect', 6, 5)}
                </div>
            </div>
        </div>
    `
};

// --- VERSIONS DATA ---
const mod10Versions = {
    A: {
        id: "mod-10-a",
        name: "Geometry & Attributes",
        weeks: [
            {
                weekNum: 1,
                helperHub: helperHubW1_Mod10,
                days: [
                    {
                        id: "m10-w1-mon-a", name: "Mon", title: "Week 1: Monday",
                        sections: [
                            { type: "grid", th1: "Question", th2: "Yes", th3: "No", instruction: "1. &nbsp; Look at Figure A. Decide whether each claim is true or false.", problems: [{ svg: drawGeomShape('rhombus') + `<div style="text-align:center; font-weight:bold; color:#444;">Figure A</div>` }], rows: [ 
                                { text: "Is Figure A a rhombus?", correct: true }, 
                                { text: "Is Figure A a rectangle?", correct: false }, 
                                { text: "Is Figure A a quadrilateral?", correct: true } 
                            ] },
                            { type: "grid", instruction: "2. &nbsp; A rectangle has side lengths of 4 units and 3 units. Decide whether each statement is true or false.", rows: [ 
                                { text: "The area of the rectangle is 12 square units.", correct: true }, 
                                { text: "The area of the rectangle is 16 square units.", correct: false } 
                            ] }
                        ]
                    },
                    {
                        id: "m10-w1-tue-a", name: "Tue", title: "Week 1: Tuesday",
                        sections: [
                            { type: "fraction-input", instruction: "1. &nbsp; Figure A is divided into equal parts. Some parts are shaded.", problems: [ 
                                { svg: drawFractionShape('rect', 4, 1) + `<div style="text-align:center; font-weight:bold; color:#444;">Figure A</div>` },
                                { text: "Enter a fraction that is equal to the shaded area of Figure A. [frac-box]", answer: "1/4" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; 8 = [box]", answer: "56" }
                            ] }
                        ]
                    },
                    {
                        id: "m10-w1-wed-a", name: "Wed", title: "Week 1: Wednesday",
                        sections: [
                            { type: "grid", th1: "Question", th2: "Yes", th3: "No", instruction: "1. &nbsp; Look at Figure B. Decide whether each claim is true or false.", problems: [{ svg: drawGeomShape('trap') + `<div style="text-align:center; font-weight:bold; color:#444;">Figure B</div>` }], rows: [ 
                                { text: "Is Figure B a quadrilateral?", correct: true }, 
                                { text: "Is Figure B a parallelogram?", correct: false }, 
                                { text: "Is Figure B a rectangle?", correct: false } 
                            ] },
                            { type: "fraction-input", instruction: "2. &nbsp; Figure C is divided into equal parts. Some parts are shaded.", problems: [ 
                                { svg: drawFractionShape('circle', 8, 3) + `<div style="text-align:center; font-weight:bold; color:#444;">Figure C</div>` },
                                { text: "Enter a fraction that is equal to the shaded area of Figure C. [frac-box]", answer: "3/8" }
                            ] }
                        ]
                    },
                    {
                        id: "m10-w1-thu-a", name: "Thu", title: "Week 1: Thursday",
                        sections: [
                            { type: "mc", instruction: "1. &nbsp; Which figure appears to be a rhombus that is NOT a square?", options: [ 
                                { svg: drawGeomShape('square'), correct: false }, 
                                { svg: drawGeomShape('para'), correct: false }, 
                                { svg: drawGeomShape('rhombus'), correct: true } 
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; A square has a side length of 5 inches. What is the perimeter, in inches, of the square?", answer: "20" }
                            ] }
                        ]
                    },
                    {
                        id: "m10-w1-fri-a", name: "Fri", title: "Week 1: Friday",
                        sections: [
                            { type: "grid", th1: "Question", th2: "Yes", th3: "No", instruction: "1. &nbsp; Look at Figure D. Decide whether each claim is true or false.", problems: [{ svg: drawGeomShape('square') + `<div style="text-align:center; font-weight:bold; color:#444;">Figure D</div>` }], rows: [ 
                                { text: "Is Figure D a rectangle?", correct: true }, 
                                { text: "Is Figure D a rhombus?", correct: true }, 
                                { text: "Is Figure D a pentagon?", correct: false } 
                            ] },
                            { type: "fraction-input", instruction: "2. &nbsp; Figure E is divided into equal parts. Some parts are shaded.", problems: [ 
                                { svg: drawFractionShape('rect', 6, 5) + `<div style="text-align:center; font-weight:bold; color:#444;">Figure E</div>` },
                                { text: "Enter a fraction that is equal to the shaded area of Figure E. [frac-box]", answer: "5/6" }
                            ] }
                        ]
                    }
                ]
            },
            {
                weekNum: 2,
                helperHub: helperHubW2_Mod10,
                days: [
                    {
                        id: "m10-w2-mon-a", name: "Mon", title: "Week 2: Monday",
                        sections: [
                            { type: "fraction-input", instruction: "1. &nbsp; The large rectangle shown is divided into equal parts.", problems: [ 
                                { svg: drawFractionShape('rect', 8, 4) },
                                { text: "What fraction of the total area of the rectangle is shaded? [frac-box]", answer: "4/8" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 63 &divide; 7 = [box]", answer: "9" }
                            ] }
                        ]
                    },
                    {
                        id: "m10-w2-tue-a", name: "Tue", title: "Week 2: Tuesday",
                        sections: [
                            { type: "mc", instruction: "1. &nbsp; Which figure is divided into parts with equal areas?", options: [ 
                                { svg: `<svg width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#fff" stroke="#333" stroke-width="2"/><line x1="5" y1="50" x2="95" y2="50" stroke="#333" stroke-width="2"/><line x1="50" y1="5" x2="50" y2="95" stroke="#333" stroke-width="2"/></svg>`, correct: true }, 
                                { svg: `<svg width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#fff" stroke="#333" stroke-width="2"/><line x1="20" y1="15" x2="20" y2="85" stroke="#333" stroke-width="2"/><line x1="80" y1="15" x2="80" y2="85" stroke="#333" stroke-width="2"/></svg>`, correct: false }, 
                                { svg: `<svg width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#fff" stroke="#333" stroke-width="2"/><line x1="50" y1="5" x2="50" y2="95" stroke="#333" stroke-width="2"/><line x1="20" y1="15" x2="80" y2="15" stroke="#333" stroke-width="2"/></svg>`, correct: false } 
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What is 715 rounded to the nearest hundred?", answer: "700" }
                            ] }
                        ]
                    },
                    {
                        id: "m10-w2-wed-a", name: "Wed", title: "Week 2: Wednesday",
                        sections: [
                            { type: "grid", th1: "Question", th2: "Yes", th3: "No", instruction: "1. &nbsp; Look at Figure C. Decide whether each claim is true or false.", problems: [{ svg: drawGeomShape('rect-t') + `<div style="text-align:center; font-weight:bold; color:#444;">Figure C</div>` }], rows: [ 
                                { text: "Is Figure C a quadrilateral?", correct: true }, 
                                { text: "Is Figure C a square?", correct: false }, 
                                { text: "Is Figure C a rhombus?", correct: false } 
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 54 - 8 = [box]", answer: "46" }
                            ] }
                        ]
                    },
                    {
                        id: "m10-w2-thu-a", name: "Thu", title: "Week 2: Thursday",
                        sections: [
                            { type: "grid", instruction: "1. &nbsp; Decide whether each equation is true or false.", rows: [ 
                                { text: "6 &times; 4 = 24", correct: true }, 
                                { text: "35 &divide; 5 = 6", correct: false } 
                            ] },
                            { type: "fraction-input", instruction: "2. &nbsp; Figure D is divided into equal parts. Some parts are shaded.", problems: [ 
                                { svg: drawFractionShape('circle', 6, 2) + `<div style="text-align:center; font-weight:bold; color:#444;">Figure D</div>` },
                                { text: "Enter a fraction that is equal to the shaded area of Figure D. [frac-box]", answer: "2/6" }
                            ] }
                        ]
                    },
                    {
                        id: "m10-w2-fri-a", name: "Fri", title: "Week 2: Friday",
                        sections: [
                            { type: "grid", th1: "Question", th2: "Yes", th3: "No", instruction: "1. &nbsp; Look at Figure A. Decide whether each claim is true or false.", problems: [{ svg: drawGeomShape('para') + `<div style="text-align:center; font-weight:bold; color:#444;">Figure A</div>` }], rows: [ 
                                { text: "Is Figure A a quadrilateral?", correct: true }, 
                                { text: "Is Figure A a parallelogram?", correct: true }, 
                                { text: "Is Figure A a square?", correct: false } 
                            ] },
                            { type: "fraction-input", instruction: "2. &nbsp; Figure B is divided into equal parts. Some parts are shaded.", problems: [ 
                                { svg: drawFractionShape('rect', 6, 2) + `<div style="text-align:center; font-weight:bold; color:#444;">Figure B</div>` },
                                { text: "Enter a fraction that is equal to the shaded area of Figure B. [frac-box]", answer: "2/6" }
                            ] }
                        ]
                    }
                ]
            }
        ]
    },
    B: {
        id: "mod-10-b",
        name: "Geometry & Attributes",
        weeks: [
            {
                weekNum: 1,
                helperHub: helperHubW1_Mod10,
                days: [
                    {
                        id: "m10-w1-mon-b", name: "Mon", title: "Week 1: Monday",
                        sections: [
                            { type: "grid", th1: "Question", th2: "Yes", th3: "No", instruction: "1. &nbsp; Look at Figure A. Decide whether each claim is true or false.", problems: [{ svg: drawGeomShape('square') + `<div style="text-align:center; font-weight:bold; color:#444;">Figure A</div>` }], rows: [ 
                                { text: "Is Figure A a rhombus?", correct: true }, 
                                { text: "Is Figure A a rectangle?", correct: true }, 
                                { text: "Is Figure A a triangle?", correct: false } 
                            ] },
                            { type: "grid", instruction: "2. &nbsp; A rectangle has side lengths of 5 units and 2 units. Decide whether each statement is true or false.", rows: [ 
                                { text: "The area of the rectangle is 10 square units.", correct: true }, 
                                { text: "The area of the rectangle is 15 square units.", correct: false } 
                            ] }
                        ]
                    },
                    {
                        id: "m10-w1-tue-b", name: "Tue", title: "Week 1: Tuesday",
                        sections: [
                            { type: "fraction-input", instruction: "1. &nbsp; Figure A is divided into equal parts. Some parts are shaded.", problems: [ 
                                { svg: drawFractionShape('rect', 6, 1) + `<div style="text-align:center; font-weight:bold; color:#444;">Figure A</div>` },
                                { text: "Enter a fraction that is equal to the shaded area of Figure A. [frac-box]", answer: "1/6" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 9 &times; 6 = [box]", answer: "54" }
                            ] }
                        ]
                    },
                    {
                        id: "m10-w1-wed-b", name: "Wed", title: "Week 1: Wednesday",
                        sections: [
                            { type: "grid", th1: "Question", th2: "Yes", th3: "No", instruction: "1. &nbsp; Look at Figure B. Decide whether each claim is true or false.", problems: [{ svg: drawGeomShape('pentagon') + `<div style="text-align:center; font-weight:bold; color:#444;">Figure B</div>` }], rows: [ 
                                { text: "Is Figure B a quadrilateral?", correct: false }, 
                                { text: "Is Figure B a polygon?", correct: true }, 
                                { text: "Is Figure B a parallelogram?", correct: false } 
                            ] },
                            { type: "fraction-input", instruction: "2. &nbsp; Figure C is divided into equal parts. Some parts are shaded.", problems: [ 
                                { svg: drawFractionShape('circle', 6, 2) + `<div style="text-align:center; font-weight:bold; color:#444;">Figure C</div>` },
                                { text: "Enter a fraction that is equal to the shaded area of Figure C. [frac-box]", answer: "2/6" }
                            ] }
                        ]
                    },
                    {
                        id: "m10-w1-thu-b", name: "Thu", title: "Week 1: Thursday",
                        sections: [
                            { type: "mc", instruction: "1. &nbsp; Which figure appears to be a parallelogram that is NOT a rectangle?", options: [ 
                                { svg: drawGeomShape('rect-w'), correct: false }, 
                                { svg: drawGeomShape('para'), correct: true }, 
                                { svg: drawGeomShape('square'), correct: false } 
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; A square has a side length of 7 inches. What is the perimeter, in inches, of the square?", answer: "28" }
                            ] }
                        ]
                    },
                    {
                        id: "m10-w1-fri-b", name: "Fri", title: "Week 1: Friday",
                        sections: [
                            { type: "grid", th1: "Question", th2: "Yes", th3: "No", instruction: "1. &nbsp; Look at Figure D. Decide whether each claim is true or false.", problems: [{ svg: drawGeomShape('rhombus') + `<div style="text-align:center; font-weight:bold; color:#444;">Figure D</div>` }], rows: [ 
                                { text: "Is Figure D a quadrilateral?", correct: true }, 
                                { text: "Is Figure D a rectangle?", correct: false }, 
                                { text: "Is Figure D a parallelogram?", correct: true } 
                            ] },
                            { type: "fraction-input", instruction: "2. &nbsp; Figure E is divided into equal parts. Some parts are shaded.", problems: [ 
                                { svg: drawFractionShape('rect', 8, 7) + `<div style="text-align:center; font-weight:bold; color:#444;">Figure E</div>` },
                                { text: "Enter a fraction that is equal to the shaded area of Figure E. [frac-box]", answer: "7/8" }
                            ] }
                        ]
                    }
                ]
            },
            {
                weekNum: 2,
                helperHub: helperHubW2_Mod10,
                days: [
                    {
                        id: "m10-w2-mon-b", name: "Mon", title: "Week 2: Monday",
                        sections: [
                            { type: "fraction-input", instruction: "1. &nbsp; The large circle shown is divided into equal parts.", problems: [ 
                                { svg: drawFractionShape('circle', 4, 2) },
                                { text: "What fraction of the total area of the circle is shaded? [frac-box]", answer: "2/4" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 48 &divide; 6 = [box]", answer: "8" }
                            ] }
                        ]
                    },
                    {
                        id: "m10-w2-tue-b", name: "Tue", title: "Week 2: Tuesday",
                        sections: [
                            { type: "mc", instruction: "1. &nbsp; Which figure is divided into parts with equal areas?", options: [ 
                                { svg: `<svg width="100" height="60" viewBox="0 0 100 60"><rect x="10" y="10" width="80" height="40" fill="#fff" stroke="#333" stroke-width="2"/><line x1="20" y1="10" x2="20" y2="50" stroke="#333" stroke-width="2"/><line x1="80" y1="10" x2="80" y2="50" stroke="#333" stroke-width="2"/></svg>`, correct: false }, 
                                { svg: `<svg width="100" height="60" viewBox="0 0 100 60"><rect x="10" y="10" width="80" height="40" fill="#fff" stroke="#333" stroke-width="2"/><line x1="30" y1="10" x2="30" y2="50" stroke="#333" stroke-width="2"/><line x1="50" y1="10" x2="50" y2="50" stroke="#333" stroke-width="2"/><line x1="70" y1="10" x2="70" y2="50" stroke="#333" stroke-width="2"/></svg>`, correct: true }, 
                                { svg: `<svg width="100" height="60" viewBox="0 0 100 60"><rect x="10" y="10" width="80" height="40" fill="#fff" stroke="#333" stroke-width="2"/><line x1="50" y1="10" x2="50" y2="50" stroke="#333" stroke-width="2"/><line x1="10" y1="20" x2="50" y2="20" stroke="#333" stroke-width="2"/></svg>`, correct: false } 
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What is 832 rounded to the nearest hundred?", answer: "800" }
                            ] }
                        ]
                    },
                    {
                        id: "m10-w2-wed-b", name: "Wed", title: "Week 2: Wednesday",
                        sections: [
                            { type: "grid", th1: "Question", th2: "Yes", th3: "No", instruction: "1. &nbsp; Look at Figure C. Decide whether each claim is true or false.", problems: [{ svg: drawGeomShape('rect-w') + `<div style="text-align:center; font-weight:bold; color:#444;">Figure C</div>` }], rows: [ 
                                { text: "Is Figure C a quadrilateral?", correct: true }, 
                                { text: "Is Figure C a parallelogram?", correct: true }, 
                                { text: "Is Figure C a square?", correct: false } 
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 72 - 9 = [box]", answer: "63" }
                            ] }
                        ]
                    },
                    {
                        id: "m10-w2-thu-b", name: "Thu", title: "Week 2: Thursday",
                        sections: [
                            { type: "grid", instruction: "1. &nbsp; Decide whether each equation is true or false.", rows: [ 
                                { text: "7 &times; 5 = 35", correct: true }, 
                                { text: "42 &divide; 6 = 8", correct: false } 
                            ] },
                            { type: "fraction-input", instruction: "2. &nbsp; Figure D is divided into equal parts. Some parts are shaded.", problems: [ 
                                { svg: drawFractionShape('circle', 8, 4) + `<div style="text-align:center; font-weight:bold; color:#444;">Figure D</div>` },
                                { text: "Enter a fraction that is equal to the shaded area of Figure D. [frac-box]", answer: "4/8" }
                            ] }
                        ]
                    },
                    {
                        id: "m10-w2-fri-b", name: "Fri", title: "Week 2: Friday",
                        sections: [
                            { type: "grid", th1: "Question", th2: "Yes", th3: "No", instruction: "1. &nbsp; Look at Figure A. Decide whether each claim is true or false.", problems: [{ svg: drawGeomShape('rhombus') + `<div style="text-align:center; font-weight:bold; color:#444;">Figure A</div>` }], rows: [ 
                                { text: "Is Figure A a quadrilateral?", correct: true }, 
                                { text: "Is Figure A a parallelogram?", correct: true }, 
                                { text: "Is Figure A a rectangle?", correct: false } 
                            ] },
                            { type: "fraction-input", instruction: "2. &nbsp; Figure B is divided into equal parts. Some parts are shaded.", problems: [ 
                                { svg: drawFractionShape('circle', 8, 2) + `<div style="text-align:center; font-weight:bold; color:#444;">Figure B</div>` },
                                { text: "Enter a fraction that is equal to the shaded area of Figure B. [frac-box]", answer: "2/8" }
                            ] }
                        ]
                    }
                ]
            }
        ]
    },
    C: {
        id: "mod-10-c",
        name: "Geometry & Attributes",
        weeks: [
            {
                weekNum: 1,
                helperHub: helperHubW1_Mod10,
                days: [
                    {
                        id: "m10-w1-mon-c", name: "Mon", title: "Week 1: Monday",
                        sections: [
                            { type: "grid", th1: "Question", th2: "Yes", th3: "No", instruction: "1. &nbsp; Look at Figure A. Decide whether each claim is true or false.", problems: [{ svg: drawGeomShape('para') + `<div style="text-align:center; font-weight:bold; color:#444;">Figure A</div>` }], rows: [ 
                                { text: "Is Figure A a parallelogram?", correct: true }, 
                                { text: "Is Figure A a square?", correct: false }, 
                                { text: "Is Figure A a pentagon?", correct: false } 
                            ] },
                            { type: "grid", instruction: "2. &nbsp; A rectangle has side lengths of 6 units and 3 units. Decide whether each statement is true or false.", rows: [ 
                                { text: "The area of the rectangle is 18 square units.", correct: true }, 
                                { text: "The area of the rectangle is 24 square units.", correct: false } 
                            ] }
                        ]
                    },
                    {
                        id: "m10-w1-tue-c", name: "Tue", title: "Week 1: Tuesday",
                        sections: [
                            { type: "fraction-input", instruction: "1. &nbsp; Figure A is divided into equal parts. Some parts are shaded.", problems: [ 
                                { svg: drawFractionShape('rect', 8, 1) + `<div style="text-align:center; font-weight:bold; color:#444;">Figure A</div>` },
                                { text: "Enter a fraction that is equal to the shaded area of Figure A. [frac-box]", answer: "1/8" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; 8 = [box]", answer: "64" }
                            ] }
                        ]
                    },
                    {
                        id: "m10-w1-wed-c", name: "Wed", title: "Week 1: Wednesday",
                        sections: [
                            { type: "grid", th1: "Question", th2: "Yes", th3: "No", instruction: "1. &nbsp; Look at Figure B. Decide whether each claim is true or false.", problems: [{ svg: drawGeomShape('iso-trap') + `<div style="text-align:center; font-weight:bold; color:#444;">Figure B</div>` }], rows: [ 
                                { text: "Is Figure B a quadrilateral?", correct: true }, 
                                { text: "Is Figure B a parallelogram?", correct: false }, 
                                { text: "Is Figure B a rhombus?", correct: false } 
                            ] },
                            { type: "fraction-input", instruction: "2. &nbsp; Figure C is divided into equal parts. Some parts are shaded.", problems: [ 
                                { svg: drawFractionShape('circle', 4, 3) + `<div style="text-align:center; font-weight:bold; color:#444;">Figure C</div>` },
                                { text: "Enter a fraction that is equal to the shaded area of Figure C. [frac-box]", answer: "3/4" }
                            ] }
                        ]
                    },
                    {
                        id: "m10-w1-thu-c", name: "Thu", title: "Week 1: Thursday",
                        sections: [
                            { type: "mc", instruction: "1. &nbsp; Which figure appears to be a quadrilateral that is NOT a parallelogram?", options: [ 
                                { svg: drawGeomShape('trap'), correct: true }, 
                                { svg: drawGeomShape('rect-w'), correct: false }, 
                                { svg: drawGeomShape('rhombus'), correct: false } 
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; A square has a side length of 9 inches. What is the perimeter, in inches, of the square?", answer: "36" }
                            ] }
                        ]
                    },
                    {
                        id: "m10-w1-fri-c", name: "Fri", title: "Week 1: Friday",
                        sections: [
                            { type: "grid", th1: "Question", th2: "Yes", th3: "No", instruction: "1. &nbsp; Look at Figure D. Decide whether each claim is true or false.", problems: [{ svg: drawGeomShape('rect-w') + `<div style="text-align:center; font-weight:bold; color:#444;">Figure D</div>` }], rows: [ 
                                { text: "Is Figure D a parallelogram?", correct: true }, 
                                { text: "Is Figure D a rectangle?", correct: true }, 
                                { text: "Is Figure D a square?", correct: false } 
                            ] },
                            { type: "fraction-input", instruction: "2. &nbsp; Figure E is divided into equal parts. Some parts are shaded.", problems: [ 
                                { svg: drawFractionShape('rect', 4, 3) + `<div style="text-align:center; font-weight:bold; color:#444;">Figure E</div>` },
                                { text: "Enter a fraction that is equal to the shaded area of Figure E. [frac-box]", answer: "3/4" }
                            ] }
                        ]
                    }
                ]
            },
            {
                weekNum: 2,
                helperHub: helperHubW2_Mod10,
                days: [
                    {
                        id: "m10-w2-mon-c", name: "Mon", title: "Week 2: Monday",
                        sections: [
                            { type: "fraction-input", instruction: "1. &nbsp; The large rectangle shown is divided into equal parts.", problems: [ 
                                { svg: drawFractionShape('rect', 6, 3) },
                                { text: "What fraction of the total area of the rectangle is shaded? [frac-box]", answer: "3/6" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 36 &divide; 4 = [box]", answer: "9" }
                            ] }
                        ]
                    },
                    {
                        id: "m10-w2-tue-c", name: "Tue", title: "Week 2: Tuesday",
                        sections: [
                            { type: "mc", instruction: "1. &nbsp; Which figure is divided into parts with equal areas?", options: [ 
                                { svg: `<svg width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#fff" stroke="#333" stroke-width="2"/><line x1="50" y1="5" x2="50" y2="95" stroke="#333" stroke-width="2"/><line x1="20" y1="20" x2="80" y2="20" stroke="#333" stroke-width="2"/></svg>`, correct: false }, 
                                { svg: `<svg width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#fff" stroke="#333" stroke-width="2"/><line x1="5" y1="50" x2="95" y2="50" stroke="#333" stroke-width="2"/><line x1="50" y1="5" x2="50" y2="95" stroke="#333" stroke-width="2"/><line x1="18" y1="18" x2="82" y2="82" stroke="#333" stroke-width="2"/><line x1="18" y1="82" x2="82" y2="18" stroke="#333" stroke-width="2"/></svg>`, correct: true }, 
                                { svg: `<svg width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#fff" stroke="#333" stroke-width="2"/><line x1="20" y1="10" x2="20" y2="90" stroke="#333" stroke-width="2"/><line x1="80" y1="10" x2="80" y2="90" stroke="#333" stroke-width="2"/></svg>`, correct: false } 
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What is 429 rounded to the nearest hundred?", answer: "400" }
                            ] }
                        ]
                    },
                    {
                        id: "m10-w2-wed-c", name: "Wed", title: "Week 2: Wednesday",
                        sections: [
                            { type: "grid", th1: "Question", th2: "Yes", th3: "No", instruction: "1. &nbsp; Look at Figure C. Decide whether each claim is true or false.", problems: [{ svg: drawGeomShape('para') + `<div style="text-align:center; font-weight:bold; color:#444;">Figure C</div>` }], rows: [ 
                                { text: "Is Figure C a quadrilateral?", correct: true }, 
                                { text: "Is Figure C a trapezoid?", correct: false }, 
                                { text: "Is Figure C a rhombus?", correct: false } 
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 81 - 7 = [box]", answer: "74" }
                            ] }
                        ]
                    },
                    {
                        id: "m10-w2-thu-c", name: "Thu", title: "Week 2: Thursday",
                        sections: [
                            { type: "grid", instruction: "1. &nbsp; Decide whether each equation is true or false.", rows: [ 
                                { text: "8 &times; 4 = 32", correct: true }, 
                                { text: "54 &divide; 9 = 5", correct: false } 
                            ] },
                            { type: "fraction-input", instruction: "2. &nbsp; Figure D is divided into equal parts. Some parts are shaded.", problems: [ 
                                { svg: drawFractionShape('rect', 8, 4) + `<div style="text-align:center; font-weight:bold; color:#444;">Figure D</div>` },
                                { text: "Enter a fraction that is equal to the shaded area of Figure D. [frac-box]", answer: "4/8" }
                            ] }
                        ]
                    },
                    {
                        id: "m10-w2-fri-c", name: "Fri", title: "Week 2: Friday",
                        sections: [
                            { type: "grid", th1: "Question", th2: "Yes", th3: "No", instruction: "1. &nbsp; Look at Figure A. Decide whether each claim is true or false.", problems: [{ svg: drawGeomShape('trap') + `<div style="text-align:center; font-weight:bold; color:#444;">Figure A</div>` }], rows: [ 
                                { text: "Is Figure A a quadrilateral?", correct: true }, 
                                { text: "Is Figure A a polygon?", correct: true }, 
                                { text: "Is Figure A a parallelogram?", correct: false } 
                            ] },
                            { type: "fraction-input", instruction: "2. &nbsp; Figure B is divided into equal parts. Some parts are shaded.", problems: [ 
                                { svg: drawFractionShape('rect', 4, 1) + `<div style="text-align:center; font-weight:bold; color:#444;">Figure B</div>` },
                                { text: "Enter a fraction that is equal to the shaded area of Figure B. [frac-box]", answer: "1/4" }
                            ] }
                        ]
                    }
                ]
            }
        ]
    }
};