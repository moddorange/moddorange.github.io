//

var x,y;
var destination;
var curMap;
var mode = 0;
var curStep = 0;

const mainMap = [];

const maps =
[
	street,
	streetTwo,
	park,
	lincoln,
	lincolnTwo,
	AddieWay,
	AddieWayLong,
	Addie,
	RoomingWay
];

const tiles = [
	"‎ ",
	"█",
	"»",
	"▒",
	"░",
	"═",
	"║"
];

const randomDialogue =
[
	"Your junk sickness has worn you thin, Priest.",
	"Where IS everyone?",
	"Nobody cares about a sick junkie, as long as they get it in the vein...",
	"Getting late.",
	"'Fight tuberculosis, folks. . .'",
	"<i>People hurried by, gray shadows on a distant wall</i>"
];

const endingScroll =
[
	"Of course it was cold and far walk to rooming house<br>A shabby street, room on the top floor<br>'These stairs,' coughed the Priest<br>There pulling himself up along the bannister<br>He went into the bathroom<br>Yellow wall panels, toilet dripping<Br>And got his works from under the washbasin<br>Wrapped in brown paper, back to his room<br>Get every drop in the dropper<br>",
	"He rolled up his sleeve<br>Then he heard a groan from next door<br>Room 18, the Mexican kid lived there<br>The Priest had passed him on the stairs<br>And saw the kid was hooked<br>But he never spoke because he didn't want any juvenile connections<br>Bad news in any language<br>",
	"The Priest had had enough bad news in his life<br>He heard the groan again, a groan he could feel<br>No mistaking that groan and what it meant<br>Maybe he had an accident or something<br>In any case, I can't enjoy my priestly medications<br>With that sound coming through the wall<br>Thin walls you understand<br>",
	"The Priest put down his dropper<br>Cold hall and knocked on the door of Room 18<br>'Quien es?'<br>'It's the Priest, kid, I live next door'<br>He could hear someone hobbling across the floor<br>",
	"A bolt slid, the boy stood there in his underwear shorts<br>Eyes black with pain, he started to fall<br>The Priest helped him over to the bed<br>'What's wrong, son?'<br>It's my legs, señor, cramps<br>And now I am without medicine<br>",
	"The Priest could see the cramps<br>Like knots of wood there in the young legs<br>Dark shiny black leg hairs<br>'A few years ago I damaged myself in a bicycle race<br>It was then that the cramps started'<br>And now he has the leg cramps back<br>With compound junk interest<br>",
	"The old Priest stood there, feeling the boy groan<br>He inclined his head as if in prayer, went back and got his dropper<br>'It's just a quarter G, kid'<br>'I do not require much, señor'",
	"The boy was sleeping when the Priest left Room 18<br>He went back to his room and sat down on the bed<br>Then it hit him like heavy silent snow<br>All the gray junk yesterdays<br>He sat there, received the immaculate fix<br>And since he was himself a priest<br>There was no need to call one<br>",
];
var scrollLine = 0;

function writeMap()
{
	if(!document.getElementById("main"))
		return;
	
	document.getElementById("main").innerHTML = "";
	var tileId = 0;
	for(var rowY = 0; rowY < mainMap.length; rowY++)
	{
		for(var rowX = 0; rowX < mainMap[rowY].length; rowX++)
		{
			var newTile = document.createElement("span");
			var TileContent;
			if(rowX === x && rowY === y)
			{
				TileContent = document.createTextNode("%");newTile.appendChild(TileContent);
			}
			else
			{
				TileContent = document.createTextNode(tiles[mainMap[rowY][rowX]]);
			}
			newTile.appendChild(TileContent);
			newTile.id = rowX + rowY;
			
			newTile.id = tileId;
			document.getElementById("main").appendChild(newTile);
			
			tileId++;
		}
		var br = document.createElement("br")
		document.getElementById("main").appendChild(br);
	}
	drawEntities();
}

function drawEntities()
{
	if(curMap == street)
	{
		for(var l = 0; l < streetEntities.length; l++)
		{
			if(streetEntities[l].x+2 >= curMap[0].length)
			{
				break;
			}
			else
			{
				document.getElementById(streetEntities[l].pos).innerHTML = streetEntities[l].icon;
			}
		}
	}
	else if(curMap == streetTwo)
	{
		for(var l = 0; l < streetTwoEntities.length; l++)
		{
			if(streetTwoEntities[l].x+2 >= curMap[0].length)
			{
				break;
			}
			else
			{
				document.getElementById(streetTwoEntities[l].pos).innerHTML = streetTwoEntities[l].icon;
			}
		}
	}
	else if(curMap == park)
	{
		for(var l = 0; l < parkEntities.length; l++)
		{
			if(parkEntities[l].x+2 >= curMap[0].length)
			{
				break;
			}
			else
			{
				document.getElementById(parkEntities[l].pos).innerHTML = parkEntities[l].icon;
			}
		}
	}
	else if(curMap == lincolnTwo)
	{
		for(var l = 0; l < lincolnEntities.length; l++)
		{
			if(lincolnEntities[l].x+2 >= curMap[0].length)
			{
				break;
			}
			else
			{
				document.getElementById(lincolnEntities[l].pos).innerHTML = lincolnEntities[l].icon;
			}
		}
	}
	else if(curMap == Addie)
	{
		for(var l = 0; l < AddieEntities.length; l++)
		{
			if(AddieEntities[l].x+2 >= curMap[0].length)
			{
				break;
			}
			else
			{
				document.getElementById(AddieEntities[l].pos).innerHTML = AddieEntities[l].icon;
			}
		}
	}
}

