'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState, type KeyboardEvent } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { interests } from '../../content'
import Plate, { Ground } from '../Plate'
import styles from './Interests.module.css'

export default function Interests() {
  const [active, setActive] = useState(0)
  const interest = interests[active]

  function onKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const step = event.key === 'ArrowRight' || event.key === 'ArrowDown' ? 1 : event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1 : 0
    if (!step) return
    event.preventDefault()
    setActive((index + step + interests.length) % interests.length)
  }

  return (
    <section id="interests" aria-labelledby="interests-title">
      <Plate index={5} scene="islands" after="field" tone="light" numeral="VI" place="the islands" kicker="what shapes the engineer" title="Beyond the classroom" titleId="interests-title">
        Repair work, research, teaching, community, and the habit of documenting what I build.
      </Plate>

      <Ground scene="islands" className={styles.ground}>
        <div className={`measure ${styles.body}`}>
          <div className={styles.tabs} role="tablist" aria-label="Beyond the classroom">
            {interests.map((item, index) => (
              <button key={item.id} id={`interest-tab-${item.id}`} type="button" role="tab" aria-selected={index === active}
                aria-controls="interest-panel" tabIndex={index === active ? 0 : -1} onClick={() => setActive(index)} onKeyDown={event => onKey(event, index)}>
                <span className="label">{String(index + 1).padStart(2, '0')}</span>{item.title}<i aria-hidden="true" />
              </button>
            ))}
          </div>

          <div className={styles.view}>
            <div className={styles.portrait} aria-hidden="true">
              {/* A real portrait replaces the reference portfolio's personal 3D character and photo library. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/omar.webp" alt="" />
              <span className={`label ${styles.coordinate}`}>Ottawa · 45.4215° N</span>
              <div className={styles.lines}><i /><i /><i /><i /></div>
            </div>

            <div id="interest-panel" role="tabpanel" aria-labelledby={`interest-tab-${interest.id}`} className={styles.panel}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={interest.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: .35 }}>
                  <p className={`label ${styles.kicker}`}>{interest.kicker}</p>
                  {interest.figure && <p className={styles.figure}>{interest.figure}</p>}
                  <h3>{interest.title}</h3>
                  <p className={styles.words}>{interest.body}</p>
                  {!!interest.links?.length && <p className={styles.links}>{interest.links.map(link => (
                    <a key={link.href} className="go" href={link.href} {...(link.href.startsWith('#') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}>
                      {link.label}<ArrowUpRight size={13} />
                    </a>
                  ))}</p>}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Ground>
    </section>
  )
}
