pipeline{
	agent any
	tools{ nodejs "NodeJS"	}
	
	environment {
	    nexusurl='http://192.168.33.11:8081/repository/node-js-repo-local/'
	}
	
   stages{ 

         stage('checkout'){
              steps{
                  git branch:'main', url:'https://github.com/Coding4Deep/Nodejs-Sonar-Nexus.git'     
                }
            }

          stage('Install dependencies'){
               steps{
                   sh ' npm run clean'
                   sh 'npm install'
               }
          }
          stage('Jest test'){
               steps{
                   sh 'npx jest --coverage --coverageReporters=lcov  '  // OR npm test or npm test --coverage
               }
          }
          stage('NYC coverage'){
               steps{
                   sh 'npm run coverage'
               }
          }
          /*stage('SonarQube'){
                steps {
                withSonarQubeEnv('SonarQube') { 
                    sh 'npm run sonar'
                }
            }
          } */


	   stage('SonarQube'){
                steps {
                    sh 'npx sonar-scanner'
                }
            } 
          
          stage('build'){
               steps{
                   
                   sh 'npm pack'
               }
          }

          stage('Upload to Nexus') {
              steps {
                 script {
                   echo "Deploying to Nexus..."
                  
                   sh "npm publish --registry=${nexusurl}"
               }
            }
        }

}
}








