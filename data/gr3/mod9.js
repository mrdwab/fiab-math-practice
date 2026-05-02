// --- SHARED HELPER HUBS ---
const helperHubW1_Mod9 = {
    title: "★ Helper Hub: The Secret of the Scale & Key",
    content: `
        <div style="font-size:15px; line-height: 1.3;">
            <p style="margin-top:0; margin-bottom:12px;">Graphs are full of secrets! The biggest mistake is thinking that one line or one picture always means <strong>"1"</strong>. You have to check the rules!</p>
            
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; break-inside: avoid;">
                <div style="border:2px solid #ccc; padding:10px; border-radius:10px; background:#fff;">
                    <strong style="font-size:16px; color:#2c7be5;">Bar Graph: Check the Scale!</strong><br>
                    Look at the numbers on the side. This graph is counting by <strong>2s</strong>! If a bar stops perfectly in the middle of 4 and 6, the secret number is <strong>5</strong>.
                    <div style="text-align:center; margin-top:8px;">
                        ${drawBarGraph("", "", "", ["A", "B"], [4, 5], 8, 2).replace('width="350" height="250"', 'width="150" height="120" style="max-height:120px; margin:0 auto;"').replace(/font-size="12"/g, 'font-size="18"')}
                    </div>
                </div>

                <div style="border:2px solid #ccc; padding:10px; border-radius:10px; background:#fff;">
                    <strong style="font-size:16px; color:#f39c12;">Picture Graph: Check the Key!</strong><br>
                    Never count pictures until you read the <strong>KEY</strong> at the bottom! If one circle equals 10 students, then 3 circles means <strong>30</strong>, not 3!
                    <div style="text-align:center; margin-top:8px;">
                        ${drawPictureGraph("", "Grade", ["3rd"], [30], "10 kids", 10).replace('width="400"', 'width="200" style="max-height:90px; margin:0 auto;"')}
                    </div>
                </div>
            </div>
        </div>
    `
};

const helperHubW2_Mod9 = {
    title: "★ Helper Hub: X Marks the Spot (Line Plots)",
    content: `
        <div style="font-size:15px; line-height: 1.3;">
            <p style="margin-top:0; margin-bottom:12px;">Line plots can look confusing because there are numbers on the bottom and 'X's on the top. What do they mean?</p>
            
            <div style="display:flex; align-items:center; gap:15px; border:2px solid #ccc; padding:10px; border-radius:10px; background:#fff; margin-bottom:10px; break-inside: avoid;">
                <div style="flex:1;">
                    <strong style="font-size:16px; color:#2c7be5;">The Line Tells You the SIZE</strong><br>
                    The number line at the bottom shows the measurement. In this example, it is the length of leaves in inches.
                    <br><br>
                    <strong style="font-size:16px; color:#e74c3c;">The 'X's Tell You HOW MANY</strong><br>
                    Every single 'X' represents one object. So, if there are three 'X's above the 4, it means <strong>exactly 3 leaves</strong> were 4 inches long!
                </div>
                <div style="flex:1; text-align:center;">
                    ${drawLinePlot("Leaf Lengths", "Inches", ["2", "3", "4", "5"], [1, 0, 3, 2]).replace('width="450" height="240"', 'width="250" height="150" style="max-height:140px; margin:0 auto;"')}
                    <div style="font-size:14px; font-weight:bold; color:#e74c3c; margin-top:5px;">Count the total X's: 1 + 0 + 3 + 2 = 6 total leaves measured!</div>
                </div>
            </div>
        </div>
    `
};

