// --- SHARED HELPER HUBS ---
const helperHubW1_Mod5 = {
    title: "★ Helper Hub: Your Brain is a Muscle!",
    content: `
        <div style="font-size:15px; line-height: 1.3;">
            <p style="margin-top:0; margin-bottom:12px;">Math isn't about being fast or being perfect. It is about <strong>growing your brain!</strong></p>
            
            <div style="display:flex; gap:15px; break-inside: avoid;">
                <div style="flex:1; border:2px solid #ccc; padding:12px; border-radius:10px; background:#fff;">
                    <strong style="font-size:16px; color:#e74c3c;">Mistakes make you smarter!</strong><br>
                    When you do an easy math problem, your brain stays the same. But when you make a mistake and try to fix it, your brain actually builds new connections. Mistakes are proof that you are trying!
                </div>
                
                <div style="flex:1; border:2px solid #ccc; padding:12px; border-radius:10px; background:#fff;">
                    <strong style="font-size:16px; color:#2c7be5;">The Power of "YET"</strong><br>
                    If you forget how to do a problem during a review week, don't say, <em>"I don't know how to do this."</em><br><br>
                    Instead, add one magic word to the end: <strong>"I don't know how to do this <span style="color:#2c7be5; font-size:18px;">YET.</span>"</strong>
                </div>
            </div>
            
            <div style="text-align:center; margin-top:12px;">
                <strong style="font-size:18px; color:#27ae60;">Every time you try, your brain gets stronger!</strong>
            </div>
        </div>
    `
};

const helperHubW2_Mod5 = {
    title: "★ Helper Hub: Test-Day Superpowers",
    content: `
        <div style="font-size:15px; line-height: 1.3;">
            <p style="margin-top:0; margin-bottom:12px;">Big tests are just a chance to show off how much you've learned. Use these 3 superpowers to do your best!</p>
            
            <div style="display:flex; flex-direction:column; gap:10px; break-inside: avoid;">
                <div style="border:2px solid #ccc; padding:10px; border-radius:10px; background:#fff;">
                    <strong style="font-size:16px; color:#2c7be5;">Superpower 1: The Brain Breath</strong><br>
                    If a question looks scary, stop. Imagine you are holding a hot bowl of soup. Take a deep breath in through your nose to smell it, and blow out slowly through your mouth to cool it down. This gives your brain fresh oxygen so it can think clearly!
                </div>
                
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
                    <div style="border:2px solid #ccc; padding:10px; border-radius:10px; background:#fff;">
                        <strong style="font-size:16px; color:#27ae60;">Superpower 2: The "3 Reads" Method</strong><br>
                        Don't just rush to the numbers! Read word problems three times:<br>
                        <span style="color:#27ae60; font-weight:bold;">1. 1st Read:</span> What is the story about?<br>
                        <span style="color:#27ae60; font-weight:bold;">2. 2nd Read:</span> What numbers do we need?<br>
                        <span style="color:#27ae60; font-weight:bold;">3. 3rd Read:</span> What math operation do we need to use?
                    </div>
                    <div style="border:2px solid #ccc; padding:10px; border-radius:10px; background:#fff;">
                        <strong style="font-size:16px; color:#8e44ad;">Superpower 3: The Bullseye Approach</strong><br>
                        Aim for the very best answer on multiple choice!<br>
                        <span style="color:#8e44ad; font-weight:bold;">1. Eliminate</span> obviously wrong options.<br>
                        <span style="color:#8e44ad; font-weight:bold;">2. Check:</span> Does this option actually answer the question being asked?<br>
                        <span style="color:#8e44ad; font-weight:bold;">3. Read carefully</span> to select the very best one.
                    </div>
                </div>
            </div>
        </div>
    `
};

