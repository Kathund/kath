import * as helperFunction from '../../helperFunctions.js';
import Settings from '../../settings.js';
const config = Settings;

register('chat', (event) => {
  try {
    var message = helperFunction.removeColors(ChatLib.getChatMessage(event).toString());
    if (!config.chatAntiProfile) return;
    if (message.includes('Profile ID:') && message.includes('-')) {
      cancel(event);
    }
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
});
