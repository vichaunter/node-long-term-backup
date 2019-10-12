# node-long-term-backup
Auto backups in nodejs to mantain old copies of backups for long term storage.

## What it does?
This script is intended to have a origin folder as entry point (local folder), and:
* copy last x days to daily folder
* copy last x first week day to weekly folder
* copy last x first month day to monthly folder

This way you can store only for example last 7 days of backups, and in another folders several copies weekly and monthly with specific limit to have revert back guarantee and reduce storage required.

## How to use it?
Just clone it and run:
`node index.js`

## Cofiguration

