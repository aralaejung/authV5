import { Poppins } from 'next/font/google';
import { IoKeySharp } from 'react-icons/io5';

import { cn } from '@/lib/utils';

const font = Poppins({ subsets: ['latin'], weight: ['600'] });

interface HeaderProps {
  label: string;
}

const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1
        className={cn(
          'flex justify-center text-3xl font-semibold',
          font.className
        )}
      >
        <IoKeySharp />
        <span>Auth</span>
      </h1>
      <p className="text-muted-foreground text-ms">{label}</p>
    </div>
  );
};

export default Header;
