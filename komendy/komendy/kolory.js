const Discord = require(`discord.js`)

module.exports = {
    name: "kolory",
    aliases: ["colors"],
    run: async (client, message, args) => {
   



    let kolory = new Discord.MessageEmbed()
    .setColor('#FF8000')
    .setAuthor(`Kolory jakie obsługuje Bot!`, 'https://cdn.discordapp.com/attachments/780804972392087552/800775591841234964/colors-icon-4.png')
    .setDescription('```\nBIAŁY\nBRĄZOWY\nCZARNY\nCZERWONY\nNIEBIESKI\nSZARY\nZIELONY\nRÓŻOWY\nŻÓŁTY\nFIOLETOWY\nBŁĘKIT\nJASNOZIELONY\nPOMARAŃCZOWY\nLOSOWY\n```')
    .setFooter(`Wywołane Przez: ${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL())
    return message.channel.send(kolory)
}
}