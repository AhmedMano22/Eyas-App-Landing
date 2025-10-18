import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  privacyPolicyString: string;

  constructor(private http: HttpClient) {
    
  }
  ngOnInit(): void {
    this.getPrivacyPolicy()
  }

  getPrivacyPolicy(){
    return this.http.get('https://apiv2.eyasapp.com/api/v1/terms/get',
      this._options).subscribe((res: any) => {
        if (res?.success) {
          this.privacyPolicyString = res.data.terms_ar
        }
      });
  }
}
