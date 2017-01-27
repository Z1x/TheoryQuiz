function Question(question, ans1, ans2, ans3, correctAnswer, isCorrect) {
    this.question = question,
        this.ans1 = ans1,
        this.ans2 = ans2,
        this.ans3 = ans3,
        this.correctAnswer = correctAnswer,

        this.isCorrect = false;
}



Question.prototype.display = function () {
    //display the current question
    theQuestion.innerHTML = this.question;
    button1.innerHTML = this.ans1;
    button2.innerHTML = this.ans2;
    button3.innerHTML = this.ans3;

}


Question.prototype.answer = function (number) {
    //check if the answer is correct
    var ans = 'ans' + number;
    ans = this[ans];

    if (ans == this.correctAnswer) {
        this.isCorrect = true;
        result.push('Question ' + (questionNumber + 1) + ': Your answer: ' + ans + '. You got it!');
    } else {
        result.push('Question ' + (questionNumber + 1) + ': Your answer: ' + ans + '. Correct answer: ' + this.correctAnswer + '.');

    }

    questionNumber++;
    currentQuestion();

}

function currentQuestion() {
    if (questionNumber > questions.length - 1) {
        var numberOfCorrect = 0
        for (var index = 0; index < questions.length; index++) {
            if (questions[index].isCorrect) {
                console.log(numberOfCorrect)
                numberOfCorrect++;
            }
        }
        theQuestion.innerHTML = 'Game Over. Your score is: ' + numberOfCorrect;
        button1.innerHTML = 'Startover';
        button2.innerHTML = 'View Result';
        button3.innerHTML = 'View All Questions';
    } else {
        questions[questionNumber].display();
    }

}

function prevQuestion() {
    if (questionNumber <= 0) {
        return;
    }
    
    list.innerHTML = '';
    questionNumber--;
    questions[questionNumber].isCorrect = false;
    result.pop();
    currentQuestion();
}

function nextQuestion() {
    if (questionNumber > questions.length - 1) {
        return;
    }
    
    questions[questionNumber].isCorrect = false;
    questionNumber++;
    result.push('Question ' + (questionNumber) + ': You skipped it.');
    currentQuestion();
}


function end(number) {
    if (number == '1') {
        for (var index = 0; index < questions.length; index++) {
            questions[index].isCorrect = false;
        }
        list.innerHTML = '';
        questionNumber = 0;
        result = [];
        questions = shuffle(questions);
        currentQuestion();
    } else if (number == '2') {
        list.innerHTML = '';
        for (var index = 0; index < result.length; index++) {
            var ele = result[index];
            list.innerHTML += ele + '<br>';
        }
    } else {
        list.innerHTML = '';
        for (var index = 0; index < questions.length; index++) {
            var ele = questions[index].question;
            list.innerHTML += ele + '<br>';
        }
    }
}

