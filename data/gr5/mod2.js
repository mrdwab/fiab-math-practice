const module2 = {
    id: "mod-2",
    name: "Multiply and Divide Fractions I",
    weeks: [
        {
            weekNum: 1,
            days: [
                {
                    id: "m2-w1-mon",
                    name: "Mon",
                    title: "Visual Models (Multiplication)",
                    sections: [
                        {
                            instruction: "Enter the product.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "text", val: "5 x " },
                                        { type: "fraction", n: "2", d: "3" },
                                        { type: "text", val: " = " },
                                        { type: "mixed_group", ans: 3.3333 },
                                    ],
                                },
                            ],
                        },
                        {
                            instruction: "Which fraction model best represents: ",
                            instructionMath: [
                                { type: "text", val: "2" },
                                { type: "text", val: " x " },
                                { type: "fraction", n: "3", d: "4" },
                            ],
                            type: "multiple_choice",
                            options: [
                                {
                                    id: "opt1",
                                    visual: true,
                                    content: [{ type: "visual-repeat", count: 2, num: 3, den: 4 }],
                                    correct: true,
                                },
                                {
                                    id: "opt2",
                                    visual: true,
                                    warning:
                                        "This shows the correct total, but not the best model for multiplication. Look for groups.",
                                    content: [{ type: "visual", whole: 1, num: 2, den: 4 }],
                                    correct: false,
                                },
                                {
                                    id: "opt3",
                                    visual: true,
                                    content: [{ type: "visual-repeat", count: 2, num: 1, den: 4 }],
                                    correct: false,
                                },
                                {
                                    id: "opt4",
                                    visual: true,
                                    warning:
                                        "This shows the correct total, but not the best model for multiplication. Look for groups.",
                                    content: [{ type: "visual-repeat", count: 3, num: 2, den: 4 }],
                                    correct: false,
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "m2-w1-tue",
                    name: "Tue",
                    title: "Word Problems (Multiplication)",
                    sections: [
                        {
                            instruction: "Enter the product.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "fraction", n: "3", d: "4" },
                                        { type: "text", val: " x " },
                                        { type: "fraction", n: "5", d: "6" },
                                        { type: "text", val: " = " },
                                        { type: "fraction_group", ans: 0.625 },
                                    ],
                                },
                            ],
                        },
                        {
                            instruction: [
                                { type: "text", val: "Miriam made 40 necklaces. She sold " },
                                { type: "fraction", n: "1", d: "10" },
                                { type: "text", val: " of them. How many necklaces did she sell?" },
                            ],
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "text", val: "Sold: " },
                                        { type: "whole_number", ans: 4 },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "m2-w1-wed",
                    name: "Wed",
                    title: "Visual Models (Pie Charts)",
                    sections: [
                        {
                            instruction: "Enter the quotient.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "text", val: "4 ÷ " },
                                        { type: "fraction", n: "1", d: "3" },
                                        { type: "text", val: " = " },
                                        { type: "whole_number", ans: 12 },
                                    ],
                                },
                            ],
                        },
                        {
                            instruction: "Which fraction model best represents: ",
                            instructionMath: [
                                { type: "text", val: "3" },
                                { type: "text", val: " x " },
                                { type: "fraction", n: "1", d: "2" },
                            ],
                            type: "multiple_choice",
                            options: [
                                {
                                    id: "opt1",
                                    visual: true,
                                    content: [{ type: "pie-repeat", count: 3, num: 1, den: 2 }],
                                    correct: true,
                                },
                                {
                                    id: "opt2",
                                    visual: true,
                                    warning:
                                        "This shows the correct total, but not the best model for multiplication. Look for groups.",
                                    content: [{ type: "pie", whole: 1, num: 1, den: 2 }],
                                    correct: false,
                                },
                                {
                                    id: "opt3",
                                    visual: true,
                                    content: [{ type: "pie-repeat", count: 2, num: 1, den: 2 }],
                                    correct: false,
                                },
                                {
                                    id: "opt4",
                                    visual: true,
                                    content: [{ type: "pie-repeat", count: 3, num: 1, den: 4 }],
                                    correct: false,
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "m2-w1-thu",
                    name: "Thu",
                    title: "Word Problems (Division)",
                    sections: [
                        {
                            instruction: "Enter the quotient.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "fraction", n: "1", d: "5" },
                                        { type: "text", val: " ÷ 2 = " },
                                        { type: "fraction_group", ans: 0.1 },
                                    ],
                                },
                            ],
                        },
                        {
                            instruction:
                                "A baker has 31 cups of flour. She divides the flour equally among 3 large bowls. Enter the number of cups in each bowl.",
                            type: "mixed_row",
                            problems: [{ segments: [{ type: "mixed_group", ans: 10.3333 }] }],
                        },
                    ],
                },
                {
                    id: "m2-w1-fri",
                    name: "Fri",
                    title: "Weekly Quiz",
                    sections: [
                        {
                            instruction: "Which fraction model best represents: ",
                            instructionMath: [
                                { type: "text", val: "2" },
                                { type: "text", val: " x " },
                                { type: "fraction", n: "2", d: "3" },
                            ],
                            type: "multiple_choice",
                            options: [
                                {
                                    id: "opt1",
                                    visual: true,
                                    content: [{ type: "visual-repeat", count: 2, num: 2, den: 3 }],
                                    correct: true,
                                },
                                {
                                    id: "opt2",
                                    visual: true,
                                    warning: "This shows the correct total, but not the best model for multiplication.",
                                    content: [{ type: "visual", whole: 1, num: 1, den: 3 }],
                                    correct: false,
                                },
                                {
                                    id: "opt3",
                                    visual: true,
                                    content: [{ type: "visual-repeat", count: 2, num: 1, den: 3 }],
                                    correct: false,
                                },
                            ],
                        },
                        {
                            instruction:
                                "Brett divided 25 ounces of water equally between his 2 rabbits. How many ounces did each rabbit receive?",
                            type: "mixed_row",
                            problems: [{ segments: [{ type: "mixed_group", ans: 12.5 }] }],
                        },
                    ],
                },
            ],
        },
        {
            weekNum: 2,
            days: [
                {
                    id: "m2-w2-mon",
                    name: "Mon",
                    title: "Mixed Number Multiplication",
                    sections: [
                        {
                            instruction: "Enter the product.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "mixed", w: "1", n: "1", d: "2" },
                                        { type: "text", val: " x " },
                                        { type: "fraction", n: "3", d: "5" },
                                        { type: "text", val: " = " },
                                        { type: "fraction_group", ans: 0.9 },
                                    ],
                                },
                            ],
                        },
                        {
                            instruction: [
                                { type: "text", val: "Karen cooked " },
                                { type: "fraction", n: "1", d: "4" },
                                { type: "text", val: " of the amount Aaron cooked. Aaron cooked " },
                                { type: "mixed", w: "2", n: "1", d: "3" },
                                { type: "text", val: " cups. Enter the amount Karen cooked." },
                            ],
                            type: "mixed_row",
                            problems: [{ segments: [{ type: "fraction_group", ans: 0.58333 }] }],
                        },
                    ],
                },
                {
                    id: "m2-w2-tue",
                    name: "Tue",
                    title: "Interpreting Division",
                    sections: [
                        {
                            instruction: "Enter the product.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "text", val: "7 x " },
                                        { type: "fraction", n: "1", d: "2" },
                                        { type: "text", val: " = " },
                                        { type: "mixed_group", ans: 3.5 },
                                    ],
                                },
                            ],
                        },
                        {
                            instruction: "Which expression is equal to: ",
                            instructionMath: [{ type: "fraction", n: "22", d: "4" }],
                            type: "multiple_choice",
                            options: [
                                { id: "opt1", content: [{ type: "text", val: "22 + 4" }], correct: false },
                                { id: "opt2", content: [{ type: "text", val: "22 - 4" }], correct: false },
                                { id: "opt3", content: [{ type: "text", val: "22 x 4" }], correct: false },
                                { id: "opt4", content: [{ type: "text", val: "22 ÷ 4" }], correct: true },
                            ],
                        },
                    ],
                },
                {
                    id: "m2-w2-wed",
                    name: "Wed",
                    title: "Fraction of a Whole",
                    sections: [
                        {
                            instruction: "Enter the product.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "fraction", n: "2", d: "3" },
                                        { type: "text", val: " x " },
                                        { type: "fraction", n: "3", d: "8" },
                                        { type: "text", val: " = " },
                                        { type: "fraction_group", ans: 0.25 },
                                    ],
                                },
                            ],
                        },
                        {
                            instruction: [
                                { type: "text", val: "There are 24 students in a class. " },
                                { type: "fraction", n: "3", d: "8" },
                                { type: "text", val: " of them buy lunch. How many students buy lunch?" },
                            ],
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "text", val: "Students: " },
                                        { type: "whole_number", ans: 9 },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "m2-w2-thu",
                    name: "Thu",
                    title: "Division Expressions",
                    sections: [
                        {
                            instruction: "Enter the quotient.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "text", val: "5 ÷ " },
                                        { type: "fraction", n: "1", d: "4" },
                                        { type: "text", val: " = " },
                                        { type: "whole_number", ans: 20 },
                                    ],
                                },
                            ],
                        },
                        {
                            instruction: "Which value is equivalent to: ",
                            instructionMath: [{ type: "text", val: "25 ÷ 2" }],
                            type: "multiple_choice",
                            options: [
                                { id: "opt1", content: [{ type: "fraction", n: "1", d: "2" }], correct: false },
                                { id: "opt2", content: [{ type: "fraction", n: "2", d: "25" }], correct: false },
                                { id: "opt3", content: [{ type: "fraction", n: "25", d: "2" }], correct: true },
                            ],
                        },
                    ],
                },
                {
                    id: "m2-w2-fri",
                    name: "Fri",
                    title: "Module Quiz",
                    sections: [
                        {
                            instruction: "Which expression is equal to: ",
                            instructionMath: [{ type: "fraction", n: "5", d: "8" }],
                            type: "multiple_choice",
                            options: [
                                { id: "opt1", content: [{ type: "text", val: "5 x 8" }], correct: false },
                                { id: "opt2", content: [{ type: "text", val: "5 ÷ 8" }], correct: true },
                                { id: "opt3", content: [{ type: "text", val: "8 ÷ 5" }], correct: false },
                            ],
                        },
                        {
                            instruction: [
                                {
                                    type: "text",
                                    val: "Mandy divided 1 gallon of water equally among 4 friends. How many gallons did each friend receive?",
                                },
                            ],
                            type: "mixed_row",
                            problems: [{ segments: [{ type: "fraction_group", ans: 0.25 }] }],
                        },
                        {
                            instruction: "Which fraction model best represents: ",
                            instructionMath: [
                                { type: "text", val: "3" },
                                { type: "text", val: " x " },
                                { type: "fraction", n: "1", d: "4" },
                            ],
                            type: "multiple_choice",
                            options: [
                                {
                                    id: "opt1",
                                    visual: true,
                                    content: [{ type: "pie-repeat", count: 3, num: 1, den: 4 }],
                                    correct: true,
                                },
                                {
                                    id: "opt2",
                                    visual: true,
                                    warning: "This shows the correct total, but not the best model for multiplication.",
                                    content: [{ type: "pie", whole: 0, num: 3, den: 4 }],
                                    correct: false,
                                },
                                {
                                    id: "opt3",
                                    visual: true,
                                    content: [{ type: "pie-repeat", count: 4, num: 1, den: 3 }],
                                    correct: false,
                                },
                                {
                                    id: "opt4",
                                    visual: true,
                                    content: [{ type: "pie-repeat", count: 3, num: 1, den: 2 }],
                                    correct: false,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};