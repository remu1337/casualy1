const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "odrzuc",
    aliases: ["odrzuć"],
    run: async (client, msg, args) => {
        if (!msg.member.roles.cache.has("797219516920234054")) return;

        if (!args[0]) {
            return msg.reply("Podaj id!")
        }

        if (!db.get(`reklama_do_${args[0]}`)) {
            return msg.reply("Nie ma takiej reklamy w bazie danych!")
        }

        if (!args[1]) {
            return msg.reply("Podaj powód!")
        }

        const osoba = new MessageEmbed()
        .setAuthor("Odrzucono!", "https://cdn.discordapp.com/attachments/780363127376183306/780790637464518656/wrong.gif")
        .setDescription("Reklama serwera `" + db.get(`reklama_do_${args[0]}_name`) + "` została odrzucona z **POWODU** \n`" + args.slice(1).join(" ") + "`")
        .setFooter(`Weryfikowana przez: ${msg.author.tag} | ${msg.author.id}`, msg.author.displayAvatarURL())
        .setColor("#FF8000")
        client.users.cache.get(db.get(`reklama_do_${args[0]}_osoba`)).send(osoba)

        const kanal_reklam = new MessageEmbed()
        .setAuthor("Odrzucono!", "https://cdn.discordapp.com/attachments/780363127376183306/780790637464518656/wrong.gif")
        .setDescription("Reklama tego serwera została odrzucona z **POWODU**\n`" + args.slice(1).join(" ") + "`")
        .setColor("#FF8000")
        .setFooter(`Weryfikowana przez: ${msg.author.tag} | ${msg.author.id}`, msg.author.displayAvatarURL())
        client.channels.cache.get(db.get(`kanal_reklama_${args[0]}`)).send(kanal_reklam)

        const statusy = new MessageEmbed()
        .setAuthor("Reklama Odrzucona!", "https://cdn.discordapp.com/attachments/780363127376183306/780790637464518656/wrong.gif")
        ///.setDescription("Reklama Serwera `" + db.get(`reklama_do_${args[0]}_name`) + "` została odrzucona z **Powodu:**`" + args.slice(1).join(" ") + "`")
        .addField('Nazwa Serwera:', '```\n' + db.get(`reklama_do_${args[0]}_name`) + '\n```')
        .addField('Z Powodu', '```\n' + args.slice(1).join(" ") + '\n```')
        .setFooter(`Weryfikowana przez: ${msg.author.tag} | ${msg.author.id}`, msg.author.displayAvatarURL())
        .setColor("#FF8000")
        client.channels.cache.get("797239542171828254").send(statusy)
        db.delete(`reklama_do_${args[0]}_osoba`)
        db.delete(`reklama_do_${args[0]}`)
        db.delete(`reklama_do_${args[0]}_name`)
        msg.channel.send("Odrzucono!")
    }

}