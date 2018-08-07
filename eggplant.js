const Discord = require("discord.js");
const client = new Discord.Client();

const token = process.argv[2];

function containsEgg(message) {
	return message.content.toLowerCase().includes("egg") ||
		message.content.includes("🍆") ||
		message.content.includes("🥚")
}

client.on('ready', () => {
	console.log("logged in");
});

client.on('message', message => {
	if (containsEgg(message)) {
		message.react("🍆");
	}
});

client.on('messageUpdate', (newMessage) => {
	if (containsEgg(newMessage)) {
		newMessage.react("🍆");
	}
});

client.on('messageReactionAdd', (messageReaction) => {
	if (messageReaction.me) return;
	if (
		messageReaction.emoji.name === "🍆" ||
		messageReaction.emoji.name === "🥚"
	) {
		messageReaction.message.react("🍆");
	}
});

client.login(token);