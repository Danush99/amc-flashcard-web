import axios from 'src/services/HttpServices';
import { AxiosError } from 'axios';
import { ResetPassword } from 'src/types';

export const resetPassword = async (passWords: ResetPassword) => {
    try {
      const { data } = await axios.post('/reset/password', passWords);
      return Promise.resolve(data);
    } catch (e: unknown) {
      const error = e as AxiosError;
      return Promise.reject(error);
    }
  };