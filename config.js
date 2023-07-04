/*
    Base By ArxzyDev
    Recode By QyuuNee
    Jual Sc? Neraka Paling Bawah
    My Contact https://wa.me/6288210828960
    
   Notes:
   Jika Ingin Recode Silakan Tapi Ingat Creditnya
   Sc Koneko-MD Akan Terus Di Update.
   Jika Ingin Beli Apikey Chat Owner Lolhuman
   
*/

const fs = require('fs')
const chalk = require('chalk')

global.apikey = '' // AMBIL DI LOLHUMAN
global.rosekey = 'FhNwDwBCCF' // ROSE

//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'rp.bot'
global.namaowner = 'ral'
global.wagc = "https://chat.whatsapp.com/KfZwJPV1VLRKjQ29acwcdP"

//—————「 Setting Owner 」—————//
global.owner = ['6282196995322']
global.nomerowner = '62882196995322'
global.premium = ['62882196995322']

//—————「 Set Wm 」—————//
global.packname = 'rpbot'
global.author = 'Bot: you:3\nYouTube: Gerall13\nInstagram: rall_natio09'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    success: '🤗Done~',
    admin: '❗this cmd only Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !\n\n🎯 *Premium Cuma 3k Permanen* 😋\n\n🍂 *Subscribe Channel Owner Pakai 10 Akun Gratis Premium Bot (Sertakan Bukti)* ❗',
    error: '🚫 Fitur Sedang Error !',
    prem: '🚫 Fitur Khusus Premium!\n\n♨️ Buy Premium Cuma 3k Permanen',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 50
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/c5c58e9b6a9459ad847f0.png'
global.link = 'https://youtu.be/@Gerall13'
global.thumb = fs.readFileSync('./media/koneko.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
