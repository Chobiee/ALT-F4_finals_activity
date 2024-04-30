import React from 'react'
import DisplayTransaction from '../Display Transaction/DisplayTransaction'
import Navigation from '../../Navigation/Navigation'
import AddTransaction from '../Add Transaction/AddTransaction'

export default function TransactionPage() {
  return (
    <>
    <Navigation/>
    <AddTransaction/>
    <DisplayTransaction/>
    </>
  )
}
