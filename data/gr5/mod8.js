// --- WEEK 1 HELPER HUB ---
const helperHubW1_Mod8 = {
    title: "★ Helper Hub: The Conversion Cheat Sheet",
    content: `
        <div style="font-size:16px; line-height: 1.5; color: #000;">
            <p style="margin-top:0; margin-bottom:15px;">Use this cheat sheet to remember your measurements, and follow the <strong>Golden Rule</strong> to know whether to multiply or divide!</p>
            
            <div style="display:flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
                
                <div style="flex: 1; min-width: 280px; border: 2px solid #34495e; border-radius: 8px; overflow: hidden;">
                    <div style="background: #34495e; color: #fff; font-weight: bold; padding: 8px; text-align: center;">Measurement Cheat Sheet</div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; background: #fff; text-align: center; font-size: 14px;">
                        <div style="padding: 10px; border-right: 1px dashed #ccc; border-bottom: 1px dashed #ccc;">
                            <strong style="color: #2980b9;">Time</strong><br>
                            1 min = 60 sec<br>
                            1 hour = 60 min
                        </div>
                        <div style="padding: 10px; border-bottom: 1px dashed #ccc;">
                            <strong style="color: #27ae60;">Length</strong><br>
                            1 foot = 12 inches<br>
                            1 yard = 3 feet
                        </div>
                        <div style="padding: 10px; border-right: 1px dashed #ccc;">
                            <strong style="color: #8e44ad;">Capacity (Volume)</strong><br>
                            1 quart = 2 pints<br>
                            1 gallon = 4 quarts<br>
                            1 Liter = 1,000 mL
                        </div>
                        <div style="padding: 10px;">
                            <strong style="color: #d35400;">Weight & Mass</strong><br>
                            1 pound (lb) = 16 ounces (oz)<br>
                            1 kilogram (kg) = 1,000 grams (g)
                        </div>
                    </div>
                </div>

                <div style="flex: 1; min-width: 280px; border: 2px solid #f39c12; border-radius: 8px; background: #fdfaf0; padding: 15px; display: flex; flex-direction: column; justify-content: center;">
                    <div style="text-align: center; font-weight: bold; color: #d35400; margin-bottom: 10px; font-size: 18px;">The Golden Rule</div>
                    
                    <div style="background: #fff; border: 2px solid #2980b9; border-radius: 6px; padding: 10px; margin-bottom: 10px; text-align: center;">
                        <strong style="color: #2980b9;">Big Unit &rarr; Small Unit = MULTIPLY</strong><br>
                        <span style="font-size: 13px; color: #555;">(1 Gallon breaks into 4 Quarts. The number gets bigger!)</span>
                    </div>

                    <div style="background: #fff; border: 2px dashed #27ae60; border-radius: 6px; padding: 10px; text-align: center;">
                        <strong style="color: #27ae60;">Small Unit &rarr; Big Unit = DIVIDE</strong><br>
                        <span style="font-size: 13px; color: #555;">(12 inches group together to make 1 Foot. The number gets smaller!)</span>
                    </div>
                </div>

            </div>
        </div>
    `
};

