import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MainService } from './app-store/services/main.service';
import { Observable } from "rxjs/Observable";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
  title = 'app';
  public model : Observable<number>;

  constructor(private mainService: MainService) {
    this.model = this.mainService.GetCounterValue();
  }

  public increment(): void {
    this.mainService.Increment();
  }

  public incrementBy(value: number): void {
    this.mainService.IncrementBy(value);
  }
}

