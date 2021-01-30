const Discord = require(`discord.js`)
const { MessageEmbed } = require(`discord.js`)
const db = require('quick.db')

module.exports = {
    name: `pomoc`,
    aliases: [`help`],
    run: async (client, message, args) => {

        const emote = client.emojis.cache.find(e => e.name === 'config12')
        const emote1 = client.emojis.cache.find(e => e.name === 'emotka')
        const emote2 = client.emojis.cache.find(e => e.name === 'kanal8382')
        const emote3 = client.emojis.cache.find(e => e.name === 'reklama8382')
        const emote4 = client.emojis.cache.find(e => e.name === 'bot6969')
        const emote5 = client.emojis.cache.find(e => e.name === 'bocik')
        const emote6 = client.emojis.cache.find(e => e.name === 'linki6969')
        const emote7 = client.emojis.cache.find(e => e.name === 'podglad89')
        const emote8 = client.emojis.cache.find(e => e.name === 'colorsicon4')
        const emote9 = client.emojis.cache.find(e => e.name === 'paleta67')
        const emote10 = client.emojis.cache.find(e => e.name === 'prefixitp8')


        const prefix = db.fetch(`prefix_${message.guild.id}`);

        if (!args[0]) {
            client.user.displayAvatarURL()
            const pomocmenu = new Discord.MessageEmbed()
            .setThumbnail(`${ client.user.displayAvatarURL()}`)
        .setAuthor(`MENU POMOCY`, `https://cdn.discordapp.com/attachments/789064346046562305/798198341250318427/3859_Loading.gif`)
        .setColor(`ORANGE`)
        .setDescription(`Mój Prefix na tym Serwerze to ${prefix}`)
        .addField(`${emote} Konfiguracja`, `${prefix}pomoc konfiguracja`)
        .addField(`${emote1} Informacyjne`, `${prefix}pomoc info`)
        .addField(`${emote5} Instrukcja Konfiguracji`, `${prefix}instrukcja`)
        .setFooter(`Wywołane Przez: ${message.author.tag} | ${message.author.id}`)
        .setTimestamp()
        message.channel.send(pomocmenu)
          } else {
            if (args[0] == 'info') {
              client.user.displayAvatarURL()
              const pomocmenu = new Discord.MessageEmbed()
              .setThumbnail(`${ client.user.displayAvatarURL()}`)
                .setTitle(`${emote} Komendy Informacyjne`)
                .setColor(`ORANGE`)
                .addField(`${emote7} Podgląd Reklamy Serwera`, `${prefix}podgląd`)
                .addField(`${emote4} Informacje o Bocie`, `${prefix}botinfo`)
                .addField(`${emote6} Ważne Linki Bota`, `${prefix}linki`)
                .setFooter(`Wywołane Przez: ${message.author.tag} | ${message.author.id}`)
                .setTimestamp()
              message.channel.send(pomocmenu) 
               }
            else if (args[0] == 'konfiguracja') {
              client.user.displayAvatarURL()
                const pomocmenu = new Discord.MessageEmbed()
                .setThumbnail(`${ client.user.displayAvatarURL()}`)
                .setTitle(`${emote1} Komendy Konfiguracji`)
                .setColor(`ORANGE`)
                .addField(`${emote2} Ustawia Kanał Reklam Bota`, `${prefix}kanał #kanał`)
                .addField(`${emote3} Ustawia Reklame Serwera`, `${prefix}reklama <treść reklamy>`)
                .addField(`${emote10} Ustawia Nowy Prefix`, `${prefix}prefix <nowy prefix>`)
                .addField(`${emote9} Lista Kolorów `, `${prefix}kolory`)
                .addField(`${emote8} Ustawia Kolor Embedu **Tylko Premium**`, `${prefix}embed-kolor <kolor>`)
                .setTimestamp()
              message.channel.send(pomocmenu)
            }
        }
    }
}    