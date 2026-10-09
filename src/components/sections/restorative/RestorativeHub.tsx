import type { CSSProperties, ReactNode } from "react";
import { DataTable } from "@/components/ui/DataTable";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Portrait } from "@/components/ui/Portrait";
import { Rich } from "@/components/ui/Rich";
import { images } from "@/content/images";
import { rdDentists, rdDentureCare, rdExtract, rdGum, rdMagnify, rdRepair, rdReplace, rdSave, rdWhich } from "@/content/pages/restorative/hub";
import styles from "./RestorativeHub.module.css";

/**
 * Restorative Dentistry hub sections (order and heading levels follow 02 Content.md).
 * Designs used on this page only: the four tooth states, the damage scale, the navy
 * root canal band with its warning chips, the replacement line art, the denture fit panel,
 * the extraction pair, the healing-gum card, the triage table, the magnification panel and the
 * dentist duo.
 */

export const toothPath =
  "M7.2 3.6c1.6 0 2.9.9 4.8.9s3.2-.9 4.8-.9c2.3 0 3.7 2 3.7 4.6 0 2.3-1 3.9-1.6 6.3-.6 2.6-.9 6-2.6 6-1.9 0-1.8-4.6-4.3-4.6s-2.4 4.6-4.3 4.6c-1.7 0-2-3.4-2.6-6-.6-2.4-1.6-4-1.6-6.3 0-2.6 1.4-4.6 3.7-4.6Z";

/** Hero visual: one tooth in four states, from a small repair to a replacement (decorative) */
export function ToothStates() {
  const states: { name: string; note: string; art: ReactNode }[] = [
    {
      name: "Fill",
      note: "Small cavity",
      art: (
        <>
          <path d={toothPath} className={styles.enamel} />
          <path d="M10.2 6.2c.9-.6 2.6-.6 3.6 0 .4 1.2-.2 2.4-1.8 2.6-1.6-.2-2.2-1.4-1.8-2.6Z" className={styles.patch} />
        </>
      ),
    },
    {
      name: "Crown",
      note: "Cracked or worn",
      art: (
        <>
          <path d={toothPath} className={styles.enamel} />
          <path d="M3.5 8.2c0-2.6 1.4-4.6 3.7-4.6 1.6 0 2.9.9 4.8.9s3.2-.9 4.8-.9c2.3 0 3.7 2 3.7 4.6 0 .9-.1 1.6-.4 2.4H3.9c-.3-.8-.4-1.5-.4-2.4Z" className={styles.patch} />
        </>
      ),
    },
    {
      name: "Save",
      note: "Infected pulp",
      art: (
        <>
          <path d={toothPath} className={styles.enamel} />
          <path d="M12 7.5v3.4M9.6 11c-.4 2.3-.9 4.4-1.4 6.6M14.4 11c.4 2.3.9 4.4 1.4 6.6M9.6 11h4.8" className={styles.canal} />
        </>
      ),
    },
    {
      name: "Replace",
      note: "Missing tooth",
      art: (
        <>
          <path d="M6.2 4.2c1.4 0 2.6.8 4.2.8s2.8-.8 4.2-.8c2.1 0 3.4 1.8 3.4 4.2 0 1-.2 1.8-.5 2.6H5.3c-.3-.8-.5-1.6-.5-2.6 0-2.4 1.3-4.2 3.4-4.2Z" transform="translate(0.6 0)" className={styles.enamel} />
          <path d="M10.6 11h2.8l-.2 2.2h-2.4Z" className={styles.post} />
          <path d="M10.8 13.2h2.4l-.3 6.8-.9 1.2-.9-1.2Z" className={styles.post} />
          <path d="M10.5 15h3M10.6 16.8h2.8M10.7 18.6h2.6" className={styles.thread} />
        </>
      ),
    },
  ];
  return (
    <div className={styles.states} aria-hidden="true">
      <span className={styles.statesKicker}>From repair to replacement</span>
      <div className={styles.statesGrid}>
        {states.map((state, i) => (
          <span key={state.name} className={styles.state} style={{ "--i": i } as CSSProperties}>
            <svg viewBox="0 0 24 24" className={styles.stateArt}>
              {state.art}
            </svg>
            <span className={styles.stateName}>{state.name}</span>
            <span className={styles.stateNote}>{state.note}</span>
          </span>
        ))}
      </div>
      <span className={styles.statesFoot}>
        <Icon name="microscope" size={16} /> Fit checked under the microscope
      </span>
    </div>
  );
}

