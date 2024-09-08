import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DrawingSurfaceComponent } from "./components/drawing-surface/drawing-surface/drawing-surface.component";
import { RectangleComponent } from './components/rectangle/rectangle/rectangle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DrawingSurfaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild(DrawingSurfaceComponent) drawingSurface!: DrawingSurfaceComponent;
  title = 'dynamic-svg-components';

  ngAfterViewInit() {
    this.drawingSurface.registerDrawingElementType({
      name: "RECTANGLE_COMPONENT",
      elementType: RectangleComponent
    });
    this.drawingSurface.drawElement("RECTANGLE_COMPONENT");
  }
}
