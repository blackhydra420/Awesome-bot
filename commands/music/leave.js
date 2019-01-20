const commando = require('discord.js-commando');
const YTDL = require('ytdl-core');

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
            if(servers[message.guild.id]){
                servers[message.guild.id].dispatcher = null;
                while (servers[message.guild.id].queue[0]) {
                    servers[message.guild.id].queue.shift();
                }
            }
            message.channel.send('Leaving voice channel...');
        } else {
            message.reply('I am not inside voice channel');
        }
    }
}

module.exports = LeaveVoice;