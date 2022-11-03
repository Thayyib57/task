import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PolservService } from 'src/app/services/polserv.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private polService:PolservService,private router:Router,private route:ActivatedRoute,private toastr:ToastrService) { }

  data = {
    title:"",
    description: "",
  }

  id:any
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('id is', this.id);
    if (this.id) {
      this.polService.getPolById(this.id).subscribe((res) => {
        this.data = res
      })
  }
}


  onSubmit(){
    if(this.id){
      this.polService.putPol(this.id,this.data).subscribe((res)=>{
          this.router.navigate(['/'])
          this.toastr.success('Successfully Updated', 'Success')      
        })
    }
    else {
      this.polService.postPol(this.data).subscribe((res)=>{
        console.log({res})
        this.toastr.success('Successfully Created', 'Success');
      })
      this.router.navigate(['/'])
    }   
  }
}