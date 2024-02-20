export type User = {
    id?: string;
    firstName?: string;
    lastName?: string;
    role?: string;
    is_Premium?: boolean;
    accessToken?: string;
    refreshToken?: string;
  };

export type ResetPassword = {
  newPassword: string;
  confirmPassword: string;
}
  