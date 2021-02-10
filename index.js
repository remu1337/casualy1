const Discord = require("discord.js");
const { Client, Collection } = require("discord.js");
const mongoose = require('mongoose')
const db = require("quick.db")
const blacklist = require('./models/blacklist')
const fs = require("fs");
require('./web')
const config = require('./config.json')

const client = new Client({
    ///ws: { properties: { $browser: "Discord Android" }},
    disableEveryone: true
});

client.commands = new Collection();
client.aliases = new Collection();

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

mongoose.connect('mongodb+srv://remu11:CGRYHIUXB9cqmwAW@cluster0.nkkh2.mongodb.net/Data', {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}).then(console.log('Połączono z MongoDB!'))





client.categories = fs.readdirSync("./komendy/");
client.on("guildDelete", guild => {

    const embedzly12 = new Discord.MessageEmbed()
    .setAuthor('Wyrzucono Bota z Serwer!', 'https://cdn.discordapp.com/attachments/780363127376183306/780790637464518656/wrong.gif')
    .setDescription(`Nazwa Serwera: ${guild.name} || ${guild.id}\n Ilość Osób: ${guild.members.cache.size}`)
    .setColor("RED")

    client.channels.cache.get("804066496543588362").send(embedzly12)
    db.delete(`reklama_do_${guild.id}`)
    db.delete(`reklama_do_${guild.id}_osoba`)
    db.delete(`reklama_do_${guild.id}_name`)
    db.delete(`reklama_${guild.id}_serwera`)
    db.delete(`kanal_reklama_${guild.id}`)
})


///client.on("guildCreate", async  guild => {
 ///   client.user.setActivity(`@Casualy 🤗 Serwery: ${client.guilds.cache.size}`, { type: 'WATCHING' })
///})


///client.on("guildDelete", async  guild => {
   /// client.user.setActivity(`@Casualy 🤗 Serwery: ${client.guilds.cache.size}`, { type: 'WATCHING' })
///})



  

client.on("ready", async msg => {
    client.user.setActivity(`@Casualy [1.5]`, { type: 'PLAYING' })
    console.log(`${client.user.tag}`);
    console.log(db.get(`numer`))
    setInterval(() => {
        let numer = db.get(`numer`)
    if (!db.get(`reklama_${numer}`)) {
        return db.set(`numer`, 1), console.log("Koniec kolejki!")
    }
    let id_rek = db.get(`reklama_${numer}_id`)

    client.guilds.cache.forEach(servers_each => {
        const emote = client.emojis.cache.find(e => e.name === 'premium12')
        const emote1 = client.emojis.cache.find(e => e.name === 'link8090')

        let kolor_reklamy = db.get(`${id_rek}_typ_kolor`)
        let reklama = db.get(`reklama_${numer}`)

        if (db.get(`premium_${id_rek}`)) {
            if (!db.get(`kanal_reklama_${servers_each.id}`)) return;
        if (!client.channels.cache.get(db.get(`kanal_reklama_${servers_each.id}`))) return; 
            if (!client.guilds.cache.get(servers_each.id)) return;
            const embed = new Discord.MessageEmbed()
            .setTitle('`📂Numer:' +numer+'\n🔢ID:'+ db.get(`reklama_${numer}_id`)+'\nStatus'+ emote+ 'Premium`')
            .setColor(kolor_reklamy)
            .setDescription(db.get(`reklama_${numer}`))
            client.channels.cache.get(db.get(`kanal_reklama_${servers_each.id}`)).send(embed)
            
        } else {
            if (!db.get(`kanal_reklama_${servers_each.id}`)) return;
             if (!client.channels.cache.get(db.get(`kanal_reklama_${servers_each.id}`))) return; 
            if (!client.guilds.cache.get(servers_each.id)) return;
            client.channels.cache.get(db.get(`kanal_reklama_${servers_each.id}`)).send('`📂Numer:' +numer+'\n🔢ID:'+ db.get(`reklama_${numer}_id`)+ '\nStatus: 🔰 Normalny`\n\n'+db.get(`reklama_${numer}`))
        }
    })
    db.add(`numer`, 1)
        
    }, 30000)///300000)
    });
    
client.on("guildCreate", guild => {

const embeddodan = new Discord.MessageEmbed()
.setAuthor('Dodano na Serwer!', 'https://cdn.discordapp.com/attachments/786700077937983549/797605135211298876/5845_tickgreen_1.gif')
.setDescription(`Nazwa Serwera: ${guild.name}\n Ilość Osób: ${guild.members.cache.size}`)
.setColor("ORANGE")
    client.channels.cache.get("804066496543588362").send(embeddodan)
  })

  client.on("message", async message => {
    const prefix = db.fetch(`prefix_${message.guild.id}`);
let wzmiankaembed = new Discord.MessageEmbed()
.setAuthor('Oznaczyłeś mnie!')
.setDescription('**Mój Prefix na tym Serwerze:**' + "`" + prefix + "`" + '\n**Spis Komend:**' + '`' + `${prefix}pomoc` + '`' + '\n**Przydatne Linki Bota:**' + "`" + `${prefix}linki` + '`')
.setColor("#FF8000")
.setTimestamp()
.setFooter(`Oznaczył: ${message.author.tag} | ${message.author.id}` , message.author.displayAvatarURL())


    const wzmianka = new RegExp(`^<@!?${client.user.id}>( |)$`);
     if (message.content.match(wzmianka)) {
        message.channel.send(wzmiankaembed);
        }     
});


client.on('message', message => {
    const db = require('./models/Kanaly')
    if(message.author.bot) return;
    db.findOne({ Channel: message.channel.id, Activated: true}, async(err, data) => {
        if(data){
            db.find({ Activated: true}, async(err, data)=>{
                data.map(({Channel})=>{
                    if(Channel === message.channel.id) return;

                    client.channels.cache.get(Channel).send(
                        new Discord.MessageEmbed()
                        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(message.content)
                        .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true}))
                        .setColor('ORANGE')
                        .setTimestamp()
                    )
                })
            })
        }
    })
})


client.on("message", async message => {
 
    let prefix;
    let prefixes = db.fetch(`prefix_${message.guild.id}`);

    if (prefixes == null) {
        prefix = 'r!'
        db.set(`prefix_${message.guild.id}`, "r!");
    } else {
        prefix = prefixes;
    }

    if (!message.content.startsWith(prefix)) return;
      blacklist.findOne({ id : message.author.id }, async(err, data) => {
          if(err) throw err;
          if(!data) {
      if(message.author.bot) return;
      if(!message.content.startsWith(prefix)) return;
      if(!message.guild) return;
      if(!message.member) message.member = await message.guild.fetchMember(message);
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const cmd = args.shift().toLowerCase();
      if(cmd.length == 0 ) return;
      let command = client.commands.get(cmd)
      if(!command) command = client.commands.get(client.aliases.get(cmd));
      if(command) command.run(client, message, args) 
    
    } else {
      message.channel.send('Posiadasz blokade na Komendy!')
    }
    })
    })

client.login(config.token);