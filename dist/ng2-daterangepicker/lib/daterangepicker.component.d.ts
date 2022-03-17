import { AfterViewInit, EventEmitter } from '@angular/core';
import { KeyValueDiffers, ElementRef, OnDestroy, DoCheck } from '@angular/core';
import { DaterangepickerConfig } from './config.service';
import 'bootstrap-daterangepicker';
import * as i0 from "@angular/core";
export declare class DaterangePickerComponent implements AfterViewInit, OnDestroy, DoCheck {
    private input;
    private config;
    private differs;
    private activeRange;
    private targetOptions;
    private _differ;
    datePicker: any;
    options: any;
    selected: EventEmitter<any>;
    cancelDaterangepicker: EventEmitter<any>;
    applyDaterangepicker: EventEmitter<any>;
    hideCalendarDaterangepicker: EventEmitter<any>;
    showCalendarDaterangepicker: EventEmitter<any>;
    hideDaterangepicker: EventEmitter<any>;
    showDaterangepicker: EventEmitter<any>;
    constructor(input: ElementRef, config: DaterangepickerConfig, differs: KeyValueDiffers);
    ngAfterViewInit(): void;
    render(): void;
    attachEvents(): void;
    private callback;
    destroyPicker(): void;
    ngOnDestroy(): void;
    ngDoCheck(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DaterangePickerComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DaterangePickerComponent, "[daterangepicker]", never, { "options": "options"; }, { "selected": "selected"; "cancelDaterangepicker": "cancelDaterangepicker"; "applyDaterangepicker": "applyDaterangepicker"; "hideCalendarDaterangepicker": "hideCalendarDaterangepicker"; "showCalendarDaterangepicker": "showCalendarDaterangepicker"; "hideDaterangepicker": "hideDaterangepicker"; "showDaterangepicker": "showDaterangepicker"; }, never>;
}
