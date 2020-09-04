const { expect, matchTemplate, MatchStyle } = require('@aws-cdk/assert');
const cdk = require('@aws-cdk/core');
const HelloWorldService = require('../lib/hello_world_service-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new HelloWorldService.HelloWorldServiceStack(app, 'MyTestStack');
    // THEN
    expect(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
