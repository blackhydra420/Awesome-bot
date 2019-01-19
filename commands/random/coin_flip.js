const commando = require('discord.js-commando');
const Discord = require('discord.js');

class CoinFlip extends commando.Command{
    constructor(client){
        super(client, {
            name: 'flip',
            group: 'random',
            memberName: 'flip',
            description: 'flips the coin!'
        });
    }

    async run(message,args){
        var side = "";
        var sideNum = Math.floor(Math.random() * 2) + 1;
        var flipResult = new Discord.RichEmbed().setColor(0xFF00FF).setTitle('Coin tossed');
        if(sideNum == 1){
            side = 'Head';
            flipResult.setDescription('Hello ' + message.author + ' you got ' + side);
            message.channel.send(flipResult);
            message.channel.send({ files: [__dirname + '/Pictures/Heads.jpg'] });
        } else {
            side = 'Tail';
            flipResult.setDescription('Hello ' + message.author + ' you got ' + side);
            message.channel.send(flipResult);
            message.channel.send({ files: [__dirname + '/Pictures/Tails.jpg'] });
        }
    }
}
module.exports = CoinFlip;