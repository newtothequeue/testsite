import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import Script from 'next/script'

const DEFAULT_LAYOUT = 'LandingLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  return { props: { authorDetails } }
}

export default function Landing({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    // <MDXLayoutRenderer
    //   layout={frontMatter.layout || DEFAULT_LAYOUT}
    //   mdxSource={mdxSource}
    //   frontMatter={frontMatter}
    // />
    <>
    <Script src="/index.min.js" />
    <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active relative float-left w-full">
      <img
        //src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
        src= '/static/images/don_callejon_spring_fling.jpg'
        class="block w-full"
        alt="..."
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h3 className="text-xl">Welcome to Don Callejon Community Organization!</h3>
        <p></p>
      </div>
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        //src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
        src= '/static/images/don_callejon_front_copy.jpg'
        className="block w-full"
        alt="..."
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h3 className="text-xl"></h3>
        <p></p>
      </div>
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        //src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
        src= '/static/images/don_callejon_spring_fling.jpg'
        className="block w-full"
        alt="..."
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl"></h5>
        <p></p>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div class="container my-24 px-6 mx-auto">

  
  <section class="mb-32 text-gray-800">
    <div
      class="relative overflow-hidden bg-no-repeat bg-cover"
    ></div>
    <div class="container text-gray-800 px-4 md:px-12">
      <div
        class="block rounded-lg shadow-lg py-10 md:py-12 px-4 md:px-6"
      >
        <div class="flex flex-wrap justify-center text-center lg:text-left">
          <div class="grow-0 shrink-0 basis-auto w-full xl:w-10/12 px-6">
            <div class="grid lg:grid-cols-2 gap-x-6 items-center">
              <div class="mb-10 lg:mb-0">
                <h2 class="text-3xl font-bold">
                  Do not miss any updates.
                  <br />
                  <span class="text-blue-600">Subscribe to the newsletter</span>
                </h2>
              </div>

              <div class="mb-6 md:mb-0">
                <div class="md:flex flex-row">
                  <input
                    type="text"
                    class="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  

</div>

</>
  )
}
