pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = 'dockerhub-creds'
        DOCKERHUB_USERNAME = 'oussama75'  
        BACKEND_IMAGE = "${DOCKERHUB_USERNAME}/fullstack-backend"
        FRONTEND_IMAGE = "${DOCKERHUB_USERNAME}/fullstack-frontend"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/mreckah/devops-aws-app.git'
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh 'chmod +x mvnw'
                    sh './mvnw clean package -DskipTests'
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', DOCKERHUB_CREDENTIALS) {
                        def backendImage = docker.build("${BACKEND_IMAGE}:latest", "./backend")
                        def frontendImage = docker.build("${FRONTEND_IMAGE}:latest", "./frontend")

                        backendImage.push()
                        frontendImage.push()
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker-compose down'
                sh 'docker-compose pull'   // Pull images depuis Docker Hub
                sh 'docker-compose up -d'
            }
        }
    }
}
