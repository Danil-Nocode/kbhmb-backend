import type { Schema, Attribute } from '@strapi/strapi';

export interface CalculatorCreditItem extends Schema.Component {
  collectionName: 'components_calculator_credit_items';
  info: {
    displayName: 'CreditItem';
    description: '';
  };
  attributes: {
    amountFrom: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    amountTo: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    termFrom: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    termTo: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    title: Attribute.String & Attribute.Required;
    interest_rate: Attribute.Component<'calculator.proczentnaya-stavka', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    assurance: Attribute.Float &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paymaster: Attribute.Float &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    loan_link: Attribute.Relation<
      'calculator.credit-item',
      'oneToOne',
      'api::loan.loan'
    >;
  };
}

export interface CalculatorDepositItem extends Schema.Component {
  collectionName: 'components_calculator_deposit_items';
  info: {
    displayName: 'depositItem';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    amountFrom: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    amountTo: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    termFrom: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    termTo: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    interest_rate: Attribute.Component<'calculator.proczentnaya-stavka', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    rateLegalEntity: Attribute.Float &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    rateIndividualEntrepreneurs: Attribute.Float &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    deposit_link: Attribute.Relation<
      'calculator.deposit-item',
      'oneToOne',
      'api::deposit.deposit'
    >;
  };
}

