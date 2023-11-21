export const metadata = {
  title: "About Us",
  description: "About Us Page",
};

const AboutUs = () => {
  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1">About Us</h1>
              <div className="mt-14">
                <p className="text-text text-base">
                  <b>
                    This website was built by Ishola Obafemi (FullStack
                    Developer) - Email him at{" "}
                    <a href="mailto:isholaobafemi@gmail.com">
                      isholaobafemi@gmail.com
                    </a>
                  </b>
                  <br />
                  Welcome to Radiance Cakes, where every confection is a
                  masterpiece crafted with <b>passion</b> and <b>precision</b>.
                  My name is <b>Adanma Radiance</b>, the visionary behind this
                  sweet haven, and I am thrilled to share the story of Radiance
                  Cakes with you. <b>Radiance Cakes</b> was born out of a deep
                  love for the art of baking and a desire to bring joy to every
                  celebration. From <b>birthdays to weddings</b>, we believe
                  that every special moment deserves a touch of sweetness. With
                  a foundation built on quality ingredients, creativity, and a
                  commitment to excellence, Radiance Cakes has become a symbol
                  of delectable indulgence. Our journey began with a simple idea
                  – to create cakes that not only taste divine but also
                  captivate the eyes with their radiant beauty. Each recipe is a
                  labor of love, carefully perfected to ensure a symphony of
                  flavors that dance on your taste buds. From classic favorites
                  to innovative creations, our menu reflects a blend of
                  tradition and innovation, making Radiance Cakes a destination
                  for those who appreciate the finer things in life. We take
                  pride in sourcing the <b>finest ingredients</b>, from velvety
                  chocolates to fresh, seasonal fruits, ensuring that every bite
                  is an experience to savor. Radiance Cakes is more than just a
                  bakery; it's <b>a celebration of life's sweet moments</b>.
                  Whether you're marking a milestone or simply craving a slice
                  of happiness, we invite you to indulge in the magic of
                  Radiance Cakes. Join us on this delightful journey as we
                  continue to spread joy, one slice at a time. Thank you for
                  being a part of our story. We look forward to being a part of
                  yours.
                  <br /> Sincerely, Adanma Radinace - Founder of Radiance Cakes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
