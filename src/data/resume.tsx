import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Marco Antonio Centeno",
  initials: "MAC",
  url: "https://marcocenteno.vercel.app/",
  location: "Jalisco, Mexico",
  locationLink: "https://www.google.com/maps/place/jalisco",
  description:
    "Software Developer. I love building things and helping people.",
  summary:
    "At the end of 2020 I start geting interested in the development of aplications, now I'm a [Software Developer](/#education) who wants to learn new technologies doing my best as well as I can. I start with c, c++, and c# in the baccalaureate but [I get envolved to the web technologies like JavaScript, Typescrit and Their frameworks](/#skills). In the other hand, I really like play videogames, do exercise and play instruments.",
  avatarUrl: "/me.jpeg",
  skills: [
    "C#",
    "SQL",
    ".NET Framework",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "JavaScript",
    "C++",
    "Electron",
    "Git",
    "Java",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "marco.centeno.dev@gmail.com",
    tel: "(+52) 3337742789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/marco-centeno",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/marco-centeno-contla-551338313/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@overwritte",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:marco.centeno.dev@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Molex Consulant",
      href: "https://www.molex.com/en-us/home",
      badges: ["Software Developer", "IT"],
      location: "Av. Centro Logístico, 45777, Centro Logístico Jalisco, Jal.",
      title: "C# & .NET Software Developer",
      logoUrl: "https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-1/241056567_2952355578425866_7566865815427510582_n.png?_nc_cat=107&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=aMemo0FLcQEQ7kNvgGi8Nk7&_nc_oc=Adhpj74s0SkInpRVEI8zbuI3W7mL9SmcWiPtbgA-Fnzi66KsiPVvhGDIxadlqdtNQSZaSDMOb0HBIq3xzt1-qItr&_nc_zt=24&_nc_ht=scontent-qro1-2.xx&_nc_gid=ARCHz-b2fNjXoF8d8-614G4&oh=00_AYAWdus_7u1DgMcI-JxNJZHO3r0X_TfIx0TcAvTImWH-4w&oe=67AB6830",
      start: "October 2024",
      end: "--/--/----",
      description:
        `Developed and implemented software solutions to optimize manufacturing processes, improving efficiency, compliance, and cost savings. 
        Designed and maintained systems for process tracking, quality control, change management, and employee engagement. Automated workflows to reduce manual errors, 
        enhance traceability, and streamline decision-making. Provided technical support and led system migrations to ensure seamless operations across multiple locations. 
        Focused on innovation and continuous improvement to drive operational excellence and business growth.`,
    },
    {
      company: "FabLab Baccalaureate",
      href: "http://prepa17.sems.udg.mx/",
      badges: [],
      location: "Street Emiliano Zapata, La Capilla, 45690 Las Pintas, Jalisco, Mexico",
      title: "Attention, care and advice in the manufacturing software laboratory",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSMSaJ90t8kTFr9iHaYPR7sEap_7XDV42YdA&s",
      start: "Junuary 2024",
      end: "July 2024",
      description:
        `During that time, I oversaw, take care and gives support to the Arduinos, 3D printers, Laptops, tools and other areas of the same laboratory.
         Mus of the people who enter to this area was there for building their projects and I had the responsibility to help them in a kind way.
         It helps me to develop my communication skills and relation`,
    },
  ],
  education: [
    {
      school: "Lamar University",
      href: "https://lamar.mx/",
      degree: "Engineering in Software & Application Development",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAi39QOOrbih-1kNiePgVl5hXtW1v4SVXkzB7EkxXVVLM38UYHtJKIwMgui-xV3DqMc_M&usqp=CAU",
      start: "2024",
      end: "2027",
    },
    {
      school: "University of Guadalajara (UDG)",
      href: "https://www.udg.mx/es",
      degree: "Technical baccalaureate in Software Development (BTDS)",
      logoUrl: "/udg.png",
      start: "2021",
      end: "2024",
    },
    {
      school: "Quick Learning",
      href: "https://www.quicklearning.com",
      degree: "English course + TOEFL",
      logoUrl: "/quicklearning.jfif",
      start: "2021",
      end: "2024",
    },
    {
      school: "Google x Coursera",
      href: "https://wlu.ca",
      degree: "Google certificate. “cybersecurity fundamentals”.",
      logoUrl: "/cousera.png",
      start: "2024",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Screen Recorder",
      href: "https://overwritte.github.io/Screen-Recorder/",
      dates: "July 2024",
      active: true,
      description:
        `I developed an entire screen recorder application using native functions of JavaScript.
        It has a live preview of the record and at the finish it creates the video in the download folder.`,
      technologies: [
        "JavaScript",
        "CSS",
        "HTML",
      ],
      links: [
        {
          type: "Youtube",
          href: "https://www.youtube.com/watch?v=orzkXon1IqM",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Website",
          href: "https://overwritte.github.io/Screen-Recorder/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/OVERWRITTE/Screen-Recorder",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/screenRecorder.jpg",
      video:
        "",
    },
    {
      title: "Dead Force",
      href: "https://overwritte.github.io/Screen-Recorder/",
      dates: "July 2024",
      active: true,
      description:
        `Deadforce is a portable videogame where you hav to recover the starfire but it is not easy because you ar going to figth with the enemyes and bosses`,
      technologies: [
        "JavaScript",
        "Bootstrap",
        "C#",
        "Unity",
      ],
      links: [
        {
          type: "Website",
          href: "https://pharagon-eaf26.web.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/deadforce.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Recrea Steam",
      dates: "February 16th - 28th, 2024",
      location: "Jalisco, Mexico",
      description:
        "Developed a web application which delivered realtime data using industrial water sensors.",
      image:
        "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F539fb7d8b3b6743ad4198d9f89e2dbb7.cdn.bubble.io%2Ff1650391806103x830395817704966800%2FDise%25C3%25B1o%2520sin%2520t%25C3%25ADtulo%2520%252813%2529.jpg?w=128&h=128&auto=compress&dpr=2&fit=crop&q=100",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Solve for tomorrow",
      dates: "May 09, 2024",
      location: "Jalisco, Mexico",
      description:
        "Developed a web application which delivered realtime data using industrial water sensors.",
      image:
        "https://fitt-iitd.in/web/assets/images/programs/samsung-solve.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