// --- VERSIONS DATA ---
const mod9Versions = {
    A: {
        id: "mod-9-a",
        name: "Represent & Interpret Data",
        weeks: [
            {
                weekNum: 1,
                helperHub: helperHubW1_Mod9,
                days: [
                    {
                        id: "m9-w1-mon-a", name: "Mon", title: "Week 1: Monday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; Students voted for their favorite fruit. Use the bar graph to answer the question below.", problems: [ 
                                { svg: drawBarGraph("Favorite Fruit", "Number of Students", "Fruit", ["Apple", "Banana", "Grape", "Orange"], [15, 25, 10, 20], 30, 5) },
                                { text: "How many more students chose Bananas than chose Apples?", answer: "10" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; [box] = 48", answer: "6" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 35 &divide; [box] = 5", answer: "7" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w1-tue-a", name: "Tue", title: "Week 1: Tuesday",
                        sections: [
                            { type: "mc", instruction: "1. &nbsp; Four classes collected cans for a recycling drive. Which table correctly matches the data shown in the bar graph?", problems: [
                                { svg: drawBarGraph("Cans Collected", "Number of Cans", "Class", ["A", "B", "C", "D"], [40, 20, 50, 30], 60, 10) }
                            ], options: [ 
                                { text: `<table class="data-table" style="font-size:14px; margin:0;"><tr><th>Class</th><th>Cans</th></tr><tr><td>Mr. A</td><td>40</td></tr><tr><td>Ms. B</td><td>30</td></tr><tr><td>Mrs. C</td><td>20</td></tr><tr><td>Mr. D</td><td>50</td></tr></table>`, correct: false }, 
                                { text: `<table class="data-table" style="font-size:14px; margin:0;"><tr><th>Class</th><th>Cans</th></tr><tr><td>Mr. A</td><td>40</td></tr><tr><td>Ms. B</td><td>20</td></tr><tr><td>Mrs. C</td><td>50</td></tr><tr><td>Mr. D</td><td>30</td></tr></table>`, correct: true }, 
                                { text: `<table class="data-table" style="font-size:14px; margin:0;"><tr><th>Class</th><th>Cans</th></tr><tr><td>Mr. A</td><td>30</td></tr><tr><td>Ms. B</td><td>40</td></tr><tr><td>Mrs. C</td><td>20</td></tr><tr><td>Mr. D</td><td>50</td></tr></table>`, correct: false } 
                            ] },
                            { type: "input", instruction: "Solve the related problems below.", problems: [ 
                                { text: "2. &nbsp; Part A: What is 415 rounded to the nearest ten?", answer: "420" },
                                { text: "Part B: What is 415 rounded to the nearest hundred?", answer: "400" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w1-wed-a", name: "Wed", title: "Week 1: Wednesday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; A bookstore tracked how many books were sold over four days. Use the picture graph to solve the problems below.", problems: [ 
                                { svg: drawPictureGraph("Books Sold", "Day", ["Mon", "Tue", "Wed", "Thu"], [15, 10, 25, 5], "5 books", 5) },
                                { text: "Part A: How many total books were sold on Monday and Tuesday combined?", answer: "25" },
                                { text: "Part B: How many fewer books were sold on Thursday than on Wednesday?", answer: "20" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 430 - 60 = 400 - [box]", answer: "30" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w1-thu-a", name: "Thu", title: "Week 1: Thursday",
                        sections: [
                            { type: "grid", instruction: "1. &nbsp; The school library tracked the number of visitors during the week. Decide whether each claim is true or false based on the graph.", problems: [{ svg: drawBarGraph("Library Visitors", "Number of Visitors", "Day", ["Mon", "Tue", "Wed", "Thu"], [30, 25, 40, 20], 50, 10) }], rows: [ 
                                { text: "Exactly 15 more people visited on Wednesday than on Tuesday.", correct: true }, 
                                { text: "The total number of visitors on Monday and Thursday was 50.", correct: true }, 
                                { text: "Tuesday had the fewest visitors.", correct: false } 
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; A rectangular garden has a length of 8 feet and a width of 4 feet. What is the perimeter of the garden, in feet?", answer: "24" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w1-fri-a", name: "Fri", title: "Week 1: Friday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; A toy store recorded the number of board games sold each month. Use the picture graph to answer the question.", problems: [ 
                                { svg: drawPictureGraph("Board Games Sold", "Month", ["June", "July", "Aug"], [12, 16, 6], "4 games", 4) },
                                { text: "How many more games were sold in July than in August?", answer: "10" }
                            ] },
                            { type: "mc", instruction: "2. &nbsp; Which expression is equal to 4 &times; (2 &times; 5)?", options: [ { text: "4 + (2 &times; 5)", correct: false }, { text: "(4 &times; 2) &times; 5", correct: true }, { text: "(4 &times; 2) + 5", correct: false } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 9 &times; 7 = [box]", answer: "63" }
                            ] }
                        ]
                    }
                ]
            },
            {
                weekNum: 2,
                helperHub: helperHubW2_Mod9,
                days: [
                    {
                        id: "m9-w2-mon-a", name: "Mon", title: "Week 2: Monday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; Students measured the length of their pencils. Use the line plot to answer the questions below.", problems: [ 
                                { svg: drawLinePlot("Length of Pencils", "Length (Inches)", ["4", "5", "6", "7", "8"], [2, 4, 3, 1, 0]) },
                                { text: "Part A: How many pencils were exactly 5 inches long?", answer: "4" },
                                { text: "Part B: How many pencils were measured in total?", answer: "10" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; 6 = 7 &times; (4 + [box])", answer: "2" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w2-tue-a", name: "Tue", title: "Week 2: Tuesday",
                        sections: [
                            { type: "grid", instruction: "1. &nbsp; Students measured the lengths of different bugs they found outside. Decide whether each claim is true or false based on the line plot.", problems: [{ svg: drawLinePlot("Bug Lengths", "Length (Inches)", ["1/2", "1", "1 1/2", "2"], [3, 5, 2, 1]) }], rows: [ 
                                { text: "Exactly 5 bugs were 1 inch long.", correct: true }, 
                                { text: "There were more bugs that measured \\frac{1}{2} inch than bugs that measured 1 \\frac{1}{2} inches.", correct: true }, 
                                { text: "10 bugs were measured in total.", correct: false } 
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 54 &divide; [box] = 9", answer: "6" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w2-wed-a", name: "Wed", title: "Week 2: Wednesday",
                        sections: [
                            { type: "mc", instruction: "1. &nbsp; A teacher measured the heights of 5 plants in her classroom to the nearest half inch. Which table correctly matches the data shown in the line plot?", problems: [
                                { svg: drawLinePlot("Plant Heights", "Height (inches)", ["3", "3 1/2", "4", "4 1/2", "5"], [1, 0, 1, 2, 1]) }
                            ], options: [ 
                                { text: `<table class="data-table" style="font-size:14px; margin:0;"><tr><th>Plant</th><th>Height (in)</th></tr><tr><td>Fern</td><td>4</td></tr><tr><td>Cactus</td><td>3 \\frac{1}{2}</td></tr><tr><td>Ivy</td><td>4 \\frac{1}{2}</td></tr><tr><td>Lily</td><td>5</td></tr><tr><td>Aloe</td><td>4</td></tr></table>`, correct: false }, 
                                { text: `<table class="data-table" style="font-size:14px; margin:0;"><tr><th>Plant</th><th>Height (in)</th></tr><tr><td>Fern</td><td>4 \\frac{1}{2}</td></tr><tr><td>Cactus</td><td>3</td></tr><tr><td>Ivy</td><td>4 \\frac{1}{2}</td></tr><tr><td>Lily</td><td>5</td></tr><tr><td>Aloe</td><td>4</td></tr></table>`, correct: true },
                                { text: `<table class="data-table" style="font-size:14px; margin:0;"><tr><th>Plant</th><th>Height (in)</th></tr><tr><td>Fern</td><td>5</td></tr><tr><td>Cactus</td><td>3</td></tr><tr><td>Ivy</td><td>4 \\frac{1}{2}</td></tr><tr><td>Lily</td><td>4 \\frac{1}{2}</td></tr><tr><td>Aloe</td><td>4</td></tr></table>`, correct: false } 
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; A rectangle has a length of 7 feet and a width of 5 feet. What is the area of the rectangle in square feet?", answer: "35" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w2-thu-a", name: "Thu", title: "Week 2: Thursday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; Students measured the wingspans of some butterflies. Use the line plot to answer the questions below.", problems: [ 
                                { svg: drawLinePlot("Butterfly Wingspans", "Length (Inches)", ["2", "2 1/4", "2 1/2", "2 3/4", "3"], [1, 3, 4, 0, 2]) },
                                { text: "Part A: How many butterflies had a wingspan of exactly 2 \\frac{1}{2} inches?", answer: "4" },
                                { text: "Part B: How many total butterflies had a wingspan of 2 \\frac{1}{4} inches OR smaller?", answer: "4" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What is 84 rounded to the nearest ten?", answer: "80" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w2-fri-a", name: "Fri", title: "Week 2: Friday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; A baker measured the weights of several small cakes. Use the line plot to answer the questions.", problems: [ 
                                { svg: drawLinePlot("Weight of Cakes", "Weight (Pounds)", ["1/4", "2/4", "3/4", "1"], [2, 5, 3, 1]) },
                                { text: "Part A: Which weight was the most common for the cakes?", answer: "2/4" },
                                { text: "Part B: How many cakes weighed MORE than \\frac{2}{4} of a pound?", answer: "4" }
                            ] },
                            { type: "grid", instruction: "2. &nbsp; Decide whether each fraction comparison is true or false.", rows: [ 
                                { text: "\\frac{3}{8} &lt; \\frac{5}{8}", correct: true }, 
                                { text: "\\frac{1}{4} &gt; \\frac{1}{2}", correct: false } 
                            ] }
                        ]
                    }
                ]
            }
        ]
    },
    B: {
        id: "mod-9-b",
        name: "Represent & Interpret Data",
        weeks: [
            {
                weekNum: 1,
                helperHub: helperHubW1_Mod9,
                days: [
                    {
                        id: "m9-w1-mon-b", name: "Mon", title: "Week 1: Monday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; Students voted for their favorite pets. Use the bar graph to answer the question below.", problems: [ 
                                { svg: drawBarGraph("Favorite Pets", "Number of Students", "Pets", ["Dog", "Cat", "Bird", "Fish"], [20, 30, 15, 25], 40, 5) },
                                { text: "How many more students chose Cats than chose Birds?", answer: "15" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 9 &times; [box] = 54", answer: "6" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 42 &divide; [box] = 6", answer: "7" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w1-tue-b", name: "Tue", title: "Week 1: Tuesday",
                        sections: [
                            { type: "mc", instruction: "1. &nbsp; Four students tracked the number of pages they read. Which table correctly matches the data shown in the bar graph?", problems: [
                                { svg: drawBarGraph("Pages Read", "Number of Pages", "Student", ["A", "B", "C", "D"], [50, 30, 60, 40], 70, 10) }
                            ], options: [ 
                                { text: `<table class="data-table" style="font-size:14px; margin:0;"><tr><th>Student</th><th>Pages</th></tr><tr><td>A</td><td>60</td></tr><tr><td>B</td><td>30</td></tr><tr><td>C</td><td>50</td></tr><tr><td>D</td><td>40</td></tr></table>`, correct: false }, 
                                { text: `<table class="data-table" style="font-size:14px; margin:0;"><tr><th>Student</th><th>Pages</th></tr><tr><td>A</td><td>50</td></tr><tr><td>B</td><td>30</td></tr><tr><td>C</td><td>60</td></tr><tr><td>D</td><td>40</td></tr></table>`, correct: true }, 
                                { text: `<table class="data-table" style="font-size:14px; margin:0;"><tr><th>Student</th><th>Pages</th></tr><tr><td>A</td><td>50</td></tr><tr><td>B</td><td>40</td></tr><tr><td>C</td><td>60</td></tr><tr><td>D</td><td>30</td></tr></table>`, correct: false } 
                            ] },
                            { type: "input", instruction: "Solve the related problems below.", problems: [ 
                                { text: "2. &nbsp; Part A: What is 326 rounded to the nearest ten?", answer: "330" },
                                { text: "Part B: What is 326 rounded to the nearest hundred?", answer: "300" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w1-wed-b", name: "Wed", title: "Week 1: Wednesday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; A toy store tracked how many puzzles were sold over four days. Use the picture graph to solve the problems below.", problems: [ 
                                { svg: drawPictureGraph("Puzzles Sold", "Day", ["Mon", "Tue", "Wed", "Thu"], [20, 15, 30, 5], "5 puzzles", 5) },
                                { text: "Part A: How many total puzzles were sold on Monday and Tuesday combined?", answer: "35" },
                                { text: "Part B: How many fewer puzzles were sold on Thursday than on Wednesday?", answer: "25" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 540 - 70 = 500 - [box]", answer: "30" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w1-thu-b", name: "Thu", title: "Week 1: Thursday",
                        sections: [
                            { type: "grid", instruction: "1. &nbsp; A park tracked the number of visitors during the week. Decide whether each claim is true or false based on the graph.", problems: [{ svg: drawBarGraph("Park Visitors", "Number of Visitors", "Day", ["Mon", "Tue", "Wed", "Thu"], [40, 35, 50, 20], 60, 10) }], rows: [ 
                                { text: "Exactly 15 more people visited on Wednesday than on Tuesday.", correct: true }, 
                                { text: "The total number of visitors on Monday and Thursday was 60.", correct: true }, 
                                { text: "Tuesday had the fewest visitors.", correct: false } 
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; A rectangular garden has a length of 9 feet and a width of 3 feet. What is the perimeter of the garden, in feet?", answer: "24" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w1-fri-b", name: "Fri", title: "Week 1: Friday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; A clothing store recorded the number of shirts sold each month. Use the picture graph to answer the question.", problems: [ 
                                { svg: drawPictureGraph("Shirts Sold", "Month", ["June", "July", "Aug"], [16, 20, 8], "4 shirts", 4) },
                                { text: "How many more shirts were sold in July than in August?", answer: "12" }
                            ] },
                            { type: "mc", instruction: "2. &nbsp; Which expression is equal to 3 &times; (4 &times; 2)?", options: [ { text: "3 + (4 &times; 2)", correct: false }, { text: "(3 &times; 4) &times; 2", correct: true }, { text: "(3 &times; 4) + 2", correct: false } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; 6 = [box]", answer: "48" }
                            ] }
                        ]
                    }
                ]
            },
            {
                weekNum: 2,
                helperHub: helperHubW2_Mod9,
                days: [
                    {
                        id: "m9-w2-mon-b", name: "Mon", title: "Week 2: Monday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; Students measured the length of their erasers. Use the line plot to answer the questions below.", problems: [ 
                                { svg: drawLinePlot("Length of Erasers", "Length (Inches)", ["2", "3", "4", "5", "6"], [3, 5, 2, 1, 0]) },
                                { text: "Part A: How many erasers were exactly 3 inches long?", answer: "5" },
                                { text: "Part B: How many erasers were measured in total?", answer: "11" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; 7 = 8 &times; (5 + [box])", answer: "2" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w2-tue-b", name: "Tue", title: "Week 2: Tuesday",
                        sections: [
                            { type: "grid", instruction: "1. &nbsp; Students measured the lengths of different worms they found outside. Decide whether each claim is true or false based on the line plot.", problems: [{ svg: drawLinePlot("Worm Lengths", "Length (Inches)", ["1/2", "1", "1 1/2", "2"], [4, 6, 3, 2]) }], rows: [ 
                                { text: "Exactly 6 worms were 1 inch long.", correct: true }, 
                                { text: "There were more worms that measured \\frac{1}{2} inch than worms that measured 1 \\frac{1}{2} inches.", correct: true }, 
                                { text: "14 worms were measured in total.", correct: false } 
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 48 &divide; [box] = 8", answer: "6" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w2-wed-b", name: "Wed", title: "Week 2: Wednesday",
                        sections: [
                            { type: "mc", instruction: "1. &nbsp; A teacher measured the heights of 5 plants in her classroom to the nearest half inch. Which table correctly matches the data shown in the line plot?", problems: [
                                { svg: drawLinePlot("Plant Heights", "Height (inches)", ["4", "4 1/2", "5", "5 1/2", "6"], [2, 0, 1, 2, 1]) }
                            ], options: [ 
                                { text: `<table class="data-table" style="font-size:14px; margin:0;"><tr><th>Plant</th><th>Height (in)</th></tr><tr><td>Oak</td><td>5 \\frac{1}{2}</td></tr><tr><td>Pine</td><td>4</td></tr><tr><td>Elm</td><td>5 \\frac{1}{2}</td></tr><tr><td>Birch</td><td>6</td></tr><tr><td>Ash</td><td>5</td></tr></table>`, correct: true }, 
                                { text: `<table class="data-table" style="font-size:14px; margin:0;"><tr><th>Plant</th><th>Height (in)</th></tr><tr><td>Oak</td><td>5 \\frac{1}{2}</td></tr><tr><td>Pine</td><td>4</td></tr><tr><td>Elm</td><td>4 \\frac{1}{2}</td></tr><tr><td>Birch</td><td>6</td></tr><tr><td>Ash</td><td>5</td></tr></table>`, correct: false },
                                { text: `<table class="data-table" style="font-size:14px; margin:0;"><tr><th>Plant</th><th>Height (in)</th></tr><tr><td>Oak</td><td>6</td></tr><tr><td>Pine</td><td>4</td></tr><tr><td>Elm</td><td>5 \\frac{1}{2}</td></tr><tr><td>Birch</td><td>5</td></tr><tr><td>Ash</td><td>5</td></tr></table>`, correct: false } 
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; A rectangle has a length of 8 feet and a width of 6 feet. What is the area of the rectangle in square feet?", answer: "48" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w2-thu-b", name: "Thu", title: "Week 2: Thursday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; Students measured the lengths of some beetles. Use the line plot to answer the questions below.", problems: [ 
                                { svg: drawLinePlot("Beetle Lengths", "Length (Inches)", ["3", "3 1/4", "3 1/2", "3 3/4", "4"], [2, 4, 3, 0, 1]) },
                                { text: "Part A: How many beetles had a length of exactly 3 \\frac{1}{2} inches?", answer: "3" },
                                { text: "Part B: How many total beetles had a length of 3 \\frac{1}{4} inches OR smaller?", answer: "6" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What is 62 rounded to the nearest ten?", answer: "60" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w2-fri-b", name: "Fri", title: "Week 2: Friday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; A grocer measured the weights of several apples. Use the line plot to answer the questions.", problems: [ 
                                { svg: drawLinePlot("Weight of Apples", "Weight (Pounds)", ["1/4", "2/4", "3/4", "1"], [1, 4, 5, 2]) },
                                { text: "Part A: Which weight was the most common for the apples?", answer: "3/4" },
                                { text: "Part B: How many apples weighed MORE than \\frac{3}{4} of a pound?", answer: "2" }
                            ] },
                            { type: "grid", instruction: "2. &nbsp; Decide whether each fraction comparison is true or false.", rows: [ 
                                { text: "\\frac{2}{6} &lt; \\frac{4}{6}", correct: true }, 
                                { text: "\\frac{1}{2} &gt; \\frac{3}{4}", correct: false } 
                            ] }
                        ]
                    }
                ]
            }
        ]
    },
    C: {
        id: "mod-9-c",
        name: "Represent & Interpret Data",
        weeks: [
            {
                weekNum: 1,
                helperHub: helperHubW1_Mod9,
                days: [
                    {
                        id: "m9-w1-mon-c", name: "Mon", title: "Week 1: Monday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; Students voted for their favorite colors. Use the bar graph to answer the question below.", problems: [ 
                                { svg: drawBarGraph("Favorite Colors", "Number of Students", "Colors", ["Red", "Blue", "Green", "Yellow"], [10, 20, 5, 15], 25, 5) },
                                { text: "How many more students chose Blue than chose Green?", answer: "15" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; [box] = 42", answer: "6" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 48 &divide; [box] = 8", answer: "6" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w1-tue-c", name: "Tue", title: "Week 1: Tuesday",
                        sections: [
                            { type: "mc", instruction: "1. &nbsp; Four teams tracked the points they scored. Which table correctly matches the data shown in the bar graph?", problems: [
                                { svg: drawBarGraph("Points Scored", "Number of Points", "Team", ["A", "B", "C", "D"], [30, 10, 40, 20], 50, 10) }
                            ], options: [ 
                                { text: `<table class="data-table" style="font-size:14px; margin:0;"><tr><th>Team</th><th>Points</th></tr><tr><td>A</td><td>40</td></tr><tr><td>B</td><td>10</td></tr><tr><td>C</td><td>30</td></tr><tr><td>D</td><td>20</td></tr></table>`, correct: false }, 
                                { text: `<table class="data-table" style="font-size:14px; margin:0;"><tr><th>Team</th><th>Points</th></tr><tr><td>A</td><td>30</td></tr><tr><td>B</td><td>10</td></tr><tr><td>C</td><td>40</td></tr><tr><td>D</td><td>20</td></tr></table>`, correct: true }, 
                                { text: `<table class="data-table" style="font-size:14px; margin:0;"><tr><th>Team</th><th>Points</th></tr><tr><td>A</td><td>30</td></tr><tr><td>B</td><td>20</td></tr><tr><td>C</td><td>40</td></tr><tr><td>D</td><td>10</td></tr></table>`, correct: false } 
                            ] },
                            { type: "input", instruction: "Solve the related problems below.", problems: [ 
                                { text: "2. &nbsp; Part A: What is 584 rounded to the nearest ten?", answer: "580" },
                                { text: "Part B: What is 584 rounded to the nearest hundred?", answer: "600" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w1-wed-c", name: "Wed", title: "Week 1: Wednesday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; A theater tracked how many tickets were sold over four days. Use the picture graph to solve the problems below.", problems: [ 
                                { svg: drawPictureGraph("Tickets Sold", "Day", ["Mon", "Tue", "Wed", "Thu"], [10, 20, 25, 15], "5 tickets", 5) },
                                { text: "Part A: How many total tickets were sold on Monday and Tuesday combined?", answer: "30" },
                                { text: "Part B: How many fewer tickets were sold on Thursday than on Wednesday?", answer: "10" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 650 - 80 = 600 - [box]", answer: "30" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w1-thu-c", name: "Thu", title: "Week 1: Thursday",
                        sections: [
                            { type: "grid", instruction: "1. &nbsp; A museum tracked the number of visitors during the week. Decide whether each claim is true or false based on the graph.", problems: [{ svg: drawBarGraph("Museum Visitors", "Number of Visitors", "Day", ["Mon", "Tue", "Wed", "Thu"], [50, 45, 60, 30], 70, 10) }], rows: [ 
                                { text: "Exactly 15 more people visited on Wednesday than on Tuesday.", correct: true }, 
                                { text: "The total number of visitors on Monday and Thursday was 80.", correct: true }, 
                                { text: "Tuesday had the fewest visitors.", correct: false } 
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; A rectangular garden has a length of 7 feet and a width of 4 feet. What is the perimeter of the garden, in feet?", answer: "22" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w1-fri-c", name: "Fri", title: "Week 1: Friday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; A store recorded the number of hats sold each month. Use the picture graph to answer the question.", problems: [ 
                                { svg: drawPictureGraph("Hats Sold", "Month", ["June", "July", "Aug"], [12, 20, 4], "4 hats", 4) },
                                { text: "How many more hats were sold in July than in August?", answer: "16" }
                            ] },
                            { type: "mc", instruction: "2. &nbsp; Which expression is equal to 5 &times; (2 &times; 3)?", options: [ { text: "5 + (2 &times; 3)", correct: false }, { text: "(5 &times; 2) &times; 3", correct: true }, { text: "(5 &times; 2) + 3", correct: false } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; 8 = [box]", answer: "56" }
                            ] }
                        ]
                    }
                ]
            },
            {
                weekNum: 2,
                helperHub: helperHubW2_Mod9,
                days: [
                    {
                        id: "m9-w2-mon-c", name: "Mon", title: "Week 2: Monday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; Students measured the length of their crayons. Use the line plot to answer the questions below.", problems: [ 
                                { svg: drawLinePlot("Length of Crayons", "Length (Inches)", ["3", "4", "5", "6", "7"], [1, 4, 5, 2, 0]) },
                                { text: "Part A: How many crayons were exactly 5 inches long?", answer: "5" },
                                { text: "Part B: How many crayons were measured in total?", answer: "12" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; 9 = 6 &times; (5 + [box])", answer: "4" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w2-tue-c", name: "Tue", title: "Week 2: Tuesday",
                        sections: [
                            { type: "grid", instruction: "1. &nbsp; Students measured the lengths of different snails they found outside. Decide whether each claim is true or false based on the line plot.", problems: [{ svg: drawLinePlot("Snail Lengths", "Length (Inches)", ["1/2", "1", "1 1/2", "2"], [2, 4, 5, 1]) }], rows: [ 
                                { text: "Exactly 4 snails were 1 inch long.", correct: true }, 
                                { text: "There were more snails that measured \\frac{1}{2} inch than snails that measured 1 \\frac{1}{2} inches.", correct: false }, 
                                { text: "12 snails were measured in total.", correct: true } 
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 63 &divide; [box] = 7", answer: "9" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w2-wed-c", name: "Wed", title: "Week 2: Wednesday",
                        sections: [
                            { type: "mc", instruction: "1. &nbsp; A teacher measured the heights of 5 bushes in her garden to the nearest half inch. Which table correctly matches the data shown in the line plot?", problems: [
                                { svg: drawLinePlot("Bush Heights", "Height (inches)", ["2", "2 1/2", "3", "3 1/2", "4"], [1, 1, 0, 2, 1]) }
                            ], options: [ 
                                { text: `<table class="data-table" style="font-size:14px; margin:0;"><tr><th>Bush</th><th>Height (in)</th></tr><tr><td>Rose</td><td>3 \\frac{1}{2}</td></tr><tr><td>Lilac</td><td>2</td></tr><tr><td>Mint</td><td>3 \\frac{1}{2}</td></tr><tr><td>Fern</td><td>4</td></tr><tr><td>Aloe</td><td>2 \\frac{1}{2}</td></tr></table>`, correct: true }, 
                                { text: `<table class="data-table" style="font-size:14px; margin:0;"><tr><th>Bush</th><th>Height (in)</th></tr><tr><td>Rose</td><td>3 \\frac{1}{2}</td></tr><tr><td>Lilac</td><td>2</td></tr><tr><td>Mint</td><td>3</td></tr><tr><td>Fern</td><td>4</td></tr><tr><td>Aloe</td><td>2 \\frac{1}{2}</td></tr></table>`, correct: false },
                                { text: `<table class="data-table" style="font-size:14px; margin:0;"><tr><th>Bush</th><th>Height (in)</th></tr><tr><td>Rose</td><td>4</td></tr><tr><td>Lilac</td><td>2</td></tr><tr><td>Mint</td><td>3 \\frac{1}{2}</td></tr><tr><td>Fern</td><td>3 \\frac{1}{2}</td></tr><tr><td>Aloe</td><td>2</td></tr></table>`, correct: false } 
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; A rectangle has a length of 9 feet and a width of 4 feet. What is the area of the rectangle in square feet?", answer: "36" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w2-thu-c", name: "Thu", title: "Week 2: Thursday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; Students measured the lengths of some moths. Use the line plot to answer the questions below.", problems: [ 
                                { svg: drawLinePlot("Moth Lengths", "Length (Inches)", ["1", "1 1/4", "1 1/2", "1 3/4", "2"], [3, 1, 5, 0, 2]) },
                                { text: "Part A: How many moths had a length of exactly 1 \\frac{1}{2} inches?", answer: "5" },
                                { text: "Part B: How many total moths had a length of 1 \\frac{1}{4} inches OR smaller?", answer: "4" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What is 93 rounded to the nearest ten?", answer: "90" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w2-fri-c", name: "Fri", title: "Week 2: Friday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; A grocer measured the weights of several pears. Use the line plot to answer the questions.", problems: [ 
                                { svg: drawLinePlot("Weight of Pears", "Weight (Pounds)", ["1/4", "2/4", "3/4", "1"], [3, 6, 2, 1]) },
                                { text: "Part A: Which weight was the most common for the pears?", answer: "2/4" },
                                { text: "Part B: How many pears weighed MORE than \\frac{2}{4} of a pound?", answer: "3" }
                            ] },
                            { type: "grid", instruction: "2. &nbsp; Decide whether each fraction comparison is true or false.", rows: [ 
                                { text: "\\frac{4}{8} &lt; \\frac{7}{8}", correct: true }, 
                                { text: "\\frac{1}{2} &gt; \\frac{5}{8}", correct: false } 
                            ] }
                        ]
                    }
                ]
            }
        ]
    }
};