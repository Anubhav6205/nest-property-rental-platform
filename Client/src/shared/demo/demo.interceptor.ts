import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { API_ORIGIN, DEMO_MODE } from 'src/shared/config';
import { DEMO_PROPERTIES } from './demo-data';

/**
 * In demo mode there is no Spring Boot server. This interceptor answers the
 * read-only listings request with sample data and rejects every other API call
 * so the UI shows its normal error handling instead of hanging.
 */
@Injectable()
export class DemoInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!DEMO_MODE || !req.url.startsWith(API_ORIGIN)) {
      return next.handle(req);
    }

    if (req.method === 'GET' && req.url === `${API_ORIGIN}/property/get/all`) {
      return of(
        new HttpResponse({
          status: 200,
          body: { status: 'true', properties: DEMO_PROPERTIES },
        })
      ).pipe(delay(150));
    }

    return throwError(
      () =>
        new HttpErrorResponse({
          status: 503,
          url: req.url,
          statusText: 'Demo mode: the API server is not running',
        })
    );
  }
}
