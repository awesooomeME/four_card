import Card from '@/components/Card'
import Image from 'next/image'

import supervisor from '@/public/images/icon-supervisor.svg'
import teambuilder from '@/public/images/icon-team-builder.svg'
import karma from '@/public/images/icon-karma.svg'
import calculator from '@/public/images/icon-calculator.svg'

export default function Home() {
  return (
    <main className='min-h-screen h-full grid place-content-center p-5 font-light'>
      <article className='grid max-w-[1200px]'>
        <h1 className='text-center text-[1.6rem] text-grayish_blue'>
          Reliable, efficient delivery
        </h1>
        <h1 className='text-center text-[1.6rem] text-very_dark_blue font-heavy'>
          Powered by Technology
        </h1>
        <p className='text-center text-grayish_blue mt-4'>
          Our artificial intelligence powered tools use millions of project data points to
          ensure that your project is successful.
        </p>
        <section className='grid gap-6 mt-16 desktop:grid-cols-3 desktop:grid-rows-4'>
          <Card title="Supervisor" desc="Monitors activity to identify project roadblocks"
            icon={supervisor} icon_alt='Magnifying glass icon' index={0}/>
          <Card title="Team Builder" desc="Scans our talent network to create the optimal team for your project"
            icon={teambuilder} icon_alt='A house in front of a application UI' index={1}/>
          <Card title="Karma" desc="Regularly evaluates our talent to ensure quality"
            icon={karma} icon_alt='A light bulb' index={2}/>
          <Card title="Calculator" desc="Uses data from past projects to provide better delivery estimates"
            icon={calculator} icon_alt='A desktop monitor showing graphs and pie-charts' index={3}/>
        </section>
      </article>
    </main>
  )
}
