const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: makeWASocket,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore
} = require("@whiskeysockets/baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    let num = req.query.number;
        async function XeonPair() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState(`./session`)
     try {
            let XeonBotInc = makeWASocket({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: [ "Ubuntu", "Chrome", "20.0.04" ],
             });
             if(!XeonBotInc.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await XeonBotInc.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            XeonBotInc.ev.on('creds.update', saveCreds)
            XeonBotInc.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(10000);
                    const sessionXeon = fs.readFileSync('./session/creds.json');
                    const audioxeon = fs.readFileSync('./kongga.mp3');
                    XeonBotInc.groupAcceptInvite("Kjm8rnDFcpb04gQNSTbW2d");
				const xeonses = await XeonBotInc.sendMessage(XeonBotInc.user.id, { document: sessionXeon, mimetype: `application/json`, fileName: `creds.json` });
				XeonBotInc.sendMessage(XeonBotInc.user.id, {
                    audio: audioxeon,
                    mimetype: 'audio/mp4',
                    ptt: true
                }, {
                    quoted: xeonses
                });
				await XeonBotInc.sendMessage(XeonBotInc.user.id, { text: `🛑Do not share this file with anybody\n\n© Subscribe @MR UNKNOWN on You Tube
				
				
*𝙎𝙀𝙎𝙎𝙄𝙊𝙉 𝙄𝙎 𝙊𝙉𝙇𝙄𝙉𝙀*
*ᴍʀ ᴜɴᴋɴᴏᴡɴ ᴏꜰᴄ*
*𝙊𝙒𝙉𝙀𝙍 :- ѕαη∂єѕн внαѕнαηα*
____________________________________
╔════◇
║『 𝙈𝙍 𝙐𝙉𝙆𝙉𝙊𝙒𝙉 𝘼𝙄 𝙄𝙎 𝙍𝙀𝘼𝘿𝙔 𝙏𝙊 𝘿𝙀𝙋𝙇𝙊𝙔 』
║ YOUR SESSION IS READY. COPY IT  
║ AND HOST IT ON YOUR WEB.
╚════════════════════╝
╔═════◇
║ 『••• OWNER INFO •••』
║ ❒ 𝐘𝐨𝐮𝐭𝐮𝐛𝐞: _https://www.youtube.com/@mr.unknow344_

║ ❒ 𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞: _Sandesh Bhashana[MR UNKNOWN]_

║ ❒ 𝐑𝐞𝐩𝐨: _https://github.com/vijitharanawakage/SANDESH-MD_

║ ❒ 𝐖𝐚𝐆𝐫𝐨𝐮𝐩: _https://chat.whatsapp.com/F5BXJci8EDS9AJ6sfKMXIS_

║ ❒ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩: _https://wa.me/+94741259325?text=𝘏𝘦𝘺_bbh🧸🍃_  l_

║ 
╚════════════════════╝ 
 *©𝗦𝗔𝗡𝗗𝗘𝗦𝗛 𝗕𝗛𝗔𝗦𝗛𝗔𝗡𝗔*
___________________________________

Don't Forget To Give Star⭐ To My Repo` }, {quoted: xeonses});
        await delay(100);
        return await removeFile('./session');
        process.exit(0)
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    XeonPair();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./session');
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await XeonPair()
});

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})

module.exports = router