var questionNumber = 0;
var result = [];
var questions = [
    new Question('For what does "DNS" stand ?', 'Data Name System', 'Domain Name System', 'Data Name Service', 'Domain Name System'),
    new Question('For what is "DNS" ?', 'Takes requests for a specific domain name, and as a response it returns that domain\'s IP if it can find it', 'Creates new domain names and sends them', 'Keeps data stored until the client needs it and then it\'s deleted', 'Takes requests for a specific domain name, and as a response it returns that domain\'s IP if it can find it'),
    new Question('How does "DNS" work ?', 'If it doesn\'t find the IP,  it sends error', 'Data stays there and when it\'s called it returns to it\'s server and brings the old data back', 'It first searches for the IP of the domains it knows, then if it doesn\'t find it, it "asks" other DNS\'s and returns response', 'It first searches for the IP of the domains it knows, then if it doesn\'t find it, it "asks" other DNS\'s and returns response'),
    new Question('For what does "HTTP" stand ?', 'Hyperlink Tracking Protocol', 'Hyperlink Transfer Protocol', 'Hypertext Transfer Protocol', 'Hypertext Transfer Protocol'),
    new Question('What is "HTTP" ?', 'Structure of hypertexts used to exchange hypertext between nodes using hyperlinks', 'Tracks hyperlinks and retrives them', 'It\'s just the standart for sites to begin like that so they\'re connected to the internet', 'Structure of hypertexts used to exchange hypertext between nodes using hyperlinks'),
    new Question('What is Hypertext ?', 'HTML source code', 'Text that is able to move in the document', 'Text which contains links to other texts', 'Text which contains links to other texts'),
    new Question('What is Hyperlink ?', 'The place where you search for sites', 'Reference to data', 'Linking two documents in the source code', 'Reference to data'),
    new Question('To what "Node" refers ?', 'All devices that have their own IP are nodes', 'JS library', 'A place where you are able to type text', 'All devices that have their own IP are nodes'),
    new Question('For what does "URL" stand ?', 'Unique Resource Locator', 'Uniform Resource Locator', 'Uniform Referent Link', 'Uniform Resource Locator'),
    new Question('What is "Web Resource" ?', 'Data base information', 'Unique www style that keeps every file defines them', 'Primitive archiecture to www and is used in the definition of the fundamental elements', 'Primitive archiecture to www and is used in the definition of the fundamental elements'),
    new Question('What is "Computer Network" ?', 'When many computers are connected to one network(LAN)', 'Allows communication between nodes to exchange resource', 'The same meaning as WWW', 'Allows communication between nodes to exchange resource'),
    new Question('What is "Domain name" ?', 'Only servers have domain names, that\'s how sites reach them', 'That\'s the name of the machine, every machine have their own domain name', 'Name for web server, that allows them to have their own idenity', 'Name for web server, that allows them to have their own idenity'),
    new Question('What is "PORT" ?', 'Where all the web resources are send and stored', 'Shows what kind of files are send whithin the URL', 'The place files first go to be checked before send to the place they were going', 'Shows what kind of files are send whithin the URL'),
    new Question('What is  "resource" in a URL ?', 'Points at specific place whitin a web site', 'Shows how many files are connected to the site', 'Used for visitors to see where they are', 'Points at specific place whitin a web site'),
    new Question('What is  "parameter" in a URL ?', 'Used for functions', 'Used to define how the current page should work', 'Same as "resource"', 'Used to define how the current page should work'),
    new Question('Why do we need to escape characters ? ', 'Because some characters are not supported', 'We don\'t really need to', 'Some characters are pre-defined and need to be escaped if you don\'t want them to do anything special', 'Some characters are pre- defined and need to be escaped if you don\'t want them to do anything special'),
    new Question('How to escape characters ?', 'Two spaces before the character', 'Many ways, more common is a forward slash', 'Two ways: inside brackets or .escape after the character', 'Many ways, more common is a forward slash'),
    new Question('What is a "Response Status" ?', 'Numbers defining the status of the request', 'Checks if you\'re connected to the internet', 'Update news', 'Numbers defining the status of the request'),
    new Question('What does the response status between 100-200 mean in HTTP ?', 'OK', 'Rediraction', 'Information', 'Information'),
    new Question('What does the response status between 200-300 mean in HTTP ?', 'Rediraction', 'OK', 'Client error', 'OK'),
    new Question('What does the response status between 300-400 mean in HTTP ?', 'Information', 'Server error', 'Rediraction', 'Rediraction'),
    new Question('What does the response status between 400-500 mean in HTTP ?', 'Client error', 'OK', 'Information', 'Client error'),
    new Question('What does the response status 500+ mean in HTTP ?', 'Server error', 'Client error', 'Rediraction', 'Server error'),
    new Question('What is to "Parse" a code ?', 'Turning string to number', 'Turning data in other kind of data', 'combines characters into one', 'Turning data in other kind of data'),
    new Question('What is the difference between relative and absolute path ?', 'There is no big difference, just different syntax', 'Relative path searches through the node while absolute through the internet', 'Relative path is the path from the current file to another, while absolute is a full adress to the file', 'Relative path is the path from the current file to another, while absolute is a full adress to the file'),
    new Question('What is "Compilator" ?', 'Program that transforms the source code into a code that is understood by the machine', 'Puts the code at one place so it\'s easier to read', 'When the code is for a machine and you type it with words a human can understand', 'Program that transforms the source code into a code that is understood by the machine'),
    new Question('What is "Interpreter" ?', 'Program that transforms your code to look like similar code', 'Program that renders the code directly', 'Program that transforms the source code into a code that is understood by the machine', 'Program that renders the code directly'),
    new Question('For what does "OOP" stand ?', 'Oriented-Object Programming', 'Ordinary-Oriented Protocol', 'Object-Oriented Programming', 'Object-Oriented Programming'),
    new Question('What is "OOP" ?', 'Type of computer programming in which programmers define not only the data type of a data structure, but also the types of operations (functions) that can be applied to the data structure', 'Code that allows the creation of objects', 'When a web site uses its resources and parameters to reach the server and use the physical server to get back a response', 'Type of computer programming in which programmers define not only the data type of a data structure, but also the types of operations (functions) that can be applied to the data structure'),
    new Question('Difference between HTTP and HTTPS ?', 'Only encrypts code exchanged between client and server', 'Tracks every interaction you do with a server', 'In HTTPS the relationsip between Client and Server are encrypted and use certificates', 'In HTTPS the relationsip between Client and Server are encrypted and use certificates'),
    new Question('For what are the CSS Selectors ?', 'So when the browser reader goes through them, it knows what are for', 'To select different kind of elements, and apply style to them or use JS on them', 'To add styles to them', 'To select different kind of elements, and apply style to them or use JS on them'),
    new Question('For what is "Stack"  in JavaScript ?', 'For references and function frames', 'All the primitive data and references are saved to it and function frames are created whithin it', 'Only for primitive data types', 'All the primitive data and references are saved to it and function frames are created whithin it'),
    new Question('For what "Heap" in JavaScipt ?', 'Another name for "Stack"', 'All primitive data types are saved in it', 'All referent data types are saved inside it', 'All referent data types are saved inside it'),
    new Question('What is "Stack"  in JavaScript ?', 'Web server', 'Place whithin the RAM', 'Data base', 'Place whithin the RAM'),
    new Question('What is "Heap" in JavaSript ?', 'Another word for "Cache"', 'Web site', 'Place whithin the RAM', 'Place whithin the RAM'),
    new Question('How many Scopes there are ?', '3', '2', '4', '2'),
    new Question('What does a "Local Scope" mean ?', 'A place where declarations whithin functions only "live"', 'Place whitin loops', 'All declarations made in server code', 'A place where declarations whithin functions only "live"'),
    new Question('What does a "Global Scope" mean ?', 'Used for regular expressions', 'Usually it\'s connected to a web server which holds it and it keeps all the data for a site', 'A place where all declarations made outside of functions are, and are able to be seen from everywhere', 'A place where all declarations made outside of functions are, and are able to be seen from everywhere'),
    new Question('What is a "Reference" ?', 'When someone reads your code', 'Another name for objects', 'Something that points to another thing', 'Something that points to another thing'),
    new Question('How many data types there are ?', '3', '2', '4', ' 2'),
    new Question('How many primitive data types there are ?', '1-3', '4', '5-6', '5-6'),
    new Question('Arrays are ?', 'Primitive data type', 'Objects', 'Special strings', 'Objects'),
    new Question('Which of the following are only primitive data types: 1 - null, string, number  2 - array, undefined, boolean 3 - boolean, undefined, null ?', '1', '2', '1 and 3', '1 and 3'),
    new Question('What is JS ?', 'JavaScript is a lightweight, interpreted programming language with object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages', 'Same as Java', 'Server-side only language', 'JavaScript is a lightweight, interpreted programming language with object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages'),
    new Question('What is an Operator ?', 'Does math with numbers', 'Character(s) that usually are used to assign, compare values or perform some kind of operation between expressions', 'Does math with numbers and it\s able to combine strings and work with binary', 'Character(s) that usually are used to assign, compare values or perform some kind of operation between expressions'),
    new Question('How many types of Operators there are ?', '1-5', '6-9', '10-12', '10-12'),
    new Question('What is a "Cache" ?', 'Same as "Heap"', 'It\'s a folder in a program that keeps data base stats', 'A place where the machine or browser saves commonly used data so it can reach them faster next time', 'A place where the machine or browser saves commonly used data so it can reach them faster next time'),
    new Question('What is "Iteration" ?', 'Block of code that uses repetition of numbers', 'Many characters one after another', 'Every code block with numbers', 'Block of code that uses repetition of numbers'),
    new Question('What is "Recursion" ?', 'A function that calls itself', 'Function that uses another function', 'Function that uses another function as a parameter', 'A function that calls itself'),
    new Question('Are those statements about what JS features is correct: 1 - JavaScript is is omplementary to and integrated with HTML  2 - JavaScript is open and cross-platform ?', '1', '2', 'Both', 'Both '),
    new Question('What is an advantage in JS ?', 'No fast feedback, that means less bugs', 'Less server iteraction', 'Simple interfaces', 'Less server iteraction'),
    new Question('Is JS case-sensative ?', 'Yes', 'No', 'Depends', 'Yes'),
    new Question('Which brackets are used to create an object in JS ?', '{}', '()', '[]', '{}')
];



function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

list = document.getElementById('list');
theQuestion = document.getElementById("question");
button1 = document.getElementById('answer1');
button2 = document.getElementById('answer2');
button3 = document.getElementById('answer3');

questions = shuffle(questions);
currentQuestion();

