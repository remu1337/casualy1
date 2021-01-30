const Discord = require(`discord.js`)
const kolory = require(`../../kolory.json`)

const db = require(`quick.db`)
module.exports = {
    name: "kolor-embed",
    aliases: ["embed-kolor"],
    run: async (client, message, args) => {

        if (!message.member.hasPermission("MANAGE_GUILD")) {
            const permisja = new Discord.MessageEmbed()
            .setAuthor("Błąd!", "https://cdn.discordapp.com/attachments/786700077937983549/797605135462170635/9330_tickred_2.gif")
            .setDescription("`Nie posiadasz Uprawnień do Zarządzania Serwera!`")
            .setColor("#FF8000")
            .setFooter(`Wywołane przez: ${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL())
        return message.channel.send(permisja)
        }

    const status_p = db.get(`premium_${message.guild.id}`)

    if (status_p == null || status_p == "nie") {
        let brak_p = new Discord.MessageEmbed()
        .setAuthor(`Twój Serwer nie posiada Premium!`, 'https://cdn.discordapp.com/attachments/797020528291479552/798268867989733446/6234_nitro_booster_s.gif')
        .setDescription("Informacje dotyczące Premium pod komendą `r!premium` !")
        .setColor('#FF8000')
        .setFooter(`Wywołane przez: ${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL())
        return message.channel.send(brak_p)
    }

        if (args[0] == null || args[0] == undefined) {
            let bladargs = new Discord.MessageEmbed()
            .setDescription("Podaj Kolor!")
            .setColor('#FF8000')
            .setAuthor(`Błąd!`, message.author.displayAvatarURL({ dynamic:true }))
            .setFooter(`Wywołane przez: ${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL())
            return message.channel.send(bladargs)
        }

        let wybrany_kolor = args[0].toLowerCase()

        if (kolory[wybrany_kolor] == undefined || kolory[wybrany_kolor] == null) {
            let bladargs = new Discord.MessageEmbed()
            .setDescription("Nasz Bot nie obsługuje tego Koloru! Lista Kolorów `r!kolory`")
            .setColor('#FF8000')
            .setAuthor(`Błąd!`, message.author.displayAvatarURL({ dynamic:true }))
            .setFooter(`Wywołane przez: ${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL())
            return message.channel.send(bladargs)
        }

        db.set(`${message.guild.id}_typ_kolor`, kolory[wybrany_kolor])
        
        let sukces = new Discord.MessageEmbed()
        .setAuthor(`Ustawiono Kolor Reklamy!`, message.author.displayAvatarURL({ dynamic:true }))
        .setColor('#FF8000')
        .setDescription(`Kolor Reklamy został pomyślnie zmieniony!\nNowy Kolor: **${wybrany_kolor}**`)
        .setFooter(`Wywołane przez: ${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL())
        return message.channel.send(sukces)
    }

}





