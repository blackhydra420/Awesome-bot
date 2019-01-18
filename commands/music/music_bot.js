const commando = require('discord.js-commando');
const YTDL = require('ytdl-core');

function Play(connection, message){
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: 'audioonly'}));
    server.queue.shift();
    server.dispatcher.on("end", function(){
        if(server.queue[0]){
            Play(connection, message);
        } else {
            connection.disconnect();
        }
    });
}

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
        if(message.member.voiceChannel){
            if(!message.guild.voiceConnection)//checking if already inside the voice channel or not
            {
                if(!servers[message.guild.id]){
                    servers[message.guild.id] = {queue:[]};
                }
                message.member.voiceChannel.join().then(connection =>{
                    var server = servers[message.guild.id];
                    message.channel.sendMessage('joined voice chat');
                    server.queue.push(args);
                    Play(connection, message);
                });
            } else {
                message.reply('I am already in the voice channel');
            }
        } else {
            message.reply(":crossed_swords: You must be in a voice channel to summon me");
        }
    }
}

module.exports = JoinVoice;