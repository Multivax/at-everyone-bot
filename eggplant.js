const Discord = require("discord.js");
const client = new Discord.Client();

const token = process.argv[2];

client.on('ready', () => {
	console.log("logged in");
});

client.on('message', message => {
	if (message.content.includes("egg")) {
		message.react("🍆");
	}
});

client.login(token);