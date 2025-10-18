import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import AOS from "aos";
import { ReCaptcha2Component } from 'ngx-captcha';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ContactUsModel } from '../../models/contact-us.model';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  // Set Topbar Option
  Menuoption = 'center';
  Settingicon = true
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
    AOS.init({
      mirror: true,
    });

    this.form = this.formBuilder.group({
      recaptcha: ['', Validators.required],
      fullname: ['', [Validators.required, Validators.maxLength(25)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      title: ['', [Validators.required, Validators.maxLength(30)]],
      message: ['', [Validators.required, Validators.maxLength(150)]],
      phone: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
    });
  }


  resetCaptcha(): void {
    this.captchaElem.resetCaptcha();
  }

  onSendMessage() {
    
    let formValue = this.form.value
    
    let contactUsModel: ContactUsModel = {
      email: formValue.email,
      message: formValue.message,
      fullname: formValue.fullname,
      phone:`05${formValue.phone}`,
      title: formValue.title
    }
    return this.http.post('https://eyasapp.com/api/v3/contact',
      contactUsModel,
      this._options).subscribe((res: any) => {
        if (res?.success) {
          this.form.reset()
          this.toastr.success('تم إرسال رسالتك بنجاح', 'تم الإرسال');
        }
      }, err => { this.toastr.error('حدث خطأ اثناء الارسال', 'خطأ'); },
        () => { this.resetCaptcha() });

  }
}
