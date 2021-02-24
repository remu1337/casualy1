const db = require('quick.db')
const Discord = require('discord.js')


module.exports = {
    name: 'global-chat-ustaw',
   aliases: ['globalchat-ustaw', 'ustaw-globalchat'],
      run: async(client, message, args) => {

        const emote = client.emojis.cache.find(e => e.name === 'kooGZLogo')

        const men_kan = 
        message.guild.channels.cache.get(args[0]) ||
        message.guild.channels.cache.find(x => x.name === args.join(" ")) ||
        message.mentions.channels.first();


        if (!message.member.hasPermission("MANAGE_GUILD")) {
            const permisja = new Discord.MessageEmbed()
            .setAuthor("Błąd!", "https://cdn.discordapp.com/attachments/797926429257891851/805469345358151710/Close_Icon_Dark-512.png")
            .setDescription("`Nie posiadasz Uprawnień do Zarządzania Serwera!`")
            .setColor("#FF8000")
            .setFooter(`Wywołane przez: ${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL())
        return message.channel.send(permisja)
        }

          
        if (!men_kan) {
            const blad_kanal = new Discord.MessageEmbed()
            .setAuthor("Błąd!", "https://cdn.discordapp.com/attachments/797926429257891851/805469345358151710/Close_Icon_Dark-512.png")
            .setDescription("`Oznacz kanał na którym będzie Czat Globaalny!`")
            .setColor("#FF8000")
            .setFooter(`Wywołane Przez: ${message.author.tag} | ${message.author.id}` , message.author.displayAvatarURL())
        return message.channel.send(blad_kanal)
        }


        if (!message.guild.channels.cache.get(men_kan.id)) {
          
                const kanaloznacz = new Discord.MessageEmbed()
                .setAuthor("Błąd!", "https://cdn.discordapp.com/attachments/797926429257891851/805469345358151710/Close_Icon_Dark-512.png")
                .setDescription("`Oznacz kanał na którym będzie Czat Globaalny!`")
                .setColor("#FF8000")
                .setFooter(`Wywołane przez: ${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL())
            return message.channel.send(kanaloznacz)
    

        }

          
        if (men_kan.type !== "text") {
            const no_oznacz_ten_kanal_deklu = new Discord.MessageEmbed()
            .setAuthor("Błąd!", "https://cdn.discordapp.com/attachments/797926429257891851/805469345358151710/Close_Icon_Dark-512.png")
            .setDescription("`Oznacz kanał na którym będzie Czat Globaalny!`")
            .setColor("#FF8000")
            .setFooter(`Wywołane przez: ${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL())
            return message.channel.send(no_oznacz_ten_kanal_deklu)
        }




if(db.get(`gchat_${message.guild.id}`)) { 
        const embedjuzjest = new Discord.MessageEmbed()
        .setAuthor("Błąd!", "https://cdn.discordapp.com/attachments/797926429257891851/805469345358151710/Close_Icon_Dark-512.png")
        .setDescription("`Ten kanał już jest podłączony pod Czat Globalny!`")
        .setColor("#FF8000")
        .setFooter(`Wywołane przez: ${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL())
        message.channel.send(embedjuzjest)
}  else { 

    db.set(`gchat_${message.guild.id}`, men_kan.id)
    const gotowe = new Discord.MessageEmbed()
    .setAuthor("Ustawiono!", "https://cdn.discordapp.com/attachments/797926429257891851/805468840083324978/Tick_Mark_Dark-512.png")
    .setDescription("Kanał do global chatu został pomyślnie ustawiony!")
    .setFooter(`Wywołane przez: ${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL())
    .setColor("ORANGE")
    message.channel.send(gotowe)
}
}

    }
 

