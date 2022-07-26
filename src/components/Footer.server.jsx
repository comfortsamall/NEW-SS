import NewsletterSignup from './NewsletterSignup.client';

const footerNavigation = {
  community: [
    {
      name: 'Instagram',
      href: '#',
    },
    {
      name: 'Facebook',
      href: '#',
    },
    {
      name: 'Twitter',
      href: '#',
    },
  ],
  company: [
    {
      name: 'About Us',
      href: '#',
    },
    {
      name: 'Policy',
      href: '#',
    },
  ],
  collections: [
    {
      name: 'Backcountry snowboards',
      href: '#',
    },
  ],
};

const renderIcon = (iconName) => {
  switch (iconName) {
    case 'Instagram':
      return <InstagramIcon />;
    case 'Facebook':
      return <FacebookIcon />;
    case 'Twitter':
      return <TwitterIcon />;
  }
};

export default function Footer({collections}) {
  return (
    <footer role="contentinfo">
      <div className="border-t-2 border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="col-start-1 row-start-2 lg:row-start-1">
            <h5 className="text-black text-sm font-mono font-bold uppercase">
              Community
            </h5>
            <ul className="mt-8 space-y-4">
              {footerNavigation.community.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  {renderIcon(item.name)}
                  <a href={item.href} className="ml-3">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-start-2 row-start-2 lg:row-start-1">
            <h5 className="text-black text-sm font-mono font-bold uppercase">
              Company
            </h5>
            <ul className="mt-8 space-y-4">
              {footerNavigation.company.map((item) => (
                <li
                  key={item.name}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-start-1 row-start-3 md:col-start-3 md:row-start-2 lg:row-start-1 my-8 md:my-0">
            <h5 className="text-black text-sm font-mono font-bold uppercase">
              Collections
            </h5>
            <ul className="mt-8 space-y-4">
              {collections.map((item) => (
                <li
                  key={item.title}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  <a href={`/collections/${item.handle}`}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 row-start-1 md:col-span-3 lg:col-span-1 mb-8 lg:mb-0">
            <div className="grid md:grid-cols-3 lg:grid-cols-1 gap-5">
              <div className="md:grid-span-1">
                <h5 className="text-black text-sm font-mono font-bold uppercase">
                  Get Updates
                </h5>
                <p className="text-gray-600 mt-5 lg:mt-8">
                  Sign up for promotions, newsletters and more
                </p>
              </div>
              <div className="md:grid-span-2 md:col-start-2 md:col-span-2 lg:col-start-1 lg:row-start-2">
                <NewsletterSignup />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 px-4 md:px-8">
        <p className="text-gray-600">© 2021 Shopify</p>
      </div>
    </footer>
  );
}

const InstagramIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-current"
  >
    <g clipPath="url(#a)">
      <path d="M10.3522 2.40606c2.4266 0 2.7115.01082 3.6706.05409.8871.03966 1.3666.1875 1.6875.3137.4255.16587.7284.36058 1.0457.67789.3173.3173.5156.62019.6779 1.04567.1226.32091.274.80048.3137 1.6875.0433.95913.0541 1.24399.0541 3.67067 0 2.42672-.0108 2.71152-.0541 3.67072-.0397.887-.1875 1.3665-.3137 1.6875-.1659.4254-.3606.7283-.6779 1.0456-.3173.3173-.6202.5157-1.0457.6779-.3209.1226-.8004.2741-1.6875.3137-.9591.0433-1.244.0541-3.6706.0541-2.42672 0-2.71158-.0108-3.67071-.0541-.88702-.0396-1.36659-.1875-1.6875-.3137-.42548-.1659-.72837-.3606-1.04568-.6779-.3173-.3173-.51562-.6202-.67788-1.0456-.1226-.321-.27404-.8005-.3137-1.6875-.04327-.9592-.05409-1.244-.05409-3.67072 0-2.42668.01082-2.71154.05409-3.67067.03966-.88702.1875-1.36659.3137-1.6875.16586-.42548.36058-.72837.67788-1.04567.31731-.31731.6202-.51563 1.04568-.67789.32091-.1226.80048-.27404 1.6875-.3137.95913-.04688 1.24399-.05409 3.67071-.05409Zm0-1.637017c-2.46639 0-2.77648.010817-3.74644.054087-.96634.043269-1.6262.19832-2.20312.42187-.59856.23077-1.10337.54448-1.60817 1.04928-.50481.50481-.81491 1.01322-1.04928 1.60818-.22356.57692-.37861 1.23678-.42188 2.20673-.04327.96634-.05408 1.27644-.05408 3.74279 0 2.46632.01081 2.77642.05408 3.74642.04327.9663.19832 1.6262.42188 2.2067.23077.5986.54447 1.1034 1.04928 1.6082.5048.5048 1.01322.8149 1.60817 1.0493.57692.2235 1.23678.3786 2.20673.4218.96995.0433 1.27644.0541 3.74643.0541 2.4699 0 2.7764-.0108 3.7464-.0541.9663-.0432 1.6262-.1983 2.2067-.4218.5985-.2308 1.1034-.5445 1.6082-1.0493.5048-.5048.8149-1.0132 1.0492-1.6082.2236-.5769.3786-1.2368.4219-2.2067.0433-.97.0541-1.2765.0541-3.74642 0-2.46996-.0108-2.77645-.0541-3.7464-.0433-.96634-.1983-1.6262-.4219-2.20673-.2307-.59856-.5444-1.10336-1.0492-1.60817-.5048-.50481-1.0133-.81491-1.6082-1.04928-.5769-.22356-1.2368-.378607-2.2067-.421876-.9736-.039664-1.2837-.050481-3.75-.050481Z" />
      <path d="M10.3521 5.11865c-2.57448 0-4.66582 2.08774-4.66582 4.66587 0 2.57808 2.09134 4.66588 4.66582 4.66588 2.5746 0 4.6659-2.0914 4.6659-4.66588 0-2.57452-2.0913-4.66587-4.6659-4.66587Zm0 7.69475c-1.67303 0-3.0288-1.3558-3.0288-3.02888 0-1.67308 1.35577-3.02885 3.0288-3.02885 1.6731 0 3.0289 1.35577 3.0289 3.02885s-1.3558 3.02888-3.0289 3.02888ZM15.2019 6.02407c.6014 0 1.0889-.48753 1.0889-1.08894 0-.6014-.4875-1.08894-1.0889-1.08894-.6014 0-1.089.48754-1.089 1.08894 0 .60141.4876 1.08894 1.089 1.08894Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill="#fff"
          transform="translate(.5)"
          d="M0 0h19.2308v19.2308H0z"
        />
      </clipPath>
    </defs>
  </svg>
);

const FacebookIcon = () => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-current"
  >
    <path d="M17.5058.231919c.2814 0 .5198.097756.7154.293269.1955.195513.2932.433974.2932.715382V17.2377c0 .2814-.0977.5199-.2932.7154-.1956.1955-.434.2932-.7154.2932h-4.55v-6.9432h2.3221l.3288-2.74426h-2.6509V6.79923c0-.42244.0939-.74295.2817-.96154.1878-.21859.5317-.32821 1.0317-.32885H15.7V3.06942c-.6256-.06282-1.3215-.09423-2.0875-.09423-1.0474 0-1.892.30897-2.5337.92692-.6416.61795-.9621 1.48974-.9615 2.61539v2.04038H7.79519v2.74422h2.32211v6.9433H1.50865c-.28141 0-.519868-.0978-.715381-.2933C.597756 17.7566.5 17.5181.5 17.2367V1.23961C.5.958201.597756.719739.793269.524226.988782.328713 1.22724.230957 1.50865.230957H17.5058v.000962Z" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    width="19"
    height="15"
    viewBox="0 0 19 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-current"
  >
    <path d="M18.2554 1.73439c-.5016.73969-1.1034 1.36677-1.8056 1.88123 0 .05046.0062.12892.0185.23538.0123.10646.0185.18493.0185.23539 0 .97784-.1443 1.956-.433 2.93446-.2886.97846-.7273 1.91261-1.3163 2.80246-.5889.88989-1.288 1.67969-2.0972 2.36949-.8092.6899-1.7809 1.2416-2.91507 1.6551-1.13415.4136-2.35354.6203-3.65815.6203-2.03139 0-3.88708-.5455-5.56708-1.6366.351385.0252.63969.0379.86492.0379 1.69293 0 3.204-.5142 4.53323-1.5425-.79015-.0123-1.49538-.2535-2.11569-.7237-.62031-.4701-1.056-1.07507-1.30708-1.81476.21293.05046.44493.07569.696.07569.33847 0 .65816-.05015.95908-.15046-.84-.17538-1.536-.59538-2.088-1.26-.552-.66461-.828-1.42954-.828-2.29477v-.03784c.47631.25107 1.02185.38892 1.63662.41353-.48923-.32615-.87785-.75569-1.16585-1.28861-.288-.53292-.43231-1.10646-.43292-1.72062 0-.62707.15661-1.24153.46984-1.84338.91508 1.14092 2.02154 2.04061 3.31939 2.69908 1.29785.65846 2.70523 1.02523 4.22215 1.1003-.088-.31323-.132-.58923-.132-.828 0-1.00307.35723-1.85877 1.07171-2.56707.7144-.70831 1.5858-1.0624642 2.6141-1.0624642.5016 0 .9843.1003072 1.4483.3009232.464.200615.8591.482769 1.1853.846461.8277-.16308 1.5987-.457846 2.3132-.884307-.2634.852927-.7963 1.523697-1.5988 2.012307.765-.10031 1.461-.28831 2.088-.564l.0019-.00092Z" />
  </svg>
);
