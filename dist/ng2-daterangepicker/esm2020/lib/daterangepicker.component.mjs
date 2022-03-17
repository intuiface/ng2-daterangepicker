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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXJhbmdlcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nMi1kYXRlcmFuZ2VwaWNrZXIvc3JjL2xpYi9kYXRlcmFuZ2VwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXlCLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBa0IsZUFBZSxFQUFFLFVBQVUsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFakcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFekQsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFNUIsT0FBTywyQkFBMkIsQ0FBQzs7O0FBS25DLE1BQU0sT0FBTyx3QkFBd0I7SUFvQmpDLFlBQ1ksS0FBaUIsRUFDakIsTUFBNkIsRUFDN0IsT0FBd0I7UUFGeEIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixXQUFNLEdBQU4sTUFBTSxDQUF1QjtRQUM3QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQXBCNUIsa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFDeEIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUkxQiw2QkFBNkI7UUFDcEIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUUzQix5QkFBeUI7UUFDZixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QiwwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzNDLHlCQUFvQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUMsZ0NBQTJCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqRCxnQ0FBMkIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pELHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDekMsd0JBQW1C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QUM7SUFDekIsQ0FBQztJQUVELFNBQVM7UUFDTCxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEUsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUxRSxJQUFHLGNBQWMsSUFBSSxlQUFlLEVBQUU7WUFDbEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLElBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3BEO1NBQ0o7SUFDTCxDQUFDOztxSEExSFEsd0JBQXdCO3lHQUF4Qix3QkFBd0I7MkZBQXhCLHdCQUF3QjtrQkFIcEMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsbUJBQW1CO2lCQUNoQzttS0FVWSxPQUFPO3NCQUFmLEtBQUs7Z0JBR0ksUUFBUTtzQkFBakIsTUFBTTtnQkFDRyxxQkFBcUI7c0JBQTlCLE1BQU07Z0JBQ0csb0JBQW9CO3NCQUE3QixNQUFNO2dCQUNHLDJCQUEyQjtzQkFBcEMsTUFBTTtnQkFDRywyQkFBMkI7c0JBQXBDLE1BQU07Z0JBQ0csbUJBQW1CO3NCQUE1QixNQUFNO2dCQUNHLG1CQUFtQjtzQkFBNUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2V5VmFsdWVEaWZmZXIsIEtleVZhbHVlRGlmZmVycywgRWxlbWVudFJlZiwgT25EZXN0cm95LCBEb0NoZWNrICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRGF0ZXJhbmdlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9jb25maWcuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCAnYm9vdHN0cmFwLWRhdGVyYW5nZXBpY2tlcic7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2RhdGVyYW5nZXBpY2tlcl0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZXJhbmdlUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBEb0NoZWNrIHtcclxuXHJcbiAgICBwcml2YXRlIGFjdGl2ZVJhbmdlOiBhbnk7XHJcbiAgICBwcml2YXRlIHRhcmdldE9wdGlvbnM6IGFueSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBfZGlmZmVyOiBhbnkgPSB7fTtcclxuXHJcbiAgICBwdWJsaWMgZGF0ZVBpY2tlcjogYW55O1xyXG5cclxuICAgIC8vIGRhdGVyYW5nZXBpY2tlciBwcm9wZXJ0aWVzXHJcbiAgICBASW5wdXQoKSBvcHRpb25zOiBhbnkgPSB7fTtcclxuXHJcbiAgICAvLyBkYXRlcmFuZ2VwaWNrZXIgZXZlbnRzXHJcbiAgICBAT3V0cHV0KCkgc2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgY2FuY2VsRGF0ZXJhbmdlcGlja2VyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIGFwcGx5RGF0ZXJhbmdlcGlja2VyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIGhpZGVDYWxlbmRhckRhdGVyYW5nZXBpY2tlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBzaG93Q2FsZW5kYXJEYXRlcmFuZ2VwaWNrZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgaGlkZURhdGVyYW5nZXBpY2tlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBzaG93RGF0ZXJhbmdlcGlja2VyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgaW5wdXQ6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBjb25maWc6IERhdGVyYW5nZXBpY2tlckNvbmZpZyxcclxuICAgICAgICBwcml2YXRlIGRpZmZlcnM6IEtleVZhbHVlRGlmZmVyc1xyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5fZGlmZmVyWydvcHRpb25zJ10gPSBkaWZmZXJzLmZpbmQodGhpcy5vcHRpb25zKS5jcmVhdGUoKTtcclxuICAgICAgICB0aGlzLl9kaWZmZXJbJ3NldHRpbmdzJ10gPSBkaWZmZXJzLmZpbmQodGhpcy5jb25maWcuc2V0dGluZ3MpLmNyZWF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZy5lbWJlZENTUygpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXRPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jb25maWcuc2V0dGluZ3MsIHRoaXMub3B0aW9ucyk7XHJcblxyXG4gICAgICAgIC8vIGNhc3QgJCB0byBhbnkgdG8gYXZvaWQganF1ZXJ5IHR5cGUgY2hlY2tpbmdcclxuICAgICAgICAoPGFueT4kKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCkpLmRhdGVyYW5nZXBpY2tlcih0aGlzLnRhcmdldE9wdGlvbnMsIHRoaXMuY2FsbGJhY2suYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0ZVBpY2tlciA9ICg8YW55PiQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KSkuZGF0YSgnZGF0ZXJhbmdlcGlja2VyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoRXZlbnRzKCkge1xyXG4gICAgICAgICQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KS5vbignY2FuY2VsLmRhdGVyYW5nZXBpY2tlcicsXHJcbiAgICAgICAgICAgIChlOmFueSwgcGlja2VyOmFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50ID0geyBldmVudDogZSwgcGlja2VyOiBwaWNrZXIgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuY2VsRGF0ZXJhbmdlcGlja2VyLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgJCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpLm9uKCdhcHBseS5kYXRlcmFuZ2VwaWNrZXInLFxyXG4gICAgICAgICAgICAoZTphbnksIHBpY2tlcjphbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBldmVudCA9IHsgZXZlbnQ6IGUsIHBpY2tlcjogcGlja2VyIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5RGF0ZXJhbmdlcGlja2VyLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgJCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpLm9uKCdoaWRlQ2FsZW5kYXIuZGF0ZXJhbmdlcGlja2VyJyxcclxuICAgICAgICAgICAgKGU6YW55LCBwaWNrZXI6YW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXZlbnQgPSB7IGV2ZW50OiBlLCBwaWNrZXI6IHBpY2tlciB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlQ2FsZW5kYXJEYXRlcmFuZ2VwaWNrZXIuZW1pdChldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAkKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCkub24oJ3Nob3dDYWxlbmRhci5kYXRlcmFuZ2VwaWNrZXInLFxyXG4gICAgICAgICAgICAoZTphbnksIHBpY2tlcjphbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBldmVudCA9IHsgZXZlbnQ6IGUsIHBpY2tlcjogcGlja2VyIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDYWxlbmRhckRhdGVyYW5nZXBpY2tlci5lbWl0KGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgICQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KS5vbignaGlkZS5kYXRlcmFuZ2VwaWNrZXInLFxyXG4gICAgICAgICAgICAoZTphbnksIHBpY2tlcjphbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBldmVudCA9IHsgZXZlbnQ6IGUsIHBpY2tlcjogcGlja2VyIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVEYXRlcmFuZ2VwaWNrZXIuZW1pdChldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAkKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCkub24oJ3Nob3cuZGF0ZXJhbmdlcGlja2VyJyxcclxuICAgICAgICAgICAgKGU6YW55LCBwaWNrZXI6YW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXZlbnQgPSB7IGV2ZW50OiBlLCBwaWNrZXI6IHBpY2tlciB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RGF0ZXJhbmdlcGlja2VyLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhbGxiYWNrKHN0YXJ0PzogYW55LCBlbmQ/OiBhbnksIGxhYmVsPzogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVSYW5nZSA9IHtcclxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LFxyXG4gICAgICAgICAgICBlbmQ6IGVuZCxcclxuICAgICAgICAgICAgbGFiZWw6IGxhYmVsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdGVkLmVtaXQodGhpcy5hY3RpdmVSYW5nZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveVBpY2tlcigpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAoPGFueT4kKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCkpLmRhdGEoJ2RhdGVyYW5nZXBpY2tlcicpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmRlc3Ryb3lQaWNrZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0RvQ2hlY2soKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnNDaGFuZ2VkID0gdGhpcy5fZGlmZmVyWydvcHRpb25zJ10uZGlmZih0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgIGxldCBzZXR0aW5nc0NoYW5nZWQgPSB0aGlzLl9kaWZmZXJbJ3NldHRpbmdzJ10uZGlmZih0aGlzLmNvbmZpZy5zZXR0aW5ncyk7XHJcblxyXG4gICAgICAgIGlmKG9wdGlvbnNDaGFuZ2VkIHx8IHNldHRpbmdzQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmF0dGFjaEV2ZW50cygpO1xyXG4gICAgICAgICAgICBpZih0aGlzLmFjdGl2ZVJhbmdlICYmIHRoaXMuZGF0ZVBpY2tlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlUGlja2VyLnNldFN0YXJ0RGF0ZSh0aGlzLmFjdGl2ZVJhbmdlLnN0YXJ0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVBpY2tlci5zZXRFbmREYXRlKHRoaXMuYWN0aXZlUmFuZ2UuZW5kKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=