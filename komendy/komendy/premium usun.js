const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "usun-premium",
    run: async (client, msg, args) => {
        if (msg.author.id !== "768702975576899614") return;

        if (!args[0]) {
            return msg.reply("Podaj id serwera!")
        }

        if (!db.get(`premium_${args[0]}`)) {
            return msg.reply("Ten serwer nie posiada premium!")
        }

        db.delete(`premium_${args[0]}`)
        msg.reply("Usunięto premium serwerowi o id `" + args[0] + "`!")
        const kanal_reklam = new MessageEmbed()
        .setAuthor("Ogłoszenie!", "https://cdn.discordapp.com/attachments/797020528291479552/798268867989733446/6234_nitro_booster_s.gif")
        .setDescription("Serwer stracił premium!")
        .setColor("ORANGE")
        client.channels.cache.get(db.get(`kanal_reklama_${args[0]}`)).send(kanal_reklam)

        const statusy = new Discord.MessageEmbed()
        .setAuthor("Ogłoszenie!", "https://cdn.discordapp.com/attachments/797020528291479552/798268867989733446/6234_nitro_booster_s.gif")
        .setDescription(`Serwer o ID ${args[0]} stracił premium!`)
        .setColor("ORANGE")
        .setFooter(`Usunięte przez: ${msg.author.tag} | ${msg.author.id}`, msg.author.displayAvatarURL())
        client.channels.cache.get("797239542171828254").send(statusy)
    }
}