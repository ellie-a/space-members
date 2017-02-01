import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class MemberService {
   members: FirebaseListObservable<any[]>;


   constructor(private angularFire: AngularFire) {
     this.members = angularFire.database.list('members');
 }

   getMembers() {
     return this.members;
   }

   getMemberById(memberId: string){
   return this.angularFire.database.object('/members/' + memberId);
 }
 
 addMember(newMember: Member) {
  this.members.push(newMember);
}

  updateMember(localUpdateMember){
    var memberEntryInFirebase = this.getMemberById(localUpdateMember.$key);
    memberEntryInFirebase.update({name: localUpdateMember.name,
                                position: localUpdateMember.position,
                                mission: localUpdateMember.mission,
                                year: localUpdateMember.year,
                                details: localUpdateMember.details,
                                image: localUpdateMember.image,
                                })
  }

  hideAllEditComponents(){
    var instance = this;
    this.members.forEach(function(memberArray){
      memberArray.forEach(function(member){
        member.edit = false;
        instance.updateMember(member);
      })
    })
  }

  delete(memberToDelete) {
    this.getMemberById(memberToDelete.$key).remove();
  }
}
