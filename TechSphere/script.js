const questions = [
    {
        category: "Python",
        question: "Which keyword is used to define a function in Python?",
        answers: ["function", "def", "func", "define"],
        correct: 1
    },
    {
        category: "Python",
        question: "Which Python type stores an ordered collection that can be changed?",
        answers: ["Tuple", "Set", "List", "String"],
        correct: 2
    },
    {
        category: "Python",
        question: "Which symbol is used for comments in Python?",
        answers: ["//", "#", "/*", "--"],
        correct: 1
    },
    {
        category: "Python",
        question: "Which function returns the number of items in an object?",
        answers: ["count()", "size()", "length()", "len()"],
        correct: 3
    },
    {
        category: "Python",
        question: "Which type stores key and value pairs?",
        answers: ["List", "Tuple", "Dictionary", "Set"],
        correct: 2
    },
    {
        category: "Python",
        question: "What is the result of 10 // 3 in Python?",
        answers: ["3", "3.33", "1", "4"],
        correct: 0
    },
    {
        category: "Python",
        question: "Which keyword handles exceptions?",
        answers: ["catch", "error", "except", "handle"],
        correct: 2
    },
    {
        category: "Python",
        question: "Which function displays output in Python?",
        answers: ["display()", "print()", "show()", "output()"],
        correct: 1
    },
    {
        category: "Python",
        question: "Which keyword creates a class?",
        answers: ["object", "class", "struct", "new"],
        correct: 1
    },
    {
        category: "Python",
        question: "Which collection does not allow duplicate values?",
        answers: ["List", "Tuple", "Set", "Dictionary"],
        correct: 2
    },

    {
        category: "JavaScript",
        question: "Which keyword declares a block scoped variable?",
        answers: ["var", "let", "define", "value"],
        correct: 1
    },
    {
        category: "JavaScript",
        question: "Which keyword declares a constant?",
        answers: ["constant", "let", "const", "fixed"],
        correct: 2
    },
    {
        category: "JavaScript",
        question: "Which method adds an item to the end of an array?",
        answers: ["push()", "add()", "append()", "insert()"],
        correct: 0
    },
    {
        category: "JavaScript",
        question: "Which method removes the last array item?",
        answers: ["remove()", "delete()", "pop()", "last()"],
        correct: 2
    },
    {
        category: "JavaScript",
        question: "Which operator checks strict equality?",
        answers: ["=", "==", "===", "!="],
        correct: 2
    },
    {
        category: "JavaScript",
        question: "Which object represents the web page?",
        answers: ["window", "document", "page", "html"],
        correct: 1
    },
    {
        category: "JavaScript",
        question: "Which method selects an element by its ID?",
        answers: [
            "getElementById()",
            "selectById()",
            "findId()",
            "getId()"
        ],
        correct: 0
    },
    {
        category: "JavaScript",
        question: "Which method converts JSON text into an object?",
        answers: [
            "JSON.parse()",
            "JSON.object()",
            "JSON.convert()",
            "JSON.read()"
        ],
        correct: 0
    },
    {
        category: "JavaScript",
        question: "Which method converts an object into JSON text?",
        answers: [
            "JSON.convert()",
            "JSON.stringify()",
            "JSON.parse()",
            "JSON.text()"
        ],
        correct: 1
    },
    {
        category: "JavaScript",
        question: "What does DOM stand for?",
        answers: [
            "Data Object Model",
            "Document Object Model",
            "Digital Object Method",
            "Document Order Model"
        ],
        correct: 1
    },

    {
        category: "HTML",
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Markup Language",
            "Home Text Markup Language"
        ],
        correct: 0
    },
    {
        category: "HTML",
        question: "Which tag creates the largest heading?",
        answers: ["<h6>", "<head>", "<h1>", "<heading>"],
        correct: 2
    },
    {
        category: "HTML",
        question: "Which tag creates a hyperlink?",
        answers: ["<link>", "<a>", "<href>", "<url>"],
        correct: 1
    },
    {
        category: "HTML",
        question: "Which tag displays an image?",
        answers: ["<picture>", "<image>", "<img>", "<src>"],
        correct: 2
    },
    {
        category: "HTML",
        question: "Which attribute provides alternative image text?",
        answers: ["src", "alt", "title", "text"],
        correct: 1
    },
    {
        category: "HTML",
        question: "Which tag creates an unordered list?",
        answers: ["<ol>", "<list>", "<ul>", "<li>"],
        correct: 2
    },
    {
        category: "HTML",
        question: "Which tag creates a table row?",
        answers: ["<td>", "<table-row>", "<tr>", "<row>"],
        correct: 2
    },
    {
        category: "HTML",
        question: "Which tag defines a paragraph?",
        answers: ["<paragraph>", "<p>", "<text>", "<para>"],
        correct: 1
    },
    {
        category: "HTML",
        question: "Which tag contains metadata?",
        answers: ["<meta>", "<body>", "<data>", "<info>"],
        correct: 0
    },
    {
        category: "HTML",
        question: "Which element contains visible page content?",
        answers: ["<head>", "<body>", "<main>", "<content>"],
        correct: 1
    },

    {
        category: "CSS",
        question: "What does CSS stand for?",
        answers: [
            "Cascading Style Sheets",
            "Computer Style System",
            "Creative Style Syntax",
            "Colorful Style Sheets"
        ],
        correct: 0
    },
    {
        category: "CSS",
        question: "Which property changes text color?",
        answers: ["font-color", "text-color", "color", "foreground"],
        correct: 2
    },
    {
        category: "CSS",
        question: "Which property changes the background color?",
        answers: ["background-color", "bgcolor", "background-style", "color"],
        correct: 0
    },
    {
        category: "CSS",
        question: "Which property controls text size?",
        answers: ["text-size", "font-size", "size", "font-height"],
        correct: 1
    },
    {
        category: "CSS",
        question: "Which layout system uses rows and columns?",
        answers: ["Flexbox", "Grid", "Float", "Position"],
        correct: 1
    },
    {
        category: "CSS",
        question: "Which property creates rounded corners?",
        answers: ["corner-radius", "border-radius", "round", "radius"],
        correct: 1
    },
    {
        category: "CSS",
        question: "Which property controls space inside an element?",
        answers: ["margin", "padding", "spacing", "inside"],
        correct: 1
    },
    {
        category: "CSS",
        question: "Which property controls space outside an element?",
        answers: ["margin", "padding", "outside", "gap"],
        correct: 0
    },
    {
        category: "CSS",
        question: "Which property changes the position method?",
        answers: ["position", "place", "location", "display"],
        correct: 0
    },
    {
        category: "CSS",
        question: "Which property creates a shadow around an element?",
        answers: ["shadow", "box-shadow", "element-shadow", "border-shadow"],
        correct: 1
    },

    {
        category: "SQL",
        question: "Which command reads data from a database?",
        answers: ["GET", "READ", "SELECT", "FETCH"],
        correct: 2
    },
    {
        category: "SQL",
        question: "Which command adds new rows?",
        answers: ["ADD", "INSERT", "CREATE", "NEW"],
        correct: 1
    },
    {
        category: "SQL",
        question: "Which command changes existing rows?",
        answers: ["CHANGE", "MODIFY", "UPDATE", "ALTER"],
        correct: 2
    },
    {
        category: "SQL",
        question: "Which command removes rows?",
        answers: ["REMOVE", "DELETE", "DROP", "CLEAR"],
        correct: 1
    },
    {
        category: "SQL",
        question: "Which command creates a database table?",
        answers: ["MAKE TABLE", "CREATE TABLE", "NEW TABLE", "BUILD TABLE"],
        correct: 1
    },
    {
        category: "SQL",
        question: "Which keyword removes duplicate query results?",
        answers: ["UNIQUE", "DISTINCT", "ONLY", "FILTER"],
        correct: 1
    },
    {
        category: "SQL",
        question: "Which clause filters rows?",
        answers: ["FILTER", "WHERE", "CHECK", "SELECT"],
        correct: 1
    },
    {
        category: "SQL",
        question: "Which clause sorts results?",
        answers: ["SORT BY", "ORDER BY", "ARRANGE BY", "GROUP BY"],
        correct: 1
    },
    {
        category: "SQL",
        question: "Which clause groups rows?",
        answers: ["GROUP BY", "COLLECT BY", "ORDER BY", "MERGE BY"],
        correct: 0
    },
    {
        category: "SQL",
        question: "Which key uniquely identifies a row?",
        answers: ["Foreign Key", "Primary Key", "Unique Row", "Main Key"],
        correct: 1
    },

    {
        category: "OOP",
        question: "What does OOP stand for?",
        answers: [
            "Object Oriented Programming",
            "Object Operating Process",
            "Open Object Programming",
            "Organized Object Process"
        ],
        correct: 0
    },
    {
        category: "OOP",
        question: "Which concept hides internal implementation details?",
        answers: ["Inheritance", "Abstraction", "Polymorphism", "Compilation"],
        correct: 1
    },
    {
        category: "OOP",
        question: "Which concept allows one class to use another class's features?",
        answers: ["Inheritance", "Encapsulation", "Abstraction", "Casting"],
        correct: 0
    },
    {
        category: "OOP",
        question: "Which concept means one interface can have different implementations?",
        answers: ["Inheritance", "Polymorphism", "Encapsulation", "Compilation"],
        correct: 1
    },
    {
        category: "OOP",
        question: "Which concept bundles data and methods?",
        answers: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
        correct: 0
    },
    {
        category: "OOP",
        question: "What is an instance of a class called?",
        answers: ["Method", "Object", "Function", "Module"],
        correct: 1
    },
    {
        category: "OOP",
        question: "Which method is commonly used to initialize a Python object?",
        answers: ["start()", "__init__()", "create()", "main()"],
        correct: 1
    },
    {
        category: "OOP",
        question: "Which keyword refers to the current object in Java?",
        answers: ["self", "this", "current", "object"],
        correct: 1
    },
    {
        category: "OOP",
        question: "Which access level is generally intended for class internals?",
        answers: ["Private", "Public", "Global", "Open"],
        correct: 0
    },
    {
        category: "OOP",
        question: "Which OOP concept is represented by parent and child classes?",
        answers: ["Abstraction", "Inheritance", "Polymorphism", "Encapsulation"],
        correct: 1
    },

    {
        category: "DSA",
        question: "Which data structure follows LIFO?",
        answers: ["Queue", "Stack", "Array", "Graph"],
        correct: 1
    },
    {
        category: "DSA",
        question: "Which data structure follows FIFO?",
        answers: ["Stack", "Queue", "Tree", "Heap"],
        correct: 1
    },
    {
        category: "DSA",
        question: "Which structure stores elements in indexed positions?",
        answers: ["Array", "Graph", "Tree", "Stack"],
        correct: 0
    },
    {
        category: "DSA",
        question: "Which algorithm is commonly used to find an item in a sorted array?",
        answers: ["Linear Search", "Binary Search", "Bubble Sort", "DFS"],
        correct: 1
    },
    {
        category: "DSA",
        question: "What is the average time complexity of binary search?",
        answers: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
        correct: 1
    },
    {
        category: "DSA",
        question: "Which traversal uses a queue in a graph?",
        answers: ["DFS", "BFS", "Binary Search", "Merge Sort"],
        correct: 1
    },
    {
        category: "DSA",
        question: "Which traversal commonly uses a stack?",
        answers: ["BFS", "DFS", "Heap Sort", "Counting"],
        correct: 1
    },
    {
        category: "DSA",
        question: "Which structure represents hierarchical data?",
        answers: ["Tree", "Array", "Queue", "Stack"],
        correct: 0
    },
    {
        category: "DSA",
        question: "Which sorting algorithm has average O(n log n) complexity?",
        answers: ["Bubble Sort", "Merge Sort", "Linear Search", "Selection Scan"],
        correct: 1
    },
    {
        category: "DSA",
        question: "Which notation describes an algorithm's growth rate?",
        answers: ["Big O", "Small O", "Code O", "Growth X"],
        correct: 0
    },

    {
        category: "Git",
        question: "Which command creates a Git repository?",
        answers: ["git start", "git init", "git create", "git new"],
        correct: 1
    },
    {
        category: "Git",
        question: "Which command shows changed files?",
        answers: ["git status", "git changes", "git files", "git check"],
        correct: 0
    },
    {
        category: "Git",
        question: "Which command stages files?",
        answers: ["git stage", "git add", "git prepare", "git save"],
        correct: 1
    },
    {
        category: "Git",
        question: "Which command creates a commit?",
        answers: ["git save", "git commit", "git push", "git record"],
        correct: 1
    },
    {
        category: "Git",
        question: "Which command uploads local commits?",
        answers: ["git upload", "git send", "git push", "git publish"],
        correct: 2
    },
    {
        category: "Git",
        question: "Which command downloads remote commits?",
        answers: ["git pull", "git download", "git fetchall", "git receive"],
        correct: 0
    },
    {
        category: "Git",
        question: "Which command displays commit history?",
        answers: ["git history", "git log", "git commits", "git list"],
        correct: 1
    },
    {
        category: "Git",
        question: "Which file is commonly used to ignore files?",
        answers: [".gitignore", ".ignore", "git.ignore", "ignore.txt"],
        correct: 0
    },
    {
        category: "Git",
        question: "What is GitHub mainly used for?",
        answers: [
            "Hosting and collaborating on code",
            "Editing videos",
            "Creating databases",
            "Running operating systems"
        ],
        correct: 0
    },
    {
        category: "Git",
        question: "Which command creates a new branch?",
        answers: ["git branch", "git newbranch", "git create", "git split"],
        correct: 0
    },

    {
        category: "Web",
        question: "What does HTTP stand for?",
        answers: [
            "HyperText Transfer Protocol",
            "High Transfer Text Process",
            "Hyper Tool Transfer Program",
            "Host Text Transfer Protocol"
        ],
        correct: 0
    },
    {
        category: "Web",
        question: "Which HTTP method is commonly used to retrieve data?",
        answers: ["POST", "GET", "PUT", "DELETE"],
        correct: 1
    },
    {
        category: "Web",
        question: "Which HTTP method commonly creates data?",
        answers: ["GET", "POST", "DELETE", "HEAD"],
        correct: 1
    },
    {
        category: "Web",
        question: "Which HTTP status means success?",
        answers: ["200", "301", "404", "500"],
        correct: 0
    },
    {
        category: "Web",
        question: "What does HTTP 404 usually mean?",
        answers: [
            "Server error",
            "Unauthorized",
            "Not found",
            "Success"
        ],
        correct: 2
    },
    {
        category: "Web",
        question: "What does HTTP 500 indicate?",
        answers: [
            "Client success",
            "Server error",
            "Page moved",
            "Not found"
        ],
        correct: 1
    },
    {
        category: "Web",
        question: "Which protocol is used for secure HTTP?",
        answers: ["FTP", "HTTPS", "SMTP", "SSH"],
        correct: 1
    },
    {
        category: "Web",
        question: "What does API stand for?",
        answers: [
            "Application Programming Interface",
            "Application Process Internet",
            "Advanced Programming Input",
            "Application Protocol Interface"
        ],
        correct: 0
    },
    {
        category: "Web",
        question: "Which format is widely used for API data?",
        answers: ["JSON", "TXT", "EXE", "PNG"],
        correct: 0
    },
    {
        category: "Web",
        question: "Which HTTP method is commonly used to delete data?",
        answers: ["GET", "POST", "DELETE", "PATCH"],
        correct: 2
    },

    {
        category: "Backend",
        question: "Which Node.js package manager is commonly used?",
        answers: ["npm", "pip", "gem", "cargo"],
        correct: 0
    },
    {
        category: "Backend",
        question: "Which framework is commonly used with Node.js?",
        answers: ["Express", "Django", "Laravel", "Spring"],
        correct: 0
    },
    {
        category: "Backend",
        question: "Which Python framework is popular for web development?",
        answers: ["Django", "Express", "Spring", "Laravel"],
        correct: 0
    },
    {
        category: "Backend",
        question: "What is a server responsible for?",
        answers: [
            "Responding to client requests",
            "Only styling pages",
            "Only creating images",
            "Only editing documents"
        ],
        correct: 0
    },
    {
        category: "Backend",
        question: "What does REST describe?",
        answers: [
            "A style for networked applications",
            "A database language",
            "A CSS framework",
            "A programming language"
        ],
        correct: 0
    },
    {
        category: "Backend",
        question: "Which layer commonly handles application logic?",
        answers: ["Backend", "Monitor", "Keyboard", "Browser cache"],
        correct: 0
    },
    {
        category: "Backend",
        question: "What is middleware?",
        answers: [
            "Code that runs between request and response handling",
            "A database table",
            "A CSS property",
            "A hardware device"
        ],
        correct: 0
    },
    {
        category: "Backend",
        question: "Which database is relational?",
        answers: ["MySQL", "MongoDB", "Redis", "Neo4j"],
        correct: 0
    },
    {
        category: "Backend",
        question: "Which database is document based?",
        answers: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
        correct: 2
    },
    {
        category: "Backend",
        question: "What is authentication used for?",
        answers: [
            "Verifying identity",
            "Sorting data",
            "Styling pages",
            "Compressing images"
        ],
        correct: 0
    }
];

