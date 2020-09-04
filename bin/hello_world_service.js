#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { HelloWorldServiceStack } = require('../lib/hello_world_service-stack');

const app = new cdk.App();
new HelloWorldServiceStack(app, 'HelloWorldServiceStack');
