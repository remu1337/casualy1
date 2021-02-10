const Discord = require(`discord.js`)

module.exports = {
    name: "kolory",
    aliases: [""],
    run: async (client, message, args) => {
    const emote1 = client.emojis.cache.find(e => e.name === 'bialy212')
    const emote2 = client.emojis.cache.find(e => e.name === 'bronz6')
    const emote3 = client.emojis.cache.find(e => e.name === 'czarny67')
    const emote4 = client.emojis.cache.find(e => e.name === 'czerwony6')
    const emote5 = client.emojis.cache.find(e => e.name === 'niebieski9')
    const emote6 = client.emojis.cache.find(e => e.name === 'szary8')
    const emote7 = client.emojis.cache.find(e => e.name === 'zielony3')
    const emote8 = client.emojis.cache.find(e => e.name === 'roz679')
    const emote9 = client.emojis.cache.find(e => e.name === 'zolty88')
    const emote10 = client.emojis.cache.find(e => e.name === 'violet56')
    const emote11 = client.emojis.cache.find(e => e.name === 'blekit122')
    const emote12 = client.emojis.cache.find(e => e.name === 'jasnozielony1234')
    const emote13 = client.emojis.cache.find(e => e.name === 'pomarancz124')///pomarancz124 
    const emote14 = client.emojis.cache.find(e => e.name === 'randomkolor233')



    let kolory = new Discord.MessageEmbed()
    .setColor('#FF8000')
    .setAuthor(`Kolory jakie obsługuje Bot!`, 'https://cdn.discordapp.com/attachments/780804972392087552/800775591841234964/colors-icon-4.png')
    .setDescription(`${emote1} biały\n\n${emote2} brązowy\n\n${emote3} czarny\n\n${emote4} czerwony\n\n${emote5} niebieski\n\n${emote6} szary\n\n${emote7} zielony\n\n${emote8} różowy\n\n${emote9} żółty\n\n${emote10} fioletowy\n\n${emote11} błękit\n\n${emote12} jasnozielony\n\n${emote13} pomarańczowy\n\n${emote14} random`)
    .setFooter(`Wywołane Przez: ${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL())
    return message.channel.send(kolory)
}
}