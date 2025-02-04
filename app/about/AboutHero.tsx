import React from 'react'

const AboutHero = () => {
  return (
    <div className="flex justify-end  flex-col w-full px-5 py-10  xl:px-16 xl:py-32 xl:h-[540px] h-[320px] bg-cover bg-black/30 bg-blend-multiply font-sans text-white" style={{backgroundImage: `url('/assets/abstracttech.jpg')`}}>
            <h1 className="xl:text-6xl text-3xl text-white font-light">About<br></br><span className="font-medium">Integra Strategy</span></h1>

    </div>
  )
}

export default AboutHero