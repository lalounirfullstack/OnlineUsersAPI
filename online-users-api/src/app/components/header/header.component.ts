import {Component, EventEmitter, Output} from '@angular/core';
import { UsersfilterService } from 'src/app/services/usersfilter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchTerm: string ='';
  // @Output() searchEvent = new EventEmitter<string>();

  constructor(private usersFilterService: UsersfilterService) {}

  onSearch(event: any){
    const term = event.target.value
    this.searchTerm = term;
    this.usersFilterService.setSearchTerm(this.searchTerm);
  }
}
