const Discord = require('discord.js');
const client = new Discord.Client({ 
    intents: [ 
        Discord.Intents.FLAGS.GUILDS, 
        Discord.Intents.FLAGS.DIRECT_MESSAGES
    ] 
});
const salonId = process.env.salonid;

client.once('ready', () => {
    console.log('Connecté en tant que ' + client.user.tag);
    client.user.setActivity('ticket par dm - by tiyoky', { type: 'WATCHING' });
});

client.on('message', async message => {
    if (message.channel.type === 'DM') { 
        const salon = client.channels.cache.get(salonId); 
        if (salon) {
            const embed = new Discord.MessageEmbed()
                .setColor('#00ff00')
                .setTitle(`Message de ${message.author.username}`)
                .setDescription(message.content);
            salon.send(embed); 
        }
    }
});

client.login(process.env.TOKEN);

