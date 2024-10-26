pipeline {
    agent any
    tools {
        nodejs 'NodeJS' // Ensure this matches the NodeJS installation name
        //maven 'Maven'   // Add Maven if it's installed, replace 'Maven' with the actual name
    }
    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from GitHub
                git url: 'https://github.com/nik8839/my_app_21bds044.git', branch: 'main'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }
        // stage('Build with Maven') {
        //     steps {
        //         // Build the application using Maven
        //         sh 'mvn clean install'
        //     }
        // }
        // stage('Run Selenium Tests') {
        //     steps {
        //         // Run Selenium tests
        //         sh 'npm test'
        //     }
        // }
    }
    post {
        success {
            echo 'test were successful!'
        }
        failure {
            echo 'Build or tests failed!'
        }
        always {
            // Clean up or send notifications
            echo 'Cleaning up...'
        }
    }
}
