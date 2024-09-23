//

const Gerald = {
	icon: "@",
	dialogue: "You approach a man wearing a tattered waistcoat and a broken wristwatch. You think it could be an old friend.<br><br>'It's me, Priest. Can't find anywhere to score around here.'<br><br>As you shiver together, you both look at eachother with a hatred of disappointment.<br><br>'Gerald, Merry Christmas, see ya.'<br>'See ya.'",
	pos: [98],
	x: 27,
	y: 1,
	curMovement: 0,
	movement: [2,2,2,1,1,1]
};

const TaxiOne = {
	icon: "/",
	pos: [264],
	x: 48,
	y: 2,
	curMovement: 0,
	movement: [1]
};
const TaxiTwo = {
	icon: "͞‎ ",
	pos: [265],
	x: 49,
	y: 2,
	curMovement: 0,
	movement: [1]
};
const TaxiThree = {
	icon: "\\",
	pos: [266],
	x: 50,
	y: 2,
	curMovement: 0,
	movement: [1]
};
const TaxiFour = {
	icon: "O",
	pos: [336],
	x: 48,
	y: 3,
	curMovement: 0,
	movement: [1]
};
const TaxiFive = {
	icon: "O",
	pos: [338],
	x: 50,
	y: 3,
	curMovement: 0,
	movement: [1]
};

const YoungMan = {
	icon: "@",
	pos: [200],
	x: 56,
	y: 2,
	curMovement: 0,
	movement: [1]
};

const TaxiEntryDialogue = {
	icon: "‎X",
	dialogue: "You find a tattered old suitcase in the doorway to an open apartment building. Upon opening it, a pair of legs fall out.<br>You saw the boy who left this here. They couldn't have been his.<br><br>Two severed human legs that belonged to a young man.<br>With dark skin, shiny black leg hairs<br>Glittered in the dim streetlight",
	pos: [99],
	x: 27,
	y: 1,
	curMovement: 0,
	movement: [0]
};

const Roommate = {
	icon: "@",
	dialogue: "'No, you can't be my roommate. I do junk too man, but I can't help you pay for it.'",
	pos: [44],
	x: 12,
	y: 2,
	curMovement: 0,
	movement: [0]
};

const RoommateTwo = {
	icon: "@",
	dialogue: "'Yeah, I know where you could sell that suitcase to.' He gives you information on a potential buyer.<br><br>'I remember you, Priest. I remember everytime . . .'<br>You get the impression to leave.",
	pos: [234],
	x: 11,
	y: 14,
	curMovement: 0,
	movement: [1,0,0,0,0,0,2,0,0,0,0]
};

const Buyer = {
	icon: "@",
	dialogue: "Lighting from a neon sign comes through the window. You were told specifically the buyer would be across from the laundromat.<br><br>The buyer sniffed suspiciously<br>'Kind of a funny smell about it'<br>'It's just Mexican leather'<br>'Well, some joker didn't cure it'<br>The buyer looked at the case with cold disfavor<br><br>'Not even right sure he killed it, whatever it is'<br><br>'Three is the best I can do and it hurts'<br>'But since this is Christmas and you're the Priest. . .'<br>He slipped three notes under the table into your dirty hand",
	pos: [34],
	x: 10,
	y: 1,
	curMovement: 0,
	movement: [0]
};

const Addi = {
	icon: "+",
	dialogue: "Yeah, isn't that a fruit for ya, blow your stack about three lousy cents<br>The doctor was not pleased to see you<br><br>'Now, what do you want? I told you!'<br>You lay three bills on the table<br><br>The doctor put the money in his pocket and started to scream<br>'I've had trouble!'<br>He slides an ampule across the table.<br>'That's all I have in the office! Now get out!'<br>'Alright doctor, I'm going.'",
	pos: [242],
	x: 14,
	y: 12,
	curMovement: 0,
	movement: [1,0,2,0]
};

const streetEntities =
[
	Gerald,
	TaxiOne,
	TaxiTwo,
	TaxiThree,
	TaxiFour,
	TaxiFive,
	YoungMan
];

const streetTwoEntities =
[
	TaxiEntryDialogue
];

const parkEntities =
[
	Roommate,
	RoommateTwo
];

const lincolnEntities =
[
	Buyer
];

const AddieEntities =
[
	Addi
];