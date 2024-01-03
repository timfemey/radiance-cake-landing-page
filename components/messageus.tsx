export default function ChatUs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* CTA box */}
        <div
          className="relative bg-teal py-10 px-8 md:py-16 md:px-12"
          data-aos="fade-up"
        >
          <div className="relative flex flex-col lg:flex-row justify-between items-center">
            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="h3 mb-2 text-header">Stay in the loop</h3>
              <p className="text-text text-lg">
                Message us directly and lets start baking 😋.
              </p>
            </div>

            {/* CTA form */}
            <form className="w-full lg:w-1/2">
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                <a
                  className="btn text-text bg-gray-600 hover:bg-gray-700 shadow"
                  href="https://api.whatsapp.com/send?phone=2348122116509&text=Hi,I like your website"
                >
                  Chat us on Whatsapp 💬
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