// --- VERSIONS DATA ---
const mod5Versions = {
    A: {
        id: "mod-5-a",
        name: "Two-Week Review",
        weeks: [
            {
                weekNum: 1,
                helperHub: helperHubW1_Mod5,
                days: [
                    {
                        id: "m5-w1-mon-a", name: "Mon", title: "Week 1: Monday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What is 73 rounded to the nearest ten?", answer: "70" }] },
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; 7 = [box]", answer: "56" }] },
                            { type: "mc", instruction: "3. &nbsp; Which expression is equal to 5 &times; (2 &times; 4)?", options: [ { text: "(5 &times; 2) &times; 4", correct: true }, { text: "5 + (2 &times; 4)", correct: false }, { text: "(5 &times; 2) + 4", correct: false } ] }
                        ]
                    },
                    {
                        id: "m5-w1-tue-a", name: "Tue", title: "Week 1: Tuesday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 30 &times; 4 = [box]", answer: "120" } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; 7 = 6 &times; (5 + [box])", answer: "2" } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; ([box] + 2) = 48", answer: "4" } ] }
                        ]
                    },
                    {
                        id: "m5-w1-wed-a", name: "Wed", title: "Week 1: Wednesday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "1. &nbsp; There are 32 apples shared equally in 4 baskets. How many apples are in each basket?", answer: "8" } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 420 - 80 = 400 - [box]", answer: "60" } ] },
                            { type: "mc", instruction: "3. &nbsp; Which expression is equal to 3 &times; (6 &times; 2)?", options: [ { text: "(3 &times; 6) &times; 2", correct: true }, { text: "3 + (6 &times; 2)", correct: false }, { text: "(3 &times; 6) + 2", correct: false } ] }
                        ]
                    },
                    {
                        id: "m5-w1-thu-a", name: "Thu", title: "Week 1: Thursday",
                        sections: [
                            { type: "grid", instruction: "1. &nbsp; Decide whether each equation is true or false.", rows: [ { text: "9 &times; 4 = 36", correct: true }, { text: "18 &divide; 3 = 6", correct: true }, { text: "4 &times; 6 = 20", correct: false } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "2. &nbsp; What is 582 rounded to the nearest hundred?", answer: "600" } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 9 &times; 8 = 9 &times; (5 + [box])", answer: "3" } ] }
                        ]
                    },
                    {
                        id: "m5-w1-fri-a", name: "Fri", title: "Week 1: Friday",
                        sections: [
                            { type: "input", instruction: "Solve the related problems below.", problems: [ { text: "1. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 5 &times; [box] = 35", answer: "7" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 5 &times; ([box] + 4) = 35", answer: "3" } ] },
                            { type: "mc", instruction: "2. &nbsp; Which expression is equal to 8 &times; (2 &times; 3)?", options: [ { text: "(8 &times; 2) &times; 3", correct: true }, { text: "8 + (2 &times; 3)", correct: false }, { text: "(8 &times; 2) + 3", correct: false } ] }
                        ]
                    }
                ]
            },
            {
                weekNum: 2,
                helperHub: helperHubW2_Mod5,
                days: [
                    {
                        id: "m5-w2-mon-a", name: "Mon", title: "Week 2: Monday",
                        sections: [
                            { type: "input", instruction: "Enter the unknown number.", problems: [ { text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 4 &times; 9 = 4 &times; (5 + [box])", answer: "4" } ] },
                            { type: "mc", instruction: "2. &nbsp; Which expression is equal to 2 &times; (5 &times; 5)?", options: [ { text: "(2 &times; 5) &times; 5", correct: true }, { text: "2 + (5 &times; 5)", correct: false }, { text: "(2 &times; 5) + 5", correct: false } ] }
                        ]
                    },
                    {
                        id: "m5-w2-tue-a", name: "Tue", title: "Week 2: Tuesday",
                        sections: [
                            { type: "input", instruction: "Solve the related problems below.", problems: [ { text: "1. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 9 &times; [box] = 54", answer: "6" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 9 &times; ([box] + 3) = 54", answer: "3" } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "2. &nbsp; When rounding to the nearest hundred, what is the greatest whole number that rounds to 300?", answer: "349" } ] }
                        ]
                    },
                    {
                        id: "m5-w2-wed-a", name: "Wed", title: "Week 2: Wednesday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 532 - 96 = 532 - 100 + [box]", answer: "4" } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; 9 = 7 &times; (5 + [box])", answer: "4" } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 56 &divide; 8 = [box]", answer: "7" } ] }
                        ]
                    },
                    {
                        id: "m5-w2-thu-a", name: "Thu", title: "Week 2: Thursday",
                        sections: [
                            { type: "input", instruction: "Solve the related problems below.", problems: [ { text: "1. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; [box] = 36", answer: "6" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; ([box] + 4) = 36", answer: "2" } ] },
                            { type: "mc", instruction: "2. &nbsp; Which expression is equal to 4 &times; (3 &times; 4)?", options: [ { text: "(4 &times; 3) &times; 4", correct: true }, { text: "4 + (3 &times; 4)", correct: false }, { text: "(4 &times; 3) + 4", correct: false } ] }
                        ]
                    },
                    {
                        id: "m5-w2-fri-a", name: "Fri", title: "Week 2: Friday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; 7 = 8 &times; (5 + [box])", answer: "2" } ] },
                            { type: "input", instruction: "Solve the related problems below.", problems: [ { text: "2. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 4 &times; [box] = 32", answer: "8" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 4 &times; ([box] + 5) = 32", answer: "3" } ] },
                            { type: "mc", instruction: "3. &nbsp; Which expression is equal to 7 &times; (3 &times; 2)?", options: [ { text: "(7 &times; 3) &times; 2", correct: true }, { text: "7 + (3 &times; 2)", correct: false }, { text: "(7 &times; 3) + 2", correct: false } ] }
                        ]
                    }
                ]
            }
        ]
    },
    B: {
        id: "mod-5-b",
        name: "Two-Week Review",
        weeks: [
            {
                weekNum: 1,
                helperHub: helperHubW1_Mod5,
                days: [
                    {
                        id: "m5-w1-mon-b", name: "Mon", title: "Week 1: Monday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What is 82 rounded to the nearest ten?", answer: "80" }] },
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 9 &times; 6 = [box]", answer: "54" }] },
                            { type: "mc", instruction: "3. &nbsp; Which expression is equal to 6 &times; (3 &times; 2)?", options: [ { text: "(6 &times; 3) &times; 2", correct: true }, { text: "6 + (3 &times; 2)", correct: false }, { text: "(6 &times; 3) + 2", correct: false } ] }
                        ]
                    },
                    {
                        id: "m5-w1-tue-b", name: "Tue", title: "Week 1: Tuesday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 40 &times; 3 = [box]", answer: "120" } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; 9 = 8 &times; (5 + [box])", answer: "4" } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; ([box] + 3) = 48", answer: "5" } ] }
                        ]
                    },
                    {
                        id: "m5-w1-wed-b", name: "Wed", title: "Week 1: Wednesday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "1. &nbsp; There are 45 oranges shared equally in 5 baskets. How many oranges are in each basket?", answer: "9" } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 530 - 60 = 500 - [box]", answer: "30" } ] },
                            { type: "mc", instruction: "3. &nbsp; Which expression is equal to 4 &times; (5 &times; 2)?", options: [ { text: "(4 &times; 5) &times; 2", correct: true }, { text: "4 + (5 &times; 2)", correct: false }, { text: "(4 &times; 5) + 2", correct: false } ] }
                        ]
                    },
                    {
                        id: "m5-w1-thu-b", name: "Thu", title: "Week 1: Thursday",
                        sections: [
                            { type: "grid", instruction: "1. &nbsp; Decide whether each equation is true or false.", rows: [ { text: "8 &times; 6 = 48", correct: true }, { text: "24 &divide; 4 = 6", correct: true }, { text: "5 &times; 7 = 30", correct: false } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "2. &nbsp; What is 419 rounded to the nearest hundred?", answer: "400" } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; 7 = 6 &times; (5 + [box])", answer: "2" } ] }
                        ]
                    },
                    {
                        id: "m5-w1-fri-b", name: "Fri", title: "Week 1: Friday",
                        sections: [
                            { type: "input", instruction: "Solve the related problems below.", problems: [ { text: "1. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; [box] = 48", answer: "6" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; ([box] + 2) = 48", answer: "4" } ] },
                            { type: "mc", instruction: "2. &nbsp; Which expression is equal to 9 &times; (2 &times; 4)?", options: [ { text: "(9 &times; 2) &times; 4", correct: true }, { text: "9 + (2 &times; 4)", correct: false }, { text: "(9 &times; 2) + 4", correct: false } ] }
                        ]
                    }
                ]
            },
            {
                weekNum: 2,
                helperHub: helperHubW2_Mod5,
                days: [
                    {
                        id: "m5-w2-mon-b", name: "Mon", title: "Week 2: Monday",
                        sections: [
                            { type: "input", instruction: "Enter the unknown number.", problems: [ { text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; 8 = 7 &times; (5 + [box])", answer: "3" } ] },
                            { type: "mc", instruction: "2. &nbsp; Which expression is equal to 3 &times; (4 &times; 4)?", options: [ { text: "(3 &times; 4) &times; 4", correct: true }, { text: "3 + (4 &times; 4)", correct: false }, { text: "(3 &times; 4) + 4", correct: false } ] }
                        ]
                    },
                    {
                        id: "m5-w2-tue-b", name: "Tue", title: "Week 2: Tuesday",
                        sections: [
                            { type: "input", instruction: "Solve the related problems below.", problems: [ { text: "1. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; [box] = 48", answer: "8" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; ([box] + 3) = 48", answer: "5" } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "2. &nbsp; When rounding to the nearest hundred, what is the greatest whole number that rounds to 500?", answer: "549" } ] }
                        ]
                    },
                    {
                        id: "m5-w2-wed-b", name: "Wed", title: "Week 2: Wednesday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 645 - 98 = 645 - 100 + [box]", answer: "2" } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; 6 = 8 &times; (5 + [box])", answer: "1" } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 63 &divide; 9 = [box]", answer: "7" } ] }
                        ]
                    },
                    {
                        id: "m5-w2-thu-b", name: "Thu", title: "Week 2: Thursday",
                        sections: [
                            { type: "input", instruction: "Solve the related problems below.", problems: [ { text: "1. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; [box] = 49", answer: "7" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; ([box] + 4) = 49", answer: "3" } ] },
                            { type: "mc", instruction: "2. &nbsp; Which expression is equal to 5 &times; (2 &times; 6)?", options: [ { text: "(5 &times; 2) &times; 6", correct: true }, { text: "5 + (2 &times; 6)", correct: false }, { text: "(5 &times; 2) + 6", correct: false } ] }
                        ]
                    },
                    {
                        id: "m5-w2-fri-b", name: "Fri", title: "Week 2: Friday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 9 &times; 8 = 9 &times; (5 + [box])", answer: "3" } ] },
                            { type: "input", instruction: "Solve the related problems below.", problems: [ { text: "2. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; [box] = 54", answer: "9" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; ([box] + 5) = 54", answer: "4" } ] },
                            { type: "mc", instruction: "3. &nbsp; Which expression is equal to 8 &times; (4 &times; 2)?", options: [ { text: "(8 &times; 4) &times; 2", correct: true }, { text: "8 + (4 &times; 2)", correct: false }, { text: "(8 &times; 4) + 2", correct: false } ] }
                        ]
                    }
                ]
            }
        ]
    },
    C: {
        id: "mod-5-c",
        name: "Two-Week Review",
        weeks: [
            {
                weekNum: 1,
                helperHub: helperHubW1_Mod5,
                days: [
                    {
                        id: "m5-w1-mon-c", name: "Mon", title: "Week 1: Monday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What is 48 rounded to the nearest ten?", answer: "50" }] },
                            { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; 8 = [box]", answer: "56" }] },
                            { type: "mc", instruction: "3. &nbsp; Which expression is equal to 4 &times; (5 &times; 2)?", options: [ { text: "(4 &times; 5) &times; 2", correct: true }, { text: "4 + (5 &times; 2)", correct: false }, { text: "(4 &times; 5) + 2", correct: false } ] }
                        ]
                    },
                    {
                        id: "m5-w1-tue-c", name: "Tue", title: "Week 1: Tuesday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 50 &times; 6 = [box]", answer: "300" } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; 7 = 7 &times; (5 + [box])", answer: "2" } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 9 &times; ([box] + 4) = 63", answer: "3" } ] }
                        ]
                    },
                    {
                        id: "m5-w1-wed-c", name: "Wed", title: "Week 1: Wednesday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "1. &nbsp; There are 48 markers shared equally in 6 boxes. How many markers are in each box?", answer: "8" } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 640 - 70 = 600 - [box]", answer: "30" } ] },
                            { type: "mc", instruction: "3. &nbsp; Which expression is equal to 6 &times; (2 &times; 3)?", options: [ { text: "(6 &times; 2) &times; 3", correct: true }, { text: "6 + (2 &times; 3)", correct: false }, { text: "(6 &times; 2) + 3", correct: false } ] }
                        ]
                    },
                    {
                        id: "m5-w1-thu-c", name: "Thu", title: "Week 1: Thursday",
                        sections: [
                            { type: "grid", instruction: "1. &nbsp; Decide whether each equation is true or false.", rows: [ { text: "7 &times; 8 = 56", correct: true }, { text: "35 &divide; 5 = 7", correct: true }, { text: "6 &times; 9 = 50", correct: false } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "2. &nbsp; What is 871 rounded to the nearest hundred?", answer: "900" } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; 6 = 8 &times; (5 + [box])", answer: "1" } ] }
                        ]
                    },
                    {
                        id: "m5-w1-fri-c", name: "Fri", title: "Week 1: Friday",
                        sections: [
                            { type: "input", instruction: "Solve the related problems below.", problems: [ { text: "1. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; [box] = 42", answer: "6" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; ([box] + 3) = 42", answer: "3" } ] },
                            { type: "mc", instruction: "2. &nbsp; Which expression is equal to 5 &times; (3 &times; 4)?", options: [ { text: "(5 &times; 3) &times; 4", correct: true }, { text: "5 + (3 &times; 4)", correct: false }, { text: "(5 &times; 3) + 4", correct: false } ] }
                        ]
                    }
                ]
            },
            {
                weekNum: 2,
                helperHub: helperHubW2_Mod5,
                days: [
                    {
                        id: "m5-w2-mon-c", name: "Mon", title: "Week 2: Monday",
                        sections: [
                            { type: "input", instruction: "Enter the unknown number.", problems: [ { text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; 9 = 6 &times; (5 + [box])", answer: "4" } ] },
                            { type: "mc", instruction: "2. &nbsp; Which expression is equal to 4 &times; (2 &times; 6)?", options: [ { text: "(4 &times; 2) &times; 6", correct: true }, { text: "4 + (2 &times; 6)", correct: false }, { text: "(4 &times; 2) + 6", correct: false } ] }
                        ]
                    },
                    {
                        id: "m5-w2-tue-c", name: "Tue", title: "Week 2: Tuesday",
                        sections: [
                            { type: "input", instruction: "Solve the related problems below.", problems: [ { text: "1. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; [box] = 56", answer: "7" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; ([box] + 2) = 56", answer: "5" } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "2. &nbsp; When rounding to the nearest hundred, what is the greatest whole number that rounds to 800?", answer: "849" } ] }
                        ]
                    },
                    {
                        id: "m5-w2-wed-c", name: "Wed", title: "Week 2: Wednesday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 324 - 95 = 324 - 100 + [box]", answer: "5" } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 9 &times; 7 = 9 &times; (5 + [box])", answer: "2" } ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 48 &divide; 6 = [box]", answer: "8" } ] }
                        ]
                    },
                    {
                        id: "m5-w2-thu-c", name: "Thu", title: "Week 2: Thursday",
                        sections: [
                            { type: "input", instruction: "Solve the related problems below.", problems: [ { text: "1. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 5 &times; [box] = 45", answer: "9" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 5 &times; ([box] + 3) = 45", answer: "6" } ] },
                            { type: "mc", instruction: "2. &nbsp; Which expression is equal to 8 &times; (3 &times; 2)?", options: [ { text: "(8 &times; 3) &times; 2", correct: true }, { text: "8 + (3 &times; 2)", correct: false }, { text: "(8 &times; 3) + 2", correct: false } ] }
                        ]
                    },
                    {
                        id: "m5-w2-fri-c", name: "Fri", title: "Week 2: Friday",
                        sections: [
                            { type: "input", instruction: "Solve the problem below.", problems: [ { text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; 6 = 7 &times; (5 + [box])", answer: "1" } ] },
                            { type: "input", instruction: "Solve the related problems below.", problems: [ { text: "2. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 9 &times; [box] = 63", answer: "7" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 9 &times; ([box] + 2) = 63", answer: "5" } ] },
                            { type: "mc", instruction: "3. &nbsp; Which expression is equal to 6 &times; (5 &times; 2)?", options: [ { text: "(6 &times; 5) &times; 2", correct: true }, { text: "6 + (5 &times; 2)", correct: false }, { text: "(6 &times; 5) + 2", correct: false } ] }
                        ]
                    }
                ]
            }
        ]
    }
};