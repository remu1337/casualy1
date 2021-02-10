const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "zobacz",
    aliases: ["podgląd", "podglad", "status"],
    run: async (client, msg, args) => {



        const emote = client.emojis.cache.find(e => e.name === 'kanal8382')
        const emote1 = client.emojis.cache.find(e => e.name === 'reklama8382')
        const emote2 = client.emojis.cache.find(e => e.name === 'premium12')
        const emote3 = client.emojis.cache.find(e => e.name === 'hasztag123')
        const emote4 = client.emojis.cache.find(e => e.name === 'dobrze123')
        const emote5 = client.emojis.cache.find(e => e.name === 'statusweryfikacji123')

        ///statusweryfikacji123


        let reklama = db.get(`reklama_${msg.guild.id}_serwera`)

        let kanalreklam23 = db.get(`kanal_reklama_${msg.guild.id}`)
    if (db.get(`premium_${msg.guild.id}`)) { 
        const embed2 = new MessageEmbed()
        .setAuthor("Podgląd Reklamy " + msg.guild.name, "https://www.kulturland-brandenburg.de/wordpress/wp-content/plugins/flickr-album-gallery-pro/img/4.gif")
        .setColor("#FF8000")
        .setDescription(`\n${emote5} Status weryfikacji:${emote4} Zaakceptowana@cas\nStatus: **${emote2} Premium**\n\n${emote} Kanał do Reklam: <#${kanalreklam23}>` + `${emote1} Reklama Serwera:\n` + "```" + reklama + "```")
        .setFooter(`Wywołane Przez: ${msg.author.tag} | ${msg.author.id}` , msg.author.displayAvatarURL())
        return msg.channel.send(embed2)

    } else 
        if(!kanalreklam23 || !reklama) {
            const embed21 = new MessageEmbed()
            .setAuthor(`Nic nie Skonfigurowano!`, "https://cdn.discordapp.com/attachments/797926429257891851/805469345358151710/Close_Icon_Dark-512.png")
            .setDescription(`${emote}  Kanał do Reklam: **Nie Skonfigurowano**\n${emote1} Reklama Serwera: **Nie Skonfigurowano**`)
            .setColor("#FF8000")
            .setFooter(`Wywołane Przez: ${msg.author.tag} ${msg.author.id}` , msg.author.displayAvatarURL())
            return msg.channel.send(embed21)
        } else 
        if(!reklama) {
            const embed21 = new MessageEmbed()
            .setAuthor(`Skonfiguruj Reklame!`, "https://cdn.discordapp.com/attachments/797926429257891851/805469345358151710/Close_Icon_Dark-512.png")
            .setDescription(`${emote} Kanał do Reklam: <#${kanalreklam23}>\n${emote1}Reklama Serwera: **Nie Skonfigurowano**`)
            .setColor("#FF8000")
            .setFooter(`Wywołane Przez: ${msg.author.tag} ${msg.author.id}` , msg.author.displayAvatarURL())
            return msg.channel.send(embed21)
         } else {
    
        const embed2 = new MessageEmbed()
        .setAuthor("Podgląd Reklamy " + msg.guild.name, "https://www.kulturland-brandenburg.de/wordpress/wp-content/plugins/flickr-album-gallery-pro/img/4.gif")
        .setColor("#FF8000")
        .setDescription(`\n${emote5} Status weryfikacji:${emote4} Zaakceptowana\nStatus: **🔰 Normalny**\n\n${emote} Kanał do Reklam: <#${kanalreklam23}>\n` + `${emote1} Reklama Serwera:\n`+ "```" + reklama + "```")
        .setFooter(`Wywołane Przez: ${msg.author.tag} | ${msg.author.id}` , msg.author.displayAvatarURL())
        return msg.channel.send(embed2)
        
    }
}   
}
