const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "zobacz",
    aliases: ["podgląd", "podglad"],
    run: async (client, msg, args) => {



        const emote = client.emojis.cache.find(e => e.name === 'gutgut')
        const emote1 = client.emojis.cache.find(e => e.name === 'niegut')
        const emote2 = client.emojis.cache.find(e => e.name === 'premium12')
        const emote3 = client.emojis.cache.find(e => e.name === 'hasztag123')


        let reklama = db.get(`reklama_${msg.guild.id}_serwera`)

        let kanalreklam23 = db.get(`kanal_reklama_${msg.guild.id}`)
    if (db.get(`premium_${msg.guild.id}`)) { 
        const embed2 = new MessageEmbed()
        .setAuthor("Podgląd Reklamy " + msg.guild.name, "https://cdn.discordapp.com/attachments/786700077937983549/797605135211298876/5845_tickgreen_1.gif")
        .setColor("#FF8000")
        .setDescription(`\nStatus: **${emote2} Premium**\n\nKanał do Reklam: ${emote} <#${kanalreklam23}>\n\n` +  "```" + reklama + "```")
        .setFooter(`Wywołane Przez: ${msg.author.tag} | ${msg.author.id}` , msg.author.displayAvatarURL())
        return msg.channel.send(embed2)

    } else 
        if(!kanalreklam23 || !reklama) {
            const embed21 = new MessageEmbed()
            .setAuthor(`Nic nie Skonfigurowano!`, "https://cdn.discordapp.com/attachments/786700077937983549/797605135462170635/9330_tickred_2.gif")
            .setDescription(`Kanał do Reklam: ${emote1} **Nie Skonfigurowano**\nReklama Serwera: ${emote1} **Nie Skonfigurowano**`)
            .setColor("#FF8000")
            .setFooter(`Wywołane Przez: ${msg.author.tag} ${msg.author.id}` , msg.author.displayAvatarURL())
            return msg.channel.send(embed21)
        } else 
        if(!reklama) {
            const embed21 = new MessageEmbed()
            .setAuthor(`Skonfiguruj Reklame!`, "https://cdn.discordapp.com/attachments/786700077937983549/797605135462170635/9330_tickred_2.gif")
            .setDescription(`Kanał do Reklam: ${emote} <#${kanalreklam23}>\nReklama Serwera: ${emote1} **Nie Skonfigurowano**`)
            .setColor("#FF8000")
            .setFooter(`Wywołane Przez: ${msg.author.tag} ${msg.author.id}` , msg.author.displayAvatarURL())
            return msg.channel.send(embed21)
         } else {
    
        const embed2 = new MessageEmbed()
        .setAuthor("Podgląd Reklamy " + msg.guild.name, "https://cdn.discordapp.com/attachments/786700077937983549/797605135211298876/5845_tickgreen_1.gif")
        .setColor("#FF8000")
        .setDescription(`\nStatus: **🔰 Normalny**\n\nKanał do Reklam: ${emote} <#${kanalreklam23}>\n` +  "```" + reklama + "```")
        .setFooter(`Wywołane Przez: ${msg.author.tag} | ${msg.author.id}` , msg.author.displayAvatarURL())
        return msg.channel.send(embed2)
        
    }
}   
}
