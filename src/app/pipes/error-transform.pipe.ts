import { Pipe, PipeTransform } from '@angular/core';
/*
 * Will replace the ${%} placeholder string with the supplied property
 * Will return the .message property if it exists, otherwise the error as a string
 */
@Pipe({ name: 'messageTransform' })
export class MessageTransformPipe implements PipeTransform {
  transform(error: any, property: string): string {
    let eMessage = error as string;
    if (error.hasOwnProperty('message')) {
      eMessage = error.message;
    }
    if (eMessage) {
      return eMessage.replace('${%}', property);
    } else {
      return '';
    }
  }
}
