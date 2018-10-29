# React environment with React 16 & Babel 7 & Webpack 4 [201810]

## [Install React]

***
1. create your project: mkdir reactApp(project name/folder name) && cd reactApp

2. create a package.json: npm init -y (use -y flag to telling npm that it should take all the defaults of package.json)

3. folder structure (create manually):
>    /myReact
>        /src
>            /app
>                -index.js
>        /dist
>            -index.html

4. install React: npm install --save-dev react react-dom (if you want to specify version than add '@' behind react -> react@version)

5. create git: git init

6. create gitignore: touch .gitignore

7. configure the file which on is not upload to git, open .gitignore and edit:
    >   # dependencies (symbol of # means comment out)
    > /node_module
    >   # git
    > .gitignore
    > .git
    >   # system files
    > .DS_Store
    > Thumbs.db

8. the ends of this part, the folder structure will be below:
>   /myReact
>       /.git
>       /src
>           /app
>               -index.js
>       /dist
>           -index.html
>       /node_modules
>       -.gitignore
>       -package.json