import amperia from "../../assets/images/amperia.png";
import aq_lifecare from "../../assets/images/aq_lifecare.png";
import vilata from "../../assets/images/vilata.png";
import coral_black from "../../assets/images/coral_black.png";
import { ProjectType } from "./types";

export const projects: ProjectType[] = [
  {
    id: "1",
    title: "Amperia",
    description: "Бренд красивых сувениров и подарков для дома",
    img: amperia,
  },
  {
    id: "2",
    title: "AQ.Lifecare",
    description: "Инновационная клиника внутривенной медицины",
    img: aq_lifecare,
  },
  {
    id: "3",
    title: "Vilata",
    description: "Бренд натуральных и вкусных соусов",
    img: vilata,
  },
  {
    id: "4",
    title: "Coral Black",
    description: "Черная икра в современной инторпритации",
    img: coral_black,
  },
];
