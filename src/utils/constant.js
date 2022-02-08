/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
import {
    Inbox,
    Home, KeyboardOutlined,
  } from '@mui/icons-material';
  import React from 'react';
//   import GermanFlag from '../assets/images/germany.png';
//   import EnglishFlag from '../assets/images/united-kingdom.png';
  
  export const languages = [
    {
      code: 'en',
      value: 'english',
      label: 'ENGLISH',
    //   img: EnglishFlag,
    },
    {
      code: 'de',
      value: 'german',
      label: 'GERMAN',
    //   img: GermanFlag,
    },
  ];
  
  export const country = [
    {
      value: 'Germany',
      label: 'GERMANY',
    },
  ];
  
  export const salutation = [
    {
      value: 'Mr.',
      label: 'MR',
    },
    {
      value: 'Ms.',
      label: 'MS',
    },
  ];
  
 
  export const registerFormFields = [
    {
      placeholder: 'TITLE',
      key: 'title',
      type: 'text',
      role: ['admin'],
      usertype: ['parent','student'],
      value: '',
    },
    {
      placeholder: 'FIRSTNAME',
      key: 'firstName',
      type: 'text',
      role: ['admin'],
      usertype: ['parent','student'],
      required: true,
    },
    {
      placeholder: 'MIDDLE_NAME',
      key: 'middlename',
      type: 'text',
      role: ['admin'],
      usertype: ['parent','student'],
      required: true,
    },
    {
      placeholder: 'LAST_NAME',
      key: 'lastName',
      type: 'text',
      role: ['admin'],
      usertype: ['parent','student'],
      required: true,
    },
    {
      placeholder: 'EMAILID',
      key: 'email',
      type: 'email',
      role: ['admin'],
      usertype: ['parent','student'],
      required: true,
      email: true,
    },
    {
      placeholder: 'PHONE_NUMBER',
      key: 'contactNumber',
      type: 'tel',
      role: ['admin'],
      usertype: ['parent','student'],
      required: true,
      contactNumber: true,
    },
    {
      placeholder: 'PROFESSION',
      key: 'profession',
      type: 'text',
      role: ['admin'],
      usertype: ['parent','student'],
      required: true,
    },
    {
      placeholder: 'COUNTRY',
      key: 'country',
      type: 'dropdown',
      options: country,
      value: 'Germany',
      role: ['admin'],
      usertype: ['parent','student'],
      required: true,
    }
  ];
  

  
 