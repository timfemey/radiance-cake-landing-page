import TestimonialImage01 from "@/public/images/testimonial-01.jpg";
import TestimonialImage02 from "@/public/images/testimonial-02.jpg";
import TestimonialImage03 from "@/public/images/testimonial-03.jpg";

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-header">Don't take our word for it</h2>
            <p className="text-xl text-text">
              Some of our customers reviews on our snacks, They tried it once
              and kept comig back😉
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {/* 1st testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-amber-800"
              data-aos="fade-up"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img
                    className="rounded-full"
                    src={TestimonialImage01.src}
                    width={48}
                    height={48}
                    alt="Testimonial 01"
                  />
                  <svg
                    className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-gray-700"
                    viewBox="0 0 24 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-white grow">
                I ordered a cake for my daughter's birthday, and oh my goodness,
                it was pure magic! The layers were like a symphony of flavors,
                and the presentation was so beautiful that we almost didn't want
                to cut into it. Success Snacks truly knows how to turn a
                celebration into an unforgettable experience. Can't wait for the
                next occasion to order another masterpiece!
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Mrs Ugomma</cite>
                {/* <a
                  className="text-gray-700 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  UX Board
                </a> */}
              </div>
            </div>

            {/* 2nd testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-amber-800"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img
                    className="rounded-full"
                    src={TestimonialImage02.src}
                    width={48}
                    height={48}
                    alt="Testimonial 02"
                  />
                  <svg
                    className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-gray-700"
                    viewBox="0 0 24 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-white grow">
                I consider myself a Meat and Chicken Pie connoisseur, and
                Success Snacks exceeded all expectations! The pies was not only
                delicious, but the attention to detail in the design was
                phenomenal. It was like a work of art that I almost felt guilty
                devouring. Thank you for making our special day even more
                memorable. You've gained a customer for life
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">
                  Prof. John Asemota
                </cite>
                {/* <a
                  className="text-gray-700 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  UX Board
                </a> */}
              </div>
            </div>

            {/* 3rd testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-amber-800"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img
                    className="rounded-full"
                    src={TestimonialImage03.src}
                    width={48}
                    height={48}
                    alt="Testimonial 03"
                  />
                  <svg
                    className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-gray-700"
                    viewBox="0 0 24 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-white grow">
                I recently ordered a bunch of pancakes for a last-minute
                celebration, and Success Snacks went above and beyond. Not only
                did they deliver on time, but the pancakes was an absolute
                showstopper. Moist, flavorful, and beautifully crafted. The
                customer service was exceptional, making the entire experience
                stress-free. This is hands down the best pancake I've ever had –
                kudos to the amazing team!
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Chinedu </cite>
                {/* <a
                  className="text-gray-700 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  UX Board
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
