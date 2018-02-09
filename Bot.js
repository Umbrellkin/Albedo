const Discord = require('discord.js');
const robot = new Discord.Client();

robot.login("NDExNTM5ODk2MDQyNTIwNTc3.DV9oQA.n3rCi6lD3d-Pf2ahOr0vRMs4SQ0");

robot.on('message', (message) => {
    if(message.content =="Sex"){
        message.replay("I wanna fuck you till death, my honey bunny.");
    }
    if(message.content =="Boobs"){
        message.replay("How do you dare, pitiful mortal? But okay, just today i'll show you my charms ;) Don't say anything Ainz-sama!");
    }
    if(message.content =="Andrei"){
        message.replay("Andrei? Oh, I like this little dick");
    }
});
