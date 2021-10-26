import { TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ZXingScannerModule } from './modules/zxing-scanner/zxing-scanner.module';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserModule,
                FormsModule,
                ZXingScannerModule.forRoot()
            ],
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    }));

    it('should create the app', waitForAsync(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should render zxing-scanner tag', waitForAsync(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.test-class')).toBeTruthy();
    }));
});
