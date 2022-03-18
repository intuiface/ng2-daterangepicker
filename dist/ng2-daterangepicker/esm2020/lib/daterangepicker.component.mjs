import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { KeyValueDiffers, ElementRef } from '@angular/core';
import { DaterangepickerConfig } from './config.service';
import * as $ from "jquery";
import 'bootstrap-daterangepicker';
import * as i0 from "@angular/core";
import * as i1 from "./config.service";
export class DaterangePickerComponent {
    constructor(input, config, differs) {
        this.input = input;
        this.config = config;
        this.differs = differs;
        this.targetOptions = {};
        this._differ = {};
        // daterangepicker properties
        this.options = {};
        // daterangepicker events
        this.selected = new EventEmitter();
        this.cancelDaterangepicker = new EventEmitter();
        this.applyDaterangepicker = new EventEmitter();
        this.hideCalendarDaterangepicker = new EventEmitter();
        this.showCalendarDaterangepicker = new EventEmitter();
        this.hideDaterangepicker = new EventEmitter();
        this.showDaterangepicker = new EventEmitter();
        this._differ['options'] = differs.find(this.options).create();
        this._differ['settings'] = differs.find(this.config.settings).create();
    }
    ngAfterViewInit() {
        this.config.embedCSS();
        this.render();
        this.attachEvents();
    }
    render() {
        this.targetOptions = Object.assign({}, this.config.settings, this.options);
        // cast $ to any to avoid jquery type checking
        if ($) {
            $(this.input.nativeElement).daterangepicker(this.targetOptions, this.callback.bind(this));
            this.datePicker = $(this.input.nativeElement).data('daterangepicker');
        }
    }
    attachEvents() {
        if ($) {
            $(this.input.nativeElement).on('cancel.daterangepicker', (e, picker) => {
                let event = { event: e, picker: picker };
                this.cancelDaterangepicker.emit(event);
            });
            $(this.input.nativeElement).on('apply.daterangepicker', (e, picker) => {
                let event = { event: e, picker: picker };
                this.applyDaterangepicker.emit(event);
            });
            $(this.input.nativeElement).on('hideCalendar.daterangepicker', (e, picker) => {
                let event = { event: e, picker: picker };
                this.hideCalendarDaterangepicker.emit(event);
            });
            $(this.input.nativeElement).on('showCalendar.daterangepicker', (e, picker) => {
                let event = { event: e, picker: picker };
                this.showCalendarDaterangepicker.emit(event);
            });
            $(this.input.nativeElement).on('hide.daterangepicker', (e, picker) => {
                let event = { event: e, picker: picker };
                this.hideDaterangepicker.emit(event);
            });
            $(this.input.nativeElement).on('show.daterangepicker', (e, picker) => {
                let event = { event: e, picker: picker };
                this.showDaterangepicker.emit(event);
            });
        }
    }
    callback(start, end, label) {
        this.activeRange = {
            start: start,
            end: end,
            label: label
        };
        this.selected.emit(this.activeRange);
    }
    destroyPicker() {
        try {
            $(this.input.nativeElement).data('daterangepicker').remove();
        }
        catch (e) {
            console.log(e.message);
        }
    }
    ngOnDestroy() {
        this.destroyPicker();
    }
    ngDoCheck() {
        let optionsChanged = this._differ['options'].diff(this.options);
        let settingsChanged = this._differ['settings'].diff(this.config.settings);
        if (optionsChanged || settingsChanged) {
            this.render();
            this.attachEvents();
            if (this.activeRange && this.datePicker) {
                this.datePicker.setStartDate(this.activeRange.start);
                this.datePicker.setEndDate(this.activeRange.end);
            }
        }
    }
}
DaterangePickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.6", ngImport: i0, type: DaterangePickerComponent, deps: [{ token: i0.ElementRef }, { token: i1.DaterangepickerConfig }, { token: i0.KeyValueDiffers }], target: i0.ɵɵFactoryTarget.Directive });
DaterangePickerComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.2.6", type: DaterangePickerComponent, selector: "[daterangepicker]", inputs: { options: "options" }, outputs: { selected: "selected", cancelDaterangepicker: "cancelDaterangepicker", applyDaterangepicker: "applyDaterangepicker", hideCalendarDaterangepicker: "hideCalendarDaterangepicker", showCalendarDaterangepicker: "showCalendarDaterangepicker", hideDaterangepicker: "hideDaterangepicker", showDaterangepicker: "showDaterangepicker" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.6", ngImport: i0, type: DaterangePickerComponent, decorators: [{
            type: Directive,
            args: [{
                    selector: '[daterangepicker]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.DaterangepickerConfig }, { type: i0.KeyValueDiffers }]; }, propDecorators: { options: [{
                type: Input
            }], selected: [{
                type: Output
            }], cancelDaterangepicker: [{
                type: Output
            }], applyDaterangepicker: [{
                type: Output
            }], hideCalendarDaterangepicker: [{
                type: Output
            }], showCalendarDaterangepicker: [{
                type: Output
            }], hideDaterangepicker: [{
                type: Output
            }], showDaterangepicker: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXJhbmdlcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nMi1kYXRlcmFuZ2VwaWNrZXIvc3JjL2xpYi9kYXRlcmFuZ2VwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXlCLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBa0IsZUFBZSxFQUFFLFVBQVUsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFakcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFekQsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFNUIsT0FBTywyQkFBMkIsQ0FBQzs7O0FBS25DLE1BQU0sT0FBTyx3QkFBd0I7SUFvQmpDLFlBQ1ksS0FBaUIsRUFDakIsTUFBNkIsRUFDN0IsT0FBd0I7UUFGeEIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixXQUFNLEdBQU4sTUFBTSxDQUF1QjtRQUM3QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQXBCNUIsa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFDeEIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUkxQiw2QkFBNkI7UUFDcEIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUUzQix5QkFBeUI7UUFDZixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QiwwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzNDLHlCQUFvQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUMsZ0NBQTJCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqRCxnQ0FBMkIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pELHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDekMsd0JBQW1C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RGlyZWN0aXZlLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLZXlWYWx1ZURpZmZlciwgS2V5VmFsdWVEaWZmZXJzLCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIERvQ2hlY2sgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBEYXRlcmFuZ2VwaWNrZXJDb25maWcgfSBmcm9tICcuL2NvbmZpZy5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCAqIGFzICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICdib290c3RyYXAtZGF0ZXJhbmdlcGlja2VyJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbZGF0ZXJhbmdlcGlja2VyXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlcmFuZ2VQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIERvQ2hlY2sge1xyXG5cclxuICAgIHByaXZhdGUgYWN0aXZlUmFuZ2U6IGFueTtcclxuICAgIHByaXZhdGUgdGFyZ2V0T3B0aW9uczogYW55ID0ge307XHJcbiAgICBwcml2YXRlIF9kaWZmZXI6IGFueSA9IHt9O1xyXG5cclxuICAgIHB1YmxpYyBkYXRlUGlja2VyOiBhbnk7XHJcblxyXG4gICAgLy8gZGF0ZXJhbmdlcGlja2VyIHByb3BlcnRpZXNcclxuICAgIEBJbnB1dCgpIG9wdGlvbnM6IGFueSA9IHt9O1xyXG5cclxuICAgIC8vIGRhdGVyYW5nZXBpY2tlciBldmVudHNcclxuICAgIEBPdXRwdXQoKSBzZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBjYW5jZWxEYXRlcmFuZ2VwaWNrZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgYXBwbHlEYXRlcmFuZ2VwaWNrZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgaGlkZUNhbGVuZGFyRGF0ZXJhbmdlcGlja2VyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIHNob3dDYWxlbmRhckRhdGVyYW5nZXBpY2tlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBoaWRlRGF0ZXJhbmdlcGlja2VyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIHNob3dEYXRlcmFuZ2VwaWNrZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBpbnB1dDogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIGNvbmZpZzogRGF0ZXJhbmdlcGlja2VyQ29uZmlnLFxyXG4gICAgICAgIHByaXZhdGUgZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLl9kaWZmZXJbJ29wdGlvbnMnXSA9IGRpZmZlcnMuZmluZCh0aGlzLm9wdGlvbnMpLmNyZWF0ZSgpO1xyXG4gICAgICAgIHRoaXMuX2RpZmZlclsnc2V0dGluZ3MnXSA9IGRpZmZlcnMuZmluZCh0aGlzLmNvbmZpZy5zZXR0aW5ncykuY3JlYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHRoaXMuY29uZmlnLmVtYmVkQ1NTKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmF0dGFjaEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLnRhcmdldE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvbmZpZy5zZXR0aW5ncywgdGhpcy5vcHRpb25zKTtcclxuXHJcbiAgICAgICAgLy8gY2FzdCAkIHRvIGFueSB0byBhdm9pZCBqcXVlcnkgdHlwZSBjaGVja2luZ1xyXG4gICAgICAgIGlmICgkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgKDxhbnk+JCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpKS5kYXRlcmFuZ2VwaWNrZXIodGhpcy50YXJnZXRPcHRpb25zLCB0aGlzLmNhbGxiYWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGVQaWNrZXIgPSAoPGFueT4kKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCkpLmRhdGEoJ2RhdGVyYW5nZXBpY2tlcicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2hFdmVudHMoKSB7XHJcbiAgICAgICAgaWYgKCQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAkKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCkub24oJ2NhbmNlbC5kYXRlcmFuZ2VwaWNrZXInLFxyXG4gICAgICAgICAgICAgICAgKGU6YW55LCBwaWNrZXI6YW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGV2ZW50ID0geyBldmVudDogZSwgcGlja2VyOiBwaWNrZXIgfTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbERhdGVyYW5nZXBpY2tlci5lbWl0KGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KS5vbignYXBwbHkuZGF0ZXJhbmdlcGlja2VyJyxcclxuICAgICAgICAgICAgICAgIChlOmFueSwgcGlja2VyOmFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBldmVudCA9IHsgZXZlbnQ6IGUsIHBpY2tlcjogcGlja2VyIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseURhdGVyYW5nZXBpY2tlci5lbWl0KGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KS5vbignaGlkZUNhbGVuZGFyLmRhdGVyYW5nZXBpY2tlcicsXHJcbiAgICAgICAgICAgICAgICAoZTphbnksIHBpY2tlcjphbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZXZlbnQgPSB7IGV2ZW50OiBlLCBwaWNrZXI6IHBpY2tlciB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZUNhbGVuZGFyRGF0ZXJhbmdlcGlja2VyLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgJCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpLm9uKCdzaG93Q2FsZW5kYXIuZGF0ZXJhbmdlcGlja2VyJyxcclxuICAgICAgICAgICAgICAgIChlOmFueSwgcGlja2VyOmFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBldmVudCA9IHsgZXZlbnQ6IGUsIHBpY2tlcjogcGlja2VyIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q2FsZW5kYXJEYXRlcmFuZ2VwaWNrZXIuZW1pdChldmVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAkKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCkub24oJ2hpZGUuZGF0ZXJhbmdlcGlja2VyJyxcclxuICAgICAgICAgICAgICAgIChlOmFueSwgcGlja2VyOmFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBldmVudCA9IHsgZXZlbnQ6IGUsIHBpY2tlcjogcGlja2VyIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlRGF0ZXJhbmdlcGlja2VyLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgJCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpLm9uKCdzaG93LmRhdGVyYW5nZXBpY2tlcicsXHJcbiAgICAgICAgICAgICAgICAoZTphbnksIHBpY2tlcjphbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZXZlbnQgPSB7IGV2ZW50OiBlLCBwaWNrZXI6IHBpY2tlciB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0RhdGVyYW5nZXBpY2tlci5lbWl0KGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxsYmFjayhzdGFydD86IGFueSwgZW5kPzogYW55LCBsYWJlbD86IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlUmFuZ2UgPSB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydCxcclxuICAgICAgICAgICAgZW5kOiBlbmQsXHJcbiAgICAgICAgICAgIGxhYmVsOiBsYWJlbFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5lbWl0KHRoaXMuYWN0aXZlUmFuZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3lQaWNrZXIoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgKDxhbnk+JCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpKS5kYXRhKCdkYXRlcmFuZ2VwaWNrZXInKS5yZW1vdmUoKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95UGlja2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdEb0NoZWNrKCkge1xyXG4gICAgICAgIGxldCBvcHRpb25zQ2hhbmdlZCA9IHRoaXMuX2RpZmZlclsnb3B0aW9ucyddLmRpZmYodGhpcy5vcHRpb25zKTtcclxuICAgICAgICBsZXQgc2V0dGluZ3NDaGFuZ2VkID0gdGhpcy5fZGlmZmVyWydzZXR0aW5ncyddLmRpZmYodGhpcy5jb25maWcuc2V0dGluZ3MpO1xyXG5cclxuICAgICAgICBpZihvcHRpb25zQ2hhbmdlZCB8fCBzZXR0aW5nc0NoYW5nZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5hdHRhY2hFdmVudHMoKTtcclxuICAgICAgICAgICAgaWYodGhpcy5hY3RpdmVSYW5nZSAmJiB0aGlzLmRhdGVQaWNrZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVBpY2tlci5zZXRTdGFydERhdGUodGhpcy5hY3RpdmVSYW5nZS5zdGFydCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVQaWNrZXIuc2V0RW5kRGF0ZSh0aGlzLmFjdGl2ZVJhbmdlLmVuZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19