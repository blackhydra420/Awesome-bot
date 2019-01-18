const commando = require('discord.js-commando');

class LeaveVoice extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: 'leaves the voice chat'
        });
    }
    async run(message, args) {
        if(message.guild.voiceConnection){
            message.guild.voiceConnection.disconnect();
        } else {
            message.reply('I am not at voice channel you dumb!');
        }
    }
}

module.exports = LeaveVoice;