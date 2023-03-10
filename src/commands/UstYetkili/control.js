const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { star, kirmiziok } = require("../../configs/emojis.json")
let ayar = require("../../configs/sunucuayar.json"); 
let sunucu = require("../../configs/settings.json");  
const moment = require("moment");
require("moment-duration-format");

module.exports = {
    conf: {
      aliases: ["tgcontrol", "tgkontrol"],
      name: "tgkontrol",
      help: "tgkontrol"
    },
  
    run: async (client, message, args, durum, kanal) => {

    if(!ayar.sahipRolu.some(oku => message.member.roles.cache.has(oku)) && !message.member.permissions.has('ADMINISTRATOR')) 
    { 
    message.reply({ content:`Yetkin bulunmamakta dostum.`}).then((e) => setTimeout(() => { e.delete(); }, 5000)); 
    return }
 
       let guild = client.guilds.cache.get(sunucu.guildID);
       await guild.members.fetch();

      
       
       let taglilar = message.guild.members.cache.filter(s => s.user.username.includes(ayar.tag) && !s.roles.cache.has(ayar.ekipRolu))
       let taglilars = message.guild.members.cache.filter(s => s.user.username.includes(ayar.tags) && !s.roles.cache.has(ayar.ekipRolu))
       let taglilarss = message.guild.members.cache.filter(s => s.user.username.includes(ayar.tags2) && !s.roles.cache.has(ayar.ekipRolu))
       let taglilarssss = message.guild.members.cache.filter(s => s.user.username.includes(ayar.tags3) && !s.roles.cache.has(ayar.ekipRolu))
       let taglilarsssss = message.guild.members.cache.filter(s => s.user.username.includes(ayar.tags4) && !s.roles.cache.has(ayar.ekipRolu))
       let taglilarssssss = message.guild.members.cache.filter(s => s.user.username.includes(ayar.tags5) && !s.roles.cache.has(ayar.ekipRolu))
       let taglilarsssssss = message.guild.members.cache.filter(s => s.user.username.includes(ayar.tags6) && !s.roles.cache.has(ayar.ekipRolu))
       let taglilarssssssss = message.guild.members.cache.filter(s => s.user.username.includes(ayar.tags7) && !s.roles.cache.has(ayar.ekipRolu))
       let taglilarsssssssss = message.guild.members.cache.filter(s => s.user.username.includes(ayar.etikets) && !s.roles.cache.has(ayar.ekipRolu)) 
       let ahmetcim = message.guild.members.cache.filter(m => m.roles.cache.filter(r => r.id !== message.guild.id).size == 0)

const row = new MessageActionRow()
.addComponents(
new MessageButton().setStyle('DANGER').setLabel('Family Rol Da????t').setCustomId('tagrol').setEmoji(`${client.emojis.cache.find(x => x.name === "bir")}`),
new MessageButton().setStyle('PRIMARY').setLabel('Kay??ts??z Rol Da????t').setCustomId('kay??ts??zdagit').setEmoji(`${client.emojis.cache.find(x => x.name === "iki")}`),
);

let ahmet = new MessageEmbed()
.setDescription(`
???? Kontrol Paneline Ho?? Geldiniz A??a????daki Family Ve Kay??ts??z Butonuna Basarak Rols??zlere Kay??ts??z Tag?? olup rol?? olmayanlarada rol verdire bilirsiniz.
`)

.addFields(
{ name: "**Tagl?? Rol**", value: `
\`\`\`diff
Family Rol ????in butona T??kla
\`\`\`
`, inline: true },
{ name: "**Kay??ts??z Rol**", value: `
\`\`\`css
${ahmetcim.size} ki??i
\`\`\`
`, inline: true }
)

.setColor("RANDOM")
.setFooter({ text: message.author.tag, iconURL: message.author.avatarURL()})
.setTimestamp()
.setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
 
 
  let msg = await message.channel.send({ embeds: [ahmet], components: [row]})
 
    var filter = (button) => button.user.id === message.author.id;
   
    let collector = await msg.createMessageComponentCollector({ filter, time: 30000 })

      collector.on("collect", async (button) => {

    if (button.customId === 'ecdagit') {
 
    button.reply({ content:`
Etkinlik/??ekili?? rol?? olmayan ${ahmet.size} kullan??c??ya etkinlik, ??ekili?? rolleri verildi !`})
    }


    if (button.customId === 'tagrol') {
 
      let taglilar = message.guild.members.cache.filter(s => s.user.username.includes(ayar.tag) && !s.roles.cache.has(ayar.ekipRolu))
      let taglilars = message.guild.members.cache.filter(s => s.user.username.includes(ayar.tags) && !s.roles.cache.has(ayar.ekipRolu))
      let taglilarss = message.guild.members.cache.filter(s => s.user.username.includes(ayar.tags2) && !s.roles.cache.has(ayar.ekipRolu))
      let taglilarssss = message.guild.members.cache.filter(s => s.user.username.includes(ayar.tags3) && !s.roles.cache.has(ayar.ekipRolu))
      let taglilarsssss = message.guild.members.cache.filter(s => s.user.username.includes(ayar.tags4) && !s.roles.cache.has(ayar.ekipRolu))
      let taglilarssssss = message.guild.members.cache.filter(s => s.user.username.includes(ayar.tags5) && !s.roles.cache.has(ayar.ekipRolu))
      let taglilarsssssss = message.guild.members.cache.filter(s => s.user.username.includes(ayar.tags6) && !s.roles.cache.has(ayar.ekipRolu))
      let taglilarssssssss = message.guild.members.cache.filter(s => s.user.username.includes(ayar.tags7) && !s.roles.cache.has(ayar.ekipRolu))
      let taglilarsssssssss = message.guild.members.cache.filter(s => s.user.username.includes(ayar.etikets) && !s.roles.cache.has(ayar.ekipRolu))

    button.reply({ content:`
Tag?? olup rol?? olmayan ${taglilar.size} kullan??c??ya rol verildi.
Tag?? olup rol?? olmayan ${taglilars.size} kullan??c??ya rol verildi.
Tag?? olup rol?? olmayan ${taglilarss.size} kullan??c??ya rol verildi.
Tag?? olup rol?? olmayan ${taglilarssss.size} kullan??c??ya rol verildi.
Tag?? olup rol?? olmayan ${taglilarsssss.size} kullan??c??ya rol verildi.
Tag?? olup rol?? olmayan ${taglilarssssss.size} kullan??c??ya rol verildi.
Tag?? olup rol?? olmayan ${taglilarsssssss.size} kullan??c??ya rol verildi.
Tag?? olup rol?? olmayan ${taglilarssssssss.size} kullan??c??ya rol verildi.
Tag?? olup rol?? olmayan ${taglilarsssssssss.size} kullan??c??ya rol verildi.
Tag Rol?? verilen kullan??c??lar;
${taglilar.map(x => x || "Rol?? olmayan Kullan??c?? bulunmamaktad??r.")}`})

    message.guild.members.cache.filter(s => s.user.username.includes(ayar.tag) && !s.roles.cache.has(ayar.ekipRolu)).map(x=> x.roles.add(ayar.ekipRolu))
    message.guild.members.cache.filter(s => s.user.username.includes(ayar.tags) && !s.roles.cache.has(ayar.ekipRolu)).map(x=> x.roles.add(ayar.ekipRolu))
    message.guild.members.cache.filter(s => s.user.username.includes(ayar.tags2) && !s.roles.cache.has(ayar.ekipRolu)).map(x=> x.roles.add(ayar.ekipRolu))
    message.guild.members.cache.filter(s => s.user.username.includes(ayar.tags3) && !s.roles.cache.has(ayar.ekipRolu)).map(x=> x.roles.add(ayar.ekipRolu))
    message.guild.members.cache.filter(s => s.user.username.includes(ayar.tags4) && !s.roles.cache.has(ayar.ekipRolu)).map(x=> x.roles.add(ayar.ekipRolu))
    message.guild.members.cache.filter(s => s.user.username.includes(ayar.tags5) && !s.roles.cache.has(ayar.ekipRolu)).map(x=> x.roles.add(ayar.ekipRolu))
    message.guild.members.cache.filter(s => s.user.username.includes(ayar.tags6) && !s.roles.cache.has(ayar.ekipRolu)).map(x=> x.roles.add(ayar.ekipRolu))
    message.guild.members.cache.filter(s => s.user.username.includes(ayar.tags7) && !s.roles.cache.has(ayar.ekipRolu)).map(x=> x.roles.add(ayar.ekipRolu))
    message.guild.members.cache.filter(s => s.user.username.includes(ayar.etikets) && !s.roles.cache.has(ayar.ekipRolu)).map(x=> x.roles.add(ayar.ekipRolu))                
    }

    if (button.customId === 'kay??ts??zdagit') {
 
    let ahmetcim = message.guild.members.cache.filter(m => m.roles.cache.filter(r => r.id !== message.guild.id).size == 0)

    button.reply({ content:`
Kay??ts??z rol?? olmayan ${ahmetcim.size} kullan??c??ya kay??ts??z rol?? verildi !

Kay??ts??z Rol?? verilen kullan??c??lar;
${ahmetcim.map(x => x || "Rol?? olmayan Kullan??c?? bulunmamaktad??r.")} `})

    message.guild.members.cache.filter(m => m.roles.cache.filter(r => r.id !== message.guild.id).size == 0).map(x=> x.roles.add(ayar.unregRoles))

    }

  });
}
}
