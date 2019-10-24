node("Automation_Linux_Slave_01") {

  stage('Git Pull') {
    git credentialsId: '8cadc91a-0e19-4a32-8a62-08365fa250ef', url: 'http://gitlab.clicktale.net/automation/code/webdriverio.git'
  }
  stage('Build') {
    sh 'ls -la'
    sh 'pwd'
    sh 'sudo npm install'
  }
  stage('Test') {

    sh 'sudo npm run test-grid'

  }
  stage('generate allure') {

    sh 'sudo npm run report-ci'

  }

  post {
    always {
      script {
        allure([
          includeProperties: false,
          jdk: '',
          properties: [],
          reportBuildPolicy: 'ALWAYS',
          results: [
            [path: 'allure-results']
          ]
        ])
      }
    }
  }
}