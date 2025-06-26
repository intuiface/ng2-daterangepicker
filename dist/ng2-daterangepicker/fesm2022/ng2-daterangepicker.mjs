import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Output, Input, Directive, NgModule } from '@angular/core';
import $$1 from 'jquery';
import 'bootstrap-daterangepicker';

class DaterangepickerConfig {
    constructor() {
        this.skipCSS = false;
        this.addedCSS = false;
        this.settings = {};
    }
    embedCSS() {
        // avoid adding duplicated styles
        if (this.addedCSS) {
            return;
        }
        if (this.skipCSS === false) {
            $$1('head').append('<style>' +
                ".daterangepicker.single .calendar,.daterangepicker.single .ranges,.ranges{float:none}.daterangepicker{position:absolute;color:#111;background:#fff;border-radius:4px;width:278px;padding:4px;margin-top:1px;top:100px;left:20px}.daterangepicker:after,.daterangepicker:before{position:absolute;display:inline-block;content:''}.daterangepicker:before{top:-7px;border-right:7px solid transparent;border-left:7px solid transparent;border-bottom:7px solid #ccc}.daterangepicker:after{top:-6px;border-right:6px solid transparent;border-bottom:6px solid #fff;border-left:6px solid transparent}.daterangepicker.opensleft:before{right:9px}.daterangepicker.opensleft:after{right:10px}.daterangepicker.openscenter:after,.daterangepicker.openscenter:before{left:0;right:0;width:0;margin-left:auto;margin-right:auto}.daterangepicker.opensright:before{left:9px}.daterangepicker.opensright:after{left:10px}.daterangepicker.dropup{margin-top:-5px}.daterangepicker.dropup:before{top:initial;bottom:-7px;border-bottom:initial;border-top:7px solid #ccc}.daterangepicker.dropup:after{top:initial;bottom:-6px;border-bottom:initial;border-top:6px solid #fff}.daterangepicker.dropdown-menu{max-width:none;z-index:3001}.daterangepicker.show-calendar .calendar{display:block}.daterangepicker .calendar{display:none;max-width:270px;margin:4px}.daterangepicker .calendar.single .calendar-table{border:none}.daterangepicker .calendar td,.daterangepicker .calendar th{white-space:nowrap;text-align:center;min-width:32px}.daterangepicker .calendar-table{border:1px solid #fff;padding:4px;border-radius:4px;background:#fff}.daterangepicker table{width:100%;margin:0}.daterangepicker td,.daterangepicker th{text-align:center;width:20px;height:20px;border-radius:4px;border:1px solid transparent;white-space:nowrap;cursor:pointer}.daterangepicker td.available:hover,.daterangepicker th.available:hover{background-color:#eee;border-color:transparent;color:inherit}.daterangepicker td.week,.daterangepicker th.week{font-size:80%;color:#ccc}.daterangepicker td.off,.daterangepicker td.off.end-date,.daterangepicker td.off.in-range,.daterangepicker td.off.start-date{background-color:#fff;border-color:transparent;color:#999}.daterangepicker td.in-range{background-color:#ebf4f8;border-color:transparent;color:#000;border-radius:0}.daterangepicker td.start-date{border-radius:4px 0 0 4px}.daterangepicker td.end-date{border-radius:0 4px 4px 0}.daterangepicker td.start-date.end-date{border-radius:4px}.daterangepicker td.active,.daterangepicker td.active:hover{background-color:#357ebd;border-color:transparent;color:#fff}.daterangepicker th.month{width:auto}.daterangepicker option.disabled,.daterangepicker td.disabled{color:#999;cursor:not-allowed;text-decoration:line-through}.daterangepicker select.monthselect,.daterangepicker select.yearselect{font-size:12px;padding:1px;height:auto;margin:0;cursor:default}.daterangepicker select.monthselect{margin-right:2%;width:56%}.daterangepicker select.yearselect{width:40%}.daterangepicker select.ampmselect,.daterangepicker select.hourselect,.daterangepicker select.minuteselect,.daterangepicker select.secondselect{width:50px;margin-bottom:0}.daterangepicker .input-mini{border:1px solid #ccc;border-radius:4px;color:#555;height:30px;line-height:30px;display:block;vertical-align:middle;margin:0 0 5px;padding:0 6px 0 28px;width:100%}.daterangepicker .input-mini.active{border:1px solid #08c;border-radius:4px}.daterangepicker .daterangepicker_input{position:relative}.daterangepicker .daterangepicker_input i{position:absolute;left:8px;top:8px}.daterangepicker.rtl .input-mini{padding-right:28px;padding-left:6px}.daterangepicker.rtl .daterangepicker_input i{left:auto;right:8px}.daterangepicker .calendar-time{text-align:center;margin:5px auto;line-height:30px;position:relative;padding-left:28px}.daterangepicker .calendar-time select.disabled{color:#ccc;cursor:not-allowed}.ranges{font-size:11px;margin:4px;text-align:left}.ranges ul{list-style:none;margin:0 auto;padding:0;width:100%}.ranges li{font-size:13px;background:#f5f5f5;border:1px solid #f5f5f5;border-radius:4px;color:#08c;padding:3px 12px;margin-bottom:8px;cursor:pointer}.ranges li.active,.ranges li:hover{background:#08c;border:1px solid #08c;color:#fff}@media (min-width:564px){.daterangepicker.ltr .calendar.right .calendar-table,.daterangepicker.rtl .calendar.left .calendar-table{border-left:none;border-top-left-radius:0;border-bottom-left-radius:0}.daterangepicker.ltr .calendar.left .calendar-table,.daterangepicker.rtl .calendar.right .calendar-table{border-right:none;border-top-right-radius:0;border-bottom-right-radius:0}.daterangepicker{width:auto}.daterangepicker .ranges ul{width:160px}.daterangepicker.single .ranges ul{width:100%}.daterangepicker.single .calendar.left{clear:none}.daterangepicker.single.ltr .calendar,.daterangepicker.single.ltr .ranges{float:left}.daterangepicker.single.rtl .calendar,.daterangepicker.single.rtl .ranges{float:right}.daterangepicker.ltr{direction:ltr;text-align:left}.daterangepicker.ltr .calendar.left{clear:left;margin-right:0}.daterangepicker.ltr .calendar.right{margin-left:0}.daterangepicker.ltr .calendar.left .calendar-table,.daterangepicker.ltr .left .daterangepicker_input{padding-right:12px}.daterangepicker.ltr .calendar,.daterangepicker.ltr .ranges{float:left}.daterangepicker.rtl{direction:rtl;text-align:right}.daterangepicker.rtl .calendar.left{clear:right;margin-left:0}.daterangepicker.rtl .calendar.right{margin-right:0}.daterangepicker.rtl .calendar.left .calendar-table,.daterangepicker.rtl .left .daterangepicker_input{padding-left:12px}.daterangepicker.rtl .calendar,.daterangepicker.rtl .ranges{text-align:right;float:right}}@media (min-width:730px){.daterangepicker .ranges{width:auto}.daterangepicker.ltr .ranges{float:left}.daterangepicker.rtl .ranges{float:right}.daterangepicker .calendar.left{clear:none!important}}"
                + '</style>');
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: DaterangepickerConfig, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: DaterangepickerConfig, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: DaterangepickerConfig, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class DaterangePickerComponent {
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
        const inputElement = $(this.input.nativeElement);
        inputElement.daterangepicker(this.targetOptions, this.callback.bind(this));
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: DaterangePickerComponent, deps: [{ token: i0.ElementRef }, { token: DaterangepickerConfig }, { token: i0.KeyValueDiffers }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.14", type: DaterangePickerComponent, isStandalone: false, selector: "[daterangepicker]", inputs: { options: "options" }, outputs: { selected: "selected", cancelDaterangepicker: "cancelDaterangepicker", applyDaterangepicker: "applyDaterangepicker", hideCalendarDaterangepicker: "hideCalendarDaterangepicker", showCalendarDaterangepicker: "showCalendarDaterangepicker", hideDaterangepicker: "hideDaterangepicker", showDaterangepicker: "showDaterangepicker" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: DaterangePickerComponent, decorators: [{
            type: Directive,
            args: [{
                    selector: '[daterangepicker]',
                    standalone: false
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: DaterangepickerConfig }, { type: i0.KeyValueDiffers }], propDecorators: { options: [{
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

class Daterangepicker {
    static forRoot(config) {
        return {
            ngModule: Daterangepicker,
            providers: [
                {
                    provide: DaterangepickerConfig,
                    useValue: { ...new DaterangepickerConfig(), ...config }
                }
            ]
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: Daterangepicker, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.14", ngImport: i0, type: Daterangepicker, declarations: [DaterangePickerComponent], exports: [DaterangePickerComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: Daterangepicker, providers: [DaterangepickerConfig] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: Daterangepicker, decorators: [{
            type: NgModule,
            args: [{
                    //imports: [FormsModule],
                    declarations: [DaterangePickerComponent],
                    providers: [DaterangepickerConfig],
                    exports: [DaterangePickerComponent]
                }]
        }] });

/*
 * Public API Surface of ng2-daterangepicker
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DaterangePickerComponent, Daterangepicker, DaterangepickerConfig };
//# sourceMappingURL=ng2-daterangepicker.mjs.map
