const commando = require('discord.js-commando');
const Discord = require('discord.js');

class Info extends commando.Command{
    constructor(client){
        super(client,{
            name: 'info',
            group: 'general',
            memberName: 'info',
            description: 'Gives info about yourself'
        });
    }
    async run(message, args){
        var myInfo = new Discord.RichEmbed()
        .setTitle('Google')
        .setURL('https://google.com')
        .addField('About Me',"I am just a Awesome Bot", true)
        .setDescription('!Hello '+ message.author)
        .setColor(0xFFFFFF)
        .setThumbnail(message.author.avatarURL)
        .setFooter('Thanks for asking');
        message.channel.sendMessage(myInfo);
    }
}

module.exports = Info;