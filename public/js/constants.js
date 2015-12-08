(function(exports) {
  'use strict';

  var address = location.pathname.replace(/^\/fly\//, '')
    .replace(/(\w)(\w)(?!$)/g, '$1$2:');

  exports.Constants = Object.freeze({
    RS_ADDRESSES: [
      address
    ],

// 9a66fa00-0800-9191-11e4-012d1540cb8e
// 9a66fb00-0800-9191-11e4-012d1540cb8e
// 9a66fc00-0800-9191-11e4-012d1540cb8e
// 9a66fd21-0800-9191-11e4-012d1540cb8e
// 9a66fd51-0800-9191-11e4-012d1540cb8e
// 9a66fe00-0800-9191-11e4-012d1540cb8e

    SERVICES: {
      '9a66fa00-0800-9191-11e4-012d1540cb8e': ['FA0A', 'FA0B', 'FA0C'],
      '9a66fb00-0800-9191-11e4-012d1540cb8e': ['FB0E', 'FB0F']
    },
    CHARACTERISTICS: {
      CCCD: '00002902-0000-1000-8000-00805f9b34fb',
      FA0A: '9a66fa0a-0800-9191-11e4-012d1540cb8e',
      FA0B: '9a66fa0b-0800-9191-11e4-012d1540cb8e',
      FA0C: '9a66fa0c-0800-9191-11e4-012d1540cb8e',
      FB0E: '9a66fb0e-0800-9191-11e4-012d1540cb8e',
      FB0F: '9a66fb0f-0800-9191-11e4-012d1540cb8e'
    }
  });
} (window));
