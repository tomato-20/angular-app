import { inject } from '@angular/core';
import { CanMatchFn, Route, UrlSegment } from '@angular/router';
// import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';

export const canMatchAdminRoleGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
): boolean => {
  // let authService = inject(AuthService)
  let user : User | null = JSON.parse(localStorage.getItem('user')!);
  if (!user) { return false }
  return ['admin','super-admin'].includes(user.role);
};
