import { Component } from '@angular/core';
import { NpcDto } from '../../../models/npc-dto.model';
import { NpcService } from '../../../services/npc-service';
import { VizualizarComponent } from '../vizualizar/vizualizar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consultar',
  standalone: true,
  imports: [FormsModule, VizualizarComponent],
  templateUrl: './consultar.component.html',
  styleUrl: './consultar.component.css'
})
export class ConsultarComponent {
  npcList?: NpcDto[];
  currentNpc: NpcDto = {};
  currentIndex = -1;
  name = '';

  constructor(private service: NpcService) {}

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.service.getAll().subscribe({
      next: (data) => {
        this.npcList = data;
        this.currentNpc = this.npcList[0];
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentNpc = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(npc: NpcDto, index: number): void {
    this.currentNpc = npc;
    this.currentIndex = index;
    this.service.get(this.currentNpc.id).subscribe({next: (data) => {
      this.currentNpc = data;
    }});
  }

  searchName(): void {
    this.currentNpc = {};
    this.currentIndex = -1;

    this.service.findByName(this.name).subscribe({
      next: (data) => {
        this.npcList = data;
      },
      error: (e) => console.error(e)
    });
  }


}
