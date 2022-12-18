const Discord = require('discord.js') 
const ahmet = require("../../schemas/dolar");
const { altin, altin2, rewards } = require("../../configs/emojis.json")
let ms = require("discord.js");

module.exports = {
    conf: {
      aliases: ["hesapoluştur","hesap-oluştur"],
      name: "hesapoluştur",
      help: "hesapoluştur"
    },
  
run: async (client, message, args) => {

   if (!message.guild) return;

		let kanallar = ["bot-commands"]
	if (!kanallar.includes(message.channel.name)) return message.reply({ content:`${kanallar.map(x => `${client.channels.cache.find(chan => chan.name == x)}`)} kanallarında kullanabilirsiniz.`}).then((e) => setTimeout(() => { e.delete(); }, 10000)); 
	
	let data = await ahmet.findOne({userID: message.author.id, guildID: message.guild.id});

  if(data) {
    message.reply({ content:"Zaten daha önceden bir hesap oluşturmuşsun!"})
     } 
     else
  if(!data) {
    await ahmet.findOneAndUpdate({userID: message.author.id, guildID: message.guild.id}, {$inc: {dolar: 500}}, {upsert: true})
    message.reply({ content:`başarı ile coin hesabını oluşturdun, oyunlarımızı deneyimlemen için hesabına **500** hediye coin yolladım. İyi eğlenceler!`})
 }
}}
