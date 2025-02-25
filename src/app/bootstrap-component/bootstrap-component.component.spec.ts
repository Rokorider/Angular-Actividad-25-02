import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapComponentComponent } from './bootstrap-component.component';

describe('BootstrapComponentComponent', () => {
  let component: BootstrapComponentComponent;
  let fixture: ComponentFixture<BootstrapComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BootstrapComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrapComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
