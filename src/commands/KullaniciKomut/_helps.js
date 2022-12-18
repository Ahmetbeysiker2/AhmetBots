const { MessageEmbed, Client, Message, MessageActionRow, MessageSelectMenu } = require("discord.js");
const Discord = require('discord.js');
const client = global.bot;
const { star } = require("../../configs/emojis.json")

module.exports = {
  conf: {
    aliases: ["yardım"],
    name: "help",
    help: "yardim",
    owner: true
  },
 
  async run(client, message, args, embed) {

if(!message.member.permissions.has("ADMINISTRATOR")) return;
embed.setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) }).setTimestamp().setColor(message.author.displayHexColor).setFooter({ text: message.author.tag, iconURL: message.author.avatarURL({ dynamic: true })}).setThumbnail(message.guild.iconURL({ dynamic: true }))
embed.setDescription(`Aşağıda sunucudaki komutlar sıralandırılmıştır.
Toplam \`${client.commands.size}\` tane komut kullanılabilir.
Komut bilgisini detaylı öğrenmek için \`.yardım <Komut Ismi>\``)
	  const row = new Discord.MessageActionRow()
  .addComponents(
	  new Discord.MessageSelectMenu()
		  .setCustomId('ahmethelp')
		  .setPlaceholder('Yardım kategorisini listeden seçin!')
		  .addOptions([
			  {
				  label: 'Kullanıcı Komutları',
				  description: 'Kullanıcı Komutlar',
				  value: 'Kullanici',
			  },
			  {
				  label: 'Kayıt Komutları',
				  description: 'Kayıt Komutlar',
				  value: 'kayıts',
			  },
			  {
				label: 'Cezalandırma Komutları',
				description: 'Cezalandırma Komutlar',
				value: 'cezalandırmas',
			},
		  ]),
  );
let msg = await message.channel.send({ components: [row], embeds: [embed] })
var filter = (menu) => menu.user.id === message.author.id;
const collector = msg.createMessageComponentCollector({ filter, max: 2, time: 30000 })
  

client.on('interactionCreate', interaction => {
if (!interaction.isSelectMenu()) return;
if(interaction.values[0] === "Kullanici") {
	
	message.channel.send({ embeds: [embed.setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 })).setDescription(`
\` .afk <Sebep> \` 
\` .avatar \` 
\` .banner \` 
\` .git <Ahmetcim/ID> \`
\` .link \`
\` .kullanıcıbilgi \`
\` .ship \`
\` .zengin \`
\` .çek <Ahmetcim/ID> \` 
`)] }); 

};

if (interaction.values[0] === "genel") {
interaction.reply({ content : `
\`\`\`
- .afk (afk [sebep])
- .avatar (avatar [UserID/@User])
- .booster (boost [nick])
- .profil (profil / [@üye])
- .tag (tag)
- .yardım (yardım)
- .çek (çek [@üye])
- .git (git [@üye])
- .market (coinmarket) 
- .görev (görev [user])
\`\`\`
`, ephemeral: true })
};

if (interaction.values[0] === "kayıts") {

message.channel.send({ embeds: [embed.setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 })).setDescription(`
\` .isim <@Ahmetcim/ID> <Isim> <Yaş> \`
\` .isimler <Ahmetcim/ID> \`
\` .kayitsiz  <Ahmetcim/ID> \`
\` .kayıt <@Ahmetcim/ID> <Isim> <Yaş> \`

`)] }); 

};

if (interaction.values[0] === "kurucu") {
interaction.reply({ content : `
\`\`\`
- .kilit ([aç/kapat])
- .tagsay (tagsay)
- .banliste (banlist)
- .rolbilgi (@role)
- .cezapuansil ([user])
- .isimsil ([user])
- .sicilsil ([user])
- .yasaklı-tag (ekle/sil/liste [yasaklıtag])
- .ekip ([ekle-sil-liste-kontrol-bilgi])
- .ekip-ses ([@ekiprol])
- .yetkilises (yetkilises)
- .yoklama (toplantı)
- .allmute (allmute [kanal])
- .allunmute (allunmute [kanal])
- .toplutaşı (toplutaşı [kanal])
\`\`\`
`, ephemeral: true })
};

if (interaction.values[0] === "cezalandırmas") {

message.channel.send({ embeds: [embed.setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 })).setDescription(`
\` .banliste \`
\` .cezapuan <Ahmetcim/ID> \`
\` .cezasorgu <Ceza-ID> \`
\` .sicil <Ahmetcim/ID> \`
\` .topceza \`
\` .ban <Ahmetcim/ID> <Sebep> \`
\` .jail <Ahmetcim/ID> <Süre> <Sebep> \`
\` .reklam <Ahmetcim/ID> <Sebep> \` 
\` .mute <Ahmetcim/ID> <Süre> <Sebep> \` 
\` .punish <Ahmetcim/ID> \` 
\` .vmute <Ahmetcim/ID> <Süre> <Sebep> \` 
\` .uyarı <Ahmetcim/ID> <Sebep> \` 
\` .unban <Ahmetcim/ID> \` 
\` .unbanall \`
\` .unjail <Ahmetcim/ID> \`
\` .unmute <Ahmetcim/ID> \`
   
`)] });
};

})
}
}