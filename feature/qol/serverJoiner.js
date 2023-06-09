import * as helperFunction from '../../helperFunctions.js';
import { Promise } from '../../../PromiseV2';
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
import Settings from '../../settings';
const config = Settings;

let join = false;
register('postGuiRender', (mx, my, gui) => {
  try {
    if (!(gui instanceof net.minecraft.client.gui.GuiMainMenu)) return;
    if (helperFunction.data.fakeBanned === true) {
      helperFunction.data.fakeBanned = false;
      helperFunction.data.banID = '';
      helperFunction.data.banTimestamp = 0;
      helperFunction.data.save();
    }
    if (!config.qolServerJoiner) return;
    if (join) return;
    join = true;
    delay(150)
      .then(() => Client.connect(config.qolServerIP))
      .then(() => (join = true))
      .then(() => delay(1000))
      .then(() => (join = false));
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
});
