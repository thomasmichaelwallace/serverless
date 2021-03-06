'use strict';

const cliCommandsSchema = require('../cli/commands-schema');

class Rollback {
  constructor(serverless) {
    this.serverless = serverless;

    this.commands = {
      rollback: {
        ...cliCommandsSchema.get('rollback'),
        lifecycleEvents: ['initialize', 'rollback'],
        commands: {
          function: {
            ...cliCommandsSchema.get('rollback function'),
            lifecycleEvents: ['rollback'],
          },
        },
      },
    };
  }
}

module.exports = Rollback;
