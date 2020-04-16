const Discord = require("discord.js")
const { NovelCovid } = require('novelcovid');
const track = new NovelCovid();


exports.run = async (client, message, args) => {
   track.all().then(data => {
    const embed = new Discord.RichEmbed()
      .addField("Toplam Vaka", data.cases)
      .addField("Toplam Ölen", data.deaths)
      .addField("Toplam İyileşen", data.recovered)
      .setFooter("Bu bilgiler Dünya Genelindeki bilgilerdir!");
    message.channel.send(embed);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
name: 'corona'
};