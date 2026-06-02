//system information from npm package so it gets real linux data
const systemInfo = require('systeminformation')
const {kbToBytes, bytesToMb} = require('../utils/formatter') //{} is to use just the function and not the whole module

async function getProcessesData(){

    const processesData = await systemInfo.processes();

    const processTotal = processesData.all
    const processRun = processesData.running
    const processSleep = processesData.sleeping
    const processBlock = processesData.blocked
    const processUnk = processesData.unknown

    const processList = processesData.list

    //only top 10 more cpu use
    const top5Process = processList.sort((a, b) => b.cpu - a.cpu).slice(0, 10);

    const mapProcessList = top5Process.map(process => ({
        id: process.pid, 
        name: process.name, 
        cpuUsage: parseFloat(process.cpu.toFixed(1)), //usage in %
        memoryUsage: parseFloat(process.mem.toFixed(1)), //RAM used in KB
        ramUsedMb: bytesToMb(kbToBytes(process.memRss)), //in KB
        state: process.state, //if its running, slepping or blocked
        user: process.user,
        started: process.started //when it started
    }));

    return {
        summary: {
            total: processTotal,
            running: processRun,
            sleeping: processSleep,
            bloked: processBlock,
            unknown: processUnk
        },
        listTop10: mapProcessList
    };

}

module.exports = {getProcessesData}; //for other files to use this, the {} is to export just the function and not the whole module