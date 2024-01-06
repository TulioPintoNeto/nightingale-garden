export abstract class ServerError extends Error {
  abstract get response(): Response;
}