const mod5Data = {
    id: "mod-5",
    name: "Two-Week Review",
    weeks: [
        {
            weekNum: 1,
            helperHub: {
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
            },
            days: [
                {
                    id: "m5-w1-mon", name: "Mon", title: "Week 1: Monday",
                    sections: [
                        { type: "input", instruction: "Solve the problem below.", problems: [{ text: "1. &nbsp; What is 73 rounded to the nearest ten?", answer: "70" }] },
                        { type: "input", instruction: "Solve the problem below.", problems: [{ text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; 7 = [box]", answer: "56" }] },
                        { type: "mc", instruction: "3. &nbsp; Which expression is equal to 5 &times; (2 &times; 4)?", options: [ { text: "(5 &times; 2) &times; 4", correct: true }, { text: "5 + (2 &times; 4)", correct: false }, { text: "(5 &times; 2) + 4", correct: false } ] }
                    ]
                },
                {
                    id: "m5-w1-tue", name: "Tue", title: "Week 1: Tuesday",
                    sections: [
                        { type: "input", instruction: "Solve the problem below.", problems: [ { text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 30 &times; 4 = [box]", answer: "120" } ] },
                        { type: "input", instruction: "Solve the problem below.", problems: [ { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; 7 = 6 &times; (5 + [box])", answer: "2" } ] },
                        { type: "input", instruction: "Solve the problem below.", problems: [ { text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; ([box] + 2) = 48", answer: "4" } ] }
                    ]
                },
                {
                    id: "m5-w1-wed", name: "Wed", title: "Week 1: Wednesday",
                    sections: [
                        { type: "input", instruction: "Solve the problem below.", problems: [ { text: "1. &nbsp; There are 32 apples shared equally in 4 baskets. How many apples are in each basket?", answer: "8" } ] },
                        { type: "input", instruction: "Solve the problem below.", problems: [ { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 420 - 80 = 400 - [box]", answer: "60" } ] },
                        { type: "mc", instruction: "3. &nbsp; Which expression is equal to 3 &times; (6 &times; 2)?", options: [ { text: "(3 &times; 6) &times; 2", correct: true }, { text: "3 + (6 &times; 2)", correct: false }, { text: "(3 &times; 6) + 2", correct: false } ] }
                    ]
                },
                {
                    id: "m5-w1-thu", name: "Thu", title: "Week 1: Thursday",
                    sections: [
                        { type: "grid", instruction: "1. &nbsp; Decide whether each equation is true or false.", rows: [ { text: "9 &times; 4 = 36", correct: true }, { text: "18 &divide; 3 = 6", correct: true }, { text: "4 &times; 6 = 20", correct: false } ] },
                        { type: "input", instruction: "Solve the problem below.", problems: [ { text: "2. &nbsp; What is 582 rounded to the nearest hundred?", answer: "600" } ] },
                        { type: "input", instruction: "Solve the problem below.", problems: [ { text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 9 &times; 8 = 9 &times; (5 + [box])", answer: "3" } ] }
                    ]
                },
                {
                    id: "m5-w1-fri", name: "Fri", title: "Week 1: Friday",
                    sections: [
                        { type: "input", instruction: "Solve the related problems below.", problems: [ { text: "1. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 5 &times; [box] = 35", answer: "7" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 5 &times; ([box] + 4) = 35", answer: "3" } ] },
                        { type: "mc", instruction: "2. &nbsp; Which expression is equal to 8 &times; (2 &times; 3)?", options: [ { text: "(8 &times; 2) &times; 3", correct: true }, { text: "8 + (2 &times; 3)", correct: false }, { text: "(8 &times; 2) + 3", correct: false } ] }
                    ]
                }
            ]
        },
        {
            weekNum: 2,
            helperHub: {
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
            },
            days: [
                {
                    id: "m5-w2-mon", name: "Mon", title: "Week 2: Monday",
                    sections: [
                        { type: "input", instruction: "Enter the unknown number.", problems: [ { text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 4 &times; 9 = 4 &times; (5 + [box])", answer: "4" } ] },
                        { type: "mc", instruction: "2. &nbsp; Which expression is equal to 2 &times; (5 &times; 5)?", options: [ { text: "(2 &times; 5) &times; 5", correct: true }, { text: "2 + (5 &times; 5)", correct: false }, { text: "(2 &times; 5) + 5", correct: false } ] }
                    ]
                },
                {
                    id: "m5-w2-tue", name: "Tue", title: "Week 2: Tuesday",
                    sections: [
                        { type: "input", instruction: "Solve the related problems below.", problems: [ { text: "1. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 9 &times; [box] = 54", answer: "6" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 9 &times; ([box] + 3) = 54", answer: "3" } ] },
                        { type: "input", instruction: "Solve the problem below.", problems: [ { text: "2. &nbsp; When rounding to the nearest hundred, what is the greatest whole number that rounds to 300?", answer: "349" } ] }
                    ]
                },
                {
                    id: "m5-w2-wed", name: "Wed", title: "Week 2: Wednesday",
                    sections: [
                        { type: "input", instruction: "Solve the problem below.", problems: [ { text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 532 - 96 = 532 - 100 + [box]", answer: "4" } ] },
                        { type: "input", instruction: "Solve the problem below.", problems: [ { text: "2. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 7 &times; 9 = 7 &times; (5 + [box])", answer: "4" } ] },
                        { type: "input", instruction: "Solve the problem below.", problems: [ { text: "3. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 56 &divide; 8 = [box]", answer: "7" } ] }
                    ]
                },
                {
                    id: "m5-w2-thu", name: "Thu", title: "Week 2: Thursday",
                    sections: [
                        { type: "input", instruction: "Solve the related problems below.", problems: [ { text: "1. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; [box] = 36", answer: "6" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 6 &times; ([box] + 4) = 36", answer: "2" } ] },
                        { type: "mc", instruction: "2. &nbsp; Which expression is equal to 4 &times; (3 &times; 4)?", options: [ { text: "(4 &times; 3) &times; 4", correct: true }, { text: "4 + (3 &times; 4)", correct: false }, { text: "(4 &times; 3) + 4", correct: false } ] }
                    ]
                },
                {
                    id: "m5-w2-fri", name: "Fri", title: "Week 2: Friday",
                    sections: [
                        { type: "input", instruction: "Solve the problem below.", problems: [ { text: "1. &nbsp; What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 8 &times; 7 = 8 &times; (5 + [box])", answer: "2" } ] },
                        { type: "input", instruction: "Solve the related problems below.", problems: [ { text: "2. &nbsp; Part A: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 4 &times; [box] = 32", answer: "8" }, { text: "Part B: What unknown number makes this equation true?<br>&nbsp;&nbsp;&nbsp;&nbsp; 4 &times; ([box] + 5) = 32", answer: "3" } ] },
                        { type: "mc", instruction: "3. &nbsp; Which expression is equal to 7 &times; (3 &times; 2)?", options: [ { text: "(7 &times; 3) &times; 2", correct: true }, { text: "7 + (3 &times; 2)", correct: false }, { text: "(7 &times; 3) + 2", correct: false } ] }
                    ]
                }
            ]
        }
    ]
};