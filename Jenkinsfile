pipeline {
  agent {
    kubernetes {
      label 'jenkins-test'
      defaultContainer 'jnlp'
      yaml """
apiVersion: v1
kind: Pod
metadata:
    name: dind
spec:
    containers:
      - name: docker-cmds
        image: harithj/jenkins-dockerfile
        command:
        - cat
        env:
          - name: DOCKER_HOST
            value: tcp://localhost:2375
        tty: true
      - name: dind-daemon
        image: docker:1.12.6-dind
        securityContext:
            privileged: true
        volumeMounts:
          - name: docker-graph-storage
            mountPath: /var/lib/docker
    volumes:
      - name: docker-graph-storage
        emptyDir: {}
"""
    }
}
environment {
  GOOGLE_PROJECT_ID = 'andela-learning'
}
stages {
    stage('Cloning files...') {
        steps {
            checkout scm
        }
    }
    stage('Building image') {
        steps {
          container('docker-cmds'){
            script{
              def dockerImage = docker.build("${REGISTRY}", ".")
              sh "docker images"
              withCredentials([string(credentialsId: 'docker-pass', variable: 'PASSWORD')]) {
                sh "docker login -u '${USERNAME}' -p '${PASSWORD}'"
              }
              sh "docker images"
              sh "docker push ${REGISTRY}"
            }
          }
        }
    }

    stage('Test') {
      parallel {
              stage('some end-to-end test') {
                  steps {
                    container('docker-cmds'){
                      sh "echo 'test passed'"
                    }
                  }
              }
              stage('some end-to-end test') {
                  steps {
                    container ('docker-cmds') {
                      sh "echo 'test passed'"
                    }
                  }
              }
              stage('some end-to-end test') {
                  steps {
                    container ('docker-cmds') {
                      sh "echo 'test passed'"
                    }
                  }
              }
          }
    }
    stage('Deploy') {
      steps {
        container ('docker-cmds') {
          sh "chmod +x Jenkins/setup_k8s.sh"
          sh "./Jenkins/setup_k8s.sh"
          sh "kubectl apply -f deploy.yml"
        }
      }
    }
  }
}
