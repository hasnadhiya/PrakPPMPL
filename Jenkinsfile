pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/hasnadhiya/prak8_jenkins'
            }
            post {
                success {
                    emailext subject: 'Checkout Succeeded', body: 'The Checkout stage succeeded!', 
                    recipientProviders: [[$class: 'DevelopersRecipientProvider']]
                }
                failure {
                    emailext subject: 'Checkout Failed', body: 'The Checkout stage failed.', 
                    recipientProviders: [[$class: 'DevelopersRecipientProvider']]
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
            post {
                success {
                    emailext subject: 'Install Dependencies Succeeded', body: 'The Install Dependencies stage succeeded!', 
                    recipientProviders: [[$class: 'DevelopersRecipientProvider']]
                }
                failure {
                    emailext subject: 'Install Dependencies Failed', body: 'The Install Dependencies stage failed.', 
                    recipientProviders: [[$class: 'DevelopersRecipientProvider']]
                }
            }
        }
        stage('Run Unit Tests') {
            steps {
                bat 'npm run test:unit'
            }
            post {
                success {
                    emailext subject: 'Run Unit Tests Succeeded', body: 'The Run Unit Tests stage succeeded!', 
                    recipientProviders: [[$class: 'DevelopersRecipientProvider']]
                }
                failure {
                    emailext subject: 'Run Unit Tests Failed', body: 'The Run Unit Tests stage failed.', 
                    recipientProviders: [[$class: 'DevelopersRecipientProvider']]
                }
            }
        }
        stage('Run Integration Tests') {
            steps {
                bat 'npm run test:integration'
            }
            post {
                success {
                    emailext subject: 'Integration Tests Succeeded', body: 'The Integration Tests stage succeeded!', 
                    recipientProviders: [[$class: 'DevelopersRecipientProvider']]
                }
                failure {
                    emailext subject: 'Integration Tests Failed', body: 'The Integration Tests stage failed.', 
                    recipientProviders: [[$class: 'DevelopersRecipientProvider']]
                }
            }
        }
        stage('Build') {
            steps {
                echo 'Building the application...'
                bat 'npm run build' // Perintah build aplikasi
                // Tambahkan perintah build jika diperlukan
            }
            post {
                success {
                    emailext subject: 'Build Succeeded', body: 'The Build stage succeeded!', 
                    recipientProviders: [[$class: 'DevelopersRecipientProvider']]
                }
                failure {
                    emailext subject: 'Build Failed', body: 'The Build stage failed.', 
                    recipientProviders: [[$class: 'DevelopersRecipientProvider']]
                }
            }
        }
        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to the staging server...'
                // Perintah untuk deploy ke server staging
                bat 'dir ./build' // Debugging: Periksa isi direktori build
                bat 'scp -r ./build user@staging-server:/var/www/app'
                bat 'ssh user@staging-server "sudo systemctl restart app"'
            }
            post {
                success {
                    emailext subject: 'Deployment to Staging Succeeded', body: 'The application was successfully deployed to the staging server!', 
                    recipientProviders: [[$class: 'DevelopersRecipientProvider']]
                }
                failure {
                    emailext subject: 'Deployment to Staging Failed', body: 'The deployment to the staging server failed.', 
                    recipientProviders: [[$class: 'DevelopersRecipientProvider']]
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                // Tambahkan perintah deploy jika diperlukan
            }
            post {
                success {
                    emailext subject: 'Deploy Succeeded', body: 'The Deploy stage succeeded!', 
                    recipientProviders: [[$class: 'DevelopersRecipientProvider']]
                }
                failure {
                    emailext subject: 'Deploy Failed', body: 'The Deploy stage failed.', 
                    recipientProviders: [[$class: 'DevelopersRecipientProvider']]
                }
            }
        }
    }
    post {
        success {
            echo 'Pipeline finished successfully!'
            emailext subject: 'Pipeline Succeeded', body: 'The pipeline finished successfully!', 
            recipientProviders: [[$class: 'DevelopersRecipientProvider']]
        }
        failure {
            echo 'Pipeline failed!'
            emailext subject: 'Pipeline Failed', body: 'The pipeline failed.', 
            recipientProviders: [[$class: 'DevelopersRecipientProvider']]
        }
    }
}
