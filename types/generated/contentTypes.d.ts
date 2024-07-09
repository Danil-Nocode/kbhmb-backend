import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAccountAccount extends Schema.CollectionType {
  collectionName: 'accounts';
  info: {
    singularName: 'account';
    pluralName: 'accounts';
    displayName: '\u0421\u0447\u0435\u0442\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::account.account', 'title'> & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    mainImage: Attribute.Media<'images'> & Attribute.Required;
    mainBtnText: Attribute.String & Attribute.Required;
    document: Attribute.Relation<
      'api::account.account',
      'oneToOne',
      'api::document.document'
    >;
    conditions: Attribute.Component<'components.usloviya', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 3;
        },
        number
      >;
    infoAndDocsTitle: Attribute.String & Attribute.Required;
    infoAndDocs: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    depositInsurance: Attribute.Component<'common.title-image'> &
      Attribute.Required;
    processingMethods: Attribute.Component<'components.repetitive-with-title'> &
      Attribute.Required;
    recommended_products: Attribute.Relation<
      'api::account.account',
      'oneToMany',
      'api::recommended-product.recommended-product'
    >;
    banner: Attribute.Relation<
      'api::account.account',
      'oneToOne',
      'api::banner.banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::account.account',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::account.account',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAccountPageAccountPage extends Schema.SingleType {
  collectionName: 'accounts_page';
  info: {
    singularName: 'account-page';
    pluralName: 'accounts-page';
    displayName: '\u0421\u0447\u0435\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::account-page.account-page', 'title'> &
      Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    mainImage: Attribute.Media<'images'> & Attribute.Required;
    accounts: Attribute.Relation<
      'api::account-page.account-page',
      'oneToMany',
      'api::account.account'
    >;
    processingMethods: Attribute.Component<'components.repetitive-with-title'> &
      Attribute.Required;
    InfoAndDocsTitle: Attribute.String & Attribute.Required;
    InfoAndDocs: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    recommended_products: Attribute.Relation<
      'api::account-page.account-page',
      'oneToMany',
      'api::recommended-product.recommended-product'
    >;
    depositInsurance: Attribute.Component<'common.title-image'> &
      Attribute.Required;
    banner: Attribute.Relation<
      'api::account-page.account-page',
      'oneToOne',
      'api::banner.banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::account-page.account-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::account-page.account-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBannerBanner extends Schema.CollectionType {
  collectionName: 'banners';
  info: {
    singularName: 'banner';
    pluralName: 'banners';
    displayName: '\u0411\u0430\u043D\u043D\u0435\u0440\u044B';
    description: '';
  };
  options: {
    draftAndPublish: true;
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
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::banner.banner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::banner.banner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBillingCalculatorBillingCalculator
  extends Schema.CollectionType {
  collectionName: 'billing_calculators';
  info: {
    singularName: 'billing-calculator';
    pluralName: 'billing-calculators';
    displayName: '\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440\u044B';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    item: Attribute.DynamicZone<
      [
        'calculator.kredit',
        'calculator.vklad',
        'calculator.ipoteka',
        'calculator.depozit'
      ]
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::billing-calculator.billing-calculator',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::billing-calculator.billing-calculator',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBiometricsPageBiometricsPage extends Schema.SingleType {
  collectionName: 'biometrics_pages';
  info: {
    singularName: 'biometrics-page';
    pluralName: 'biometrics-pages';
    displayName: '\u0411\u0438\u043E\u043C\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::biometrics-page.biometrics-page', 'title'> &
      Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    mainImage: Attribute.Media<'images'> & Attribute.Required;
    benefits: Attribute.Component<'components.preimushhestvo-karty', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 8;
        },
        number
      >;
    processingMethods: Attribute.Component<'components.repetitive-with-title'> &
      Attribute.Required;
    infoAndDocsTitle: Attribute.String & Attribute.Required;
    infoAndDocs: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    recommended_products: Attribute.Relation<
      'api::biometrics-page.biometrics-page',
      'oneToMany',
      'api::recommended-product.recommended-product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::biometrics-page.biometrics-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::biometrics-page.biometrics-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBrancheAndAtmBrancheAndAtm extends Schema.CollectionType {
  collectionName: 'branches_and_atms';
  info: {
    singularName: 'branche-and-atm';
    pluralName: 'branches-and-atms';
    displayName: '\u041E\u0442\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0438 \u0431\u0430\u043D\u043A\u043E\u043C\u0430\u0442\u044B\u00A0';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<
      [
        '\u041E\u0444\u0438\u0441',
        '\u0411\u0430\u043D\u043A\u043E\u043C\u0430\u0442',
        '\u0422\u0435\u0440\u043C\u0438\u043D\u0430\u043B'
      ]
    > &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::branche-and-atm.branche-and-atm',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::branche-and-atm.branche-and-atm',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCardCard extends Schema.CollectionType {
  collectionName: 'cards';
  info: {
    singularName: 'card';
    pluralName: 'cards';
    displayName: '\u041A\u0430\u0440\u0442\u044B';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::card.card', 'title'> & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    mainBtnText: Attribute.String & Attribute.Required;
    mainImage: Attribute.Media<'images'> & Attribute.Required;
    conditions: Attribute.Component<'components.usloviya', true> &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 3;
        },
        number
      >;
    benefits: Attribute.Component<'components.preimushhestvo-karty', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 8;
        },
        number
      >;
    processingMethods: Attribute.Component<'components.repetitive-with-title'> &
      Attribute.Required;
    recommended_products: Attribute.Relation<
      'api::card.card',
      'oneToMany',
      'api::recommended-product.recommended-product'
    >;
    infoAndDocs: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    infoAndDocsTitle: Attribute.String & Attribute.Required;
    banner: Attribute.Relation<
      'api::card.card',
      'oneToOne',
      'api::banner.banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::card.card', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::card.card', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiCardPageCardPage extends Schema.SingleType {
  collectionName: 'cards_page';
  info: {
    singularName: 'card-page';
    pluralName: 'cards-page';
    displayName: '\u041A\u0430\u0440\u0442\u044B \u0424\u041B \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::card-page.card-page', 'title'> &
      Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    benefits: Attribute.Component<'components.preimushhestvo-karty', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 8;
        },
        number
      >;
    cards: Attribute.Relation<
      'api::card-page.card-page',
      'oneToMany',
      'api::card.card'
    >;
    additionalServicesTitle: Attribute.String & Attribute.Required;
    infoAndDocs: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    infoAndDocsTitle: Attribute.String & Attribute.Required;
    mainBtnText: Attribute.String & Attribute.Required;
    mainImage: Attribute.Media<'images'> & Attribute.Required;
    recommended_products: Attribute.Relation<
      'api::card-page.card-page',
      'oneToMany',
      'api::recommended-product.recommended-product'
    >;
    additionalUnit1: Attribute.Component<'components.malyj-blok'> &
      Attribute.Required;
    additionalUnit2: Attribute.Component<'components.malyj-blok'> &
      Attribute.Required;
    additionalUnit3: Attribute.Relation<
      'api::card-page.card-page',
      'oneToOne',
      'api::banner.banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::card-page.card-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::card-page.card-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCashManagementCashManagement extends Schema.SingleType {
  collectionName: 'cash_managements';
  info: {
    singularName: 'cash-management';
    pluralName: 'cash-managements';
    displayName: '\u0420\u0430\u0441\u0447\u0435\u0442\u043D\u043E-\u043A\u0430\u0441\u0441\u043E\u0432\u043E\u0435 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::cash-management.cash-management', 'title'>;
    description: Attribute.Text & Attribute.Required;
    mainImage: Attribute.Media<'images'> & Attribute.Required;
    mainBtnText: Attribute.String & Attribute.Required;
    benefits: Attribute.Component<'components.preimushhestvo-karty', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 8;
        },
        number
      >;
    processingMethods: Attribute.Component<'components.repetitive-with-title'> &
      Attribute.Required;
    infoAndDocsTitle: Attribute.String & Attribute.Required;
    infoAndDocs: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    recommended_products: Attribute.Relation<
      'api::cash-management.cash-management',
      'oneToMany',
      'api::recommended-product.recommended-product'
    >;
    banner: Attribute.Relation<
      'api::cash-management.cash-management',
      'oneToOne',
      'api::banner.banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cash-management.cash-management',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::cash-management.cash-management',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCoinsCountryTypeCoinsCountryType
  extends Schema.CollectionType {
  collectionName: 'coins_country_types';
  info: {
    singularName: 'coins-country-type';
    pluralName: 'coins-country-types';
    displayName: '\u041C\u043E\u043D\u0435\u0442\u044B (\u0422\u0438\u043F\u044B \u0441\u0442\u0440\u0430\u043D)';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::coins-country-type.coins-country-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::coins-country-type.coins-country-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCoinsCurrencyTypeCoinsCurrencyType
  extends Schema.CollectionType {
  collectionName: 'coins_currency_types';
  info: {
    singularName: 'coins-currency-type';
    pluralName: 'coins-currency-types';
    displayName: '\u041C\u043E\u043D\u0435\u0442\u044B (\u0422\u0438\u043F\u044B \u0432\u0430\u043B\u044E\u0442)';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::coins-currency-type.coins-currency-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::coins-currency-type.coins-currency-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCoinsMetalTypeCoinsMetalType extends Schema.CollectionType {
  collectionName: 'coins_metal_types';
  info: {
    singularName: 'coins-metal-type';
    pluralName: 'coins-metal-types';
    displayName: '\u041C\u043E\u043D\u0435\u0442\u044B (\u0422\u0438\u043F\u044B \u043C\u0435\u0442\u0430\u043B\u043B\u043E\u0432)';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::coins-metal-type.coins-metal-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::coins-metal-type.coins-metal-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCoinsPageCoinsPage extends Schema.SingleType {
  collectionName: 'coins_pages';
  info: {
    singularName: 'coins-page';
    pluralName: 'coins-pages';
    displayName: '\u041C\u043E\u043D\u0435\u0442\u044B \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::coins-page.coins-page', 'title'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::coins-page.coins-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::coins-page.coins-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCorporateCardsPageCorporateCardsPage
  extends Schema.SingleType {
  collectionName: 'corporate_cards_pages';
  info: {
    singularName: 'corporate-cards-page';
    pluralName: 'corporate-cards-pages';
    displayName: '\u041A\u0430\u0440\u0442\u044B \u042E\u041B \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<
      'api::corporate-cards-page.corporate-cards-page',
      'title'
    > &
      Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    mainImage: Attribute.Media<'images'> & Attribute.Required;
    mainBtnText: Attribute.String;
    cards: Attribute.Relation<
      'api::corporate-cards-page.corporate-cards-page',
      'oneToMany',
      'api::card.card'
    >;
    processingMethods: Attribute.Component<'components.repetitive-with-title'> &
      Attribute.Required;
    infoAndDocsTitle: Attribute.String & Attribute.Required;
    infoAndDocs: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    additionalUnit1: Attribute.Component<'components.malyj-blok'> &
      Attribute.Required;
    additionalUnit2: Attribute.Component<'components.malyj-blok'> &
      Attribute.Required;
    recommended_products: Attribute.Relation<
      'api::corporate-cards-page.corporate-cards-page',
      'oneToMany',
      'api::recommended-product.recommended-product'
    >;
    additionalUnit3: Attribute.Relation<
      'api::corporate-cards-page.corporate-cards-page',
      'oneToOne',
      'api::banner.banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::corporate-cards-page.corporate-cards-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::corporate-cards-page.corporate-cards-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCurrencyCurrency extends Schema.CollectionType {
  collectionName: 'currencies';
  info: {
    singularName: 'currency';
    pluralName: 'currencies';
    displayName: '\u0412\u0430\u043B\u044E\u0442\u044B';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    units: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<1>;
    purchase: Attribute.Float &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    sale: Attribute.Float &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    centralBank: Attribute.Float &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    icon: Attribute.Media<'images'> & Attribute.Required;
    purchasePrevious: Attribute.Float;
    salePrevious: Attribute.Float;
    centralBankPrevious: Attribute.Float;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::currency.currency',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::currency.currency',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCurrencyControlPageCurrencyControlPage
  extends Schema.SingleType {
  collectionName: 'currency_control_pages';
  info: {
    singularName: 'currency-control-page';
    pluralName: 'currency-control-pages';
    displayName: '\u0412\u0430\u043B\u044E\u0442\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<
      'api::currency-control-page.currency-control-page',
      'title'
    > &
      Attribute.Required;
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    infoAndDocsTitle: Attribute.String & Attribute.Required;
    infoAndDocs: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    recommended_products: Attribute.Relation<
      'api::currency-control-page.currency-control-page',
      'oneToMany',
      'api::recommended-product.recommended-product'
    >;
    banner: Attribute.Relation<
      'api::currency-control-page.currency-control-page',
      'oneToOne',
      'api::banner.banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::currency-control-page.currency-control-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::currency-control-page.currency-control-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCurrencyExchangeCurrencyExchange extends Schema.SingleType {
  collectionName: 'currencies_exchange';
  info: {
    singularName: 'currency-exchange';
    pluralName: 'currencies-exchange';
    displayName: '\u041E\u0431\u043C\u0435\u043D \u0412\u0430\u043B\u044E\u0442 \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::currency-exchange.currency-exchange', 'title'> &
      Attribute.Required;
    currencies: Attribute.Relation<
      'api::currency-exchange.currency-exchange',
      'oneToMany',
      'api::currency.currency'
    >;
    precious_metals: Attribute.Relation<
      'api::currency-exchange.currency-exchange',
      'oneToMany',
      'api::precious-metal.precious-metal'
    >;
    currencyTableDescription: Attribute.String & Attribute.Required;
    metalsTableDescription: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::currency-exchange.currency-exchange',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::currency-exchange.currency-exchange',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDepositDeposit extends Schema.CollectionType {
  collectionName: 'deposits';
  info: {
    singularName: 'deposit';
    pluralName: 'deposits';
    displayName: '\u0414\u0435\u043F\u043E\u0437\u0438\u0442\u044B';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::deposit.deposit', 'title'> & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    mainImage: Attribute.Media<'images'> & Attribute.Required;
    mainBtnText: Attribute.String & Attribute.Required;
    conditions: Attribute.Component<'components.usloviya', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 3;
        },
        number
      >;
    benefits: Attribute.Component<'components.preimushhestvo-karty', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 8;
        },
        number
      >;
    depositRatesTitle: Attribute.String & Attribute.Required;
    depositRatesBlock: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    calculator: Attribute.Relation<
      'api::deposit.deposit',
      'oneToOne',
      'api::billing-calculator.billing-calculator'
    >;
    processingMethods: Attribute.Component<'components.repetitive-with-title'> &
      Attribute.Required;
    infoAndDocsTitle: Attribute.String & Attribute.Required;
    infoAndDocs: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    recommended_products: Attribute.Relation<
      'api::deposit.deposit',
      'oneToMany',
      'api::recommended-product.recommended-product'
    >;
    banner: Attribute.Relation<
      'api::deposit.deposit',
      'oneToOne',
      'api::banner.banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::deposit.deposit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::deposit.deposit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDepositsPageDepositsPage extends Schema.SingleType {
  collectionName: 'deposits_pages';
  info: {
    singularName: 'deposits-page';
    pluralName: 'deposits-pages';
    displayName: '\u0414\u0435\u043F\u043E\u0437\u0438\u0442\u044B \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::deposits-page.deposits-page', 'title'> &
      Attribute.Required;
    description: Attribute.String & Attribute.Required;
    mainImage: Attribute.Media<'images', true> & Attribute.Required;
    mainBtnText: Attribute.String & Attribute.Required;
    benefits: Attribute.Component<'components.preimushhestvo-karty', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 8;
        },
        number
      >;
    deposits: Attribute.Relation<
      'api::deposits-page.deposits-page',
      'oneToMany',
      'api::deposit.deposit'
    >;
    calculator: Attribute.Relation<
      'api::deposits-page.deposits-page',
      'oneToOne',
      'api::billing-calculator.billing-calculator'
    >;
    processingMethods: Attribute.Component<'components.repetitive-with-title'> &
      Attribute.Required;
    infoAndDocsTitle: Attribute.String & Attribute.Required;
    infoAndDocs: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    recommended_products: Attribute.Relation<
      'api::deposits-page.deposits-page',
      'oneToMany',
      'api::recommended-product.recommended-product'
    >;
    banner: Attribute.Relation<
      'api::deposits-page.deposits-page',
      'oneToOne',
      'api::banner.banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::deposits-page.deposits-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::deposits-page.deposits-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDisclosuresPageDisclosuresPage extends Schema.SingleType {
  collectionName: 'disclosures_pages';
  info: {
    singularName: 'disclosures-page';
    pluralName: 'disclosures-pages';
    displayName: '\u0420\u0430\u0441\u043A\u0440\u044B\u0442\u0438\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::disclosures-page.disclosures-page', 'title'> &
      Attribute.Required;
    documents_rsa: Attribute.Relation<
      'api::disclosures-page.disclosures-page',
      'oneToMany',
      'api::document.document'
    >;
    documents_ifrs: Attribute.Relation<
      'api::disclosures-page.disclosures-page',
      'oneToMany',
      'api::document.document'
    >;
    documents_objectives: Attribute.Relation<
      'api::disclosures-page.disclosures-page',
      'oneToMany',
      'api::document.document'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::disclosures-page.disclosures-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::disclosures-page.disclosures-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDocumentDocument extends Schema.CollectionType {
  collectionName: 'documents';
  info: {
    singularName: 'document';
    pluralName: 'documents';
    displayName: '\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    document: Attribute.Media<'files'> & Attribute.Required;
    datePosted: Attribute.Date;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::document.document',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::document.document',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEncashmentPageEncashmentPage extends Schema.SingleType {
  collectionName: 'encashment_pages';
  info: {
    singularName: 'encashment-page';
    pluralName: 'encashment-pages';
    displayName: '\u0418\u043D\u043A\u0430\u0441\u0441\u0430\u0446\u0438\u044F \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::encashment-page.encashment-page', 'title'> &
      Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    mainImage: Attribute.Media<'images'> & Attribute.Required;
    mainBtnText: Attribute.String & Attribute.Required;
    benefits: Attribute.Component<'components.preimushhestvo-karty', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 8;
        },
        number
      >;
    processingMethods: Attribute.Component<'components.repetitive-with-title'> &
      Attribute.Required;
    infoAndDocsTitle: Attribute.String & Attribute.Required;
    infoAndDocs: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    recommended_products: Attribute.Relation<
      'api::encashment-page.encashment-page',
      'oneToMany',
      'api::recommended-product.recommended-product'
    >;
    banner: Attribute.Relation<
      'api::encashment-page.encashment-page',
      'oneToOne',
      'api::banner.banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::encashment-page.encashment-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::encashment-page.encashment-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFinancialSecurityPageFinancialSecurityPage
  extends Schema.SingleType {
  collectionName: 'financial_security_pages';
  info: {
    singularName: 'financial-security-page';
    pluralName: 'financial-security-pages';
    displayName: '\u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u0430\u044F \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
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
    slug: Attribute.UID<
      'api::financial-security-page.financial-security-page',
      'title'
    > &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::financial-security-page.financial-security-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::financial-security-page.financial-security-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFooterLinkFooterLink extends Schema.CollectionType {
  collectionName: 'footer_links';
  info: {
    singularName: 'footer-link';
    pluralName: 'footer-links';
    displayName: '\u041F\u043E\u0434\u0432\u0430\u043B (\u0421\u0441\u044B\u043B\u043A\u0438)';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    route: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::footer-link.footer-link',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::footer-link.footer-link',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGeneralInfoGeneralInfo extends Schema.SingleType {
  collectionName: 'general_infos';
  info: {
    singularName: 'general-info';
    pluralName: 'general-infos';
    displayName: '\u041E\u0431\u0449\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    aboutBankTitle: Attribute.String & Attribute.Required;
    aboutBankDescription: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    credentialsTitle: Attribute.String & Attribute.Required;
    credentialsDescription: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    licensesTitle: Attribute.String & Attribute.Required;
    lcenses: Attribute.Relation<
      'api::general-info.general-info',
      'oneToMany',
      'api::license.license'
    >;
    ratingsTitle: Attribute.String & Attribute.Required;
    ratingsUpdateDate: Attribute.Date & Attribute.Required;
    ratings: Attribute.Relation<
      'api::general-info.general-info',
      'oneToMany',
      'api::rating.rating'
    >;
    ratingsDescription: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    auditTitle: Attribute.String & Attribute.Required;
    auditDateUpdate: Attribute.Date & Attribute.Required;
    auditDescription: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    slug: Attribute.UID<'api::general-info.general-info', 'title'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::general-info.general-info',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::general-info.general-info',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGlobalGlobal extends Schema.SingleType {
  collectionName: 'globals';
  info: {
    singularName: 'global';
    pluralName: 'globals';
    displayName: '\u0428\u0430\u043F\u043A\u0430/\u041F\u043E\u0434\u0432\u0430\u043B';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    footer: Attribute.Component<'components.footer'> & Attribute.Required;
    header: Attribute.Component<'components.header'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::global.global',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::global.global',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGoldenCrownPageGoldenCrownPage extends Schema.SingleType {
  collectionName: 'golden_crown_pages';
  info: {
    singularName: 'golden-crown-page';
    pluralName: 'golden-crown-pages';
    displayName: '\u0417\u043E\u043B\u043E\u0442\u0430\u044F \u043A\u043E\u0440\u043E\u043D\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::golden-crown-page.golden-crown-page', 'title'> &
      Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    benefits: Attribute.Component<'components.preimushhestvo-karty', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 8;
        },
        number
      >;
    processingSendMethods: Attribute.Component<'components.repetitive-with-title'> &
      Attribute.Required;
    processingReceiveMethods: Attribute.Component<'components.repetitive-with-title'> &
      Attribute.Required;
    infoAndDocsTitle: Attribute.String & Attribute.Required;
    infoAndDocs: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    recommended_products: Attribute.Relation<
      'api::golden-crown-page.golden-crown-page',
      'oneToMany',
      'api::recommended-product.recommended-product'
    >;
    mainBtnText: Attribute.String & Attribute.Required;
    mainImage: Attribute.Media<'images'> & Attribute.Required;
    banner: Attribute.Relation<
      'api::golden-crown-page.golden-crown-page',
      'oneToOne',
      'api::banner.banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::golden-crown-page.golden-crown-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::golden-crown-page.golden-crown-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHeadOfficeContactsPageHeadOfficeContactsPage
  extends Schema.SingleType {
  collectionName: 'head_office_contacts_pages';
  info: {
    singularName: 'head-office-contacts-page';
    pluralName: 'head-office-contacts-pages';
    displayName: '\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B \u0433\u043E\u043B\u043E\u0432\u043D\u043E\u0433\u043E \u043E\u0444\u0438\u0441\u0430 \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<
      'api::head-office-contacts-page.head-office-contacts-page',
      'title'
    > &
      Attribute.Required;
    address: Attribute.String & Attribute.Required;
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::head-office-contacts-page.head-office-contacts-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::head-office-contacts-page.head-office-contacts-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHeaderLinkHeaderLink extends Schema.CollectionType {
  collectionName: 'header_links';
  info: {
    singularName: 'header-link';
    pluralName: 'header-links';
    displayName: '\u0428\u0430\u043F\u043A\u0430 (\u0421\u0441\u044B\u043B\u043A\u0438)';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    allProductsRoute: Attribute.String & Attribute.Required;
    allProductTitle: Attribute.String & Attribute.Required;
    products: Attribute.DynamicZone<
      [
        'header.vklady',
        'header.kredity',
        'header.ipoteka',
        'header.karty',
        'header.scheta',
        'header.depozity',
        'header.staticheskaya-ssylka'
      ]
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::header-link.header-link',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::header-link.header-link',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHmbOnlineBusinessPageHmbOnlineBusinessPage
  extends Schema.SingleType {
  collectionName: 'hmb_online_business_pages';
  info: {
    singularName: 'hmb-online-business-page';
    pluralName: 'hmb-online-business-pages';
    displayName: '\u0425\u041C\u0411-\u043E\u043D\u043B\u0430\u0439\u043D \u042E\u041B \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<
      'api::hmb-online-business-page.hmb-online-business-page',
      'title'
    > &
      Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    mainImage: Attribute.Media<'images'> & Attribute.Required;
    benefits: Attribute.Component<'components.preimushhestvo-karty', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 8;
        },
        number
      >;
    CapabilitiesBlock1: Attribute.Component<'common.text-description'> &
      Attribute.Required;
    CapabilitiesBlock2: Attribute.Component<'common.text-description'> &
      Attribute.Required;
    CapabilitiesBlock3: Attribute.Component<'common.text-description'> &
      Attribute.Required;
    infoAndDocsTitle: Attribute.String & Attribute.Required;
    infoAndDocs: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    recommended_products: Attribute.Relation<
      'api::hmb-online-business-page.hmb-online-business-page',
      'oneToMany',
      'api::recommended-product.recommended-product'
    >;
    banner: Attribute.Relation<
      'api::hmb-online-business-page.hmb-online-business-page',
      'oneToOne',
      'api::banner.banner'
    >;
    appStoreLink: Attribute.String & Attribute.Required;
    playMarketLink: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::hmb-online-business-page.hmb-online-business-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::hmb-online-business-page.hmb-online-business-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHmbOnlinePageHmbOnlinePage extends Schema.SingleType {
  collectionName: 'hmb_online_pages';
  info: {
    singularName: 'hmb-online-page';
    pluralName: 'hmb-online-pages';
    displayName: '\u0425\u041C\u0411-\u043E\u043D\u043B\u0430\u0439\u043D \u0424\u041B \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::hmb-online-page.hmb-online-page', 'title'> &
      Attribute.Required;
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    mainImage: Attribute.Media<'images'> & Attribute.Required;
    benefits: Attribute.Component<'components.preimushhestvo-karty', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 8;
        },
        number
      >;
    processingMethods: Attribute.Component<'components.repetitive-with-title'> &
      Attribute.Required;
    infoAndDocsTitle: Attribute.String & Attribute.Required;
    infoAndDocs: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    recommended_products: Attribute.Relation<
      'api::hmb-online-page.hmb-online-page',
      'oneToMany',
      'api::recommended-product.recommended-product'
    >;
    appStoreLink: Attribute.String & Attribute.Required;
    playMarketLink: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::hmb-online-page.hmb-online-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::hmb-online-page.hmb-online-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHmbSquarePageHmbSquarePage extends Schema.SingleType {
  collectionName: 'hmb_squares_page';
  info: {
    singularName: 'hmb-square-page';
    pluralName: 'hmb-squares-page';
    displayName: '\u0425\u041C\u0411-\u043A\u0432\u0430\u0440\u0442\u043F\u043B\u0430\u0442\u0430 \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::hmb-square-page.hmb-square-page', 'title'> &
      Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    mainBtnText: Attribute.String & Attribute.Required;
    mainImage: Attribute.Media<'images'> & Attribute.Required;
    benefits: Attribute.Component<'components.preimushhestvo-karty', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 8;
        },
        number
      >;
    processingMethods: Attribute.Component<'components.repetitive-with-title'> &
      Attribute.Required;
    infoAndDocsTitle: Attribute.String & Attribute.Required;
    infoAndDocs: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    recommended_products: Attribute.Relation<
      'api::hmb-square-page.hmb-square-page',
      'oneToMany',
      'api::recommended-product.recommended-product'
    >;
    banner: Attribute.Relation<
      'api::hmb-square-page.hmb-square-page',
      'oneToOne',
      'api::banner.banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::hmb-square-page.hmb-square-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::hmb-square-page.hmb-square-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIbankPageIbankPage extends Schema.SingleType {
  collectionName: 'ibank_pages';
  info: {
    singularName: 'ibank-page';
    pluralName: 'ibank-pages';
    displayName: '\u00AB\u041A\u043B\u0438\u0435\u043D\u0442-\u0411\u0430\u043D\u043A\u00BB (IBank) \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::ibank-page.ibank-page', 'title'> &
      Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    mainImage: Attribute.Media<'images'> & Attribute.Required;
    mainBtnText: Attribute.String & Attribute.Required;
    benefits: Attribute.Component<'components.preimushhestvo-karty', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 8;
        },
        number
      >;
    CapabilitiesBlock1: Attribute.Component<'common.text-description'> &
      Attribute.Required;
    CapabilitiesBlock2: Attribute.Component<'common.text-description'> &
      Attribute.Required;
    CapabilitiesBlock3: Attribute.Component<'common.text-description'> &
      Attribute.Required;
    CapabilitiesBlock4: Attribute.Component<'common.text-description'> &
      Attribute.Required;
    CapabilitiesBlock5: Attribute.Component<'common.text-description'> &
      Attribute.Required;
    infoAndDocsTitle: Attribute.String & Attribute.Required;
    infoAndDocs: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    recommended_products: Attribute.Relation<
      'api::ibank-page.ibank-page',
      'oneToMany',
      'api::recommended-product.recommended-product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ibank-page.ibank-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ibank-page.ibank-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiInterTransfersSwiftPageInterTransfersSwiftPage
  extends Schema.SingleType {
  collectionName: 'inter_transfers_swift_pages';
  info: {
    singularName: 'inter-transfers-swift-page';
    pluralName: 'inter-transfers-swift-pages';
    displayName: '\u041C\u0435\u0436. \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u044B SWIFT \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<
      'api::inter-transfers-swift-page.inter-transfers-swift-page',
      'title'
    > &
      Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    mainImage: Attribute.Media<'images'> & Attribute.Required;
    benefits: Attribute.Component<'components.preimushhestvo-karty', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 8;
        },
        number
      >;
    rightSideBlock: Attribute.Component<'components.text-image-block'> &
      Attribute.Required;
    leftSideBlock: Attribute.Component<'components.text-image-block'> &
      Attribute.Required;
    infoAndDocsTitle: Attribute.String & Attribute.Required;
    infoAndDocs: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    recommended_products: Attribute.Relation<
      'api::inter-transfers-swift-page.inter-transfers-swift-page',
      'oneToMany',
      'api::recommended-product.recommended-product'
    >;
    banner: Attribute.Relation<
      'api::inter-transfers-swift-page.inter-transfers-swift-page',
      'oneToOne',
      'api::banner.banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::inter-transfers-swift-page.inter-transfers-swift-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::inter-transfers-swift-page.inter-transfers-swift-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiInvestmentInvestment extends Schema.CollectionType {
  collectionName: 'investments';
  info: {
    singularName: 'investment';
    pluralName: 'investments';
    displayName: '\u0412\u043A\u043B\u0430\u0434\u044B';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::investment.investment', 'title'> &
      Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    mainBtnText: Attribute.String & Attribute.Required;
    mainImage: Attribute.Media<'images'> & Attribute.Required;
    passportBtnText: Attribute.String & Attribute.Required;
    document: Attribute.Relation<
      'api::investment.investment',
      'oneToOne',
      'api::document.document'
    >;
    conditions: Attribute.Component<'components.usloviya', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 3;
        },
        number
      >;
    investmentsInfoTitle: Attribute.String & Attribute.Required;
    investmentsInfo: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    calculator: Attribute.Relation<
      'api::investment.investment',
      'oneToOne',
      'api::billing-calculator.billing-calculator'
    >;
    processingMethods: Attribute.Component<'components.repetitive-with-title'> &
      Attribute.Required;
    infoAndDocsTitle: Attribute.String & Attribute.Required;
    infoAndDocs: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    depositInsurance: Attribute.Component<'common.title-image'> &
      Attribute.Required;
    recommended_products: Attribute.Relation<
      'api::investment.investment',
      'oneToMany',
      'api::recommended-product.recommended-product'
    >;
    banner: Attribute.Relation<
      'api::investment.investment',
      'oneToOne',
      'api::banner.banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::investment.investment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::investment.investment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiInvestmentsPageInvestmentsPage extends Schema.SingleType {
  collectionName: 'investments_pages';
  info: {
    singularName: 'investments-page';
    pluralName: 'investments-pages';
    displayName: '\u0412\u043A\u043B\u0430\u0434\u044B \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::investments-page.investments-page', 'title'> &
      Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    mainImage: Attribute.Media<'images'> & Attribute.Required;
    mainBtnText: Attribute.String & Attribute.Required;
    investments: Attribute.Relation<
      'api::investments-page.investments-page',
      'oneToMany',
      'api::investment.investment'
    >;
    calculator: Attribute.Relation<
      'api::investments-page.investments-page',
      'oneToOne',
      'api::billing-calculator.billing-calculator'
    >;
    processingMethods: Attribute.Component<'components.repetitive-with-title'> &
      Attribute.Required;
    infoAndDocsTitle: Attribute.String & Attribute.Required;
    infoAndDocs: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    depositInsurance: Attribute.Component<'common.title-image'> &
      Attribute.Required;
    recommended_products: Attribute.Relation<
      'api::investments-page.investments-page',
      'oneToMany',
      'api::recommended-product.recommended-product'
    >;
    banner: Attribute.Relation<
      'api::investments-page.investments-page',
      'oneToOne',
      'api::banner.banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::investments-page.investments-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::investments-page.investments-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLicenseLicense extends Schema.CollectionType {
  collectionName: 'licenses';
  info: {
    singularName: 'license';
    pluralName: 'licenses';
    displayName: '\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u0438';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::license.license',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::license.license',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLoanLoan extends Schema.CollectionType {
  collectionName: 'loans';
  info: {
    singularName: 'loan';
    pluralName: 'loans';
    displayName: '\u041A\u0440\u0435\u0434\u0438\u0442\u044B';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::loan.loan', 'title'> & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    mainImage: Attribute.Media<'images'> & Attribute.Required;
    mainBtnText: Attribute.String & Attribute.Required;
    conditions: Attribute.Component<'components.usloviya', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 3;
        },
        number
      >;
    benefits: Attribute.Component<'components.preimushhestvo-karty', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 8;
        },
        number
      >;
    calculator: Attribute.Relation<
      'api::loan.loan',
      'oneToOne',
      'api::billing-calculator.billing-calculator'
    >;
    processingMethods: Attribute.Component<'components.repetitive-with-title'> &
      Attribute.Required;
    infoAndDocsTitle: Attribute.String & Attribute.Required;
    infoAndDocs: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    recommended_products: Attribute.Relation<
      'api::loan.loan',
      'oneToMany',
      'api::recommended-product.recommended-product'
    >;
    banner: Attribute.Relation<
      'api::loan.loan',
      'oneToOne',
      'api::banner.banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::loan.loan', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::loan.loan', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiLoansCorporatePageLoansCorporatePage
  extends Schema.SingleType {
  collectionName: 'loans_corporate_pages';
  info: {
    singularName: 'loans-corporate-page';
    pluralName: 'loans-corporate-pages';
    displayName: '\u041A\u0440\u0435\u0434\u0438\u0442\u044B \u042E\u041B \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<
      'api::loans-corporate-page.loans-corporate-page',
      'title'
    > &
      Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    mainImage: Attribute.Media<'images'> & Attribute.Required;
    mainBtnText: Attribute.String & Attribute.Required;
    benefits: Attribute.Component<'components.preimushhestvo-karty', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 8;
        },
        number
      >;
    loans: Attribute.Relation<
      'api::loans-corporate-page.loans-corporate-page',
      'oneToOne',
      'api::loan.loan'
    >;
    processingMethods: Attribute.Component<'components.repetitive-with-title'> &
      Attribute.Required;
    infoAndDocsTitle: Attribute.String & Attribute.Required;
    infoAndDocs: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    recommended_products: Attribute.Relation<
      'api::loans-corporate-page.loans-corporate-page',
      'oneToMany',
      'api::recommended-product.recommended-product'
    >;
    banner: Attribute.Relation<
      'api::loans-corporate-page.loans-corporate-page',
      'oneToOne',
      'api::banner.banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::loans-corporate-page.loans-corporate-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::loans-corporate-page.loans-corporate-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLoansIndividualsPageLoansIndividualsPage
  extends Schema.SingleType {
  collectionName: 'loans_individuals_pages';
  info: {
    singularName: 'loans-individuals-page';
    pluralName: 'loans-individuals-pages';
    displayName: '\u041A\u0440\u0435\u0434\u0438\u0442\u044B \u0424\u041B \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<
      'api::loans-individuals-page.loans-individuals-page',
      'title'
    > &
      Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    mainBtnText: Attribute.String & Attribute.Required;
    mainImage: Attribute.Media<'images'> & Attribute.Required;
    benefits: Attribute.Component<'components.preimushhestvo-karty', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 8;
        },
        number
      >;
    calculator: Attribute.Relation<
      'api::loans-individuals-page.loans-individuals-page',
      'oneToOne',
      'api::billing-calculator.billing-calculator'
    >;
    loans: Attribute.Relation<
      'api::loans-individuals-page.loans-individuals-page',
      'oneToMany',
      'api::loan.loan'
    >;
    processingMethods: Attribute.Component<'components.repetitive-with-title'> &
      Attribute.Required;
    infoAndDocsTitle: Attribute.String & Attribute.Required;
    infoAndDocs: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    recommended_products: Attribute.Relation<
      'api::loans-individuals-page.loans-individuals-page',
      'oneToMany',
      'api::recommended-product.recommended-product'
    >;
    banner: Attribute.Relation<
      'api::loans-individuals-page.loans-individuals-page',
      'oneToOne',
      'api::banner.banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::loans-individuals-page.loans-individuals-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::loans-individuals-page.loans-individuals-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMainJuridicalPageMainJuridicalPage
  extends Schema.SingleType {
  collectionName: 'main_juridical_pages';
  info: {
    singularName: 'main-juridical-page';
    pluralName: 'main-juridical-pages';
    displayName: '\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u042E\u041B \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<
      'api::main-juridical-page.main-juridical-page',
      'title'
    > &
      Attribute.Required;
    slider: Attribute.Relation<
      'api::main-juridical-page.main-juridical-page',
      'oneToMany',
      'api::slider.slider'
    >;
    calculatorsBlockTitle: Attribute.String & Attribute.Required;
    calculatorsBlock: Attribute.DynamicZone<['unit.calculator-field']> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 5;
        },
        number
      >;
    additionalUnit1: Attribute.Component<'components.malyj-blok'> &
      Attribute.Required;
    additionalUnit2: Attribute.Component<'components.malyj-blok'> &
      Attribute.Required;
    additionalUnit3: Attribute.Component<'components.bolshoj-blok'> &
      Attribute.Required;
    additionalUnit4: Attribute.Component<'components.malyj-blok'> &
      Attribute.Required;
    additionalUnit5: Attribute.Component<'components.malyj-blok'> &
      Attribute.Required;
    additionalUnit6: Attribute.Component<'components.bolshoj-blok'> &
      Attribute.Required;
    smallAdditionalBlocks: Attribute.Component<
      'common.text-image-route',
      true
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 4;
          max: 4;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::main-juridical-page.main-juridical-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::main-juridical-page.main-juridical-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMainPageMainPage extends Schema.SingleType {
  collectionName: 'main_pages';
  info: {
    singularName: 'main-page';
    pluralName: 'main-pages';
    displayName: '\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0424\u041B \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::main-page.main-page', 'title'> &
      Attribute.Required;
    slider: Attribute.Relation<
      'api::main-page.main-page',
      'oneToMany',
      'api::slider.slider'
    >;
    calculatorsBlockTitle: Attribute.String & Attribute.Required;
    calculatorsBlock: Attribute.DynamicZone<['unit.calculator-field']> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 5;
        },
        number
      >;
    additionalUnit1: Attribute.Component<'components.malyj-blok'> &
      Attribute.Required;
    additionalUnit2: Attribute.Component<'components.malyj-blok'> &
      Attribute.Required;
    additionalUnit3: Attribute.Component<'components.bolshoj-blok'> &
      Attribute.Required;
    additionalUnit4: Attribute.Component<'components.malyj-blok'> &
      Attribute.Required;
    additionalUnit5: Attribute.Component<'components.malyj-blok'> &
      Attribute.Required;
    smallAdditionalBlocks: Attribute.Component<
      'common.text-image-route',
      true
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 8;
          max: 8;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::main-page.main-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::main-page.main-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMerchantAcquiringPageMerchantAcquiringPage
  extends Schema.SingleType {
  collectionName: 'merchant_acquiring_pages';
  info: {
    singularName: 'merchant-acquiring-page';
    pluralName: 'merchant-acquiring-pages';
    displayName: '\u0422\u043E\u0440\u0433\u043E\u0432\u044B\u0439 \u044D\u043A\u0432\u0430\u0439\u0440\u0438\u043D\u0433 \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<
      'api::merchant-acquiring-page.merchant-acquiring-page',
      'title'
    > &
      Attribute.Required;
    description: Attribute.Text;
    mainImage: Attribute.Media<'images'> & Attribute.Required;
    mainBtnText: Attribute.String & Attribute.Required;
    benefits: Attribute.Component<'components.preimushhestvo-karty', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 8;
        },
        number
      >;
    processingMethods: Attribute.Component<'components.repetitive-with-title'> &
      Attribute.Required;
    infoAndDocsTitle: Attribute.String & Attribute.Required;
    infoAndDocs: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    recommended_products: Attribute.Relation<
      'api::merchant-acquiring-page.merchant-acquiring-page',
      'oneToMany',
      'api::recommended-product.recommended-product'
    >;
    banner: Attribute.Relation<
      'api::merchant-acquiring-page.merchant-acquiring-page',
      'oneToOne',
      'api::banner.banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::merchant-acquiring-page.merchant-acquiring-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::merchant-acquiring-page.merchant-acquiring-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMirPayPageMirPayPage extends Schema.SingleType {
  collectionName: 'mir_pay_pages';
  info: {
    singularName: 'mir-pay-page';
    pluralName: 'mir-pay-pages';
    displayName: 'Mir Pay \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::mir-pay-page.mir-pay-page', 'title'> &
      Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    mainImage: Attribute.Media<'images'> & Attribute.Required;
    mainBtnText: Attribute.String & Attribute.Required;
    conditions: Attribute.Component<'components.usloviya', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 3;
        },
        number
      >;
    benefits: Attribute.Component<'components.preimushhestvo-karty', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 8;
        },
        number
      >;
    processingMethods: Attribute.Component<'components.repetitive-with-title'> &
      Attribute.Required;
    infoAndDocsTitle: Attribute.String & Attribute.Required;
    infoAndDocs: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    recommended_products: Attribute.Relation<
      'api::mir-pay-page.mir-pay-page',
      'oneToMany',
      'api::recommended-product.recommended-product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::mir-pay-page.mir-pay-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::mir-pay-page.mir-pay-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMortgageMortgage extends Schema.CollectionType {
  collectionName: 'mortgages';
  info: {
    singularName: 'mortgage';
    pluralName: 'mortgages';
    displayName: '\u0418\u043F\u043E\u0442\u0435\u043A\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::mortgage.mortgage', 'title'> & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    mainBtnText: Attribute.String & Attribute.Required;
    mainImage: Attribute.Media<'images'> & Attribute.Required;
    conditions: Attribute.Component<'components.usloviya', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 3;
        },
        number
      >;
    benefits: Attribute.Component<'components.preimushhestvo-karty', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 8;
        },
        number
      >;
    calculator: Attribute.Relation<
      'api::mortgage.mortgage',
      'oneToOne',
      'api::billing-calculator.billing-calculator'
    >;
    processingMethods: Attribute.Component<'components.repetitive-with-title'> &
      Attribute.Required;
    infoAndDocsTitle: Attribute.String & Attribute.Required;
    infoAndDocs: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    recommended_products: Attribute.Relation<
      'api::mortgage.mortgage',
      'oneToMany',
      'api::recommended-product.recommended-product'
    >;
    banner: Attribute.Relation<
      'api::mortgage.mortgage',
      'oneToOne',
      'api::banner.banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::mortgage.mortgage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::mortgage.mortgage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMortgagePageMortgagePage extends Schema.SingleType {
  collectionName: 'mortgage_pages';
  info: {
    singularName: 'mortgage-page';
    pluralName: 'mortgage-pages';
    displayName: '\u0418\u043F\u043E\u0442\u0435\u043A\u0430 \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::mortgage-page.mortgage-page', 'title'> &
      Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    mainBtnText: Attribute.String & Attribute.Required;
    mainImage: Attribute.Media<'images'> & Attribute.Required;
    mortgages: Attribute.Relation<
      'api::mortgage-page.mortgage-page',
      'oneToMany',
      'api::mortgage.mortgage'
    >;
    calculator: Attribute.Relation<
      'api::mortgage-page.mortgage-page',
      'oneToOne',
      'api::billing-calculator.billing-calculator'
    >;
    processingMethods: Attribute.Component<'components.repetitive-with-title'> &
      Attribute.Required;
    infoAndDocsTitle: Attribute.String & Attribute.Required;
    infoAndDocs: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    recommended_products: Attribute.Relation<
      'api::mortgage-page.mortgage-page',
      'oneToMany',
      'api::recommended-product.recommended-product'
    >;
    banner: Attribute.Relation<
      'api::mortgage-page.mortgage-page',
      'oneToOne',
      'api::banner.banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::mortgage-page.mortgage-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::mortgage-page.mortgage-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNewsCollectionNewsCollection extends Schema.CollectionType {
  collectionName: 'news_collections';
  info: {
    singularName: 'news-collection';
    pluralName: 'news-collections';
    displayName: '\u041D\u043E\u0432\u043E\u0441\u0442\u0438';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    title: Attribute.String & Attribute.Required;
    Tag: Attribute.Relation<
      'api::news-collection.news-collection',
      'manyToMany',
      'api::tage-news-collection.tage-news-collection'
    >;
    slug: Attribute.UID<'api::news-collection.news-collection', 'title'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::news-collection.news-collection',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::news-collection.news-collection',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNewsPageNewsPage extends Schema.SingleType {
  collectionName: 'news_pages';
  info: {
    singularName: 'news-page';
    pluralName: 'news-pages';
    displayName: '\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    bannerTitle: Attribute.String & Attribute.Required;
    bannerSubtitle: Attribute.String;
    bannerBtnText: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::news-page.news-page', 'title'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::news-page.news-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::news-page.news-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPaymentsByQrCodePagePaymentsByQrCodePage
  extends Schema.SingleType {
  collectionName: 'payments_by_qr_code_pages';
  info: {
    singularName: 'payments-by-qr-code-page';
    pluralName: 'payments-by-qr-code-pages';
    displayName: '\u041F\u0440\u0438\u0435\u043C \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439 \u043F\u043E QR-\u043A\u043E\u0434\u0443 \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<
      'api::payments-by-qr-code-page.payments-by-qr-code-page',
      'title'
    > &
      Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    mainImage: Attribute.Media<'images'> & Attribute.Required;
    mainBtnText: Attribute.String & Attribute.Required;
    benefits: Attribute.Component<'components.preimushhestvo-karty', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 8;
        },
        number
      >;
    processingMethods1: Attribute.Component<'components.repetitive-with-title'> &
      Attribute.Required;
    leftSideBlock: Attribute.Component<'components.text-image-block'> &
      Attribute.Required;
    rightSideBlock: Attribute.Component<'components.text-image-block'> &
      Attribute.Required;
    processingMethods2: Attribute.Component<'components.repetitive-with-title'> &
      Attribute.Required;
    infoAndDocsTitle: Attribute.String & Attribute.Required;
    infoAndDocs: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    recommended_products: Attribute.Relation<
      'api::payments-by-qr-code-page.payments-by-qr-code-page',
      'oneToMany',
      'api::recommended-product.recommended-product'
    >;
    banner: Attribute.Relation<
      'api::payments-by-qr-code-page.payments-by-qr-code-page',
      'oneToOne',
      'api::banner.banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::payments-by-qr-code-page.payments-by-qr-code-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::payments-by-qr-code-page.payments-by-qr-code-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPreciousMetalPreciousMetal extends Schema.CollectionType {
  collectionName: 'precious_metals';
  info: {
    singularName: 'precious-metal';
    pluralName: 'precious-metals';
    displayName: '\u0414\u0440\u0430\u0433. \u043C\u0435\u0442\u0430\u043B\u043B\u044B';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    grams: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<1>;
    purchase: Attribute.Float &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    sale: Attribute.Float &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    centralBank: Attribute.Float &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    icon: Attribute.Media<'images'> & Attribute.Required;
    purchasePrevious: Attribute.Float;
    salePrevious: Attribute.Float;
    centralBankPrevious: Attribute.Float;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::precious-metal.precious-metal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::precious-metal.precious-metal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPreciousMetalCoinPreciousMetalCoin
  extends Schema.CollectionType {
  collectionName: 'precious_metal_coins';
  info: {
    singularName: 'precious-metal-coin';
    pluralName: 'precious-metal-coins';
    displayName: '\u041C\u043E\u043D\u0435\u0442\u044B';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    icon: Attribute.Media<'images'> & Attribute.Required;
    weight: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    currencyType: Attribute.Relation<
      'api::precious-metal-coin.precious-metal-coin',
      'oneToOne',
      'api::coins-currency-type.coins-currency-type'
    >;
    denomination: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    metalType: Attribute.Relation<
      'api::precious-metal-coin.precious-metal-coin',
      'oneToOne',
      'api::coins-metal-type.coins-metal-type'
    >;
    assay: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    countryType: Attribute.Relation<
      'api::precious-metal-coin.precious-metal-coin',
      'oneToOne',
      'api::coins-country-type.coins-country-type'
    >;
    price: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::precious-metal-coin.precious-metal-coin',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::precious-metal-coin.precious-metal-coin',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRatingRating extends Schema.CollectionType {
  collectionName: 'ratings';
  info: {
    singularName: 'rating';
    pluralName: 'ratings';
    displayName: '\u0420\u0435\u0439\u0442\u0438\u043D\u0433\u0438';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::rating.rating',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::rating.rating',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRecommendedProductRecommendedProduct
  extends Schema.CollectionType {
  collectionName: 'recommended_products';
  info: {
    singularName: 'recommended-product';
    pluralName: 'recommended-products';
    displayName: '\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
    route: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::recommended-product.recommended-product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::recommended-product.recommended-product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSafeDepositPageSafeDepositPage extends Schema.SingleType {
  collectionName: 'safe_deposit_pages';
  info: {
    singularName: 'safe-deposit-page';
    pluralName: 'safe-deposit-pages';
    displayName: '\u0410\u0440\u0435\u043D\u0434\u0430 \u0441\u0435\u0439\u0444\u043E\u0432\u044B\u0445 \u044F\u0447\u0435\u0435\u043A \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::safe-deposit-page.safe-deposit-page', 'title'> &
      Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    mainImage: Attribute.Media<'images'> & Attribute.Required;
    benefits: Attribute.Component<'components.preimushhestvo-karty', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 8;
        },
        number
      >;
    processingMethods: Attribute.Component<'components.repetitive-with-title'> &
      Attribute.Required;
    infoAndDocsTitle: Attribute.String & Attribute.Required;
    infoAndDocs: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    recommended_products: Attribute.Relation<
      'api::safe-deposit-page.safe-deposit-page',
      'oneToMany',
      'api::recommended-product.recommended-product'
    >;
    banner: Attribute.Relation<
      'api::safe-deposit-page.safe-deposit-page',
      'oneToOne',
      'api::banner.banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::safe-deposit-page.safe-deposit-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::safe-deposit-page.safe-deposit-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSalaryProjectsPageSalaryProjectsPage
  extends Schema.SingleType {
  collectionName: 'salary_projects_pages';
  info: {
    singularName: 'salary-projects-page';
    pluralName: 'salary-projects-pages';
    displayName: '\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<
      'api::salary-projects-page.salary-projects-page',
      'title'
    > &
      Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    mainImage: Attribute.Media<'images'> & Attribute.Required;
    mainBtnText: Attribute.String & Attribute.Required;
    benefits: Attribute.Component<'components.preimushhestvo-karty', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 8;
        },
        number
      >;
    processingMethods: Attribute.Component<'components.repetitive-with-title'> &
      Attribute.Required;
    infoAndDocsTitle: Attribute.String & Attribute.Required;
    infoAndDocs: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    recommended_products: Attribute.Relation<
      'api::salary-projects-page.salary-projects-page',
      'oneToMany',
      'api::recommended-product.recommended-product'
    >;
    banner: Attribute.Relation<
      'api::salary-projects-page.salary-projects-page',
      'oneToOne',
      'api::banner.banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::salary-projects-page.salary-projects-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::salary-projects-page.salary-projects-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSliderSlider extends Schema.CollectionType {
  collectionName: 'sliders';
  info: {
    singularName: 'slider';
    pluralName: 'sliders';
    displayName: '\u0421\u043B\u0430\u0439\u0434\u0435\u0440';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::slider.slider',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::slider.slider',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSmsNotificationSmsNotification extends Schema.SingleType {
  collectionName: 'sms_notifications';
  info: {
    singularName: 'sms-notification';
    pluralName: 'sms-notifications';
    displayName: '\u0421\u041C\u0421-\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::sms-notification.sms-notification', 'title'> &
      Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    mainImage: Attribute.Media<'images'> & Attribute.Required;
    conditions: Attribute.Component<'components.usloviya', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 3;
        },
        number
      >;
    benefits: Attribute.Component<'components.preimushhestvo-karty', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 8;
        },
        number
      >;
    processingMethods: Attribute.Component<'components.repetitive-with-title'> &
      Attribute.Required;
    infoAndDocsTitle: Attribute.String & Attribute.Required;
    infoAndDocs: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    recommended_products: Attribute.Relation<
      'api::sms-notification.sms-notification',
      'oneToMany',
      'api::recommended-product.recommended-product'
    >;
    banner: Attribute.Relation<
      'api::sms-notification.sms-notification',
      'oneToOne',
      'api::banner.banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sms-notification.sms-notification',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::sms-notification.sms-notification',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSpbPageSpbPage extends Schema.SingleType {
  collectionName: 'spb_pages';
  info: {
    singularName: 'spb-page';
    pluralName: 'spb-pages';
    displayName: '\u0421\u041F\u0411 \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::spb-page.spb-page', 'title'> & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    mainImage: Attribute.Media<'images'> & Attribute.Required;
    mainBtnText: Attribute.String & Attribute.Required;
    benefits: Attribute.Component<'components.preimushhestvo-karty', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 8;
        },
        number
      >;
    processingMethods: Attribute.Component<'components.repetitive-with-title'> &
      Attribute.Required;
    infoAndDocsTitle: Attribute.String & Attribute.Required;
    infoAndDocs: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    recommended_products: Attribute.Relation<
      'api::spb-page.spb-page',
      'oneToMany',
      'api::recommended-product.recommended-product'
    >;
    banner: Attribute.Relation<
      'api::spb-page.spb-page',
      'oneToOne',
      'api::banner.banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::spb-page.spb-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::spb-page.spb-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTageNewsCollectionTageNewsCollection
  extends Schema.CollectionType {
  collectionName: 'tage_news_collections';
  info: {
    singularName: 'tage-news-collection';
    pluralName: 'tage-news-collections';
    displayName: '\u041D\u043E\u0432\u043E\u0441\u0442\u0438 (\u0422\u0435\u0433\u0438)';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    News: Attribute.Relation<
      'api::tage-news-collection.tage-news-collection',
      'manyToMany',
      'api::news-collection.news-collection'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::tage-news-collection.tage-news-collection',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::tage-news-collection.tage-news-collection',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTransferCardToCardPageTransferCardToCardPage
  extends Schema.SingleType {
  collectionName: 'transfer_card_to_card_pages';
  info: {
    singularName: 'transfer-card-to-card-page';
    pluralName: 'transfer-card-to-card-pages';
    displayName: '\u041F\u0435\u0440\u0435\u0432\u043E\u0434 \u0441 \u043A\u0430\u0440\u0442\u044B \u043D\u0430 \u043A\u0430\u0440\u0442\u0443 \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<
      'api::transfer-card-to-card-page.transfer-card-to-card-page',
      'title'
    > &
      Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    mainImage: Attribute.Media<'images'> & Attribute.Required;
    mainBtnText: Attribute.String & Attribute.Required;
    benefits: Attribute.Component<'components.preimushhestvo-karty', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 8;
        },
        number
      >;
    processingMethods: Attribute.Component<'components.repetitive-with-title'> &
      Attribute.Required;
    infoAndDocsTitle: Attribute.String & Attribute.Required;
    infoAndDocs: Attribute.DynamicZone<
      ['unit.dokumentami', 'unit.tekstom', 'unit.spojlery']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    recommended_products: Attribute.Relation<
      'api::transfer-card-to-card-page.transfer-card-to-card-page',
      'oneToMany',
      'api::recommended-product.recommended-product'
    >;
    banner: Attribute.Relation<
      'api::transfer-card-to-card-page.transfer-card-to-card-page',
      'oneToOne',
      'api::banner.banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::transfer-card-to-card-page.transfer-card-to-card-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::transfer-card-to-card-page.transfer-card-to-card-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVacanciesPageVacanciesPage extends Schema.SingleType {
  collectionName: 'vacancies_pages';
  info: {
    singularName: 'vacancies-page';
    pluralName: 'vacancies-pages';
    displayName: '\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438 \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::vacancies-page.vacancies-page', 'title'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::vacancies-page.vacancies-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::vacancies-page.vacancies-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVacancyVacancy extends Schema.CollectionType {
  collectionName: 'vacancies';
  info: {
    singularName: 'vacancy';
    pluralName: 'vacancies';
    displayName: '\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    office: Attribute.String & Attribute.Required;
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::vacancy.vacancy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::vacancy.vacancy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::account.account': ApiAccountAccount;
      'api::account-page.account-page': ApiAccountPageAccountPage;
      'api::banner.banner': ApiBannerBanner;
      'api::billing-calculator.billing-calculator': ApiBillingCalculatorBillingCalculator;
      'api::biometrics-page.biometrics-page': ApiBiometricsPageBiometricsPage;
      'api::branche-and-atm.branche-and-atm': ApiBrancheAndAtmBrancheAndAtm;
      'api::card.card': ApiCardCard;
      'api::card-page.card-page': ApiCardPageCardPage;
      'api::cash-management.cash-management': ApiCashManagementCashManagement;
      'api::coins-country-type.coins-country-type': ApiCoinsCountryTypeCoinsCountryType;
      'api::coins-currency-type.coins-currency-type': ApiCoinsCurrencyTypeCoinsCurrencyType;
      'api::coins-metal-type.coins-metal-type': ApiCoinsMetalTypeCoinsMetalType;
      'api::coins-page.coins-page': ApiCoinsPageCoinsPage;
      'api::corporate-cards-page.corporate-cards-page': ApiCorporateCardsPageCorporateCardsPage;
      'api::currency.currency': ApiCurrencyCurrency;
      'api::currency-control-page.currency-control-page': ApiCurrencyControlPageCurrencyControlPage;
      'api::currency-exchange.currency-exchange': ApiCurrencyExchangeCurrencyExchange;
      'api::deposit.deposit': ApiDepositDeposit;
      'api::deposits-page.deposits-page': ApiDepositsPageDepositsPage;
      'api::disclosures-page.disclosures-page': ApiDisclosuresPageDisclosuresPage;
      'api::document.document': ApiDocumentDocument;
      'api::encashment-page.encashment-page': ApiEncashmentPageEncashmentPage;
      'api::financial-security-page.financial-security-page': ApiFinancialSecurityPageFinancialSecurityPage;
      'api::footer-link.footer-link': ApiFooterLinkFooterLink;
      'api::general-info.general-info': ApiGeneralInfoGeneralInfo;
      'api::global.global': ApiGlobalGlobal;
      'api::golden-crown-page.golden-crown-page': ApiGoldenCrownPageGoldenCrownPage;
      'api::head-office-contacts-page.head-office-contacts-page': ApiHeadOfficeContactsPageHeadOfficeContactsPage;
      'api::header-link.header-link': ApiHeaderLinkHeaderLink;
      'api::hmb-online-business-page.hmb-online-business-page': ApiHmbOnlineBusinessPageHmbOnlineBusinessPage;
      'api::hmb-online-page.hmb-online-page': ApiHmbOnlinePageHmbOnlinePage;
      'api::hmb-square-page.hmb-square-page': ApiHmbSquarePageHmbSquarePage;
      'api::ibank-page.ibank-page': ApiIbankPageIbankPage;
      'api::inter-transfers-swift-page.inter-transfers-swift-page': ApiInterTransfersSwiftPageInterTransfersSwiftPage;
      'api::investment.investment': ApiInvestmentInvestment;
      'api::investments-page.investments-page': ApiInvestmentsPageInvestmentsPage;
      'api::license.license': ApiLicenseLicense;
      'api::loan.loan': ApiLoanLoan;
      'api::loans-corporate-page.loans-corporate-page': ApiLoansCorporatePageLoansCorporatePage;
      'api::loans-individuals-page.loans-individuals-page': ApiLoansIndividualsPageLoansIndividualsPage;
      'api::main-juridical-page.main-juridical-page': ApiMainJuridicalPageMainJuridicalPage;
      'api::main-page.main-page': ApiMainPageMainPage;
      'api::merchant-acquiring-page.merchant-acquiring-page': ApiMerchantAcquiringPageMerchantAcquiringPage;
      'api::mir-pay-page.mir-pay-page': ApiMirPayPageMirPayPage;
      'api::mortgage.mortgage': ApiMortgageMortgage;
      'api::mortgage-page.mortgage-page': ApiMortgagePageMortgagePage;
      'api::news-collection.news-collection': ApiNewsCollectionNewsCollection;
      'api::news-page.news-page': ApiNewsPageNewsPage;
      'api::payments-by-qr-code-page.payments-by-qr-code-page': ApiPaymentsByQrCodePagePaymentsByQrCodePage;
      'api::precious-metal.precious-metal': ApiPreciousMetalPreciousMetal;
      'api::precious-metal-coin.precious-metal-coin': ApiPreciousMetalCoinPreciousMetalCoin;
      'api::rating.rating': ApiRatingRating;
      'api::recommended-product.recommended-product': ApiRecommendedProductRecommendedProduct;
      'api::safe-deposit-page.safe-deposit-page': ApiSafeDepositPageSafeDepositPage;
      'api::salary-projects-page.salary-projects-page': ApiSalaryProjectsPageSalaryProjectsPage;
      'api::slider.slider': ApiSliderSlider;
      'api::sms-notification.sms-notification': ApiSmsNotificationSmsNotification;
      'api::spb-page.spb-page': ApiSpbPageSpbPage;
      'api::tage-news-collection.tage-news-collection': ApiTageNewsCollectionTageNewsCollection;
      'api::transfer-card-to-card-page.transfer-card-to-card-page': ApiTransferCardToCardPageTransferCardToCardPage;
      'api::vacancies-page.vacancies-page': ApiVacanciesPageVacanciesPage;
      'api::vacancy.vacancy': ApiVacancyVacancy;
    }
  }
}
