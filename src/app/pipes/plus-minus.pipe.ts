import { Pipe, PipeTransform } from '@angular/core';
/*
 * Display a list of teams
 * Takes an array of strings
 * Usage:
 *   teams | teamListPipe
 * Example:
 *   {{ ['a', 'b', 'c'] | teamListPipe }}
 *   formats to: a,b,c
*/
@Pipe({name: 'plusMinusPipe'})
export class PlusMinusPipe implements PipeTransform {

  transform(plusMinus: string): string {
    return (+plusMinus > 0) ? '+' + plusMinus : plusMinus;
  }
}
