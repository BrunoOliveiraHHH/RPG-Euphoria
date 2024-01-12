import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { NpcDto } from '../../../models/npc-dto.model';
import { NpcService } from '../../../services/npc-service';

@Component({
  selector: 'app-alterar',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  templateUrl: './alterar.component.html',
  styleUrl: './alterar.component.css'
})
export class AlterarComponent {
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

  updateNpc(): void {
    const data = {
      nome: this.currentNpc.nome,
      idade: this.currentNpc.idade,
      raca: this.currentNpc.raca,
      classe: this.currentNpc.classe
    };

    this.message = '';

    this.service.update(data).subscribe({
      next: (res) => {
        console.log(res);
        this.message = res.message
          ? res.message
          : 'Alteração Realizada com sucesso';
      },
      error: (e) => console.error(e)
    });
    location.reload();
  }  

  deleteNpc(): void {
    this.service.delete(this.currentNpc.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/consultar']);
      },
      error: (e) => console.error(e)
    });
    location.reload();
  }
}
