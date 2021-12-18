interface SlidesInterface {
  id: number;
  image: string;
  title: string;
  paragraph: string;
  btnMes: string;
  btnPath: string;
}

export type Slides = SlidesInterface[];
