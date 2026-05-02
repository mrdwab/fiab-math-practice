// --- SHARED HELPER HUBS ---
const helperHubW1_Mod4 = {
    title: "★ Helper Hub: The Rounding Hill",
    content: `
        <div style="font-size:15px; line-height: 1.3;">
            <p style="margin-top:0; margin-bottom:12px;">When rounding, find your target place value, then look at the digit to the right. Picture the Rounding Hill!</p>
            
            <div style="display:flex; align-items:center; gap:15px; border:2px solid #ccc; padding:15px; border-radius:10px; background:#fff; margin-bottom:10px; break-inside: avoid;">
                <div style="flex:1;">
                    <strong style="font-size:16px; color:#e74c3c;">0, 1, 2, 3, or 4?</strong><br>
                    The number doesn't have enough energy. It rolls back down, so the target number <strong>STAYS THE SAME</strong>.
                    <br><br>
                    <strong style="font-size:16px; color:#27ae60;">5, 6, 7, 8, or 9?</strong><br>
                    The number makes it over the top! It rolls forward, so the target number goes up to the <strong>NEXT</strong> one.
                </div>
                <div style="text-align:center;">
                    <svg width="220" height="120" viewBox="0 0 220 120">
                        <path d="M 20 100 Q 110 0 200 100" fill="none" stroke="#333" stroke-width="4" stroke-dasharray="6,4" />
                        <text x="20" y="118" font-size="14" font-weight="bold" fill="#e74c3c" text-anchor="middle">STAY</text>
                        <text x="200" y="118" font-size="14" font-weight="bold" fill="#27ae60" text-anchor="middle">NEXT</text>
                        
                        <circle cx="110" cy="30" r="12" fill="#2c7be5"/>
                        <text x="110" y="35" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">5</text>
                        
                        <text x="85" y="40" font-size="14" font-weight="bold" fill="#e74c3c" text-anchor="middle">4</text>
                        <text x="60" y="55" font-size="14" font-weight="bold" fill="#e74c3c" text-anchor="middle">3</text>
                        <text x="35" y="75" font-size="14" font-weight="bold" fill="#e74c3c" text-anchor="middle">1,2</text>
                        
                        <text x="135" y="40" font-size="14" font-weight="bold" fill="#27ae60" text-anchor="middle">6</text>
                        <text x="160" y="55" font-size="14" font-weight="bold" fill="#27ae60" text-anchor="middle">7</text>
                        <text x="185" y="75" font-size="14" font-weight="bold" fill="#27ae60" text-anchor="middle">8,9</text>
                    </svg>
                </div>
            </div>

            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; break-inside: avoid;">
                <div style="border:2px solid #ccc; padding:10px; border-radius:10px; background:#fff;">
                    <strong style="font-size:16px;">Example: Nearest 10</strong><br>
                    Round <strong style="color:#2c7be5;">348</strong> to the nearest ten.<br>
                    Target is 4. Look right at the 8.<br>
                    8 is on the "NEXT" side.<br>
                    The 4 goes up to 5 &rarr; <strong>350</strong>
                </div>
                <div style="border:2px solid #ccc; padding:10px; border-radius:10px; background:#fff;">
                    <strong style="font-size:16px;">Example: Nearest 100</strong><br>
                    Round <strong style="color:#2c7be5;">641</strong> to the nearest hundred.<br>
                    Target is 6. Look right at the 4.<br>
                    4 is on the "STAY" side.<br>
                    The 6 stays a 6 &rarr; <strong>600</strong>
                </div>
            </div>
        </div>
    `
};

