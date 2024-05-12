const Discord = require('discord.js');
const client = new Discord.Client();
const salonId = "process.env.salonid";

client.once('ready', () => {
    console.log('Connecté en tant que ' + client.user.tag);
    client.user.setActivity('ticket par dm - by tiyoky', { type: 'WATCHING' });
});


client.on('message', async message => {
    if (message.channel.type === 'dm') { 
        const salon = client.channels.cache.get(salonId); 
        if (salon) { 
            salon.send(`Message de ${message.author.tag}: ${message.content}`); 
        }
    }
});


client.login('process.env.TOKEN');
