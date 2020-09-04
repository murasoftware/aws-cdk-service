const core = require("@aws-cdk/core");
const apigateway = require("@aws-cdk/aws-apigateway");
const lambda = require("@aws-cdk/aws-lambda");
const serviceName = require("./service-name");

class Service extends core.Construct {
  constructor(scope, id) {
    super(scope, id);


    const handler = new lambda.Function(this, `${serviceName}Handler`, {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.asset("resources"),
      handler: "index.handler",
      environment: {}
    });

    const api = new apigateway.RestApi(this, `${serviceName.toLowerCase()}-api`, {
      restApiName: `${serviceName} Service`,
      description: `This is an ${serviceName.toLowerCase()} service.`
    });

    const getApiIntegration = new apigateway.LambdaIntegration(handler, {
      requestTemplates: { "application/json": '{ "statusCode": "200" }' }
    });

    api.root.addMethod("GET", getApiIntegration); // GET /
  }
}

module.exports = { Service }