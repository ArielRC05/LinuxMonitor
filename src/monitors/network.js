//system information from npm package so it gets real linux data
const systemInfo = require('systeminformation')
const {bytesToMb} = require('../utils/formatter') //{} is to use just the function and not the whole module

async function getNetworkData(){
    const nwInterfaces = await systemInfo.networkInterfaces();
    const nwStats = await systemInfo.networkStats();

    const mapInterfaceInfo = nwInterfaces.map(network => ({
        name: network.ifaceName, //name of the adapter or device
        default: network.default, //if its the default or not
        IP4Adress: network.ip4, //Ip4 adress asigned to the interface
        operstate: network.operstate,
        speed: network.speed, //speed in Mbps

    }));

    const statsInfo = nwStats.map(stats => ({ //map the stats info
        name: stats.iface,
        download: bytesToMb(stats.rx_bytes),
        upload: bytesToMb(stats.tx_bytes),
        downloadSpeed: bytesToMb(stats.rx_sec),
        uploadSpeed: bytesToMb(stats.tx_sec),

    }));

    return {interface: mapInterfaceInfo, stats: statsInfo}; //{} in js to return both as an object

}

module.exports = {getNetworkData}; //for other files to use this, the {} is to export just the function and not the whole module