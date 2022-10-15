import React from 'react'
import Auth from '../../../hoc/auth'

function MembersPage() {
  return (
    <div>MembersPage</div>
  )
}

export default Auth(MembersPage, true)