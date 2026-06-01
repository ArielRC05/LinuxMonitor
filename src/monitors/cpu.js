//system information from npm package so it gets real linux data
const systemInfo = require('systeminformation')

//async means asynchrounous and is for non blocking tasks (sp: segundo plano)
async function getCpuData() {
    //Note: await -> used to pause function until background operation finishes
    const cpuLoad = await systemInfo.currentLoad(); //% of how busy is the CPU
    const cpuInfo = await systemInfo.cpu();// specs

    const totalUse = cpuLoad.currentLoad;
    const numberCores = cpuLoad.cpus.length;
    const cpuBrand = cpuInfo.brand;
    const cpuSpeed = cpuInfo.speed;

    const cLoads = cpuLoad.cpus.map(core => ({load: core.load}))

    return {
        usage: totalUse,
        cores: numberCores,
        brand: cpuBrand,
        speed: cpuSpeed,
        coreLoads: cLoads,
    };

}

module.exports = getCpuData; //for other files to use this