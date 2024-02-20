import axios from 'src/services/HttpServices';
import { AxiosError } from 'axios';
import { ResetPassword } from 'src/types';

export const resetPassword = async (passWords: ResetPassword, token : string) => {
    try {
      const body = {
        "token" : token,
        "newPassword" : passWords.newPassword
      }
      const { data } = await axios.patch('/api/v1/user/reset-password', body);
      return Promise.resolve(data);
    } catch (e: unknown) {
      const error = e as AxiosError;
      return Promise.reject(error);
    }
  };