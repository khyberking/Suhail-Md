const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923436062975";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_33_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1LFxuICAgICAgICA3MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODksXG4gICAgICAgIDMyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzksXG4gICAgICAgIDUwLFxuICAgICAgICA4MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNixcbiAgICAgICAgNjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTUsXG4gICAgICAgIDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgxLFxuICAgICAgICAyOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDUzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDczLFxuICAgICAgICA4MixcbiAgICAgICAgMTksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTExLFxuICAgICAgICA5MixcbiAgICAgICAgMjUyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDU1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDksXG4gICAgICAgIDQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDU4LFxuICAgICAgICAxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDMwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDksXG4gICAgICAgIDc5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgODMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQUNiS0RrMDNVU25aUGwxUjJoUzJXVEVKVTh4RTJSUW1peHlKTHhqTWNydz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieEcxOVFFZUtRaFdWOFJ2UzZTcW5vd1wiLFxuICBcInBob25lSWRcIjogXCJkNWQ5Zjc0YS03NWI1LTQ0OWYtOTI5NC1lMDJmMGFhNTlmZDJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDYsXG4gICAgICAzOCxcbiAgICAgIDg4LFxuICAgICAgMTY5LFxuICAgICAgMTcsXG4gICAgICAxNCxcbiAgICAgIDE4MCxcbiAgICAgIDIxMSxcbiAgICAgIDEwMixcbiAgICAgIDEyNyxcbiAgICAgIDE2OSxcbiAgICAgIDQ5LFxuICAgICAgNDEsXG4gICAgICAyNDgsXG4gICAgICAxNjEsXG4gICAgICAxOTcsXG4gICAgICA3MSxcbiAgICAgIDI1LFxuICAgICAgMTc5LFxuICAgICAgMTAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNyxcbiAgICAgIDU3LFxuICAgICAgOTUsXG4gICAgICA5NSxcbiAgICAgIDEyNSxcbiAgICAgIDIyNyxcbiAgICAgIDE0MixcbiAgICAgIDYyLFxuICAgICAgMTYsXG4gICAgICAxNzAsXG4gICAgICAxMDcsXG4gICAgICA3NSxcbiAgICAgIDE5MixcbiAgICAgIDg5LFxuICAgICAgNSxcbiAgICAgIDE5NyxcbiAgICAgIDEyNyxcbiAgICAgIDExMyxcbiAgICAgIDE2NixcbiAgICAgIDIwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQUk1WSldCU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDM2MDYyOTc1OjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzgzMzE4NDA0NTg5NTA6MzZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSld5eGFzRUVJRFQ3TE1HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUdkV0akI0L2pYSVhCeVRYNUpTWXQrY2hIMGRZRmQvdEVuTmd1WVl0MWtjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjRUS1Q5S0J5Y3k2UHhsVXJpT0wyYnlUbjZYd2ZDUHBiZlhWUkI0ekZCNlNXd0EzV1NLMVI1VlBvNklnNE15ZjR3WVNFcks1cTQxcW9ldHJxdTl4K0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlhPV3QyeDVPME1rK2p5aFZXUFBsS2pWZnoxTXFqVS90ZVloakg5b2pnNG5lekZ0ekFSc2VhdjZwQkhVN0c4dVlqTXhsS1Z2OTZpdURjSnFvaWJKRURnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQzNjA2Mjk3NTozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkzNDc1ODcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMWXJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxZci5qc29uIjogIntcImtleURhdGFcIjpcIkpCMlBzS0ZJSzYvRjFrTWtiaEdJZjZwMTBsYlBmRVI4bHZNMGdDVmNHL0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE2NTA1NjI3NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5MzQ1OTU1MzEzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
