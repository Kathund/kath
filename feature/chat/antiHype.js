import * as helperFunction from '../../helperFunctions.js';
import Settings from '../../settings';
const config = Settings;

register('chat', (event) => {
  try {
    var message = helperFunction.removeColors(ChatLib.getChatMessage(event).toString());
    if (!config.chatAntiHypeLimit) return;
    if (
      message.includes(
        'You have reached your Hype limit! Add Hype to Prototype Lobby minigames by right-clicking with the Hype Diamond!'
      )
    ) {
      cancel(event);
    }
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
});