function loadMap(name)
{
	curMap = name;
	x = name[0][0];
	y = name[0][1];
	destination = name[0][2];
	if(name[0].length == 3)
	{
		name.splice(0,1);
	}
	mainMap.length = 0;
	mainMap.push.apply(mainMap,name);
	writeMap();
	switch(curMap)
	{
		case Addie:
			document.body.style = "color:#0000FF;";
			break;
		case RoomingWay:
			document.body.style = "color:#FF00FF;";
			break;
	}
}

function randomDialogueDrop()
{
	var randoD = Math.round(Math.random() * (randomDialogue.length - 1) + 0);
	writeCurrentText(randomDialogue[randoD]);
}

function controller(e)
{
	if(mode == 0)
	{
		if(curStep >= 6)
		{
			randomDialogueDrop();
			curStep = 0;
		}
		else
		{
			curStep++;
		}
	switch(e.code)
	{
		case "KeyW":
			switch(mainMap[y-1][x])
			{
				case 0:
				case 5:
				case 6:
					y--;
				break;
				case 2:
					if(destination == 0)
					{
						initModeTwo();
						break;
					}
					else
					{
						loadMap(maps[destination]);
					}
				break;
				case 3:
					writeCurrentText("Door won't budge.");
				break;
				case 4:
					writeCurrentText("Dark that way.");
				break;
			}
			break;
		case "KeyA":
			switch(mainMap[y][x-1])
			{
				case 0:
				case 5:
				case 6:
					x--;
				break;
				case 2:
					if(destination == 0)
					{
						initModeTwo();
						break;
					}
					else
					{
						loadMap(maps[destination]);
					}
				break;
				case 3:
					writeCurrentText("Door won't budge.");
				break;
				case 4:
					writeCurrentText("Dark that way.");
				break;
			break;
			}
			break;
		case "KeyS":
			switch(mainMap[y+1][x])
			{
				case 0:
				case 5:
				case 6:
					y++;
				break;
				case 2:
					if(destination == 0)
					{
						initModeTwo();
						break;
					}
					else
					{
						loadMap(maps[destination]);
					}
				break;
				case 3:
					writeCurrentText("Door won't budge.");
				break;
				case 4:
					writeCurrentText("Dark that way.");
				break;
			break;
			}
			break;
		case "KeyD":
			switch(mainMap[y][x+1])
			{
				case 0:
				case 5:
				case 6:
					x++;
				break;
				case 2:
					if(destination == 0)
					{
						initModeTwo();
						break;
					}
					else
					{
						loadMap(maps[destination]);
					}
				break;
				case 3:
					writeCurrentText("Door won't budge.");
				break;
				case 4:
					writeCurrentText("Dark that way.");
				break;
			break;
			}
			break;
	}
	if(curMap == street)
	{
		for(var entitiesList = 0; entitiesList < streetEntities.length; entitiesList++)
		{
			switch(streetEntities[entitiesList].movement[streetEntities[entitiesList].curMovement])
			{
				case 1:
					streetEntities[entitiesList].pos++;
					streetEntities[entitiesList].x++;
					break;
				case 2:
					streetEntities[entitiesList].pos--;
					streetEntities[entitiesList].x--;
					break;
			}
			
			if(streetEntities[entitiesList].curMovement >= streetEntities[entitiesList].movement.length)
			{
				streetEntities[entitiesList].curMovement = 0;
			}
			else
			{
				streetEntities[entitiesList].curMovement++;
			}
			if(streetEntities[entitiesList].x == x && streetEntities[entitiesList].y == y)
			{
				writeCurrentText(streetEntities[entitiesList].dialogue);
			}
		}
	}
	else if(curMap == streetTwo)
	{
			for(var entitiesList = 0; entitiesList < streetTwoEntities.length; entitiesList++)
			{
				switch(streetTwoEntities[entitiesList].movement[streetTwoEntities[entitiesList].curMovement])
				{
					case 1:
						streetTwoEntities[entitiesList].pos++;
						streetTwoEntities[entitiesList].x++;
					break;
					case 2:
						streetTwoEntities[entitiesList].pos--;
						streetTwoEntities[entitiesList].x--;
					break;
				}
			
			if(streetTwoEntities[entitiesList].curMovement >= streetTwoEntities[entitiesList].movement.length)
			{
				streetTwoEntities[entitiesList].curMovement = 0;
			}
			else
			{
				streetTwoEntities[entitiesList].curMovement++;
			}
			if(streetTwoEntities[entitiesList].x == x && streetTwoEntities[entitiesList].y == y)
			{
				writeCurrentText(streetTwoEntities[entitiesList].dialogue);
			}
			}
	}
	else if(curMap == park)
	{
			for(var entitiesList = 0; entitiesList < parkEntities.length; entitiesList++)
			{
				switch(parkEntities[entitiesList].movement[parkEntities[entitiesList].curMovement])
				{
					case 1:
						parkEntities[entitiesList].pos++;
						parkEntities[entitiesList].x++;
					break;
					case 2:
						parkEntities[entitiesList].pos--;
						parkEntities[entitiesList].x--;
					break;
				}
			
			if(parkEntities[entitiesList].curMovement >= parkEntities[entitiesList].movement.length)
			{
				parkEntities[entitiesList].curMovement = 0;
			}
			else
			{
				parkEntities[entitiesList].curMovement++;
			}
			if(parkEntities[entitiesList].x == x && parkEntities[entitiesList].y == y)
			{
				writeCurrentText(parkEntities[entitiesList].dialogue);
			}
			}
	}
	else if(curMap == lincolnTwo)
	{
			for(var entitiesList = 0; entitiesList < lincolnEntities.length; entitiesList++)
			{
				switch(lincolnEntities[entitiesList].movement[lincolnEntities[entitiesList].curMovement])
				{
					case 1:
						lincolnEntities[entitiesList].pos++;
						lincolnEntities[entitiesList].x++;
					break;
					case 2:
						lincolnEntities[entitiesList].pos--;
						lincolnEntities[entitiesList].x--;
					break;
				}
			
			if(lincolnEntities[entitiesList].curMovement >= lincolnEntities[entitiesList].movement.length)
			{
				lincolnEntities[entitiesList].curMovement = 0;
			}
			else
			{
				lincolnEntities[entitiesList].curMovement++;
			}
			if(lincolnEntities[entitiesList].x == x && lincolnEntities[entitiesList].y == y)
			{
				writeCurrentText(lincolnEntities[entitiesList].dialogue);
			}
			}
	}
	else if(curMap == Addie)
	{
			//Addi.pos = [242];
			for(var entitiesList = 0; entitiesList < AddieEntities.length; entitiesList++)
			{
				switch(AddieEntities[entitiesList].movement[AddieEntities[entitiesList].curMovement])
				{
					case 1:
						AddieEntities[entitiesList].pos++;
						AddieEntities[entitiesList].x++;
					break;
					case 2:
						AddieEntities[entitiesList].pos--;
						AddieEntities[entitiesList].x--;
					break;
				}
			
			if(AddieEntities[entitiesList].curMovement >= AddieEntities[entitiesList].movement.length)
			{
				AddieEntities[entitiesList].curMovement = 0;
			}
			else
			{
				AddieEntities[entitiesList].curMovement++;
			}
			if(AddieEntities[entitiesList].x == x && AddieEntities[entitiesList].y == y)
			{
				writeCurrentText(AddieEntities[entitiesList].dialogue);
			}
			}
	}
	writeMap();
	}
}

