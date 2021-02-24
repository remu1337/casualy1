const Discord = require('discord.js');
const db = require('quick.db')


module.exports = {
    name: `pomoc`,
    aliases: [`help`],
    run: async (client, message, args) => {

        const emote = client.emojis.cache.find(e => e.name === 'conf124')
        const emote1 = client.emojis.cache.find(e => e.name === '798200120411029584')
        const emote2 = client.emojis.cache.find(e => e.name === 'kanal8382')
        const emote3 = client.emojis.cache.find(e => e.name === 'reklama8382')
        const emote4 = client.emojis.cache.find(e => e.name === 'bot6969')
        const emote5 = client.emojis.cache.find(e => e.name === 'bocik')
        const emote6 = client.emojis.cache.find(e => e.name === 'linki6969')
        const emote7 = client.emojis.cache.find(e => e.name === 'podglad89')
        const emote8 = client.emojis.cache.find(e => e.name === 'colorsicon4')
        const emote9 = client.emojis.cache.find(e => e.name === 'paleta67')
        const emote10 = client.emojis.cache.find(e => e.name === 'prefixitp8')
        const emote11 = client.emojis.cache.find(e => e.name === 'globalchat109')


        const prefix = db.fetch(`prefix_${message.guild.id}`);


        let conf = new Discord.MessageEmbed()
        .setThumbnail(`${ client.user.displayAvatarURL()}`)
        .setAuthor('MENU POMOCY', client.user.displayAvatarURL())
        .setTitle('Mój Prefix na tym Serwerze to'+'`'+prefix+'`')
        .addField(`${emote} Komendy Reklamowe`,'> **kanał #oznacz-kanał** `Kanał na którym bot rozsyła reklamy`\n> **reklama <treść-reklamy>** `Ustawiasz reklame tego Serwera`')
        .addField(`${emote1} Komendy Informacyjne!`, '> **podgląd** `Podgląd statusu/reklamy twojego Serwera`\n> **botinfo** `Informacje o bocie`\n> **linki** `Przydatne linki bota`\n> **kolory** `Pokazuje dostępne kolory dla embedu`')
        .addField(`${emote11} Komendy GlobalChatu`, '> **globalchat-ustaw #oznacz-kanał** `Ustawa oznaczony kanał w chat-globalny`\n> **globalchat-odłącz** `Odłącza aktualny kanał od chatu-globalnego`')
        .setColor(`ORANGE`)
        .setFooter(`Wywołane Przez: ${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL())
message.channel.send(conf)
} 
     }
