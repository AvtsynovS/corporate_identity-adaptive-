const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobile: `(width < ${size.tablet})`,
  tablet: `(${size.tablet} <= width < ${size.laptop})`,
  laptop: `(${size.laptop} <= width < ${size.laptopL})`,
  laptopL: `(width >= ${size.laptopL})`,
};
