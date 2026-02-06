const module1 = {
    id: "mod-1",
    name: "Add & Subtract with Equivalent Fractions",
    weeks: [
        {
            weekNum: 1,
            days: [
                {
                    id: "m1-w1-mon",
                    name: "Mon",
                    title: "Module 1: Practice Set 1",
                    sections: [
                        {
                            instruction: "Which set of steps shows a correct strategy and solution for adding: ",
                            instructionMath: [
                                { type: "mixed", w: "2", n: "2", d: "3" },
                                { type: "text", val: "+" },
                                { type: "mixed", w: "1", n: "3", d: "4" },
                            ],
                            type: "multiple_choice",
                            options: [
                                {
                                    id: "opt1",
                                    content: [
                                        { type: "fraction", n: "8 x 4", d: "3 x 4" },
                                        { type: "text", val: "+" },
                                        { type: "fraction", n: "7 x 3", d: "4 x 3" },
                                        { type: "text", val: "=" },
                                        { type: "fraction", n: "32", d: "12" },
                                        { type: "text", val: "+" },
                                        { type: "fraction", n: "21", d: "12" },
                                        { type: "text", val: "=" },
                                        { type: "fraction", n: "53", d: "12" },
                                        { type: "text", val: "=" },
                                        { type: "mixed", w: "4", n: "5", d: "12" },
                                    ],
                                    correct: true,
                                },
                                {
                                    id: "opt2",
                                    content: [
                                        { type: "fraction", n: "2 x 3", d: "3 x 4" },
                                        { type: "text", val: "+" },
                                        { type: "fraction", n: "3 x 4", d: "4 x 3" },
                                        { type: "text", val: "=" },
                                        { type: "fraction", n: "6", d: "12" },
                                        { type: "text", val: "+" },
                                        { type: "fraction", n: "12", d: "12" },
                                        { type: "text", val: "=" },
                                        { type: "fraction", n: "18", d: "12" },
                                        { type: "text", val: "=" },
                                        { type: "mixed", w: "1", n: "6", d: "12" },
                                    ],
                                    correct: false,
                                },
                                {
                                    id: "opt3",
                                    content: [
                                        { type: "text", val: "3" },
                                        { type: "fraction", n: "2+3", d: "3+4" },
                                        { type: "text", val: "=" },
                                        { type: "text", val: "3" },
                                        { type: "fraction", n: "5", d: "7" },
                                    ],
                                    correct: false,
                                },
                                {
                                    id: "opt4",
                                    content: [
                                        { type: "fraction", n: "8", d: "3 x 4" },
                                        { type: "text", val: "+" },
                                        { type: "fraction", n: "7", d: "4 x 3" },
                                        { type: "text", val: "=" },
                                        { type: "fraction", n: "8", d: "12" },
                                        { type: "text", val: "+" },
                                        { type: "fraction", n: "7", d: "12" },
                                        { type: "text", val: "=" },
                                        { type: "fraction", n: "15", d: "12" },
                                    ],
                                    correct: false,
                                },
                            ],
                        },
                        {
                            instruction: "Enter the difference. (Equivalent answers are allowed)",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "fraction", n: "80", d: "100" },
                                        { type: "text", val: " - " },
                                        { type: "fraction", n: "3", d: "10" },
                                        { type: "text", val: " = " },
                                        { type: "fraction_group", ans: 0.5 },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "m1-w1-tue",
                    name: "Tue",
                    title: "Module 1: Practice Set 2",
                    sections: [
                        {
                            instruction: "Enter the sum. (Equivalent answers are allowed)",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "fraction", n: "3", d: "10" },
                                        { type: "text", val: " + " },
                                        { type: "fraction", n: "40", d: "100" },
                                        { type: "text", val: " = " },
                                        { type: "fraction_group", ans: 0.7 },
                                    ],
                                },
                            ],
                        },
                        {
                            instruction: "Enter the sum.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "fraction", n: "2", d: "3" },
                                        { type: "text", val: " + " },
                                        { type: "fraction", n: "1", d: "5" },
                                        { type: "text", val: " = " },
                                        { type: "fraction_group", ans: 0.866 },
                                    ],
                                },
                            ],
                        },
                        {
                            instruction: [
                                { type: "text", val: "Point C is at " },
                                { type: "fraction", n: "2", d: "5" },
                                { type: "text", val: ". Move right " },
                                { type: "fraction", n: "3", d: "10" },
                                { type: "text", val: ". Enter your new location." },
                            ],
                            type: "number_line",
                            min: 0,
                            max: 1,
                            step: 0.1,
                            points: [{ val: 0.4, label: "C" }],
                            problems: [
                                {
                                    segments: [
                                        { type: "text", val: "Location: " },
                                        { type: "fraction_group", ans: 0.7 },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "m1-w1-wed",
                    name: "Wed",
                    title: "Module 1: Practice Set 3",
                    sections: [
                        {
                            instruction: "Which set of steps shows a correct strategy and solution for adding: ",
                            instructionMath: [
                                { type: "mixed", w: "1", n: "1", d: "4" },
                                { type: "text", val: "+" },
                                { type: "fraction", n: "5", d: "6" },
                            ],
                            type: "multiple_choice",
                            options: [
                                {
                                    id: "opt1",
                                    content: [
                                        { type: "fraction", n: "5 x 3", d: "4 x 3" },
                                        { type: "text", val: "+" },
                                        { type: "fraction", n: "5 x 2", d: "6 x 2" },
                                        { type: "text", val: "=" },
                                        { type: "fraction", n: "15", d: "12" },
                                        { type: "text", val: "+" },
                                        { type: "fraction", n: "10", d: "12" },
                                        { type: "text", val: "=" },
                                        { type: "fraction", n: "25", d: "12" },
                                        { type: "text", val: "=" },
                                        { type: "mixed", w: "2", n: "1", d: "12" },
                                    ],
                                    correct: true,
                                },
                                {
                                    id: "opt2",
                                    content: [
                                        { type: "text", val: "1" },
                                        { type: "fraction", n: "1+5", d: "4+6" },
                                        { type: "text", val: "=" },
                                        { type: "text", val: "1" },
                                        { type: "fraction", n: "6", d: "10" },
                                    ],
                                    correct: false,
                                },
                                {
                                    id: "opt3",
                                    content: [
                                        { type: "fraction", n: "5 x 6", d: "4 x 6" },
                                        { type: "text", val: "+" },
                                        { type: "fraction", n: "5 x 4", d: "6 x 4" },
                                        { type: "text", val: "=" },
                                        { type: "fraction", n: "30", d: "24" },
                                        { type: "text", val: "+" },
                                        { type: "fraction", n: "20", d: "24" },
                                        { type: "text", val: "=" },
                                        { type: "fraction", n: "50", d: "24" },
                                    ],
                                    correct: false,
                                },
                            ],
                        },
                        {
                            instruction: "Enter the difference.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "fraction", n: "70", d: "100" },
                                        { type: "text", val: " - " },
                                        { type: "fraction", n: "5", d: "10" },
                                        { type: "text", val: " = " },
                                        { type: "fraction_group", ans: 0.2 },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "m1-w1-thu",
                    name: "Thu",
                    title: "Module 1: Practice Set 4",
                    sections: [
                        {
                            instruction: "Enter the sum.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "fraction", n: "2", d: "100" },
                                        { type: "text", val: " + " },
                                        { type: "fraction", n: "5", d: "10" },
                                        { type: "text", val: " = " },
                                        { type: "fraction_group", ans: 0.52 },
                                    ],
                                },
                            ],
                        },
                        {
                            instruction: "Enter the difference.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "fraction", n: "7", d: "8" },
                                        { type: "text", val: " - " },
                                        { type: "fraction", n: "1", d: "4" },
                                        { type: "text", val: " = " },
                                        { type: "fraction_group", ans: 0.625 },
                                    ],
                                },
                            ],
                        },
                        {
                            instruction: [
                                { type: "text", val: "Point D is at " },
                                { type: "fraction", n: "7", d: "8" },
                                { type: "text", val: ". Move left " },
                                { type: "fraction", n: "1", d: "2" },
                                { type: "text", val: ". Enter your new location." },
                            ],
                            type: "number_line",
                            min: 0,
                            max: 1,
                            step: 0.125,
                            points: [{ val: 0.875, label: "D" }],
                            problems: [
                                {
                                    segments: [
                                        { type: "text", val: "Location: " },
                                        { type: "fraction_group", ans: 0.375 },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "m1-w1-fri",
                    name: "Fri",
                    title: "Module 1: Quiz",
                    sections: [
                        {
                            instruction: "Which set of steps shows a correct strategy and solution for adding: ",
                            instructionMath: [
                                { type: "mixed", w: "2", n: "1", d: "7" },
                                { type: "text", val: "+" },
                                { type: "mixed", w: "1", n: "2", d: "3" },
                            ],
                            type: "multiple_choice",
                            options: [
                                {
                                    id: "opt1",
                                    content: [
                                        { type: "fraction", n: "15 x 3", d: "7 x 3" },
                                        { type: "text", val: "+" },
                                        { type: "fraction", n: "5 x 7", d: "3 x 7" },
                                        { type: "text", val: "=" },
                                        { type: "fraction", n: "45", d: "21" },
                                        { type: "text", val: "+" },
                                        { type: "fraction", n: "35", d: "21" },
                                        { type: "text", val: "=" },
                                        { type: "fraction", n: "80", d: "21" },
                                        { type: "text", val: "=" },
                                        { type: "mixed", w: "3", n: "17", d: "21" },
                                    ],
                                    correct: true,
                                },
                                {
                                    id: "opt2",
                                    content: [
                                        { type: "fraction", n: "15", d: "7 x 3" },
                                        { type: "text", val: "+" },
                                        { type: "fraction", n: "5", d: "3 x 7" },
                                        { type: "text", val: "=" },
                                        { type: "fraction", n: "15", d: "21" },
                                        { type: "text", val: "+" },
                                        { type: "fraction", n: "5", d: "21" },
                                        { type: "text", val: "=" },
                                        { type: "fraction", n: "20", d: "21" },
                                    ],
                                    correct: false,
                                },
                                {
                                    id: "opt3",
                                    content: [
                                        { type: "fraction", n: "1 x 3", d: "7 x 3" },
                                        { type: "text", val: "+" },
                                        { type: "fraction", n: "2 x 7", d: "3 x 7" },
                                        { type: "text", val: "=" },
                                        { type: "fraction", n: "3", d: "21" },
                                        { type: "text", val: "+" },
                                        { type: "fraction", n: "14", d: "21" },
                                        { type: "text", val: "=" },
                                        { type: "fraction", n: "17", d: "21" },
                                    ],
                                    correct: false,
                                },
                            ],
                        },
                        {
                            instruction: "Enter the sum.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "fraction", n: "50", d: "100" },
                                        { type: "text", val: " + " },
                                        { type: "fraction", n: "2", d: "10" },
                                        { type: "text", val: " = " },
                                        { type: "fraction_group", ans: 0.7 },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            weekNum: 2,
            days: [
                {
                    id: "m1-w2-mon",
                    name: "Mon",
                    title: "Module 1: Practice Set 6",
                    sections: [
                        {
                            instruction: "Enter the difference.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "fraction", n: "9", d: "10" },
                                        { type: "text", val: " - " },
                                        { type: "fraction", n: "20", d: "100" },
                                        { type: "text", val: " = " },
                                        { type: "fraction_group", ans: 0.7 },
                                    ],
                                },
                            ],
                        },
                        {
                            instruction: [
                                { type: "text", val: "Liam had " },
                                { type: "mixed", w: "2", n: "1", d: "2" },
                                { type: "text", val: " meters of ribbon. He has " },
                                { type: "mixed", w: "1", n: "1", d: "3" },
                                {
                                    type: "text",
                                    val: " meters left as shown in the model below. Enter the fraction of ribbon he used.",
                                },
                            ],
                            type: "visual_problem",
                            models: [{ label: "Ribbon Left", whole: 1, num: 1, den: 3, color: "#e67e22" }],
                            problems: [
                                {
                                    segments: [
                                        { type: "text", val: "Used: " },
                                        { type: "mixed_group", ans: 1.1666 },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "m1-w2-tue",
                    name: "Tue",
                    title: "Module 1: Practice Set 7",
                    sections: [
                        {
                            instruction: "Enter the sum.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "fraction", n: "4", d: "10" },
                                        { type: "text", val: " + " },
                                        { type: "fraction", n: "45", d: "100" },
                                        { type: "text", val: " = " },
                                        { type: "fraction_group", ans: 0.85 },
                                    ],
                                },
                            ],
                        },
                        {
                            instruction: "Enter the sum.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "fraction", n: "3", d: "4" },
                                        { type: "text", val: " + " },
                                        { type: "fraction", n: "1", d: "6" },
                                        { type: "text", val: " = " },
                                        { type: "fraction_group", ans: 0.9166 },
                                    ],
                                },
                            ],
                        },
                        {
                            instruction: [
                                {
                                    type: "text",
                                    val: "The distance, in miles, Anna walked in the morning is plotted at point A on the number line. Anna walked ",
                                },
                                { type: "fraction", n: "2", d: "5" },
                                {
                                    type: "text",
                                    val: " mile in the afternoon. Enter the total distance, in miles, Anna walked in the morning and afternoon.",
                                },
                            ],
                            type: "number_line",
                            min: 0,
                            max: 1,
                            step: 0.1,
                            points: [{ val: 0.3, label: "A" }],
                            problems: [
                                {
                                    segments: [
                                        { type: "text", val: "Total: " },
                                        { type: "fraction_group", ans: 0.7 },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "m1-w2-wed",
                    name: "Wed",
                    title: "Module 1: Practice Set 8",
                    sections: [
                        {
                            instruction: "Enter the difference.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "fraction", n: "60", d: "100" },
                                        { type: "text", val: " - " },
                                        { type: "fraction", n: "1", d: "10" },
                                        { type: "text", val: " = " },
                                        { type: "fraction_group", ans: 0.5 },
                                    ],
                                },
                            ],
                        },
                        {
                            instruction:
                                "Figure A and Figure B represent bags of soil. The shaded parts show how much of each bag has been used. How many bags of soil have been used combined?",
                            type: "visual_problem",
                            models: [
                                { label: "Figure A", whole: 0, num: 2, den: 3, color: "#e74c3c" },
                                { label: "Figure B", whole: 0, num: 3, den: 4, color: "#f1c40f" },
                            ],
                            problems: [
                                {
                                    segments: [
                                        { type: "text", val: "Total: " },
                                        { type: "mixed_group", ans: 1.4166 },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "m1-w2-thu",
                    name: "Thu",
                    title: "Module 1: Practice Set 9",
                    sections: [
                        {
                            instruction: "Enter the sum.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "fraction", n: "7", d: "10" },
                                        { type: "text", val: " + " },
                                        { type: "fraction", n: "15", d: "100" },
                                        { type: "text", val: " = " },
                                        { type: "fraction_group", ans: 0.85 },
                                    ],
                                },
                            ],
                        },
                        {
                            instruction: "Enter the difference.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "fraction", n: "4", d: "5" },
                                        { type: "text", val: " - " },
                                        { type: "fraction", n: "1", d: "2" },
                                        { type: "text", val: " = " },
                                        { type: "fraction_group", ans: 0.3 },
                                    ],
                                },
                            ],
                        },
                        {
                            instruction: [
                                {
                                    type: "text",
                                    val: "The distance, in miles, Bob walked in the morning is plotted at point B on the number line. Bob walked ",
                                },
                                { type: "fraction", n: "1", d: "4" },
                                {
                                    type: "text",
                                    val: " mile in the afternoon. Enter the total distance, in miles, Bob walked in the morning and afternoon.",
                                },
                            ],
                            type: "number_line",
                            min: 0,
                            max: 1,
                            step: 0.125,
                            points: [{ val: 0.375, label: "B" }],
                            problems: [
                                {
                                    segments: [
                                        { type: "text", val: "Total: " },
                                        { type: "fraction_group", ans: 0.625 },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "m1-w2-fri",
                    name: "Fri",
                    title: "Module 1: Quiz",
                    sections: [
                        {
                            instruction: "Enter the difference.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "fraction", n: "95", d: "100" },
                                        { type: "text", val: " - " },
                                        { type: "fraction", n: "8", d: "10" },
                                        { type: "text", val: " = " },
                                        { type: "fraction_group", ans: 0.15 },
                                    ],
                                },
                            ],
                        },
                        {
                            instruction: [
                                { type: "text", val: "Jane had " },
                                { type: "mixed", w: "2", n: "2", d: "3" },
                                { type: "text", val: " liters of juice. She has " },
                                { type: "mixed", w: "1", n: "1", d: "3" },
                                {
                                    type: "text",
                                    val: " liters left as shown below. Enter the fraction of juice she served.",
                                },
                            ],
                            type: "visual_problem",
                            models: [{ label: "Juice Left", whole: 1, num: 1, den: 3, color: "#9b59b6" }],
                            problems: [
                                {
                                    segments: [
                                        { type: "text", val: "Served: " },
                                        { type: "mixed_group", ans: 1.3333 },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
