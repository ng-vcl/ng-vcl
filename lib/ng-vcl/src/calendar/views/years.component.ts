import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, SimpleChanges, OnChanges, OnInit } from '@angular/core';
import { VCLDateAdapter, VCLDateRange } from '../../dateadapter/index';
import { VCLCalendarYears } from '../interfaces';

@Component({
  selector: 'vcl-calendar-view-years',
  templateUrl: 'years.component.html',
  exportAs: 'vclCalendarViewYear',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarViewYearsComponent<VCLDate> implements OnChanges, OnInit {

  constructor(
    private dateAdapter: VCLDateAdapter<VCLDate>,
  ) { }

  @Input()
  disabled = false;

  @Input()
  value?: VCLDate | VCLDate[] | VCLDateRange<VCLDate>;

  @Input()
  viewDate: VCLDate;

  @Output()
  valueChange = new EventEmitter<VCLDate>();

  @Output()
  viewDateChange = new EventEmitter<VCLDate>();

  calendarYears: VCLCalendarYears<VCLDate>;

  private updateCalendar() {
    let date = this.viewDate || this.dateAdapter.today();
    if (!this.dateAdapter.isDate(date)) {
      date = this.dateAdapter.today();
    }
    this.calendarYears = this.createCalendarYears(date);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value || changes.viewDate) {
      if (changes.value && changes.value.currentValue && (!this.viewDate)) {
        this.viewDate = this.dateAdapter.toDate(changes.value.currentValue);
      }
      this.updateCalendar();
    }
  }

  ngOnInit() {
    if (!this.calendarYears) {
      this.updateCalendar();
    }
  }

  onSelectYear(date: VCLDate) {
    if (this.disabled) {
      return;
    }
    this.value = date;
    this.valueChange.emit(this.value);
  }

  onGoToPrevYears() {
    this.viewDate = this.dateAdapter.addYears(this.calendarYears.date, -(this.calendarYears.years.length - 1 / 2));
    this.viewDateChange.emit(this.viewDate);
    this.updateCalendar();
  }

  onGoToNextYears() {
    this.viewDate = this.dateAdapter.addYears(this.calendarYears.date, (this.calendarYears.years.length - 1 / 2));
    this.viewDateChange.emit(this.viewDate);
    this.updateCalendar();
  }

  createCalendarYears(date: VCLDate): VCLCalendarYears<VCLDate> {
    const years = Array.from(Array(25).keys()).map(i => {
      const yearDate = this.dateAdapter.createDate(this.dateAdapter.getYear(date) + (i - 12), 0, 1);
      return {
        label: this.dateAdapter.format(yearDate, 'year'),
        date: yearDate,
        isCurrentYear: this.dateAdapter.isSameYear(this.dateAdapter.today(), yearDate),
      };
    });

    const yearStartLabel = this.dateAdapter.format(years[0].date, 'year');

    const yearEndLabel = this.dateAdapter.format(years[years.length - 1].date, 'year');

    return {
      date,
      years: years.map((_, index) => {
        return index % 5 === 0 ? years.slice(index, index + 5) : null;
      }),
      label: `${yearStartLabel} - ${yearEndLabel}`
    };
  }


}
