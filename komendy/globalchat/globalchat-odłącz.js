const db = require('quick.db')
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

        if(!db.get(`gchat_${message.guild.id}`)) { 

            const nieconnect = new Discord.MessageEmbed()
            .setAuthor("Błąd!", "https://cdn.discordapp.com/attachments/797926429257891851/805469345358151710/Close_Icon_Dark-512.png")
            .setDescription(`${message.channel} nie jest podłączony pod Chat Globalny!`)
            .setColor("#FF8000")
            .setFooter(`Wywołane przez: ${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL())
            
            message.channel.send(nieconnect)
            
            } 
            if(db.get(`gchat_${message.guild.id}`)) {
        
                db.delete(`gchat_${message.guild.id}`)
                const embed = new Discord.MessageEmbed()
                .setAuthor("Odłączono!", "https://cdn.discordapp.com/attachments/797926429257891851/805468840083324978/Tick_Mark_Dark-512.png")
                .setDescription("`Pomyślnie odłączono kanał od Chatu Globalnego `")
                .setColor('#FF8000')
                .setFooter(`Wywołane przez: ${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL())
                message.channel.send(embed)
            }


   

    }
}