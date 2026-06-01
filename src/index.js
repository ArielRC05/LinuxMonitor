const settings = require('./config/settings');
const getCpuData = require('./monitors/cpu')
const getMemoryData = require('./monitors/memory')

function testColor(num){
    if (num < settings.thresholdsColor.low.value) {
        console.log(settings.thresholdsColor.low.color)
    }
}



async function main(){
    const cpuData = await getCpuData();
    const memoryData = await getMemoryData();

    console.log(cpuData);
    console.log(memoryData);
}

main();
console.log(settings.app.name);
console.log(settings.app.version);
console.log(15, testColor(15))
