class letters
{
    constructor(letter, morse)
    {
        this.letter = letter;
        this.morse = morse;
    }
}
var alphabet = 
[
    new letters('a', ".-"),
    new letters('b', "-..."),
    new letters('c', "-.-."),
    new letters('d', "-.."),
    new letters('e', "."),
    new letters('f', "..-."),
    new letters('g', "--."),
    new letters('h', "...."),
    new letters('i', ".."),
    new letters('j', ".---"),
    new letters('k', "-.-"),
    new letters('l', ".-.."),
    new letters('m', "--"),
    new letters('n', "-."),
    new letters('o', "---"),
    new letters('p', ".--."),
    new letters('q', "--.-"),
    new letters('r', ".-."),
    new letters('s', "..."),
    new letters('t', "-"),
    new letters('u', "..-"),
    new letters('v', "...-"),
    new letters('w', ".--"),
    new letters('x', "-..-"),
    new letters('y', "-.--"),
    new letters('z', "--.."),
    new letters('å', ".--.-"),
    new letters('ä', ".-.-"),
    new letters('ö', "---."),
    new letters('0', "-----"),
    new letters('1', ".----"),
    new letters('2', "..---"),
    new letters('3', "...--"),
    new letters('4', "....-"),
    new letters('5', "....."),
    new letters('6', "-...."),
    new letters('7', "--..."),
    new letters('8', "---.."),
    new letters('9', "----."),
    
    new letters('.', ".-.-.-"),
    new letters(',', "--..--"),
    new letters(':', "---..."),
    new letters('?', "..--.."),
    new letters("'", ".----."),
    new letters('-', "-....-"),
    new letters('/', "-..-."),
    new letters('(', "-.--."),
    new letters(')', "-.--.-"),
    new letters('"', ".-..-."),
    new letters('+', ".-.-."),
    new letters('@', ".--.-."),
    new letters('=', "-...-"),
    new letters(' ', "x"),  //This x changes to a </br> or something else later in the script
    
    
];

function morseEncode()
{
    var message = document.getElementById('morseEncoderInput').value;
    message = message.toLowerCase();

    var dot = document.getElementById('replaceDot').value;
    var dash = document.getElementById('replaceDash').value;
    var space = document.getElementById('replaceSpace').value;
    if(dot == "")
    {
        dot = ".";
    }
    if(dash == "")
    {
        dash = "-";
    }
    if(space == "")
    {
        space = "\r\n";
    }
    if(dot == dash || dot == space || dash == space)
    {
        document.getElementById('morseWarning').style.display = "block";
        document.getElementById('morseWarning').innerHTML = "This will be imposible to solve";
    }
    else if(dot.includes(dash) || dot.includes(space) ||
        dash.includes(dot) || dash.includes(space) ||
        space.includes(dot) || space.includes(dash))
    {
        document.getElementById('morseWarning').style.display = "block";
        document.getElementById('morseWarning').innerHTML = "This may be imposible to solve";
    }
    else
    {
        document.getElementById('morseWarning').style.display = "none"; 
    }

    var morseMessage = "";
    for (let i = 0; i < message.length; i++) 
    {
        alphabet.every(letr => {    //Test every letter until correct one found
            if(message[i] == letr.letter)
            {
                morseMessage += (letr.morse + " ");
                return false;
            }
            return true;
            //Give warning if letter wasent founda
        });
    }

    var newMessage = "";
    for (let i = 0; i < morseMessage.length; i++) {
            
        if(morseMessage[i] == ".")
        {
            newMessage += dot;
        }
        else if(morseMessage[i] == "-")
        {
            newMessage += dash;
        }
        else if(morseMessage[i] == " ")
        {
            newMessage += " ";
        }
        else if(morseMessage[i] == "x")
        {
            newMessage += space;
        }
    }

    morseMessage = newMessage;
    outputArea = document.getElementById('morseEncoderOutput');
    outputArea.innerHTML = morseMessage;
    outputArea.style.height = calcHeight(outputArea.value) + "px";
}

function morseDecode()
{
    var message = document.getElementById('morseDecoderInput');
}

function morseCopy(copyArea) 
{
    var copyText = document.getElementById(copyArea);
    copyText.focus();
    copyText.select();
    document.execCommand("copy");
}

function calcHeight(value) {    //Not mine like wut
    let numberOfLineBreaks = (value.match(/\n/g) || []).length;
    let newHeight = 4 + numberOfLineBreaks * 18 + 12 + 2;
    return newHeight;
  }