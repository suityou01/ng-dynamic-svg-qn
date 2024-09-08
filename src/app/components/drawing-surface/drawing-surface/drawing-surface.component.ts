import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-drawing-surface',
  standalone: true,
  imports: [],
  templateUrl: './drawing-surface.component.html',
  styleUrl: './drawing-surface.component.css'
})
export class DrawingSurfaceComponent {
  @ViewChild('svgRef', { read: ViewContainerRef })
  svgRef!: ViewContainerRef;
  registry:any[] = [];
  registerDrawingElementType(drawingElementType:any){
    this.registry.push(drawingElementType);
  }
  drawElement(drawingElementName:string){
    const [ el ] = this.registry.filter(r => r.name = drawingElementName);
    const newComponentRef = this.svgRef.createComponent(el.elementType);
  }
}
