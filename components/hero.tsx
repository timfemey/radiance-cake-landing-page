import ModalVideo from "@/components/modal-video";

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4 text-header" data-aos="fade-up">
              Success Snacks 😋
            </h1>
            <p
              className="text-xl text-text mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Indulge in the exquisite world of Success Snacks, where every
              slice is a symphony of flavors and each creation is meticulously
              crafted to elevate your moments with a touch of sweetness and
              eminence.
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a
                  className="btn text-white bg-gray-800 hover:text-text w-full mb-4 sm:w-auto sm:mb-0"
                  href="https://api.whatsapp.com/send?phone=2348122116509&text=Hi,I like your website."
                >
                  Order Now 😋
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a
                  className="btn text-text hover:bg-gray-600 w-full sm:w-auto sm:ml-4"
                  href="#0"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>

          <ModalVideo
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}
