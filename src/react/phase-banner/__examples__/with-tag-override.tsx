import { PhaseBanner, PhaseTag } from '@moduk/frontend/react'

export const Example = () => (
  <PhaseBanner phaseTag={<PhaseTag className='govuk-tag--grey'>beta</PhaseTag>}>
    This is a new service – your <a className='govuk-link' href='#'>feedback</a> will help us to improve it.
  </PhaseBanner>
)
