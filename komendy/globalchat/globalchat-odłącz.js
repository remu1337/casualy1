const db = require('../../models/Kanaly')
const Discord = require('discord.js')


module.exports = {
    name: 'globalchat-odłącz',
    aliases: ['globalchat-odlacz', 'globalchat-usuń', 'usun-globalchat', 'globalchat-usun', 'usuń-globalchat',],
    run: async(client, message, args) => {


        if (!message.member.hasPermission("MANAGE_GUILD")) {
            const permisja = new Discord.MessageEmbed()
            .setAuthor("Błąd!", "https://cdn.discordapp.com/attachments/797926429257891851/805469345358151710/Close_Icon_Dark-512.png")
            .setDescription("`Nie posiadasz Uprawnień do Zarządzania Serwera!`")
            .setColor("#FF8000")
            .setFooter(`Wywołane przez: ${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL())
        return message.channel.send(permisja)
        }


        const embed = new Discord.MessageEmbed()
.setAuthor("Ustawiono!", "https://cdn.discordapp.com/attachments/797926429257891851/805468840083324978/Tick_Mark_Dark-512.png")
.setDescription("`Pomyślnie odłączono kanał od Chatu Globalnego `")
.setColor('#FF8000')
.setFooter(`Wywołane przez: ${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL())



        const query = { 
            Guild: message.guild.id, 
            Channel: message.channel.id,
             Author: message.author.id,
              Activated: true,
        }

db.findOne(query, async (err, data) => {
if (data) { 
    await db.findOneAndDelete(query);
    return message.channel.send(embed)
}

const nieconnect = new Discord.MessageEmbed()
.setAuthor("Błąd!", "https://cdn.discordapp.com/attachments/797926429257891851/805469345358151710/Close_Icon_Dark-512.png")
.setDescription(`${message.channel} Nie jest podłączony pod Chat Globalny!`)
.setColor("#FF8000")
.setFooter(`Wywołane przez: ${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL())

message.channel.send(nieconnect)

})


    }
}