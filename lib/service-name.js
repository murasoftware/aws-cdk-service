const snakeToCamel = (str) => str.replace(
    /([-_][a-z])/g,
    (group) => group.toUpperCase()
                    .replace('-', '')
                    .replace('_', '')
);

const serviceName = snakeToCamel(require('../package.json').name);

module.exports = serviceName;