/* =========================
   ELEMENTS
========================= */

const questionElement =
    document.getElementById("question");

const answerButtons =
    document.getElementById("answerButtons");

const nextButton =
    document.getElementById("nextButton");

const scoreElement =
    document.getElementById("score");

const questionNumber =
    document.getElementById("questionNumber");

const percentage =
    document.getElementById("percentage");

const progressBar =
    document.getElementById("progressBar");

const categoryElement =
    document.getElementById("category");

const quizCard =
    document.getElementById("quizCard");

const resultCard =
    document.getElementById("resultCard");

const finalScore =
    document.getElementById("finalScore");

const resultMessage =
    document.getElementById("resultMessage");

const correctAnswers =
    document.getElementById("correctAnswers");

const wrongAnswers =
    document.getElementById("wrongAnswers");

const percentageResult =
    document.getElementById("percentageResult");

const restartButton =
    document.getElementById("restartButton");

const particles =
    document.getElementById("particles");

/* =========================
   QUIZ STATE
========================= */

let currentQuestion = 0;
let score = 0;
let selected = false;

/* =========================
   START
========================= */

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    selected = false;

    quizCard.classList.remove("hidden");
    resultCard.classList.add("hidden");

    scoreElement.textContent = "0";

    showQuestion();
}

/* =========================
   SHOW QUESTION
========================= */

