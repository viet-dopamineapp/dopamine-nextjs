import Image from 'next/image'

const fetchData = async () => {
    const res = await fetch('https://web-api.coinmarketcap.com/v1/cryptocurrency/listings/latest')
    return res.json()
}

export default async function Home() {

  const data = await fetchData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className={'grid gap-10 grid-cols-3 grid-rows-3'}>
            {data.data.map((e) => (
                <div className={'flex flex-row items-center'} key={e.id}>
                    <img
                        className={'mr-9'}
                        alt={'logo'} src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${e.id}.png?_=5bcdbc6`}
                        height={50} width={50} />
                    <p>{e.name}</p>
                </div>
            ))}
        </div>
      </div>
    </main>
  )
}
