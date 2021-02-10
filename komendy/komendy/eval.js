const Discord = require("discord.js");

const { inspect } = require('util');
module.exports = {
    name: 'eval',
    run: async (client, message, args) => {

        if (message.author.id !== '768702975576899614') return message.channel.send('Byniu ta komenda tylko dla Dev Bota!')

        if (!args.length) {
            let argument = new Discord.MessageEmbed()
            .setDescription("Podaj Kod Do Ewaluacji!")
            .setColor('ORANGE')
            return message.channel.send(argument)
        }
    
        
        let evaled;
        try {
          evaled = await eval(args.join(" "));
          let value;
          if (evaled === undefined) {
              value = "Brak odpowiedzi!"
          } else {
              value = evaled
          }
          if (args.join(" ").toLowerCase().includes("token")) {
              value = "już daje"
          }
          let hrStart = process.hrtime()
          let hrDiff;
          hrDiff = process.hrtime(hrStart)
          const embedgit = new Discord.MessageEmbed()
          .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
          .setColor('ORANGE')                  
          .setDescription("Kod Do Ewaluacji: \n```javascript\n"+args.join(" ")+"```\n\Odpowiedź:\n```"+value+"```\nCzas Odpowiedzi:\n```" + `${hrDiff[0] > 0 ? `${hrDiff[0]}s` : ''}${hrDiff[1] / 1000000}` + "ms```")
          message.channel.send(embedgit)
        }
        catch (error) {
          console.log(error);
          const eo = new Discord.MessageEmbed()
          .setColor('ORANGE')
          .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
          .setDescription("Wystąpił Błąd:\n```"+error+"```")
          message.channel.send(eo)
        }
    }
}