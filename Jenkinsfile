node("Automation_Linux_Slave_01") {

  stage ("Clean WS"){
		cleanWs notFailBuild: true
	}
  stage('Git Pull') {
    git credentialsId: '8cadc91a-0e19-4a32-8a62-08365fa250ef', url: 'http://gitlab.clicktale.net/automation/code/webdriverio.git'
  }
  stage('Build') {
    sh 'ls -la'
    sh 'pwd'
    sh 'npm install'
  }
  stage('Test') {
    try {
      sh 'npm run test-grid'
    }catch(Exception e){
          println("Exception: ${e}")
    }

  }
  stage('generate allure') {

    sh ' npm run report-ci'

  }
  stage('Post Build'){
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