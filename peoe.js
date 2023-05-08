const videos = [
  {
    youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    title: "Rick Astley - Never Gonna Give You Up (Video)",
    publishDate: "July 25, 1987",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=kXYiU_JCYtU",
    title: "Pharrell Williams - Happy (Official Music Video)",
    publishDate: "November 21, 2013",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=ru0K8uYEZWw",
    title: "Maroon 5 - Sugar (Official Music Video)",
    publishDate: "January 14, 2015",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=otCpCn0l4Wo",
    title: "Dua Lipa - Levitating ft. DaBaby (Official Music Video)",
    publishDate: "October 1, 2020",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=hTWKbfoikeg",
    title: "Bruno Mars - The Lazy Song (Official Music Video)",
    publishDate: "April 15, 2011",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=8UVNT4wvIGY",
    title: "Luis Fonsi - Despacito ft. Daddy Yankee",
    publishDate: "January 12, 2017",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=ys1vFzjNMQ8",
    title: "Ed Sheeran - Shape of You [Official Video]",
    publishDate: "January 30, 2017",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=Vz2HcRl4wSk",
    title: "Ariana Grande - 7 rings (Official Video)",
    publishDate: "January 18, 2019",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=8SbUC-UaAxE",
    title: "The Weeknd - Blinding Lights (Official Music Video)",
    publishDate: "January 21, 2020",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
    title: "BTS (방탄소년단) 'Dynamite' Official MV",
    publishDate: "August 21, 2020",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=uelHwf8o7_U",
    title: "Camila Cabello - Havana (Official Music VIdeo) ft. Young Thug",
    publishDate: "October 24, 2017",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=FY8SwIvxj8o",
    title: "Doja Cat - Say So (Official Video)",
    publishDate: "February 27, 2020",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=3tmd-ClpJxA",
    title: "Rihanna - Diamonds",
    publishDate: "November 8, 2012",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=v4pi1LxuDHc",
    title: "Miley Cyrus - Wrecking Ball (Official Video)",
    publishDate: "September 9, 2013",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=ee_Pxl_vW-Q",
    title: "Taylor Swift - Blank Space",
    publishDate: "November 10, 2014",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=QcIy9NiNbmo",
    title:
      "Lady Gaga, Bradley Cooper - Shallow (from A Star Is Born) (Official Music Video)",
    publishDate: "September 27, 2018",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=-tJYN-eG1zk",
    title: "Adele - Hello",
    publishDate: "October 22, 2015",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=tQ0yjYUFKAE",
    title: "P!nk - Just Give Me A Reason ft. Nate Ruess",
    publishDate: "February 5, 2013",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=RgKAFK5djSk",
    title: "Katy Perry - Roar (Official)",
    publishDate: "September 5, 2013",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=9bZkp7q19f0",
    title: "PSY - GANGNAM STYLE(강남스타일) M/V",
    publishDate: "July 15, 2012",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=koJlIGDImiU",
    title: "Drake - Hotline Bling",
    publishDate: "October 26, 2015",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=1UUYjd2rjsE",
    title: "Calvin Harris, Dua Lipa - One Kiss (Official Video)",
    publishDate: "May 2, 2018",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=ktvTqknDobU",
    title: "Ariana Grande - thank u, next (Official Video)",
    publishDate: "November 30, 2018",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=ru0K8uYEZWw",
    title: "Maroon 5 - Sugar (Official Music Video)",
    publishDate: "January 14, 2015",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
    title: "Michael Jackson - Billie Jean (Official Video)",
    publishDate: "October 2, 2009",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=4NRXx6U8ABQ",
    title: "Eminem - Lose Yourself [HD]",
    publishDate: "November 27, 2015",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=3qK82JvRY5s",
    title: "Metallica - Enter Sandman [Official Music Video]",
    publishDate: "November 28, 2015",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    title: "Rick Astley - Never Gonna Give You Up (Video)",
    publishDate: "July 25, 1987",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=kXYiU_JCYtU",
    title: "Pharrell Williams - Happy (Official Music Video)",
    publishDate: "November 21, 2013",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=ru0K8uYEZWw",
    title: "Maroon 5 - Sugar (Official Music Video)",
    publishDate: "January 14, 2015",
  },
];
