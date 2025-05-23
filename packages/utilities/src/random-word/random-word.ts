const defaultWords = [
	"alpha",
	"beta",
	"gamma",
	"delta",
	"epsilon",
	"zeta",
	"eta",
	"theta",
	"iota",
	"kappa",
	"lambda",
	"mu",
	"nu",
	"xi",
	"omicron",
	"pi",
	"rho",
	"sigma",
	"tau",
	"upsilon",
	"phi",
	"chi",
	"psi",
	"omega", // Greek alphabet

	"etna",
	"vesuvius",
	"krakatoa",
	"mauna",
	"stromboli",
	"fujiyama",
	"cotopaxi",
	"popocatepetl",
	"kilimanjaro",
	"helens",
	"eyjafjallajokull",
	"tambora",
	"pinatubo",
	"rainier",
	"fuji",
	"lassen",
	"pelee",
	"shasta",
	"hekla",
	"erebus", // Famous volcanoes

	"mountain",
	"river",
	"ocean",
	"forest",
	"desert",
	"valley",
	"island",
	"lake",
	"stream",
	"waterfall",
	"cave",
	"cliff",
	"canyon",
	"plateau",
	"prairie",
	"meadow",
	"swamp",
	"tundra",
	"volcano",
	"geyser",
	"reef",
	"bay",
	"gulf",
	"peak",
	"ridge",
	"range",
	"coast",
	"shore",
	"glacier",
	"dune",
	"cove",
	"fjord", // Landscape features

	"breeze",
	"horizon",
	"sunset",
	"dawn",
	"twilight",
	"dusk",
	"fog",
	"mist",
	"cloud",
	"rain",
	"storm",
	"thunder",
	"lightning",
	"hail",
	"snow",
	"blizzard",
	"frost",
	"ice",
	"wind",
	"whirlwind",
	"sandstorm",
	"heatwave",
	"mirage",
	"eclipse",
	"cyclone", // Weather and atmospheric conditions

	"explore",
	"adventure",
	"journey",
	"quest",
	"voyage",
	"expedition",
	"discovery",
	"wander",
	"trek",
	"travel",
	"path",
	"trail",
	"road",
	"highway",
	"way",
	"passage",
	"bridge",
	"tunnel",
	"route",
	"crossing",
	"navigation",
	"compass",
	"map",
	"landmark",
	"hike", // Travel and exploration

	"summit",
	"base",
	"slope",
	"crater",
	"lava",
	"ash",
	"eruption",
	"magma",
	"fumarole",
	"vent",
	"caldera",
	"cone",
	"rift",
	"fault",
	"seismic",
	"tectonic",
	"epicenter",
	"quake",
	"pyroclastic", // Volcanic terms

	"flora",
	"fauna",
	"ecosystem",
	"biodiversity",
	"wilderness",
	"habitat",
	"sanctuary",
	"reserve",
	"conservation",
	"endangered",
	"extinct",
	"species",
	"jungle",
	"rainforest",
	"savannah",
	"wetlands",
	"coral",
	"mangrove",
	"algae",
	"biome", // Ecology and conservation

	"pinnacle",
	"zenith",
	"apex",
	"climb",
	"ascend",
	"descend",
	"camp",
	"shelter",
	"cabin",
	"tent",
	"gear",
	"backpack",
	"lantern",
	"fire",
	"wood",
	"flame",
	"smoke",
	"torch",
	"bivouac", // Mountain climbing and camping

	"beacon",
	"signal",
	"star",
	"moon",
	"planet",
	"galaxy",
	"universe",
	"cosmos",
	"nebula",
	"meteor",
	"comet",
	"orbit",
	"satellite",
	"asteroid",
	"gravity",
	"quasar",
	"supernova",
	"singularity", // Astronomy and space
];

const defaultCount = 2;

/**
 * Generates a random word or phrase from a given list of words.
 *
 * @param {string[]} [wordList=defaultWords] - The list of words to choose from. Defaults to `defaultWords`.
 * @param {number} [count=defaultCount] - The number of words to generate. Defaults to `defaultCount`.
 * @returns {string} A string containing the generated random words joined by a space.
 */
export default function generateRandomWords(
	wordList: string[] = defaultWords,
	count: number = defaultCount,
): string {
	if (count <= 0 || wordList.length === 0) {
		return "";
	}

	const selectedWords = Array.from({ length: count }, () => {
		const randomIndex = Math.floor(Math.random() * wordList.length);
		return wordList[randomIndex];
	});

	return selectedWords.join(" ");
}
