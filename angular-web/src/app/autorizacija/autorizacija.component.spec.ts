import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizacijaComponent } from './autorizacija.component';

describe('AutorizacijaComponent', () => {
  let component: AutorizacijaComponent;
  let fixture: ComponentFixture<AutorizacijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutorizacijaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutorizacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
