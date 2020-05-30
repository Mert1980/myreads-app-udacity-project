
    window.reactComponents = {};

    window.vueComponents = {};

  
      import React from "react";

      import ReactDOM from "react-dom";


      import ReactWrapper from '../node_modules/better-docs/lib/react-wrapper.js';

      window.React = React;

      window.ReactDOM = ReactDOM;

      window.ReactWrapper = ReactWrapper;

    
    import './styles/reset.css';

    import './styles/iframe.css';

  import Component0 from '../src/components/Book.js';
reactComponents['Book'] = Component0;

import Component1 from '../src/App.js';
reactComponents['BooksApp'] = Component1;

import Component2 from '../src/components/BookShelf.js';
reactComponents['BookShelf'] = Component2;

import Component3 from '../src/components/Search.js';
reactComponents['Search'] = Component3;