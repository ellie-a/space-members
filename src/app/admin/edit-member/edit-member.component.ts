import { Component, OnInit, Input, NgModule } from '@angular/core';
import { MemberService } from '../../member.service';
import { Member } from '../../member.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
  providers: [MemberService]
})
export class EditMemberComponent implements OnInit {
  @Input() selectedMember;

  constructor(private memberService: MemberService) { }

  ngOnInit() {

  }

  deleteMember() {
    this.memberService.delete(this.selectedMember);
  }

  editSelectedMember(){
    this.selectedMember.edit = false;
    this.memberService.updateMember(this.selectedMember);
  }
}
