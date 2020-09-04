const core = require("@aws-cdk/core");
const apigateway = require("@aws-cdk/aws-apigateway");
const lambda = require("@aws-cdk/aws-lambda");

class HelloWorldService extends core.Construct {
  constructor(scope, id) {
    super(scope, id);


    const handler = new lambda.Function(this, "HelloHandler", {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.asset("resources"),
      handler: "hello.main",
      environment: {}
    });

    const api = new apigateway.RestApi(this, "hello-api", {
      restApiName: "Hello World Service",
      description: "This service serves the world hellos."
    });

    const getHelloIntegration = new apigateway.LambdaIntegration(handler, {
      requestTemplates: { "application/json": '{ "statusCode": "200" }' }
    });

    api.root.addMethod("GET", getHelloIntegration); // GET /
  }
}

module.exports = { HelloWorldService }