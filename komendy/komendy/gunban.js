
const blacklist = require('../../models/blacklist')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'gunban',
    run : async(client, message, args) => {
        if(message.author.id !== '768702975576899614') return message.channel.send('Ta komenda jest tylko dla OWNERA BOTA!')
        const User = message.guild.members.cache.get(args[0])
        if(!User) return message.channel.send('Zła Nazwa lub ID!')



        const embed6 = new MessageEmbed()
        .setAuthor('Global Ban!')
        .setColor('GREEN')
        .setImage('https://cdn.discordapp.com/attachments/780804972392087552/800726253287374868/Hammer.png')
        .setDescription(`Zabrano Globalną Blokade na Komendy!`)
        .setFooter('Casualy.AD')



        blacklist.findOne({ id : User.user.id }, async(err, data) => {
            if(err) throw err;
            if(data) {
               await blacklist.findOneAndDelete({ id : User.user.id })
                .catch(err => console.log(err))
                message.channel.send(`**${User.displayName}** dostał unbana i może normalnie używać Komend!`)
                User.send(embed6)
            } else {
               message.channel.send(`**${User.displayName}** nie posiada gbana`)
            }
           
        })
    }
}