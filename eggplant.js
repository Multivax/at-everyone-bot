const Discord = require("discord.js");
const client = new Discord.Client();

const token = process.argv[2];

client.on('ready', () => {
	console.log("logged in");
});

client.on('message', message => {
	if (message.content.toLowerCase().includes("egg") ||
		message.content.includes("🍆") ||
		message.content.includes("🥚")
	) {
		message.react("🍆");
	}
});

client.login(token);