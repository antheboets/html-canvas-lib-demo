pipeline {
    agent {
        docker { 
            image 'anthesdockeravontuur/jenkinsagentimages:node' 
        }
    }
    options {
        skipDefaultCheckout()
    }
    
    stages {
        stage('Clean'){
            steps{
                sh 'ls'
                cleanWs()
                sh 'ls'
            }
        }
        stage('SCM'){
            steps{
                checkout([$class: 'GitSCM', branches: [[name: '*/jenkins']],
    userRemoteConfigs: [[url: 'https://github.com/antheboets/html-canvas-lib-demo.git']]])
            } 
        }
        stage('Get packages'){
            steps{
                sh 'npm install'
            } 
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('deploy'){
            steps{
                sh 'npm run deploy'
            }
        }
    }
}
