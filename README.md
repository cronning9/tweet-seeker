# TrendSeeker

This is going to be an interface that allows users to find trending topics in their region,
run a google search to find related items, and then tweet them, all in one fluid cycle.

### Automation

`npm run start:windows` is set up to run a Powershell script that sets your environment 
variables and then runs the app in monitor (ie, Nodemon) mode. The script is 
`.gitignore`d for now to hide environment variables, but it should look rougly like this:

    $env:CLIENT_KEY="xxxxxxxxxxxxxxxxxxxxxxxx";
    $env:CLIENT_SECRET="xxxxxxxxxxxxxxxxxxxxxxxxx";
  
    Write-Host "Starting process";
  
    npm run monitor
