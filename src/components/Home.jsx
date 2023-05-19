import '../config/LoadHtmlDecorator'

export const Home = () => {
  return (
    <div
      className='hero min-h-[calc(100vh-80px)] pb-[80px]'
      id='home'>
      <div className='hero-content text-center'>
        <div className='max-w-xl'>
          <h1 className='text-5xl sm:text-6xl md:text-7xl font-black'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-700'>
              The
            </span>{' '}
            <span
              data-hd
              data-hd-color='#021027'
              data-hd-type='stroke'
              className='no-gradient'>
              easiest{' '}
            </span>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-700'>
              way to
            </span>{' '}
            <span
              data-hd
              data-hd-color='#021027'
              data-hd-type='italic'>
              enhance{' '}
            </span>{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-700'>
              your
            </span>{' '}
            <span
              data-hd
              data-hd-color='#021027'
              data-hd-type='arrowToTop'>
              HTML{' '}
            </span>
          </h1>
        </div>
      </div>
    </div>
  )
}
