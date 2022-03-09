import React from 'react';
import DigitalAnvil from '../Projectsfolder/DigitalAnvil';
import Matching from "../Projectsfolder/Matching"
import Gag from "../Projectsfolder/Gag"
import TailorThrift from "../Projectsfolder/TailorThrift"

import "../../App.css"

export default function ProjectsContainer() {
  return (
    <div className="projects">
      <TailorThrift />
      <DigitalAnvil />
      <Matching />
      <Gag />
    </div>
  );
}