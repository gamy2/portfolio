import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento_grid";
import { title } from "process";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="anout">
      <BentoGrid>
        {/* TODO: change the data in girdItems form folder @data/index.ts */}
        {gridItems.map((item, ind) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
