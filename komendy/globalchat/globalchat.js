const db = require('../../models/Kanaly')
const Discord = require('discord.js')


module.exports = {
    name: 'global-chat-ustaw',
    aliases: ['globalchat-ustaw', 'ustaw-globalchat'],
    run: async(client, message, args) => {


        if (!message.member.hasPermission("MANAGE_GUILD")) {
            const permisja = new Discord.MessageEmbed()
            .setAuthor("Błąd!", "https://cdn.discordapp.com/attachments/797926429257891851/805469345358151710/Close_Icon_Dark-512.png")
            .setDescription("`Nie posiadasz Uprawnień do Zarządzania Serwera!`")
            .setColor("#FF8000")
            .setFooter(`Wywołane przez: ${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL())
        return message.channel.send(permisja)
        }


        const embedjuzjest = new Discord.MessageEmbed()
        .setAuthor("Błąd!", "https://cdn.discordapp.com/attachments/797926429257891851/805469345358151710/Close_Icon_Dark-512.png")
        .setDescription("`Ten kanał już jest podłączony pod Czat Globalny!`")
        .setColor("#FF8000")
        .setFooter(`Wywołane przez: ${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL())





db.findOne({ Guild: message.guild.id, Channel: message.channel.id, Activated: true}, async (err, data) => {
if (data) 
return message.channel.send(
    embedjuzjest
    );

data = new db({
    Guild: message.guild.id, 
    Channel: message.channel.id,
     Author: message.author.id,
      Activated: true,
});


data.save();

const embed = new Discord.MessageEmbed()
.setAuthor("Ustawiono!", "https://cdn.discordapp.com/attachments/797926429257891851/805468840083324978/Tick_Mark_Dark-512.png")
.setDescription(`${message.channel} Został pomyślnie podłączony pod Czat Globalny!`)
.setColor('#FF8000')
.setFooter(`Wywołane przez: ${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL())
 message.channel.send(embed)

}
)
    }
    
}
