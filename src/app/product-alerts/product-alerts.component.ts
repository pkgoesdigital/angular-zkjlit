import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

// indicates following class is a component
// provides metatdata about component - selector, templates, and styles
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
// which handles functionality for the component
export class ProductAlertsComponent implements OnInit {
  // indicates property value comes from component's parent - product-list component
  @Input() product;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  

}