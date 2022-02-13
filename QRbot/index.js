// Module info: discord.js - discord api handling.| config.json - info storage |
// --IMPORTANT INFO--  As a discord bot this program uses "!"as mark for commands therefore on the present version are restricted to command assingment.


//Stops the bot from cheking other bots info in order to save memory, also read only messages with the prefix
// here the code is extracting everything else that is not prefix, using lenght (as a method?) but the idea is simple, if it is "string" we can manipulate using the previous const(prefix)
//split method

const Discord = require("discord.js");
const config = require("./config.json");
const { text } = require("stream/consumers");
const { string } = require("yargs");
const QRcode = require("qrcode")

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

const prefix = "!";

client.on("messageCreate", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  const timeTaken = Date.now() - message.createdTimestamp;

  if (command === "ping") {
    
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }

  else if (command === "qrgen") {
//still can't print on discord, maybe i'll have to use an external service such as google qr, promise object
    message.reply(`This is your QR ${QRcode.toDataURL(args)}. 
    This message had a latency of ${timeTaken}ms.`);
    
  }
});



client.login(config.TOKEN);