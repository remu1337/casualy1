const Discord = require(`discord.js`)
const db = require(`quick.db`)

module.exports = {
name: 'gban',
run: async (client, message, args) => {
    if(message.author.id !== '768702975576899614') return message.channel.send('Ta komenda jest tylko dla OWNERA BOTA!')

    const channel = client.channels.cache.get('813431269223301190')

    if (!args[0]) {
   message.reply('Podaj argumenty! dodaj/odbierz`')
    } 

    const typ = 
        message.mentions.members.first() ||
        client.users.cache.get(args[1])

    if (!typ) {
     message.reply('Podaj ID lub oznacz Użytkownika!')
    }

    if (args[0] == "dodaj") {
        let powod = args.slice(2).join(" ")

        if (!powod) {
            powod = "Brak Powodu!"
        }
        db.set(`gban_s_${typ.id}`, "tak")
        db.set(`gban_p_${typ.id}`, powod)
        db.set(`gban_b_${typ.id}`, message.author.id)

        
        message.reply('Pomyślnie nadano!')

        const embed6 = new Discord.MessageEmbed()
        .setAuthor('Global Ban!')
        .setColor('RED')
        .setThumbnail('https://cdn.discordapp.com/attachments/780804972392087552/800726253287374868/Hammer.png')
        .setDescription(`Otrzymałeś Globalną Blokade na Komendy!\n **Z powodu: ${powod}**`)
        .setFooter(`Nałozył: ${message.author.tag}| ${message.author.id}|Casualy.AD`, message.author.displayAvatarURL({dynamic: true }))
        typ.send(embed6)

        const embed12 = new Discord.MessageEmbed()
        .setAuthor('Pomyślnie nadano!')
        .setColor('RED')
        .setThumbnail('https://cdn.discordapp.com/attachments/780804972392087552/800726253287374868/Hammer.png')
        .setDescription(`Użytkownik ${typ.user.tag} [${typ.id}] otrzymał globalną blokade na Komendy!\nPowód blokady: **${powod}**`)
        .setFooter(`Nałozył: ${message.author.tag}| ${message.author.id}|Casualy.AD`, message.author.displayAvatarURL({dynamic: true }))
        client.channels.cache.get("813431269223301190").send(embed12)
    } else if (args[0] == "odbierz") {
        db.set(`gban_s_${typ.id}`, "nie")
        db.set(`gban_p_${typ.id}`, "Globalna blokda zdjęta przez: "+message.author.tag+" ("+message.author.id+")")

   message.reply('Pomyślnie odebrano!')

        let napw = new Discord.MessageEmbed()
        .setAuthor('Global Ban!')
        .setColor('GREEN')
        .setThumbnail('https://cdn.discordapp.com/attachments/780804972392087552/800726253287374868/Hammer.png')
        .setDescription(`Odebrano Globalna Blokade na Komendy!`)
        .setFooter(`Odebrał: ${message.author.tag}| ${message.author.id}|Casualy.AD`, message.author.displayAvatarURL({dynamic: true }))
              typ.send(napw)
const log = new Discord.MessageEmbed()
      .setAuthor('Odebrano Gbana!')
        .setColor('GREEN')
        .setThumbnail('https://cdn.discordapp.com/attachments/780804972392087552/800726253287374868/Hammer.png')
        .setDescription(`Użytkownikowi ${typ.user.tag} [${typ.id}] została odebrana globalna blokada na Komendy!`)
        .setFooter(`Odebrał: ${message.author.tag}| ${message.author.id}|Casualy.AD`, message.author.displayAvatarURL({dynamic: true }))
        return channel.send(log)
    }


}

}