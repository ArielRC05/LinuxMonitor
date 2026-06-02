//system information from npm package so it gets real linux data
const systemInfo = require('systeminformation')

//async means asynchrounous and is for non blocking tasks (sp: segundo plano)
async function getCpuData() {
    //Note: await -> used to pause function until background operation finishes
    const cpuLoad = await systemInfo.currentLoad(); //% of how busy is the CPU
    const cpuInfo = await systemInfo.cpu();// specs

    const totalUse = parseFloat(cpuLoad.currentLoad.toFixed(2));
    const numberCores = cpuLoad.cpus.length; //number of cores
    const cpuBrand = cpuInfo.brand; //brand name
    const cpuSpeed = cpuInfo.speed; // ghz speed

    const cLoads = cpuLoad.cpus.map(core => ({ //load for every core
        load: parseFloat(core.load.toFixed(2)
    )})) 

    return {
        usage: totalUse,
        cores: numberCores,
        brand: cpuBrand,
        speed: cpuSpeed,
        coreLoads: cLoads,
    };

}

module.exports = {getCpuData}; //for other files to use this, the {} is to export just the function and not the whole module