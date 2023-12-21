import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';

// Font files can be colocated inside of `app`
export const terminator = localFont({
    src: './terminator.ttf',
    display: 'swap',
  });

  export const poppins = Poppins({
      subsets: ['latin'],
      weight: '100'
  });