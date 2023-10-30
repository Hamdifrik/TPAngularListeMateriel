import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListmaterielComponent } from './listmateriel.component';

describe('MaterielComponent', () => {
  let fixture: ComponentFixture<ListmaterielComponent >;
  let component: ListmaterielComponent ;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListmaterielComponent ],
    });

    fixture = TestBed.createComponent(ListmaterielComponent );
    component = fixture.componentInstance;
  });

  it('should create the MaterielComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display the material name', () => {
   
    fixture.detectChanges();
    const element = fixture.nativeElement;
    expect(element.querySelector('h2').textContent).toContain('Scanner');
  });
});
