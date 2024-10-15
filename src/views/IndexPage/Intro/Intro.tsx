import React from 'react'

import { Section } from '@/components/layout'

function Intro() {
  return (
    <Section className="intro">
      <div className="form-wrapper">
        <a className="form-link" href="" target="_blank" rel="noreferrer">
          <img src="/images/backgrounds/bg-form.svg" />
        </a>
      </div>
      <h1>
      Decentralized Liquidity<br />
      for Global ATMs
      </h1>
      <a data-button="large" href="" target="_blank" rel="noreferrer">Launch dApp</a>
    </Section>
  )
}

export { Intro }
