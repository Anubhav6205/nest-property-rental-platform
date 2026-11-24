/**
 * Runtime configuration.
 *
 * API_ORIGIN is the Spring Boot server. When the app is served from localhost
 * it talks to a locally running server. On any other host there is no server,
 * so the app runs in demo mode: a read-only set of sample listings is served
 * from the browser by DemoInterceptor.
 */
const host = typeof window !== 'undefined' ? window.location.hostname : '';

export const API_ORIGIN = 'http://localhost:8888';
export const DEMO_MODE = host !== 'localhost' && host !== '127.0.0.1';
