const client = new (require("discord.js")).Client();

client.on("message", (message) => {
	let badUsers = [
		"bless-bot",
		"bless bot"
	];
	if (badUsers.includes(message.author.username.toLowerCase()) && message.author.discriminator === "0000") return message.delete();
});

client.on("ready", () => {
	console.info(`Banning bless-bot in ${client.guilds.size} server${client.guilds.size === 1 ? "" : "s"}.`);
});

client.login(process.env.TOKEN)
	.catch((err) => {
		throw err;
	});
