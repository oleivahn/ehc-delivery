export {};

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: "app_administrator" | "manager" | "basic_user";
    };
    // membership: Record<string, string>;
    membership:
      | "org:admin"
      | "org:app_administrator"
      | "org:manager"
      | "org:basic_user";
  }
}
