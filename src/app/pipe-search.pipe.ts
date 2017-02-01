import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';
import { FirebaseListObservable } from 'angularfire2';

@Pipe({
  name: 'pipeSearch',
  pure: false
  })
  export class PipeSearchPipe implements PipeTransform {
    transform(input: Member[], selectedPosition){
          var output: Member[] = [];
          if (selectedPosition === "Pilot Cosmonaut") {
            for (var i = 0; i < input.length; i++) {
              if (input[i].position === selectedPosition) {
                output.push(input[i]);
              }
            }
            return output;
          } else if (selectedPosition === "Second Pilot") {
            for (var i = 0; i < input.length; i++) {
              if (input[i].position === selectedPosition) {
                output.push(input[i]);
              }
            }
            return output;
          } else if (selectedPosition === "Doctor Cosmonaut") {
            for (var i = 0; i < input.length; i++) {
              if (input[i].position === selectedPosition) {
                output.push(input[i]);
              }
            }
            return output;
          } else if (selectedPosition === "Spaceflight Participant") {
            for (var i = 0; i < input.length; i++) {
              if (input[i].position === selectedPosition) {
                output.push(input[i]);
              }
            }
            return output;
          } else {
            return input;
          }
        }
    }
