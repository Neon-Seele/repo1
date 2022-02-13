
const QRcode = require ("qrcode");



const generateQR = async text => {
    try {
        console.log(await QRcode.toDataURL(text));
    } catch(err) {
        console.log(err);
    }
 }

 generateQR("http//google.com/");