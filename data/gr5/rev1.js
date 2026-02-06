const reviewModule = {
    id: "mod-review",
    name: "Interim Review: Fractions & Operations",
    weeks: [
        {
            weekNum: 1,
            days: [
                {
                    id: "rv-w1-mon",
                    name: "Mon",
                    title: "Adding Fractions & Fact Families",
                    sections: [
                        {
                            instruction: "Enter the sum.",
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
                            instruction: "Enter the difference.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "fraction", n: "5", d: "6" },
                                        { type: "text", val: " - " },
                                        { type: "fraction", n: "1", d: "3" },
                                        { type: "text", val: " = " },
                                        { type: "fraction_group", ans: 0.5 },
                                    ],
                                },
                            ],
                        },
                        {
                            instruction: "The equation 32 x 14 = 448 is true. Select all true equations.",
                            type: "multiple_choice",
                            select_all: true,
                            options: [
                                { id: "opt1", content: [{ type: "text", val: "448 ÷ 14 = 32" }], correct: true },
                                { id: "opt2", content: [{ type: "text", val: "14 ÷ 448 = 32" }], correct: false },
                                { id: "opt3", content: [{ type: "text", val: "32 ÷ 448 = 14" }], correct: false },
                                { id: "opt4", content: [{ type: "text", val: "448 ÷ 32 = 14" }], correct: true },
                                { id: "opt5", content: [{ type: "text", val: "14 x 32 = 448" }], correct: true },
                            ],
                        },
                    ],
                },
                {
                    id: "rv-w1-tue",
                    name: "Tue",
                    title: "Subtracting Fractions & Fact Families",
                    sections: [
                        {
                            instruction: "Enter the sum.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "fraction", n: "1", d: "2" },
                                        { type: "text", val: " + " },
                                        { type: "fraction", n: "2", d: "5" },
                                        { type: "text", val: " = " },
                                        { type: "fraction_group", ans: 0.9 },
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
                                        { type: "fraction", n: "80", d: "100" },
                                        { type: "text", val: " - " },
                                        { type: "fraction", n: "2", d: "10" },
                                        { type: "text", val: " = " },
                                        { type: "fraction_group", ans: 0.6 },
                                    ],
                                },
                            ],
                        },
                        {
                            instruction: "The equation 54 x 11 = 594 is true. Select all true equations.",
                            type: "multiple_choice",
                            select_all: true,
                            options: [
                                { id: "opt1", content: [{ type: "text", val: "594 ÷ 54 = 11" }], correct: true },
                                { id: "opt2", content: [{ type: "text", val: "594 x 11 = 54" }], correct: false },
                                { id: "opt3", content: [{ type: "text", val: "11 x 54 = 594" }], correct: true },
                                { id: "opt4", content: [{ type: "text", val: "54 ÷ 594 = 11" }], correct: false },
                                { id: "opt5", content: [{ type: "text", val: "594 ÷ 11 = 54" }], correct: true },
                            ],
                        },
                    ],
                },
                {
                    id: "rv-w1-wed",
                    name: "Wed",
                    title: "Decimal Fractions & Fact Families",
                    sections: [
                        {
                            instruction: "Enter the sum.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "fraction", n: "2", d: "10" },
                                        { type: "text", val: " + " },
                                        { type: "fraction", n: "5", d: "100" },
                                        { type: "text", val: " = " },
                                        { type: "fraction_group", ans: 0.25 },
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
                                        { type: "fraction", n: "3", d: "4" },
                                        { type: "text", val: " - " },
                                        { type: "fraction", n: "1", d: "2" },
                                        { type: "text", val: " = " },
                                        { type: "fraction_group", ans: 0.25 },
                                    ],
                                },
                            ],
                        },
                        {
                            instruction: "The equation 15 x 15 = 225 is true. Select all true equations.",
                            type: "multiple_choice",
                            select_all: true,
                            options: [
                                { id: "opt1", content: [{ type: "text", val: "225 ÷ 15 = 15" }], correct: true },
                                { id: "opt2", content: [{ type: "text", val: "15 ÷ 225 = 15" }], correct: false },
                                { id: "opt3", content: [{ type: "text", val: "225 x 15 = 15" }], correct: false },
                                { id: "opt4", content: [{ type: "text", val: "15 x 15 = 225" }], correct: true },
                                { id: "opt5", content: [{ type: "text", val: "225 - 15 = 15" }], correct: false },
                            ],
                        },
                    ],
                },
                {
                    id: "rv-w1-thu",
                    name: "Thu",
                    title: "Subtracting Fractions & Fact Families",
                    sections: [
                        {
                            instruction: "Enter the sum.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "fraction", n: "1", d: "3" },
                                        { type: "text", val: " + " },
                                        { type: "fraction", n: "1", d: "6" },
                                        { type: "text", val: " = " },
                                        { type: "fraction_group", ans: 0.5 },
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
                                        { type: "fraction", n: "7", d: "10" },
                                        { type: "text", val: " - " },
                                        { type: "fraction", n: "30", d: "100" },
                                        { type: "text", val: " = " },
                                        { type: "fraction_group", ans: 0.4 },
                                    ],
                                },
                            ],
                        },
                        {
                            instruction: "The equation 40 x 20 = 800 is true. Select all true equations.",
                            type: "multiple_choice",
                            select_all: true,
                            options: [
                                { id: "opt1", content: [{ type: "text", val: "800 ÷ 20 = 40" }], correct: true },
                                { id: "opt2", content: [{ type: "text", val: "800 ÷ 40 = 20" }], correct: true },
                                { id: "opt3", content: [{ type: "text", val: "20 ÷ 800 = 40" }], correct: false },
                                { id: "opt4", content: [{ type: "text", val: "20 x 40 = 800" }], correct: true },
                                { id: "opt5", content: [{ type: "text", val: "40 ÷ 800 = 20" }], correct: false },
                            ],
                        },
                    ],
                },
                {
                    id: "rv-w1-fri",
                    name: "Fri",
                    title: "Weekly Review Quiz",
                    sections: [
                        {
                            instruction: "Enter the sum.",
                            type: "mixed_row",
                            problems: [
                                {
                                    segments: [
                                        { type: "fraction", n: "60", d: "100" },
                                        { type: "text", val: " + " },
                                        { type: "fraction", n: "3", d: "10" },
                                        { type: "text", val: " = " },
                                        { type: "fraction_group", ans: 0.9 },
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
                                        { type: "fraction", n: "3", d: "4" },
                                        { type: "text", val: " = " },
                                        { type: "fraction_group", ans: 0.125 },
                                    ],
                                },
                            ],
                        },
                        {
                            instruction: "The equation 12 x 9 = 108 is true. Select all true equations.",
                            type: "multiple_choice",
                            select_all: true,
                            options: [
                                { id: "opt1", content: [{ type: "text", val: "108 ÷ 9 = 12" }], correct: true },
                                { id: "opt2", content: [{ type: "text", val: "12 ÷ 108 = 9" }], correct: false },
                                { id: "opt3", content: [{ type: "text", val: "9 ÷ 108 = 12" }], correct: false },
                                { id: "opt4", content: [{ type: "text", val: "108 ÷ 12 = 9" }], correct: true },
                                { id: "opt5", content: [{ type: "text", val: "9 x 12 = 108" }], correct: true },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
