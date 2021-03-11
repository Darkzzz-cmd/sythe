import { Client } from 'discord.js';

const bot = new Client();

bot.on('ready', () => console.log(`${bot.user.username} is online`));
bot.on('message', async (msg) => {
    if (msg.author.bot) return;

    await msg.reply('Hi');
});

bot.login('ODE5NjkzOTI3NzY1Mzc3MDk1.YEqVdQ.9d0Y1V5qKOFwKDTUNebvG_CtuxM');
