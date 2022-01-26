import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { DirectoryMenuContainer } from './directory.styles';
import { useSelector } from 'react-redux';

const  Directory =()=>{
const sections=useSelector(selectDirectorySections)

  return(
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
       )};



export default Directory;