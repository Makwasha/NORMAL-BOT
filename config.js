const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUSZKjRhS9S25FtRAgQIqoCKMZoQFJaHT0IgXJIEFCZSaTKrSxNz6AfYG+gQ/gTR/Adl/BJ3EgVUX1wm6XWWVkJu+//O+9/wxwHFBkoBK0n0FCggwyVC1ZmSDQBp3UdREBHHAgg6ANSs1wxx7bzHLJt0zFwoHsbmeFLZtZt3FQ+a1Srg17LeOIfwRXDiTpMQzsbwCStZHmg0aYdvfYjCc+78ADVfHeiqxTNz0pG5PU15ODfdn2H8G1QoQBCbDXT3wUIQJDA5UmDMj76KfacLn0jiy05dF2v0StAR8tkWwVC75JbMr6JlvAff0Jbt9Jv7kJwpGQTZ3ZoYiSw3DnmcFREohx4Y0zrof8cMQca1TLG4s7fRp4GDm6gzALWPnuvnu9QXzKQxdONOuJTFqNeQad2pLMd/5ye1kureVhOHKX8mo4fR9xeVyfzObrEzzP0yzKm7EtyMd1l+xUBOXCKAJpXTon2q91+a+Jm+TVK+f/03dpkEq5iKPWfmwIR/kgbp5262Q3GFyUdOMsesmIZygVsCIu3kd/sY01T5h6Ox+VvuzAQ1OSjTo1EM28vVTXyHbLW/Sg5Sv9jT5kKfkWy64wqtd27s6f5u4lNzpSShnp4GJ6EGmo5+fLzLF7YaOQJWU3QK3WfjL3/d024md429JYRi49TdxNMn8/28CLC8Mlgp388faiMyp1B7QbVw4Q5AWUEciCGN/2ZA5AJ1shmyB26y4YI73V6ytuoXRR0e8HppU2M31EnQgvj7MCY6lWFrw1iRbxI+BAQmIbUYqcUUBZTMopohR6iIL29x85gFHB7rpV1eQGB9yAULbGaRLG0HkV9fUQ2nacYrYqsd2tFoiANv+2jRgLsEerNqYYEtsPMtT1IaOg7cKQoisHHJQFNqrwQOxJ0xTmC0t8iKywgxuhMBksKsp+jO9XWpLash2n8dASm60HSeSFB8hD+0FUxSNUbVd1FBVwIHiJTPXPvyo4Vc3OpquUWcOpj0RrMU8a5ydRWpOE3lS4tx4R5IA2IyniwBHa5zSx4jPC38B9Suqzw/6o5xYdawEhBAqmM13MpoPpV7h3SUH7+W1MdWOnwlv0pntBOViAA9HNgUH1ckEWFUVVm6ogye0G/x39kFeNhEnyASMGOIBhdRt8/vTnb7//+uWXh8+f/vjxr59++PJzVfNFkArNQQwGIa0sPCaH01Hr92fl+aTQ4bAbe1rX08CbgK9BuDstttX6KhrP9ckopPJwt23RnO6bk4E/0dflPo7UtFPO6pe6rz7+AwhoA0yedONs5ebG5/WsHCoRr9gpmtflstT9ziqNFLVXiPU9v2WJFS3xKRJ7prKrjabz2coOM6OITnromZuxJRU1PeLjoKc9VtXuRvq6mGr2wwNRz6Joh7N+T+lfCuEsZDFhrbRFl7ppLPmBthr0iH4QQouH7HKuE9H13dohMPuraRlucaTjIzTG/U56seVB3vHuEb2NiPBlNAe39Dy/2M4N0G3SvQjyn8K9JYC/cl9hvMzOf3FZB45Mk08CK+gWzePcDxvZcToZzlfFflUOppExziaefXLVuuSC6/UjB5IQMjcmEWgDGh0h4EAIKdPeEmwFEaIMRgloNxRRaraaDaXFgajUkmTFIHsNPtCqT7+cwfVv7Eh+WRMIAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

