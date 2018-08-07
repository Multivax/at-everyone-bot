const Discord = require("discord.js");
const client = new Discord.Client();

const token = process.argv[2];

function isMessageIllegal(message) {
	if (message.content.includes("@here"))
		return true;
	if (message.mentions.users && message.mentions.users.size > 0)
		return true;
	if (message.mentions.channels && message.mentions.channels.size > 0)
		return true;
	if (message.mentions.roles && message.mentions.roles.size > 0)
		return true
	return false;
}

function fixInfraction(message) {
	message.member.ban({
		reason: message.content.substring(0, 511)
	});
	message.delete();
	message.channel.send("@everyone just got banned for breaking the rules.");
}

client.on('ready', () => {
	console.log("logged in");
});

client.on('message', message => {
	if (message.author.bot) return;
	if (isMessageIllegal(message)) fixInfraction(message);
});

client.on('messageUpdate', (oldMessage, newMessage) => {
	if (newMessage.author.bot) return;
	if (isMessageIllegal(newMessage)) fixInfraction(newMessage);
});

client.on('guildMemberAdd', guildMember => {
	guildMember.setNickname("everyone");
});

client.login(token);