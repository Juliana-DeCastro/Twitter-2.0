import { Injectable, NotFoundException } from '@nestjs/common';
import { Twitt } from './twitt.entity';

@Injectable()
export class TwittsService {
  private Twitts: Twitt[] = [
    {
      id: '2',
      message: 'Hello world from Nest.js 🐯',
    },
  ];

  //Retorna la collección
  getTwitts(): Twitt[] {
    return this.Twitts;
  }
  //Recibe id de tipo string y usa find para buscar un elemento por su id
  getTwitt(id: string): Twitt {
    const Twitt = this.Twitts.find((item) => item.id === id);

    if (!Twitt) {
      throw new NotFoundException('Resource not found');
    }
    return Twitt;
  }

  //recibe un mensage de tipo string y crea un mensaje diferente
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createTwitt(message: string) {
    this.Twitts.push({
      id: (Math.floor(Math.random() * 2000) + 1).toString(),
      message,
    });
  }
  //Busca el Twitt por su id lo actualiza y lo retorna
  updateTwitt(id: string, message: any) {
    const Twitt: Twitt = this.getTwitt(id);
    Twitt.message = message;

    return Twitt;
  }

  //Busca el index del Twitt y lo elimina de la colleción
  removeTwitt(id: string) {
    const index = this.Twitts.findIndex((Twitt) => Twitt.id === id);
    if (index >= 0) {
      this.Twitts.splice(index, 1);
    }
  }
}
