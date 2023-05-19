import { DocsItem } from './DocsItem'

export const Docs = () => {
  return (
    <div className='grid my-8 container-sm max-w-3xl m-auto gap-12 text-center'>
      <h2 className='text-4xl sm:text-5xl md:text-6xl font-black w-fit text-center m-auto'>
        <span data-hd data-hd-color='#021027' data-hd-type='waves'>
          Docs
        </span>
      </h2>
      <DocsItem>
        <h3
          className='text-3xl sm:text-4xl md:text-4xl font-black'
          id='install'>
          Install
        </h3>
        <p>
          {`
          Insert the following code at the end of the <body> tag in your
          HTML file:`}
        </p>
        <div className='mockup-code w-full'>
          <pre>
            <code>{`<script src='https://bautipietra.github.io/html-decorator/index.min.js'></script>`}</code>
          </pre>
        </div>
      </DocsItem>
      <DocsItem>
        <h3
          className='text-3xl sm:text-4xl md:text-4xl font-black'
          id='usage'>
          Usage
        </h3>
        <p>
          {`
          Add to your HTML tag the following attributes: data-hd, data-hd-color, data-hd-type.`}
        </p>
        <div className='mockup-code w-full'>
          <pre>
            <code>{`<span data-hd data-hd-color="YourColor" data-hd-type="YourType"></span>`}</code>
          </pre>
        </div>
      </DocsItem>
      <DocsItem>
        <h3
          className='text-3xl sm:text-4xl md:text-4xl font-black'
          id='demo'>
          Demo
        </h3>
        <p>
          In the next items you can see the different data-hd-type
          options.
        </p>
        <div className='grid gap-y-12 py-12'>
          <span
            data-hd
            data-hd-color='#021027'
            data-hd-type='underline'
            className='text-3xl sm:text-4xl md:text-4xl font-black w-fit'>
            underline
          </span>
          <span
            data-hd
            data-hd-color='#021027'
            data-hd-type='fill'
            className='text-3xl sm:text-4xl md:text-4xl font-black w-fit'>
            fill
          </span>
          <span
            data-hd
            data-hd-color='#021027'
            data-hd-type='fillUnderline'
            className='text-3xl sm:text-4xl md:text-4xl font-black w-fit'>
            fillUnderline
          </span>
          <span
            data-hd
            data-hd-color='#021027'
            data-hd-type='shadow'
            className='text-3xl sm:text-4xl md:text-4xl font-black w-fit'>
            shadow
          </span>
          <span
            data-hd
            data-hd-color='#021027'
            data-hd-type='fillShadow'
            className='text-3xl sm:text-4xl md:text-4xl font-black w-fit'>
            fillShadow
          </span>
          <span
            data-hd
            data-hd-color='#021027'
            data-hd-type='light'
            className='text-3xl sm:text-4xl md:text-4xl font-black w-fit'>
            light
          </span>
          <span
            data-hd
            data-hd-color='#021027'
            data-hd-type='shape'
            className='text-3xl sm:text-4xl md:text-4xl font-black w-fit'>
            shape
          </span>
          <span
            data-hd
            data-hd-color='#021027'
            data-hd-type='stroke'
            className='text-3xl sm:text-4xl md:text-4xl font-black w-fit'>
            stroke
          </span>
          <span
            data-hd
            data-hd-color='#021027'
            data-hd-type='italic'
            className='text-3xl sm:text-4xl md:text-4xl font-black w-fit'>
            italic
          </span>
          <span
            data-hd
            data-hd-color='#021027'
            data-hd-type='mark'
            className='text-3xl sm:text-4xl md:text-4xl font-black w-fit'>
            mark
          </span>
          <span
            data-hd
            data-hd-color='#021027'
            data-hd-type='fancyUnderline'
            className='text-3xl sm:text-4xl md:text-4xl font-black w-fit'>
            fancyUnderline
          </span>
          <span
            data-hd
            data-hd-color='#021027'
            data-hd-type='waves'
            className='text-3xl sm:text-4xl md:text-4xl font-black w-fit'>
            waves
          </span>
          <span
            data-hd
            data-hd-color='#021027'
            data-hd-type='arrowToRight'
            className='text-3xl sm:text-4xl md:text-4xl font-black w-fit'>
            arrowToRight
          </span>
          <span
            data-hd
            data-hd-color='#021027'
            data-hd-type='arrowToTop'
            className='text-3xl sm:text-4xl md:text-4xl font-black w-fit'>
            arrowToTop
          </span>
        </div>
      </DocsItem>
    </div>
  )
}
