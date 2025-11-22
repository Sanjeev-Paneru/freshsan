export default function ContactInfo() {
  const contactMethods = [
    {
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Call Us",
      content: "+1 (555) 123-4567",
      subContent: "Mon-Fri 8am-6pm",
      link: "tel:+15551234567",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email Us",
      content: "freshsan@gmail.com",
      subContent: "We reply within 24hrs",
      link: "mailto:freshsan@gmail.com",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Visit Us",
      content: "123 Dairy Lane",
      subContent: "Belkotgadhi, Nepal",
      link: "https://maps.google.com",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      iconColor: "text-orange-600",
    },
    {
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      title: "Live Chat",
      content: "Chat with us now",
      subContent: "Average response: 2 min",
      link: "#",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {contactMethods.map((method, index) => (
        <a
          key={index}
          href={method.link}
          className={`group animate-scale-in delay-${
            index * 100
          } block rounded-2xl ${
            method.bgColor
          } p-6 shadow-lg transition-all hover-lift hover:shadow-xl`}
        >
          <div
            className={`mb-4 inline-block rounded-xl bg-white p-3 ${method.iconColor} shadow-md`}
          >
            {method.icon}
          </div>
          <h3 className="mb-1 text-lg font-bold text-gray-900">
            {method.title}
          </h3>
          <p className="mb-1 font-semibold text-gray-900">{method.content}</p>
          <p className="text-sm text-gray-600">{method.subContent}</p>

          <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-gray-900 transition-all group-hover:gap-3">
            <span>Contact now</span>
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </a>
      ))}
    </div>
  );
}
