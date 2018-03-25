# angular-labview-boilerplate
This project provides a starter template for a LabVIEW application with an Angular 5 front end. It's built to be deployed to a Raspberry Pi using the LabVIEW MakerHub LINX.

# Getting Started
## Run Angular Interface Locally
Follow these steps to 
1. Clone Repo
2. Install [NodeJS](https://nodejs.org/en/) and [VS Code](https://code.visualstudio.com/)
3. Open the Angular code folder in VS Code.
4. Install Angular `npm install -g @angular/cli`
5. Run `npm install`
6. Run `ng serve`
7. Navigate to [http://localhost:4200](http://localhost:4200)

## Build Interface
Once you have run the interfcae locally build it by issuing the command `ng build`
This will generate a **dist** folder.

## Deploy Interface to Raspberry Pi
To serve the angular interface on the Raspberry Pi follow these steps:
1. Connect to you Raspberry Pi via SSH (Make sure it has internet) and setup the pi as an [Access Point](https://www.raspberrypi.org/documentation/configuration/wireless/access-point.md) 
2. Install the APache Web server `sudo apt-get install apache2 -y`
2. Using [WinSCP](https://winscp.net/eng/download.php), log into the Raspberry Pi using the SCP protocol. 
Default details are **pi** for username and **raspberry** for password. Under advanced settings change the **Environment/SCP/Shell** Shell setting to **sudo su -**.
3. Naviagte to **/var/www/html/** folder and replace the contents of it with the contents of your **dist** folder
4. Go to the webpage by typing the ip address of your raspberry pi into your web browser.

## Build and Deploy LabVIEW Code
*NOTE: You will need LabVIEW 2014 to use the [MakerHub](https://www.labviewmakerhub.com/doku.php?id=learn:tutorials:libraries:linx:3-0) Linx drivers.*
1. Open the LabVIEW Project and connect to your Raspberry Pi
2. Right click on the build spec and select **Run as start-up**
3. Reboot the Rapsberry Pi.

## Test Application
If everything is running correctly open the Angular Interface in a web browser by going to the IP address of the device. Send a message using the *Echo* command. You will see that message displayed in the *Echo Return* box. If the LabVIEW code is communicating with the Angular front-end you will see the heart beat counter incrementing as well.

## Server IP
For the Angular Interface to communicate with the raspberry pi the server URL must be set to the IP address of the Raspberry Pi. This, by default, is **192.168.4.1** as this is what it gets set to in the Access Point tutorial. You can change the server URL inside the **labview.service.ts** file in the Angular Code.
