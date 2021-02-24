const { MessageEmbed, Message } = require("discord.js")


module.exports = {
    name: "staty",
    aliases: ["botinfo", "info"],
    run: async (client, msg, shard) => {

        let days = Math.floor(client.uptime / 86400000 );
        let hours = Math.floor(client.uptime / 3600000 ) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;

    let usersSize = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);

    const emote6 = client.emojis.cache.find(e => e.name === 'uptime152')
    const emote5 = client.emojis.cache.find(e => e.name === 'staty09201')
    const emote7 = client.emojis.cache.find(e => e.name === 'bocik')

    
    

    let wLini = true;
    let channelSize = client.channels.cache.size;
    let uptime = client.ws.ping;
    let guildSize = client.guilds.cache.size;

    let statystyki_bota = new MessageEmbed()
    .setColor("#FF8000")
    .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
    .setAuthor('Informacje o Bocie', client.user.displayAvatarURL())
    .addField('👑 Właściciel Bota:', '`remu#0003`')
    .addField(`${emote5} Ogólne Statystyki:`, '`Serwery:'+guildSize+'`\n'+'`Użytkownicy:'+usersSize+'`\n'+'`Kanały:'+channelSize+'`')
    .addField(`${emote6} Ogólne Informacje:`, '`'+`Wersja Node.js: ${process.version}\nUptime: ${days}D ${hours}H ${minutes}M ${seconds}S`+'`')
    .addField(`🏓 Połączenie Bota`, '`Casualy.AD:'+uptime+'ms`')
    .setFooter(`Wywołane przez: ${msg.author.tag} ${msg.author.id}`, msg.author.displayAvatarURL())
    .setTimestamp();
    msg.channel.send(statystyki_bota)
}
    
}