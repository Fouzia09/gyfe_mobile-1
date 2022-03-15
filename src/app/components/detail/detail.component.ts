import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  @Input() page!: string;
  //Cette variable va contenir les informations du restaurant ou de l'Hôtel
  @Input() data!: any;

  constructor() { }

  ngOnInit() {}

}
