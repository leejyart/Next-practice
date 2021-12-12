import { useRouter } from 'next/router';
import { Menu } from 'semantic-ui-react';

export default function Gnb() {
  let activeItem = 'home';
  const router = useRouter();

  function goLink(e, data) {
    if (data.name === 'home') {
      router.push('/');
      let activeItem = 'home';
    } else if (data.name === 'about') {
      let activeItem = 'about';
      router.push('about');
    }
  }
  return (
    <Menu inverted>
      <Menu.Item name='home' active={activeItem === 'home'} onClick={goLink} />
      <Menu.Item
        name='about'
        active={activeItem === 'about'}
        onClick={goLink}
      />
    </Menu>
  );
}
