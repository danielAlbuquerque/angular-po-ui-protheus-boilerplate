import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoDialogService, PoNotificationService } from '@po-ui/ng-components';
import { PoModalPasswordRecovery, PoModalPasswordRecoveryComponent, PoPageLogin, PoPageLoginLiterals } from '@po-ui/ng-templates';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  @ViewChild(PoModalPasswordRecoveryComponent) poModalPasswordRecovery: PoModalPasswordRecoveryComponent;

  returnUrl: string;

  isPageBusy = false;

  loginErrors: Array<string> = [];
  
  constructor(
    private authService: AuthenticationService, private router: Router,
    private route: ActivatedRoute, private poDialog: PoDialogService,
    private poNotification: PoNotificationService, 
  ) { 
    
    if (this.authService.currentUserValue) 
      this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onLogin(data: PoPageLogin) {
    this.isPageBusy = true;

    this.authService.login(data.login, data.password)
      .pipe(first())
      .subscribe(data => {
        console.log(data);
        this.router.navigate([this.returnUrl]);
      }, error => {
        this.isPageBusy = false;
      });
  }

  onSendCodeRecovery(event: PoModalPasswordRecovery): void {
    this.poDialog.alert({
      title: 'Link enviado por e-mail',
      message: `Link de recuperação de senha enviado para: ${event.email.toLowerCase()}`,
      ok: () => { }
    });
    this.poModalPasswordRecovery.completed();
  }

    

}
