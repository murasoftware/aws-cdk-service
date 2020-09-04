const cdk = require('@aws-cdk/core');
const service = require('./service');
const serviceName = require("./service-name");
class ServiceStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    new service.Service(this, serviceName);
  }
}

module.exports = { ServiceStack }
