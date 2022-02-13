// Module info: discord.js - discord api handling.| config.json - info storage |
// --IMPORTANT INFO--  As a discord bot this program uses "!"as mark for commands therefore on the present version are restricted to command assingment.


//Stops the bot from cheking other bots info in order to save memory, also read only messages with the prefix
// here the code is extracting everything else that is not prefix, using lenght (as a method?) but the idea is simple, if it is "string" we can manipulate using the previous const(prefix)
//split method

const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

const prefix = "!";

client.on("messageCreate", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }
});

client.login(config.TOKEN);