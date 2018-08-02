const Discord = require("discord.js");
const client = new Discord.Client();
client.commands = new Discord.Collection();

const token = process.argv[2];

client.on('ready', () => {
		console.log("logged in");
});

client.on('guildMemberAdd', guildMember => {
		guildMember.setNickname("everyone");
});

client.login(token);
