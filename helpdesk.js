const Discord = require("discord.js");
const lmgtfy = require("lmgtfy");

const client = new Discord.Client();

const token = process.argv[2];
const guild = process.argv[3];
const channel = process.argv[4];

client.on('ready', () => {
	console.log("logged in");
});

client.on('message', message => {
	if (message.author.bot) return;

	if (message.guild && message.guild.id === guild && message.channel.id === channel) {
		message.channel.send("<@!" + message.author.id + ">, Here you go! " 
			+ lmgtfy(message.content));
	}
});

client.login(token);
