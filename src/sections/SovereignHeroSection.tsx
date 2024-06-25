'use client'
import layer1 from '../images/sovereign-hero-layer-1.png'
import logo from '../images/modular-logo-single.png'
import { sovereignPageData } from '@/lib/data/sovereign'

export default function SovereignHeroSection() {
  return (
    <section className={'hero-section relative w-full overflow-hidden border-white p-[80px] lg:border-[16px] lg:border-t-0'}>
      <div className={'h-full w-full'}>
        <div className={'absolute left-0 top-0 z-[1] h-full w-full'} />

        <div className={'absolute left-0 top-0 z-0 hidden h-full w-full md:block'}>
          <div className={'layer-1 absolute -bottom-20 -left-10 -right-10 z-0'}>
            <img alt={'Modular Summit'} src={layer1.src} className={'object-cover'} />
          </div>
        </div>
        <div className="relative z-[2]">
          <div className={'mb-[112px] flex h-full'}>
            <div className={'basis-full'}>
              <h1 className="mb-[36px] text-[136px] font-bold leading-[85%] tracking-[-0.06em] text-[#EC6335]">{sovereignPageData.HeroSection.title}</h1>
              <div className="flex items-center">
                <div className="text-[32px] font-semibold leading-[85%] tracking-[-0.04em] text-[#423ABB]">{sovereignPageData.HeroSection.event}</div>
                <div className="mx-[30px] h-[40px] w-[2px] bg-[#423ABB]" />
                <div className="text-[36px] font-semibold leading-[85%] tracking-[-0.04em] text-[#423ABB]">{sovereignPageData.HeroSection.location}</div>
              </div>
            </div>
            <div className={'basis-auto'}>
              <img src={logo.src} alt={sovereignPageData.HeroSection.title} width={173} height={44} className="max-w-[120px] sm:max-w-full" />
            </div>
          </div>

          <div className="mb-[270px] flex justify-around">
            <div className={`relative h-[265px] w-[265px] 2xl:h-[365px] 2xl:w-[365px]`}>
              <div className="absolute left-[30px] top-[80px] z-[-1] flex h-full w-full flex-col justify-end bg-[#423ABB]">
                <div className="relative pb-5 pl-6 text-[36px] font-bold leading-[1.1em] tracking-[-0.05em] text-white">{sovereignPageData.HeroSection.hosts[0].host}</div>
              </div>
              <img
                src={sovereignPageData.HeroSection.hosts[0].image}
                alt={sovereignPageData.HeroSection.hosts[0].host}
                className="h-full w-full border-[15px] border-[#77BFF7] object-cover 2xl:border-[25px]"
              />
            </div>

            <div className={`relative h-[265px] w-[265px] translate-y-[100px] transform 2xl:h-[365px] 2xl:w-[365px]`}>
              <div className="absolute left-[30px] top-[80px] z-[-1] flex h-full w-full flex-col justify-end bg-[#423ABB]">
                <div className="relative pb-5 pl-6 text-[36px] font-bold leading-[1.1em] tracking-[-0.05em] text-white">{sovereignPageData.HeroSection.hosts[1].host}</div>
              </div>
              <img
                src={sovereignPageData.HeroSection.hosts[1].image}
                alt={sovereignPageData.HeroSection.hosts[1].host}
                className="h-full w-full border-[15px] border-[#77BFF7] object-cover 2xl:border-[25px]"
              />
            </div>

            <div className={`relative h-[265px] w-[265px] 2xl:h-[365px] 2xl:w-[365px]`}>
              <div className="absolute left-[30px] top-[120px] z-[-1] flex h-full w-full flex-col justify-end bg-[#423ABB] 2xl:top-[80px]">
                <div className="relative pb-5 pl-6 text-[36px] font-bold leading-[1.1em] tracking-[-0.05em] text-white">{sovereignPageData.HeroSection.hosts[2].host}</div>
              </div>
              <img
                src={sovereignPageData.HeroSection.hosts[2].image}
                alt={sovereignPageData.HeroSection.hosts[2].host}
                className="h-full w-full border-[15px] border-[#77BFF7] object-cover 2xl:border-[25px]"
              />
            </div>

            <div className={`relative h-[265px] w-[265px] translate-y-[100px] transform 2xl:h-[365px] 2xl:w-[365px]`}>
              <div className="absolute left-[30px] top-[80px] z-[-1] flex h-full w-full flex-col justify-end bg-[#423ABB]">
                <div className="relative pb-5 pl-6 text-[36px] font-bold leading-[1.1em] tracking-[-0.05em] text-white">{sovereignPageData.HeroSection.hosts[3].host}</div>
              </div>
              <img
                src={sovereignPageData.HeroSection.hosts[3].image}
                alt={sovereignPageData.HeroSection.hosts[3].host}
                className="h-full w-full border-[15px] border-[#77BFF7] object-cover 2xl:border-[25px]"
              />
            </div>
          </div>
          <div className="text-[32px] font-bold leading-[39px] text-[#423ABB]">HOSTED BY</div>
        </div>
      </div>
    </section>
  )
}
