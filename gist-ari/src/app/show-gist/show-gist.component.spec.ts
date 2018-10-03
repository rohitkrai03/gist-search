import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGistComponent } from './show-gist.component';

describe('ShowGistComponent', () => {
  let component: ShowGistComponent;
  let fixture: ComponentFixture<ShowGistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowGistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
