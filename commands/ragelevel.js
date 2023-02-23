const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ragelevel')
		.setDescription('Check accumulated rage level.'),
	async execute(interaction) {
		await interaction.reply('Rage levels are very high!');
	},
};