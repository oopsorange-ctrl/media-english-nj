export type PillColor = {
  bg: string;
  fg: string;
};

export type LinkTreeTheme = {
  colors: {
    cream: string;
    ink: string;
    dim: string;
    rose: string;
    brown: string;
    denim: string;
    latte: string;
    border: string;
    scrollTrack: string;
    scrollThumb: string;
    scrollThumbHover: string;
    spiralFront: string;
  };
  pillColors: PillColor[];
};

// [가정] 파스텔블루 계열로 재구성한 테마입니다.
export const theme: LinkTreeTheme = {
  colors: {
    cream: "#EAF2FB",
    ink: "#2E3D52",
    dim: "#7C93AC",
    rose: "#A9C9EC",
    brown: "#3E5670",
    denim: "#6E93BE",
    latte: "#CFE2F4",
    border: "rgba(62,86,112,0.15)",
    scrollTrack: "rgba(207,226,244,0.5)",
    scrollThumb: "linear-gradient(180deg, rgba(62,86,112,0.68), rgba(110,147,190,0.58))",
    scrollThumbHover: "linear-gradient(180deg, rgba(46,61,82,0.78), rgba(110,147,190,0.74))",
    spiralFront: "#5D89B3"
  },
  pillColors: [
    { bg: "#A9C9EC", fg: "#2E3D52" },
    { bg: "#3E5670", fg: "#EAF2FB" },
    { bg: "#6E93BE", fg: "#EAF2FB" },
    { bg: "#CFE2F4", fg: "#2E3D52" }
  ]
};