/** Repairing damaged teeth: three repairs on a damage scale */
export function RepairScale() {
  return (
    <section className={styles.repair} aria-labelledby="rd-repair-title">
      <div className="container">
        <div className={styles.repairHead}>
          <p className="label" data-reveal>
            Repair
          </p>
          <h2 id="rd-repair-title" data-reveal>
            {rdRepair.title}
          </h2>
          <p className="lead" data-reveal>
            {rdRepair.intro}
          </p>
        </div>
        <ul role="list" className={styles.scale} data-inview>
          {rdRepair.items.map((item, i) => (
            <li key={item.lead} className={styles.scaleCard} style={{ "--i": i } as CSSProperties} data-reveal>
              <span className={styles.meter} aria-hidden="true">
                {[1, 2, 3].map((n) => (
                  <span key={n} className={n <= item.damage ? styles.meterOn : undefined} />
                ))}
              </span>
              <p>
                <strong>
                  <Rich text={item.lead} />
                </strong>{" "}
                {item.text}
              </p>
            </li>
          ))}
        </ul>
        <p className={styles.repairAfter} data-reveal>
          <Icon name="clock" size={20} />
          <span>{rdRepair.after}</span>
        </p>
      </div>
    </section>
  );
}

/** Saving infected teeth: the page's navy band, with the warning signs as chips */
export function SaveBand() {
  const signs: { icon: IconName; text: string }[] = [
    { icon: "moon", text: "Wakes you at night" },
    { icon: "thermo", text: "Lingers with hot or cold" },
    { icon: "alert", text: "A bump on the gum" },
    { icon: "tooth", text: "Turns darker" },
  ];
  return (
    <section className={styles.save} aria-labelledby="rd-save-title">
      <div className={`container ${styles.saveGrid}`}>
        <div className={styles.saveCopy}>
          <p className="label label-inverse" data-reveal>
            Save
          </p>
          <h2 id="rd-save-title" data-reveal>
            {rdSave.title}
          </h2>
          {rdSave.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              <Rich text={text} />
            </p>
          ))}
        </div>
        <ul role="list" className={styles.signs} aria-hidden="true">
          {signs.map((sign, i) => (
            <li key={sign.text} style={{ "--i": i } as CSSProperties} data-reveal>
              <span>
                <Icon name={sign.icon} size={22} />
              </span>
              {sign.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Line art for each replacement option (decorative) */
function ReplaceArt({ kind }: { kind: string }) {
  const art: Record<string, ReactNode> = {
    implant: (
      <>
        <path d="M30 18c5 0 8 2 12 2s7-2 12-2c7 0 10 6 10 12 0 3-1 5-2 7H22c-1-2-2-4-2-7 0-6 3-12 10-12Z" className={styles.artCrown} />
        <path d="M37 37h10l-1 6h-8Z" className={styles.artMetal} />
        <path d="M38 43h8l-1 24-3 4-3-4Z" className={styles.artMetal} />
        <path d="M37 50h10M37.5 56h9M38 62h8" className={styles.artLine} />
        <path d="M6 46h72" className={styles.artGum} />
      </>
    ),
    bridge: (
      <>
        <path d="M8 22c3 0 5 1 8 1s5-1 8-1c5 0 7 4 7 9 0 4-2 8-3 14H9C8 39 6 35 6 31c0-5 2-9 2-9Z" className={styles.artCrown} />
        <path d="M60 22c3 0 5 1 8 1s5-1 8-1c5 0 7 4 7 9 0 4-2 8-3 14H61c-1-6-3-10-3-14 0-5 2-9 2-9Z" className={styles.artCrown} />
        <path d="M34 24c3 0 5 1 8 1s5-1 8-1c4 0 6 3 6 7 0 3-1 6-2 9H30c-1-3-2-6-2-9 0-4 2-7 6-7Z" className={styles.artPontic} />
        <path d="M28 30h-4M60 30h-4" className={styles.artLine} />
        <path d="M2 50h80" className={styles.artGum} />
      </>
    ),
    denture: (
      <>
        <path d="M8 56c4-22 18-34 34-34s30 12 34 34" className={styles.artBase} />
        {[18, 26, 34, 42, 50, 58, 66].map((x, i) => (
          <rect key={x} x={x - 3.5} y={i === 3 ? 22 : 26 + Math.abs(3 - i) * 3} width="7" height="9" rx="3" className={styles.artCrown} />
        ))}
      </>
    ),
    overdenture: (
      <>
        <path d="M8 40c4-14 18-22 34-22s30 8 34 22" className={styles.artBase} />
        {[20, 30, 42, 54, 64].map((x) => (
          <rect key={x} x={x - 4} y="20" width="8" height="10" rx="3" className={styles.artCrown} />
        ))}
        <path d="M28 44v18M56 44v18" className={styles.artPost} />
        <circle cx="28" cy="44" r="3" className={styles.artMetalFill} />
        <circle cx="56" cy="44" r="3" className={styles.artMetalFill} />
        <path d="M4 52h76" className={styles.artGum} />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 84 72" className={styles.replaceArt} aria-hidden="true" data-draw>
      {art[kind]}
    </svg>
  );
}

/** Replacing missing teeth: four options, each with its line art */
export function ReplaceOptions() {
  return (
    <section className={styles.replace} aria-labelledby="rd-replace-title">
      <div className="container">
        <div className={styles.replaceHead}>
          <p className="label" data-reveal>
            Replace
          </p>
          <h2 id="rd-replace-title" data-reveal>
            {rdReplace.title}
          </h2>
          <p className="lead" data-reveal>
            {rdReplace.intro}
          </p>
        </div>
        <ul role="list" className={styles.replaceGrid}>
          {rdReplace.items.map((item) => (
            <li key={item.lead} className={styles.replaceCard} data-reveal>
              <span className={styles.replaceStage}>
                <ReplaceArt kind={item.art} />
              </span>
              <p>
                <strong>
                  <Rich text={item.lead} />
                </strong>{" "}
                <Rich text={item.text} />
              </p>
            </li>
          ))}
        </ul>
        <p className={styles.replaceAfter} data-reveal>
          <Icon name="alert" size={20} />
          <span>{rdReplace.after}</span>
        </p>
      </div>
    </section>
  );
}

/** Denture care: the copy beside three services and the annual exam */
export function DentureCare() {
  const services: { icon: IconName; name: string; note: string }[] = [
    { icon: "layers", name: "Reline", note: "Reshapes the inside" },
    { icon: "refresh" as IconName, name: "Rebase", note: "New pink base, same teeth" },
    { icon: "firstAid", name: "Repair", note: "Often the same day" },
  ];
  return (
    <section className={styles.dentures} aria-labelledby="rd-dentures-title">
      <div className={`container ${styles.dentureGrid}`}>
        <div className={styles.dentureCopy}>
          <p className="label" data-reveal>
            Dentures
          </p>
          <h2 id="rd-dentures-title" data-reveal>
            {rdDentureCare.title}
          </h2>
          {rdDentureCare.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              <Rich text={text} />
            </p>
          ))}
        </div>
        <div className={styles.fitPanel} aria-hidden="true">
          <span className={styles.annual} data-reveal>
            <Icon name="calendarCheck" size={20} /> Annual denture exam
          </span>
          {services.map((service, i) => (
            <span key={service.name} className={styles.fitRow} style={{ "--i": i } as CSSProperties} data-reveal>
              <span className={styles.fitIcon}>
                <Icon name={service.icon} size={22} />
              </span>
              <span className={styles.fitText}>
                <span className={styles.fitName}>{service.name}</span>
                <span className={styles.fitNote}>{service.note}</span>
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Tooth extractions and wisdom teeth: the intro, then two cards */
export function ExtractPair() {
  return (
    <section className={styles.extract} aria-labelledby="rd-extract-title">
      <div className="container">
        <div className={styles.extractHead}>
          <p className="label" data-reveal>
            Extractions
          </p>
          <h2 id="rd-extract-title" data-reveal>
            {rdExtract.title}
          </h2>
          <p className="lead" data-reveal>
            {rdExtract.intro}
          </p>
        </div>
        <div className={styles.extractCards}>
          {rdExtract.cards.map((card) => (
            <p key={card.text.slice(0, 20)} className={styles.extractCard} data-reveal>
              <span className={styles.extractIcon} aria-hidden="true">
                <Icon name={card.icon as IconName} size={26} />
              </span>
              <span>
                <Rich text={card.text} />
              </span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Treating gum disease: the copy, with the conservative path drawn beside it */
export function GumPath() {
  return (
    <section className={styles.gum} aria-labelledby="rd-gum-title">
      <div className={`container ${styles.gumGrid}`}>
        <div className={styles.gumCopy}>
          <p className="label" data-reveal>
            Gums
          </p>
          <h2 id="rd-gum-title" data-reveal>
            {rdGum.title}
          </h2>
          {rdGum.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              <Rich text={text} />
            </p>
          ))}
        </div>
        <div className={styles.heal} aria-hidden="true" data-inview data-reveal>
          <div className={styles.healArt}>
            <svg viewBox="0 0 240 150" className={styles.healSvg}>
              {/* Three teeth; the gum rises back up around them as the card comes into view */}
              {[50, 120, 190].map((x) => (
                <path
                  key={x}
                  d={`M${x - 28} 40c0-16 8-24 16-24 6 0 8 4 12 4s6-4 12-4c8 0 16 8 16 24v34c0 8-3 14-6 20l-6 50h-32l-6-50c-3-6-6-12-6-20Z`}
                  fill="#fff"
                  stroke="#a9daf3"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
              ))}
              <path
                className={styles.healGum}
                d="M-10 80H15Q50 112 85 80Q120 112 155 80Q190 112 225 80H250V160H-10Z"
              />
              <path className={styles.healEdge} d="M-10 80H15Q50 112 85 80Q120 112 155 80Q190 112 225 80H250" fill="none" />
            </svg>
            <span className={styles.healTag}>Gums back in control</span>
          </div>
          <ol className={styles.healSteps}>
            {rdGum.path.map((step, i) => (
              <li key={step} style={{ "--i": i } as CSSProperties}>
                <span className={styles.healIcon}>
                  <Icon name={(["toothClean", "pill", "bolt", "calendarCheck"] as IconName[])[i]} size={20} />
                </span>
                {step}
              </li>
            ))}
          </ol>
          <p className={styles.healLast}>
            <Icon name="alert" size={18} />
            Surgery only where it&apos;s truly needed
          </p>
        </div>
      </div>
    </section>
  );
}

/** Which treatment do you need: the triage table */
export function Which() {
  return (
    <section className={styles.which} aria-labelledby="rd-which-title">
      <div className={`container ${styles.whichGrid}`}>
        <div className={styles.whichCopy}>
          <p className="label" data-reveal>
            A starting point
          </p>
          <h2 id="rd-which-title" data-reveal>
            {rdWhich.title}
          </h2>
          <p className="lead" data-reveal>
            {rdWhich.intro}
          </p>
        </div>
        <div data-reveal>
          <DataTable label={rdWhich.title} head={rdWhich.head} rows={rdWhich.rows} className={styles.triage} />
        </div>
      </div>
    </section>
  );
}

/** Working under magnification: an eyepiece panel with the four tools and the remake story */
export function Magnification() {
  return (
    <section className={styles.magnify} aria-labelledby="rd-magnify-title">
      <div className="container">
        <div className={styles.eyepiece}>
          <div className={styles.eyeHead}>
            <span className={styles.eyeIcon} aria-hidden="true" data-reveal>
              <Icon name="microscope" size={32} />
            </span>
            <div className={styles.eyeCopy}>
              <h2 id="rd-magnify-title" data-reveal>
                {rdMagnify.title}
              </h2>
              <p data-reveal>{rdMagnify.intro}</p>
            </div>
          </div>
          <p className={styles.toolsIntro} data-reveal>
            {rdMagnify.listIntro}
          </p>
          <ul role="list" className={styles.tools}>
            {rdMagnify.items.map((item) => (
              <li key={item.lead} data-reveal>
                <span className={styles.toolIcon} aria-hidden="true">
                  <Icon name={item.icon as IconName} size={22} />
                </span>
                <p>
                  <strong>{item.lead}</strong> {item.text}
                </p>
              </li>
            ))}
          </ul>
          <p className={styles.toolsMore} data-reveal>
            <Rich text={rdMagnify.more} />
          </p>
          <p className={styles.story} data-reveal>
            <Icon name="refresh" size={22} />
            <span>{rdMagnify.story}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

/** Meet your restorative dentists: one card, two arched portraits */
export function DentistDuo() {
  return (
    <section className={styles.duo} aria-labelledby="rd-duo-title">
      <div className="container">
        <h2 id="rd-duo-title" className={styles.duoTitle} data-reveal>
          {rdDentists.title}
        </h2>
        <div className={styles.duoCard}>
          {rdDentists.people.map((person) => (
            <div key={person.key} className={styles.duoPerson} data-reveal>
              <Portrait image={images[person.key]} ratio="1 / 1" sizes="(max-width: 767px) 40vw, 180px" reveal="scroll" className={styles.duoPhoto} />
              <p>
                <Rich text={person.text} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
