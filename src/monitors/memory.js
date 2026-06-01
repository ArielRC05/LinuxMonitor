//system information from npm package so it gets real linux data
const systemInfo = require('systeminformation')

function bytesToGb(byteNum){
    GB = byteNum * (10** -9);
    return GB;
}

async function getMemoryData(){
    const memInfo = await systemInfo.mem(); //memory info in bytes: total, free, used, active, available etc
    
    const totalMem = bytesToGb(memInfo.total); //RAM
    const usedMem = bytesToGb(memInfo.used);//RAM being used
    const freeMem = bytesToGb(memInfo.free);//RAM free
    const availableMem = bytesToGb(memInfo.available);//Available RAM 
    
    const swapTotal = bytesToGb(memInfo.swaptotal) //SWAP is when RAM gets full Linux uses part of the hard drive as fake Ram to prevent crashes (slower)
    const swapUsed = bytesToGb(memInfo.swapused)
    const swapFree = bytesToGb(memInfo.swapfree)

    const usage = ((usedMem / totalMem) * 100).toFixed(1); //percentage of what is being used

    return {
        total: parseFloat(totalMem.toFixed(2)),
        used: parseFloat(usedMem.toFixed(2)),
        free: parseFloat(freeMem.toFixed(2)),
        available: parseFloat(availableMem.toFixed(2)),
        usage: parseFloat(usage),
        swap: {
            total: parseFloat(swapTotal.toFixed(2)),
            used: parseFloat(swapUsed.toFixed(2)),
            free: parseFloat(swapFree.toFixed(2)),
        }
    };


}



module.exports = getMemoryData; //for other files to use this