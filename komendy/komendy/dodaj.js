const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "dodaj",
    run: async (client, msg, args) => {
        if (!msg.member.roles.cache.has("798316494025916478")) return;

        if (!args[0]) {
            return msg.reply("Podaj id!")
        }

        if (!db.get(`reklama_do_${args[0]}`)) {
            return msg.reply("Nie ma takiej reklamy do zaakceptowania!")
        }

        if (!args[1]) {
            return msg.reply("Podaj numer!")
        }

        if (db.get(`reklama_${args[1]}`)) {
            return msg.reply("Reklama jest zajęta!")
        }

        db.set(`reklama_${args[1]}`, db.get(`reklama_do_${args[0]}`))
        db.set(`reklama_${args[1]}_id`, args[0])
        
        const ustawia = new Discord.MessageEmbed()
        .setAuthor("Reklama Dodana!", "https://cdn.discordapp.com/attachments/797926429257891851/805468840083324978/Tick_Mark_Dark-512.png")
        ///.setDescription("Reklama serwera `" + db.get(`reklama_do_${args[0]}_name`) + "` została dodana pod numer `" + args[1] + "`")
        .addField('Nazwa Serwera:', '```\n' + db.get(`reklama_do_${args[0]}_name`) + '\n```')
        .addField('Znajduje się pod Numerem', '```\n' + args[1] + '\n```')
        .setFooter(`Weryfikowana przez: ${msg.author.tag} | ${msg.author.id}`, msg.author.displayAvatarURL())
        .setColor('#FF8000')
        client.users.cache.get(db.get(`reklama_do_${args[0]}_osoba`)).send(ustawia)
    


        const rekkan = new Discord.MessageEmbed()
    .setAuthor("Reklama Dodana!", "https://cdn.discordapp.com/attachments/797926429257891851/805468840083324978/Tick_Mark_Dark-512.png")
    .setDescription("Reklama tego Serwera otrzymała numer `" + args[1] + "`!")
    .setColor('#FF8000')
    .setFooter(`Weryfikowana Przez: ${msg.author.tag} | ${msg.author.id}`, msg.author.displayAvatarURL())
    client.channels.cache.get(db.get(`kanal_reklama_${args[0]}`)).send(rekkan)

    const statusy = new Discord.MessageEmbed()
    .setAuthor("Reklama Dodana!", "https://cdn.discordapp.com/attachments/797926429257891851/805468840083324978/Tick_Mark_Dark-512.png")
    ///.setDescription("Reklama serwera `" + db.get(`reklama_do_${args[0]}_name`) + "` została zaakceptowana i znajduje się pod numerem `" + args[1] + "`")
    .addField('Nazwa Serwera:', '```\n' + db.get(`reklama_do_${args[0]}_name`) + '\n```')
    .addField('Znajduje się pod Numerem', '```\n' + args[1] + '\n```')
    .setFooter(`Weryfikowana przez: ${msg.author.tag} | ${msg.author.id}`, msg.author.displayAvatarURL())
    .setColor("#FF8000")
    client.channels.cache.get("797239542171828254").send(statusy)
        db.delete(`reklama_do_${args[0]}_osoba`) 
        db.delete(`reklama_do_${args[0]}`)
        db.delete(`reklama_do_${args[0]}_name`)
        msg.reply("Dodano pod numer `" + args[1] + "`!")
        
    }
}