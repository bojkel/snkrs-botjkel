<br />
<p align="center">
  <a href="https://github.com/bojkel/snkrs-botjkel">
    <img src="assets/img/snkrs.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">snkrs-botjkel</h3>

  <p align="center">
    SNKRS Europe Automated Bot
    <br />
    <a href="https://github.com/bojkel/snkrs-botjkel"><strong>Explore the code</strong></a>
    ·
    <a href="https://github.com/bojkel/snkrs-botjkel/issues">Report Bug</a>
    ·
    <a href="https://github.com/bojkel/snkrs-botjkel/issues">Request Feature</a>
  </p>


<!-- ABOUT THE PROJECT -->
## About The Project
A fully automated bot for purchasing sneakers on Nike's SNKRS Europe app.

### Built With

* [Node.js](https://nodejs.org/en/)
* [Puppeteer](https://github.com/puppeteer/puppeteer)
* [Node Cron](https://github.com/node-cron/node-cron)


<!-- GETTING STARTED -->
## Getting Started

To get a locally working version, follow these simple steps.

### Prerequisites

You must already have a valid [Nike](https://nike.com) account and credit card tied to it. 


* yarn
```sh
yarn upgrade --latest
```
* npm 
```sh
npm install npm@latest -g
```


### Installation
 
1. Clone the repo
```sh
git clone https://github.com/bojkel/snkrs-botjkel.git
```
2. Install NPM packages
```sh
yarn install
```
or
```sh
npm install
```

<!-- USAGE EXAMPLES -->
## Usage

1. You'll need to create a .env file and add the following variables.

```sh
EMAIL=yourNikeAccountEmail@example.com
PASSWORD=yourNikeAccountPassword
CVC=yourCreditCardCVC
```

2. In the bot.js file, edit the following lines.

<img src="assets/img/carbon.svg">

3. Run the script like you normally would

```sh
node bot.js
```

or by invoking the Cron Job (currently set to 09:00) 

```ch
node cron.js
```


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/bojkel/snkrs-botjkel/issues) for a list of proposed features (and known issues).


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.