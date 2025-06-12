const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://172.21.40.70:9000/',
  options: {
    'sonar.projectDescription': 'This is a Node JS application',
    'sonar.projectName': 'Node JS Application - Sample',
    'sonar.projectKey': 'NodeJsMithunTechnologies',
    'sonar.login': 'squ_b754ea5823512c08d18257e4911b8d2fee5b98c8',
    'sonar.projectVersion': '1.0',
    'sonar.language': 'js',
    'sonar.sourceEncoding': 'UTF-8',
    'sonar.sources': '.'
    // 'sonar.tests': 'specs',
    // 'sonar.inclusions': 'src/**'
  },
}, () => {});
