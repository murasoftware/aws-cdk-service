const { expect, matchTemplate, MatchStyle } = require('@aws-cdk/assert');
const cdk = require('@aws-cdk/core');
const Service = require('../lib/service-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Service.ServiceStack(app, 'MyTestStack');
    // THEN
    expect(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
