import { NgModule } from '@angular/core';
//import { FormsModule }   from '@angular/forms';
import { DaterangePickerComponent } from './daterangepicker.component';
import { DaterangepickerConfig } from './config.service';
import * as i0 from "@angular/core";
export class Daterangepicker {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: Daterangepicker, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: Daterangepicker, declarations: [DaterangePickerComponent], exports: [DaterangePickerComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: Daterangepicker, providers: [DaterangepickerConfig] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: Daterangepicker, decorators: [{
            type: NgModule,
            args: [{
                    //imports: [FormsModule],
                    declarations: [DaterangePickerComponent],
                    providers: [DaterangepickerConfig],
                    exports: [DaterangePickerComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXJhbmdlcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nMi1kYXRlcmFuZ2VwaWNrZXIvc3JjL2xpYi9kYXRlcmFuZ2VwaWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELGlEQUFpRDtBQUNqRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN2RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFTekQsTUFBTSxPQUFPLGVBQWU7SUFFeEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFzQztRQUNyRCxPQUFPO1lBQ0wsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxxQkFBcUI7b0JBQzlCLFFBQVEsRUFBRSxFQUFFLEdBQUcsSUFBSSxxQkFBcUIsRUFBRSxFQUFFLEdBQUcsTUFBTSxFQUFFO2lCQUFDO2FBQzNEO1NBQ0YsQ0FBQztJQUNKLENBQUM7K0dBWFUsZUFBZTtnSEFBZixlQUFlLGlCQUxULHdCQUF3QixhQUU3Qix3QkFBd0I7Z0hBR3pCLGVBQWUsYUFKYixDQUFDLHFCQUFxQixDQUFDOzs0RkFJekIsZUFBZTtrQkFQM0IsUUFBUTttQkFBQztvQkFDTix5QkFBeUI7b0JBQ3pCLFlBQVksRUFBRSxDQUFDLHdCQUF3QixDQUFDO29CQUN4QyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztvQkFDbEMsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUM7aUJBRXRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy9pbXBvcnQgeyBGb3Jtc01vZHVsZSB9ICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBEYXRlcmFuZ2VQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGVyYW5nZXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXRlcmFuZ2VwaWNrZXJDb25maWcgfSBmcm9tICcuL2NvbmZpZy5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICAvL2ltcG9ydHM6IFtGb3Jtc01vZHVsZV0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtEYXRlcmFuZ2VQaWNrZXJDb21wb25lbnRdLFxyXG4gICAgcHJvdmlkZXJzOiBbRGF0ZXJhbmdlcGlja2VyQ29uZmlnXSxcclxuICAgIGV4cG9ydHM6IFtEYXRlcmFuZ2VQaWNrZXJDb21wb25lbnRdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZXJhbmdlcGlja2VyIHtcclxuXHJcbiAgICBzdGF0aWMgZm9yUm9vdChjb25maWc6IFBhcnRpYWw8RGF0ZXJhbmdlcGlja2VyQ29uZmlnPik6IE1vZHVsZVdpdGhQcm92aWRlcnM8RGF0ZXJhbmdlcGlja2VyPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRGF0ZXJhbmdlcGlja2VyLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBEYXRlcmFuZ2VwaWNrZXJDb25maWcsXHJcbiAgICAgICAgICB1c2VWYWx1ZTogeyAuLi5uZXcgRGF0ZXJhbmdlcGlja2VyQ29uZmlnKCksIC4uLmNvbmZpZyB9fVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbn1cclxuIl19