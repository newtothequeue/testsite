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
      <div id="carouselExampleCaptions" className="slide carousel relative" data-bs-ride="carousel">
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 mb-4 flex justify-center p-0">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
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
              src="/static/images/don_callejon_spring_fling.jpg"
              className="block w-full"
              alt="..."
            />
            <div className="carousel-caption absolute hidden text-center md:block">
              <h3 className="text-xl">Welcome to Don Callejon Community Organization!</h3>
              <p></p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              //src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
              src="/static/images/don_callejon_front_copy.jpg"
              className="block w-full"
              alt="..."
            />
            <div className="carousel-caption absolute hidden text-center md:block">
              <h3 className="text-xl"></h3>
              <p></p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              //src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
              src="/static/images/don_callejon_spring_fling.jpg"
              className="block w-full"
              alt="..."
            />
            <div className="carousel-caption absolute hidden text-center md:block">
              <h5 className="text-xl"></h5>
              <p></p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 right-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container my-24 mx-auto px-6">
        <section className="mb-32 text-gray-800">
          <div className="relative overflow-hidden bg-cover bg-no-repeat"></div>
          <div className="container px-4 text-gray-800 md:px-12">
            <div className="block rounded-lg py-10 px-4 shadow-lg md:py-12 md:px-6">
              <div className="flex flex-wrap justify-center text-center lg:text-left">
                <div className="w-full shrink-0 grow-0 basis-auto px-6 xl:w-10/12">
                  <div className="grid items-center gap-x-6 lg:grid-cols-2">
                    <div className="mb-10 lg:mb-0">
                      <h2 className="text-3xl font-bold">
                        Do not miss any updates.
                        <br />
                        <span className="text-blue-600">Subscribe to the newsletter</span>
                      </h2>
                    </div>

                    <div className="mb-6 md:mb-0">
                      <div className="flex-row md:flex">
                        <input
                          type="text"
                          className="form-control m-0 mb-2 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-sm font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none md:mb-0 md:mr-2"
                          placeholder="Enter your email"
                        />
                        <button
                          type="submit"
                          className="inline-block rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
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
