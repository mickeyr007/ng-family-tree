import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Family } from '../models/family.model';

@Component({
  selector: 'ft-tree',
  template: `
    <div class="tree">
      <ul>
        <li>
          <div>
            <span  *ngFor="let node of family.nodes" (click)="_leafSelected(node)"
                   class="{{node.gender}}"
                   [ngClass]="node.relationship ? node.relationship + '-leaf' : ''"
                   class="node">{{node.name}}</span>
          </div>
          <ul>
            <li *ngFor="let child of family.children">
            <ft-leaf (onLeafSelected)="_leafSelected($event)" [child]="child"></ft-leaf>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./ng-family-tree.component.scss'],
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class NgFamilyTreeComponent implements OnInit {

  @Input() family: Family;
  @Output() onLeafSelected: EventEmitter<Family> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  _leafSelected(_leaf) {
    this.onLeafSelected.emit(_leaf);
  }

}
