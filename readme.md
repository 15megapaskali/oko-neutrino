# Oko.press feed

Oko.press react feed with news from JSON.

## Installation

Clone this repo 
```bash
git clone https://github.com/15megapaskali/oko-neutrino.git
```

Open console in the project directory

```bash
npm install
sudo npm install -g json-server // sudo required because global (-g) installation
```

## Usage


Go to the 'JSON db' directory. 

```bash
cd 'JSON db'
json-server --watch db.json // You may need to run as administrator - add 'sudo json-server --watch db.json'
```

Open a new terminal (console) window in the project root directory.

```js
npm start
```
The page should open in your default web browser.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
