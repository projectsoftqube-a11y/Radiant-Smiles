import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { homeFaqs } from "@/content/pages/home";
import { practice } from "@/content/site";
import styles from "./Faq.module.css";

/** An icon for each question, in content-file order */
const icons: IconName[] = ["pin", "calendarCheck", "graduation", "shield", "badgeDollar", "firstAid", "tooth", "implant", "directions"];

/**
 * Nine questions as icon cards in two columns. Each is a <details> (handoff: answers stay
 * in the DOM on load) with its question as an H3, matching the content file. Opening a
 * card turns it navy-edged and slides the answer open. The first card starts open.
 */
export function Faq() {
  const items = homeFaqs.items.map((item, i) => ({ ...item, icon: icons[i] ?? "check", index: i }));
  const half = Math.ceil(items.length / 2);
  const columns = [items.slice(0, half), items.slice(half)];

  return (
    <section className={styles.section} aria-labelledby="home-faq-title">
      <div className="container">
        <div className={styles.head}>
          <div className={styles.headCopy}>
            <p className="label" data-reveal>
              FAQ
            </p>
            <h2 id="home-faq-title" data-reveal>
              {homeFaqs.title}
            </h2>
          </div>
          <div data-reveal>
            <Button href={practice.phone.href} icon="phone" variant="outline" track="call_click_faq">
              Call {practice.phone.display}
            </Button>
          </div>
        </div>

        <div className={styles.columns}>
          {columns.map((column, c) => (
            <div key={c} className={styles.column}>
              {column.map((item) => (
                <details key={item.question} className={styles.card} open={item.index === 0} data-reveal>
                  <summary className={styles.summary}>
                    <span className={styles.icon} aria-hidden="true">
                      <Icon name={item.icon} size={22} />
                    </span>
                    <h3 className={styles.question}>{item.question}</h3>
                    <span className={styles.toggle} aria-hidden="true">
                      <span />
                      <span />
                    </span>
                  </summary>
                  <div className={styles.answer}>
                    <p>{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
