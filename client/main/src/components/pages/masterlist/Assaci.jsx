import React from "react";

const Assaci = () => (
  <div>
    <div
      className="js__parallax-window"
      style={{ background: "url(img/1920x1080/06.jpg) 50% 0 no-repeat fixed" }}
    >
      <div className="g-container--md g-text-center--xs g-padding-y-150--xs">
        <div className="g-margin-b-60--xs">
          <h1 className="g-font-size-40--xs g-font-size-50--sm g-font-size-70--md g-color--white g-letter-spacing--1 g-margin-b-30--xs">
            ASSACI
          </h1>
          <p className="text-uppercase g-font-size-14--xs g-font-weight--700 g-color--white-opacity g-letter-spacing--2">
            Algorithm Social Sciences and Arts Citation Index (ASSACI).
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
        <br /> ASSACI?
      </h2>
      <div className="row g-margin-b-50--xs">
        <div className="col-sm-12 g-margin-b-30--xs g-margin-b-0--sm">
          <p>
            Algorithm Social Sciences and Arts Citation Index (ASSACI) focus on
            the business and resources on study concerning educational Sciences,
            social sciences and computers, time and society, evaluation
            practice, black studies, information science and society,
            homosexuality studies, childhood studies, death studies, Aging,
            Ambient awareness, Anti-vaccination, Black Lives Matter, Class,
            Cliques, Conflict theory, Consumerism, Counter- cultures, Cults,
            Cultural appropriation, Cultural assimilation, Ethnicity, Equal pay,
            Family issues, Fandom, Fashion trends, Flocking behavior, Gender
            Issues, Mass Media, Nationality, Occupy movement, Online dating,
            Patriotism, Police brutality, Poverty gap, Protest, Social media
            activism Social stratification, Spirituality and religion,
            Stereotypes, Sub-cultures, Superstitions, Work place, Youth culture,
            Addiction, Anger management, Animal assisted therapy, Asperger's
            Syndrome, Attention Deficit Disorder (ADD), Autism, Behaviorism,
            Bipolar disorder, Birth order, Borderline personality disorder,
            Compulsive behaviors, Cross-dressing, Depression, Dreams, Emotional
            intelligence, Family therapy, Grief, Group therapy, Guilt,
            Histrionic personality disorder, Internet addiction, Jealousy,
            Kleptomania, Megalomania, Memory loss, Multiple personalities,
            Obsessive compulsive disorder (OCD), Otherkin, Panic attacks,
            Pedophilia, Peer pressure, Personality types, Phobias,
            Post-traumatic stress disorder (PTSD), Postnatal (postpartum)
            depression, Prescriptions for ADHD, Resilience, Self-esteem, Sexual
            assault victims, Sleeping disorders, Social anxiety disorder, Speech
            disorders, Suicide, Transsexual, Twins, elections, Alt-right,
            Automatic voter registration, Campaign finance laws, Congressional
            Review Act, Debates, Democratization, Effect of mass media,
            Environmental Protection Agency, Executive actions, Executive power,
            limits of Facebook campaigning, Gerrymandering, Line item veto,
            Mutual defense alliances, National Popular Vote Bill, Open
            government, Parliamentary system, Pork barrel legislation, Populism,
            Regulations, Social democracy, Super PACs, Supreme Court powers,
            Transparency, Capital punishment as deterrent, Community policing,
            Crime statistic reporting, Cyber crime, Death penalty, Domestic
            violence, Environmental justice, For profit prisons, Forensic
            evidence, Fraud, Hate crime, Hate groups, Identity theft, Illegal
            drug use, Innocence projects, International terrorism, Legalization
            of marijuana, Lethal injection and electric chair, Mandatory minimum
            sentencing, Plea bargaining, Presumptive parole, Prison
            overcrowding, Prostitution, Racial profiling, Rehabilitation in
            prison, Riots, Serial killers, Sodomy laws, Undercover police,
            Voting rights for felons, Witness protection program, Bias, Bot
            journalists, Cartoons, Comic strips, Embedded journalism, Fake news,
            Media ethics, Memes, Press embargoes, Privacy, Slanting, Social
            media as social justice, Social media literacy, Social networking,
            Tabloids, Yellow journalism, Agricultural practices, Amphora,
            Ancestors, Ancient Roman culture, Body modification, Burial customs,
            Clothing and costume, Cultural appropriation, Eating utensils,
            Folklore, Gender roles, Gift giving customs, Kennewick Man, Kissing
            customs, Language and linguistics, Marriage, Nudists, Otherkin,
            Polyandry, Polygamy, Primate families, Religious beliefs and
            practices, Repatriation, Rhine-Danube corridor, Ritual masks, Roma
            (gypsy) culture, Social networks, Stonehenge, Subcultural groups,
            Totem poles, Traditional medicine
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

export default Assaci;
