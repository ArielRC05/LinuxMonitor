
function bytesToGb(byteNum){ //function to convert bytes to Gigabytes
    Gb = byteNum * (10** -9);
    return parseFloat(Gb.toFixed(2));
}


function bytesToMb(byteNum){ //function to convert bytes to Megabytes
    Gb = byteNum / 1048576;
    return parseFloat(Gb.toFixed(2));
}

function kbToBytes(kbNum){ //function to convert Kolobytes to bytes
    byteNum = kbNum * 1024;
    return byteNum
}

module.exports = {bytesToGb, bytesToMb, kbToBytes} //the {} is to export just the function and not the whole module