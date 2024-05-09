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


global.devs = "2349060187481" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_12_05_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA0NixcbiAgICAgICAgODQsXG4gICAgICAgIDExLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI5LFxuICAgICAgICA2NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNixcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUxLFxuICAgICAgICA0OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjEzLFxuICAgICAgICA1MixcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDcxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDgxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDUzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTczLFxuICAgICAgICA5NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE1LFxuICAgICAgICAxODUsXG4gICAgICAgIDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDQsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOCxcbiAgICAgICAgMixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDMsXG4gICAgICAgIDgxLFxuICAgICAgICAzMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5LFxuICAgICAgICA1NixcbiAgICAgICAgMjIxLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMwLFxuICAgICAgICAxODQsXG4gICAgICAgIDg1LFxuICAgICAgICA1NixcbiAgICAgICAgMTQwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgODAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODksXG4gICAgICAgIDExOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTgzLFxuICAgICAgICA2OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTU2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQxLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmelN2MGFDWmZrMGRkZ21VeERLWmVUZVFVQ2FhZkpZODRGRXZKSWtlcnBFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNjAxODc0ODFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjgzRjAwQTdDMTUwMkE3NkM3NUZBMkU1RDVFM0VFMDEyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNTI4OTE2OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI3NUdfWDlrQ1JUcVRfZFkyX2FQbEp3XCIsXG4gIFwicGhvbmVJZFwiOiBcImRkZjRlNzY3LWY5NTAtNGQ2ZS04MzYyLWUzMDA4YTlmZDM1YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MixcbiAgICAgIDIzNyxcbiAgICAgIDQyLFxuICAgICAgMTUyLFxuICAgICAgODYsXG4gICAgICAyMixcbiAgICAgIDExNixcbiAgICAgIDExMixcbiAgICAgIDcxLFxuICAgICAgMTgxLFxuICAgICAgMjEwLFxuICAgICAgNDMsXG4gICAgICA5MixcbiAgICAgIDE3OCxcbiAgICAgIDIwNSxcbiAgICAgIDg2LFxuICAgICAgMTEsXG4gICAgICAyMjYsXG4gICAgICA3MyxcbiAgICAgIDIyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTAsXG4gICAgICAyNCxcbiAgICAgIDk3LFxuICAgICAgMjE0LFxuICAgICAgMjE2LFxuICAgICAgMjgsXG4gICAgICAxNDksXG4gICAgICAxNjUsXG4gICAgICAyMjYsXG4gICAgICA3NCxcbiAgICAgIDM3LFxuICAgICAgNDUsXG4gICAgICA5MyxcbiAgICAgIDMzLFxuICAgICAgMzEsXG4gICAgICAyNTUsXG4gICAgICAxMzMsXG4gICAgICAyMDIsXG4gICAgICAyMDcsXG4gICAgICAxOTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV01NOTNSM1pcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNjAxODc0ODE6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY1NzUxODU1Njg1ODU2OjE2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkfbnkRTTOG4gMK/RVJcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLSFA4ZVVHRU1mNDlMRUdHQXNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjBvRTZMM2hZT0RodU5vRzUyZ3Y4bVFZZzg0VURqNGdzRytmSlZ6enEyQ2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNnRZQ04ranFGQTRFckNFQzRCaXZkSWxFb1hDdnNOVzVHcW1tSFprcWx6VjMvNStMNDZGamNBZVJRZHZZREp6UC9kRTJDNnJuaVhDZkxsNG50bk5aRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSmsyVmhxaXI3dkl0T2tRZ3p6dTE4WEowRCtBRkdSbjBYTFRoTnQ1ckoyN2pMYzNMdFViQTdJQ1U5Vnp0QzJ4RHNyRmFuK213Ti9BOEVYVWgzVEd6QVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA2MDE4NzQ4MToxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTUyODkxNjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFcENcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVwQy5qc29uIjogIntcImtleURhdGFcIjpcInV0aENGMkRVVDlOYWExbGJTREJDMS9jSmxER3N3QTIvU09Lc1V0QzJsOG89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTgyNDI4NjYyNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "JARVIS",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
