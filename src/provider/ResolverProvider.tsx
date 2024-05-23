"use client";

import { initialResolverContext } from "../initial-context/initial-resolver-context";

import { Resolver } from "../types/resolver.types";
import { setCookie } from "../utils/cookie";
import React from "react";

export const ResolverContext = React.createContext<Resolver>(
  initialResolverContext
);

type Props = {
  children: React.ReactNode;
  resolver: Resolver;
  channelIcon: string;
  isB2b: boolean;
};
type Vendor = { isB2b: boolean };
type Context = Resolver & Vendor;

const contextMapper = (data: Resolver) => {
  if (!data) return initialResolverContext;

  const {
    channel,
    pages,
    store,
    site_meta,
    area,
    country,
    price_format,
    social_media,
    payment_methods,
    shipping_methods,
    customer_group,
    isB2b,
    partnerLogo,
  } = data;

  if (site_meta?.logo?.favicon) {
    setCookie("favicon-icon", site_meta.logo.favicon);
  }

  return {
    area,
    channel,
    pages,
    store,
    site_meta,
    country,
    social_media,
    price_format,
    payment_methods,
    shipping_methods,
    customer_group,
    isB2b,
    partnerLogo,
    selectedChannelIcon: "",
  };
};

const ResolverProvider = ({
  isB2b = false,
  children,
  resolver,
  channelIcon,
}: Props) => {
  const data = resolver ? contextMapper(resolver) : initialResolverContext;
  const [state] = React.useState<Resolver>(data);
  const [selectedChannelIcon] = React.useState<string>(channelIcon);

  return (
    <ResolverContext.Provider value={{ ...state, selectedChannelIcon, isB2b }}>
      {children}
    </ResolverContext.Provider>
  );
};
export default ResolverProvider;
