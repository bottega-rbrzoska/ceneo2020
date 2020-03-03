import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NotificationService } from './shared/notification.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  describe('isolated tests', () => {
    let component: AppComponent;
    let notificationServiceSpy
    beforeEach(() => {
      notificationServiceSpy = jasmine.createSpyObj('NotificationService', {
        pushNotification() { /**/ }
      });
      component = new AppComponent(notificationServiceSpy)
    })

    it('should have initial title set', () => {
      expect(component.title).toBe('ceneo-app')
    })

    it('should call pushNotification on ngOnInit', () => {
      component.ngOnInit();

      expect(notificationServiceSpy.pushNotification).toHaveBeenCalledWith({message: 'test', title: 'test'})
    })
  })

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        AppComponent
      ],
      providers: [NotificationService]
    }).compileComponents();
  }));

  fit('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ceneo-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ceneo-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('ceneo-app app is running!');
  });
});
