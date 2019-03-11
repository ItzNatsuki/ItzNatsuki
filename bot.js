const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTU0NDczNjQ1NjgyOTgyOTEz.D2fUSQ.S_M5BGSRie3SFQmBJ47uTNgiMrQ);
