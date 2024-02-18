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
      navbar(preview: true) {
        ... on NavBar {
          navItemsCollection(limit: 5) {
            items {
              ... on NavItem {
                title
                slug
              },
            }
          },
          ... on NavBar {
            logo {
              ... on ImageWrapper {
                image {
                  url
                },
                altText,
                slug
              }
            }
          }
        },
        ... on ImageWrapper {
                image {
                  url
                },
                altText,
                slug
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
      footer {
        ... on Footer {
          logo {
            ... on ImageWrapper {
              altText,
              image {
                url
              }
            }
          },
          companyName,
          navItemsCollection(limit: 3) {
            items {
              ... on NavItem {
                title,
                slug
              }
            }
          },
          socialsCollection(limit: 3) {
            items {
              ... on ImageWrapper {
                image {
                  url
                },
                altText
              }
            }
          }
        }
      }
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
