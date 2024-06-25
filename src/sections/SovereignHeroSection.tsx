'use client'
import layer1 from '../images/sovereign-hero-layer-1.png'
import logo from '../images/modular-logo-single.png'
import { sovereignPageData } from '@/lib/data/sovereign'

export default function SovereignHeroSection() {
  return (
    <section className={'hero-section relative w-full overflow-hidden border-white px-[20px] py-[60px] lg:border-x-[16px] lg:p-[80px]'}>
      <img alt={'Modular Summit'} src={layer1.src} className={'object-cove absolute bottom-0 left-0 right-0 top-0 h-full w-full'} />
      <div className={'h-full w-full'}>
        <div className="relative z-[2]">
          {/* Title */}
          <div className={'flex h-full'}>
            <div className={'basis-full'}>
              .<h1 className="text-[56px] font-bold leading-[85%] tracking-[-0.06em] text-[#EC6335] md:text-[80px] lg:text-[136px]">{sovereignPageData.HeroSection.title}</h1>
            </div>
            <div className={'mt-auto basis-auto lg:my-auto'}>
              <img src={logo.src} alt={sovereignPageData.HeroSection.title} className="w-[210px]" />
            </div>
          </div>
          <div className="mb-[30px] mt-[36px] flex items-center lg:mb-[112px]">
            <div className="tex-[28px] font-semibold leading-[85%] tracking-[-0.04em] text-[#423ABB] lg:text-[32px]">{sovereignPageData.HeroSection.event}</div>
            <div className="mx-[22px] h-[25px] w-[2px] bg-[#423ABB] sm:mx-[30px] lg:h-[40px]" />
            <div className="tex-[28px] font-semibold leading-[85%] tracking-[-0.04em] text-[#423ABB] lg:text-[36px]">{sovereignPageData.HeroSection.location}</div>
          </div>

          {/* Hosts Grid */}
          <div className="mb-[112px] grid grid-cols-2 gap-x-5 gap-y-20 sm:mb-[200px] sm:grid-cols-4 sm:gap-x-4">
            {/* Host Card 1 */}
            <div className={`relative h-[140px] w-[140px] sm:h-[165px] sm:w-[165px] lg:h-[265px] lg:w-[265px] 2xl:h-[365px] 2xl:w-[365px]`}>
              <div className="absolute left-[20px] top-[60px] z-[-1] flex h-full w-full flex-col justify-end bg-[#423ABB] lg:left-[30px] lg:top-[80px]">
                <div className="relative pb-5 pl-4 text-[18px] font-bold leading-[1.1em] tracking-[-0.05em] text-white sm:text-[24px] lg:pl-6 lg:text-[36px]">
                  {sovereignPageData.HeroSection.hosts[0].host}
                </div>
              </div>
              <img
                src={sovereignPageData.HeroSection.hosts[0].image}
                alt={sovereignPageData.HeroSection.hosts[0].host}
                className="h-full w-full border-[10px] border-[#77BFF7] object-cover sm:border-[15px] 2xl:border-[25px]"
              />
            </div>

            {/* Host Card 2 */}
            <div
              className={`relative h-[140px] w-[140px] translate-y-[80px] sm:h-[165px] sm:w-[165px] sm:translate-y-[100px] sm:transform lg:h-[265px] lg:w-[265px] 2xl:h-[365px] 2xl:w-[365px]`}
            >
              <div className="absolute left-[20px] top-[60px] z-[-1] flex h-full w-full flex-col justify-end bg-[#423ABB] lg:left-[30px] lg:top-[80px]">
                <div className="relative pb-5 pl-4 text-[18px] font-bold leading-[1.1em] tracking-[-0.05em] text-white sm:text-[24px] lg:pl-6 lg:text-[36px]">
                  {sovereignPageData.HeroSection.hosts[1].host}
                </div>
              </div>
              <img
                src={sovereignPageData.HeroSection.hosts[1].image}
                alt={sovereignPageData.HeroSection.hosts[1].host}
                className="h-full w-full border-[10px] border-[#77BFF7] object-cover sm:border-[15px] 2xl:border-[25px]"
              />
            </div>

            {/* Host Card 3 */}
            <div className={`relative h-[140px] w-[140px] sm:h-[165px] sm:w-[165px] lg:h-[265px] lg:w-[265px] 2xl:h-[365px] 2xl:w-[365px]`}>
              <div className="absolute left-[20px] top-[80px] z-[-1] flex h-full w-full flex-col justify-end bg-[#423ABB] lg:left-[30px] lg:top-[120px]">
                <div className="relative pb-5 pl-4 text-[18px] font-bold leading-[1.1em] tracking-[-0.05em] text-white sm:text-[24px] lg:pl-6 lg:text-[36px]">
                  {sovereignPageData.HeroSection.hosts[2].host}
                </div>
              </div>
              <img
                src={sovereignPageData.HeroSection.hosts[2].image}
                alt={sovereignPageData.HeroSection.hosts[2].host}
                className="h-full w-full border-[10px] border-[#77BFF7] object-cover sm:border-[15px] 2xl:border-[25px]"
              />
            </div>

            {/* Host Card 4 */}
            <div
              className={`relative h-[140px] w-[140px] translate-y-[80px] sm:h-[165px] sm:w-[165px] sm:translate-y-[100px] sm:transform lg:h-[265px] lg:w-[265px] 2xl:h-[365px] 2xl:w-[365px]`}
            >
              <div className="absolute left-[20px] top-[60px] z-[-1] flex h-full w-full flex-col justify-end bg-[#423ABB] lg:left-[30px] lg:top-[80px]">
                <div className="relative pb-5 pl-4 text-[18px] font-bold leading-[1.1em] tracking-[-0.05em] text-white sm:text-[24px] lg:pl-6 lg:text-[36px]">
                  {sovereignPageData.HeroSection.hosts[3].host}
                </div>
              </div>
              <img
                src={sovereignPageData.HeroSection.hosts[3].image}
                alt={sovereignPageData.HeroSection.hosts[3].host}
                className="h-full w-full border-[10px] border-[#77BFF7] object-cover sm:border-[15px] 2xl:border-[25px]"
              />
            </div>
          </div>
          <div className="text-[20px] font-bold leading-[39px] text-[#423ABB] sm:text-[32px]">HOSTED BY</div>
        </div>
      </div>
    </section>
  )
}
