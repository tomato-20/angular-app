import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";

export const canActivateBook: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot)  => {
    const authService : AuthService = inject(AuthService);
    if(authService.userValue) {
        return true
    } else {
        return false
    }
}