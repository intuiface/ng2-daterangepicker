import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { KeyValueDiffers, ElementRef } from '@angular/core';
import { DaterangepickerConfig } from './config.service';
import $ from "jquery";
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
        $(this.input.nativeElement).daterangepicker(this.targetOptions, this.callback.bind(this));
        this.datePicker = $(this.input.nativeElement).data('daterangepicker');
    }
    attachEvents() {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: DaterangePickerComponent, deps: [{ token: i0.ElementRef }, { token: i1.DaterangepickerConfig }, { token: i0.KeyValueDiffers }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: DaterangePickerComponent, selector: "[daterangepicker]", inputs: { options: "options" }, outputs: { selected: "selected", cancelDaterangepicker: "cancelDaterangepicker", applyDaterangepicker: "applyDaterangepicker", hideCalendarDaterangepicker: "hideCalendarDaterangepicker", showCalendarDaterangepicker: "showCalendarDaterangepicker", hideDaterangepicker: "hideDaterangepicker", showDaterangepicker: "showDaterangepicker" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: DaterangePickerComponent, decorators: [{
            type: Directive,
            args: [{
                    selector: '[daterangepicker]',
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i1.DaterangepickerConfig }, { type: i0.KeyValueDiffers }], propDecorators: { options: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXJhbmdlcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nMi1kYXRlcmFuZ2VwaWNrZXIvc3JjL2xpYi9kYXRlcmFuZ2VwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUV6RCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTywyQkFBMkIsQ0FBQzs7O0FBTW5DLE1BQU0sT0FBTyx3QkFBd0I7SUFvQmpDLFlBQ1ksS0FBaUIsRUFDakIsTUFBNkIsRUFDN0IsT0FBd0I7UUFGeEIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixXQUFNLEdBQU4sTUFBTSxDQUF1QjtRQUM3QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQXBCNUIsa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFDeEIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUkxQiw2QkFBNkI7UUFDcEIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUUzQix5QkFBeUI7UUFDZixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QiwwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzNDLHlCQUFvQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUMsZ0NBQTJCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqRCxnQ0FBMkIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pELHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDekMsd0JBQW1CLEdBQUcs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cHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLZXlWYWx1ZURpZmZlcnMsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgRG9DaGVjayAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZXJhbmdlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9jb25maWcuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC1kYXRlcmFuZ2VwaWNrZXInO1xyXG5cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbZGF0ZXJhbmdlcGlja2VyXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlcmFuZ2VQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIERvQ2hlY2sge1xyXG5cclxuICAgIHByaXZhdGUgYWN0aXZlUmFuZ2U6IGFueTtcclxuICAgIHByaXZhdGUgdGFyZ2V0T3B0aW9uczogYW55ID0ge307XHJcbiAgICBwcml2YXRlIF9kaWZmZXI6IGFueSA9IHt9O1xyXG5cclxuICAgIHB1YmxpYyBkYXRlUGlja2VyOiBhbnk7XHJcblxyXG4gICAgLy8gZGF0ZXJhbmdlcGlja2VyIHByb3BlcnRpZXNcclxuICAgIEBJbnB1dCgpIG9wdGlvbnM6IGFueSA9IHt9O1xyXG5cclxuICAgIC8vIGRhdGVyYW5nZXBpY2tlciBldmVudHNcclxuICAgIEBPdXRwdXQoKSBzZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBjYW5jZWxEYXRlcmFuZ2VwaWNrZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgYXBwbHlEYXRlcmFuZ2VwaWNrZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgaGlkZUNhbGVuZGFyRGF0ZXJhbmdlcGlja2VyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIHNob3dDYWxlbmRhckRhdGVyYW5nZXBpY2tlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBoaWRlRGF0ZXJhbmdlcGlja2VyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIHNob3dEYXRlcmFuZ2VwaWNrZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBpbnB1dDogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIGNvbmZpZzogRGF0ZXJhbmdlcGlja2VyQ29uZmlnLFxyXG4gICAgICAgIHByaXZhdGUgZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLl9kaWZmZXJbJ29wdGlvbnMnXSA9IGRpZmZlcnMuZmluZCh0aGlzLm9wdGlvbnMpLmNyZWF0ZSgpO1xyXG4gICAgICAgIHRoaXMuX2RpZmZlclsnc2V0dGluZ3MnXSA9IGRpZmZlcnMuZmluZCh0aGlzLmNvbmZpZy5zZXR0aW5ncykuY3JlYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHRoaXMuY29uZmlnLmVtYmVkQ1NTKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmF0dGFjaEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLnRhcmdldE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvbmZpZy5zZXR0aW5ncywgdGhpcy5vcHRpb25zKTtcclxuXHJcbiAgICAgICAgLy8gY2FzdCAkIHRvIGFueSB0byBhdm9pZCBqcXVlcnkgdHlwZSBjaGVja2luZ1xyXG4gICAgICAgICg8YW55PiQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KSkuZGF0ZXJhbmdlcGlja2VyKHRoaXMudGFyZ2V0T3B0aW9ucywgdGhpcy5jYWxsYmFjay5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmRhdGVQaWNrZXIgPSAkKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCkuZGF0YSgnZGF0ZXJhbmdlcGlja2VyJyk7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjaEV2ZW50cygpIHtcclxuICAgICAgICAkKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCkub24oJ2NhbmNlbC5kYXRlcmFuZ2VwaWNrZXInLFxyXG4gICAgICAgICAgICAoZTphbnksIHBpY2tlcjphbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBldmVudCA9IHsgZXZlbnQ6IGUsIHBpY2tlcjogcGlja2VyIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbERhdGVyYW5nZXBpY2tlci5lbWl0KGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgICQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KS5vbignYXBwbHkuZGF0ZXJhbmdlcGlja2VyJyxcclxuICAgICAgICAgICAgKGU6YW55LCBwaWNrZXI6YW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXZlbnQgPSB7IGV2ZW50OiBlLCBwaWNrZXI6IHBpY2tlciB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseURhdGVyYW5nZXBpY2tlci5lbWl0KGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgICQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KS5vbignaGlkZUNhbGVuZGFyLmRhdGVyYW5nZXBpY2tlcicsXHJcbiAgICAgICAgICAgIChlOmFueSwgcGlja2VyOmFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50ID0geyBldmVudDogZSwgcGlja2VyOiBwaWNrZXIgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZUNhbGVuZGFyRGF0ZXJhbmdlcGlja2VyLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgJCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpLm9uKCdzaG93Q2FsZW5kYXIuZGF0ZXJhbmdlcGlja2VyJyxcclxuICAgICAgICAgICAgKGU6YW55LCBwaWNrZXI6YW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXZlbnQgPSB7IGV2ZW50OiBlLCBwaWNrZXI6IHBpY2tlciB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q2FsZW5kYXJEYXRlcmFuZ2VwaWNrZXIuZW1pdChldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAkKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCkub24oJ2hpZGUuZGF0ZXJhbmdlcGlja2VyJyxcclxuICAgICAgICAgICAgKGU6YW55LCBwaWNrZXI6YW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXZlbnQgPSB7IGV2ZW50OiBlLCBwaWNrZXI6IHBpY2tlciB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlRGF0ZXJhbmdlcGlja2VyLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgJCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpLm9uKCdzaG93LmRhdGVyYW5nZXBpY2tlcicsXHJcbiAgICAgICAgICAgIChlOmFueSwgcGlja2VyOmFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50ID0geyBldmVudDogZSwgcGlja2VyOiBwaWNrZXIgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0RhdGVyYW5nZXBpY2tlci5lbWl0KGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxsYmFjayhzdGFydD86IGFueSwgZW5kPzogYW55LCBsYWJlbD86IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlUmFuZ2UgPSB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydCxcclxuICAgICAgICAgICAgZW5kOiBlbmQsXHJcbiAgICAgICAgICAgIGxhYmVsOiBsYWJlbFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5lbWl0KHRoaXMuYWN0aXZlUmFuZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3lQaWNrZXIoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgKDxhbnk+JCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpKS5kYXRhKCdkYXRlcmFuZ2VwaWNrZXInKS5yZW1vdmUoKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95UGlja2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdEb0NoZWNrKCkge1xyXG4gICAgICAgIGxldCBvcHRpb25zQ2hhbmdlZCA9IHRoaXMuX2RpZmZlclsnb3B0aW9ucyddLmRpZmYodGhpcy5vcHRpb25zKTtcclxuICAgICAgICBsZXQgc2V0dGluZ3NDaGFuZ2VkID0gdGhpcy5fZGlmZmVyWydzZXR0aW5ncyddLmRpZmYodGhpcy5jb25maWcuc2V0dGluZ3MpO1xyXG5cclxuICAgICAgICBpZihvcHRpb25zQ2hhbmdlZCB8fCBzZXR0aW5nc0NoYW5nZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5hdHRhY2hFdmVudHMoKTtcclxuICAgICAgICAgICAgaWYodGhpcy5hY3RpdmVSYW5nZSAmJiB0aGlzLmRhdGVQaWNrZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVBpY2tlci5zZXRTdGFydERhdGUodGhpcy5hY3RpdmVSYW5nZS5zdGFydCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVQaWNrZXIuc2V0RW5kRGF0ZSh0aGlzLmFjdGl2ZVJhbmdlLmVuZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19