const helperHubW2_Mod4 = {
    title: "★ Helper Hub: Equation Balancing Tricks",
    content: `
        <div style="font-size:15px; line-height: 1.3;">
            <p style="margin-top:0; margin-bottom:12px;">You don't always have to do the big math! Try using these mental math tricks instead.</p>
            
            <div style="display:grid; grid-template-columns: 1fr; gap:10px; break-inside: avoid;">
                <div style="border:2px solid #ccc; padding:10px; border-radius:10px; background:#fff;">
                    <strong style="font-size:16px; color:#2c7be5;">Trick 1: Decompose & Match</strong><br>
                    <div style="font-family:monospace; font-size:16px; margin:5px 0; background:#f0f7ff; padding:5px; border-radius:5px;">345 + 6 = 300 + [ ? ]</div>
                    Break apart 345. It is really just <strong>300 + 45</strong>.<br>
                    So the left side is: <strong style="color:#e74c3c;"><del>300</del></strong> + 45 + 6 = <strong style="color:#e74c3c;"><del>300</del></strong> + [ ? ]<br>
                    Cross out the 300 on both sides. Now you just need to add 45 + 6 = <strong>51</strong>!
                </div>
                
                <div style="border:2px solid #ccc; padding:10px; border-radius:10px; background:#fff;">
                    <strong style="font-size:16px; color:#27ae60;">Trick 2: Too Much Subtraction!</strong><br>
                    <div style="font-family:monospace; font-size:16px; margin:5px 0; background:#e8f5e9; padding:5px; border-radius:5px;">435 - 98 = 435 - 100 + [ ? ]</div>
                    The problem tells us to subtract 100 because it's fast. <br>
                    But wait, we only wanted to subtract 98! We subtracted 2 <em>too many</em>.<br>
                    We have to put those 2 back. So the missing number is <strong>2</strong>!
                </div>
            </div>
        </div>
    `
};

