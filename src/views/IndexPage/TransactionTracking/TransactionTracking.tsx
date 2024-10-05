import React from 'react'
import { Section } from '@/components/layout'
import { Tile } from '@/components/kit'

import ProgressBarIcon from 'public/images/features/progress-bar.svg'
import ProgressBarMobileIcon from 'public/images/features/progress-bar-mobile.svg'
import PushNotificationsIcon from 'public/images/features/push-notifications.svg'
import DynamicTitleIcon from 'public/images/features/dynamic-title.svg'

function TransactionTracking() {
  return (
    <Section>
      <>
        <div className="ml-2.5 lg:ml-0 mb-10">
          <h2 className="mb-3 lg:mb-6 font-semibold text-[36px] lg:text-[48px] leading-[44px] lg:leading-[56px]">Seamless Transaction Monitoring</h2>
          <p className="max-w-[940px] text-white/40 text-[24px] lg:text-[32px] leading-[32px] lg:leading-[40px]">Know with confidence that your funds are in transit and will arrive as scheduled.</p>
        </div>
        <Tile.Group>
          <Tile
            slots={3}
            icon={<ProgressBarIcon/>}
            mobileIcon={<ProgressBarMobileIcon/>}
            title="Progress bar"
            description="Track the transaction on the progress page"
          />
          <Tile
            slots={2}
            icon={<PushNotificationsIcon/>}
            title="Real-Time Transaction Alerts"
            description="Get instant notifications on your device to stay updated on transaction statuses and confirmations through BTMs."
          />
          <Tile
            icon={<DynamicTitleIcon/>}
            title="Live Transaction Countdown"
            description="Stay updated with a real-time countdown to track the exact time remaining for transaction completion."
          />
        </Tile.Group>
      </>
    </Section>
  )
}

export { TransactionTracking }
