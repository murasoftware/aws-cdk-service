const cdk = require('@aws-cdk/core');
const hello_world_service = require('./hello_world_service');

class HelloWorldServiceStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    new hello_world_service.HelloWorldService(this, 'Hello');
  }
}

module.exports = { HelloWorldServiceStack }
