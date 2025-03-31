pipeline {
    agent any

    environment {
        // Define any environment variables if needed
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the repository
                checkout scm
            }
        }

        stage('Build') {
            steps {
                // Example build step (replace with your actual build logic)
                script {
                    echo 'Building the project...'
                    // Example: sh 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                // Example test step (replace with your actual test logic)
                script {
                    echo 'Running tests...'
                    // Example: sh 'npm test'
                }
            }
        }

        stage('Deploy') {
            steps {
                // Example deploy step (replace with your actual deployment logic)
                script {
                    echo 'Deploying project...'
                    // Example: sh 'deploy.sh'
                }
            }
        }
    }

    post {
        success {
            echo 'Build completed successfully!'
        }
        failure {
            echo 'Build failed. Check the logs!'
        }
    }
}
