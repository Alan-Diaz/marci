import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesMktComponent } from './services-mkt.component';

describe('ServicesMktComponent', () => {
  let component: ServicesMktComponent;
  let fixture: ComponentFixture<ServicesMktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesMktComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesMktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
