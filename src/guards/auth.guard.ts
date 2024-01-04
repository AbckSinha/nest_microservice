import { CanActivate, Injectable, ExecutionContext, UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        return this.validateRequest(request);
    }

    validateRequest(req: any) {
        return true;
    }
}


/**
 * Usage of guard
 */

// @Controller('cats')
// @UseGuards(new AuthGuard())
// export class AppController