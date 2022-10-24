import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/interface/mensaje.interface';
import { ChatService } from 'src/app/providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  elemento: any;

  constructor(public chatService: ChatService) {
    this.chatService.cargarMensaje().subscribe(() => {
      setTimeout(()=> {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      },20);
    });
  }

  mensaje: string = '';
  ngOnInit(): void {
    this.elemento = document.getElementById('app-mensajes');
  }

  enviarMensaje() {
    if (this.mensaje.length === 0) {
      return;
    }
    this.chatService
      .agregarMensaje(this.mensaje)
      .then(() => (this.mensaje = ''))
      .catch((err) => console.error('Error al enviar', err));
  }
}