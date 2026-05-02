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
                        ${drawBarGraph("", "", "", ["A", "B"], [4, 5], 8, 2).replace('width="350" height="250"', 'width="150" height="120"')}
                    </div>
                </div>
                
                <div style="border:2px solid #ccc; padding:10px; border-radius:10px; background:#fff;">
                    <strong style="font-size:16px; color:#27ae60;">Picture Graph: Check the Key!</strong><br>
                    Look at the bottom of the graph. This key says 1 circle = <strong>4 votes</strong>!<br>
                    If you see a <em>half circle</em>, it means half of 4, which is <strong>2 votes</strong>.
                    <div style="text-align:center; margin-top:8px;">
                        ${drawPictureGraph("", "", ["A", "B"], [8, 6], "4 votes", 4).replace('width="400"', 'width="200"')}
                    </div>
                </div>
            </div>
        </div>
    `
};

const helperHubW2_Mod9 = {
    title: "★ Helper Hub: Line Plots & Fractions",
    content: `
        <div style="font-size:15px; line-height: 1.3;">
            <p style="margin-top:0; margin-bottom:12px;">A line plot is just a number line that holds data. Every <strong>X</strong> on the line represents <strong>one piece of data</strong>.</p>
            
            <div style="display:flex; align-items:center; gap:15px; border:2px solid #ccc; padding:10px; border-radius:10px; background:#fff; break-inside: avoid;">
                <div style="flex:1;">
                    <strong style="font-size:16px; color:#8e44ad;">How to Read a Line Plot</strong><br>
                    Look at the line plot below showing the lengths of some strings.<br><br>
                    • How many strings were <strong style="color:#2c7be5;">2 inches</strong> long? Count the Xs above the 2! (There are 3).<br>
                    • What was the most common string length? <strong style="color:#e74c3c;">2 &frac12; inches</strong> (It has the most Xs!).<br>
                    • How many total strings were measured? Count all the Xs on the whole plot! (3 + 5 + 2 = 10 strings).
                </div>
                
                <div style="flex:1; text-align:center;">
                    ${drawLinePlot("String Lengths", "Length (Inches)", ["2", "2 1/2", "3"], [3, 5, 2]).replace('width="450" height="240"', 'width="250" height="150"')}
                </div>
            </div>
            
            <div style="background:#fff3e0; border-left:5px solid #f39c12; padding:10px 12px; border-radius:0 8px 8px 0; margin-top:10px; break-inside: avoid;">
                <strong>Beware of "OR" questions!</strong><br>
                If a question asks: <em>"How many strings were 2 &frac12; inches <strong>OR</strong> 3 inches long?"</em>, you have to add those two columns together! (5 + 2 = 7 strings).
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
                            { type: "input", instruction: "1. &nbsp; The bar graph shows the favorite colors of students in a class. Use the graph to answer the question.", problems: [ 
                                { svg: drawBarGraph("Favorite Colors", "Number of Students", "Colors", ["Red", "Blue", "Green", "Yellow"], [6, 8, 5, 4], 10, 2), text: "How many more students chose Blue than Yellow?", answer: "4" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What is 418 rounded to the nearest hundred?", answer: "400" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w1-tue-a", name: "Tue", title: "Week 1: Tuesday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; The picture graph shows the number of books read by three students. Use the graph to answer the question.", problems: [ 
                                { svg: drawPictureGraph("Books Read", "Student", ["Sam", "Leo", "Mia"], [12, 8, 14], "4 books", 4), text: "How many total books did Mia read?", answer: "14" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 45 &divide; 5 = [box]", answer: "9" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w1-wed-a", name: "Wed", title: "Week 1: Wednesday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; The bar graph shows the number of books in different sections of a library.", problems: [ 
                                { svg: drawBarGraph("Books in Library", "Number of Books", "Section", ["Math", "Science", "History"], [40, 25, 30], 50, 10), text: "How many total books are in the three sections combined?", answer: "95" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; 6 = [box]", answer: "42" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w1-thu-a", name: "Thu", title: "Week 1: Thursday",
                        sections: [
                            { type: "grid", instruction: "1. &nbsp; The picture graph shows points scored in a game. Decide whether each statement is true or false.", problems: [ 
                                { svg: drawPictureGraph("Points Scored", "Player", ["Dan", "Kim", "Roy"], [8, 5, 10], "2 points", 2) }
                            ], rows: [ 
                                { text: "Dan scored exactly 8 points.", correct: true }, 
                                { text: "Kim scored exactly 6 points.", correct: false }, 
                                { text: "The three players scored 23 points in total.", correct: true } 
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; A rectangle has a length of 5 inches and a width of 4 inches. What is the perimeter, in inches, of the rectangle?", answer: "18" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w1-fri-a", name: "Fri", title: "Week 1: Friday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; A recycling center counted the items they collected. Use the graph to answer the questions.", problems: [ 
                                { svg: drawBarGraph("Items Recycled", "Number of Items", "Material", ["Paper", "Plastic", "Glass", "Metal"], [30, 45, 20, 15], 50, 10) },
                                { text: "Part A: How many glass items were recycled?", answer: "20" },
                                { text: "Part B: How many total paper and plastic items were recycled?", answer: "75" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; A rectangular garden is 6 feet wide and 7 feet long. What is the area, in square feet, of the garden?", answer: "42" }
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
                            { type: "input", instruction: "1. &nbsp; The line plot shows the shoe sizes of students in a class. Use the line plot to answer the question.", problems: [ 
                                { svg: drawLinePlot("Student Shoe Sizes", "Shoe Size", ["6", "6 1/2", "7", "7 1/2"], [3, 5, 2, 4]), text: "How many students wear a size 6 \\frac{1}{2} shoe?", answer: "5" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 4 &times; 8 = [box]", answer: "32" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w2-tue-a", name: "Tue", title: "Week 2: Tuesday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; The line plot shows the lengths of several pencils. Use the line plot to answer the question.", problems: [ 
                                { svg: drawLinePlot("Pencil Lengths", "Length (Inches)", ["4 1/4", "4 2/4", "4 3/4"], [2, 4, 3]), text: "How many pencils were longer than 4 \\frac{1}{4} inches?", answer: "7" }
                            ] },
                            { type: "grid", instruction: "2. &nbsp; Decide whether each fraction comparison is true or false.", rows: [ 
                                { text: "\\frac{3}{6} &gt; \\frac{5}{6}", correct: false }, 
                                { text: "\\frac{4}{4} = \\frac{8}{8}", correct: true } 
                            ] }
                        ]
                    },
                    {
                        id: "m9-w2-wed-a", name: "Wed", title: "Week 2: Wednesday",
                        sections: [
                            { type: "grid", instruction: "1. &nbsp; The line plot shows the number of hours students spent playing outside. Decide whether each statement is true or false.", problems: [ 
                                { svg: drawLinePlot("Hours Played Outside", "Hours", ["1", "1 1/2", "2"], [4, 2, 5]) }
                            ], rows: [ 
                                { text: "Exactly 5 students played outside for 2 hours.", correct: true }, 
                                { text: "A total of 11 students were asked about their time outside.", correct: true }, 
                                { text: "The most common amount of time spent outside was 1 hour.", correct: false } 
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 520 - 40 = [box]", answer: "480" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w2-thu-a", name: "Thu", title: "Week 2: Thursday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; A scientist measured the wingspans of several butterflies. Use the line plot to answer the questions.", problems: [ 
                                { svg: drawLinePlot("Butterfly Wingspans", "Wingspan (Inches)", ["2", "2 1/4", "2 2/4", "2 3/4"], [1, 3, 4, 2]) },
                                { text: "Part A: How many butterflies had a wingspan of exactly 2 \\frac{3}{4} inches?", answer: "2" },
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
                            { type: "input", instruction: "1. &nbsp; The bar graph shows the favorite pets of students in a class. Use the graph to answer the question.", problems: [ 
                                { svg: drawBarGraph("Favorite Pets", "Number of Students", "Pets", ["Dog", "Cat", "Fish", "Bird"], [8, 6, 7, 4], 10, 2), text: "How many more students chose Dog than Bird?", answer: "4" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What is 382 rounded to the nearest hundred?", answer: "400" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w1-tue-b", name: "Tue", title: "Week 1: Tuesday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; The picture graph shows the number of apples picked by three students. Use the graph to answer the question.", problems: [ 
                                { svg: drawPictureGraph("Apples Picked", "Student", ["Noah", "Zoe", "Eli"], [16, 10, 8], "4 apples", 4), text: "How many total apples did Zoe pick?", answer: "10" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 32 &divide; 4 = [box]", answer: "8" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w1-wed-b", name: "Wed", title: "Week 1: Wednesday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; The bar graph shows the number of toys sold at a store.", problems: [ 
                                { svg: drawBarGraph("Toys Sold", "Number of Toys", "Toy Type", ["Cars", "Dolls", "Blocks"], [30, 45, 20], 50, 10), text: "How many total toys were sold in all?", answer: "95" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; 8 = [box]", answer: "48" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w1-thu-b", name: "Thu", title: "Week 1: Thursday",
                        sections: [
                            { type: "grid", instruction: "1. &nbsp; The picture graph shows miles run by three runners. Decide whether each statement is true or false.", problems: [ 
                                { svg: drawPictureGraph("Miles Run", "Runner", ["Sara", "Max", "Ann"], [8, 5, 10], "2 miles", 2) }
                            ], rows: [ 
                                { text: "Sara ran exactly 8 miles.", correct: true }, 
                                { text: "Max ran exactly 6 miles.", correct: false }, 
                                { text: "The three runners ran 23 miles in total.", correct: true } 
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; A rectangle has a length of 6 inches and a width of 3 inches. What is the perimeter, in inches, of the rectangle?", answer: "18" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w1-fri-b", name: "Fri", title: "Week 1: Friday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; A gym teacher counted the minutes students played games. Use the graph to answer the questions.", problems: [ 
                                { svg: drawBarGraph("Minutes Played", "Time (Minutes)", "Game", ["Tag", "Hide", "Catch", "Race"], [40, 25, 30, 15], 50, 10) },
                                { text: "Part A: How many minutes did students play Catch?", answer: "30" },
                                { text: "Part B: How many total minutes were spent playing Tag and Hide?", answer: "65" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; A rectangular rug is 5 feet wide and 8 feet long. What is the area, in square feet, of the rug?", answer: "40" }
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
                            { type: "input", instruction: "1. &nbsp; The line plot shows the heights of plants in a garden. Use the line plot to answer the question.", problems: [ 
                                { svg: drawLinePlot("Plant Heights", "Height (Inches)", ["4", "4 1/2", "5", "5 1/2"], [2, 4, 6, 3]), text: "How many plants are exactly 5 inches tall?", answer: "6" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 5 &times; 9 = [box]", answer: "45" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w2-tue-b", name: "Tue", title: "Week 2: Tuesday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; The line plot shows the lengths of several ribbons. Use the line plot to answer the question.", problems: [ 
                                { svg: drawLinePlot("Ribbon Lengths", "Length (Inches)", ["3 1/4", "3 2/4", "3 3/4"], [4, 2, 5]), text: "How many ribbons were longer than 3 \\frac{1}{4} inches?", answer: "7" }
                            ] },
                            { type: "grid", instruction: "2. &nbsp; Decide whether each fraction comparison is true or false.", rows: [ 
                                { text: "\\frac{2}{5} &lt; \\frac{4}{5}", correct: true }, 
                                { text: "\\frac{1}{4} &gt; \\frac{1}{2}", correct: false } 
                            ] }
                        ]
                    },
                    {
                        id: "m9-w2-wed-b", name: "Wed", title: "Week 2: Wednesday",
                        sections: [
                            { type: "grid", instruction: "1. &nbsp; The line plot shows the number of hours kids spent reading. Decide whether each statement is true or false.", problems: [ 
                                { svg: drawLinePlot("Hours Read", "Hours", ["2", "2 1/2", "3"], [3, 5, 1]) }
                            ], rows: [ 
                                { text: "Exactly 3 kids read for 2 hours.", correct: true }, 
                                { text: "A total of 9 kids were asked about their reading time.", correct: true }, 
                                { text: "The most common amount of time spent reading was 3 hours.", correct: false } 
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 340 - 50 = [box]", answer: "290" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w2-thu-b", name: "Thu", title: "Week 2: Thursday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; A scientist measured the widths of several leaves. Use the line plot to answer the questions.", problems: [ 
                                { svg: drawLinePlot("Leaf Widths", "Width (Inches)", ["1", "1 1/4", "1 2/4", "1 3/4"], [2, 5, 1, 4]) },
                                { text: "Part A: How many leaves had a width of exactly 1 \\frac{3}{4} inches?", answer: "4" },
                                { text: "Part B: How many total leaves had a width of 1 \\frac{1}{4} inches OR smaller?", answer: "7" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What is 76 rounded to the nearest ten?", answer: "80" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w2-fri-b", name: "Fri", title: "Week 2: Friday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; A grocer measured the weights of several apples. Use the line plot to answer the questions.", problems: [ 
                                { svg: drawLinePlot("Weight of Apples", "Weight (Pounds)", ["1/4", "2/4", "3/4", "1"], [3, 2, 6, 2]) },
                                { text: "Part A: Which weight was the most common for the apples?", answer: "3/4" },
                                { text: "Part B: How many apples weighed LESS than \\frac{3}{4} of a pound?", answer: "5" }
                            ] },
                            { type: "grid", instruction: "2. &nbsp; Decide whether each fraction comparison is true or false.", rows: [ 
                                { text: "\\frac{4}{8} &lt; \\frac{6}{8}", correct: true }, 
                                { text: "\\frac{1}{3} &gt; \\frac{2}{3}", correct: false } 
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
                            { type: "input", instruction: "1. &nbsp; The bar graph shows the favorite subjects of students in a class. Use the graph to answer the question.", problems: [ 
                                { svg: drawBarGraph("Favorite Subjects", "Number of Students", "Subjects", ["Math", "Art", "PE", "Reading"], [9, 6, 8, 4], 10, 2), text: "How many more students chose Math than Reading?", answer: "5" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What is 521 rounded to the nearest hundred?", answer: "500" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w1-tue-c", name: "Tue", title: "Week 1: Tuesday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; The picture graph shows the number of stars earned by three students. Use the graph to answer the question.", problems: [ 
                                { svg: drawPictureGraph("Stars Earned", "Student", ["Jack", "Ava", "Ben"], [12, 18, 6], "2 stars", 2), text: "How many total stars did Ava earn?", answer: "18" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 54 &divide; 6 = [box]", answer: "9" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w1-wed-c", name: "Wed", title: "Week 1: Wednesday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; The bar graph shows the number of tickets sold at a carnival.", problems: [ 
                                { svg: drawBarGraph("Tickets Sold", "Number of Tickets", "Game Type", ["Ring Toss", "Darts", "Bowling"], [35, 40, 15], 50, 10), text: "How many total tickets were sold in all?", answer: "90" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; 8 = [box]", answer: "64" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w1-thu-c", name: "Thu", title: "Week 1: Thursday",
                        sections: [
                            { type: "grid", instruction: "1. &nbsp; The picture graph shows laps swum by three swimmers. Decide whether each statement is true or false.", problems: [ 
                                { svg: drawPictureGraph("Laps Swum", "Swimmer", ["Tom", "Liz", "Sam"], [10, 15, 5], "5 laps", 5) }
                            ], rows: [ 
                                { text: "Tom swam exactly 10 laps.", correct: true }, 
                                { text: "Liz swam exactly 10 laps.", correct: false }, 
                                { text: "The three swimmers swam 30 laps in total.", correct: true } 
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; A rectangle has a length of 7 inches and a width of 2 inches. What is the perimeter, in inches, of the rectangle?", answer: "18" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w1-fri-c", name: "Fri", title: "Week 1: Friday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; A store counted the snacks they sold. Use the graph to answer the questions.", problems: [ 
                                { svg: drawBarGraph("Snacks Sold", "Number of Snacks", "Snack", ["Chips", "Fruit", "Nuts", "Candy"], [25, 30, 20, 45], 50, 10) },
                                { text: "Part A: How many bags of nuts were sold?", answer: "20" },
                                { text: "Part B: How many total chips and candy were sold?", answer: "70" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; A rectangular garden is 9 feet wide and 4 feet long. What is the area, in square feet, of the garden?", answer: "36" }
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
                            { type: "input", instruction: "1. &nbsp; The line plot shows the lengths of toy boats. Use the line plot to answer the question.", problems: [ 
                                { svg: drawLinePlot("Toy Boat Lengths", "Length (Inches)", ["3", "3 1/2", "4", "4 1/2"], [4, 1, 5, 2]), text: "How many boats are exactly 4 inches long?", answer: "5" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; 8 = [box]", answer: "56" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w2-tue-c", name: "Tue", title: "Week 2: Tuesday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; The line plot shows the lengths of several sticks. Use the line plot to answer the question.", problems: [ 
                                { svg: drawLinePlot("Stick Lengths", "Length (Inches)", ["5 1/4", "5 2/4", "5 3/4"], [3, 5, 2]), text: "How many sticks were longer than 5 \\frac{1}{4} inches?", answer: "7" }
                            ] },
                            { type: "grid", instruction: "2. &nbsp; Decide whether each fraction comparison is true or false.", rows: [ 
                                { text: "\\frac{1}{6} &lt; \\frac{5}{6}", correct: true }, 
                                { text: "\\frac{3}{3} = \\frac{6}{6}", correct: true } 
                            ] }
                        ]
                    },
                    {
                        id: "m9-w2-wed-c", name: "Wed", title: "Week 2: Wednesday",
                        sections: [
                            { type: "grid", instruction: "1. &nbsp; The line plot shows the number of hours kids practiced piano. Decide whether each statement is true or false.", problems: [ 
                                { svg: drawLinePlot("Hours Practiced", "Hours", ["1", "1 1/2", "2"], [2, 6, 4]) }
                            ], rows: [ 
                                { text: "Exactly 4 kids practiced for 2 hours.", correct: true }, 
                                { text: "A total of 12 kids were asked about their practice time.", correct: true }, 
                                { text: "The most common amount of time spent practicing was 1 hour.", correct: false } 
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 610 - 30 = [box]", answer: "580" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w2-thu-c", name: "Thu", title: "Week 2: Thursday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; A teacher measured the lengths of several erasers. Use the line plot to answer the questions.", problems: [ 
                                { svg: drawLinePlot("Eraser Lengths", "Length (Inches)", ["1", "1 1/4", "1 2/4", "1 3/4"], [3, 2, 4, 1]) },
                                { text: "Part A: How many erasers had a length of exactly 1 \\frac{2}{4} inches?", answer: "4" },
                                { text: "Part B: How many total erasers had a length of 1 \\frac{1}{4} inches OR smaller?", answer: "5" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What is 32 rounded to the nearest ten?", answer: "30" }
                            ] }
                        ]
                    },
                    {
                        id: "m9-w2-fri-c", name: "Fri", title: "Week 2: Friday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; A chef measured the weights of several dough balls. Use the line plot to answer the questions.", problems: [ 
                                { svg: drawLinePlot("Weight of Dough", "Weight (Pounds)", ["1/4", "2/4", "3/4", "1"], [1, 4, 2, 3]) },
                                { text: "Part A: Which weight was the most common for the dough?", answer: "2/4" },
                                { text: "Part B: How many dough balls weighed LESS than \\frac{3}{4} of a pound?", answer: "5" }
                            ] },
                            { type: "grid", instruction: "2. &nbsp; Decide whether each fraction comparison is true or false.", rows: [ 
                                { text: "\\frac{6}{8} &lt; \\frac{7}{8}", correct: true }, 
                                { text: "\\frac{1}{4} &gt; \\frac{3}{4}", correct: false } 
                            ] }
                        ]
                    }
                ]
            }
        ]
    }
};