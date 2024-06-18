1. Here are the steps to deploy the API to an VM:

AWS Linux:
```
sudo yum update -y
sudo yum install git npm -y
git clone https://github.com/Teodelas/prisma-cloud-demos.git
npm install express pm2 -g
sudo pm2 start ~/prisma-cloud-demos/demo-api/api.js
```

Ubuntu:
```
sudo apt install git npm
git clone https://github.com/Teodelas/prisma-cloud-demos.git
sudo npm install express pm2 -g
sudo pm2 start ~/prisma-cloud-demos/demo-api/api.js
```
2. Ensure 
3. Install Defender on VM following the steps in Prisma Cloud
4. Create a WAAS Host policy. Remember to configure the path as: '/*' instead of just '*'

