// --- SHARED HELPER HUBS ---
const helperHubW1_Mod11 = {
    title: "★ Helper Hub: The Time Jumper",
    content: `
        <div style="font-size:15px; line-height: 1.3;">
            <p style="margin-top:0; margin-bottom:10px;">Time doesn't count to 100 like normal math... it only counts to <strong>60</strong>! Never try to "stack and add" time. Use a number line instead!</p>
            
            <div style="display:flex; gap:15px; align-items:center; break-inside: avoid;">
                <div style="flex:1; padding:10px; border:2px solid #ccc; border-radius:10px; background:#fff; text-align:center;">
                    <strong style="font-size:16px; color:#2c7be5;">Reading the Clock</strong><br>
                    ${drawClock(4, 35)}
                    The <span style="color:#e74c3c; font-weight:bold;">Short Hand</span> points to the hour. If it's between two numbers, the hour is the smaller number!<br>
                    The <span style="color:#2c7be5; font-weight:bold;">Long Hand</span> points to the minutes. Count by 5s for the big numbers, then by 1s!
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
};

const helperHubW2_Mod11 = {
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
};

// --- VERSIONS DATA ---
const mod11Versions = {
    A: {
        id: "mod-11-a",
        name: "Time, Volume, & Mass",
        weeks: [
            {
                weekNum: 1,
                helperHub: helperHubW1_Mod11,
                days: [
                    {
                        id: "m11-w1-mon-a", name: "Mon", title: "Week 1: Monday",
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
                        id: "m11-w1-tue-a", name: "Tue", title: "Week 1: Tuesday",
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
                        id: "m11-w1-wed-a", name: "Wed", title: "Week 1: Wednesday",
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
                        id: "m11-w1-thu-a", name: "Thu", title: "Week 1: Thursday",
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
                        id: "m11-w1-fri-a", name: "Fri", title: "Week 1: Friday",
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
                helperHub: helperHubW2_Mod11,
                days: [
                    {
                        id: "m11-w2-mon-a", name: "Mon", title: "Week 2: Monday",
                        sections: [
                            { type: "mc", instruction: "1. &nbsp; It takes Leo 22 minutes to ride the bus. He needs to be at the community center by 4:10 p.m. What is the latest time Leo can catch the bus?", options: [ { text: "3:48 p.m.", correct: true }, { text: "3:58 p.m.", correct: false }, { text: "4:32 p.m.", correct: false } ] },
                            { type: "input", instruction: "Solve the word problem below.", problems: [ 
                                { text: "2. &nbsp; A grocer puts apples into bags. Each bag holds 3 kilograms of apples. If the grocer fills 8 bags, how many total kilograms of apples is that?", answer: "24" }
                            ] }
                        ]
                    },
                    {
                        id: "m11-w2-tue-a", name: "Tue", title: "Week 2: Tuesday",
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
                        id: "m11-w2-wed-a", name: "Wed", title: "Week 2: Wednesday",
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
                        id: "m11-w2-thu-a", name: "Thu", title: "Week 2: Thursday",
                        sections: [
                            { type: "mc", instruction: "1. &nbsp; A soccer game ends at 11:30 a.m. The game lasted for 85 minutes. What time did the game start?", options: [ { text: "10:05 a.m.", correct: true }, { text: "10:15 a.m.", correct: false }, { text: "10:45 a.m.", correct: false } ] },
                            { type: "input", instruction: "Solve the word problem below.", problems: [ 
                                { text: "2. &nbsp; A pet store has 4 tanks of water. Each tank holds 50 liters. How many total liters of water do the tanks hold?", answer: "200" }
                            ] }
                        ]
                    },
                    {
                        id: "m11-w2-fri-a", name: "Fri", title: "Week 2: Friday",
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
    },
    B: {
        id: "mod-11-b",
        name: "Time, Volume, & Mass",
        weeks: [
            {
                weekNum: 1,
                helperHub: helperHubW1_Mod11,
                days: [
                    {
                        id: "m11-w1-mon-b", name: "Mon", title: "Week 1: Monday",
                        sections: [
                            { type: "mc", instruction: "1. &nbsp; Select the time, to the nearest minute, shown on the clock.", problems: [ 
                                { svg: drawClock(7, 36) }
                            ], options: [ 
                                { text: "7:35", correct: false }, 
                                { text: "7:36", correct: true }, 
                                { text: "8:36", correct: false },
                                { text: "8:40", correct: false }
                            ] },
                            { type: "input", instruction: "Solve the word problem below.", problems: [ 
                                { text: "2. &nbsp; A chef uses 125 grams of butter for a sauce and 240 grams of butter for a pastry. How many total grams of butter does the chef use?", answer: "365" }
                            ] }
                        ]
                    },
                    {
                        id: "m11-w1-tue-b", name: "Tue", title: "Week 1: Tuesday",
                        sections: [
                            { type: "input", instruction: "Solve the elapsed time problem.", problems: [ 
                                { text: "1. &nbsp; The science lab started at 9:15 a.m. and ended at 10:20 a.m. What was the length, in minutes, of the lab?", answer: "65" }
                            ] },
                            { type: "input", instruction: "Solve the word problem below.", problems: [ 
                                { text: "2. &nbsp; A large barrel holds 60 liters of water. If a family uses 32 liters for their garden, how many liters of water are left in the barrel?", answer: "28" }
                            ] }
                        ]
                    },
                    {
                        id: "m11-w1-wed-b", name: "Wed", title: "Week 1: Wednesday",
                        sections: [
                            { type: "mc", instruction: "1. &nbsp; Select the time, to the nearest minute, shown on the clock.", problems: [ 
                                { svg: drawClock(11, 23) }
                            ], options: [ 
                                { text: "11:20", correct: false }, 
                                { text: "11:23", correct: true }, 
                                { text: "4:55", correct: false },
                                { text: "12:23", correct: false }
                            ] },
                            { type: "input", instruction: "Solve the elapsed time problem.", problems: [ 
                                { text: "2. &nbsp; Sam read his book from 3:20 p.m. to 4:15 p.m. Enter the total time, in minutes, that Sam spent reading.", answer: "55" }
                            ] }
                        ]
                    },
                    {
                        id: "m11-w1-thu-b", name: "Thu", title: "Week 1: Thursday",
                        sections: [
                            { type: "grid", instruction: "1. &nbsp; Decide whether each statement about the clock shown is true or false.", problems: [{ svg: drawClock(2, 45) }], rows: [ 
                                { text: "The time shown on the clock is 2:45.", correct: true }, 
                                { text: "In 10 minutes, the time will be 2:55.", correct: true }, 
                                { text: "The time shown on the clock is 3:45.", correct: false } 
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; 7 = [box]", answer: "56" }
                            ] }
                        ]
                    },
                    {
                        id: "m11-w1-fri-b", name: "Fri", title: "Week 1: Friday",
                        sections: [
                            { type: "input", instruction: "Solve the word problem below.", problems: [ 
                                { text: "1. &nbsp; A pond needs 90 liters of fresh water. The gardener adds 55 liters. How many more liters are needed?", answer: "35" }
                            ] },
                            { type: "mc", instruction: "2. &nbsp; It takes Nina 35 minutes to walk to the library. If she leaves her house at 4:10 p.m., what time will she arrive at the library?", options: [ { text: "4:35 p.m.", correct: false }, { text: "4:45 p.m.", correct: true }, { text: "4:50 p.m.", correct: false } ] }
                        ]
                    }
                ]
            },
            {
                weekNum: 2,
                helperHub: helperHubW2_Mod11,
                days: [
                    {
                        id: "m11-w2-mon-b", name: "Mon", title: "Week 2: Monday",
                        sections: [
                            { type: "mc", instruction: "1. &nbsp; It takes Max 24 minutes to ride his bike to practice. He needs to be at the field by 5:15 p.m. What is the latest time Max can leave home?", options: [ { text: "4:51 p.m.", correct: true }, { text: "4:56 p.m.", correct: false }, { text: "5:39 p.m.", correct: false } ] },
                            { type: "input", instruction: "Solve the word problem below.", problems: [ 
                                { text: "2. &nbsp; A worker puts soil into bags. Each bag holds 4 kilograms of soil. If the worker fills 6 bags, how many total kilograms of soil is that?", answer: "24" }
                            ] }
                        ]
                    },
                    {
                        id: "m11-w2-tue-b", name: "Tue", title: "Week 2: Tuesday",
                        sections: [
                            { type: "input", instruction: "Solve the elapsed time problem.", problems: [ 
                                { text: "1. &nbsp; Eli's trip to the zoo started at 8:40 a.m. and ended at 10:15 a.m. Enter the length, in minutes, of Eli's trip.", answer: "95" }
                            ] },
                            { type: "input", instruction: "Solve the word problem below.", problems: [ 
                                { text: "2. &nbsp; A baker has 56 grams of sugar. She splits it equally into 8 bowls. How many grams of sugar are in each bowl?", answer: "7" }
                            ] }
                        ]
                    },
                    {
                        id: "m11-w2-wed-b", name: "Wed", title: "Week 2: Wednesday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; Chloe walks from the school to the library before walking home.", problems: [ 
                                { svg: drawClock(3, 14) },
                                { text: "• She leaves school at the time shown on the clock.<br>• She arrives at the library at 3:30 p.m.<br>• She leaves the library at 4:05 p.m. to go home.<br>• She gets home at 4:25 p.m.<br><br>Enter the <strong>total number of minutes</strong> Chloe spends walking.", answer: "36" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What is 482 rounded to the nearest ten?", answer: "480" }
                            ] }
                        ]
                    },
                    {
                        id: "m11-w2-thu-b", name: "Thu", title: "Week 2: Thursday",
                        sections: [
                            { type: "mc", instruction: "1. &nbsp; A concert ends at 12:15 p.m. The concert lasted for 75 minutes. What time did the concert start?", options: [ { text: "11:00 a.m.", correct: true }, { text: "11:15 a.m.", correct: false }, { text: "11:40 a.m.", correct: false } ] },
                            { type: "input", instruction: "Solve the word problem below.", problems: [ 
                                { text: "2. &nbsp; A farm has 5 water troughs. Each trough holds 40 liters. How many total liters of water do the troughs hold?", answer: "200" }
                            ] }
                        ]
                    },
                    {
                        id: "m11-w2-fri-b", name: "Fri", title: "Week 2: Friday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; A gardener started planting seeds at 8:15 a.m. and finished watering them at 9:05 a.m. He did nothing else during this time. How many minutes did it take to plant and water the seeds?", problems: [ 
                                { answer: "50" }
                            ] },
                            { type: "grid", th1: "Question", th2: "Yes", th3: "No", instruction: "2. &nbsp; Look at Figure A. Decide whether each claim is true or false.", problems: [{ svg: drawGeomShape('para') + `<div style="text-align:center; font-weight:bold; color:#444;">Figure A</div>` }], rows: [ 
                                { text: "Is Figure A a quadrilateral?", correct: true }, 
                                { text: "Is Figure A a square?", correct: false } 
                            ] }
                        ]
                    }
                ]
            }
        ]
    },
    C: {
        id: "mod-11-c",
        name: "Time, Volume, & Mass",
        weeks: [
            {
                weekNum: 1,
                helperHub: helperHubW1_Mod11,
                days: [
                    {
                        id: "m11-w1-mon-c", name: "Mon", title: "Week 1: Monday",
                        sections: [
                            { type: "mc", instruction: "1. &nbsp; Select the time, to the nearest minute, shown on the clock.", problems: [ 
                                { svg: drawClock(4, 18) }
                            ], options: [ 
                                { text: "4:15", correct: false }, 
                                { text: "4:18", correct: true }, 
                                { text: "5:18", correct: false },
                                { text: "5:20", correct: false }
                            ] },
                            { type: "input", instruction: "Solve the word problem below.", problems: [ 
                                { text: "2. &nbsp; A farm uses 165 grams of seeds for one field and 310 grams of seeds for another. How many total grams of seeds does the farm use?", answer: "475" }
                            ] }
                        ]
                    },
                    {
                        id: "m11-w1-tue-c", name: "Tue", title: "Week 1: Tuesday",
                        sections: [
                            { type: "input", instruction: "Solve the elapsed time problem.", problems: [ 
                                { text: "1. &nbsp; The morning meeting started at 8:30 a.m. and ended at 9:25 a.m. What was the length, in minutes, of the meeting?", answer: "55" }
                            ] },
                            { type: "input", instruction: "Solve the word problem below.", problems: [ 
                                { text: "2. &nbsp; A fish tank holds 70 liters of water. If the owner drains 46 liters to clean it, how many liters of water are left in the tank?", answer: "24" }
                            ] }
                        ]
                    },
                    {
                        id: "m11-w1-wed-c", name: "Wed", title: "Week 1: Wednesday",
                        sections: [
                            { type: "mc", instruction: "1. &nbsp; Select the time, to the nearest minute, shown on the clock.", problems: [ 
                                { svg: drawClock(1, 42) }
                            ], options: [ 
                                { text: "1:40", correct: false }, 
                                { text: "1:42", correct: true }, 
                                { text: "8:05", correct: false },
                                { text: "2:42", correct: false }
                            ] },
                            { type: "input", instruction: "Solve the elapsed time problem.", problems: [ 
                                { text: "2. &nbsp; Will practiced the piano from 4:25 p.m. to 5:10 p.m. Enter the total time, in minutes, that Will spent practicing.", answer: "45" }
                            ] }
                        ]
                    },
                    {
                        id: "m11-w1-thu-c", name: "Thu", title: "Week 1: Thursday",
                        sections: [
                            { type: "grid", instruction: "1. &nbsp; Decide whether each statement about the clock shown is true or false.", problems: [{ svg: drawClock(5, 50) }], rows: [ 
                                { text: "The time shown on the clock is 5:50.", correct: true }, 
                                { text: "In 10 minutes, the time will be 6:00.", correct: true }, 
                                { text: "The time shown on the clock is 6:50.", correct: false } 
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; 9 = [box]", answer: "63" }
                            ] }
                        ]
                    },
                    {
                        id: "m11-w1-fri-c", name: "Fri", title: "Week 1: Friday",
                        sections: [
                            { type: "input", instruction: "Solve the word problem below.", problems: [ 
                                { text: "1. &nbsp; A fountain needs 100 liters of water. The plumber adds 65 liters. How many more liters are needed?", answer: "35" }
                            ] },
                            { type: "mc", instruction: "2. &nbsp; It takes Ben 20 minutes to walk to the store. If he leaves his house at 5:25 p.m., what time will he arrive at the store?", options: [ { text: "5:35 p.m.", correct: false }, { text: "5:45 p.m.", correct: true }, { text: "5:55 p.m.", correct: false } ] }
                        ]
                    }
                ]
            },
            {
                weekNum: 2,
                helperHub: helperHubW2_Mod11,
                days: [
                    {
                        id: "m11-w2-mon-c", name: "Mon", title: "Week 2: Monday",
                        sections: [
                            { type: "mc", instruction: "1. &nbsp; It takes Lily 26 minutes to ride the train. She needs to be at the museum by 3:20 p.m. What is the latest time Lily can catch the train?", options: [ { text: "2:54 p.m.", correct: true }, { text: "2:56 p.m.", correct: false }, { text: "3:46 p.m.", correct: false } ] },
                            { type: "input", instruction: "Solve the word problem below.", problems: [ 
                                { text: "2. &nbsp; A builder puts sand into bags. Each bag holds 5 kilograms of sand. If the builder fills 7 bags, how many total kilograms of sand is that?", answer: "35" }
                            ] }
                        ]
                    },
                    {
                        id: "m11-w2-tue-c", name: "Tue", title: "Week 2: Tuesday",
                        sections: [
                            { type: "input", instruction: "Solve the elapsed time problem.", problems: [ 
                                { text: "1. &nbsp; Ava's flight started at 10:25 a.m. and landed at 12:10 p.m. Enter the length, in minutes, of Ava's flight.", answer: "105" }
                            ] },
                            { type: "input", instruction: "Solve the word problem below.", problems: [ 
                                { text: "2. &nbsp; A science teacher has 48 grams of salt. She splits it equally into 6 bowls. How many grams of salt are in each bowl?", answer: "8" }
                            ] }
                        ]
                    },
                    {
                        id: "m11-w2-wed-c", name: "Wed", title: "Week 2: Wednesday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; Lucas walks from his house to the park before walking to his friend's house.", problems: [ 
                                { svg: drawClock(5, 8) },
                                { text: "• He leaves his house at the time shown on the clock.<br>• He arrives at the park at 5:20 p.m.<br>• He leaves the park at 6:00 p.m. to go to his friend's house.<br>• He gets there at 6:15 p.m.<br><br>Enter the <strong>total number of minutes</strong> Lucas spends walking.", answer: "27" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ 
                                { text: "2. &nbsp; What is 738 rounded to the nearest ten?", answer: "740" }
                            ] }
                        ]
                    },
                    {
                        id: "m11-w2-thu-c", name: "Thu", title: "Week 2: Thursday",
                        sections: [
                            { type: "mc", instruction: "1. &nbsp; A movie ends at 2:30 p.m. The movie lasted for 95 minutes. What time did the movie start?", options: [ { text: "12:55 p.m.", correct: true }, { text: "1:05 p.m.", correct: false }, { text: "1:35 p.m.", correct: false } ] },
                            { type: "input", instruction: "Solve the word problem below.", problems: [ 
                                { text: "2. &nbsp; A store has 3 barrels of juice. Each barrel holds 60 liters. How many total liters of juice do the barrels hold?", answer: "180" }
                            ] }
                        ]
                    },
                    {
                        id: "m11-w2-fri-c", name: "Fri", title: "Week 2: Friday",
                        sections: [
                            { type: "input", instruction: "1. &nbsp; A painter started mixing colors at 7:45 a.m. and finished painting a wall at 8:25 a.m. He did nothing else during this time. How many minutes did it take to mix colors and paint?", problems: [ 
                                { answer: "40" }
                            ] },
                            { type: "grid", th1: "Question", th2: "Yes", th3: "No", instruction: "2. &nbsp; Look at Figure A. Decide whether each claim is true or false.", problems: [{ svg: drawGeomShape('trap') + `<div style="text-align:center; font-weight:bold; color:#444;">Figure A</div>` }], rows: [ 
                                { text: "Is Figure A a quadrilateral?", correct: true }, 
                                { text: "Is Figure A a square?", correct: false } 
                            ] }
                        ]
                    }
                ]
            }
        ]
    }
};