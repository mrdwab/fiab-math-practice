// --- NEW: MODULE 10 DATA (Geometry) ---
const mod10Data = {
    id: "mod-10",
    name: "Geometry & Attributes",
    weeks: [
        {
            weekNum: 1,
            helperHub: {
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
                                <strong style="font-size:16px; color:#e74c3c;">Rectangle</strong><br>4 square corners (L-shapes)
                            </div>
                            <div style="text-align:center; width:30%; background:#fff; border:2px solid #ccc; border-radius:10px; padding:10px;">
                                ${drawGeomShape('rhombus')}
                                <strong style="font-size:16px; color:#f39c12;">Rhombus</strong><br>4 equal sides
                            </div>
                            <div style="text-align:center; width:30%; background:#fff; border:2px solid #ccc; border-radius:10px; padding:10px;">
                                ${drawGeomShape('square')}
                                <strong style="font-size:16px; color:#27ae60;">Square</strong><br>Follows ALL the rules above!
                            </div>
                        </div>
                    </div>
                `
            },
            days: [
                {
                    id: "m10-w1-mon", name: "Mon", title: "Week 1: Monday",
                    sections: [
                        { type: "grid", th1: "Shape", th2: "Yes", th3: "No", instruction: "1. &nbsp; Decide whether each shape is a quadrilateral.", rows: [ 
                            { svg: drawGeomShape('rhombus'), correct: true }, 
                            { svg: drawGeomShape('pentagon'), correct: false }, 
                            { svg: drawGeomShape('trap', 15), correct: true } 
                        ] },
                        { type: "input", instruction: "Solve the problem below.", problems: [ 
                            { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; 8 = [box]", answer: "48" }
                        ] }
                    ]
                },
                {
                    id: "m10-w1-tue", name: "Tue", title: "Week 1: Tuesday",
                    sections: [
                        { type: "grid", th1: "Shape", th2: "Yes", th3: "No", instruction: "1. &nbsp; Decide whether each shape appears to be a parallelogram.", rows: [ 
                            { svg: drawGeomShape('para'), correct: true }, 
                            { svg: drawGeomShape('rect-w', 20), correct: true }, 
                            { svg: drawGeomShape('right-tri'), correct: false } 
                        ] },
                        { type: "input", instruction: "Solve the problem below.", problems: [ 
                            { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 42 &divide; 7 = [box]", answer: "6" }
                        ] }
                    ]
                },
                {
                    id: "m10-w1-wed", name: "Wed", title: "Week 1: Wednesday",
                    sections: [
                        { type: "grid", th1: "Shape", th2: "Yes", th3: "No", instruction: "1. &nbsp; Decide whether each shape is a rectangle.", rows: [ 
                            { svg: drawGeomShape('rect-t'), correct: true }, 
                            { svg: drawGeomShape('square', 45), correct: true }, 
                            { svg: drawGeomShape('para', 10), correct: false } 
                        ] },
                        { type: "input", instruction: "Solve the problem below.", problems: [ 
                            { text: "2. &nbsp; What is the area, in square inches, of a rectangle with a length of 9 inches and a width of 4 inches?", answer: "36" }
                        ] }
                    ]
                },
                {
                    id: "m10-w1-thu", name: "Thu", title: "Week 1: Thursday",
                    sections: [
                        { type: "grid", th1: "Shape", th2: "Yes", th3: "No", instruction: "1. &nbsp; Decide whether each shape is a square.", rows: [ 
                            { svg: drawGeomShape('square', 15), correct: true }, 
                            { svg: drawGeomShape('rhombus'), correct: false }, 
                            { svg: drawGeomShape('rect-w'), correct: false } 
                        ] },
                        { type: "input", instruction: "Solve the problem below.", problems: [ 
                            { text: "2. &nbsp; What is 651 rounded to the nearest ten?", answer: "650" }
                        ] }
                    ]
                },
                {
                    id: "m10-w1-fri", name: "Fri", title: "Week 1: Friday",
                    sections: [
                        { type: "grid", th1: "Shape", th2: "Yes", th3: "No", instruction: "1. &nbsp; Decide whether each shape is a rhombus.", rows: [ 
                            { svg: drawGeomShape('rhombus'), correct: true }, 
                            { svg: drawGeomShape('square', 10), correct: true }, 
                            { svg: drawGeomShape('trap'), correct: false } 
                        ] },
                        { type: "input", instruction: "Solve the problem below.", problems: [ 
                            { text: "2. &nbsp; What is the perimeter, in centimeters, of a rectangle with side lengths of 5 cm and 3 cm?", answer: "16" }
                        ] }
                    ]
                }
            ]
        },
        {
            weekNum: 2,
            helperHub: {
                title: "★ Helper Hub: Equal Shares & Key Vocabulary",
                content: `
                    <div style="font-size:15px; line-height: 1.3;">
                        <div style="display:flex; gap:10px; align-items:center; break-inside: avoid;">
                            <div style="flex:1;">
                                <strong style="font-size:16px; color:#2c7be5;">Equal Shares</strong><br>
                                To use a fraction, the shape MUST be cut into equal pieces!
                            </div>
                            <div style="display:flex; gap:15px;">
                                <div style="text-align:center;">
                                    ${drawFractionShape('rect', 4, 1)}
                                    <div style="color:#27ae60; font-weight:bold; margin-top:5px;">Yes! (<span class="inline-frac" style="vertical-align:middle;"><span class="num">1</span><span class="den">4</span></span>)</div>
                                </div>
                                <div style="text-align:center;">
                                    <svg width="120" height="120" viewBox="0 0 120 120" style="margin: 10px auto; display: block;">
                                        <rect x="10" y="10" width="100" height="100" fill="none" stroke="#333" stroke-width="2"/>
                                        <rect x="10" y="10" width="20" height="100" fill="#81ecec" stroke="#333" stroke-width="2"/>
                                        <line x1="30" y1="10" x2="30" y2="110" stroke="#333" stroke-width="2"/>
                                        <line x1="70" y1="10" x2="70" y2="110" stroke="#333" stroke-width="2"/>
                                        <line x1="80" y1="10" x2="80" y2="110" stroke="#333" stroke-width="2"/>
                                    </svg>
                                    <div style="color:#e74c3c; font-weight:bold; margin-top:5px;">No! (Unequal)</div>
                                </div>
                            </div>
                        </div>
                        
                        <div style="margin-top:15px; display:flex; gap:10px; break-inside: avoid;">
                            <div style="flex:1; padding:10px; border:2px solid #ccc; border-radius:8px; background:#fff; text-align:center;">
                                <strong style="color:#8e44ad; font-size:16px;">Parallel Lines</strong><br>
                                Lines that always stay the same distance apart and never touch!
                                <svg width="80" height="40" viewBox="0 0 80 40" style="margin:5px auto; display:block;">
                                    <line x1="10" y1="10" x2="70" y2="10" stroke="#2c7be5" stroke-width="4"/>
                                    <line x1="10" y1="30" x2="70" y2="30" stroke="#2c7be5" stroke-width="4"/>
                                </svg>
                            </div>
                            <div style="flex:1; padding:10px; border:2px solid #ccc; border-radius:8px; background:#fff; text-align:center;">
                                <strong style="color:#8e44ad; font-size:16px;">Right Angle</strong><br>
                                A "square corner" that makes a perfect L-shape.
                                <svg width="80" height="40" viewBox="0 0 80 40" style="margin:5px auto; display:block;">
                                    <polyline points="20,10 20,30 60,30" fill="none" stroke="#e74c3c" stroke-width="4"/>
                                    <rect x="20" y="20" width="10" height="10" fill="none" stroke="#e74c3c" stroke-width="2"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                `
            },
            days: [
                {
                    id: "m10-w2-mon", name: "Mon", title: "Week 2: Monday",
                    sections: [
                        { type: "grid", th1: "Question", th2: "Yes", th3: "No", instruction: "1. &nbsp; Look at Figure A. Decide whether each claim is true or false.", problems: [{ svg: drawGeomShape('square', 45) + `<div style="text-align:center; font-weight:bold; color:#444;">Figure A</div>` }], rows: [ 
                            { text: "Is Figure A a quadrilateral?", correct: true }, 
                            { text: "Is Figure A a parallelogram?", correct: true }, 
                            { text: "Is Figure A a rectangle?", correct: true } 
                        ] },
                        { type: "input", instruction: "Solve the problem below.", problems: [ 
                            { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; 7 = 8 &times; (5 + [box])", answer: "2" }
                        ] }
                    ]
                },
                {
                    id: "m10-w2-tue", name: "Tue", title: "Week 2: Tuesday",
                    sections: [
                        { type: "fraction-input", instruction: "1. &nbsp; Figure A is divided into equal parts. Some parts are shaded.", problems: [ 
                            { svg: drawFractionShape('circle', 8, 3) + `<div style="text-align:center; font-weight:bold; color:#444;">Figure A</div>` },
                            { text: "Enter a fraction that is equal to the shaded area of Figure A. [frac-box]", answer: "3/8" }
                        ] },
                        { type: "input", instruction: "Solve the problem below.", problems: [ 
                            { text: "2. &nbsp; What is 250 rounded to the nearest hundred?", answer: "300" }
                        ] }
                    ]
                },
                {
                    id: "m10-w2-wed", name: "Wed", title: "Week 2: Wednesday",
                    sections: [
                        { type: "grid", th1: "Question", th2: "Yes", th3: "No", instruction: "1. &nbsp; Look at Figure A. Decide whether each claim is true or false.", problems: [{ svg: drawGeomShape('iso-trap') + `<div style="text-align:center; font-weight:bold; color:#444;">Figure A</div>` }], rows: [ 
                            { text: "Is Figure A a quadrilateral?", correct: true }, 
                            { text: "Is Figure A a rectangle?", correct: false }, 
                            { text: "Is Figure A a rhombus?", correct: false } 
                        ] },
                        { type: "input", instruction: "Solve the problem below.", problems: [ 
                            { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 54 &divide; 6 = [box]", answer: "9" }
                        ] }
                    ]
                },
                {
                    id: "m10-w2-thu", name: "Thu", title: "Week 2: Thursday",
                    sections: [
                        { type: "fraction-input", instruction: "1. &nbsp; Figure A is divided into equal squares. One square is shaded.", problems: [ 
                            { svg: drawFractionShape('rect', 4, 1) + `<div style="text-align:center; font-weight:bold; color:#444;">Figure A</div>` },
                            { text: "Enter a fraction that is equal to the shaded area of Figure A. [frac-box]", answer: "1/4" }
                        ] },
                        { type: "grid", instruction: "2. &nbsp; Decide whether each equation is true or false.", rows: [ 
                            { text: "6 &times; 4 = 24", correct: true }, 
                            { text: "35 &divide; 5 = 6", correct: false } 
                        ] }
                    ]
                },
                {
                    id: "m10-w2-fri", name: "Fri", title: "Week 2: Friday",
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
};