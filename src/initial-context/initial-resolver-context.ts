import { Resolver } from "@/types/resolver.types";

const initialStateMeta = {
  defaults: {
    title: null,
    title_prefix: null,
    title_suffix: null,
  },
  logo: {
    primary: null,
    footer: null,
    favicon: null,
  },
  meta: {
    meta_description: null,
    meta_keywords: null,
  },
};

const initialPriceFormatData = {
  price_format_data: null,
  group_separator_value: "",
  decimal_separator_value: "",
};

export const initialResolverContext: Resolver = {
  area: null,
  channel: null,
  country: null,
  store: null,
  pages: null,
  site_meta: initialStateMeta,
  customer_group: null,
  shipping_methods: [],
  payment_methods: [],
  social_media: {
    facebook: {
      icon: "",
      url: "",
    },
    instagram: {
      icon: "",
      url: "",
    },
    youtube: {
      icon: "",
      url: "",
    },
    pinterest: {
      icon: "",
      url: "",
    },
  },
  price_format: initialPriceFormatData,
  selectedChannelIcon: "",
  isB2b: false,
  partnerLogo: {},
};
