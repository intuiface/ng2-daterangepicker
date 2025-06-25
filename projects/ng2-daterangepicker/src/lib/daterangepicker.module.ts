import { ModuleWithProviders, NgModule } from '@angular/core';
//import { FormsModule }   from '@angular/forms';
import { DaterangePickerComponent } from './daterangepicker.component';
import { DaterangepickerConfig } from './config.service';

@NgModule({
    //imports: [FormsModule],
    declarations: [DaterangePickerComponent],
    providers: [DaterangepickerConfig],
    exports: [DaterangePickerComponent]

})
export class Daterangepicker {

    static forRoot(config: Partial<DaterangepickerConfig>): ModuleWithProviders<Daterangepicker> {
    return {
      ngModule: Daterangepicker,
      providers: [
        {
          provide: DaterangepickerConfig,
          useValue: { ...new DaterangepickerConfig(), ...config }}
      ]
    };
  }

}
