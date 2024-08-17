//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.devs = "23288812009";
global.sudo = process.env.SUDO || "Frank13";
global.owner = process.env.OWNER_NUMBER || "23288812009";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU5aQU83TDFubVptQnZ1aFBBQVlCQTBKQmY0eitzc1VlUjc4Q2RWNXhrND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE9Bbk0rTWFSSkNteS9tdk1vZStORVZ0QmcwQlhCQzlMejZzOTVtNmgyOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1TENVUlJ3QnhnalpzTnFzai9Wa3QvRUZpQmpqL3Q1dlBYaUZtMFNEcjMwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsM1g3UEZTTTZjRVNmRU1mV0JJbVBHUVF1cGtBOUJ4c1Uzc1pXSng2YW40PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktQd1kvZTc1Q1BqZTVHdUsxbEJ4NW8rSjJ2b0lmQjlTY3F4RUQvbnZYMmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhnaGdoY0JoQzRvOGNQZWVSV1RmYlhodEU1NVM2VFQ5N08zUkkwbVE1bVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0cveVduWnIrZVZnRHVHSWlEb0dRaGViRlNBNHhUdmtudUhJc2pjTkQzRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSE9QdDZrUzNLR2l3Zm1la1dVQVo1cUZyNlM0YXhvOTA1UkYzVE1pUkRqWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxhWWU3MWlHNkFzVmFMU2JFbVJYSEIvNW00dkpSM0wzY0VscGVtYlFKYmpraG55ZUw3NUpjbEQ2UVpkQ21Bb1czSkVvVVJGeWxSSGpFcEtoRDZZdGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjU0LCJhZHZTZWNyZXRLZXkiOiJjYVBGUFJvcHBZMVErRExCOTVsNkV2YTlwRExPRklOWVpSTS93TUgyYlZrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzMjg4ODEyMDA5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjYyNTcxOEJERjE3RUJDNjdBOUZCRkNBQjk4QzE3QzNDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjM4NjI2Mjd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzMjg4ODEyMDA5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjA4NDE1MDkxNTdGMjJGQjA0RjMwRjRGOEQzNkQ3MzZEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjM4NjI2Mjd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im1kNGRqR0ZKUU5helFhOGxwYlo1TXciLCJwaG9uZUlkIjoiY2NlOWQ2OGMtZjRmNy00YmVmLTkzYjEtZGU3ZGYzYjA0NmIwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJQTVNYRVN0RjRCck5GalkxV0RacDZNcTZiVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLWldCeUpKeVZxZDUyd1cyYkJCcnluOUtrNE09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTjYzMUJUQTQiLCJtZSI6eyJpZCI6IjIzMjg4ODEyMDA5OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRnJhbmNpcyBrb3JvbWEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lyR3ZaMEhFTk9jZ0xZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjBNMEtHd2hPOThCdCtNMU8ySG9aV0t4aXRNZUEzckNoMFZYM3hUOGhWQzQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6InlPNCsxVWYwVE1oQXJvekJ6SEgxVitBbndNTEI5ZFc1L214NEdVUHZEellkR3ZRRDdMWHhrdHFnbVh2YU1RVlhWckt0Q0RXMWpaYkJydElLckVTT0RnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ2dUZDc09YdXllcTMwOVRzM3U5S0R2Nm5wTGllRHlZZVlSOGc5MkpsN0lGdGYwQTBJYXFUMStweE02dkZPOUR2ZXVDWWV3VmpjZ3kxbjNkOXdXTHFpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMjg4ODEyMDA5OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZEROQ2hzSVR2ZkFiZmpOVHRoNkdWaXNZclRIZ042d29kRlY5OFUvSVZRdSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzg2MjYyNCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEZTAifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
