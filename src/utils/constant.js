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
  
  export const prescripctions = [
    {
      value: 'prescriptions',
      label: 'OPEN_ORDERS',
    },
    {
      value: 'orders',
      label: 'CLOSED_ORDERS',
    },
  ];
  
  export const drawermenu = [
    {
      label: 'PROFILE',
      key: 'profile',
      icon: <Home />,
      roles: [
        { key: 'ADMIN', url: 'user-profile' },
        { key: 'THERAPIST', url: 'user-profile' },
        { key: 'PHARMACIST', url: 'user-profile' },
        { key: 'PATIENT', url: 'patient-profile' },
        { key: 'PHARMACY_EMPLOYEE', url: 'admin-employee-profile' },
      ],
    },
    {
      label: 'MANAGE_RECEPIES',
      key: 'manage_recepies',
      icon: <Inbox />,
      roles: [
        { key: 'THERAPIST', url: 'therapist-manage-recepies' },
      ],
    },
    {
      label: 'PATIENT_ORDERS',
      key: 'patient_orders',
      icon: <Inbox />,
      roles: [
        { key: 'THERAPIST', url: 'therapist-patient-orders' },
      ],
    },
    {
      label: 'MANAGE_PHARMACY',
      key: 'manage_pharmacy',
      icon: <Inbox />,
      roles: [
        { key: 'ADMIN', url: 'admin-manage-admin' },
      ],
    },
    {
      label: 'MANAGE_THERAPIST',
      key: 'manage_therapist',
      icon: <Inbox />,
      roles: [
        { key: 'ADMIN', url: 'admin-manage-therapist' },
      ],
    },
    {
      label: 'MANAGE_PATIENTS',
      key: 'manage_patients',
      icon: <Inbox />,
      roles: [
        { key: 'ADMIN', url: 'admin-manage-patient' },
        { key: 'THERAPIST', url: 'therapist-manage-patients' },
      ],
    },
    {
      label: 'MANAGE_PRODUCTS',
      key: 'manage_products',
      icon: <Inbox />,
      roles: [
        { key: 'ADMIN', url: 'admin-manage-products' },
        { key: 'PHARMACIST', url: 'admin-manage-products' },
        { key: 'PHARMACY_EMPLOYEE', url: 'admin-manage-products' },
      ],
    },
    {
      label: 'PHARMACY_ORDERS',
      key: 'pharmacy_orders',
      icon: <Inbox />,
      roles: [
        { key: 'ADMIN', url: 'admin-admin-orders' },
      ],
    },
    {
      label: 'PATIENT_ORDERS',
      key: 'patient_orders',
      icon: <Inbox />,
      roles: [
        { key: 'ADMIN', url: 'admin-patient-orders' },
      ],
    },
    {
      label: 'MANAGE_ORDERS',
      key: 'manage_orders',
      icon: <KeyboardOutlined />,
      roles: [
        { key: 'PHARMACIST', url: 'admin-manage-orders' },
        { key: 'PATIENT', url: 'patient-manage-orders' },
        { key: 'PHARMACY_EMPLOYEE', url: 'admin-manage-orders' },
      ],
    },
    {
      label: 'MANAGE_SELF_ORDERS',
      key: 'manage_self_order',
      icon: <KeyboardOutlined />,
      roles: [
        { key: 'PHARMACIST', url: 'admin-manage-self-orders' },
        { key: 'PHARMACY_EMPLOYEE', url: 'admin-manage-self-orders' },
      ],
    },
    {
      label: 'MANAGE_EMPLOYEE',
      key: 'invite_pharmacy',
      icon: <KeyboardOutlined />,
      roles: [
        { key: 'PHARMACIST', url: 'admin-manage-employee' },
      ],
    },
  ];
  export const profileTabs = [
    {
      label: 'PROFILE',
      key: 'profile',
    },
    {
      label: 'EDIT_PROFILE',
      key: 'editProfile',
    },
    {
      label: 'ADDRESS',
      key: 'address',
    },
  ];
  export const registerFormFields = [
    {
      placeholder: 'NAME',
      key: 'name',
      type: 'text',
      role: ['admin'],
      required: true,
    },
    {
      placeholder: 'SALUTATION',
      key: 'salutation',
      type: 'dropdown',
      options: salutation,
      value: 'Mr.',
      role: ['therapist', 'patient'],
      required: true,
    },
    {
      placeholder: 'TITLE',
      key: 'title',
      type: 'text',
      role: ['therapist', 'patient'],
      value: '',
    },
    {
      placeholder: 'FIRSTNAME',
      key: 'firstName',
      type: 'text',
      role: ['therapist', 'patient'],
      required: true,
    },
    {
      placeholder: 'LAST_NAME',
      key: 'lastName',
      type: 'text',
      role: ['therapist', 'patient'],
      required: true,
    },
    {
      placeholder: 'EMAILID',
      key: 'email',
      type: 'email',
      role: ['therapist', 'admin', 'patient'],
      required: true,
      email: true,
    },
    {
      placeholder: 'PHONE_NUMBER',
      key: 'contactNumber',
      type: 'tel',
      role: ['therapist', 'admin', 'patient'],
      required: true,
      contactNumber: true,
    },
    {
      placeholder: 'NAME_THERAPIST',
      key: 'name',
      type: 'text',
      role: ['therapist'],
    },
    {
      placeholder: 'WEB_PAGE',
      key: 'homepage',
      type: 'text',
      role: ['therapist', 'admin'],
    },
    {
      placeholder: 'FAX_NUMBER',
      key: 'faxNumber',
      type: 'number',
      role: ['therapist', 'admin'],
    },
    {
      placeholder: 'STREET',
      key: 'street',
      type: 'text',
      role: ['therapist', 'admin', 'patient'],
      required: true,
    },
    {
      placeholder: 'NUMBER',
      key: 'number',
      type: 'text',
      role: ['admin', 'patient', 'therapist'],
      required: true,
    },
    {
      placeholder: 'CITY',
      key: 'city',
      type: 'text',
      role: ['therapist', 'admin', 'patient'],
      required: true,
    },
    {
      placeholder: 'COUNTRY',
      key: 'country',
      type: 'dropdown',
      options: country,
      value: 'Germany',
      role: ['therapist', 'admin', 'patient'],
      required: true,
    },
    {
      placeholder: 'POST_CODE',
      key: 'postCode',
      type: 'number',
      role: ['therapist', 'admin', 'patient'],
      required: true,
      postCode: true,
    },
  ];
  
  export const editAddressFormFields = [
    {
      placeholder: 'STREET',
      key: 'street',
      type: 'text',
      required: true,
    },
    {
      placeholder: 'NUMBER',
      key: 'number',
      type: 'text',
    },
    {
      placeholder: 'CITY',
      key: 'city',
      type: 'text',
      required: true,
    },
    {
      placeholder: 'COUNTRY',
      key: 'country',
      type: 'dropdown',
      options: country,
      value: 'Germany',
    },
    {
      placeholder: 'POST_CODE',
      key: 'postCode',
      type: 'number',
      required: true,
      postCode: true,
    },
    {
      placeholder: 'CURRENTPASSWORD',
      key: 'currentPassword',
      type: 'password',
      required: true,
    },
  ];
  
  export const pharmacyEmployeeEditAddress = editAddressFormFields.slice(0, editAddressFormFields.length - 1);
  
  export const pharmacyOrderDetail = [
    { label: 'PHARMACY_NAME', field: 'name', value: '' },
    { label: 'PHARMACY_ADDRESS', field: 'address', value: '' },
    { label: 'PHARMACY_MOBILE_NUMBER', field: 'contactNumber', value: '' },
    { label: 'PHARMACY_PHONE_NO', field: 'contactNumber', value: '' },
  ];
  
  export const PatientOrder = [
    { label: 'PATIENT_NAME', field: 'name', value: '' },
    { label: 'PATIENT_ADDRESS', field: 'address', value: '' },
    { label: 'MOBILE_NO', field: 'mobile', value: '' },
    { label: 'Phone Number', field: 'contactNumber', value: '' },
    { label: 'INDICATORS', field: 'indicators', value: '' },
  ];
  
  export const PharmacyEditProfile = [
    {
      placeholder: 'PHARMACY_NAME',
      key: 'name',
      type: 'text',
      required: true,
    },
    {
      placeholder: 'PHARMACY_EMAIL',
      key: 'email',
      type: 'email',
    },
    {
      placeholder: 'ORDER_EMAIL',
      key: 'orderEmailId',
      type: 'email',
    },
    {
      placeholder: 'ORDER_SYSTEM_API_URL',
      key: 'orderSystemAPIUrl',
      type: 'text',
    },
    {
      placeholder: 'HOMEPAGE',
      key: 'homepage',
      type: 'text',
    },
    {
      placeholder: 'PHARMACY_CONTACT_NO',
      key: 'contactNumber',
      type: 'tel',
      required: true,
      contactNumber: true,
    },
    {
      placeholder: 'PHARMACY_FAX_NUMBER',
      key: 'faxNumber',
      type: 'number',
    },
    {
      placeholder: 'LOGO_FILE_NAME',
      key: 'logoFileName',
      type: 'upload',
      fileType: 'image/*',
    },
    {
      placeholder: 'TERMS_FILE_NAME',
      key: 'termsFileName',
      type: 'upload',
    },
    {
      placeholder: 'PRIVACY_POLICY_FILE_NAME',
      key: 'privacyPolicyFileName',
      type: 'upload',
    },
    {
      placeholder: 'USERINTRODUCTION',
      key: 'userIntroduction',
      type: 'textarea',
    },
    {
      placeholder: 'CURRENTPASSWORD',
      key: 'currentPassword',
      type: 'password',
      required: true,
    },
  
  ];
  
  export const adminPharmacyEditProfil = PharmacyEditProfile.slice(0, PharmacyEditProfile.length - 1);
  
  export const pharmacyAddressFields = [
    {
      placeholder: 'PHARMACY_STREET',
      key: 'street',
      type: 'text',
      required: true,
    },
    {
      placeholder: 'PHARMACY_NUMBER',
      key: 'number',
      type: 'text',
    },
    {
      placeholder: 'PHARMACY_CITY',
      key: 'city',
      type: 'text',
      required: true,
    },
    {
      placeholder: 'COUNTRY',
      key: 'country',
      type: 'dropdown',
      options: country,
      value: 'Germany',
    },
    {
      placeholder: 'PHARMACY_POST_CODE',
      key: 'postCode',
      type: 'number',
      required: true,
      postCode: true,
    },
    {
      placeholder: 'CURRENTPASSWORD',
      key: 'currentPassword',
      type: 'password',
      required: true,
    },
  ];
  
  export const adminPharmacyAddres = pharmacyAddressFields.slice(0, pharmacyAddressFields.length - 1);
  
  const orderType = [
    {
      label: 'WEB',
      value: 'WEB',
    },
    {
      label: 'INTERFACE',
      value: 'INTERFACE',
    },
    {
      label: 'E-MAIL',
      value: 'EMAIL',
    },
  ];
  
  export const pharmacysetting = [
    {
      placeholder: 'SURCHARGE_ON_PHARMACY_PURCHASE_PRICE(%)',
      key: 'surchargePrice',
      type: 'number',
      title: 'RECOMMENDED_MARKUP',
    },
    {
      placeholder: 'PACKING(EUR)',
      key: 'packaging',
      type: 'number',
      title: 'PACKAGING',
    },
    {
      placeholder: 'POSTAGE_AND_SHIPPING(EUR)',
      key: 'postageAndShipping',
      type: 'number',
    },
    {
      placeholder: 'CUSTOMER_DISCOUNT_GRANTED(%)',
      key: 'customerDiscount',
      type: 'number',
    },
    {
      placeholder: 'FLAT_RATE-MANUFACTURING_COSTS(EUR)',
      key: 'flatRateManufacturingCosts',
      type: 'number',
      title: 'MANUFACTURING',
    },
  
    {
      placeholder: 'VAT_RATE(%)',
      key: 'vatRate',
      type: 'number',
    },
    {
      placeholder: 'ORDER_TYPE',
      key: 'orderType',
      type: 'radio',
      options: orderType,
    },
    {
      placeholder: 'CURRENTPASSWORD',
      key: 'currentPassword',
      type: 'password',
      required: true,
    },
  ];
  export const adminPharmacysetting = pharmacysetting.slice(0, pharmacysetting.length - 1);
  
  export const adminPatientProfile = [
    { label: 'SALUTATION', key: 'salutation' },
    { label: 'TITLE', key: 'title' },
    { label: 'FIRSTNAME', key: 'firstName' },
    { label: 'LAST_NAME', key: 'lastName' },
    { label: 'EMAILID', key: 'email' },
    { label: 'PHONE_NUMBER', key: 'contactNumber' },
    { label: 'STREET', key: 'street' },
    { label: 'NUMBER', key: 'number' },
    { label: 'CITY', key: 'city' },
    { label: 'COUNTRY', key: 'country' },
    { label: 'POST_CODE', key: 'postCode' },
    { label: 'PREFERRED_PHARMACY', key: 'preferredPharmacy.name' },
    { label: 'STATUS', key: 'isActive' },
  ];
  export const patientProfilefields = adminPatientProfile.slice(0, adminPatientProfile.length - 1);
  
  export const Calculation = [
    // { label: 'TOTAL_PRICE_KOMPAKTATE_A', field: 'totalSellingPrice', value: '' },
    // { label: 'IMPACT_PRODUCTION_(B)+(C)', field: 'impactProduction', value: '' },
    { label: 'TOTEL_PRODUCTION_PRICE', field: 'productionPrice', value: '' },
    { label: 'DISCOUNT', field: 'discount', value: '' },
    { label: 'POSTAGE_AND_SHIPPING_D', field: 'postageAndShipping', value: '' },
    { label: 'SUBTOTAL_NET', field: 'subTotal', value: '' },
    { label: 'VAT', field: 'vat', value: '' },
    { label: 'TOTAL_PRICE', field: 'subTotalNet', value: '' },
  ];
  
  export const therapist = [
    { label: 'THERAPIST_NAME', field: 'name', value: '' },
    { label: 'THERAPIST_ADDRESS', field: 'address', value: '' },
    { label: 'THERAPIST_MOBILE_NUMBER', field: '', value: '' },
    { label: 'THERAPIST_PHONE_NUMBER', field: 'contactNumber', value: '' },
  ];
  
  export const otherInformation = [
    { label: 'ORDER_NUMBER', field: 'orderNumber', value: '' },
    { label: 'ORDER_NAME', field: 'name', value: '' },
    { label: 'ORDER_DATE', field: 'orderDate', value: '' },
    { label: 'MANUFACTURING_DATE', field: '', value: '' },
    { label: 'SHELF_LIFE', field: 'shelfLife', value: '90' },
    { label: 'QUANTITY_G_WEEK', field: 'totalWeeklyProductAmount', value: '' },
    { label: 'NO_OF_DAYS', field: 'numberOfDays', value: '' },
  ];
  
  // for patient order and therapist order
  
  export const otherInformations = [
    { label: 'ORDER_NUMBER', field: 'orderNumber', value: '' },
    { label: 'ORDER_NAME', field: 'name', value: '' },
    { label: 'ORDER_DATE', field: 'orderDate', value: '' },
    { label: 'MANUFACTURING_DATE', field: 'manufacturingDate', value: '' },
    // { label: 'SHELF_LIFE', field: 'shelfLife', value: '' },
    { label: 'QUANTITY_G_WEEK', field: 'totalWeeklyProductAmount', value: '' },
    { label: 'NO_OF_DAYS', field: 'numberOfDays', value: '' },
    { label: 'PRESCRIPTION_REQUIRED', field: 'isPrescriptionRequired', value: '' },
  ];
  
  // For Patient-orders and admin-orders tabel column
  export const pColumns = [
    {
      label: 'ORDER_NUMBER', field: 'orderNumber', type: 'link', key: 'orderName',
    },
    {
      label: 'ORDER_NAME', field: 'name', type: 'link', key: 'orderName',
    },
    {
      label: 'NO_OF_DAYS', field: 'numberOfDays',
    },
    {
      label: 'TOTAL', field: 'totalSellingPrice',
    },
    {
      label: 'ORDER_STATUS', field: 'statusLabel', textType: 'status',
    },
  ];
  
  //  order-view columns
  export const viewColumns = [
    { label: 'ARTICLE_NUMBER', field: 'articleNumber' },
    {
      label: 'CHARGE_CHECK_NUMBER',
      field: 'chargeNumber',
      type: 'dropdown',
      key: 'chargeNumber',
      defaultSelection: true,
      optionInfo: {
        path: 'chargeAndCheckNumber',
        optLabel: ['chargeNumber', 'checkNumber'],
        labelSeparator: '/',
        keySeparator: '',
        optKey: ['chargeNumber', 'checkNumber'],
      },
    },
    {
      label: 'CHECK_NUMBER', field: 'checkNumber', key: 'checkNumber',
    },
    { label: 'PRODUCT_NAME', field: 'productName' },
    { label: 'PIN_YIN', field: 'pinYin' },
    { label: 'TDER', field: 'tder' },
    { label: 'WEEKLY_DOSAGE', field: 'weeklyDosage' },
    { label: 'WEEKLY_DOSAGE', field: 'weeklyAmount' },
    { label: 'TOTAL_QUANTITY', field: 'totalAmount' },
  ];
  
  // admin basic setting and admin profile edit
  export const PharmacyBasicSettingFormFields = [
    {
      placeholder: 'SALUTATION',
      key: 'salutation',
      type: 'dropdown',
      options: salutation,
      value: 'mr',
    },
    {
      placeholder: 'TITLE',
      key: 'title',
      type: 'text',
    },
    {
      placeholder: 'FIRSTNAME',
      key: 'firstName',
      type: 'text',
      required: true,
    },
    {
      placeholder: 'LAST_NAME',
      key: 'lastName',
      type: 'text',
      required: true,
    },
    {
      placeholder: 'EMAILID',
      key: 'email',
      type: 'email',
      disabled: 'true',
    },
    {
      placeholder: 'PHONE_NUMBER',
      key: 'contactNumber',
      type: 'tel',
      required: true,
      contactNumber: true,
    },
    {
      placeholder: 'NEWPASSWORD',
      key: 'newPassword',
      type: 'password',
    },
    {
      placeholder: 'CONFIRMPASSWORD',
      key: 'confirmPassword',
      type: 'password',
    },
    {
      placeholder: 'CURRENTPASSWORD',
      key: 'currentPassword',
      type: 'password',
      required: true,
    },
  ];
  
  export const adminBasicSettingsFormFields = [
    ...PharmacyBasicSettingFormFields,
    {
      placeholder: 'USERINTRODUCTION',
      key: 'userIntroduction',
      type: 'textarea',
    },
  ];
  
  // pateint and therapist table order
  export const ptColumns = [
    { label: 'POSITION', field: 'position' },
    { label: 'ART_PRODUCT_NAME', field: 'artProductName' },
    // { label: 'PZN', field: 'product.pzn' },
    { label: 'PIN_YIN', field: 'pinYin' },
    // { label: 'TDER', field: 'tder' },
    // { label: 'WEEKLY_DOSAGE', field: 'weeklyDosage' },
    // { label: 'WEEKLY_DOSAGE', field: 'weeklyAmount' },
    { label: 'TOTAL_WEIGHT', field: 'totalAmount' },
    // { label: 'SELLING_PRICE', field: 'sellingPrice' },
  ];
  
  export const additionalHeaderColumns = [
    {},
    {},
    {},
    // {},
    // { label: 'RAW_DRUG', colspan: '' },
    { label: 'KOMPAKTAT', colspan: '1' },
  ];
  
  export const PharmacyEmpEditProfile = [
    {
      placeholder: 'SALUTATION',
      key: 'salutation',
      type: 'dropdown',
      options: salutation,
      required: true,
    },
    {
      placeholder: 'FIRSTNAME',
      key: 'firstName',
      type: 'text',
      required: true,
    },
    {
      placeholder: 'LAST_NAME',
      key: 'lastName',
      type: 'text',
      required: true,
    },
    {
      placeholder: 'EMAIL',
      key: 'email',
      type: 'email',
      required: true,
      disabled: true,
    },
    {
      placeholder: 'PHONE_NUMBER',
      key: 'contactNumber',
      type: 'tel',
      required: true,
      contactNumber: true,
    },
    {
      placeholder: 'LOGO_FILE_NAME',
      key: 'logoFileName',
      type: 'upload',
    },
    {
      placeholder: 'CURRENTPASSWORD',
      key: 'currentPassword',
      type: 'password',
      required: true,
    },
  ];
  
  export const pharmacyEmpProfileEdit = PharmacyEmpEditProfile.slice(0, PharmacyEmpEditProfile.length - 1);
  
  export const pharmacySelfEmpProfileView = [
    { label: 'FIRSTNAME', key: 'firstName' },
    { label: 'LAST_NAME', key: 'lastName' },
    { label: 'EMAIL', key: 'email' },
    { label: 'PHONE_NUMBER', key: 'contactNumber' },
    { label: 'STATUS', key: 'status' },
    { label: 'STREET', key: 'street' },
    { label: 'NUMBER', key: 'number' },
    { label: 'CITY', key: 'city' },
    { label: 'COUNTRY', key: 'country' },
    { label: 'POST_CODE', key: 'postCode' },
    {
      label: 'LOGO_FILE_NAME', key: 'logoFileName', value: '', type: 'link', onClickAction: true,
    },
    { label: 'PHARMACY', key: 'pharmacyName' },
  ];
  
  export const pharmcayEmpProfileView = pharmacySelfEmpProfileView.slice(0, pharmacySelfEmpProfileView.length - 1);
  
  export const AdminpharmcayEmpProfileView = pharmacySelfEmpProfileView.slice(0, pharmacySelfEmpProfileView.length - 2);
  
  export const CURRENCY_FIELDS = [
    'totalSellingPrice',
    'impactProduction',
    'productionPrice',
    'discount',
    'postageAndShipping',
    'subTotal',
    'vat',
    'subTotalNet',
    'totalPurchasePrice',
    'packagingSurcharge',
    'totalPrice',
  ];
  
  export const NUMERIC_FIELDS = [
    'dailyDose',
    'totalQuantity',
    'kompaktDailyDose',
    'kompaktTotalQuantity',
    'minQty',
    'maxQty',
    'dailyDose',
    'weeklyDose',
    'tder',
    'weeklyAmount',
    'totalAmount',
  ];
  
  export const NUMERIC_FIELDS_EXCEPTION = [
    'pricePerGram',
  ];
  
  export const commentColumns = [{
    label: 'STATUS', field: 'status', textType: 'status',
  },
  {
    label: 'CHANGE_BY', field: 'changeBy',
  },
  {
    label: 'CHANGE_ON', field: 'changeOn',
  }];
  
  export const historyColumns = [{
    label: 'HISTORICAL_INFORMATION', field: 'status', textType: 'status',
  },
  {
    label: 'CHANGE_BY', field: 'changeBy',
  },
  {
    label: 'CHANGE_ON', field: 'changeOn',
  }];