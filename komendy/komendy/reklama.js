const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "reklama",
    run: async (client, msg, args) => {
        const emote1 = client.emojis.cache.find(e => e.name === 'link8090')

        if (!msg.member.hasPermission("MANAGE_GUILD")) {
            const brak_uprawnien = new MessageEmbed()
            .setAuthor("Błąd!", "https://cdn.discordapp.com/attachments/797926429257891851/805469345358151710/Close_Icon_Dark-512.png")
            .setColor("RED")
            .setDescription("`Nie posiadasz Uprawnień do Zarządzania Serwera!`")
            .setFooter(`Wywołane przez: ${msg.author.tag} ${msg.author.id}`, msg.author.displayAvatarURL())

        return msg.channel.send(brak_uprawnien)
        }

        if (db.get(`reklama_do_${msg.guild.id}`)) {
            const czeka = new MessageEmbed()
            .setAuthor("Błąd!", "https://cdn.discordapp.com/attachments/797926429257891851/805469345358151710/Close_Icon_Dark-512.png")
            .setDescription("`Reklama oczekuje na Weryfikacje przez Weryfikatorów!`")
            .setColor("RED")
            .setFooter(`Wywołane przez: ${msg.author.tag} ${msg.author.id}`, msg.author.displayAvatarURL())
            return msg.channel.send(czeka)
        }

        if (!db.get(`kanal_reklama_${msg.guild.id}`)) {
            const brak_kanału = new MessageEmbed()
            .setAuthor("Błąd!", "https://cdn.discordapp.com/attachments/797926429257891851/805469345358151710/Close_Icon_Dark-512.png")
            .setDescription("`Ustaw najpierw kanał do reklama!`")
            .setColor("RED")
            .setFooter(`Wywołane przez: ${msg.author.tag} ${msg.author.id}`, msg.author.displayAvatarURL())
        return msg.channel.send(brak_kanału)
        }

        if (!args[0]) {
            const brak_reklamy = new MessageEmbed()
            .setAuthor("Błąd!", "https://cdn.discordapp.com/attachments/797926429257891851/805469345358151710/Close_Icon_Dark-512.png")
            .setDescription("`Podaj treść twojej reklamy!`")
            .setColor("RED")
            .setFooter(`Wywołane przez: ${msg.author.tag} ${msg.author.id}`, msg.author.displayAvatarURL())
        return msg.channel.send(brak_reklamy)
        }

        if (args.join(" ").includes("@here")) {
            const nie_dawać_here_do_reklamy = new Discord.MessageEmbed()
            .setAuthor("Błąd!", "https://cdn.discordapp.com/attachments/797926429257891851/805469345358151710/Close_Icon_Dark-512.png")
            .setDescription(`Usuń wzmianke here z reklamy.`)
            .setColor("RED")
            .setFooter(`Wywołane przez: ${msg.author.tag} ${msg.author.id}`, msg.author.displayAvatarURL())
            return msg.channel.send(nie_dawać_here_do_reklamy)
           }
        
           if (args.join(" ").includes("@everyone")) {
            const nie_dawać_evryone_do_reklamy = new Discord.MessageEmbed()
            .setAuthor("Błąd!", "https://cdn.discordapp.com/attachments/797926429257891851/805469345358151710/Close_Icon_Dark-512.png")
            .setDescription(`Usuń wzmianke everyone z Reklamy!`)
            .setColor("RED")
            .setFooter(`Wywołane przez: ${msg.author.tag} ${msg.author.id}`, msg.author.displayAvatarURL())
            return msg.channel.send(nie_dawać_evryone_do_reklamy)
           }
            
           if (args.join(" ").includes("discord.gg/" || "https://discord.gg/" || "discordapp.com/invite/" || "https://discordapp.com/invite/")) {
            const nie_dodawaj_linku = new Discord.MessageEmbed()
            .setAuthor("Błąd!", "https://cdn.discordapp.com/attachments/797926429257891851/805469345358151710/Close_Icon_Dark-512.png")
            .setDescription(`Usuń zaproszenie z reklamy, bot sam doda!`)
            .setColor("RED")
            .setFooter(`Wywołane przez: ${msg.author.tag} ${msg.author.id}`, msg.author.displayAvatarURL())
           return msg.channel.send(nie_dodawaj_linku)
        }
        if (args.join(" ").length > 1000) { 
           const za_duzo = new MessageEmbed()
           .setAuthor("Błąd!", 'https://cdn.discordapp.com/attachments/797926429257891851/805469345358151710/Close_Icon_Dark-512.png')
           .setDescription(`Reklama posiada za dużo znaków!`)
           .addField('Prosimy', '```\nMniej niż 1000 znaków!!\n```')
           .setColor('RED')
           .setFooter(`Wywołane przez: ${msg.author.tag} ${msg.author.id}`, msg.author.displayAvatarURL())
       return msg.channel.send(za_duzo)
       }
   
    
           
    
       msg.channel.createInvite({
        maxAge: 0
        }).then(invite => { 
            db.set(`reklama_do_${msg.guild.id}`, args.join(" ") + `\nhttps://discord.gg/${invite.code}`)
            db.set(`reklama_do_${msg.guild.id}_name`, msg.guild.name)
            db.set(`reklama_do_${msg.guild.id}_osoba`, msg.author.id)
            db.set(`reklama_${msg.guild.id}_serwera`, args.join(" ") + `\nhttps://discord.gg/${invite.code}`)
            
            const reply = new MessageEmbed()
            .setAuthor("Pomyślnie Ustawiono!", "https://cdn.discordapp.com/attachments/797926429257891851/805468840083324978/Tick_Mark_Dark-512.png")
            .setDescription(`Reklama tego serwera została wysłana do weryfikacji!`)
            .addField('Następnie', '```\nCzekaj na Weryfikacje Reklamy!\n```')
            .setColor('#FF8000')
            msg.channel.send(reply)

            const spr_reklam = new MessageEmbed()
            .setAuthor("Nowa reklama do sprawdzenia!", "https://cdn.discordapp.com/attachments/797926429257891851/805468840083324978/Tick_Mark_Dark-512.png")
            .setDescription("Nazwa/ID Serwera: `" + msg.guild.name + " || " + msg.guild.id + "`\nDodał: `" + msg.author.username + " || " + msg.author.id + "`")
            .addField("Reklama:", "`" + db.get(`reklama_do_${msg.guild.id}`) + "`")
            .addField("Sprawdz czy wszytko się zgadza!", `[**Zaproszenie**](https://discord.gg/${invite.code})`)
            client.channels.cache.get("797252695039279134").send(spr_reklam)
            client.channels.cache.get("797252695039279134").send("@everyone")
            client.channels.cache.get("797252695039279134").send(msg.guild.id)

        })
    }
}




