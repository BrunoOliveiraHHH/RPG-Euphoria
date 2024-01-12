import { Component, Input } from '@angular/core';
import { NpcDto } from '../../../models/npc-dto.model';
import { NpcService } from '../../../services/npc-service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlterarComponent } from '../alterar/alterar.component';

@Component({
  selector: 'app-vizualizar',
  standalone: true,
  imports: [FormsModule, RouterOutlet, AlterarComponent],
  templateUrl: './vizualizar.component.html',
  styleUrl: './vizualizar.component.css'
})
export class VizualizarComponent {
  @Input() viewMode = false;

  @Input() currentNpc: NpcDto = {
    nome: '',
    idade: '',
    raca: '',
    classe: ''
  };

  message = '';

  constructor(
    private service: NpcService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getNpc(this.route.snapshot.params['id']);
    }
  }

  getNpc(id: string): void {
    this.service.get(id).subscribe({
      next: (data) => {
        this.currentNpc = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
