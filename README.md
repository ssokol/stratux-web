# stratux-web
Web server for the Stratux project

Install node.js on the Pi per:

http://joshondesign.com/2013/10/23/noderpi

Note: I skipped the apt-get upgrade as it replaced a bunch of stuff including the hostapd that is custom to the Stratux build.

Once you have a working node install, clone the project:

    git clone https://github.com/ssokol/stratux-web.git

Then install all the dependencies:

````
cd stratux-web
npm install
````

You'll need to edit the server.js file to point to the web folder on Stratux. I'm going to add an "Update" tab / page soon. There's a sample of the upload client-side code in the 'html' folder.

License: BSD 3 Clause
