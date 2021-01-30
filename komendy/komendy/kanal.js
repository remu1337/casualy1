const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const db = require("quick.db")


module.exports = {
    name: "kanal",
    aliases: ["kanał"],
    run: async (client, msg, args) => {
        const emote = client.emojis.cache.find(e => e.name === 'info')


        if (!msg.member.hasPermission("MANAGE_GUILD")) {
            const permisja = new Discord.MessageEmbed()
            .setAuthor("Błąd!", "https://cdn.discordapp.com/attachments/786700077937983549/797605135462170635/9330_tickred_2.gif")
            .setDescription("`Nie posiadasz Uprawnień do Zarządzania Serwera!`")
            .setColor("#FF8000")
            .setFooter(`Wywołane przez: ${msg.author.tag} | ${msg.author.id}`, msg.author.displayAvatarURL())
        return msg.channel.send(permisja)
        }
    
        const men_kan = 
        msg.guild.channels.cache.get(args[0]) ||
        msg.guild.channels.cache.find(x => x.name === args.join(" ")) ||
        msg.mentions.channels.first();
    
        if (!men_kan) {
            const blad_kanal = new Discord.MessageEmbed()
            .setAuthor("Błąd!", "https://cdn.discordapp.com/attachments/786700077937983549/797605135462170635/9330_tickred_2.gif")
            .setDescription("`Oznacz Kanał do Reklam!`")
            .setColor("#FF8000")
            .setFooter(`Wywołane Przez: ${msg.author.tag} | ${msg.author.id}` , msg.author.displayAvatarURL())
        return msg.channel.send(blad_kanal)
        }
    
        if (!msg.guild.channels.cache.get(men_kan.id)) {
            const blad_kanal2 = new Discord.MessageEmbed()
            .setAuthor("Błąd!", "https://cdn.discordapp.com/attachments/786700077937983549/797605135462170635/9330_tickred_2.gif")
            .setDescription("`Oznacz Kanał do Reklam!`")
            .setColor("#FF8000")
            .setFooter(`Wywołane Przez: ${msg.author.tag} | ${msg.author.id}` , msg.author.displayAvatarURL())
        return msg.channel.send(blad_kanal2)
        }
    
        if (men_kan.type !== "text") {
            const no_oznacz_ten_kanal_deklu = new Discord.MessageEmbed()
            .setAuthor("Błąd!", "https://cdn.discordapp.com/attachments/786700077937983549/797605135462170635/9330_tickred_2.gif")
            .setDescription("`Oznacz Kanał do Reklam!`")
            .setColor("#FF8000")
            .setFooter(`Wywołane przez: ${msg.author.tag} | ${msg.author.id}`, msg.author.displayAvatarURL())
            return msg.channel.send(no_oznacz_ten_kanal_deklu)
        }
    
        db.set(`kanal_reklama_${msg.guild.id}`, men_kan.id)
    
        const embed = new Discord.MessageEmbed()
        .setAuthor("Ustawiono!", "https://cdn.discordapp.com/attachments/786700077937983549/797605135211298876/5845_tickgreen_1.gif")
        .setDescription("`Pomyślnie Ustawiono Kanał do Reklam!`")
        .addField('Następnie', '```\nUstaw Reklame Serwera\n```')
        .setColor('#FF8000')
        .setFooter(`Wywołane przez: ${msg.author.tag} | ${msg.author.id}`, msg.author.displayAvatarURL())
        await msg.channel.send(embed), men_kan.setTopic(`${emote} Reklamy Bota Casualy.Ad`)
    
    
    }
}