// --- VERSIONS DATA ---
const mod4Versions = {
    A: {
        id: "mod-4-a",
        name: "Number & Ops in Base Ten",
        weeks: [
            {
                weekNum: 1,
                helperHub: helperHubW1_Mod4,
                days: [
                    { 
                        id: "m4-w1-mon-a", name: "Mon", title: "Week 1: Monday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the related problems below.", problems: [
                                { text: "1. &nbsp; Part A: What is 43 rounded to the nearest ten?", answer: "40" }, 
                                { text: "Part B: What is 651 rounded to the nearest hundred?", answer: "700" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "2. &nbsp; What unknown number makes this equation true?<br> 50 &times; 6 = [box]", answer: "300" }
                            ] }
                        ] 
                    },
                    { 
                        id: "m4-w1-tue-a", name: "Tue", title: "Week 1: Tuesday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the related problems below.", problems: [
                                { text: "1. &nbsp; Part A: What is 762 rounded to the nearest hundred?", answer: "800" }, 
                                { text: "Part B: What is 84 rounded to the nearest ten?", answer: "80" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "2. &nbsp; What unknown number makes this equation true?<br> 452 - 40 = [box]", answer: "412" }
                            ] }
                        ] 
                    },
                    { 
                        id: "m4-w1-wed-a", name: "Wed", title: "Week 1: Wednesday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "1. &nbsp; What is 348 rounded to the nearest ten?", answer: "350" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "2. &nbsp; When rounding to the nearest ten, what is the least whole number that rounds to 150?", answer: "145" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "3. &nbsp; What unknown number makes this equation true?<br> 120 + 34 = [box]", answer: "154" }
                            ] }
                        ] 
                    },
                    { 
                        id: "m4-w1-thu-a", name: "Thu", title: "Week 1: Thursday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "1. &nbsp; What is 729 rounded to the nearest hundred?", answer: "700" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "2. &nbsp; When rounding to the nearest hundred, what is the greatest whole number that rounds to 500?", answer: "549" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "3. &nbsp; What unknown number makes this equation true?<br> 15 + 6 = 11 + [box]", answer: "10" }
                            ] }
                        ] 
                    },
                    { 
                        id: "m4-w1-fri-a", name: "Fri", title: "Week 1: Friday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the related problems below.", problems: [
                                { text: "1. &nbsp; Part A: What is 55 rounded to the nearest ten?", answer: "60" }, 
                                { text: "Part B: What is 215 rounded to the nearest hundred?", answer: "200" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "2. &nbsp; What unknown number makes this equation true?<br> 70 &times; 3 = [box]", answer: "210" }
                            ] }
                        ] 
                    }
                ]
            },
            {
                weekNum: 2,
                helperHub: helperHubW2_Mod4,
                days: [
                    { 
                        id: "m4-w2-mon-a", name: "Mon", title: "Week 2: Monday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "1. &nbsp; What unknown number makes this equation true?<br> 435 - 98 = 435 - 100 + [box]", answer: "2" }
                            ] },
                            { type: "input", instruction: "Solve the related problems below.", problems: [
                                { text: "2. &nbsp; Part A: What is 329 rounded to the nearest ten?", answer: "330" }, 
                                { text: "Part B: What is 894 rounded to the nearest hundred?", answer: "900" }
                            ] }
                        ] 
                    },
                    { 
                        id: "m4-w2-tue-a", name: "Tue", title: "Week 2: Tuesday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "1. &nbsp; What unknown number makes this equation true?<br> 2 &times; 4 &times; [box] = 80", answer: "10" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "2. &nbsp; When rounding to the nearest ten, what is the greatest whole number that rounds to 90?", answer: "94" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "3. &nbsp; What is 56 rounded to the nearest ten?", answer: "60" }
                            ] }
                        ] 
                    },
                    { 
                        id: "m4-w2-wed-a", name: "Wed", title: "Week 2: Wednesday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "1. &nbsp; What unknown number makes this equation true?<br> 240 - 60 = 200 - [box]", answer: "20" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "2. &nbsp; What unknown number makes this equation true?<br> 350 = [box] &times; 5", answer: "70" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "3. &nbsp; What is 402 rounded to the nearest hundred?", answer: "400" }
                            ] }
                        ] 
                    },
                    { 
                        id: "m4-w2-thu-a", name: "Thu", title: "Week 2: Thursday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "1. &nbsp; What unknown number makes this equation true?<br> 345 + 6 = 300 + [box]", answer: "51" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "2. &nbsp; What unknown number makes this equation true?<br> 5 &times; 2 &times; [box] = 70", answer: "7" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "3. &nbsp; What is 77 rounded to the nearest ten?", answer: "80" }
                            ] }
                        ] 
                    },
                    { 
                        id: "m4-w2-fri-a", name: "Fri", title: "Week 2: Friday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the related problems below.", problems: [
                                { text: "1. &nbsp; Part A: What is 891 rounded to the nearest hundred?", answer: "900" }, 
                                { text: "Part B: What is 32 rounded to the nearest ten?", answer: "30" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "2. &nbsp; What unknown number makes this equation true?<br> 825 - 95 = 825 - 100 + [box]", answer: "5" }
                            ] }
                        ] 
                    }
                ]
            }
        ]
    },
    B: {
        id: "mod-4-b",
        name: "Number & Ops in Base Ten",
        weeks: [
            {
                weekNum: 1,
                helperHub: helperHubW1_Mod4,
                days: [
                    { 
                        id: "m4-w1-mon-b", name: "Mon", title: "Week 1: Monday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the related problems below.", problems: [
                                { text: "1. &nbsp; Part A: What is 32 rounded to the nearest ten?", answer: "30" }, 
                                { text: "Part B: What is 458 rounded to the nearest hundred?", answer: "500" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "2. &nbsp; What unknown number makes this equation true?<br> 40 &times; 7 = [box]", answer: "280" }
                            ] }
                        ] 
                    },
                    { 
                        id: "m4-w1-tue-b", name: "Tue", title: "Week 1: Tuesday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the related problems below.", problems: [
                                { text: "1. &nbsp; Part A: What is 634 rounded to the nearest hundred?", answer: "600" }, 
                                { text: "Part B: What is 91 rounded to the nearest ten?", answer: "90" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "2. &nbsp; What unknown number makes this equation true?<br> 364 - 50 = [box]", answer: "314" }
                            ] }
                        ] 
                    },
                    { 
                        id: "m4-w1-wed-b", name: "Wed", title: "Week 1: Wednesday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "1. &nbsp; What is 526 rounded to the nearest ten?", answer: "530" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "2. &nbsp; When rounding to the nearest ten, what is the least whole number that rounds to 240?", answer: "235" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "3. &nbsp; What unknown number makes this equation true?<br> 140 + 25 = [box]", answer: "165" }
                            ] }
                        ] 
                    },
                    { 
                        id: "m4-w1-thu-b", name: "Thu", title: "Week 1: Thursday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "1. &nbsp; What is 841 rounded to the nearest hundred?", answer: "800" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "2. &nbsp; When rounding to the nearest hundred, what is the greatest whole number that rounds to 600?", answer: "649" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "3. &nbsp; What unknown number makes this equation true?<br> 14 + 8 = 12 + [box]", answer: "10" }
                            ] }
                        ] 
                    },
                    { 
                        id: "m4-w1-fri-b", name: "Fri", title: "Week 1: Friday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the related problems below.", problems: [
                                { text: "1. &nbsp; Part A: What is 45 rounded to the nearest ten?", answer: "50" }, 
                                { text: "Part B: What is 382 rounded to the nearest hundred?", answer: "400" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "2. &nbsp; What unknown number makes this equation true?<br> 60 &times; 4 = [box]", answer: "240" }
                            ] }
                        ] 
                    }
                ]
            },
            {
                weekNum: 2,
                helperHub: helperHubW2_Mod4,
                days: [
                    { 
                        id: "m4-w2-mon-b", name: "Mon", title: "Week 2: Monday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "1. &nbsp; What unknown number makes this equation true?<br> 524 - 97 = 524 - 100 + [box]", answer: "3" }
                            ] },
                            { type: "input", instruction: "Solve the related problems below.", problems: [
                                { text: "2. &nbsp; Part A: What is 438 rounded to the nearest ten?", answer: "440" }, 
                                { text: "Part B: What is 781 rounded to the nearest hundred?", answer: "800" }
                            ] }
                        ] 
                    },
                    { 
                        id: "m4-w2-tue-b", name: "Tue", title: "Week 2: Tuesday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "1. &nbsp; What unknown number makes this equation true?<br> 3 &times; 3 &times; [box] = 90", answer: "10" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "2. &nbsp; When rounding to the nearest ten, what is the greatest whole number that rounds to 60?", answer: "64" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "3. &nbsp; What is 65 rounded to the nearest ten?", answer: "70" }
                            ] }
                        ] 
                    },
                    { 
                        id: "m4-w2-wed-b", name: "Wed", title: "Week 2: Wednesday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "1. &nbsp; What unknown number makes this equation true?<br> 350 - 70 = 300 - [box]", answer: "20" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "2. &nbsp; What unknown number makes this equation true?<br> 240 = [box] &times; 4", answer: "60" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "3. &nbsp; What is 604 rounded to the nearest hundred?", answer: "600" }
                            ] }
                        ] 
                    },
                    { 
                        id: "m4-w2-thu-b", name: "Thu", title: "Week 2: Thursday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "1. &nbsp; What unknown number makes this equation true?<br> 452 + 7 = 400 + [box]", answer: "59" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "2. &nbsp; What unknown number makes this equation true?<br> 2 &times; 5 &times; [box] = 80", answer: "8" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "3. &nbsp; What is 88 rounded to the nearest ten?", answer: "90" }
                            ] }
                        ] 
                    },
                    { 
                        id: "m4-w2-fri-b", name: "Fri", title: "Week 2: Friday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the related problems below.", problems: [
                                { text: "1. &nbsp; Part A: What is 794 rounded to the nearest hundred?", answer: "800" }, 
                                { text: "Part B: What is 41 rounded to the nearest ten?", answer: "40" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "2. &nbsp; What unknown number makes this equation true?<br> 736 - 96 = 736 - 100 + [box]", answer: "4" }
                            ] }
                        ] 
                    }
                ]
            }
        ]
    },
    C: {
        id: "mod-4-c",
        name: "Number & Ops in Base Ten",
        weeks: [
            {
                weekNum: 1,
                helperHub: helperHubW1_Mod4,
                days: [
                    { 
                        id: "m4-w1-mon-c", name: "Mon", title: "Week 1: Monday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the related problems below.", problems: [
                                { text: "1. &nbsp; Part A: What is 54 rounded to the nearest ten?", answer: "50" }, 
                                { text: "Part B: What is 853 rounded to the nearest hundred?", answer: "900" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "2. &nbsp; What unknown number makes this equation true?<br> 60 &times; 5 = [box]", answer: "300" }
                            ] }
                        ] 
                    },
                    { 
                        id: "m4-w1-tue-c", name: "Tue", title: "Week 1: Tuesday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the related problems below.", problems: [
                                { text: "1. &nbsp; Part A: What is 349 rounded to the nearest hundred?", answer: "300" }, 
                                { text: "Part B: What is 73 rounded to the nearest ten?", answer: "70" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "2. &nbsp; What unknown number makes this equation true?<br> 573 - 60 = [box]", answer: "513" }
                            ] }
                        ] 
                    },
                    { 
                        id: "m4-w1-wed-c", name: "Wed", title: "Week 1: Wednesday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "1. &nbsp; What is 815 rounded to the nearest ten?", answer: "820" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "2. &nbsp; When rounding to the nearest ten, what is the least whole number that rounds to 320?", answer: "315" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "3. &nbsp; What unknown number makes this equation true?<br> 130 + 42 = [box]", answer: "172" }
                            ] }
                        ] 
                    },
                    { 
                        id: "m4-w1-thu-c", name: "Thu", title: "Week 1: Thursday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "1. &nbsp; What is 462 rounded to the nearest hundred?", answer: "500" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "2. &nbsp; When rounding to the nearest hundred, what is the greatest whole number that rounds to 800?", answer: "849" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "3. &nbsp; What unknown number makes this equation true?<br> 18 + 7 = 15 + [box]", answer: "10" }
                            ] }
                        ] 
                    },
                    { 
                        id: "m4-w1-fri-c", name: "Fri", title: "Week 1: Friday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the related problems below.", problems: [
                                { text: "1. &nbsp; Part A: What is 85 rounded to the nearest ten?", answer: "90" }, 
                                { text: "Part B: What is 491 rounded to the nearest hundred?", answer: "500" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "2. &nbsp; What unknown number makes this equation true?<br> 80 &times; 2 = [box]", answer: "160" }
                            ] }
                        ] 
                    }
                ]
            },
            {
                weekNum: 2,
                helperHub: helperHubW2_Mod4,
                days: [
                    { 
                        id: "m4-w2-mon-c", name: "Mon", title: "Week 2: Monday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "1. &nbsp; What unknown number makes this equation true?<br> 642 - 99 = 642 - 100 + [box]", answer: "1" }
                            ] },
                            { type: "input", instruction: "Solve the related problems below.", problems: [
                                { text: "2. &nbsp; Part A: What is 547 rounded to the nearest ten?", answer: "550" }, 
                                { text: "Part B: What is 675 rounded to the nearest hundred?", answer: "700" }
                            ] }
                        ] 
                    },
                    { 
                        id: "m4-w2-tue-c", name: "Tue", title: "Week 2: Tuesday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "1. &nbsp; What unknown number makes this equation true?<br> 2 &times; 3 &times; [box] = 60", answer: "10" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "2. &nbsp; When rounding to the nearest ten, what is the greatest whole number that rounds to 120?", answer: "124" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "3. &nbsp; What is 47 rounded to the nearest ten?", answer: "50" }
                            ] }
                        ] 
                    },
                    { 
                        id: "m4-w2-wed-c", name: "Wed", title: "Week 2: Wednesday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "1. &nbsp; What unknown number makes this equation true?<br> 420 - 40 = 400 - [box]", answer: "20" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "2. &nbsp; What unknown number makes this equation true?<br> 270 = [box] &times; 3", answer: "90" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "3. &nbsp; What is 501 rounded to the nearest hundred?", answer: "500" }
                            ] }
                        ] 
                    },
                    { 
                        id: "m4-w2-thu-c", name: "Thu", title: "Week 2: Thursday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "1. &nbsp; What unknown number makes this equation true?<br> 263 + 8 = 200 + [box]", answer: "71" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "2. &nbsp; What unknown number makes this equation true?<br> 5 &times; 2 &times; [box] = 90", answer: "9" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "3. &nbsp; What is 36 rounded to the nearest ten?", answer: "40" }
                            ] }
                        ] 
                    },
                    { 
                        id: "m4-w2-fri-c", name: "Fri", title: "Week 2: Friday", 
                        sections: [ 
                            { type: "input", instruction: "Solve the related problems below.", problems: [
                                { text: "1. &nbsp; Part A: What is 693 rounded to the nearest hundred?", answer: "700" }, 
                                { text: "Part B: What is 62 rounded to the nearest ten?", answer: "60" }
                            ] },
                            { type: "input", instruction: "Solve the problem below.", problems: [
                                { text: "2. &nbsp; What unknown number makes this equation true?<br> 543 - 94 = 543 - 100 + [box]", answer: "6" }
                            ] }
                        ] 
                    }
                ]
            }
        ]
    }
};