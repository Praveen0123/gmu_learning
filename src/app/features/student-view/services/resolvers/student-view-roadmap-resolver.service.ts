import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { OccupationFacadeService } from '../../../../root-store/occupation-store/occupation-facade.service';



@Injectable({
  providedIn: 'root'
})

export class OccupationProfileResolverService implements Resolve<void>
{
  constructor
    (
      private occupationFacadeService: OccupationFacadeService
    ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void
  {
    const occupationId: string = 'a10c9a42-cdf7-4b8c-ad8e-a88406d7d8e4';
    this.occupationFacadeService.requestOccupationDetails(occupationId);
  }
}



