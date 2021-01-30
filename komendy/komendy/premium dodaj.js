const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "dodaj-premium",
    run: async (client, msg, args) => {
        if (msg.author.id !== "768702975576899614") return;

        if (!args[0]) {
            return msg.reply("Podaj id!")
        }

        if (db.get(`premium_${args[0]}`)) {
            return msg.reply("Ten serwer posiada już premium!")
        }

        db.set(`premium_${args[0]}`, "Posiada!") 
        const kanal_reklam = new MessageEmbed()
        .setAuthor("Ogłoszenie!", "https://cdn.discordapp.com/attachments/797020528291479552/798268867989733446/6234_nitro_booster_s.gif")
        .setDescription("Serwer uzyskał premium!")
        .setColor("ORANGE")
        client.channels.cache.get(db.get(`kanal_reklama_${args[0]}`)).send(kanal_reklam)

        const statusy = new Discord.MessageEmbed()
        .setAuthor("Ogłoszenie!", "https://cdn.discordapp.com/attachments/797020528291479552/798268867989733446/6234_nitro_booster_s.gif")
        .setDescription(`Serwer o ID ${args[0]} uzyskał premium!`)
        .setColor("ORANGE")
        .setFooter(`Dodane przez: ${msg.author.tag} | ${msg.author.id}`, msg.author.displayAvatarURL())
        client.channels.cache.get("797239542171828254").send(statusy)
        msg.reply("Nadano premium!")

    }
}