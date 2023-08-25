import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {  DiagramComponent } from "@syncfusion/ej2-angular-diagrams";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'myangularproject';
  @ViewChild('diagram') diagramObj !: DiagramComponent;
  public style = { fill: '#6495ED'};
  public groupStyle = { fill: '#40E0D0'};
  public children: string[] = ['node1', 'node2', 'node3', 'connector1', 'connector2', 'connector3'];
  public nestedChild: string[] = ['group1', 'node4'];
  public ungroup(){
    this.diagramObj.unGroup();
  }

  public updateGroup(){
    this.diagramObj.nodes[2].offsetX = 500;
    this.diagramObj.nodes[2].offsetY = 400;
  }

  public addGroupNode(){
    this.diagramObj.addChildToGroup(this.diagramObj.getObject('group1'),'node3');
  }

  public addGroup(){
    let group = { id:'group1', children: ['node1', 'node2', 'node3', 'connector1'], style: { strokeColor: 'Orange', strokeWidth: 3}};
    this.diagramObj.add(group);
  }
}