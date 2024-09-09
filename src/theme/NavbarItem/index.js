import React from 'react';
import NavbarItem from '@theme-original/NavbarItem';

// Custom Icons
const customIcons = {
  'header-github-link': 'https://kira.network/images/Github.svg',
  'header-discord-link': 'https://kira.network/images/Discord-1.svg',
  'header-tg-link': 'https://kira.network/images/Telegram.svg',
  'header-x-link': 'https://kira.network/images/x.svg',
};

function NavbarItemWrapper(props) {
  const { className, href, ...rest } = props;

  // Check if the className matches one of the custom icons
  if (customIcons[className]) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" class="navbar__item navbar__link icon-wrapper">
        <img
          src={customIcons[className]}
          class="icon-menu"
        />
      </a>
    );
  }

  // For all other items, return the default behavior
  return <NavbarItem {...rest} />;
}

export default NavbarItemWrapper;
