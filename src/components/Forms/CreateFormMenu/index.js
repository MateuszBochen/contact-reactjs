import React from 'react';
import './style.css';

const navLinks = [
  { title: 'Krok 1', text: ' Domena nazwa formularza', step: 1 },
  { title: 'Krok 2', text: ' Kontaktowe adresy e-mail', step: 2 },
  { title: 'Krok 3', text: ' Budowa formularza', step: 3 },
  { title: 'Krok 4', text: ' Tematy i powiazanie adresow email', step: 4 },
  { title: 'Krok 5', text: ' Tresc wiadomosci kontaktowej', step: 5 },
];

const MenuItem = ({ title, text, isActive }) => <li className={(isActive ? 'active' : '')}><h4>{title}</h4>{text}<hr /></li>;

const Menu = ({ activeStep }) =>
  (<ul className="steps-menu">
    { navLinks.map(
      ({ title, text, step }, index) =>
        (<MenuItem
          title={title}
          text={text}
          isActive={step === activeStep}
          key={`menu-item-${step}`}
        />)
    )}
  </ul>);

export default Menu;