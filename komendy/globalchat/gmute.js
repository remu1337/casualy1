const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "gmute",
    run: async (client, msg, args) => {
        if (!msg.member.roles.cache.has("797219516920234054")) return;

        if (!args[0]) {
            return msg.reply("Podaj id osoby!")
        }

        db.set(`gmute_${args[0]}`, "Wyciszono!")
        msg.reply("Wyciszono!")
    }

}
