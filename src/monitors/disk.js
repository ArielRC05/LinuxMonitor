//system information from npm package so it gets real linux data
const systemInfo = require('systeminformation')
const { bytesToGb } = require('../utils/formatter') //{} is to use just the function and not the whole module

//async means asynchrounous and is for non blocking tasks (sp: segundo plano)
async function getDiskData() {
    //Note: await -> used to pause function until background operation finishes
    const drives = await systemInfo.fsSize(); //get all drives and partitions info

    const mapInfo = drives.map(drive => ({ //format info for every drive 
        name: drive.fs,
        mount: drive.mount,
        size: bytesToGb(drive.size),
        used: bytesToGb(drive.used),
        available: bytesToGb(drive.available),
        usePercent: parseFloat(drive.use.toFixed(1)),
    } ));

    return mapInfo;

    };



module.exports = {getDiskData}; //for other files to use this, the {} is to export just the function and not the whole module