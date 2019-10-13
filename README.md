# node-long-term-backup
Auto backups in nodejs to mantain old copies of backups for long term storage.

## What it does?
This script is intended to have a origin folder as entry point (local folder), and:
* copy last x days to daily folder
* copy last x first week day to weekly folder
* copy last x first month day to monthly folder

This way you can store only for example last 7 days of backups, and in another folders several copies weekly and monthly with specific limit to have revert back guarantee and reduce storage required.

###### Note
Have in mind that the base folder should be prefilled with your own backups, for example with rsync from a remote machine.

## How to use it?
Just clone it and run:
`yarn start`
`npm start`
`node ./src/index.js`

## Cofiguration
Comments inside config.js