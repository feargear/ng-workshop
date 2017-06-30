# Instructions

Follow these instructions to get you started

## Install Node.js

```
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
```

*for windows users: https://nodejs.org/dist/v6.11.0/node-v6.11.0-x86.msi*

You should now have node installed, you can test this with

```
samu@samu-Precision-7510:~/work/ng-workshop$ node --version
v6.11.0
samu@samu-Precision-7510:~/work/ng-workshop$ npm --version
3.10.10
```

Install the Angular Command Line Interface (CLI). The -g stands for 'global' meaning that it will
install it globally on your machine instead of the current folder

```
npm install -g @angular/cli@1.1.3
```

You can omit the @version from the package name, then you will receive the latest version. For the
sake of this workshop we should all have the same version though.

You should now be able to use the angular cli with `ng`.

```
samu@samu-Precision-7510:~/work/ng-workshop$ ng --version
@angular/cli: 1.1.3
```

Now you are good to go, all you need now is a text editor, preferably a JavaScript focused text editor.
There are many good options out there, but personally I like [VS Code](https://code.visualstudio.com).
Other options could be [Atom](https://atom.io/) and [Brackets](http://brackets.io/). All of these are
free, but debatably the best tool for JavaScript development is [WebStorm](https://www.jetbrains.com/webstorm/), which is a commercial IDE that has
really powerful tools for JavaScript development. However, these free text editors will do the job just fine,
especially with extensions.

The projects in this repository are all baseline projects that we will dive into during our workshop, we will change them to work like they should.

You can run a project by navigating to its folder and running `npm install` and `ng serve`.

`npm install` installs the dependencies for the project from the package.json. The installed packages are ignored by git, so a freshly cloned repo has to be installed.

## Some good extensions for VS Code

These can be installed from command line or just by searching in VS Code

Relatively stable auto-import mainly for typescript, works similarly to other auto-imports
with CTRL + Space by default
```
code --install-extension steoates.autoimport
```

Angular 4 snippets, can be useful but not really necessary
```
code --install-extension johnpapa.angular2
```

You can also use the terminal straight from the VS Code application by going to View -> Integrated Terminal