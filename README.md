# Axie Infinity Sniper GUI #axieinfinity
[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/R5R56SOT1)



This project helps you collect data from axie.zone about the top 100 players, and match their most used axies against the marketplace in realtime, matches that are found are then stored in Firebase Firestore. This repo contains only the GUI to display the data. Please follow the bot setup instructions below, or visit the [bot's repo here](https://github.com/mdichtler/axie-infinity-sniper-bot). 

## Installation

### Bot Video Tutorial

[![IMAGE ALT TEXT HERE](https://i.imgur.com/baDtWpr.png)](https://youtu.be/LijzwzcuIKo)


### Instructions

1. Setup & run the bot, follow all optional steps for the GUI to work - [instructions here](https://github.com/mdichtler/axie-infinity-sniper-bot)

2. Clone this repo

3. Run command from project directory

```bash
cd web
```

4. Install dependancies

```node
npm install
```

5. Obtain Firebase Web App config by going to Firebase Dashboard, selecting your project (created during the bot setup), and clicking on "Add App". 

6. In ./src/helpers/firHelpers.js, add your firebase config on line 10.

7. Run the web app

```node
npm start
```

####  Example:

[![IMAGE ALT TEXT HERE](https://i.imgur.com/gz6usP4.png)](https://github.com/mdichtler/axie-infinity-sniper-gui)



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
