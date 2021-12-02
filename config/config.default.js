/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1638394790145_2914';

  // add your middleware config here
  config.middleware = [];
  
  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.session = {
    key: 'EGG_SESS',
    maxAge: 1000 * 60 * 10,//10分钟
    httpOnly: true,
    encrypt: true,
  }

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
