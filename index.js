const Discord = require('discord.js');
const { Routes } = require('discord-api-types/v9');
const { token } = require('./config.json');
const fs = require('fs');

const client = new Discord.Client();
const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

client.login('ODkyMTgzMDgyNTk2MTcxODQ3.YVJMPg.bhNNIIY8cT5xawPB1tVi3Wdvjyw');
