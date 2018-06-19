import React from "react";

const Abci = () => (
  <div>
    <div
      className="js__parallax-window"
      style={{ background: "url(img/1920x1080/06.jpg) 50% 0 no-repeat fixed" }}
    >
      <div className="g-container--md g-text-center--xs g-padding-y-150--xs">
        <div className="g-margin-b-60--xs">
          <h1 className="g-font-size-40--xs g-font-size-50--sm g-font-size-70--md g-color--white g-letter-spacing--1 g-margin-b-30--xs">
            ABCI
          </h1>
          <p className="text-uppercase g-font-size-14--xs g-font-weight--700 g-color--white-opacity g-letter-spacing--2">
            Algorithm Biological Citation Index (ABCI).
          </p>
        </div>
        <a href="#js__scroll-to-section">
          <span className="s-icon s-icon--md s-icon--white-brd g-radius--circle ti-angle-double-down" />
        </a>
      </div>
    </div>
    {/* <!--========== END PROMO BLOCK ==========--> */}

    {/* <!--========== PAGE CONTENT ==========--> */}
    {/* <!-- FA Questions Text --> */}
    <div
      id="js__scroll-to-section"
      className="g-container--md g-padding-y-80--xs g-padding-y-125--sm"
    >
      <h2 className="g-font-size-32--xs g-font-size-36--md g-text-center--xs g-margin-b-80--xs">
        What is
        <br /> ABCI?
      </h2>
      <div className="row g-margin-b-50--xs">
        <div className="col-sm-12 g-margin-b-30--xs g-margin-b-0--sm">
          <p>
            Algorithm Biological Citation Index (ABCI) covers the business and
            resources on the study of biological sciences in the areas of
            Chemistry in Biology, Molecular Biology, Lymphatic,Bioinformatics,
            Macromolecules, Diffusion and osmosis, Homeostasis, Cell biology,
            Eukaryotes and Prokaryotes, Cells, Cell membrane, Organelles,
            Nucleus, DNA, RNA, mRNA, tRNA, rRNA, Ribosomes, Lysosomes,
            Endoplasmic Reticulum and Golgi Apparatus, Mitochondria and
            Chloroplasts, Vacuoles, Cell Division and Reproduction, Binary
            Fission/Mitosis, Meiosis, Metabolism, Cellular Respiration,
            Photosynthesis, Virology, Immunology, Evolution, Mendel and Darwin,
            Punnet Squares, Population genetics, Taxonomy, Botany, Dicotyledons,
            Monocotyledons, Zoology, Development from single cells up to
            mammals, Ecology, Paleontology, Biodiversity, Microbiology,
            Muscular.
          </p>
        </div>
      </div>
    </div>
    {/* <!-- End FA Questions Text --> */}

    {/* <!-- Subscribe --> */}
    <div className="g-container--sm g-text-center--xs g-padding-y-80--xs g-padding-y-125--sm">
      <div className="g-margin-b-60--xs">
        <p className="text-uppercase g-font-size-14--xs g-font-weight--700 g-color--primary g-letter-spacing--2 g-margin-b-25--xs">
          Subscribe
        </p>
        <h2 className="g-font-size-32--xs g-font-size-36--md g-letter-spacing--1">
          Join Over 1000+ People
        </h2>
      </div>
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
          <form className="input-group">
            <input
              type="email"
              className="form-control s-form-v5__input g-radius--left-50"
              name="email"
              placeholder="Enter your email"
            />
            <span className="input-group-btn">
              <button
                type="submit"
                className="s-btn s-btn-icon--md s-btn-icon--dark-brd s-btn--dark-brd g-radius--right-50"
              >
                <i className="ti-arrow-right" />
              </button>
            </span>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Abci;
