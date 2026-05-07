// --- MODULE 4 DATA ---
const module4 = {
    id: "mod-4", 
    name: "Place Value & Multidigit Whole Numbers", 
    
    helperHubs: {
        week1: {
            title: "★ Helper Hub: Place Value Power",
            content: `
                <div style="font-size:15px; line-height: 1.3;">
                    <p style="margin-top:0; margin-bottom:10px;">A digit's place in a number tells you exactly how much it is worth! We can break a large number apart by looking at each place.</p>
                    
                    <div style="background:#fff; border:2px solid #ccc; border-radius:10px; padding:10px; text-align:center; margin-bottom:15px; break-inside: avoid;">
                        <table style="width:100%; border-collapse: collapse; text-align:center; font-size:14px;">
                            <tr style="background:#f0f8ff; font-weight:bold;">
                                <td style="border:1px solid #ccc; padding:5px; color:#c0392b;">Hundred<br>Thousands</td>
                                <td style="border:1px solid #ccc; padding:5px; color:#d35400;">Ten<br>Thousands</td>
                                <td style="border:1px solid #ccc; padding:5px; color:#f39c12;">Thousands</td>
                                <td style="border:1px solid #ccc; padding:5px; color:#27ae60;">Hundreds</td>
                                <td style="border:1px solid #ccc; padding:5px; color:#2980b9;">Tens</td>
                                <td style="border:1px solid #ccc; padding:5px; color:#8e44ad;">Ones</td>
                            </tr>
                            <tr style="font-size:22px; font-weight:bold; font-family:monospace;">
                                <td style="border:1px solid #ccc; padding:10px;">4</td>
                                <td style="border:1px solid #ccc; padding:10px;">1</td>
                                <td style="border:1px solid #ccc; padding:10px;">2</td>
                                <td style="border:1px solid #ccc; padding:10px;">5</td>
                                <td style="border:1px solid #ccc; padding:10px;">8</td>
                                <td style="border:1px solid #ccc; padding:10px;">9</td>
                            </tr>
                            <tr style="font-size:13px; font-weight:bold; color:#555;">
                                <td style="border:1px solid #ccc; padding:5px;">400,000</td>
                                <td style="border:1px solid #ccc; padding:5px;">+ 10,000</td>
                                <td style="border:1px solid #ccc; padding:5px;">+ 2,000</td>
                                <td style="border:1px solid #ccc; padding:5px;">+ 500</td>
                                <td style="border:1px solid #ccc; padding:5px;">+ 80</td>
                                <td style="border:1px solid #ccc; padding:5px;">+ 9</td>
                            </tr>
                        </table>
                    </div>

                    <div style="display:flex; gap:15px; align-items:flex-start; break-inside: avoid;">
                        <div style="flex:1; padding:10px; border:2px solid #ccc; border-radius:10px; background:#fff; text-align:center;">
                            <strong style="font-size:16px; color:#2c7be5;">The 10x Rule</strong><br>
                            Every time you move one spot left, the value gets <strong>10 times as large</strong>!<br>
                            <span style="font-family:monospace; font-weight:bold;">400 &times; 10 = 4,000</span>
                        </div>
                        <div style="flex:1; padding:10px; border:2px solid #ccc; border-radius:10px; background:#fff; text-align:center;">
                            <strong style="font-size:16px; color:#e74c3c;">Comparing Numbers</strong><br>
                            Always compare the biggest place value first!<br>
                            <span style="font-family:monospace; font-weight:bold;">6<span style="color:#e74c3c">7</span>,432 &gt; 6<span style="color:#e74c3c">5</span>,999</span><br>
                            <em>(7 thousands is more than 5 thousands!)</em>
                        </div>
                    </div>
                </div>`
        },
        week2: {
            title: "★ Helper Hub: Rounding Rules",
            content: `
                <div style="font-size:15px; line-height: 1.3;">
                    <p style="margin-top:0; margin-bottom:15px; text-align:center; font-weight:bold; font-size:18px; color:#8e44ad;">
                        "Find your place, look right next door...<br>
                        5 or greater, add one more!<br>
                        4 or less, let it rest!"
                    </p>
                    
                    <div style="display:flex; gap:15px; align-items:flex-start; break-inside: avoid;">
                        <div style="flex:1; padding:15px; border:2px solid #ccc; border-radius:10px; background:#fff; text-align:center;">
                            <strong style="font-size:16px; color:#2c7be5;">Rounding Example</strong><br><br>
                            Round <strong>34,852</strong> to the nearest thousand.<br><br>
                            1. Find the thousands place: 3<strong style="color:#2c7be5; text-decoration:underline;">4</strong>,852<br>
                            2. Look next door: 8.<br>
                            3. 8 is "5 or greater", so the 4 becomes a 5.<br>
                            4. Everything after becomes zero.<br>
                            <strong style="font-size:18px;">35,000</strong>
                        </div>
                        <div style="flex:1; padding:15px; border:2px solid #ccc; border-radius:10px; background:#fff; text-align:center;">
                            <strong style="font-size:16px; color:#e74c3c;">The Tricky 9</strong><br><br>
                            Round <strong>95,612</strong> to the nearest ten-thousand.<br><br>
                            1. Ten-thousands place: <strong style="color:#e74c3c; text-decoration:underline;">9</strong>5,612<br>
                            2. Look next door: 5.<br>
                            3. Add one more to 9... it rolls over to 10!<br>
                            <strong style="font-size:18px;">100,000</strong>
                        </div>
                    </div>
                </div>`
        }
    },

    versions: {
        A: {
            weeks: [
                {
                    weekNum: 1,
                    days: [
                        {
                            id: "m4-w1-mon", name: "Mon", title: "Week 1: Monday",
                            sections: [
                                {
                                    instruction: "Select the statement that explains how the values of the numbers 420 and 4200 are different.",
                                    type: "multiple_choice",
                                    options: [
                                        { text: "4200 is 1000 times as large as 420.", correct: false },
                                        { text: "4200 is 100 times as large as 420.", correct: false },
                                        { text: "4200 is 10 times as large as 420.", correct: true },
                                        { text: "4200 is 1 time as large as 420.", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Round the number to the requested place value.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "Round 3,482 to the nearest ten: &nbsp;" }, { type: 'input', ans: "3480" }] }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m4-w1-tue", name: "Tue", title: "Week 1: Tuesday", 
                            sections: [
                                {
                                    instruction: "Enter the symbol (<, >, or =) that goes in the box that makes this comparison true.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "5082 &nbsp; " }, { type: 'input', ans: "=" }, { type: 'text', val: "&nbsp; 2 ones + 8 tens + 5 thousands" }] },
                                        { segments: [{ type: 'text', val: "300 + 40 + 8000 + 2 &nbsp; " }, { type: 'input', ans: "<" }, { type: 'text', val: "&nbsp; 8 thousands + 4 hundreds + 2 tens" }] }
                                    ]
                                },
                                {
                                    instruction: "Round the number to the requested place value.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "Round 72,195 to the nearest thousand: &nbsp;" }, { type: 'input', ans: "72000" }] }
                                    ]
                                }
                            ] 
                        },
                        { 
                            id: "m4-w1-wed", name: "Wed", title: "Week 1: Wednesday", 
                            sections: [
                                {
                                    instruction: "What digit can you put in the box to make the comparison true?",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "67,_37 &nbsp; > &nbsp; 67,737 &nbsp;&nbsp;&nbsp;&nbsp; Missing digit: " }, { type: 'input', ans: "8|9" }] }
                                    ]
                                },
                                {
                                    instruction: "Round the number to the requested place value.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "Round 14,810 to the nearest hundred: &nbsp;" }, { type: 'input', ans: "14800" }] }
                                    ]
                                }
                            ] 
                        },
                        {
                            id: "m4-w1-thu", name: "Thu", title: "Week 1: Thursday",
                            sections: [
                                {
                                    instruction: "Select True or False for each comparison.",
                                    type: "grid", col0: "Equation/Inequality",
                                    col1: "True", col2: "False",
                                    rows: [
                                        { segments: [{ type: 'text', val: '805 = 800 + 50' }], correct: false },
                                        { segments: [{ type: 'text', val: 'four thousand twenty > 4 thousands + 2 ones' }], correct: true },
                                        { segments: [{ type: 'text', val: 'eight hundred ninety-nine < one thousand' }], correct: true }
                                    ]
                                },
                                {
                                    instruction: "Round the number to the requested place value.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "Round 568,211 to the nearest ten thousand: &nbsp;" }, { type: 'input', ans: "570000" }] }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m4-w1-fri", name: "Fri", title: "Week 1: Friday", 
                            sections: [
                                {
                                    instruction: "Select the statement that explains how the values of the numbers 65 and 6500 are different.",
                                    type: "multiple_choice",
                                    options: [
                                        { text: "6500 is 100 times as large as 65.", correct: true },
                                        { text: "6500 is 10 times as large as 65.", correct: false },
                                        { text: "6500 is 1000 times as large as 65.", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the symbol (<, >, or =) to make the comparison true.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "7 thousands + 2 tens &nbsp; " }, { type: 'input', ans: ">" }, { type: 'text', val: "&nbsp; 700 + 20" }] }
                                    ]
                                },
                                {
                                    instruction: "Round the number to the requested place value.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "Round 9,845 to the nearest hundred: &nbsp;" }, { type: 'input', ans: "9800" }] }
                                    ]
                                }
                            ] 
                        }
                    ]
                },
                {
                    weekNum: 2,
                    days: [
                        {
                            id: "m4-w2-mon", name: "Mon", title: "Week 2: Monday",
                            sections: [
                                {
                                    instruction: "Round the numbers to the requested place value. Enter your answer in the box.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "Round 62,894 to the nearest thousand: &nbsp;" }, { type: 'input', ans: "63000" }] },
                                        { segments: [{ type: 'text', val: "Round 485,219 to the nearest ten thousand: &nbsp;" }, { type: 'input', ans: "490000" }] }
                                    ]
                                },
                                {
                                    instruction: "What digit can you put in the box to make the comparison true?",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "13,4_5 &nbsp; < &nbsp; 13,425 &nbsp;&nbsp;&nbsp;&nbsp; Missing digit: " }, { type: 'input', ans: "0|1" }] }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m4-w2-tue", name: "Tue", title: "Week 2: Tuesday", 
                            sections: [
                                {
                                    instruction: "When rounding to the nearest thousand, which numbers round to 45,000? Select Yes if the number rounds to 45,000. Select No if it does not.",
                                    type: "grid", col0: "Number",
                                    col1: "Yes", col2: "No",
                                    rows: [
                                        { text: "44,812", correct: true },
                                        { text: "45,601", correct: false },
                                        { text: "44,499", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Round the number to the requested place value.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "Round 84,502 to the nearest thousand: &nbsp;" }, { type: 'input', ans: "85000" }] }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m4-w2-wed", name: "Wed", title: "Week 2: Wednesday", 
                            sections: [
                                {
                                    instruction: "Round the number to the requested place value.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "Round 312,987 to the nearest hundred: &nbsp;" }, { type: 'input', ans: "313000" }] }
                                    ]
                                },
                                {
                                    instruction: "Enter the symbol (<, >, or =) to make the comparison true.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "4 thousands + 5 tens &nbsp; " }, { type: 'input', ans: "=" }, { type: 'text', val: "&nbsp; 4,050" }] }
                                    ]
                                }
                            ] 
                        },
                        {
                            id: "m4-w2-thu", name: "Thu", title: "Week 2: Thursday",
                            sections: [
                                {
                                    instruction: "When rounding to the nearest ten thousand, which numbers round to 80,000? Select Yes or No.",
                                    type: "grid", col0: "Number",
                                    col1: "Yes", col2: "No",
                                    rows: [
                                        { text: "82,199", correct: true },
                                        { text: "78,000", correct: true },
                                        { text: "85,000", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Round the number to the requested place value.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "Round 95,612 to the nearest ten thousand: &nbsp;" }, { type: 'input', ans: "100000" }] }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m4-w2-fri", name: "Fri", title: "Week 2: Friday", 
                            sections: [
                                {
                                    instruction: "Round 19,532 to the nearest hundred. Enter your answer below.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'input', ans: "19500" }] }
                                    ]
                                },
                                {
                                    instruction: "Select True or False for the comparison.",
                                    type: "grid", col0: "Equation/Inequality",
                                    col1: "True", col2: "False",
                                    rows: [
                                        { segments: [{ type: 'text', val: '5000 + 400 + 10 = 5041' }], correct: false }
                                    ]
                                },
                                {
                                    instruction: "Round the number to the requested place value.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "Round 4,561 to the nearest ten: &nbsp;" }, { type: 'input', ans: "4560" }] }
                                    ]
                                }
                            ] 
                        }
                    ]
                }
            ]
        },
        B: {
            weeks: [
                {
                    weekNum: 1,
                    days: [
                        {
                            id: "m4-w1-mon", name: "Mon", title: "Week 1: Monday",
                            sections: [
                                {
                                    instruction: "Select the statement that explains how the values of the numbers 35 and 3500 are different.",
                                    type: "multiple_choice",
                                    options: [
                                        { text: "3500 is 10 times as large as 35.", correct: false },
                                        { text: "3500 is 1000 times as large as 35.", correct: false },
                                        { text: "3500 is 100 times as large as 35.", correct: true },
                                        { text: "3500 is 1 time as large as 35.", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Round the number to the requested place value.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "Round 7,145 to the nearest ten: &nbsp;" }, { type: 'input', ans: "7150" }] }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m4-w1-tue", name: "Tue", title: "Week 1: Tuesday", 
                            sections: [
                                {
                                    instruction: "Enter the symbol (<, >, or =) that goes in the box that makes this comparison true.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "6205 &nbsp; " }, { type: 'input', ans: "=" }, { type: 'text', val: "&nbsp; 5 ones + 2 hundreds + 6 thousands" }] },
                                        { segments: [{ type: 'text', val: "400 + 70 + 9000 &nbsp; " }, { type: 'input', ans: "<" }, { type: 'text', val: "&nbsp; 9 thousands + 7 hundreds + 4 tens" }] }
                                    ]
                                },
                                {
                                    instruction: "Round the number to the requested place value.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "Round 45,821 to the nearest thousand: &nbsp;" }, { type: 'input', ans: "46000" }] }
                                    ]
                                }
                            ] 
                        },
                        { 
                            id: "m4-w1-wed", name: "Wed", title: "Week 1: Wednesday", 
                            sections: [
                                {
                                    instruction: "What digit can you put in the box to make the comparison true?",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "42,8_5 &nbsp; > &nbsp; 42,875 &nbsp;&nbsp;&nbsp;&nbsp; Missing digit: " }, { type: 'input', ans: "8|9" }] }
                                    ]
                                },
                                {
                                    instruction: "Round the number to the requested place value.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "Round 26,390 to the nearest hundred: &nbsp;" }, { type: 'input', ans: "26400" }] }
                                    ]
                                }
                            ] 
                        },
                        {
                            id: "m4-w1-thu", name: "Thu", title: "Week 1: Thursday",
                            sections: [
                                {
                                    instruction: "Select True or False for each comparison.",
                                    type: "grid", col0: "Equation/Inequality",
                                    col1: "True", col2: "False",
                                    rows: [
                                        { segments: [{ type: 'text', val: '307 = 300 + 70' }], correct: false },
                                        { segments: [{ type: 'text', val: 'five thousand thirty > 5 thousands + 3 ones' }], correct: true },
                                        { segments: [{ type: 'text', val: 'nine hundred ninety-nine < one thousand' }], correct: true }
                                    ]
                                },
                                {
                                    instruction: "Round the number to the requested place value.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "Round 342,980 to the nearest ten thousand: &nbsp;" }, { type: 'input', ans: "340000" }] }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m4-w1-fri", name: "Fri", title: "Week 1: Friday", 
                            sections: [
                                {
                                    instruction: "Select the statement that explains how the values of the numbers 83 and 830 are different.",
                                    type: "multiple_choice",
                                    options: [
                                        { text: "830 is 100 times as large as 83.", correct: false },
                                        { text: "830 is 10 times as large as 83.", correct: true },
                                        { text: "830 is 1000 times as large as 83.", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Enter the symbol (<, >, or =) to make the comparison true.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "5 thousands + 3 tens &nbsp; " }, { type: 'input', ans: ">" }, { type: 'text', val: "&nbsp; 500 + 30" }] }
                                    ]
                                },
                                {
                                    instruction: "Round the number to the requested place value.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "Round 4,752 to the nearest hundred: &nbsp;" }, { type: 'input', ans: "4800" }] }
                                    ]
                                }
                            ] 
                        }
                    ]
                },
                {
                    weekNum: 2,
                    days: [
                        {
                            id: "m4-w2-mon", name: "Mon", title: "Week 2: Monday",
                            sections: [
                                {
                                    instruction: "Round the numbers to the requested place value. Enter your answer in the box.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "Round 37,150 to the nearest thousand: &nbsp;" }, { type: 'input', ans: "37000" }] },
                                        { segments: [{ type: 'text', val: "Round 216,845 to the nearest ten thousand: &nbsp;" }, { type: 'input', ans: "220000" }] }
                                    ]
                                },
                                {
                                    instruction: "What digit can you put in the box to make the comparison true?",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "27,3_1 &nbsp; < &nbsp; 27,331 &nbsp;&nbsp;&nbsp;&nbsp; Missing digit: " }, { type: 'input', ans: "0|1|2" }] }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m4-w2-tue", name: "Tue", title: "Week 2: Tuesday", 
                            sections: [
                                {
                                    instruction: "When rounding to the nearest thousand, which numbers round to 38,000? Select Yes if the number rounds to 38,000. Select No if it does not.",
                                    type: "grid", col0: "Number",
                                    col1: "Yes", col2: "No",
                                    rows: [
                                        { text: "37,819", correct: true },
                                        { text: "38,600", correct: false },
                                        { text: "37,499", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Round the number to the requested place value.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "Round 92,501 to the nearest thousand: &nbsp;" }, { type: 'input', ans: "93000" }] }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m4-w2-wed", name: "Wed", title: "Week 2: Wednesday", 
                            sections: [
                                {
                                    instruction: "Round the number to the requested place value.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "Round 789,254 to the nearest hundred: &nbsp;" }, { type: 'input', ans: "789300" }] }
                                    ]
                                },
                                {
                                    instruction: "Enter the symbol (<, >, or =) to make the comparison true.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "3 thousands + 8 tens &nbsp; " }, { type: 'input', ans: "=" }, { type: 'text', val: "&nbsp; 3,080" }] }
                                    ]
                                }
                            ] 
                        },
                        {
                            id: "m4-w2-thu", name: "Thu", title: "Week 2: Thursday",
                            sections: [
                                {
                                    instruction: "When rounding to the nearest ten thousand, which numbers round to 90,000? Select Yes or No.",
                                    type: "grid", col0: "Number",
                                    col1: "Yes", col2: "No",
                                    rows: [
                                        { text: "91,200", correct: true },
                                        { text: "87,000", correct: true },
                                        { text: "96,000", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Round the number to the requested place value.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "Round 98,421 to the nearest ten thousand: &nbsp;" }, { type: 'input', ans: "100000" }] }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m4-w2-fri", name: "Fri", title: "Week 2: Friday", 
                            sections: [
                                {
                                    instruction: "Round 47,382 to the nearest hundred. Enter your answer below.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'input', ans: "47400" }] }
                                    ]
                                },
                                {
                                    instruction: "Select True or False for the comparison.",
                                    type: "grid", col0: "Equation/Inequality",
                                    col1: "True", col2: "False",
                                    rows: [
                                        { segments: [{ type: 'text', val: '9000 + 600 + 40 = 9064' }], correct: false }
                                    ]
                                },
                                {
                                    instruction: "Round the number to the requested place value.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "Round 5,914 to the nearest ten: &nbsp;" }, { type: 'input', ans: "5910" }] }
                                    ]
                                }
                            ] 
                        }
                    ]
                }
            ]
        },
        C: {
            weeks: [
                {
                    weekNum: 1,
                    days: [
                        {
                            id: "m4-w1-mon", name: "Mon", title: "Week 1: Monday",
                            sections: [
                                {
                                    instruction: "Select the statement that explains how the values of the numbers 8 and 8000 are different.",
                                    type: "multiple_choice",
                                    options: [
                                        { text: "8000 is 10 times as large as 8.", correct: false },
                                        { text: "8000 is 100 times as large as 8.", correct: false },
                                        { text: "8000 is 1000 times as large as 8.", correct: true },
                                        { text: "8000 is 1 time as large as 8.", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Round the number to the requested place value.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "Round 9,324 to the nearest ten: &nbsp;" }, { type: 'input', ans: "9320" }] }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m4-w1-tue", name: "Tue", title: "Week 1: Tuesday", 
                            sections: [
                                {
                                    instruction: "Enter the symbol (<, >, or =) that goes in the box that makes this comparison true.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "3190 &nbsp; " }, { type: 'input', ans: "=" }, { type: 'text', val: "&nbsp; 9 tens + 1 hundred + 3 thousands" }] },
                                        { segments: [{ type: 'text', val: "500 + 20 + 6000 + 1 &nbsp; " }, { type: 'input', ans: "<" }, { type: 'text', val: "&nbsp; 6 thousands + 5 hundreds + 1 ten" }] }
                                    ]
                                },
                                {
                                    instruction: "Round the number to the requested place value.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "Round 83,499 to the nearest thousand: &nbsp;" }, { type: 'input', ans: "83000" }] }
                                    ]
                                }
                            ] 
                        },
                        { 
                            id: "m4-w1-wed", name: "Wed", title: "Week 1: Wednesday", 
                            sections: [
                                {
                                    instruction: "What digit can you put in the box to make the comparison true?",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "5_,210 &nbsp; < &nbsp; 52,210 &nbsp;&nbsp;&nbsp;&nbsp; Missing digit: " }, { type: 'input', ans: "0|1" }] }
                                    ]
                                },
                                {
                                    instruction: "Round the number to the requested place value.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "Round 58,149 to the nearest hundred: &nbsp;" }, { type: 'input', ans: "58100" }] }
                                    ]
                                }
                            ] 
                        },
                        {
                            id: "m4-w1-thu", name: "Thu", title: "Week 1: Thursday",
                            sections: [
                                {
                                    instruction: "Select True or False for each comparison.",
                                    type: "grid", col0: "Equation/Inequality",
                                    col1: "True", col2: "False",
                                    rows: [
                                        { segments: [{ type: 'text', val: '604 = 600 + 40' }], correct: false },
                                        { segments: [{ type: 'text', val: 'two thousand ten > 2 thousands + 1 one' }], correct: true },
                                        { segments: [{ type: 'text', val: 'seven hundred ninety-nine < one thousand' }], correct: true }
                                    ]
                                },
                                {
                                    instruction: "Round the number to the requested place value.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "Round 785,123 to the nearest ten thousand: &nbsp;" }, { type: 'input', ans: "790000" }] }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m4-w1-fri", name: "Fri", title: "Week 1: Friday", 
                            sections: [
                                {
                                    instruction: "Select the statement that explains how the values of the numbers 12 and 12000 are different.",
                                    type: "multiple_choice",
                                    options: [
                                        { text: "12000 is 10 times as large as 12.", correct: false },
                                        { text: "12000 is 100 times as large as 12.", correct: false },
                                        { text: "12000 is 1000 times as large as 12.", correct: true }
                                    ]
                                },
                                {
                                    instruction: "Enter the symbol (<, >, or =) to make the comparison true.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "9 thousands + 4 tens &nbsp; " }, { type: 'input', ans: ">" }, { type: 'text', val: "&nbsp; 900 + 40" }] }
                                    ]
                                },
                                {
                                    instruction: "Round the number to the requested place value.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "Round 6,295 to the nearest hundred: &nbsp;" }, { type: 'input', ans: "6300" }] }
                                    ]
                                }
                            ] 
                        }
                    ]
                },
                {
                    weekNum: 2,
                    days: [
                        {
                            id: "m4-w2-mon", name: "Mon", title: "Week 2: Monday",
                            sections: [
                                {
                                    instruction: "Round the numbers to the requested place value. Enter your answer in the box.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "Round 54,621 to the nearest thousand: &nbsp;" }, { type: 'input', ans: "55000" }] },
                                        { segments: [{ type: 'text', val: "Round 834,190 to the nearest ten thousand: &nbsp;" }, { type: 'input', ans: "830000" }] }
                                    ]
                                },
                                {
                                    instruction: "What digit can you put in the box to make the comparison true?",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "81,5_9 &nbsp; < &nbsp; 81,529 &nbsp;&nbsp;&nbsp;&nbsp; Missing digit: " }, { type: 'input', ans: "0|1" }] }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m4-w2-tue", name: "Tue", title: "Week 2: Tuesday", 
                            sections: [
                                {
                                    instruction: "When rounding to the nearest thousand, which numbers round to 38,000? Select Yes if the number rounds to 38,000. Select No if it does not.",
                                    type: "grid", col0: "Number",
                                    col1: "Yes", col2: "No",
                                    rows: [
                                        { text: "37,819", correct: true },
                                        { text: "38,600", correct: false },
                                        { text: "37,499", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Round the number to the requested place value.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "Round 92,501 to the nearest thousand: &nbsp;" }, { type: 'input', ans: "93000" }] }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m4-w2-wed", name: "Wed", title: "Week 2: Wednesday", 
                            sections: [
                                {
                                    instruction: "Round the number to the requested place value.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "Round 789,254 to the nearest hundred: &nbsp;" }, { type: 'input', ans: "789300" }] }
                                    ]
                                },
                                {
                                    instruction: "Enter the symbol (<, >, or =) to make the comparison true.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "3 thousands + 8 tens &nbsp; " }, { type: 'input', ans: "=" }, { type: 'text', val: "&nbsp; 3,080" }] }
                                    ]
                                }
                            ] 
                        },
                        {
                            id: "m4-w2-thu", name: "Thu", title: "Week 2: Thursday",
                            sections: [
                                {
                                    instruction: "When rounding to the nearest ten thousand, which numbers round to 90,000? Select Yes or No.",
                                    type: "grid", col0: "Number",
                                    col1: "Yes", col2: "No",
                                    rows: [
                                        { text: "91,200", correct: true },
                                        { text: "87,000", correct: true },
                                        { text: "96,000", correct: false }
                                    ]
                                },
                                {
                                    instruction: "Round the number to the requested place value.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "Round 98,421 to the nearest ten thousand: &nbsp;" }, { type: 'input', ans: "100000" }] }
                                    ]
                                }
                            ]
                        },
                        { 
                            id: "m4-w2-fri", name: "Fri", title: "Week 2: Friday", 
                            sections: [
                                {
                                    instruction: "Round 47,382 to the nearest hundred. Enter your answer below.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'input', ans: "47400" }] }
                                    ]
                                },
                                {
                                    instruction: "Select True or False for the comparison.",
                                    type: "grid", col0: "Equation/Inequality",
                                    col1: "True", col2: "False",
                                    rows: [
                                        { segments: [{ type: 'text', val: '9000 + 600 + 40 = 9064' }], correct: false }
                                    ]
                                },
                                {
                                    instruction: "Round the number to the requested place value.",
                                    type: "mixed_row",
                                    problems: [
                                        { segments: [{ type: 'text', val: "Round 5,914 to the nearest ten: &nbsp;" }, { type: 'input', ans: "5910" }] }
                                    ]
                                }
                            ] 
                        }
                    ]
                }
            ]
        }
    }
};