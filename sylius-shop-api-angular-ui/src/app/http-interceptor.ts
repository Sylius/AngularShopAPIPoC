import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { AuthService } from './services/auth.service';

/**
 * Class for intercepting all http requests sets the JWT token
 */
export class CustomHttpInterceptor implements HttpInterceptor {

    private requestCount = 0;

    /**
     * Creates an instance of CustomHttpInterceptor.
     * @param authService Injected Instance of AuthService
     */
    constructor(
        private authService: AuthService,
    ) {

    }

    /**
     * Handling of http requests
     * catches Errors and removes the stored token if api returns Statuscode 401
     */
    public intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        console.log(req.url);
        this.requestCount += 1;
        if (this.authService.token) {
            req = req.clone({
                headers: req.headers.set('Authorization', this.authService.token),
            });
        }
        // TODO: Do loading handling right
        return next.handle(req).pipe(
            catchError(
                (error: HttpErrorResponse) => {
                    if (error.status === 401) {
                        this.authService.logout();
                    }
                    return throwError(error);
                },
            ),
        );
    }
}
