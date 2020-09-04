#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { ServiceStack } = require('../lib/service-stack');

const app = new cdk.App();
new ServiceStack(app, 'ServiceStack');