function showQuestion() {

    selected = false;

    const item = questions[currentQuestion];

    const total = questions.length;
    const number = currentQuestion + 1;
    const percent = Math.round((number / total) * 100);

    questionNumber.textContent =
        `Question ${number} / ${total}`;

    percentage.textContent =
        `${percent}%`;

    progressBar.style.width =
        `${percent}%`;

    categoryElement.textContent =
        item.category.toUpperCase();

    questionElement.textContent =
        item.question;

    answerButtons.innerHTML = "";

    item.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.className =
            "answer-button";

        button.type = "button";

        button.innerHTML = `
            <span class="answer-number">
                ${index + 1}
            </span>

            <span>
                ${answer}
            </span>
        `;

        button.addEventListener(
            "click",
            () => selectAnswer(index, button)
        );

        answerButtons.appendChild(button);
    });

    nextButton.disabled = true;

    if (currentQuestion === total - 1) {
        nextButton.textContent =
            "View Result";
    } else {
        nextButton.textContent =
            "Next Question";
    }
}

/* =========================
   SELECT ANSWER
========================= */

function selectAnswer(index, clickedButton) {

    if (selected) {
        return;
    }

    selected = true;

    const item = questions[currentQuestion];

    const buttons =
        document.querySelectorAll(".answer-button");

    buttons.forEach(button => {
        button.disabled = true;
    });

    if (index === item.correct) {

        clickedButton.classList.add("correct");

        score++;

        scoreElement.textContent =
            score;

    } else {

        clickedButton.classList.add("wrong");

        buttons[item.correct]
            .classList.add("correct");
    }

    nextButton.disabled = false;
}

