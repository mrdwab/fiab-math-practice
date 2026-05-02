// --- NEW: MODULE 11 DATA (Time, Volume, & Mass) ---
const mod11Data = {
    id: "mod-11",
    name: "Time, Volume, & Mass",
    weeks: [
        {
            weekNum: 1,
            helperHub: {
                title: "★ Helper Hub: The Time Jumper",
                content: `
                    <div style="font-size:15px; line-height: 1.3;">
                        <p style="margin-top:0; margin-bottom:10px;">Time doesn't count to 100 like normal math... it only counts to <strong>60</strong>! Never try to "stack and add" time. Use a number line instead!</p>
                        
                        <div style="display:flex; gap:15px; align-items:center; break-inside: avoid;">
                            <div style="flex:1; padding:10px; border:2px solid #ccc; border-radius:10px; background:#fff; text-align:center;">
                                <strong style="font-size:16px; color:#2c7be5;">Reading the Clock</strong><br>
                                ${drawClock(4, 35)}
                                The <span style="color:#e74c3c; font-weight:bold;">Red Hand</span> points to the hour. If it's between two numbers, the hour is the smaller number!<br>
                                The <span style="color:#2c7be5; font-weight:bold;">Blue Hand</span> points to the minutes. Count by 5s for the big numbers, then by 1s!
                            </div>
                            <div style="flex:1; padding:10px; border:2px solid #ccc; border-radius:10px; background:#fff;">
                                <strong style="font-size:16px; color:#27ae60;">Jumping on a Timeline</strong><br>
                                If you start at <strong>1:45</strong> and wait <strong>35 minutes</strong>...<br><br>
                                1. Jump 15 minutes to reach the "safe" hour: <strong>2:00</strong>.<br>
                                2. You have 20 minutes left to jump (35 - 15).<br>
                                3. Jump 20 minutes to reach your answer: <strong>2:20</strong>!
                            </div>
                        </div>
                    </div>
                `
            },
            days: [
                {
                    id: "m11-w1-mon", name: "Mon", title: "Week 1: Monday",
                    sections: [
                        { type: "mc", instruction: "1. &nbsp; Select the time, to the nearest minute, shown on the clock.", problems: [ 
                            { svg: drawClock(8, 24) }
                        ], options: [ 
                            { text: "8:20", correct: false }, 
                            { text: "8:24", correct: true }, 
                            { text: "9:20", correct: false },
                            { text: "9:24", correct: false }
                        ] },
                        { type: "input", instruction: "Solve the word problem below.", problems: [ 
                            { text: "2. &nbsp; A baker uses 145 grams of flour for a cake and 230 grams of flour for a pie. How many total grams of flour does the baker use?", answer: "375" }
                        ] }
                    ]
                },
                {
                    id: "m11-w1-tue", name: "Tue", title: "Week 1: Tuesday",
                    sections: [
                        { type: "input", instruction: "Solve the elapsed time problem.", problems: [ 
                            { text: "1. &nbsp; The school assembly started at 10:20 a.m. and ended at 11:15 a.m. What was the length, in minutes, of the assembly?", answer: "55" }
                        ] },
                        { type: "input", instruction: "Solve the word problem below.", problems: [ 
                            { text: "2. &nbsp; A large cooler holds 50 liters of water. If a soccer team drinks 28 liters during a game, how many liters of water are left in the cooler?", answer: "22" }
                        ] }
                    ]
                },
                {
                    id: "m11-w1-wed", name: "Wed", title: "Week 1: Wednesday",
                    sections: [
                        { type: "mc", instruction: "1. &nbsp; Select the time, to the nearest minute, shown on the clock.", problems: [ 
                            { svg: drawClock(10, 12) }
                        ], options: [ 
                            { text: "10:02", correct: false }, 
                            { text: "10:12", correct: true }, 
                            { text: "2:50", correct: false },
                            { text: "11:12", correct: false }
                        ] },
                        { type: "input", instruction: "Solve the elapsed time problem.", problems: [ 
                            { text: "2. &nbsp; Maya painted a picture from 2:15 p.m. to 3:05 p.m. Enter the total time, in minutes, that Maya spent painting.", answer: "50" }
                        ] }
                    ]
                },
                {
                    id: "m11-w1-thu", name: "Thu", title: "Week 1: Thursday",
                    sections: [
                        { type: "grid", instruction: "1. &nbsp; Decide whether each statement about the clock shown is true or false.", problems: [{ svg: drawClock(4, 35) }], rows: [ 
                            { text: "The time shown on the clock is 4:35.", correct: true }, 
                            { text: "In 10 minutes, the time will be 4:45.", correct: true }, 
                            { text: "The time shown on the clock is 5:35.", correct: false } 
                        ] },
                        { type: "input", instruction: "Solve the problem below.", problems: [ 
                            { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 9 &times; 6 = [box]", answer: "54" }
                        ] }
                    ]
                },
                {
                    id: "m11-w1-fri", name: "Fri", title: "Week 1: Friday",
                    sections: [
                        { type: "input", instruction: "Solve the word problem below.", problems: [ 
                            { text: "1. &nbsp; A swimming pool needs 80 liters of chlorine. The pool cleaner adds 45 liters. How many more liters are needed?", answer: "35" }
                        ] },
                        { type: "mc", instruction: "2. &nbsp; It takes Sam 25 minutes to walk to the park. If he leaves his house at 3:15 p.m., what time will he arrive at the park?", options: [ { text: "3:30 p.m.", correct: false }, { text: "3:40 p.m.", correct: true }, { text: "3:45 p.m.", correct: false } ] }
                    ]
                }
            ]
        },
        {
            weekNum: 2,
            helperHub: {
                title: "★ Helper Hub: Working Backwards & Multi-Step Time",
                content: `
                    <div style="font-size:15px; line-height: 1.3;">
                        <div style="display:flex; gap:10px; align-items:center; break-inside: avoid;">
                            <div style="flex:1; padding:10px; border:2px solid #ccc; border-radius:10px; background:#fff;">
                                <strong style="font-size:16px; color:#e74c3c;">Working Backwards</strong><br>
                                If you know the END time, jump backwards on your number line!<br><br>
                                <em>The game ends at 10:15. It lasted 45 minutes. When did it start?</em><br>
                                1. Start at 10:15 and jump backwards 15 mins to <strong>10:00</strong>.<br>
                                2. You have 30 mins left to jump (45 - 15).<br>
                                3. Jump backwards 30 mins from 10:00 to reach <strong>9:30</strong>!
                            </div>
                            <div style="flex:1; padding:10px; border:2px solid #ccc; border-radius:10px; background:#fff;">
                                <strong style="font-size:16px; color:#8e44ad;">Multi-Step Time Tricks</strong><br>
                                Read word problems very carefully to see what they are actually asking for. <br><br>
                                If a problem asks: <em>"How long did Carlos spend walking?"</em>, make sure you don't count the time he spent sitting inside the store shopping! Only count the walking time.
                            </div>
                        </div>
                    </div>
                `
            },
            days: [
                {
                    id: "m11-w2-mon", name: "Mon", title: "Week 2: Monday",
                    sections: [
                        { type: "mc", instruction: "1. &nbsp; It takes Leo 22 minutes to ride the bus. He needs to be at the community center by 4:10 p.m. What is the latest time Leo can catch the bus?", options: [ { text: "3:48 p.m.", correct: true }, { text: "3:58 p.m.", correct: false }, { text: "4:32 p.m.", correct: false } ] },
                        { type: "input", instruction: "Solve the word problem below.", problems: [ 
                            { text: "2. &nbsp; A grocer puts apples into bags. Each bag holds 3 kilograms of apples. If the grocer fills 8 bags, how many total kilograms of apples is that?", answer: "24" }
                        ] }
                    ]
                },
                {
                    id: "m11-w2-tue", name: "Tue", title: "Week 2: Tuesday",
                    sections: [
                        { type: "input", instruction: "Solve the elapsed time problem.", problems: [ 
                            { text: "1. &nbsp; David's train ride started at 9:35 a.m. and ended at 11:20 a.m. Enter the length, in minutes, of David's train ride.", answer: "105" }
                        ] },
                        { type: "input", instruction: "Solve the word problem below.", problems: [ 
                            { text: "2. &nbsp; A science teacher has 42 grams of salt. She splits it equally into 7 bowls. How many grams of salt are in each bowl?", answer: "6" }
                        ] }
                    ]
                },
                {
                    id: "m11-w2-wed", name: "Wed", title: "Week 2: Wednesday",
                    sections: [
                        { type: "input", instruction: "1. &nbsp; Carlos walks from the park to the store before walking home.", problems: [ 
                            { svg: drawClock(4, 12) },
                            { text: "• He leaves the park at the time shown on the clock.<br>• He arrives at the store at 4:26 p.m.<br>• He leaves the store at 4:45 p.m. to go home.<br>• He gets home at 5:00 p.m.<br><br>Enter the <strong>total number of minutes</strong> Carlos spends walking.", answer: "29" }
                        ] },
                        { type: "input", instruction: "Solve the problem below.", problems: [ 
                            { text: "2. &nbsp; What is 549 rounded to the nearest ten?", answer: "550" }
                        ] }
                    ]
                },
                {
                    id: "m11-w2-thu", name: "Thu", title: "Week 2: Thursday",
                    sections: [
                        { type: "mc", instruction: "1. &nbsp; A soccer game ends at 11:30 a.m. The game lasted for 85 minutes. What time did the game start?", options: [ { text: "10:05 a.m.", correct: true }, { text: "10:15 a.m.", correct: false }, { text: "10:45 a.m.", correct: false } ] },
                        { type: "input", instruction: "Solve the word problem below.", problems: [ 
                            { text: "2. &nbsp; A pet store has 4 tanks of water. Each tank holds 50 liters. How many total liters of water do the tanks hold?", answer: "200" }
                        ] }
                    ]
                },
                {
                    id: "m11-w2-fri", name: "Fri", title: "Week 2: Friday",
                    sections: [
                        { type: "input", instruction: "1. &nbsp; A chef started preparing dough at 6:25 a.m. and put it in the oven at 7:10 a.m. He did nothing else during this time. How many minutes did it take to prepare the dough?", problems: [ 
                            { answer: "45" }
                        ] },
                        { type: "grid", th1: "Question", th2: "Yes", th3: "No", instruction: "2. &nbsp; Look at Figure A. Decide whether each claim is true or false.", problems: [{ svg: drawGeomShape('rhombus') + `<div style="text-align:center; font-weight:bold; color:#444;">Figure A</div>` }], rows: [ 
                            { text: "Is Figure A a quadrilateral?", correct: true }, 
                            { text: "Is Figure A a square?", correct: false } 
                        ] }
                    ]
                }
            ]
        }
    ]
};