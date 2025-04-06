export type HeroDataProps = {
  title: string;
  short_text: string;
  cover_video: ImageProps;
  link: LinkProps;
};

export type ImageProps = {
  id: number;
  url: string;
  alternativeText: string;
};

export type LinkProps = {
  id: number;
  text: string;
  url: string;
  color: string;
  bg_color: string;
};

export type BrandDataProps = {
  title: string;
  brands: BrandProps[];
};

export type BrandProps = {
  brand_image: ImageProps;
};

export type PortfolioDataProps = {
  title: string;
  button: LinkProps;
  portfolio: PortfolioItemProps[];
};

export type PortfolioItemProps = {
  id: number;
  title: string;
  text: string;
  cover_image: ImageProps;
};

export type ExpertDataProps = {
  title: string;
  short_text: string;
  image: ImageProps;
  services: ServicePropItem[];
};

export type ServicePropItem = {
  title: string;
  text: string;
};

export type TestimonialDataProps = {
  testimonial: {
    text: string;
    image: ImageProps;
    Team: TeamProps;
  }[];
};

export type TeamProps = {
  name: string;
  designation: string;
  avatar: ImageProps;
};

export type BlogsDataProps = {
  title: string;
  blogs: BlogTypeProps[];
};

export type BlogTypeProps = {
  title: string;
  text: string;
  category_name: string;
  blog_image: ImageProps;
};

export type AwardsDataProps = {
  title: string;
  awards: AwardsItemsProps[];
};

export type AwardsItemsProps = {
  brand_image: ImageProps;
};

export type NewsletterDataProps = {
  title: string;
  text: string;
  button: LinkProps;
};

export type FooterDataProps = {
  company_description: string;
  logo: ImageProps;
  contact_info: FooterLinksProps[];
  social_links: FooterLinksProps[];
  legal_links: FooterLinksProps[];
  footer_column: {
    title: string;
    footer_links: FooterLinksProps[];
  }[];
  copyright: string;
};

export type FooterLinksProps = {
  id: number;
  text: string;
  url: string;
};

export type NavDataProps = {
  logo: ImageProps;
  nav_links: FooterLinksProps[];
  call_to_action: LinkProps;
};
