# BlazeMeter assignment
### by Erez Carmel
Based on [create-react-app](https://github.com/facebookincubator/create-react-app)

### Overview
A collapsable sidebar, showing jMeter tests history. List can be sorted by tests update date, and refreshed.

### Getting started
To run, clone repository:
```sh
git clone https://github.com/erezcarmel/blazemeter.git
```

install dependencies:
```sh
npm install
```

and run:
```sh
npm start
```

### Project structure
```
blazemeter/
  README.md
  node_modules/
  package.json
  .gitignore
  yarn.lock
  public/
    index.html
    sidebar.json
  src/
    components/
        Sidebar/
            index.js
            item.js
            style.css
    style.css
    App.js
    index.js
```

### What’s Inside?
[React](https://github.com/facebook/react) library for building the UI

[axios](https://github.com/mzabriskie/axios) for external data loading

[MomentJS](https://momentjs.com/) for dates and time formatting


### Assignment

Assignment instructions can be found in [instructions.md](/instructions/instructions.md)

Assignment expected result:

![Expected result](/instructions/sidebar.png)
