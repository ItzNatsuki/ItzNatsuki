const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${ItzNatsuki}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTU0NDczNjQ1NjgyOTgyOTEz.D2dP3Q.DJf_7ikrUqeTUmCKEZXKzzRD5N0');
