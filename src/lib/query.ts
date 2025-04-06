import qs from "qs";

const homePageQuery = qs.stringify({
  populate: {
    blocks: {
      on: {
        "layouts.hero-section": {
          populate: {
            cover_video: {
              fields: ["url", "alternativeText"],
            },
            link: {
              populate: true,
            },
          },
        },
        "layouts.brands-section": {
          populate: {
            brands: {
              populate: {
                brand_image: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
          },
        },
        "layouts.our-work": {
          populate: {
            portfolio: {
              populate: {
                cover_image: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
            button: {
              populate: true,
            },
          },
        },
        "layouts.our-experts": {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
            services: {
              populate: true,
            },
          },
        },
        "layouts.testimonials": {
          populate: {
            testimonial: {
              populate: {
                image: {
                  fields: ["url", "alternativeText"],
                },
                Team: {
                  populate: {
                    avatar: {
                      fields: ["url", "alternativeText"],
                    },
                  },
                },
              },
            },
          },
        },
        "layouts.blogs": {
          populate: {
            blogs: {
              populate: {
                blog_image: {
                  fields: ["url", "alternativeText"],
                },
              },
              fields: ["title", "text", "category_name"],
            },
          },
        },
        "layouts.awards": {
          populate: {
            awards: {
              populate: {
                brand_image: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
          },
        },
        "layouts.newsletter": {
          populate: {
            button: {
              populate: true,
            },
          },
        },
      },
    },
  },
});

const FooterQuery = qs.stringify({
  populate: {
    blocks: {
      on: {
        "layouts.footer": {
          populate: {
            footer_column: {
              populate: {
                footer_links: {
                  populate: true,
                },
              },
            },
            social_links: {
              populate: true,
            },
            legal_links: {
              populate: true,
            },
            contact_info: {
              populate: true,
            },
            logo: {
              fields: ["url", "alternativeText"],
            },
          },
        },
      },
    },
  },
});

const NavbarQuery = qs.stringify({
  populate: {
    navbar: {
      on: {
        "layouts.navbar": {
          populate: {
            nav_links: {
              populate: true,
            },
            logo: {
              fields: ["url", "alternativeText"],
            },
            call_to_action: {
              populate: true,
            },
          },
        },
      },
    },
  },
});

export { homePageQuery, FooterQuery, NavbarQuery };
