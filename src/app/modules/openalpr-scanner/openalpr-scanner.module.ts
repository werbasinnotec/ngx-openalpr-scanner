import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OpenALPRScanner } from './openalpr-scanner.component';

export type OpenALPRScanner = OpenALPRScanner;

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule 
    ],
    declarations: [ OpenALPRScanner ],
    exports: [ OpenALPRScanner ],
})

export class OpenALPRScannerModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: OpenALPRScannerModule
        };
    }
}
