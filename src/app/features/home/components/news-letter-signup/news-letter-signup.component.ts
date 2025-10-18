import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReCaptcha2Component } from 'ngx-captcha';
import { ToastrService } from 'ngx-toastr';
import { ContactUsModel } from '../../models/contact-us.model';

@Component({
  selector: 'app-news-letter-signup',
  templateUrl: './news-letter-signup.component.html',
  styleUrls: ['./news-letter-signup.component.css']
})
export class NewsLetterSignupComponent {
  // Set Topbar Option
  @ViewChild('captchaElem') captchaElem: ReCaptcha2Component;
  @ViewChild('langInput') langInput: ElementRef;

  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;

  public theme: 'light' | 'dark' = 'light';
  public size: 'compact' | 'normal' = 'normal';
  public lang = 'ar';
  public type: 'image' | 'audio';
  form: FormGroup;
  private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private http: HttpClient) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      recaptcha: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
    });
  }
  resetCaptcha(): void {
    this.captchaElem.resetCaptcha();
  }



  onSubmitNewsLetter() {
    let formValue = this.form.value
    let body = {
      email: formValue.email,
    }
    return this.http.post('https://eyasapp.com/api/v3/emailSubscribe',
      body,
      this._options).subscribe((res: any) => {
        if (res?.success) {
          this.form.reset()
          this.toastr.success('تم التسجيل بنجاح', 'تم الإرسال');
        }
      }, err => { this.toastr.error('حدث خطأ اثناء الارسال', 'خطأ'); },
        () => { this.resetCaptcha() });

  }
}