// --- WEEK 2 HELPER HUB ---
const helperHubW2_Mod8 = {
    title: "★ Helper Hub: Fractions of a Unit!",
    content: `
        <div style="font-size:16px; line-height: 1.5; color: #000;">
            <p style="margin-top:0; margin-bottom:15px;">When converting a mixed number (like <strong style="color: #c0392b;">1&frac34; hours</strong>), split it into two friendly chunks: the <strong>Whole</strong> and the <strong>Fraction</strong>.</p>
            
            <div style="display:flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
                
                <div style="width: 150px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                    <svg width="120" height="120" viewBox="0 0 120 120">
                        <circle cx="60" cy="60" r="50" fill="#fff" stroke="#333" stroke-width="3"/>
                        <path d="M 60 60 L 60 10 A 50 50 0 0 1 110 60 Z" fill="#ebf5fb" stroke="#3498db" stroke-width="2"/>
                        <path d="M 60 60 L 110 60 A 50 50 0 0 1 60 110 Z" fill="#ebf5fb" stroke="#3498db" stroke-width="2"/>
                        <path d="M 60 60 L 60 110 A 50 50 0 0 1 10 60 Z" fill="#ebf5fb" stroke="#3498db" stroke-width="2"/>
                        <text x="75" y="40" font-size="12" font-weight="bold" fill="#2980b9">15</text>
                        <text x="75" y="90" font-size="12" font-weight="bold" fill="#2980b9">15</text>
                        <text x="35" y="90" font-size="12" font-weight="bold" fill="#2980b9">15</text>
                        <text x="35" y="40" font-size="12" fill="#999">15</text>
                    </svg>
                    <div style="font-size: 14px; font-weight: bold; margin-top: 10px; color: #3498db;">&frac34; = 45 mins</div>
                </div>

                <div style="flex: 1; min-width: 250px; background: #fdf2e9; border: 2px solid #e67e22; border-radius: 8px; padding: 15px;">
                    <div style="font-size: 18px; font-weight: bold; color: #d35400; border-bottom: 2px dashed #e67e22; padding-bottom: 5px; margin-bottom: 10px;">How many minutes are in 1&frac34; hours?</div>
                    
                    <div style="display: flex; flex-direction: column; gap: 8px; font-size: 15px;">
                        <div><strong style="color: #c0392b;">1. The Whole:</strong> 1 Hour = <strong>60 minutes</strong></div>
                        <div><strong style="color: #2980b9;">2. The Fraction:</strong> &frac34; of an Hour = 15 + 15 + 15 = <strong>45 minutes</strong></div>
                        <div style="margin-top: 5px; padding-top: 5px; border-top: 1px solid #ccc; font-size: 18px; font-weight: bold;">
                            Total: 60 + 45 = <span style="color: #27ae60;">105 minutes</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    `
};

