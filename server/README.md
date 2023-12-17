# VouchX Server

This server is a simple service that provides the ability to authorize users onm twitter via OAuth and then vouch for approved wallet addresses.

## Deployment

The deployment is setup for continuous deployment so if you make any updates or changes they will automatically publish.

## Environment

The .env file contains some settings to be configured for the service to work properly.

| Name | Description |
| --- | --- |
| CONSUMER_KEY | Twitter Dev Account CONSUMER KEY |
| CONSUMER_SECRET | Twitter Dev Account CONSUMER SECRET |
| CALLBACK_URL | Url that is going to receive the call back from X OAuth |
| WALLET | Path to the wallet.json file |
| VOUCH_CONTRACT | Contract associated with the vouch dao |

## DevSetup

```sh
yarn
```