/* =========================
   NEXT
========================= */

nextButton.addEventListener(
    "click",
    () => {

        if (!selected) {
            return;
        }

        currentQuestion++;

        if (currentQuestion >= questions.length) {
            showResult();
        } else {
            showQuestion();
        }
    }
);

/* =========================
   RESULT
========================= */

function showResult() {

    quizCard.classList.add("hidden");
    resultCard.classList.remove("hidden");

    const total =
        questions.length;

    const wrong =
        total - score;

    const resultPercent =
        Math.round((score / total) * 100);

    finalScore.textContent =
        score;

    correctAnswers.textContent =
        score;

    wrongAnswers.textContent =
        wrong;

    percentageResult.textContent =
        `${resultPercent}%`;

    if (resultPercent >= 90) {

        resultMessage.textContent =
            "Excellent performance. Your technical fundamentals are strong.";

    } else if (resultPercent >= 75) {

        resultMessage.textContent =
            "Great performance. Keep practicing advanced interview topics.";

    } else if (resultPercent >= 60) {

        resultMessage.textContent =
            "Good effort. Strengthen your fundamentals and try again.";

    } else {

        resultMessage.textContent =
            "Keep practicing. Review the fundamentals and take the assessment again.";
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* =========================
   RESTART
========================= */

restartButton.addEventListener(
    "click",
    startQuiz
);

/* =========================
   KEYBOARD
========================= */

document.addEventListener(
    "keydown",
    event => {

        const number =
            Number(event.key);

        if (
            number >= 1 &&
            number <= 4 &&
            !selected
        ) {

            const buttons =
                document.querySelectorAll(
                    ".answer-button"
                );

            if (buttons[number - 1]) {
                buttons[number - 1].click();
            }
        }

        if (
            event.key === "Enter" &&
            !nextButton.disabled
        ) {
            nextButton.click();
        }
    }
);

/* =========================
   MOUSE 3D EFFECT
========================= */

document.addEventListener(
    "mousemove",
    event => {

        if (window.innerWidth < 800) {
            return;
        }

        const x =
            (event.clientX / window.innerWidth) - 0.5;

        const y =
            (event.clientY / window.innerHeight) - 0.5;

        const rotateX =
            y * -5;

        const rotateY =
            x * 7;

        quizCard.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
);

/* Reset 3D card */

document.addEventListener(
    "mouseleave",
    () => {

        quizCard.style.transform =
            "rotateX(0deg) rotateY(0deg)";
    }
);

/* =========================
   PARTICLES
========================= */

function createParticles() {

    const amount =
        window.innerWidth > 1500
            ? 100
            : 55;

    particles.innerHTML = "";

    for (let i = 0; i < amount; i++) {

        const particle =
            document.createElement("span");

        particle.className =
            "particle";

        particle.style.left =
            `${Math.random() * 100}%`;

        particle.style.animationDuration =
            `${5 + Math.random() * 10}s`;

        particle.style.animationDelay =
            `${Math.random() * -10}s`;

        particle.style.opacity =
            `${0.2 + Math.random() * 0.8}`;

        particles.appendChild(particle);
    }
}

/* =========================
   INIT
========================= */

createParticles();

startQuiz();