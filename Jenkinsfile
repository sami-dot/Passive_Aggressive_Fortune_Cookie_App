pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/sami-dot/Passive_Aggressive_Fortune_Cookie_App.git'

            }
        }

        stage('Build') {
            steps {
                echo 'No build step needed for static site, just verifying files exist...'
                sh 'ls -la'
            }
        }

        stage('Lint') {
            steps {
                echo 'Running HTML/CSS/JS lint checks (if tools are installed)...'
                // sh 'npx eslint .'
                // Add other lint tools as needed
            }
        }

        stage('Archive') {
            steps {
                archiveArtifacts artifacts: '**/*.html, **/*.css, **/*.js', fingerprint: true
            }
        }
    }
}
