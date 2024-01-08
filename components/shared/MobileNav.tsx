import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import NavItems from './NavItems';

const MobileNav = () => {
  return (
    <nav className={'md:hidden'}>
      <Sheet>
        <SheetTrigger>
          <Image
            src={'/assets/icons/menu.svg'}
            alt={'Menu'}
            width={24}
            height={24}
            className={'flex flex-col gap-6 invert'}
          />
        </SheetTrigger>
        <SheetContent className={'flex flex-col gap-6 bg-black md:hidden'}>
          <Image width={128} height={38} src={'/assets/images/logo.svg'} alt={'Logo'} />
          <Separator className={'border border-gray-50'} />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
