import React from 'react'
import { Section } from '@/components/layout'
import { Tile } from '@/components/kit'

import WatchdogIcon from 'public/images/features/watchdog.svg'
import SecurityScoreIcon from 'public/images/features/security-score.svg'
import RefuelIcon from 'public/images/features/refuel.svg'
import AuditIcon from 'public/images/features/audit.svg'
import AdvancedRoutesIcon from 'public/images/features/advanced-routes.svg'

function SafetyFirst() {
  return (
    <Section>
      <>
        <h2 className="mb-6 ml-2 text-[36px] font-semibold leading-[44px] lg:hidden">Secure Crypto Transactions</h2>
        <Tile.Group>
          <Tile title="ATM Liquidity Aggregator" className="hidden lg:flex" />
          <Tile
            icon={<WatchdogIcon/>}
            title="Bridges' watchdog"
            description="We facilitate cross-chain transactions to secure optimal rates and ensure seamless execution, while safeguarding against liquidity issues."
            isMobileColumned
          />
          <Tile
            icon={<SecurityScoreIcon/>}
            title="Security"
            description="We handle the swaps, ensuring secure purchases without the hassle of transferring crypto across different platforms."
            isMobileColumned
          />
          <Tile
            icon={<RefuelIcon/>}
            title="Refuel"
            description="Move gas between any networks in 1 click"
          />
          <Tile
            icon={<AuditIcon/>}
            title="Passed audit"
            description="Audit successfully passed in Q3 2024. Next one is scheduled for Q4 2024"
            isMobileColumned
          />
          <Tile
            icon={<AdvancedRoutesIcon/>}
            title="Advanced routes"
            description="Transfer tokens between any two networks, even if there is no direct bridge between them"
            isMobileColumned
          />
        </Tile.Group>
      </>
    </Section>
  )
}

export { SafetyFirst }
