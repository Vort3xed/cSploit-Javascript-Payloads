# cSploit-Javascript-Payloads

Files that you can select in cSploit and deploy into victim's websites

## How to use
The popular penetration testing framework cSploit has a feature that allows you to inject Javascript code into a website. This repository contains some Javascript files that you can use to inject into the victim's browser.

## Things to note:
- The Javascript files in this repository are not malicious. They are just for testing purposes.
- In the cSploit window where you paste your code, make sure you paste the code within the `<script></script>` tags.
- cSploit has issues with opening files. You will probably have to copy the code from the javascript file and paste it in the window that cSploit provides.
- These payloads do not make outbound connections. These payloads just let you mess with a victims browser.
- Use at your own risk. I am not liable for any damage caused by these payloads.

## Suggested Usage:
- Install the Termux app for android and `git clone` this repository
- `cat` the javascript file you want to use and copy the code
- Open cSploit, select a victim, click on `MITM`, select on `Inject Javascript`, select the `custom code` option, and paste the code into the window.

## Payloads:
- MakeTextBig.js: convert all p tags to h1 tags
- ShowVictimThemselves: request to ask the victim for camera access and once they accept, show them their own camera feed
- OpenTabs.js: doesn't work
 
Created by Agneya Tharun