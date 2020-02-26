import { Directive, TemplateRef, ViewContainerRef, OnDestroy } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Subscription } from 'rxjs';
import { takeUntilNgDestroy } from 'take-until-ng-destroy';

@Directive({
  selector: '[ceShowForAdmin]'
})
export class ShowForAdminDirective implements OnDestroy {

  constructor(private temp: TemplateRef<any>,
    private authService: AuthService,
    private vc: ViewContainerRef ) {
      authService.isAdmin$
      .pipe(takeUntilNgDestroy(this))
      .subscribe(isAdmin => {
        isAdmin ? this.vc.createEmbeddedView(temp) : this.vc.clear();
      })
   }
   ngOnDestroy() {
   }

}
