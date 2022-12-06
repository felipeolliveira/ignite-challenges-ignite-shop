import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import logo from '../../assets/logo.svg';
import { useCartContext } from '../../providers/CartProvider';
import { CartDialog } from '../CartDialog';
import { Icon } from '../Icon';
import { BagIconButton, HeaderContainer } from "./styles";


export function Header() {
  const {pathname} = useRouter()
  const items = useCartContext(context => context.items)

  const itemsAmount = items.length
  const isSuccessRoute = pathname.includes('/success')
  
  return(
    <HeaderContainer>
      <Link href={'/'} className="home-link">
        <Image src={logo} alt="" width={130} height={52} />
      </Link>

      {!isSuccessRoute && (
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <BagIconButton hasItem={!!itemsAmount} >
              {!!itemsAmount && (
                <span>{itemsAmount}</span>
                )}
              <Icon.Bag />
            </BagIconButton>
          </Dialog.Trigger>

          <CartDialog />
        </Dialog.Root>
      )}

    </HeaderContainer>
  )
}