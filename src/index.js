const settings = require('./config/settings');
const {getCpuData} = require('./monitors/cpu')
const {getMemoryData} = require('./monitors/memory')
const {getDiskData} = require('./monitors/disk')
const {getNetworkData} = require('./monitors/network')
const {getProcessesData} = require('./monitors/processes')

function testColor(num){
    if (num < settings.thresholdsColor.low.value) {
        console.log(settings.thresholdsColor.low.color)
    }
}

async function main(){
    const cpuData = await getCpuData();
    const memoryData = await getMemoryData();
    const diskData = await getDiskData();
    const networkData = await getNetworkData();
    const processesData = await getProcessesData();

    console.log(settings.app.name);
    console.log(settings.app.version);

    console.log(cpuData);
    console.log(memoryData);
    console.log(diskData);
    console.log(networkData);
    console.log(processesData);
}

main();

