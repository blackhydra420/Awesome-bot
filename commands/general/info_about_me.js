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
        .setTitle('Awesome bot')
        .addField('About Me',"I am just an Awesome Bot.", true)
            .addField('Github Repo', '[Here](https://github.com/blackhydra420/Awesome-bot)',true)
            .addField('Hosted At',"Heroku", true)
            .addField('Server', message.guild.name , true)
        .setDescription('!Hello '+ message.author)
        .setColor(0xFFFFFF)
        .setThumbnail(this.client.user.avatarURL)
        .setFooter('Thanks for asking');
        message.channel.send(myInfo);
    }
}

module.exports = Info;