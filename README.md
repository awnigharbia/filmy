![LICENSE](https://img.shields.io/github/license/awnigharbia/filmy)
[![build](https://github.com/awnigharbia/filmy/actions/workflows/buildAndDeploy.yaml/badge.svg)](https://github.com/awnigharbia/filmy/actions/workflows/buildAndDeploy.yaml)

# Filmy

Small movie site to browse movies:

- Browse popular movies
- Browse movies by categories
- Search for a movie
- Display full movie details

Try the demo at
[https://awnigharbia.github.io/filmy/#/](https://awnigharbia.github.io/filmy/#/)

## Setup API KEY

First you need to register an account on
[themoviedb.org](https://www.themoviedb.org/).

After registration you can find your api key at
[https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api).

Next, create an `.env` file in the root directory of your project and add the
following lines:

```
VITE_API_KEY=<your_api_key>
VITE_API_URL=<your_api_url>
```

The default value of VITE_API_URL is
[https://api.themoviedb.org/3](https://api.themoviedb.org/3)

## Quick Setup

Install all the application's dependencies:

`npm install`

Next, you can start the application in a local environment with:

`npm start`

The browser should automatically open to `http://localhost:3000/filmy/` which
will display the application running.

Otherwise, you can build application into the `<rootDir>/build` directory with:

`npm run build`

After that you can serve the optimized web application build at
`http://localhost:5000/filmy/` by default locally with:

`npm run serve`

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request! :D

## License

[MIT][license] &copy; [Awni Zaher Gharbia][me]
