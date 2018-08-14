#npm i --save-dev babel-cli babel-preset-env(for compiling between diff ecma scripts)

#touch .babelrc (from powershell/cmd/git bash) - This is the configuration file

After babel install and configuration is done, we can use latest ecma script features now.

#npm i --save-dev babel-watch
With all the server changes, it do automatic compilation

After this add "dev": "babel-watch server.js" script in package.json (now can be run through "npm run dev").

Now we need to install our middleware i.e. Express
#npm i express --save

After this we will install mongoose library, which will help us to connect with mongodb
#npm i mongoose --save

Now we will install cors, in order to access the resource that are not present on same machine, like mongodb in different machine
#npm i cors --save
