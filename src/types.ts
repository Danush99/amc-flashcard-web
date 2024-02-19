export type User = {
    id?: string;
    firstName?: string;
    lastName?: string;
    role?: string;
    isPremium?: boolean;
    accessToken?: string;
    refreshToken?: string;
  };

export type ResetPassword = {
  newPassword: string;
  confirmPassword: string;
}
  