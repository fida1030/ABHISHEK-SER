import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['917034167123', '𝛭𝑈𝛨𝛥𝛭𝛭𝛯𝐷 𝑆𝛪𝑅', true],
  [''],
  [''] 
] //Number of owners

global.mods = ['917034167123','917034167123'] 
global.prems = ['917034167123', '917034167123', '917034167123']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['BrunoSobrino']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '𝐂𝚫𝚻 𝐒𝚸𝐘'
global.premium = 'true'
global.packname = '𝛭𝑈𝛨𝛥𝛭𝛭𝛯𝐷 𝑆𝛪𝑅🤭𝛭𝑈𝛨𝛥𝛭𝛭𝛯𝐷 𝑆𝛪𝑅' 
global.author = '𝛭𝑈𝛨𝛥𝛭𝛭𝛯𝐷 𝑆𝛪𝑅' 
global.igfg = '▢ Follow on Instagram\nhttps://www.instagram.com/m.hmmmmmd?igsh=MW42cTB4dHJtcWZuZA==\n' 
global.dygp = 'https://chat.whatsapp.com/Gz866L8ZATyJvDx6YZHctQ'
global.fgsc = 'https://github.com/Guru322/GURU-BOT-V1' 
global.fgyt = 'https://youtube.com/@'
global.fgpyp = 'https://youtube.com/@'
global.fglog = 'https://replicate.delivery/pbxt/QbP6Fh3ZXwKON9SCB70ERGwwgeeSbztwKIOIzhUeXFkwnFHiA/out.png' 

//Dont Edit Danger Zone⚠️
global.wait = '*⌛ _Please Wait..._*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.mlc = '📃'
global.sdc = '🎶'
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
