const Discord = require("discord.js")


module.exports = {
    name: "prefix",
    aliases: ["ustawprefix"],
    run: async (client, message, args) => {

        const permisja = new Discord.MessageEmbed()
        .setAuthor("Błąd!", "")
        .setDescription("`Nie posiadasz Uprawnień do Zarządzania Serwera!`")
        .setColor("#FF8000")
        .setFooter(`Wywołane przez: ${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL())


if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(permisja);
if (!args[0]) return message.channel.send('Podaj nowy prefix!');
const db = require('quick.db');


db.set(`prefix_${message.guild.id}`, args[0]);

let pomyslnie = new Discord.MessageEmbed()
.setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
.setAuthor('Pomyślnie Zmieniono!', '')
.setColor('#FF8000')
.setDescription(`Ustawiono Prefix na: \`${args[0]}\``)
.setFooter(`Wywołane przez: ${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL())
message.channel.send(pomyslnie)

}
}
