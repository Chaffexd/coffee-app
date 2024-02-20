const query = `
query fetchNavAndFoot {
    page(id: "4t02NSsrE2wRTybu1zmG8x", preview: true) {
      navbar(preview: true) {
        ... on NavBar {
          navItemsCollection(limit: 5) {
            items {
              ... on NavItem {
                title
                slug
              }
            }
          }
        }
        ... on NavBar {
          logo {
            ... on ImageWrapper {
              image {
                url
              }
              altText
              slug
            }
          }
        }
      },
      footer(preview: true) {
        ... on Footer {
          logo {
            ... on ImageWrapper {
              altText, 
              image {
                url
              }
            }
          }
          companyName,
          navItemsCollection(limit:3) {
            items {
              ... on NavItem {
                title,
                slug
              }
            }
          }
          socialsCollection(limit: 3) {
            items {
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
`;

export const fetchNavAndFoot = async () => {
  try {
    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CONTENTFUL_CPA_KEY}`,
        },
        body: JSON.stringify({ query: query }),
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
