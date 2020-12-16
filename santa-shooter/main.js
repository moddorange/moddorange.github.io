
///////////////////
// non-game stuff
///////////////////
let warningEnabled = 1; // just so testing goes faster

function destroyWarning()
{
    document.getElementById("text-game-area").style = "display:block";
    document.getElementById("game-area").removeChild(document.getElementById("warning"));
    addText("<h3 style=\"margin-bottom:0px\">Welcome to Santa Shooter!</h3><span class=\"small-gray-text\">(name unrelated to gameplay)</span>");
    addText("You are Tommy, a six year old boy in the Mall hoping to meet Santa.<br>To the east, you see a little North Pole area with Santa sitting in a chair talking to children.");
    addText("Possible commands: go east");
}

/////////////
// gameplay
/////////////
let room = 0; // lol

function addText(text)
{
    let newText = document.createElement("p");
    newText.innerHTML = text;
    
    document.getElementById("text-area").appendChild(newText);
}

function getInput()
{
    let input = document.getElementById("text-input").value;
    
    // usually i would have it split into an array and then parse it like that but we don't need that much functionality here
    switch(input.toLowerCase())
    {
        case "go east":
            if(room == 0)
            {
                addText("You go east, and you're waiting in line. Eventually, you go up to Santa and sit on his lap.<br>Santa: What would you like?");
            }
            room += 1;
            break;
        case "go north":
        case "go south":
        case "go west":
            addText("You can't go that way.");
            break;
        default: // ehhhhh not the best way to do this at all but nobody cares this is a joke game
            if(room == 1)
            {
                addText("Santa: Ho ho ho... Well then, young sir, I will get you a \"" + input + "\" for Christmas. Have a Merry Christmas!");
                addText("You and your parents walk out of the mall, satisifed with your visit.<h2>The End!</h2>");
                room += 1;
                let endAudio = new Audio("jingle-bells.wav");
                endAudio.play();
            }
            else
            {
                addText("Unknown command.");
            }
            break;
    }
    
    document.getElementById("text-input").value = "";
    document.getElementById("text-area").scrollTop = document.getElementById("text-area").scrollHeight;
}

function init()
{
    if(!warningEnabled)
    {
        destroyWarning();
    }
}

document.body.addEventListener("keydown",function(event)
{
    if(event.key == "Enter")
    {
        getInput();
    }
});

init();