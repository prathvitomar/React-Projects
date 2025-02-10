import "../styles.css";

export default function Modal({ show, handleShow }) {
  return (
    <>
      <div>
        <button onClick={handleShow}>{show ? "hide" : "show"}</button>

        {show && (
          <div className="main-modal">
            <h1>This is a Modal</h1>
            <p className="content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
              ratione modi quibusdam, sapiente eligendi amet! Ea sunt ad
              perferendis pariatur similique sint dolorum aut. Maxime, in eaque!
              Voluptatem quod nulla quos, assumenda laboriosam doloribus id cum,
              iste vel modi distinctio earum et inventore, ab natus placeat
              repellat. Est dignissimos nihil fugiat deserunt rerum possimus!
              Soluta necessitatibus amet eligendi maiores est beatae dignissimos
              nesciunt libero aliquam culpa quos autem distinctio facilis
              molestias, deserunt, voluptas cupiditate quaerat id? Facilis modi
              nisi officiis voluptatem dolor molestias, veritatis sunt quo
              necessitatibus itaque et culpa non perspiciatis quasi rerum porro
              quia eum doloribus, nihil excepturi voluptatibus pariatur hic?
              Quos sapiente doloremque dolorem blanditiis voluptatum quibusdam
              esse quo dolore, quisquam sit, doloribus fugiat beatae amet quis.
              Necessitatibus incidunt quia impedit doloremque sed nulla nostrum
              cupiditate nam vero dolor. Odio atque nihil unde blanditiis, rem
              facere, a reprehenderit natus est incidunt quos error voluptates
              veritatis excepturi sint magni ipsum dicta dignissimos quod
              explicabo nemo. Laboriosam illo beatae praesentium fugit tempora
              recusandae aspernatur qui cum dignissimos laudantium magnam aut
              nostrum ipsum aliquid quo ullam, nobis dolorem. Aliquam culpa
              placeat sit veniam repellendus voluptatem tenetur atque dolor
              neque nam rerum fugiat, tempore at assumenda architecto! Tempora
              similique cumque voluptatem pariatur ipsam. Autem architecto fuga
              accusamus quia nam itaque sit aperiam labore perferendis eaque?
              Tenetur sapiente vitae nam fuga omnis sit nisi enim facilis, fugit
              sunt quisquam neque quo, nulla atque placeat. Similique quos
              repellendus quibusdam culpa, cum tenetur tempora unde, ut possimus
              blanditiis ad quasi nulla aliquam voluptates eveniet recusandae,
              saepe incidunt? Beatae enim maiores provident, eaque non quas,
              incidunt ipsam molestias iste modi aliquid. Deserunt tempora non
              quos officiis libero reprehenderit cupiditate, eos enim
              repellendus asperiores dolores excepturi totam, temporibus, optio
              magni. Nihil asperiores reprehenderit, facere enim aliquid vel.
              Dignissimos, ullam earum! Corporis sequi repudiandae culpa
              pariatur, harum omnis veritatis. Asperiores modi quam enim
              cupiditate inventore temporibus voluptates et consequuntur
              molestiae placeat necessitatibus voluptatem molestias, odio
              distinctio ducimus ullam optio officiis iure corporis atque
              recusandae odit praesentium? Unde error cum libero numquam,
              possimus perferendis id quisquam facere deleniti laudantium
              aspernatur repellat soluta a mollitia vero optio odit quaerat,
              dolorem doloribus quo. Quasi doloremque odit asperiores, sequi
              odio itaque, sit esse dolorem laudantium accusamus ab dicta
              officia totam, vitae repudiandae et. Veritatis sequi inventore ut
              fuga distinctio ipsum quisquam debitis voluptates mollitia
              excepturi molestias tenetur amet veniam non, qui blanditiis iste
              quas ea ad assumenda nobis architecto? Facilis repellat dolorum
              enim. Nisi cum assumenda praesentium corporis reprehenderit vitae,
              alias placeat similique facilis perferendis enim porro velit nam
              quos eaque laborum nobis explicabo debitis, iusto quas aperiam
              nesciunt repellendus temporibus ipsum! Dignissimos fugiat nobis
              quas veritatis architecto laboriosam nulla. Tempora sapiente
              reiciendis veritatis nulla accusantium nihil sint natus totam,
              debitis illum sit cumque temporibus tenetur neque consectetur
              exercitationem corporis. Rem nesciunt deleniti, necessitatibus
              illo dicta provident et saepe aperiam dolorum! Placeat dolores
              consectetur hic perferendis accusantium sit laboriosam quisquam,
              harum blanditiis esse rerum, tempora iure mollitia nostrum sed
              maxime. Accusantium impedit voluptatum qui labore error alias
              tempore asperiores expedita laborum.
            </p>
            <h3 className="footer">Footer</h3>
          </div>
        )}
      </div>
    </>
  );
}
