import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import CreateBox from '../components/CreateBox'
import PayBox from '../components/PayBox'

const CREATE_TAB = 'create'
const PAY_TAB = 'pay'

export default function Home() {
  const [activeTab, setActiveTab] = useState(CREATE_TAB)

  return (
    <div>
      <main className="main">
        <h1>
          Tornado Invoice
        </h1>

        <div class="tabs">
          <a onClick={() => setActiveTab(CREATE_TAB)}>Create Invoice</a>
          | <a onClick={() => setActiveTab(PAY_TAB)}>Pay Invoice</a>
        </div>

        { activeTab == CREATE_TAB && <CreateBox />}
        { activeTab == PAY_TAB && <PayBox />}
      </main>
    </div>
  )
}
