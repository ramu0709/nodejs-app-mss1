process.env.JAVA_HOME = "/usr/lib/jvm/java-17-openjdk-amd64";

const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://172.21.40.70:9000/',
  options: {
    'sonar.projectDescription': 'This is a Node JS application',
    'sonar.projectName': 'Node JS Application - Sample',
    'sonar.projectKey': 'NodeJsMithunTechnologies',
    'sonar.login': 'squ_abcxyz123...', // your token
    'sonar.projectVersion': '1.0',
    'sonar.language': 'js',
    'sonar.sourceEncoding': 'UTF-8',
    'sonar.sources': '.'
  },
}, () => {});
