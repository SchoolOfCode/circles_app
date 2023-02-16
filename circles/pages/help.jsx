import Image from "next/image";
import image from "../public/images/slice11.png";
import Link from "next/link";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Faq({ img, title, description }) {
  return (
    <section>
      <div>
        <Image
          src={image}
          className="w-screen lg:h-[40em]"
          alt="colour gradient"
        />
        <div className="">
          <h2 className=" relative text-black text-4xl lg:text-7xl xl:text-7xl font-bold ml-5 sm:ml-28 sm:mr-28 lg:ml-20 mb-5 -mt-96 sm:-mt-72 lg:-mt-[6em] text-center">
            Useful Links & FAQ's
          </h2>
          <p className="relative text-black text-sm sm:text-sm lg:text-lg ml-10 mr-10 sm:ml-28 sm:mr-28 lg:ml-20 text-center">
            This page showcases a range of organisations and charities that
            provide services relating to Health, Well Being, Loss and more.
            <br></br>
            Click on read more to visit their website and click{" "}
            <Link href="#faq" className="underline font-bold ">
              here
            </Link>{" "}
            to go to frequently asked questions.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="grid gap-x-8 gap-y-20  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-28 lg:mt-80">
          <Card
            img="https://www.ageuk.org.uk/bp-assets/globalassets/calderdale--kirklees/2022/_potential-web-banner-1.png"
            title="Age Uk"
            description="We're a local charity supporting older people, their families and carers.
                        Our aim is to make Herefordshire & Worcestershire 
                        a great place to grow older!"
            href="https://www.ageuk.org.uk/herefordshireandworcestershire/about-us/"
            alt="Age UK"
          />

          <Card
            img="data:image/png;base64,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"
            title="EDAS - Engage Develop Adapt Succeed"
            description="EDAS provides support to adults and young people affected by alcohol, illicit substances, 
            and over-the-counter or prescribed medication misuse and/or experiencing mental distress."
            href="https://www.edasuk.org/"
          />

          <Card
            img="https://assets.nhs.uk/campaigns-cms-prod/images/emm-og-logo.width-1200.jpg"
            title="Better Health - Every Mind Matters"
            description="There are small things we can all do to help be kind to your mind, 
            and these can make a big difference to how we feel. Get expert advice and practical tips to help you look after 
            your mental wellbeing and make them part of your daily routine."
            href="https://www.nhs.uk/every-mind-matters/"
            alt="nhs"
          />

          <Card
            img="https://wishy.org.uk/uploads/images/2929100818.jpg"
            title="Heart Heros"
            description="Heart Heroes supports families of children living with congenital heart disease and heart problems. Our goal is for children and their siblings to be included in all our events, 
            along with parents, grandparents, aunties, uncles and any other close family."
            href="https://heartheroes.co.uk/"
            alt="Wishy logo"
          />

          <Card
            img="https://d31ezp3r8jwmks.cloudfront.net/j9c6xzgprrapjjdiqn1unwrllapv"
            title="Nutriri"
            description="A training and service provider improving access to nutrition and fitness without a weight focus."
            href="https://www.nutriri.org/"
          />

          <Card
            img="https://www.thesilverline.org.uk/globalassets/media/1400x458-lady-on-phone-with-flowers.jpg"
            title="The Silver Line"
            description="The Silver Line Helpline is a free, confidential telephone service just for older people.
We provide friendship, conversation and support 24 hours a day, 7 days a week"
            href="https://www.thesilverline.org.uk/"
            alt="The Silver Line"
          />

          <Card
            img="https://media.licdn.com/dms/image/C4E0BAQEj4sfhfwy2mQ/company-logo_200_200/0/1668423060331?e=2147483647&v=beta&t=tlorX8qANizfBB2yteGxZYm9idoynqbn-_gCnp70KMU"
            title="Confidentiality Advisory Group"
            description="The Confidentiality Advisory Group (CAG) is an independent body which provides expert advice on the use of confidential patient information. This includes providing advice to us, the Health Research Authority (HRA) for research uses."
            href="https://www.hra.nhs.uk/about-us/committees-and-services/confidentiality-advisory-group/"
            alt="NHS Health Authority logo"
          />

          <Card
            img="https://www.laparent.com/wp-content/uploads/2019/01/Parenting-Group-1024x682.jpg"
            title="Parent Support"
            description="My non-judgemental approach provides an open, honest and safe environment for many parents and families. Working with and supporting all kinds of families and colleagues in the field of parenting for the last 20 years"
            href="https://www.parentsupport.ie/"
            alt="Parents sitting"
          />

          <Card
            img="https://s3-eu-west-1.amazonaws.com/bfo.community/images/entry.poster.png"
            title="Breaking Free"
            description="Confidential wellness and recovery support program for alcohol and drugs"
            href="https://www.breakingfreeonline.com/"
            alt="Breaking through logo"
          />

          <Card
            img="https://www.rehab4addiction.co.uk/wp-content/uploads/2019/02/what-happens-at-smart-recovery-meeting-1200x720.png"
            title="SMART Recovery"
            description="SMART Recovery helps participants decide whether they have a problem, builds up their motivation to change and offers a set of proven tools and techniques to support recovery."
            href="https://smartrecovery.org.uk/"
            alt="Smart Recovery logo"
          />

          <Card
            img="https://d3nag6e3dddgye.cloudfront.net/uploads/container/779297/icon/Cruse_Profile-03_89NWrQKWra5525ivCyuZVR.jpg"
            title="Cruse Bereavement Support"
            description="We help people through one of the most painful times in life – with bereavement support, information and campaigning."
            href="https://www.cruse.org.uk/understanding-grief/grief-experiences/traumatic-loss/coronavirus-bereavement-and-grief/"
            alt="Cruse Bereavement Support logo"
          />

          <Card
            img="https://www.ataloss.org/GetImage.aspx?IDMF=2a50180f-bfdf-4554-aa64-1ea2511d4480&w=2247&h=1498&src=mc"
            title="AtaLoss"
            description="AtaLoss helps bereaved people find support and wellbeing. Our vision is that no bereaved person in the UK should be left floundering or alone 
            and unable to find support when they need it. "
            href="https://www.ataloss.org/Pages/FAQs/Category/coronavirus-pandemic"
            alt="Sad teenager"
          />
        </div>
      </div>

      <section
        className="bg-gradient-to-b from-yellow-100 to-[#BAE5F3] max-h-full mt-32 pt-60 pb-60 font-mons"
        id="faq"
      >
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8  ">
          <h2 className="mb-32 text-4xl font-bold leading-none text-center sm:text-6xl">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-gray-700 text-xl">
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                How do I get started?
              </h3>
              <p className="md:pl-0 md:col-span-7 text-lg">
                Your social prescriber would have sent you an email with a
                unique PIN you can use to sign in. Your Link Worker will be in
                touch with more details.
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                How do I join a group?
              </h3>
              <p className="md:pl-0 md:col-span-7 text-lg ">
                To join a group, navigate your to the groups page and get in
                touch with the organisers directly, via email or phone.
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                How can I cancel my attendance to an event?
              </h3>
              <p className="md:pl-0 md:col-span-7 text-lg">
                If for whatever reason you are unable to attend an event that
                you are booked in for, you can cancel at any time by getting in
                touch with the group or organisation. Most events are drop-in
                only so you may not need to do this.
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                If I need additional support and help who should I contact?
              </h3>
              <p className="md:pl-0 md:col-span-7 text-lg">
                If you need additional support please contact your assigned Link
                Worker so they can assist you. Otherwise, go to our contact page
                and send us an email.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </section>
  );
}
