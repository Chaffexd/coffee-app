export const landingPageQuery = `
query fetchLandingPage {
    page(id: "4t02NSsrE2wRTybu1zmG8x", preview: true) {
      title
      slug
      seoMetadata(preview: true) {
        ... on Metadata {
          title
          description
          keywords
        }
      }
      sectionsCollection(preview: true) {
        items {
          ... on Header {
            title
            description
            headerImage {
              title
              url
            }
            callToAction {
              ... on CallToAction {
                actionText
              }
            }
          }
          ... on OurCollection {
            availableCoffees,
            coffeesCollection(limit: 4) {
              items {
                ... on CoffeeType {
                  title
                  description
                  coffeeBagImage {
                    ... on ImageWrapper {
                      altText
                      image {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
          ... on InformationalCard {
            title
            description
            cardsCollection(limit: 4) {
              items {
                ... on Card {
                  title
                  description
                  image {
                    ... on ImageWrapper {
                      altText
                      image {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
          ... on Steps {
            title,
            cta {
              ... on CallToAction {
                actionText
              }
            },
            stepCardsCollection(limit: 3) {
              items {
                ... on Card {
                  title,
                  description,
                  step
                }
              }
            }
          }
        }
      },
    }
  }  
`;

export const fetchLandingPage = async () => {
  try {
    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CONTENTFUL_CPA_KEY}`,
        },
        body: JSON.stringify({ query: landingPageQuery }),
      }
    );

    if (!response.ok) {
      console.error("Error", response.statusText);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error", error);

    return null;
  }
};



export const dynamicPageQuery = `
query fetchPage($slugId: String) {
    pageCollection(where: { slug: $slugId }, preview: true) {
      items {
        title
        seoMetadata {
          ... on Metadata {
            title
            description
            keywords
          }
        }
        sectionsCollection(limit: 6) {
          items {
            ... on Header {
              title
              description
              headerImage {
                url
              }
            }
            ... on Card {
              title
              description
              descriptionLong
              image {
                ... on ImageWrapper {
                  image {
                    url
                  }
                  altText
                }
              }
            }
            ... on InformationalCard {
              title
              description
              cardsCollection(limit: 4) {
                items {
                  ... on Card {
                    title
                    description
                    descriptionLong
                    image {
                      ... on ImageWrapper {
                        image {
                          url
                        }
                        altText
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }  
`

export const fetchDynamicPage = async (slug: string) => {
    try {
      const response = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.CONTENTFUL_CPA_KEY}`,
          },
          body: JSON.stringify({ query: dynamicPageQuery, variables: { slugId: slug } }),
        }
      );
  
      if (!response.ok) {
        console.error("Error", response.statusText);
      }
  
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.error("Error", error);
  
      return null;
    }
  };