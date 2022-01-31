export interface ClientCredentialsAccessTokenResponse {
  access_token: string;
  token_type: "Bearer" | "Bot";
  expires_in: number;
  scope: string;
  error?: string;
}

export interface guild {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
  permissions: number;
  features: string[];
}
