import Settings from "../../settings";
const config = Settings

register("chat", (player) => {
  try {
    if (!config.partyAccept) return
    ChatLib.command(`p accept ${player}`)
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dAutoWB &6> &c${error}`);
  }
}).setCriteria(/^(?:\[[^\]]+\] )(\w+) has invited you to join their party!/)