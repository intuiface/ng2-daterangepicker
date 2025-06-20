import { NgModule } from '@angular/core';
//import { FormsModule }   from '@angular/forms';
import { DaterangePickerComponent } from './daterangepicker.component';
import { DaterangepickerConfig } from './config.service';
import * as i0 from "@angular/core";
export class Daterangepicker {
    static forRoot(config = {}) {
        return {
            ngModule: Daterangepicker,
            providers: [
                { provide: DaterangepickerConfig, useValue: config }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXJhbmdlcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nMi1kYXRlcmFuZ2VwaWNrZXIvc3JjL2xpYi9kYXRlcmFuZ2VwaWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELGlEQUFpRDtBQUNqRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN2RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFTekQsTUFBTSxPQUFPLGVBQWU7SUFFeEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsRUFBRTtRQUMxQixPQUFPO1lBQ0wsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFO2dCQUNULEVBQUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUM7YUFDbkQ7U0FDRixDQUFDO0lBQ0osQ0FBQzsrR0FUVSxlQUFlO2dIQUFmLGVBQWUsaUJBTFQsd0JBQXdCLGFBRTdCLHdCQUF3QjtnSEFHekIsZUFBZSxhQUpiLENBQUMscUJBQXFCLENBQUM7OzRGQUl6QixlQUFlO2tCQVAzQixRQUFRO21CQUFDO29CQUNOLHlCQUF5QjtvQkFDekIsWUFBWSxFQUFFLENBQUMsd0JBQXdCLENBQUM7b0JBQ3hDLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO29CQUNsQyxPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztpQkFFdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vL2ltcG9ydCB7IEZvcm1zTW9kdWxlIH0gICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IERhdGVyYW5nZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZXJhbmdlcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhdGVyYW5nZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vY29uZmlnLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIC8vaW1wb3J0czogW0Zvcm1zTW9kdWxlXSxcclxuICAgIGRlY2xhcmF0aW9uczogW0RhdGVyYW5nZVBpY2tlckNvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6IFtEYXRlcmFuZ2VwaWNrZXJDb25maWddLFxyXG4gICAgZXhwb3J0czogW0RhdGVyYW5nZVBpY2tlckNvbXBvbmVudF1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlcmFuZ2VwaWNrZXIge1xyXG5cclxuICAgIHN0YXRpYyBmb3JSb290KGNvbmZpZyA9IHt9KTogTW9kdWxlV2l0aFByb3ZpZGVyczxEYXRlcmFuZ2VwaWNrZXI+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBEYXRlcmFuZ2VwaWNrZXIsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtwcm92aWRlOiBEYXRlcmFuZ2VwaWNrZXJDb25maWcsIHVzZVZhbHVlOiBjb25maWd9XHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=