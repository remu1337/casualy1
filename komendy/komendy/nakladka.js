const Discord =  require('discord.js')
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "nakladka",
    aliases: ["nakładka"],
    run: async (client, msg, args) => {
    const Canvas = require('canvas')
    const canvas = Canvas.createCanvas(1000, 1000);
    const ctx = canvas.getContext('2d');

if(!msg.mentions.users.first()) { 

    const background = await Canvas.loadImage(msg.author.displayAvatarURL({dynamic: true, format: 'jpg', size: 2048}));    
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  
    const avatar = await Canvas.loadImage('./nakladka.png');
    ctx.drawImage(avatar, 0, 0, 1000, 1000);

    const koniec = new Discord.MessageAttachment(canvas.toBuffer(), 'nakładka.png');

    msg.channel.send('Wygenerowano!', koniec)

} else { 
    let uzytkownik = msg.mentions.members.first() 

       
    const background = await Canvas.loadImage(client.users.cache.get(uzytkownik.id).displayAvatarURL({dynamic: true, format: 'jpg', size: 2048}));    
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  
    const avatar = await Canvas.loadImage('./nakladka.png');
    ctx.drawImage(avatar, 0, 0, 1000, 1000);

    const koniec = new Discord.MessageAttachment(canvas.toBuffer(), 'nakładka.png');
    msg.channel.send(`Nakładka użytkownika ${client.users.cache.get(uzytkownik.id).tag}`, koniec)

   }

  
    }
}