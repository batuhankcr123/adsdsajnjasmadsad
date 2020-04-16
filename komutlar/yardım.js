
const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = 'ck!'

	const codare = new Discord.RichEmbed()
       .setAuthor(`Komutlar`)
       .setTitle(`Genel Komutlar`)
       .setDescription(`ck!ping = Pinginize bakar.\n ck!temizle = Belirttiginiz miktarda sohbetteki mesajlari siler \n ck!duel = Etiketlenen kişiye duello istegi atarsın. \n ck!corona = Dünya genelinde corona hastalıklı olanları gösterir \n ck!korona tr = Türkiyede ki corona hastalarını gösterir.`)
       .setFooter(`Yapımcı Batuzzy`)
  return message.channel.send(codare)
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'yardım',
  description: '[Admin Komutu]',
  usage: '!bakım-mod aç'
};