import Head from 'next/head'
import Link from 'next/link'
// import Button from '../stories/Button.js'

export default function Home() {
  return (
    <>
      {/* メタデータ書けるよ */}
      <Head>
        <title>Next App Practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/Test"><a>test page</a></Link>


    </>
  )
}