export interface CalculatorDepozit extends Schema.Component {
  collectionName: 'components_calculator_depozit';
  info: {
    displayName: '\u0414\u0435\u043F\u043E\u0437\u0438\u0442';
    description: '';
  };
  attributes: {
    deposit: Attribute.Component<'calculator.deposit-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface CalculatorIpoteka extends Schema.Component {
  collectionName: 'components_calculator_ipoteka';
  info: {
    displayName: '\u0418\u043F\u043E\u0442\u0435\u043A\u0430';
    description: '';
  };
  attributes: {
    mortgage: Attribute.Component<'calculator.mortgage-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface CalculatorKredit extends Schema.Component {
  collectionName: 'components_calculator_kredit';
  info: {
    displayName: '\u041A\u0440\u0435\u0434\u0438\u0442';
    description: '';
  };
  attributes: {
    loans: Attribute.Component<'calculator.credit-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface CalculatorMortgageItem extends Schema.Component {
  collectionName: 'components_calculator_mortrage_items';
  info: {
    displayName: 'mortgageItem';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    amountFrom: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    amountTo: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    initialPaymentTo: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    minimumRate: Attribute.Float &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    termFrom: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    termTo: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    unrelated: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    noInsurance: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    range_rate: Attribute.Component<'calculator.stavka-diapazon', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 5;
        },
        number
      >;
    interest_rate: Attribute.Component<'calculator.stavka-ipoteka', true> &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 5;
        },
        number
      >;
    mortgage_link: Attribute.Relation<
      'calculator.mortgage-item',
      'oneToOne',
      'api::mortgage.mortgage'
    >;
  };
}

export interface CalculatorProczentnayaStavka extends Schema.Component {
  collectionName: 'components_calculator_proczentnaya_stavka';
  info: {
    displayName: '\u041F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u0430\u044F \u0441\u0442\u0430\u0432\u043A\u0430';
    description: '';
  };
  attributes: {
    daysFrom: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    percent: Attribute.Float & Attribute.Required;
  };
}

export interface CalculatorSrokVklada extends Schema.Component {
  collectionName: 'components_calculator_srok_vklada';
  info: {
    displayName: '\u0421\u0440\u043E\u043A \u0432\u043A\u043B\u0430\u0434\u0430';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    capitalization: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    interest_rate: Attribute.Component<'calculator.stavka-vklad', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    amountFrom: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    amountTo: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    term_link: Attribute.Relation<
      'calculator.srok-vklada',
      'oneToOne',
      'api::investment.investment'
    >;
  };
}

export interface CalculatorStavkaDiapazon extends Schema.Component {
  collectionName: 'components_calculator_stavka_diapazon_s';
  info: {
    displayName: '\u0421\u0442\u0430\u0432\u043A\u0430 (\u0414\u0438\u0430\u043F\u0430\u0437\u043E\u043D)';
  };
  attributes: {
    fromInitPayPercent: Attribute.Float &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    percent: Attribute.Float &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface CalculatorStavkaIpoteka extends Schema.Component {
  collectionName: 'components_calculator_stavka_ipoteka_s';
  info: {
    displayName: '\u0421\u0442\u0430\u0432\u043A\u0430 (\u041E\u0431\u044A\u0435\u043A\u0442)';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    percent: Attribute.Float &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface CalculatorStavkaVklad extends Schema.Component {
  collectionName: 'components_calculator_stavka_vklad_s';
  info: {
    displayName: '\u0421\u0442\u0430\u0432\u043A\u0430 (\u0412\u043A\u043B\u0430\u0434)';
    description: '';
  };
  attributes: {
    days: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    title: Attribute.String & Attribute.Required;
    monthlyInterestOnline: Attribute.Float &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    monthlyInterestOffice: Attribute.Float &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    expiryDateOnline: Attribute.Float &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    expiryDateOffice: Attribute.Float &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface CalculatorVklad extends Schema.Component {
  collectionName: 'components_calculator_vklad';
  info: {
    displayName: '\u0412\u043A\u043B\u0430\u0434';
    description: '';
  };
  attributes: {
    terms: Attribute.Component<'calculator.srok-vklada', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface CommonLink extends Schema.Component {
  collectionName: 'components_common_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface CommonNomerTelefona extends Schema.Component {
  collectionName: 'components_common_nomer_telefona';
  info: {
    displayName: '\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    phoneNumber: Attribute.String & Attribute.Required;
  };
}

export interface CommonQrBlock extends Schema.Component {
  collectionName: 'components_common_qr_blocks';
  info: {
    displayName: 'QRBlock';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text & Attribute.Required;
    googlePlayTitle: Attribute.String & Attribute.Required;
    googlePlayQR: Attribute.Media<'images'> & Attribute.Required;
    appStoreTitle: Attribute.String & Attribute.Required;
    appStoreQR: Attribute.Media<'images'> & Attribute.Required;
    links: Attribute.Component<'common.link', true> &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface CommonSoczialnyeSeti extends Schema.Component {
  collectionName: 'components_common_soczialnye_seti';
  info: {
    displayName: '\u0421\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0435\u0442\u0438';
    description: '';
  };
  attributes: {
    link: Attribute.String;
    icon: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface CommonSpojler extends Schema.Component {
  collectionName: 'components_unit_spojler';
  info: {
    displayName: 'Spoiler';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface CommonTekst extends Schema.Component {
  collectionName: 'components_common_tekst';
  info: {
    displayName: '\u0422\u0435\u043A\u0441\u0442';
    description: '';
  };
  attributes: {
    title: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface CommonTextDescription extends Schema.Component {
  collectionName: 'components_common_text_descriptions';
  info: {
    displayName: 'TextDescription';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface CommonTextImageRoute extends Schema.Component {
  collectionName: 'components_common_text_image_routes';
  info: {
    displayName: 'TextImageRoute';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    route: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface CommonTitleImage extends Schema.Component {
  collectionName: 'components_common_title_images';
  info: {
    displayName: 'TitleImage';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ComponentsBolshojBlok extends Schema.Component {
  collectionName: 'components_components_bolshoj_blok';
  info: {
    displayName: '\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0431\u043B\u043E\u043A';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    buttonText: Attribute.String & Attribute.Required;
    route: Attribute.String & Attribute.Required;
  };
}

export interface ComponentsFooter extends Schema.Component {
  collectionName: 'components_components_footers';
  info: {
    displayName: 'footer';
    description: '';
  };
  attributes: {
    logo: Attribute.Media<'images'> & Attribute.Required;
    phoneNumbers: Attribute.Component<'common.nomer-telefona', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 4;
        },
        number
      >;
    socialLinks: Attribute.Component<'common.soczialnye-seti', true> &
      Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    individuals_links: Attribute.Component<'common.link', true> &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    business_links: Attribute.Component<'common.link', true> &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    about_links: Attribute.Component<'common.link', true> &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    appBlock: Attribute.Component<'common.qr-block'> & Attribute.Required;
  };
}

export interface ComponentsHeader extends Schema.Component {
  collectionName: 'components_components_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    logo: Attribute.Media<'images'> & Attribute.Required;
    individuals_links: Attribute.Component<'header.punkt-menyu', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    juridical_links: Attribute.Component<'header.punkt-menyu', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface ComponentsMalyjBlok extends Schema.Component {
  collectionName: 'components_components_malyj_blok';
  info: {
    displayName: '\u041C\u0430\u043B\u044B\u0439 \u0431\u043B\u043E\u043A';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    buttonText: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'>;
    route: Attribute.String & Attribute.Required;
  };
}

export interface ComponentsPreimushhestvo2 extends Schema.Component {
  collectionName: 'components_components_preimushhestvo_2s';
  info: {
    displayName: '\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E 2';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ComponentsPreimushhestvoKarty extends Schema.Component {
  collectionName: 'components_components_preimushhestvo_karty';
  info: {
    displayName: '\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E';
    description: '';
  };
  attributes: {
    icon: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ComponentsRepetitiveWithTitle extends Schema.Component {
  collectionName: 'components_repetitive_with_title';
  info: {
    displayName: 'RepetitiveWithTitle ';
    description: '';
  };
  attributes: {
    item: Attribute.Component<'common.tekst', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ComponentsTekstovyjRedaktor extends Schema.Component {
  collectionName: 'components_components_tekstovyj_redaktor';
  info: {
    displayName: '\u0422\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0439 \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440';
  };
  attributes: {
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface ComponentsTextImageBlock extends Schema.Component {
  collectionName: 'components_components_text_image_blocks';
  info: {
    displayName: 'TextImageBlock';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ComponentsUsloviya extends Schema.Component {
  collectionName: 'components_components_usloviya';
  info: {
    displayName: '\u0423\u0441\u043B\u043E\u0432\u0438\u044F';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
  };
}

export interface ComponentsVozmozhnosti extends Schema.Component {
  collectionName: 'components_test_vozmozhnosti';
  info: {
    displayName: '\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438';
    description: '';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface HeaderDepozity extends Schema.Component {
  collectionName: 'components_header_depozity';
  info: {
    displayName: '\u0414\u0435\u043F\u043E\u0437\u0438\u0442\u044B';
  };
  attributes: {
    deposits: Attribute.Relation<
      'header.depozity',
      'oneToMany',
      'api::deposit.deposit'
    >;
  };
}

export interface HeaderGruppa extends Schema.Component {
  collectionName: 'components_header_gruppa';
  info: {
    displayName: '\u0413\u0440\u0443\u043F\u043F\u0430';
  };
  attributes: {
    item: Attribute.Component<'header.ssylka', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 10;
        },
        number
      >;
  };
}

export interface HeaderGruppyMenyu extends Schema.Component {
  collectionName: 'components_header_gruppy_menyu';
  info: {
    displayName: '\u0413\u0440\u0443\u043F\u043F\u044B \u043C\u0435\u043D\u044E';
  };
  attributes: {
    header_link: Attribute.Relation<
      'header.gruppy-menyu',
      'oneToOne',
      'api::header-link.header-link'
    >;
  };
}

export interface HeaderIpoteka extends Schema.Component {
  collectionName: 'components_header_ipoteka';
  info: {
    displayName: '\u0418\u043F\u043E\u0442\u0435\u043A\u0430';
  };
  attributes: {
    mortgages: Attribute.Relation<
      'header.ipoteka',
      'oneToMany',
      'api::mortgage.mortgage'
    >;
  };
}

export interface HeaderKarty extends Schema.Component {
  collectionName: 'components_header_karty';
  info: {
    displayName: '\u041A\u0430\u0440\u0442\u044B';
  };
  attributes: {
    cards: Attribute.Relation<'header.karty', 'oneToMany', 'api::card.card'>;
  };
}

export interface HeaderKredity extends Schema.Component {
  collectionName: 'components_header_kredity';
  info: {
    displayName: '\u041A\u0440\u0435\u0434\u0438\u0442\u044B';
  };
  attributes: {
    loans: Attribute.Relation<'header.kredity', 'oneToMany', 'api::loan.loan'>;
  };
}

export interface HeaderPunktMenyu extends Schema.Component {
  collectionName: 'components_header_punkt_menyu';
  info: {
    displayName: '\u041F\u0443\u043D\u043A\u0442 \u043C\u0435\u043D\u044E';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    group: Attribute.Component<'header.gruppy-menyu', true> &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 2;
        },
        number
      >;
    url: Attribute.String;
  };
}

export interface HeaderScheta extends Schema.Component {
  collectionName: 'components_header_scheta';
  info: {
    displayName: '\u0421\u0447\u0435\u0442\u0430';
  };
  attributes: {
    accounts: Attribute.Relation<
      'header.scheta',
      'oneToMany',
      'api::account.account'
    >;
  };
}

export interface HeaderSsylka extends Schema.Component {
  collectionName: 'components_header_ssylka';
  info: {
    displayName: '\u0421\u0441\u044B\u043B\u043A\u0430';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    route: Attribute.String & Attribute.Required;
  };
}

export interface HeaderStaticheskayaSsylka extends Schema.Component {
  collectionName: 'components_header_staticheskaya_ssylka';
  info: {
    displayName: '\u0421\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u0441\u044B\u043B\u043A\u0430';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    route: Attribute.String & Attribute.Required;
  };
}

export interface HeaderVklady extends Schema.Component {
  collectionName: 'components_header_vklady';
  info: {
    displayName: '\u0412\u043A\u043B\u0430\u0434\u044B';
  };
  attributes: {
    investments: Attribute.Relation<
      'header.vklady',
      'oneToMany',
      'api::investment.investment'
    >;
  };
}

export interface UnitCalculatorField extends Schema.Component {
  collectionName: 'components_unit_calculator_fields';
  info: {
    displayName: '\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    calculator: Attribute.Relation<
      'unit.calculator-field',
      'oneToOne',
      'api::billing-calculator.billing-calculator'
    >;
  };
}

export interface UnitDokumentami extends Schema.Component {
  collectionName: 'components_unit_dokumentami';
  info: {
    displayName: '\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B';
    icon: 'archive';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    docs: Attribute.Relation<
      'unit.dokumentami',
      'oneToMany',
      'api::document.document'
    >;
  };
}

export interface UnitSpojlery extends Schema.Component {
  collectionName: 'components_unit_spojlery';
  info: {
    displayName: '\u0421\u043F\u043E\u0439\u043B\u0435\u0440\u044B';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    spoilers: Attribute.Component<'common.spojler', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface UnitTekstom extends Schema.Component {
  collectionName: 'components_unit_tekstom';
  info: {
    displayName: '\u0422\u0435\u043A\u0441\u0442/\u0422\u0430\u0431\u043B\u0438\u0446\u0430';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    isTableStyled: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'calculator.credit-item': CalculatorCreditItem;
      'calculator.deposit-item': CalculatorDepositItem;
      'calculator.depozit': CalculatorDepozit;
      'calculator.ipoteka': CalculatorIpoteka;
      'calculator.kredit': CalculatorKredit;
      'calculator.mortgage-item': CalculatorMortgageItem;
      'calculator.proczentnaya-stavka': CalculatorProczentnayaStavka;
      'calculator.srok-vklada': CalculatorSrokVklada;
      'calculator.stavka-diapazon': CalculatorStavkaDiapazon;
      'calculator.stavka-ipoteka': CalculatorStavkaIpoteka;
      'calculator.stavka-vklad': CalculatorStavkaVklad;
      'calculator.vklad': CalculatorVklad;
      'common.link': CommonLink;
      'common.nomer-telefona': CommonNomerTelefona;
      'common.qr-block': CommonQrBlock;
      'common.soczialnye-seti': CommonSoczialnyeSeti;
      'common.spojler': CommonSpojler;
      'common.tekst': CommonTekst;
      'common.text-description': CommonTextDescription;
      'common.text-image-route': CommonTextImageRoute;
      'common.title-image': CommonTitleImage;
      'components.bolshoj-blok': ComponentsBolshojBlok;
      'components.footer': ComponentsFooter;
      'components.header': ComponentsHeader;
      'components.malyj-blok': ComponentsMalyjBlok;
      'components.preimushhestvo-2': ComponentsPreimushhestvo2;
      'components.preimushhestvo-karty': ComponentsPreimushhestvoKarty;
      'components.repetitive-with-title': ComponentsRepetitiveWithTitle;
      'components.tekstovyj-redaktor': ComponentsTekstovyjRedaktor;
      'components.text-image-block': ComponentsTextImageBlock;
      'components.usloviya': ComponentsUsloviya;
      'components.vozmozhnosti': ComponentsVozmozhnosti;
      'header.depozity': HeaderDepozity;
      'header.gruppa': HeaderGruppa;
      'header.gruppy-menyu': HeaderGruppyMenyu;
      'header.ipoteka': HeaderIpoteka;
      'header.karty': HeaderKarty;
      'header.kredity': HeaderKredity;
      'header.punkt-menyu': HeaderPunktMenyu;
      'header.scheta': HeaderScheta;
      'header.ssylka': HeaderSsylka;
      'header.staticheskaya-ssylka': HeaderStaticheskayaSsylka;
      'header.vklady': HeaderVklady;
      'unit.calculator-field': UnitCalculatorField;
      'unit.dokumentami': UnitDokumentami;
      'unit.spojlery': UnitSpojlery;
      'unit.tekstom': UnitTekstom;
    }
  }
}
