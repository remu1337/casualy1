const Discord = require('discord.js')


module.exports = {
    name: 'zglos',
    aliases: ['zgłoś'],
    run: async (client, msg, args) => {

        if(!args.join(" "))  {
            let embed = new Discord.MessageEmbed()
            .setAuthor("Błąd!", "https://cdn.discordapp.com/attachments/797926429257891851/805469345358151710/Close_Icon_Dark-512.png")
            .setColor("RED")
            .setDescription("`Podaj treść błędu!` \n`(PAMIĘTAJ ŻARTOWNE BŁEDY = GLOBALNY BAN)`")
            .setFooter(`Wywołane przez: ${msg.author.tag} ${msg.author.id}`, msg.author.displayAvatarURL())
            msg.channel.send(embed)

        } else {
            let blad = new Discord.MessageEmbed()
            .setTitle('NOWY ZGŁOSZONY BŁĄD')
            .setColor('ORANGE')
            .setThumbnail('https://media3.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif')
           .setDescription("Zgłosił: `" + msg.author.username + " || " + msg.author.id + "`")
           .addField('Treść Błędu:', args.join(" "))
           .setTimestamp()
           client.channels.cache.get("806215368057290792").send(blad)

           let embed1 = new Discord.MessageEmbed()
           .setAuthor('Wysłano!','https://cdn.discordapp.com/attachments/797926429257891851/805468840083324978/Tick_Mark_Dark-512.png')
           .setColor('ORANGE')
           .setDescription('`Wysłano Błąd do Administracji!`\n`Żartowny Błąd = GLOBAL BAN`')
           .setFooter(`Wywołane przez: ${msg.author.tag} ${msg.author.id}`, msg.author.displayAvatarURL())
           .setTimestamp()
           msg.channel.send(embed1)

        }


    }
}