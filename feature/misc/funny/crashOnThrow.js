import * as helperFunction from '../../../helperFunctions.js';
import { Promise } from '../../../../PromiseV2/index.js';
import Settings from '../../../settings.js';
const config = Settings;

register('chat', (event) => {
  try {
    if (!config.miscCrashOnThrow) return;
    var message = helperFunction.removeColors(ChatLib.getChatMessage(event).toString());
    if (!message.includes('You were killed by')) return;
    Client.getMinecraft().func_71400_g();
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
});
