const Discord = require('discord.js');
const client = new Discord.Client({ 
    intents: [ 
        Discord.Intents.FLAGS.GUILDS, 
        Discord.Intents.FLAGS.DIRECT_MESSAGES
    ] 
});

client.once('ready', () => {
    console.log('Connecté en tant que ' + client.user.tag);
    client.user.setActivity('ticket par dm - by tiyoky', { type: 'WATCHING' });
});

client.on('messageCreate', async message => {
    if (message.channel.type === 'DM') {
        const guilds = client.guilds.cache.array();
        for (const guild of guilds) {
            const channels = guild.channels.cache.filter(channel => channel.type === 'GUILD_TEXT' && channel.name.toLowerCase().includes('dm_test'));
            for (const [, channel] of channels) {
                const embed = new Discord.MessageEmbed()
                    .setColor('#00ff00') // Vert
                    .setTitle(`Message de ${message.author.username}`)
                    .setDescription(message.content);
                await channel.send({ embeds: [embed] });
            }
        }
    }
});




client.login(process.env.TOKEN);

