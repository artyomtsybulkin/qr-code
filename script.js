function getQrCode (builder, qrid, contentid) {
    let labelurl = "otpauth://totp/service?secret=" + builder
    let qrurl = "https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl="+encodeURIComponent(labelurl)+"&chld=H|0"
    $(`${qrid}, ${contentid}`).empty()
    $(`${qrid}`).append($('<img>',{ id:'theImg',src:qrurl }))
    $(`${contentid}`).append($('<code>' + labelurl + '</code>'))
}

function generateUserIdBuilder(qrkeyid, qrid, contentid, flag) { 
    /*
        flag = google/microsoft
    */
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"
    let builder=""
    let random = 0
    $(`${qrkeyid}`).empty()
    for (i = 0; i < 16; i++) {
        random = Math.floor((Math.random() * alphabet.length))
        builder = builder + alphabet.charAt(random)
    }
    user_id_key = flag + ":" + builder
    $(qrkeyid).append($('<code>' + user_id_key + '</code>'))
    getQrCode(builder, qrid, contentid)
}

window.onload = function() {
    generateUserIdBuilder(`#user-key-0`, `#user-qr-0`, `#user-content-0`, "google")
    generateUserIdBuilder(`#user-key-1`, `#user-qr-1`, `#user-content-1`, "microsoft")
}