const { Client, GatewayIntentBits } = require('discord.js');

// توكن البوت
const token = 'MTAxMjUxMjI5NzU2Mzk5MjIwNg.Gg-fRU.51sGty6mwHY5kxQCEd9ZeUQNEhu3iB4e2uPxVo';
// معرف السيرفر (Guild)
const guildId = '1323215144938897438';
// معرف الروم (Channel)
const channelId = '1323221716045922374';

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.login(token);  // تسجيل الدخول باستخدام التوكن المباشر

client.once('ready', () => {
  console.log('Bot is ready!');
});

client.on('messageCreate', message => {
  // تحقق من أن الرسالة تأتي من السيرفر والروم الصحيحين
  if (message.guild.id === guildId && message.channel.id === channelId) {
    // نفذ الأوامر أو الردود هنا
    console.log('Message received in the correct guild and channel!');
  }
});
