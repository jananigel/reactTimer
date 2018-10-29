# React environment with React 16 & Babel 7 & Webpack 4 [201810]

## [Install React]

1. create your project: mkdir reactApp(project name/folder name) && cd reactApp

2. create a package.json: npm init -y (use -y flag to telling npm that it should take all the defaults of package.json)

3. folder structure (create manually):
    >       /myReact
    >           /src
    >               /app
    >               -index.js
    >           /dist
    >               -index.html

4. install React: npm install --save-dev react react-dom (if you want to specify version than add '@' behind react -> react@version)

5. create git: git init

6. create gitignore: touch .gitignore

7. configure the file which on is not upload to git, open .gitignore and edit:
    >       # dependencies (symbol of # means comment out)
    >       /node_module
    >       # git
    >       .gitignore
    >       .git
    >       # system files
    >       .DS_Store
    >       Thumbs.db

8. the ends of this part, the folder structure will be below:
    >       /myReact
    >           /.git
    >           /src
    >               /app
    >               -index.js
    >           /dist
    >               -index.html
    >           /node_modules
    >           -.gitignore
    >           -package.json

## [Install Webpack]

1. npm install --save-dev webpack webpack-dev-server webpack-cli

2. set scripts tag in package.json:
    >       "script": {
    >           "start": "webpack-dev-server --config ./webpack.config.js --mode development", (impelement the command of npm run start and enter the url of http://localhost:8080 will show the app and auto refresh when files change)
    >           "build": "webpack --mode development"
    >       }

3. create the configure file of webpack:
    touch webpack.config.js

4. webpack config:
    >       module.exports = {
    >           entry: './src/app/index.js',
    >           output: {
    >               path: __dirname + '/dist',
    >               publicPath: '/',
    >               filename: 'bundle.js'
    >           },
    >           devServer: { contentBase: './dist' }
    >       }

## [Install Babel]

1. npm install --save-dev @babel/core @babel/preset-env
2. npm install --save-dev babel-loader
3. npm install --dave-dev @babel/preset-react
4. open and modify webpack.config.js:
    >       module.exports = {
    >           module: {
    >               rules: [
    >                   {
    >                       test: /\.(js|jsx)$/,
    >                       exclude: /node_modules/,
    >                       use: ['babel-loader']
    >                   }
    >               ]
    >           },
    >           resolve: {
    >               extensions: ['*', '.js', '.jsx']
    >           }
    >       }
5. create a configure file(.babelrc) for babel under root:
    touch .babelrc
6. open and edit .babelrc:
    >       {
    >           "presets": [
    >               "@babel/preset-env",
    >               "@babel/preset-react"
    >           ]
    >       }

## [Install css loader]

1. npm install --save-dev style-loader css-loader
2. configure in webpack.config.js:
    >       module: {
    >           {
    >               test: /\.css$/
    >               loader: 'style-loader!css-loader'
    >           }
    >       },
    >       resolve: {
    >           extensions: ['.css']
    >       }
3. import the css in your component(*.js, *.jsx):
    > import './styles.css'

*****
command line: npm run start
enjoy it!