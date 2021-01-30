const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const db = require("quick.db")


module.exports = {
    name: "usun",
    aliases: ["usuń"],
    run: async (client, msg, args) => {
        if(!msg.member.roles.cache.has("797219516920234054")) return;

        if (!args[0]) {
            return msg.reply("Podaj numer reklamy!")
        }

        if (!args[1]) {
            return msg.reply("Podaj powód!")
        }

        if (!db.get(`reklama_${args[0]}`)) {
            return msg.reply("W bazie danych nie ma takiej reklamy!")
        }

        db.delete(`reklama_${args[0]}`)
        db.delete(`reklama_${args[0]}_id`)
        const statusy = new MessageEmbed()
        .setAuthor("Reklama Usunięta!", "https://cdn.discordapp.com/attachments/786700077937983549/797610924579487775/recycle-bin.png")
       /// .setDescription("Reklama z Numerkiem `" + args[0] + "` została usunięta z **Powodu**\n`" + args.slice(1).join(" ") + "`")
        .addField('Numer Reklamy:', '```\n' + args[0] + '\n```')
        .addField('Z Powodu', '```\n' + args.slice(1).join(" ") + '\n```')
        .setFooter(`Usunięte Przez: ${msg.author.tag} ${msg.author.id}`, msg.author.displayAvatarURL())
        .setColor("#FF8000")
        client.channels.cache.get("797239542171828254").send(statusy)
        msg.reply("Usunięto reklame o numerze `" + args[0] + "`!")
    }
}