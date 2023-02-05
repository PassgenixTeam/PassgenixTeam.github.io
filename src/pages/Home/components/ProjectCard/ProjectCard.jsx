import { Link } from "react-router-dom";
import Image from "../../../../components/Image/Image";
import { joinCls } from "../../../../utilities/text.utils";

import style from "./style.module.css";

export default function ProjectCard({ title, image, tags }) {
  return (
    <div className="col-4">
      <div className={joinCls("card overflow-hidden rounded-0 border-0", style["card"])}>
        <Image src={image} className="card-img rounded-0" />
        <div className="card-img-overlay d-flex flex-column justify-content-end p-0">
          <div className={joinCls("bg-light p-4", style["description"])}>
            <div className="d-flex justify-content-between align-items-center gap-4">
              <div>
                <h6 className="text-secondary">{tags.join(" - ")}</h6>
                <h3>{title}</h3>
              </div>
              <div>
                <Link
                  to="#"
                  className={joinCls(
                    "d-flex justify-content-center align-items-center rounded-circle border border-dark border-1 text-decoration-none text-reset mx-3",
                    style["icon"]
                  )}
                >
                  <i class="fa-solid fa-arrow-right fa-2xl"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
