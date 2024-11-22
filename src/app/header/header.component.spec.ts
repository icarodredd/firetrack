import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a heading with a text of "Firetrack"', () => {
    const headingElement: HTMLElement = fixture.debugElement.nativeElement;
    const h1 = headingElement.querySelector('h1')!;
    expect(h1.textContent).toEqual('Firetrack');
  });

  it('should display a paragraph with a text of "Maps"', () => {
    const headingElement: HTMLElement = fixture.debugElement.nativeElement;
    const pArray = headingElement.querySelectorAll('p')!;
    expect(pArray.forEach((el) => el.textContent === 'Maps'));
  });

  it('should display a paragraph with a text of "About"', () => {
    const headingElement: HTMLElement = fixture.debugElement.nativeElement;
    const pArray = headingElement.querySelectorAll('p')!;
    expect(pArray.forEach((el) => el.textContent === 'About'));
  });
});
