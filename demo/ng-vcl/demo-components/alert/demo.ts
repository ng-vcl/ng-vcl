import { AlertDemoComponent } from './demo.component';

export default {
  name: 'Alert',
  route: 'alert',
  category: 'Layer',
  tabs: {
    Demo: AlertDemoComponent,
    'README.md': {
      type: 'md',
      content: require("raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../src/ng-vcl/alert/README.md")
    },
    'demo.component.html': {
      type: 'pre',
      content: require("!highlight-loader?raw=true&lang=html!./demo.component.html")
    },
    'demo.component.ts': {
      type: 'pre',
      content: require("!highlight-loader?raw=true&lang=ts!./demo.component.ts")
    }
  }
};