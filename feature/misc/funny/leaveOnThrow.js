import * as helperFunction from "../../../helperFunctions.js";
import { Promise } from '../../../../PromiseV2';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
import Settings from "../../../settings";
const config = Settings

let banamount = null;

register("chat", (event) => {
  try {
    if (!config.miscLeaveOnThrow) return
    var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
    if (message.includes("You were killed by")) {
      ChatLib.say("/pc I THROWING!! I am So bad I am legit a troll. I would recommend ignore adding me because how bad I am. Since I am SOOOOO BAD I am going to leave the party bye bye")
      delay(300).then(() => ChatLib.say("/p leave")).then(() => {
        if (config.miscBanOnThrow) {
          var text = "";
          var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

          for (var i = 0; i < 8; i++) {
            text += charset.charAt(Math.floor(Math.random() * charset.length));
          }

          delay(800).then(() => {
            helperFunction.data.fakebanned = true;
            helperFunction.data.banid = text;
            helperFunction.data.loadegame = false;

            const ChatComponentText = Java.type("net.minecraft.util.ChatComponentText");

            if (config.miscBanAmount == 0) {
              Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are permanently banned from this server!\n§r\n§7Reason: §fCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${text}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
            } else {
              Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f90d §cfrom this server!\n§r\n§7Reason: §fCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${text}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
            }
          })
        }
      })
    }
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&AutoWB &6> &c${error}`);
  }
})

register('chat', (event) => {
  try {
    var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
    if (!message.includes(`${Player.getName()} joined the lobby!`) || !message.includes("Guild: Message Of The Day")) return;

    if (helperFunction.data.fakebanned == true && helperFunction.data.loadegame == false) {
      var text = helperFunction.data.banid;
      const ChatComponentText = Java.type("net.minecraft.util.ChatComponentText");

      delay(300).then(() => {
        if (config.miscBanType === 0) {
          if (config.miscBanAmount === 0) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f6d 23h 59m 59s §cfrom this server!\n§r\n§7Reason: §fCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${text}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanAmount === 1) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f13d 23h 59m 59s §cfrom this server!\n§r\n§7Reason: §fCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${text}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanAmount === 2) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f29d 23h 59m 59s §cfrom this server!\n§r\n§7Reason: §fCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${text}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanAmount === 3) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f89d 23h 59m 59s §cfrom this server!\n§r\n§7Reason: §fCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${text}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanAmount === 4) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f179d 23h 59m 59s §cfrom this server!\n§r\n§7Reason: §fCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${text}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanAmount === 5) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f359d 23h 59m 59s §cfrom this server!\n§r\n§7Reason: §fCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${text}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanAmount === 6) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are permanently banned from this server!\n§r\n§7Reason: §fCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${text}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          }
        } else if (config.miscBanType === 1) {
          if (config.miscBanAmount === 0) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f6d 23h 59m 59s §cfrom this server!\n§r\n§7Reason: §fBoosting detected on one or multiple Skyblock profiles.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${text}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanAmount === 1) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f13d 23h 59m 59s §cfrom this server!\n§r\n§7Reason: §fBoosting detected on one or multiple Skyblock profiles.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${text}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanAmount === 2) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f29d 23h 59m 59s §cfrom this server!\n§r\n§7Reason: §fBoosting detected on one or multiple Skyblock profiles.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${text}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanAmount === 3) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f89d 23h 59m 59s §cfrom this server!\n§r\n§7Reason: §fBoosting detected on one or multiple Skyblock profiles.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${text}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanAmount === 4) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f179d 23h 59m 59s §cfrom this server!\n§r\n§7Reason: §fBoosting detected on one or multiple Skyblock profiles.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${text}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanAmount === 5) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f359d 23h 59m 59s §cfrom this server!\n§r\n§7Reason: §fBoosting detected on one or multiple Skyblock profiles.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${text}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanAmount === 6) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are permanently banned from this server!\n§r\n§7Reason: §fBoosting detected on one or multiple Skyblock profiles.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${text}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          }
        } else if (config.miscBanType === 2) {
          if (config.miscBanAmount === 0) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f6d 23h 59m 59s §cfrom this server!\n§r\n§7Reason: §fExtreme Chat Infraction.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${text}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanAmount === 1) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f13d 23h 59m 59s §cfrom this server!\n§r\n§7Reason: §fExtreme Chat Infraction.n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${text}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanAmount === 2) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f29d 23h 59m 59s §cfrom this server!\n§r\n§7Reason: §fExtreme Chat Infraction.n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${text}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanAmount === 3) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f89d 23h 59m 59s §cfrom this server!\n§r\n§7Reason: §fExtreme Chat Infraction.n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${text}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanAmount === 4) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f179d 23h 59m 59s §cfrom this server!\n§r\n§7Reason: §fExtreme Chat Infraction.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${text}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanAmount === 5) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f359d 23h 59m 59s §cfrom this server!\n§r\n§7Reason: §fExtreme Chat Infraction.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${text}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          } else if (config.miscBanAmount === 6) {
            Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are permanently banned from this server!\n§r\n§7Reason: §fExtreme Chat Infraction. \n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${text}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
          }
        } else if (config.miscBanType === 3) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are currently blocked from joining this server!\n§r\n§7Reason: §fYour username, ${Player.getName()}, is not allowed on the server and is breaking our rules.\n§7Find out more: §b§nhttps://www.hypixel.net/rules\n§r\n§cPlease change your Minecraft username before trying to join again.\n§cIf you believe your name has been falsely blocked, contact §b§nhttps://support.hypixel.net`))
        }
      })
    } else {
      helperFunction.data.fakebanned = false;
      helperFunction.data.banid = "";
    }
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&AutoWB &6> &c${error}`);
  }
})