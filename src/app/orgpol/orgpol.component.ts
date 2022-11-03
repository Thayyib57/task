import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PolservService } from '../services/polserv.service';


@Component({
  selector: 'app-orgpol',
  templateUrl: './orgpol.component.html',
  styleUrls: ['./orgpol.component.css']
})
export class OrgpolComponent implements OnInit {

  polArray:any = [] 
  page: number = 1
  count: number = 0

  constructor(private polService:PolservService,private router:Router) {
   }

   lang: any;

  ngOnInit(): void {

    this.polService.getPol().subscribe((res:any)=>{
      this.polArray=res.data
      // console.log(res)
      // console.log(this.polArray)
    })
  }

navigate(){
  this.router.navigate(['/create'])
}
navigateToEdit(id:any){
  this.router.navigate([`/edit/${id}`])
}
delet(id:any){
  if(confirm('Are you sure you want to delete')){
    this.polService.delPol(id).subscribe((res)=>{
      this.ngOnInit()
    })
  }
}
}