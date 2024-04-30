Here are the steps to deploy the API to an VM:

AWS Linux:
```
sudo yum update -y
sudo yum install git npm -y
git clone https://github.com/Teodelas/prisma-cloud-demos.git
sudo npm install express pm2 -g
sudo pm2 start ~/prisma-cloud-demos/demo-api/api.js
```

Ubuntu:
```
sudo apt install git npm
git clone https://github.com/Teodelas/prisma-cloud-demos.git
sudo npm install express pm2 -g
sudo pm2 start ~/prisma-cloud-demos/demo-api/api.js

```
