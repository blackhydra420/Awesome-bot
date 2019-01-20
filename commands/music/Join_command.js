const commando = require('discord.js-commando');

class JoinVoice extends commando.Command{
    constructor(client){
        super(client, {
            name: 'join',
            group: 'music',
            memberName: 'join',
            description: 'joins the voice chat'
        });
    }
    async run(message, args){
        if(args){
            message.reply('This command does not accept any argument');
        } else {
        if(message.member.voiceChannel){
            if(!message.guild.voiceConnection)//checking if already inside the voice channel or not
            {
                message.member.voiceChannel.join().then(
                    message.channel.send('joined voice chat')
                );
            } else {
                message.reply('I am already in the voice channel');
            }
        } else {
            message.reply(":crossed_swords: You must be inside a voice channel to summon me!");
        }
    }
    }
}

module.exports = JoinVoice;