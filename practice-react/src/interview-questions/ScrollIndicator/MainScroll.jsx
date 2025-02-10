import { useEffect, useState } from "react";
import "../styles.css";

export default function MainScroll() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  function handleScrollPercentage() {
    const howMuchScrolled =
      document.documentElement.scrollTop || document.body.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);

  return (
    <>
      <div className="top-container">
        <div className="scroll-progress-tracking-container">
          <div
            style={{
              width: `${scrollPercentage}%`,
            }}
            className="current-progress-bar"
          />
        </div>
        <h1>Scroll Indicator</h1>
      </div>
      <div className="data-container">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          fugiat minima qui ipsa impedit sapiente quod asperiores, fugit libero
          commodi, deserunt distinctio saepe sequi est. Maxime quasi enim
          praesentium voluptatem quibusdam aliquam quaerat quis ipsa ea eveniet
          at, ipsum sint, quam earum odio, tempora obcaecati eos ex vel est!
          Suscipit non, placeat, cumque id explicabo earum dolores maiores
          numquam quod sint eaque. Nemo et magni repudiandae nisi, beatae animi
          labore necessitatibus veritatis quibusdam praesentium! Possimus nemo
          odio, itaque excepturi optio quis eaque! Officiis neque aliquid
          aperiam in repellendus accusamus, vel modi nulla maxime pariatur ad
          asperiores culpa quaerat? Error hic eveniet perferendis fugit vel rem
          tempora, ex perspiciatis. Ipsa id saepe quia commodi facere. Sint, eos
          reprehenderit doloribus nemo neque itaque repellat optio quae hic
          aspernatur voluptatem quisquam perspiciatis cum, dicta, quidem eaque
          enim odio consectetur. Sed ut provident ipsam voluptas molestiae
          soluta placeat totam vitae velit perferendis, nobis ducimus saepe a
          natus ad nulla tenetur numquam aliquam magni labore quaerat! Magnam
          nihil pariatur repellat sunt non, blanditiis suscipit cum facere amet
          perspiciatis assumenda, eveniet ullam maiores. Officia repudiandae
          repellendus repellat sed nulla tempore illum quia in vero laborum
          dolorem ratione corrupti, aperiam adipisci provident sapiente enim
          tenetur asperiores, esse consequuntur perspiciatis. Distinctio dolore
          illum odit mollitia, eos nihil exercitationem nisi inventore repellat
          ut error expedita impedit sunt, optio veniam adipisci facere? Error
          facilis illum odio reiciendis fugiat excepturi dolores? Iusto eveniet
          blanditiis ipsam velit libero, autem consectetur officiis sit ut
          laboriosam ex perspiciatis rerum eum hic, dolorem esse dolore,
          consequatur reiciendis saepe est! Alias minus placeat eos provident
          delectus, qui similique voluptatem itaque quisquam nisi doloribus
          distinctio ipsam beatae deserunt neque aspernatur veritatis
          repudiandae dolor. Animi odio exercitationem ut aspernatur error
          voluptas delectus? Debitis corrupti vel numquam laudantium deleniti,
          aperiam cupiditate quibusdam adipisci quidem tempora expedita, quas
          molestias. Dicta reprehenderit molestias rerum tempore non vero
          exercitationem hic ratione et! A totam fugit culpa cum modi voluptas
          et qui. Nostrum ex tempore accusamus tenetur perspiciatis inventore,
          laborum reiciendis incidunt dolor quia eius, praesentium minus aliquam
          fugit maiores vel cumque earum rem veritatis quisquam, voluptas
          deleniti? Est ea nemo cupiditate, id ut placeat, unde exercitationem
          delectus, recusandae alias voluptatibus expedita accusantium excepturi
          odio. Magnam, velit veritatis cum ut sit blanditiis! Dolorem
          voluptates, quia tempora sint consectetur nesciunt possimus, est iusto
          itaque, in dolorum excepturi cupiditate. Rerum illum obcaecati
          temporibus dolore eaque corporis distinctio in ipsam fugiat blanditiis
          sint molestias suscipit accusantium voluptatum officia necessitatibus,
          reprehenderit voluptas quis aperiam culpa nemo accusamus! Dignissimos
          magnam odit facilis sed quisquam ipsam sequi esse quaerat, eveniet
          corporis veritatis animi nostrum nemo pariatur voluptate velit aliquam
          obcaecati. Quia corrupti error ut explicabo sunt ullam. Illum a
          nesciunt labore, veritatis nemo, excepturi vero quod enim distinctio
          aliquid expedita. Nostrum iste fuga sint excepturi officia placeat
          necessitatibus fugiat ad in soluta, explicabo quod unde quo voluptatem
          blanditiis atque ut minima alias ab aperiam cum omnis saepe velit.
          Voluptate voluptatem reprehenderit saepe aliquid explicabo quibusdam
          doloribus, cum veniam corporis qui cupiditate illum laudantium, porro
          pariatur adipisci deleniti perferendis dolores!
        </p>
      </div>
    </>
  );
}
