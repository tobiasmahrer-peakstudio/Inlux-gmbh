import type { ImageMetadata } from "astro";

import leuchtreklame from "../assets/products/leuchtreklame.jpg";
import wandausleger from "../assets/products/wandausleger.jpg";
import inplex from "../assets/products/inplex.jpg";
import orientierungsschilder from "../assets/products/orientierungsschilder.jpg";
import leuchtkasten from "../assets/products/leuchtkasten.jpg";
import metallLogo from "../assets/products/metall-logo.jpg";
import dreiDBeschriftungen from "../assets/products/3d-beschriftungen.jpg";
import mdfPaneele from "../assets/products/mdf-paneele.jpg";
import dreiDWand from "../assets/products/3d-wand.jpg";
import spiegelBeleuchtung from "../assets/products/spiegel-beleuchtung.jpg";

export const productImages: Record<string, ImageMetadata> = {
  "leuchtreklame": leuchtreklame,
  "wandausleger": wandausleger,
  "inplex": inplex,
  "orientierungsschilder": orientierungsschilder,
  "leuchtkasten": leuchtkasten,
  "lightbox-drehmotor": leuchtkasten,
  "metall-logo": metallLogo,
  "3d-beschriftungen": dreiDBeschriftungen,
  "mdf-paneele": mdfPaneele,
  "3d-wand": dreiDWand,
  "spiegel-beleuchtung": spiegelBeleuchtung,
};
