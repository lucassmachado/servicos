import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {

    static criouNovoCurso = new EventEmitter<string>();
    emitirCursoCriado = new EventEmitter<string>();

    private cursos = ['Angular 2', 'Java', 'Phonegap'];

    constructor() {
        console.log('CursosService');
    }

    getCursos() {
        return this.cursos;
    }

    addCurso(curso: string) {
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }

}