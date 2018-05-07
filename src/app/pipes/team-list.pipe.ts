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
@Pipe({name: 'teamListPipe'})
export class TeamListPipe implements PipeTransform {

  transform(teamsList: Array<string>): string {
    let retStr = teamsList[0];
    for (let i = 1; i < teamsList.length; i++) {
      retStr += ',' + teamsList[i];
    }

    return retStr;
  }
}
