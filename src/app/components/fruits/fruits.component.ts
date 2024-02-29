import { Component, OnInit } from '@angular/core';
import { FruitsService } from 'src/app/service/fruits.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent implements OnInit {
  fruitsData: any[] = []; 

  constructor(private fruitsService: FruitsService) { }

  ngOnInit(): void {
    this.fruitsService.fruitsData$.subscribe(data => {
      this.fruitsData = data; 
    });

    
    this.fruitsService.getAllFruits();
  }
}
