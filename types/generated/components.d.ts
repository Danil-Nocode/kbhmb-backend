import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsBolshojBlok extends Schema.Component {
  collectionName: 'components_components_bolshoj_blok';
  info: {
    displayName: '\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0431\u043B\u043E\u043A';
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
    buttonText: Attribute.String;
  };
}

export interface ComponentsMalyjBlok extends Schema.Component {
  collectionName: 'components_components_malyj_blok';
  info: {
    displayName: '\u041C\u0430\u043B\u044B\u0439 \u0431\u043B\u043E\u043A';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    buttonText: Attribute.String & Attribute.Required;
  };
}

export interface ComponentsPreimushhestvoKarty extends Schema.Component {
  collectionName: 'components_components_preimushhestvo_karty';
  info: {
    displayName: '\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E - \u041A\u0430\u0440\u0442\u044B';
  };
  attributes: {
    icon: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String;
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

export interface UnitDokumentami extends Schema.Component {
  collectionName: 'components_unit_dokumentami';
  info: {
    displayName: '\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B';
    icon: 'archive';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    docs: Attribute.Relation<
      'unit.dokumentami',
      'oneToMany',
      'api::document.document'
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
    title: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.bolshoj-blok': ComponentsBolshojBlok;
      'components.malyj-blok': ComponentsMalyjBlok;
      'components.preimushhestvo-karty': ComponentsPreimushhestvoKarty;
      'components.tekstovyj-redaktor': ComponentsTekstovyjRedaktor;
      'components.vozmozhnosti': ComponentsVozmozhnosti;
      'unit.dokumentami': UnitDokumentami;
      'unit.tekstom': UnitTekstom;
    }
  }
}
