
import { redirect } from '@tanstack/react-router';

export const Route = {
  path: '/',
  loader: () => {
    throw redirect({
      to: '/Register',
    });
  },
};
