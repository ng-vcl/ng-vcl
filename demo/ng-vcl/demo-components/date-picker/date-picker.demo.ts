import { DatePickerComponent } from './date-picker.component';

export default {
  name: 'Date Picker',
  route: 'date-picker',
  category: 'Form Controls',
  tabs: {
    Demo: DatePickerComponent,
    'README.md': require("!raw-loader!../../../../src/ng-vcl/date-picker/README.md"),
    'demo.component.html': require("!raw-loader!./date-picker.component.html"),
    'demo.component.ts': require("!raw-loader!./date-picker.component.ts")
  }
};