function initModeTwo()
{
	mode = 1;
	document.getElementById("main").remove();
	document.getElementById("help").remove();
	writeCurrentText(endingScroll[scrollLine]);
	addContinueButton();
}

function addContinueButton()
{
	var butt = document.createElement("h2");
	butt.id = "continue";
	butt.innerHTML = "Press Enter";
	document.body.appendChild(butt);
	document.body.addEventListener("keydown",increaseScroll);
}

function increaseScroll(e)
{
	if(e.code == "Enter")
	{
		if(scrollLine < endingScroll.length - 1)
		{
			scrollLine++;
			writeCurrentText(endingScroll[scrollLine]);
		}
		else if(scrollLine >= endingScroll.length - 1)
		{
			writeCurrentText("<img src=\"The_Priest_They_Called_Him.jpg\" alt=\"The Priest They Called Him\"><br>Original Piece by William S. Burroughs<br><a href=\"https://en.wikipedia.org/wiki/The_%22Priest%22_They_Called_Him\">Wiki Link</a><br><a href=\"priest.txt\">TXT Copy</a>");
			document.getElementById("continue").remove();
		}
		else
		{
			return;
		}
	}
}

function init()
{
	x = 1;
	y = 1;
	loadMap(street);
	writeCurrentText("NORTH PARK STREET<br><br>'Fight tuberculosis, folks'<br>Christmas Eve, an old junkie selling Christmas seals<br>The 'Priest' they called him<br>'Fight tuberculosis, folks'<br><br><br>Up the street you see a thin kid (with a suitcase . . . )<br>He pays the cab fare and walks off.");
	document.body.addEventListener("keydown",controller);
}

function writeCurrentText(p)
{
	document.getElementById("curText").innerHTML = p;
}