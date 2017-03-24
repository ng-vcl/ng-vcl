import { MonthPickerComponent } from './month-picker.component';

export default {
  name: 'Month Picker',
  route: 'month-picker',
  category: 'Form Controls',
  tabs: {
    Demo: MonthPickerComponent,
    'demo.component.html': require("!raw-loader!./month-picker.component.html"),
    'demo.component.ts': require("!raw-loader!./month-picker.component.ts")
  }
};