const module8 = {
    id: "mod-8",
    name: "Convert Measurements",
    versions: [
        // ==========================================
        // VERSION A (Baseline)
        // ==========================================
        {
            id: "A",
            weeks: [
                {
                    weekNum: 1,
                    helperHub: helperHubW1_Mod8,
                    days: [
                        {
                            id: "m8-w1-mon-a", name: "Mon", title: "Time Conversions",
                            sections: [
                                {
                                    instruction: "Enter the number of seconds in 6 minutes.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 360 }, { type: 'text', val: ' seconds' }] } ]
                                },
                                {
                                    instruction: [ {type:'text', val:'Enter the number of minutes in '}, {type:'fraction', n:'1', d:'4'}, {type:'text', val:' of an hour.'} ],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 15 }, { type: 'text', val: ' minutes' }] } ]
                                },
                                {
                                    instruction: "Find the volume of a rectangular prism with a base area of 24 sq cm and a height of 5 cm.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 120 }, { type: 'text', val: ' cubic cm' }] } ]
                                }
                            ]
                        },
                        {
                            id: "m8-w1-tue-a", name: "Tue", title: "Weight & Mass Conversions",
                            sections: [
                                {
                                    instruction: "Enter the number of grams equal to 8 kilograms.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 8000 }, { type: 'text', val: ' grams' }] } ]
                                },
                                {
                                    instruction: [ {type:'text', val:'Enter the number of ounces equal to '}, {type:'mixed', w:'3', n:'1', d:'2'}, {type:'text', val:' pounds.'} ],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 56 }, { type: 'text', val: ' ounces' }] } ]
                                },
                                {
                                    instruction: "Enter the sum.",
                                    instructionMath: [{type:'fraction', n:'1', d:'2'}, {type:'text', val:' + '}, {type:'fraction', n:'1', d:'4'}],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'fraction_group', ans: 0.75 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m8-w1-wed-a", name: "Wed", title: "Capacity Conversions",
                            sections: [
                                {
                                    instruction: "Enter the number of quarts in 5 gallons.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 20 }, { type: 'text', val: ' quarts' }] } ]
                                },
                                {
                                    instruction: "Enter the number of milliliters in 4.5 liters.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 4500 }, { type: 'text', val: ' milliliters' }] } ]
                                },
                                {
                                    instruction: "Enter the product.",
                                    instructionMath: [{type:'fraction', n:'3', d:'4'}, {type:'text', val:' x '}, {type:'fraction', n:'1', d:'2'}],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'fraction_group', ans: 0.375 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m8-w1-thu-a", name: "Thu", title: "Length Conversions",
                            sections: [
                                {
                                    instruction: "Enter the number of inches equal to 4 feet.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 48 }, { type: 'text', val: ' inches' }] } ]
                                },
                                {
                                    instruction: "Enter the number of feet equal to 7 yards.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 21 }, { type: 'text', val: ' feet' }] } ]
                                },
                                {
                                    instruction: "Round 14.562 to the nearest tenth.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 14.6 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m8-w1-fri-a", name: "Fri", title: "Weekly Quiz",
                            sections: [
                                {
                                    instruction: [ {type:'text', val:'Enter the number of minutes equal to '}, {type:'mixed', w:'2', n:'1', d:'2'}, {type:'text', val:' hours.'} ],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 150 }, { type: 'text', val: ' minutes' }] } ]
                                },
                                {
                                    instruction: "Enter the number of ounces equal to 5 pounds.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 80 }, { type: 'text', val: ' ounces' }] } ]
                                },
                                {
                                    instruction: "Enter the exact value:",
                                    instructionMath: [{type:'text', val:'(12 + 8) x 3'}],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 60 }] } ]
                                }
                            ]
                        }
                    ]
                },
                {
                    weekNum: 2,
                    helperHub: helperHubW2_Mod8,
                    days: [
                        {
                            id: "m8-w2-mon-a", name: "Mon", title: "Multi-Step Conversions",
                            sections: [
                                {
                                    instruction: [
                                        {type:'text', val:'It took Leo '}, {type:'mixed', w:'1', n:'1', d:'4'}, {type:'text', val:' hours to finish a test. This is '}, {type:'fraction', n:'1', d:'3'}, {type:'text', val:' the amount of time it took Sam to finish.<br><br>Enter the amount of time, in minutes, it took each student.'}
                                    ],
                                    type: "mixed_row",
                                    problems: [ 
                                        { segments: [
                                            { type: 'text', val: 'Leo: ' }, { type: 'whole_number', ans: 75 }, { type: 'text', val: ' mins &nbsp;&nbsp;&nbsp;&nbsp; Sam: ' }, { type: 'whole_number', ans: 225 }, { type: 'text', val: ' mins' }
                                        ] } 
                                    ]
                                },
                                {
                                    instruction: "Building a tower:<br>Part A is 10 inches tall.<br>Part B is 2 feet tall.<br>Enter the total height of the tower in inches.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 34 }, { type: 'text', val: ' inches' }] } ]
                                }
                            ]
                        },
                        {
                            id: "m8-w2-tue-a", name: "Tue", title: "Capacity & Cost Word Problems",
                            sections: [
                                {
                                    instruction: "A store sells juice for $2.50 per quart. If you buy 2 gallons of juice, what is the total cost before tax?",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'text', val: '$ ' }, { type: 'whole_number', ans: 20 }] } ]
                                },
                                {
                                    instruction: [ {type:'text', val:'Alex bought '}, {type:'fraction', n:'1', d:'2'}, {type:'text', val:' gallon of water. He poured all of the water equally into 4 bottles. What fraction of a gallon is in each bottle?'} ],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'fraction_group', ans: 0.125 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m8-w2-wed-a", name: "Wed", title: "Mixed Unit Arithmetic",
                            sections: [
                                {
                                    instruction: "Three bags of sand weigh a total of 25 kg 100 g.<br>Bag 1 weighs 8 kg 200 g.<br>Bag 2 weighs 10 kg 50 g.<br>What is the weight of Bag 3?",
                                    type: "mixed_row",
                                    problems: [ 
                                        { segments: [{ type: 'whole_number', ans: 6 }, { type: 'text', val: ' kg &nbsp;&nbsp;' }, { type: 'whole_number', ans: 850 }, { type: 'text', val: ' g' }] } 
                                    ]
                                },
                                {
                                    instruction: [ {type:'text', val:'A ribbon is 4 feet long. A teacher cuts the ribbon into pieces that are each '}, {type:'fraction', n:'1', d:'2'}, {type:'text', val:' foot long. How many pieces of ribbon does the teacher have?'} ],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 8 }, { type: 'text', val: ' pieces' }] } ]
                                }
                            ]
                        },
                        {
                            id: "m8-w2-thu-a", name: "Thu", title: "Fraction & Money Reasoning",
                            sections: [
                                {
                                    instruction: [ {type:'text', val:'A recipe uses '}, {type:'mixed', w:'1', n:'1', d:'2'}, {type:'text', val:' cups of oats, '}, {type:'mixed', w:'2', n:'1', d:'4'}, {type:'text', val:' cups of flour, and '}, {type:'mixed', w:'1', n:'1', d:'2'}, {type:'text', val:' cups of sugar. Using a mixed number, how many total cups of ingredients are used?'} ],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'mixed_group', ans: 5.25 }, { type: 'text', val: ' cups' }] } ]
                                },
                                {
                                    instruction: [ {type:'text', val:'An artist sells vases for $100 each. She pays the gallery owner '}, {type:'fraction', n:'20', d:'100'}, {type:'text', val:' of the price for each vase sold. She claims she will pay the owner $80 after 4 vases are sold. Which statement is true?'} ],
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [{ type: "text", val: "Her claim is correct because " }, { type: "fraction", n: "20", d: "100" }, { type: "text", val: " of 100 is 20, and 20 x 4 = 80." }], correct: true },
                                        { id: 'opt2', content: [{ type: "text", val: "Her claim is incorrect because she only pays $20 total for 4 vases." }], correct: false },
                                        { id: 'opt3', content: [{ type: "text", val: "Her claim is correct because 100 ÷ 4 = 25, and 25 + 20 = 45." }], correct: false }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m8-w2-fri-a", name: "Fri", title: "Module Quiz",
                            sections: [
                                {
                                    instruction: "A chef makes soup in 1-Liter pots. He serves 2 bowls to each customer. Each bowl holds 200 milliliters of soup. If he has 6 customers, what is the smallest number of 1-Liter pots he needs to prepare?",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 3 }, { type: 'text', val: ' pots' }] } ]
                                },
                                {
                                    instruction: "A painter buys 3 gallons of paint. The paint costs $4.00 per quart. What is the total cost of the paint?",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'text', val: '$ ' }, { type: 'whole_number', ans: 48 }] } ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        // ==========================================
        // VERSION B
        // ==========================================
        {
            id: "B",
            weeks: [
                {
                    weekNum: 1,
                    helperHub: helperHubW1_Mod8,
                    days: [
                        {
                            id: "m8-w1-mon-b", name: "Mon", title: "Time Conversions",
                            sections: [
                                {
                                    instruction: "Enter the number of seconds in 8 minutes.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 480 }, { type: 'text', val: ' seconds' }] } ]
                                },
                                {
                                    instruction: [ {type:'text', val:'Enter the number of minutes in '}, {type:'fraction', n:'3', d:'4'}, {type:'text', val:' of an hour.'} ],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 45 }, { type: 'text', val: ' minutes' }] } ]
                                },
                                {
                                    instruction: "Find the volume of a rectangular prism with a base area of 30 sq cm and a height of 4 cm.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 120 }, { type: 'text', val: ' cubic cm' }] } ]
                                }
                            ]
                        },
                        {
                            id: "m8-w1-tue-b", name: "Tue", title: "Weight & Mass Conversions",
                            sections: [
                                {
                                    instruction: "Enter the number of grams equal to 12 kilograms.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 12000 }, { type: 'text', val: ' grams' }] } ]
                                },
                                {
                                    instruction: [ {type:'text', val:'Enter the number of ounces equal to '}, {type:'mixed', w:'2', n:'1', d:'4'}, {type:'text', val:' pounds.'} ],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 36 }, { type: 'text', val: ' ounces' }] } ]
                                },
                                {
                                    instruction: "Enter the sum.",
                                    instructionMath: [{type:'fraction', n:'1', d:'2'}, {type:'text', val:' + '}, {type:'fraction', n:'1', d:'5'}],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'fraction_group', ans: 0.7 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m8-w1-wed-b", name: "Wed", title: "Capacity Conversions",
                            sections: [
                                {
                                    instruction: "Enter the number of quarts in 3 gallons.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 12 }, { type: 'text', val: ' quarts' }] } ]
                                },
                                {
                                    instruction: "Enter the number of milliliters in 2.5 liters.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 2500 }, { type: 'text', val: ' milliliters' }] } ]
                                },
                                {
                                    instruction: "Enter the product.",
                                    instructionMath: [{type:'fraction', n:'2', d:'3'}, {type:'text', val:' x '}, {type:'fraction', n:'1', d:'4'}],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'fraction_group', ans: 0.1666 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m8-w1-thu-b", name: "Thu", title: "Length Conversions",
                            sections: [
                                {
                                    instruction: "Enter the number of inches equal to 6 feet.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 72 }, { type: 'text', val: ' inches' }] } ]
                                },
                                {
                                    instruction: "Enter the number of feet equal to 9 yards.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 27 }, { type: 'text', val: ' feet' }] } ]
                                },
                                {
                                    instruction: "Round 18.239 to the nearest tenth.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 18.2 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m8-w1-fri-b", name: "Fri", title: "Weekly Quiz",
                            sections: [
                                {
                                    instruction: [ {type:'text', val:'Enter the number of minutes equal to '}, {type:'mixed', w:'1', n:'1', d:'2'}, {type:'text', val:' hours.'} ],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 90 }, { type: 'text', val: ' minutes' }] } ]
                                },
                                {
                                    instruction: "Enter the number of ounces equal to 4 pounds.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 64 }, { type: 'text', val: ' ounces' }] } ]
                                },
                                {
                                    instruction: "Enter the exact value:",
                                    instructionMath: [{type:'text', val:'(15 + 5) x 4'}],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 80 }] } ]
                                }
                            ]
                        }
                    ]
                },
                {
                    weekNum: 2,
                    helperHub: helperHubW2_Mod8,
                    days: [
                        {
                            id: "m8-w2-mon-b", name: "Mon", title: "Multi-Step Conversions",
                            sections: [
                                {
                                    instruction: [
                                        {type:'text', val:'It took Mia '}, {type:'mixed', w:'1', n:'1', d:'2'}, {type:'text', val:' hours to finish a puzzle. This is '}, {type:'fraction', n:'1', d:'4'}, {type:'text', val:' the amount of time it took Jake to finish.<br><br>Enter the amount of time, in minutes, it took each student.'}
                                    ],
                                    type: "mixed_row",
                                    problems: [ 
                                        { segments: [
                                            { type: 'text', val: 'Mia: ' }, { type: 'whole_number', ans: 90 }, { type: 'text', val: ' mins &nbsp;&nbsp;&nbsp;&nbsp; Jake: ' }, { type: 'whole_number', ans: 360 }, { type: 'text', val: ' mins' }
                                        ] } 
                                    ]
                                },
                                {
                                    instruction: "Building a tower:<br>Part A is 14 inches tall.<br>Part B is 3 feet tall.<br>Enter the total height of the tower in inches.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 50 }, { type: 'text', val: ' inches' }] } ]
                                }
                            ]
                        },
                        {
                            id: "m8-w2-tue-b", name: "Tue", title: "Capacity & Cost Word Problems",
                            sections: [
                                {
                                    instruction: "A store sells milk for $1.50 per quart. If you buy 3 gallons of milk, what is the total cost before tax?",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'text', val: '$ ' }, { type: 'whole_number', ans: 18 }] } ]
                                },
                                {
                                    instruction: [ {type:'text', val:'Alex bought '}, {type:'fraction', n:'1', d:'4'}, {type:'text', val:' gallon of water. He poured all of the water equally into 3 bottles. What fraction of a gallon is in each bottle?'} ],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'fraction_group', ans: 0.0833 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m8-w2-wed-b", name: "Wed", title: "Mixed Unit Arithmetic",
                            sections: [
                                {
                                    instruction: "Three bags of flour weigh a total of 20 kg 500 g.<br>Bag 1 weighs 6 kg 300 g.<br>Bag 2 weighs 8 kg 100 g.<br>What is the weight of Bag 3?",
                                    type: "mixed_row",
                                    problems: [ 
                                        { segments: [{ type: 'whole_number', ans: 6 }, { type: 'text', val: ' kg &nbsp;&nbsp;' }, { type: 'whole_number', ans: 100 }, { type: 'text', val: ' g' }] } 
                                    ]
                                },
                                {
                                    instruction: [ {type:'text', val:'A ribbon is 6 feet long. A teacher cuts the ribbon into pieces that are each '}, {type:'fraction', n:'1', d:'3'}, {type:'text', val:' foot long. How many pieces of ribbon does the teacher have?'} ],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 18 }, { type: 'text', val: ' pieces' }] } ]
                                }
                            ]
                        },
                        {
                            id: "m8-w2-thu-b", name: "Thu", title: "Fraction & Money Reasoning",
                            sections: [
                                {
                                    instruction: [ {type:'text', val:'A recipe uses '}, {type:'mixed', w:'2', n:'1', d:'2'}, {type:'text', val:' cups of oats, '}, {type:'mixed', w:'1', n:'3', d:'4'}, {type:'text', val:' cups of flour, and '}, {type:'mixed', w:'1', n:'1', d:'4'}, {type:'text', val:' cups of sugar. Using a mixed number, how many total cups of ingredients are used?'} ],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'mixed_group', ans: 5.5 }, { type: 'text', val: ' cups' }] } ]
                                },
                                {
                                    instruction: [ {type:'text', val:'An artist sells vases for $50 each. She pays the gallery owner '}, {type:'fraction', n:'10', d:'100'}, {type:'text', val:' of the price for each vase sold. She claims she will pay the owner $20 after 4 vases are sold. Which statement is true?'} ],
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [{ type: "text", val: "Her claim is correct because " }, { type: "fraction", n: "10", d: "100" }, { type: "text", val: " of 50 is 5, and 5 x 4 = 20." }], correct: true },
                                        { id: 'opt2', content: [{ type: "text", val: "Her claim is incorrect because she only pays $10 total for 4 vases." }], correct: false },
                                        { id: 'opt3', content: [{ type: "text", val: "Her claim is correct because 50 ÷ 4 = 12.5, and 12.5 + 7.5 = 20." }], correct: false }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m8-w2-fri-b", name: "Fri", title: "Module Quiz",
                            sections: [
                                {
                                    instruction: "A chef makes soup in 1-Liter pots. He serves 2 bowls to each customer. Each bowl holds 250 milliliters of soup. If he has 8 customers, what is the smallest number of 1-Liter pots he needs to prepare?",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 4 }, { type: 'text', val: ' pots' }] } ]
                                },
                                {
                                    instruction: "A painter buys 4 gallons of paint. The paint costs $5.00 per quart. What is the total cost of the paint?",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'text', val: '$ ' }, { type: 'whole_number', ans: 80 }] } ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        // ==========================================
        // VERSION C
        // ==========================================
        {
            id: "C",
            weeks: [
                {
                    weekNum: 1,
                    helperHub: helperHubW1_Mod8,
                    days: [
                        {
                            id: "m8-w1-mon-c", name: "Mon", title: "Time Conversions",
                            sections: [
                                {
                                    instruction: "Enter the number of seconds in 10 minutes.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 600 }, { type: 'text', val: ' seconds' }] } ]
                                },
                                {
                                    instruction: [ {type:'text', val:'Enter the number of minutes in '}, {type:'fraction', n:'1', d:'3'}, {type:'text', val:' of an hour.'} ],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 20 }, { type: 'text', val: ' minutes' }] } ]
                                },
                                {
                                    instruction: "Find the volume of a rectangular prism with a base area of 15 sq cm and a height of 6 cm.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 90 }, { type: 'text', val: ' cubic cm' }] } ]
                                }
                            ]
                        },
                        {
                            id: "m8-w1-tue-c", name: "Tue", title: "Weight & Mass Conversions",
                            sections: [
                                {
                                    instruction: "Enter the number of grams equal to 5 kilograms.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 5000 }, { type: 'text', val: ' grams' }] } ]
                                },
                                {
                                    instruction: [ {type:'text', val:'Enter the number of ounces equal to '}, {type:'mixed', w:'4', n:'1', d:'4'}, {type:'text', val:' pounds.'} ],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 68 }, { type: 'text', val: ' ounces' }] } ]
                                },
                                {
                                    instruction: "Enter the sum.",
                                    instructionMath: [{type:'fraction', n:'1', d:'4'}, {type:'text', val:' + '}, {type:'fraction', n:'1', d:'8'}],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'fraction_group', ans: 0.375 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m8-w1-wed-c", name: "Wed", title: "Capacity Conversions",
                            sections: [
                                {
                                    instruction: "Enter the number of quarts in 6 gallons.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 24 }, { type: 'text', val: ' quarts' }] } ]
                                },
                                {
                                    instruction: "Enter the number of milliliters in 3.5 liters.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 3500 }, { type: 'text', val: ' milliliters' }] } ]
                                },
                                {
                                    instruction: "Enter the product.",
                                    instructionMath: [{type:'fraction', n:'4', d:'5'}, {type:'text', val:' x '}, {type:'fraction', n:'1', d:'2'}],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'fraction_group', ans: 0.4 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m8-w1-thu-c", name: "Thu", title: "Length Conversions",
                            sections: [
                                {
                                    instruction: "Enter the number of inches equal to 8 feet.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 96 }, { type: 'text', val: ' inches' }] } ]
                                },
                                {
                                    instruction: "Enter the number of feet equal to 12 yards.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 36 }, { type: 'text', val: ' feet' }] } ]
                                },
                                {
                                    instruction: "Round 24.871 to the nearest tenth.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 24.9 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m8-w1-fri-c", name: "Fri", title: "Weekly Quiz",
                            sections: [
                                {
                                    instruction: [ {type:'text', val:'Enter the number of minutes equal to '}, {type:'mixed', w:'1', n:'3', d:'4'}, {type:'text', val:' hours.'} ],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 105 }, { type: 'text', val: ' minutes' }] } ]
                                },
                                {
                                    instruction: "Enter the number of ounces equal to 6 pounds.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 96 }, { type: 'text', val: ' ounces' }] } ]
                                },
                                {
                                    instruction: "Enter the exact value:",
                                    instructionMath: [{type:'text', val:'(10 + 6) x 5'}],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 80 }] } ]
                                }
                            ]
                        }
                    ]
                },
                {
                    weekNum: 2,
                    helperHub: helperHubW2_Mod8,
                    days: [
                        {
                            id: "m8-w2-mon-c", name: "Mon", title: "Multi-Step Conversions",
                            sections: [
                                {
                                    instruction: [
                                        {type:'text', val:'It took Eli '}, {type:'mixed', w:'1', n:'3', d:'4'}, {type:'text', val:' hours to finish a book. This is '}, {type:'fraction', n:'1', d:'2'}, {type:'text', val:' the amount of time it took Zoe to finish.<br><br>Enter the amount of time, in minutes, it took each student.'}
                                    ],
                                    type: "mixed_row",
                                    problems: [ 
                                        { segments: [
                                            { type: 'text', val: 'Eli: ' }, { type: 'whole_number', ans: 105 }, { type: 'text', val: ' mins &nbsp;&nbsp;&nbsp;&nbsp; Zoe: ' }, { type: 'whole_number', ans: 210 }, { type: 'text', val: ' mins' }
                                        ] } 
                                    ]
                                },
                                {
                                    instruction: "Building a tower:<br>Part A is 16 inches tall.<br>Part B is 4 feet tall.<br>Enter the total height of the tower in inches.",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 64 }, { type: 'text', val: ' inches' }] } ]
                                }
                            ]
                        },
                        {
                            id: "m8-w2-tue-c", name: "Tue", title: "Capacity & Cost Word Problems",
                            sections: [
                                {
                                    instruction: "A store sells juice for $3.00 per quart. If you buy 1.5 gallons of juice, what is the total cost before tax?",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'text', val: '$ ' }, { type: 'whole_number', ans: 18 }] } ]
                                },
                                {
                                    instruction: [ {type:'text', val:'Alex bought '}, {type:'fraction', n:'1', d:'3'}, {type:'text', val:' gallon of water. He poured all of the water equally into 2 bottles. What fraction of a gallon is in each bottle?'} ],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'fraction_group', ans: 0.1666 }] } ]
                                }
                            ]
                        },
                        {
                            id: "m8-w2-wed-c", name: "Wed", title: "Mixed Unit Arithmetic",
                            sections: [
                                {
                                    instruction: "Three bags of cement weigh a total of 30 kg 200 g.<br>Bag 1 weighs 12 kg 500 g.<br>Bag 2 weighs 9 kg 300 g.<br>What is the weight of Bag 3?",
                                    type: "mixed_row",
                                    problems: [ 
                                        { segments: [{ type: 'whole_number', ans: 8 }, { type: 'text', val: ' kg &nbsp;&nbsp;' }, { type: 'whole_number', ans: 400 }, { type: 'text', val: ' g' }] } 
                                    ]
                                },
                                {
                                    instruction: [ {type:'text', val:'A ribbon is 5 feet long. A teacher cuts the ribbon into pieces that are each '}, {type:'fraction', n:'1', d:'4'}, {type:'text', val:' foot long. How many pieces of ribbon does the teacher have?'} ],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 20 }, { type: 'text', val: ' pieces' }] } ]
                                }
                            ]
                        },
                        {
                            id: "m8-w2-thu-c", name: "Thu", title: "Fraction & Money Reasoning",
                            sections: [
                                {
                                    instruction: [ {type:'text', val:'A recipe uses '}, {type:'mixed', w:'1', n:'3', d:'4'}, {type:'text', val:' cups of oats, '}, {type:'mixed', w:'2', n:'1', d:'2'}, {type:'text', val:' cups of flour, and '}, {type:'mixed', w:'1', n:'3', d:'4'}, {type:'text', val:' cups of sugar. Using a mixed number, how many total cups of ingredients are used?'} ],
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'mixed_group', ans: 6 }, { type: 'text', val: ' cups' }] } ]
                                },
                                {
                                    instruction: [ {type:'text', val:'An artist sells vases for $200 each. She pays the gallery owner '}, {type:'fraction', n:'25', d:'100'}, {type:'text', val:' of the price for each vase sold. She claims she will pay the owner $200 after 4 vases are sold. Which statement is true?'} ],
                                    type: "multiple_choice",
                                    options: [
                                        { id: 'opt1', content: [{ type: "text", val: "Her claim is correct because " }, { type: "fraction", n: "25", d: "100" }, { type: "text", val: " of 200 is 50, and 50 x 4 = 200." }], correct: true },
                                        { id: 'opt2', content: [{ type: "text", val: "Her claim is incorrect because she only pays $50 total for 4 vases." }], correct: false },
                                        { id: 'opt3', content: [{ type: "text", val: "Her claim is correct because 200 ÷ 4 = 50, and 50 + 25 = 75." }], correct: false }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "m8-w2-fri-c", name: "Fri", title: "Module Quiz",
                            sections: [
                                {
                                    instruction: "A chef makes soup in 1-Liter pots. He serves 2 bowls to each customer. Each bowl holds 150 milliliters of soup. If he has 10 customers, what is the smallest number of 1-Liter pots he needs to prepare?",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'whole_number', ans: 3 }, { type: 'text', val: ' pots' }] } ]
                                },
                                {
                                    instruction: "A painter buys 5 gallons of paint. The paint costs $3.50 per quart. What is the total cost of the paint?",
                                    type: "mixed_row",
                                    problems: [ { segments: [{ type: 'text', val: '$ ' }, { type: 'whole_number', ans: 70 }] } ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};