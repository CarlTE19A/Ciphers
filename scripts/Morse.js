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

function encode()
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
        space = "<br/>";
    }

    var morseMessage = "";
    for (let i = 0; i < message.length; i++) 
    {
        alphabet.forEach(letr => {
            if(message[i] == letr.letter)
            {
                morseMessage += (letr.morse + " ");
            }
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
    document.getElementById('morseEncoderOutput').innerHTML = morseMessage;
}