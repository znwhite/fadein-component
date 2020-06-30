import React, { useState } from "react"
import FadeInSection from "../components/animations/FadeIn/FadeInSection"
import { Wave1 } from "../components/waves/Waves"

export default function App() {
  return (
    <div>
      <Wave1 bottomColor="tomato" margin="0 0 -10px 0"/>
      <FadeInSection bgColor="tomato" margin="0" padding="10px">
          <h1>Your journey starts here.</h1>
          <p>Sign up here and we will change all your shit up.</p>
      </FadeInSection>
    </div>
  )
}
