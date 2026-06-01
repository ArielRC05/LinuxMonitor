
const settings = { //object settings, useful to evade magic numbers :P
  // refresh time
  refreshInterval: 2000, //2 sec

  app: { //its name and version
    name: 'Linux Monitor',
    version: '1.0',
  },

  thresholdsColor: { //umbrales
    //colors for when something its high or low (high bad low good)
    low: {
      value: 50,
      color: 'green',
    },
    medium: {
      value: 80,
      color: 'yellow',
    },
    high: {
      value: 100,
      color: 'red',
    },
  },

  layout: { //layout for dashboard
    //cpu: { top: '0%', left: '0%', width: '50%', height: '30%' },
    //memory: { top: '0%', left: '50%', width: '50%', height: '30%' },
    //disk: { top: '30%', left: '0%', width: '50%', height: '30%' },
    //network: { top: '30%', left: '50%', width: '50%', height: '30%' },
    //processes: { top: '60%', left: '0%', width: '100%', height: '40%' },
  },
};

module.exports = settings; //for allowing others to use this config