import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { EditMemberComponent } from './edit-member/edit-member.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  members: FirebaseListObservable<any[]>;

  constructor(private memberService: MemberService, private router: Router) { }
  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  submitForm(name: string, position: string, mission: string, year: string, details: string, image: string) {
   this.memberService.addMember(new Member(name, position, mission, year, details, image));
   this.router.navigate(['']);
  }

  deleteMember(member) {
    this.memberService.delete(member);
  }

  editSelectedMember(member: any){
    this.memberService.hideAllEditComponents();
    member.edit = true;
  }


  navigateTo(member) {
    this.router.navigate(["members", member]);
  }

}
