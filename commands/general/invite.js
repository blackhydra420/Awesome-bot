const commando = require('discord.js-commando');
const Discord = require('discord.js');

class InviteBot extends commando.Command{
    constructor(client){
        super(client, {
            name:'invite',
            group: 'general',
            memberName: 'invite',
            description: 'Send you a link for invite'
        });
    }
    async run(message, args){
        var inviteInfo = new Discord.RichEmbed()
            .setTitle('Invite Link :sunglasses:')
            .setURL('https://discordapp.com/oauth2/authorize?client_id=535746789790449684&scope=bot&permissions=8')
            .setDescription('Requested by - ' + message.author.tag);
        message.channel.send(inviteInfo);
    }
}

module.exports = InviteBot;