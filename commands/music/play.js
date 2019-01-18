const commando = require('discord.js-commando');
const search = require('yt-search');

class PlaySong extends commando.Command{
    constructor(client){
        super(client,{
            name:'play',
            group: 'music',
            memberName: 'play',
            description: 'play the song of user choice'
        });
    }
    async run(message, args){
        search(args,function(err, rse){
            if(err) return message.channel.send('Sorry something went wrong!');

            let videos = res.videos.slice(0,10);

            let resp = "";
            for (var i in videos){
                resp += '[${parseInt(i)+1}]"${videos[i].title}"\n';
            }
            resp += '\n Choose a number between "1-${videos.length}"';

            message.channel.send(resp);

            const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0;

            const collector = message.channel.createMessageCollector(filter);

            collector.videos = videos;
            collector.once('collect', function(m){
                let commandFile = require('./music_bot.js');
                commandFile.run(client, message, [this.videos[parseInt(m.content)-1].url], ops);
            });
        });
    }
}

module.exports = PlaySong;