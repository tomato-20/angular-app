import { Book } from 'src/app/modules/book-list/model/books.model';

export const mockBookArray = [
  {
    kind: 'books#volume',
    id: 'yrVEBsjWiBcC',
    etag: 'Wb9FCmV2nlw',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/yrVEBsjWiBcC',
    volumeInfo: {
      title: 'Awakenings',
      authors: ['Oliver Sacks'],
      publisher: 'Vintage',
      publishedDate: '1999-10-05',
      description:
        'Awakenings--which inspired the major motion picture--is the remarkable story of a group of patients who contracted sleeping-sickness during the great epidemic just after World War I. Frozen for decades in a trance-like state, these men and women were given up as hopeless until 1969, when Dr. Oliver Sacks gave them the then-new drug L-DOPA, which had an astonishing, explosive, "awakening" effect. Dr. Sacks recounts the moving case histories of his patients, their lives, and the extraordinary transformations which went with their reintroduction to a changed world.',
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '0375704051',
        },
        {
          type: 'ISBN_13',
          identifier: '9780375704055',
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 466,
      printType: 'BOOK',
      categories: ['Psychology'],
      averageRating: 3.5,
      ratingsCount: 8,
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: '0.2.2.0.preview.0',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=yrVEBsjWiBcC&printsec=frontcover&img=1&zoom=5&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=yrVEBsjWiBcC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
      },
      language: 'en',
      previewLink:
        'http://books.google.com/books?id=yrVEBsjWiBcC&q=oliver+sacks&dq=oliver+sacks&hl=&cd=1&source=gbs_api',
      infoLink:
        'http://books.google.com/books?id=yrVEBsjWiBcC&dq=oliver+sacks&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/Awakenings.html?hl=&id=yrVEBsjWiBcC',
    },
    saleInfo: {
      country: 'NP',
      saleability: 'NOT_FOR_SALE',
      isEbook: false,
    },
    accessInfo: {
      country: 'NP',
      viewability: 'NO_PAGES',
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=yrVEBsjWiBcC&hl=&source=gbs_api',
      accessViewStatus: 'NONE',
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        'Awakenings—which inspired the major motion picture starring Robert DeNiro and Robin Williams—is the remarkable story of a group of patients who contracted sleeping-sickness during the great epidemic just after World War I. Frozen for ...',
    },
  },
  {
    kind: 'books#volume',
    id: 'tOjavKkVRNoC',
    etag: 'X8kKLnCOXhI',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/tOjavKkVRNoC',
    volumeInfo: {
      title: 'Seeing Voices',
      subtitle: 'A Journey Into the World of the Deaf',
      authors: ['Oliver Sacks', 'Oliver W. Sacks'],
      publisher: 'Univ of California Press',
      publishedDate: '1989-01-01',
      description:
        'A neurologist investigates the world of the deaf, examining their past and present treatment at the hands of society, and assesses the value and significance of sign language.',
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '0520060830',
        },
        {
          type: 'ISBN_13',
          identifier: '9780520060838',
        },
      ],
      readingModes: {
        text: false,
        image: true,
      },
      pageCount: 204,
      printType: 'BOOK',
      categories: ['Social Science'],
      averageRating: 3.5,
      ratingsCount: 12,
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: '0.4.4.0.preview.1',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=tOjavKkVRNoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=tOjavKkVRNoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      language: 'en',
      previewLink:
        'http://books.google.com/books?id=tOjavKkVRNoC&printsec=frontcover&dq=oliver+sacks&hl=&cd=2&source=gbs_api',
      infoLink:
        'http://books.google.com/books?id=tOjavKkVRNoC&dq=oliver+sacks&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/Seeing_Voices.html?hl=&id=tOjavKkVRNoC',
    },
    saleInfo: {
      country: 'NP',
      saleability: 'NOT_FOR_SALE',
      isEbook: false,
    },
    accessInfo: {
      country: 'NP',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com/books/download/Seeing_Voices-sample-pdf.acsm?id=tOjavKkVRNoC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=tOjavKkVRNoC&hl=&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        'A neurologist investigates the world of the deaf, examining their past and present treatment at the hands of society, and assesses the value and significance of sign language.',
    },
  },
  {
    kind: 'books#volume',
    id: 'kPi_vKQf-WMC',
    etag: 'ER/peHAFZ2U',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/kPi_vKQf-WMC',
    volumeInfo: {
      title: 'A Leg to Stand On',
      authors: ['Oliver Sacks', 'Oliver W. Sacks'],
      publisher: 'Simon and Schuster',
      publishedDate: '1998-04-29',
      description: 'Originally published: New York: Summit Books, 1984.',
      industryIdentifiers: [
        {
          type: 'ISBN_13',
          identifier: '9780684853956',
        },
        {
          type: 'ISBN_10',
          identifier: '0684853957',
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 229,
      printType: 'BOOK',
      categories: ['Biography & Autobiography'],
      averageRating: 4,
      ratingsCount: 5,
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: '0.3.1.0.preview.0',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=kPi_vKQf-WMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=kPi_vKQf-WMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      language: 'en',
      previewLink:
        'http://books.google.com/books?id=kPi_vKQf-WMC&printsec=frontcover&dq=oliver+sacks&hl=&cd=3&source=gbs_api',
      infoLink:
        'http://books.google.com/books?id=kPi_vKQf-WMC&dq=oliver+sacks&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/A_Leg_to_Stand_On.html?hl=&id=kPi_vKQf-WMC',
    },
    saleInfo: {
      country: 'NP',
      saleability: 'NOT_FOR_SALE',
      isEbook: false,
    },
    accessInfo: {
      country: 'NP',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED_FOR_ACCESSIBILITY',
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=kPi_vKQf-WMC&hl=&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet: 'Originally published: New York: Summit Books, 1984.',
    },
  },
  {
    kind: 'books#volume',
    id: 'zIPioQEACAAJ',
    etag: '71l/iOg7ccY',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/zIPioQEACAAJ',
    volumeInfo: {
      title: 'The Man Who Mistook His Wife for a Hat',
      authors: ['Oliver Sacks'],
      publisher: 'Picador',
      publishedDate: '2015-01-01',
      description:
        "With an introduction by Will SelfA classic work of psychology, this international bestseller provides a groundbreaking insight into the human mind.If a man has lost a leg or an eye, he knows he has lost a leg or an eye; but if he has lost a self - himself - he cannot know it, because he is no longer there to know it. In this extraordinary book, Dr. Oliver Sacks recounts the stories of patients struggling to adapt to often bizarre worlds of neurological disorder. Here are people who can no longer recognize everyday objects or those they love; who are stricken with violent tics or shout involuntary obscenities; who have been dismissed as autistic or retarded, yet are gifted with uncanny artistic or mathematical talents. If inconceivably strange, these brilliant tales illuminate what it means to be human. A provocative exploration of the mysteries of the human mind, The Man Who Mistook His Wife for a Hat is a million-copy bestseller by the twentieth century's greatest neurologist.",
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '1447275403',
        },
        {
          type: 'ISBN_13',
          identifier: '9781447275404',
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 300,
      printType: 'BOOK',
      averageRating: 3.5,
      ratingsCount: 3415,
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: 'preview-1.0.0',
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=zIPioQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=zIPioQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
      },
      language: 'en',
      previewLink:
        'http://books.google.com/books?id=zIPioQEACAAJ&dq=oliver+sacks&hl=&cd=12&source=gbs_api',
      infoLink:
        'http://books.google.com/books?id=zIPioQEACAAJ&dq=oliver+sacks&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/The_Man_Who_Mistook_His_Wife_for_a_Hat.html?hl=&id=zIPioQEACAAJ',
    },
    saleInfo: {
      country: 'NP',
      saleability: 'NOT_FOR_SALE',
      isEbook: false,
    },
    accessInfo: {
      country: 'NP',
      viewability: 'NO_PAGES',
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=zIPioQEACAAJ&hl=&source=gbs_api',
      accessViewStatus: 'NONE',
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        'In this extraordinary book, Dr Oliver Sacks recounts the stories of patients struggling to adapt to often bizarre worlds of neurological disorder.',
    },
  },
  {
    kind: 'books#volume',
    id: 'vcWNEAAAQBAJ',
    etag: 'T5/ZnQohBAE',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/vcWNEAAAQBAJ',
    volumeInfo: {
      title: 'Gratitude',
      authors: ['Oliver Sacks'],
      publisher: 'National Geographic Books',
      publishedDate: '2015-11-24',
      description:
        '“My predominant feeling is one of gratitude. I have loved and been loved. I have been given much and I have given something in return. Above all, I have been a sentient being, a thinking animal, on this beautiful planet, and that in itself has been an enormous privilege and adventure.” —Oliver Sacks No writer has succeeded in capturing the medical and human drama of illness as honestly and as eloquently as Oliver Sacks. During the last few months of his life, he wrote a set of essays in which he movingly explored his feelings about completing a life and coming to terms with his own death. “It is the fate of every human being,” Sacks writes, “to be a unique individual, to find his own path, to live his own life, to die his own death.” Together, these four essays form an ode to the uniqueness of each human being and to gratitude for the gift of life. “Oliver Sacks was like no other clinician, or writer. He was drawn to the homes of the sick, the institutions of the most frail and disabled, the company of the unusual and the ‘abnormal.’ He wanted to see humanity in its many variants and to do so in his own, almost anachronistic way—face to face, over time, away from our burgeoning apparatus of computers and algorithms. And, through his writing, he showed us what he saw.” —Atul Gawande, author of Being Mortal',
      industryIdentifiers: [
        {
          type: 'ISBN_13',
          identifier: '9780451492937',
        },
        {
          type: 'ISBN_10',
          identifier: '0451492935',
        },
      ],
      readingModes: {
        text: true,
        image: false,
      },
      pageCount: 0,
      printType: 'BOOK',
      categories: ['Biography & Autobiography'],
      averageRating: 4,
      ratingsCount: 679,
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: 'preview-1.0.0',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=vcWNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=vcWNEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
      },
      language: 'en',
      previewLink:
        'http://books.google.com/books?id=vcWNEAAAQBAJ&dq=oliver+sacks&hl=&cd=13&source=gbs_api',
      infoLink:
        'http://books.google.com/books?id=vcWNEAAAQBAJ&dq=oliver+sacks&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/Gratitude.html?hl=&id=vcWNEAAAQBAJ',
    },
    saleInfo: {
      country: 'NP',
      saleability: 'NOT_FOR_SALE',
      isEbook: false,
    },
    accessInfo: {
      country: 'NP',
      viewability: 'NO_PAGES',
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=vcWNEAAAQBAJ&hl=&source=gbs_api',
      accessViewStatus: 'NONE',
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        'During the last few months of his life, he wrote a set of essays in which he movingly explored his feelings about completing a life and coming to terms with his own death. “It is the fate of every human being,” Sacks writes, “to be a ...',
    },
  },
  {
    kind: 'books#volume',
    id: 'Jp8c0AEACAAJ',
    etag: '4EOLgZlkO90',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/Jp8c0AEACAAJ',
    volumeInfo: {
      title: 'The Tempest',
      publisher: 'Maple Press Pvt Limited',
      publishedDate: '1910-01-08',
      description:
        "The Tempest is the fourth, final, and the finest of Shakespeare's great late romances. It is classified as a romantic comedy with a mild element of tragedy in its main plot. The play is set on a remote island, now inhabited by Prospero and his daughter Miranda. He is the rightful Duke of Milan, his throne being usurped by his villainous brother Antonio. When Antonio and his friend King Alonso of Naples, Alonso's son Ferdinand, and others are travelling by a ship, their ship gets wrecked by the storm conjured by Prospero, who has magical powers. With the help of his devoted attendant Ariel, Prospero accomplishes his task to restore Miranda her rightful place. Antonio, his accomplice King Alonso of Naples and his son Ferdinand reach the island after the shipwreck. Love blooms between Miranda and Ferdinand, and Prospero consents to their marriage. Finally, the truth about Antonio is revealed, and Prospero is restored his dukedom .He forgives his brother, and returns to Milan.",
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '9352231678',
        },
        {
          type: 'ISBN_13',
          identifier: '9789352231676',
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 0,
      printType: 'BOOK',
      categories: ['Fiction'],
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: 'preview-1.0.0',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=Jp8c0AEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=Jp8c0AEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
      },
      language: 'en',
      previewLink:
        'http://books.google.com/books?id=Jp8c0AEACAAJ&dq=the%25tempest&hl=&cd=2&source=gbs_api',
      infoLink:
        'http://books.google.com/books?id=Jp8c0AEACAAJ&dq=the%25tempest&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/The_Tempest.html?hl=&id=Jp8c0AEACAAJ',
    },
    saleInfo: {
      country: 'NP',
      saleability: 'NOT_FOR_SALE',
      isEbook: false,
    },
    accessInfo: {
      country: 'NP',
      viewability: 'NO_PAGES',
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=Jp8c0AEACAAJ&hl=&source=gbs_api',
      accessViewStatus: 'NONE',
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        'The Tempest is the fourth, final, and the finest of Shakespeare&#39;s great late romances. It is classified as a romantic comedy with a mild element of tragedy in its main plot.',
    },
  },
];

export const mockBook = {
  kind: 'books#volume',
  id: 'Jp8c0AEACAAJ',
  etag: '4EOLgZlkO90',
  selfLink: 'https://www.googleapis.com/books/v1/volumes/Jp8c0AEACAAJ',
  volumeInfo: {
    title: 'The Tempest',
    publisher: 'Maple Press Pvt Limited',
    publishedDate: '1910-01-08',
    description:
      "The Tempest is the fourth, final, and the finest of Shakespeare's great late romances. It is classified as a romantic comedy with a mild element of tragedy in its main plot. The play is set on a remote island, now inhabited by Prospero and his daughter Miranda. He is the rightful Duke of Milan, his throne being usurped by his villainous brother Antonio. When Antonio and his friend King Alonso of Naples, Alonso's son Ferdinand, and others are travelling by a ship, their ship gets wrecked by the storm conjured by Prospero, who has magical powers. With the help of his devoted attendant Ariel, Prospero accomplishes his task to restore Miranda her rightful place. Antonio, his accomplice King Alonso of Naples and his son Ferdinand reach the island after the shipwreck. Love blooms between Miranda and Ferdinand, and Prospero consents to their marriage. Finally, the truth about Antonio is revealed, and Prospero is restored his dukedom .He forgives his brother, and returns to Milan.",
    industryIdentifiers: [
      {
        type: 'ISBN_10',
        identifier: '9352231678',
      },
      {
        type: 'ISBN_13',
        identifier: '9789352231676',
      },
    ],
    readingModes: {
      text: false,
      image: false,
    },
    pageCount: 0,
    printType: 'BOOK',
    categories: ['Fiction'],
    maturityRating: 'NOT_MATURE',
    allowAnonLogging: false,
    contentVersion: 'preview-1.0.0',
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false,
    },
    imageLinks: {
      smallThumbnail:
        'http://books.google.com/books/content?id=Jp8c0AEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
      thumbnail:
        'http://books.google.com/books/content?id=Jp8c0AEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    },
    language: 'en',
    previewLink:
      'http://books.google.com/books?id=Jp8c0AEACAAJ&dq=the%25tempest&hl=&cd=2&source=gbs_api',
    infoLink:
      'http://books.google.com/books?id=Jp8c0AEACAAJ&dq=the%25tempest&hl=&source=gbs_api',
    canonicalVolumeLink:
      'https://books.google.com/books/about/The_Tempest.html?hl=&id=Jp8c0AEACAAJ',
  },
  saleInfo: {
    country: 'NP',
    saleability: 'NOT_FOR_SALE',
    isEbook: false,
  },
  accessInfo: {
    country: 'NP',
    viewability: 'NO_PAGES',
    embeddable: false,
    publicDomain: false,
    textToSpeechPermission: 'ALLOWED',
    epub: {
      isAvailable: false,
    },
    pdf: {
      isAvailable: false,
    },
    webReaderLink:
      'http://play.google.com/books/reader?id=Jp8c0AEACAAJ&hl=&source=gbs_api',
    accessViewStatus: 'NONE',
    quoteSharingAllowed: false,
  },
  searchInfo: {
    textSnippet:
      'The Tempest is the fourth, final, and the finest of Shakespeare&#39;s great late romances. It is classified as a romantic comedy with a mild element of tragedy in its main plot.',
  },
}

export const mockCollectionItemArray = [
  {
    kind: 'books#volume',
    id: 'zIPioQEACAAJ',
    etag: '71l/iOg7ccY',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/zIPioQEACAAJ',
    volumeInfo: {
      title: 'The Man Who Mistook His Wife for a Hat',
      authors: ['Oliver Sacks'],
      publisher: 'Picador',
      publishedDate: '2015-01-01',
      description:
        "With an introduction by Will SelfA classic work of psychology, this international bestseller provides a groundbreaking insight into the human mind.If a man has lost a leg or an eye, he knows he has lost a leg or an eye; but if he has lost a self - himself - he cannot know it, because he is no longer there to know it. In this extraordinary book, Dr. Oliver Sacks recounts the stories of patients struggling to adapt to often bizarre worlds of neurological disorder. Here are people who can no longer recognize everyday objects or those they love; who are stricken with violent tics or shout involuntary obscenities; who have been dismissed as autistic or retarded, yet are gifted with uncanny artistic or mathematical talents. If inconceivably strange, these brilliant tales illuminate what it means to be human. A provocative exploration of the mysteries of the human mind, The Man Who Mistook His Wife for a Hat is a million-copy bestseller by the twentieth century's greatest neurologist.",
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '1447275403',
        },
        {
          type: 'ISBN_13',
          identifier: '9781447275404',
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 300,
      printType: 'BOOK',
      averageRating: 3.5,
      ratingsCount: 3415,
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: 'preview-1.0.0',
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=zIPioQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=zIPioQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
      },
      language: 'en',
      previewLink:
        'http://books.google.com/books?id=zIPioQEACAAJ&dq=oliver+sacks&hl=&cd=12&source=gbs_api',
      infoLink:
        'http://books.google.com/books?id=zIPioQEACAAJ&dq=oliver+sacks&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/The_Man_Who_Mistook_His_Wife_for_a_Hat.html?hl=&id=zIPioQEACAAJ',
    },
    saleInfo: {
      country: 'NP',
      saleability: 'NOT_FOR_SALE',
      isEbook: false,
    },
    accessInfo: {
      country: 'NP',
      viewability: 'NO_PAGES',
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=zIPioQEACAAJ&hl=&source=gbs_api',
      accessViewStatus: 'NONE',
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        'In this extraordinary book, Dr Oliver Sacks recounts the stories of patients struggling to adapt to often bizarre worlds of neurological disorder.',
    },
    readingStatus: 0,
  },
  {
    kind: 'books#volume',
    id: 'tOjavKkVRNoC',
    etag: 'X8kKLnCOXhI',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/tOjavKkVRNoC',
    volumeInfo: {
      title: 'Seeing Voices',
      subtitle: 'A Journey Into the World of the Deaf',
      authors: ['Oliver Sacks', 'Oliver W. Sacks'],
      publisher: 'Univ of California Press',
      publishedDate: '1989-01-01',
      description:
        'A neurologist investigates the world of the deaf, examining their past and present treatment at the hands of society, and assesses the value and significance of sign language.',
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '0520060830',
        },
        {
          type: 'ISBN_13',
          identifier: '9780520060838',
        },
      ],
      readingModes: {
        text: false,
        image: true,
      },
      pageCount: 204,
      printType: 'BOOK',
      categories: ['Social Science'],
      averageRating: 3.5,
      ratingsCount: 12,
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: '0.4.4.0.preview.1',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=tOjavKkVRNoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=tOjavKkVRNoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      language: 'en',
      previewLink:
        'http://books.google.com/books?id=tOjavKkVRNoC&printsec=frontcover&dq=oliver+sacks&hl=&cd=2&source=gbs_api',
      infoLink:
        'http://books.google.com/books?id=tOjavKkVRNoC&dq=oliver+sacks&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/Seeing_Voices.html?hl=&id=tOjavKkVRNoC',
    },
    saleInfo: {
      country: 'NP',
      saleability: 'NOT_FOR_SALE',
      isEbook: false,
    },
    accessInfo: {
      country: 'NP',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com/books/download/Seeing_Voices-sample-pdf.acsm?id=tOjavKkVRNoC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=tOjavKkVRNoC&hl=&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        'A neurologist investigates the world of the deaf, examining their past and present treatment at the hands of society, and assesses the value and significance of sign language.',
    },
    readingStatus: 1,
  },
  {
    kind: 'books#volume',
    id: 'vcWNEAAAQBAJ',
    etag: 'T5/ZnQohBAE',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/vcWNEAAAQBAJ',
    volumeInfo: {
      title: 'Gratitude',
      authors: ['Oliver Sacks'],
      publisher: 'National Geographic Books',
      publishedDate: '2015-11-24',
      description:
        '“My predominant feeling is one of gratitude. I have loved and been loved. I have been given much and I have given something in return. Above all, I have been a sentient being, a thinking animal, on this beautiful planet, and that in itself has been an enormous privilege and adventure.” —Oliver Sacks No writer has succeeded in capturing the medical and human drama of illness as honestly and as eloquently as Oliver Sacks. During the last few months of his life, he wrote a set of essays in which he movingly explored his feelings about completing a life and coming to terms with his own death. “It is the fate of every human being,” Sacks writes, “to be a unique individual, to find his own path, to live his own life, to die his own death.” Together, these four essays form an ode to the uniqueness of each human being and to gratitude for the gift of life. “Oliver Sacks was like no other clinician, or writer. He was drawn to the homes of the sick, the institutions of the most frail and disabled, the company of the unusual and the ‘abnormal.’ He wanted to see humanity in its many variants and to do so in his own, almost anachronistic way—face to face, over time, away from our burgeoning apparatus of computers and algorithms. And, through his writing, he showed us what he saw.” —Atul Gawande, author of Being Mortal',
      industryIdentifiers: [
        {
          type: 'ISBN_13',
          identifier: '9780451492937',
        },
        {
          type: 'ISBN_10',
          identifier: '0451492935',
        },
      ],
      readingModes: {
        text: true,
        image: false,
      },
      pageCount: 0,
      printType: 'BOOK',
      categories: ['Biography & Autobiography'],
      averageRating: 4,
      ratingsCount: 679,
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: 'preview-1.0.0',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=vcWNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=vcWNEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
      },
      language: 'en',
      previewLink:
        'http://books.google.com/books?id=vcWNEAAAQBAJ&dq=oliver+sacks&hl=&cd=13&source=gbs_api',
      infoLink:
        'http://books.google.com/books?id=vcWNEAAAQBAJ&dq=oliver+sacks&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/Gratitude.html?hl=&id=vcWNEAAAQBAJ',
    },
    saleInfo: {
      country: 'NP',
      saleability: 'NOT_FOR_SALE',
      isEbook: false,
    },
    accessInfo: {
      country: 'NP',
      viewability: 'NO_PAGES',
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=vcWNEAAAQBAJ&hl=&source=gbs_api',
      accessViewStatus: 'NONE',
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        'During the last few months of his life, he wrote a set of essays in which he movingly explored his feelings about completing a life and coming to terms with his own death. “It is the fate of every human being,” Sacks writes, “to be a ...',
    },
    readingStatus: 2,
  },
  {
    kind: 'books#volume',
    id: 'yrVEBsjWiBcC',
    etag: 'Wb9FCmV2nlw',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/yrVEBsjWiBcC',
    volumeInfo: {
      title: 'Awakenings',
      authors: ['Oliver Sacks'],
      publisher: 'Vintage',
      publishedDate: '1999-10-05',
      description:
        'Awakenings--which inspired the major motion picture--is the remarkable story of a group of patients who contracted sleeping-sickness during the great epidemic just after World War I. Frozen for decades in a trance-like state, these men and women were given up as hopeless until 1969, when Dr. Oliver Sacks gave them the then-new drug L-DOPA, which had an astonishing, explosive, "awakening" effect. Dr. Sacks recounts the moving case histories of his patients, their lives, and the extraordinary transformations which went with their reintroduction to a changed world.',
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '0375704051',
        },
        {
          type: 'ISBN_13',
          identifier: '9780375704055',
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 466,
      printType: 'BOOK',
      categories: ['Psychology'],
      averageRating: 3.5,
      ratingsCount: 8,
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: '0.2.2.0.preview.0',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=yrVEBsjWiBcC&printsec=frontcover&img=1&zoom=5&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=yrVEBsjWiBcC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
      },
      language: 'en',
      previewLink:
        'http://books.google.com/books?id=yrVEBsjWiBcC&q=oliver+sacks&dq=oliver+sacks&hl=&cd=1&source=gbs_api',
      infoLink:
        'http://books.google.com/books?id=yrVEBsjWiBcC&dq=oliver+sacks&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/Awakenings.html?hl=&id=yrVEBsjWiBcC',
    },
    saleInfo: {
      country: 'NP',
      saleability: 'NOT_FOR_SALE',
      isEbook: false,
    },
    accessInfo: {
      country: 'NP',
      viewability: 'NO_PAGES',
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=yrVEBsjWiBcC&hl=&source=gbs_api',
      accessViewStatus: 'NONE',
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        'Awakenings—which inspired the major motion picture starring Robert DeNiro and Robin Williams—is the remarkable story of a group of patients who contracted sleeping-sickness during the great epidemic just after World War I. Frozen for ...',
    },
    readingStatus: 0,
  },
];

export const mockCollectionItem = {
  kind: 'books#volume',
  id: 'zIPioQEACAAJ',
  etag: '71l/iOg7ccY',
  selfLink: 'https://www.googleapis.com/books/v1/volumes/zIPioQEACAAJ',
  volumeInfo: {
    title: 'The Man Who Mistook His Wife for a Hat',
    authors: ['Oliver Sacks'],
    publisher: 'Picador',
    publishedDate: '2015-01-01',
    description:
      "With an introduction by Will SelfA classic work of psychology, this international bestseller provides a groundbreaking insight into the human mind.If a man has lost a leg or an eye, he knows he has lost a leg or an eye; but if he has lost a self - himself - he cannot know it, because he is no longer there to know it. In this extraordinary book, Dr. Oliver Sacks recounts the stories of patients struggling to adapt to often bizarre worlds of neurological disorder. Here are people who can no longer recognize everyday objects or those they love; who are stricken with violent tics or shout involuntary obscenities; who have been dismissed as autistic or retarded, yet are gifted with uncanny artistic or mathematical talents. If inconceivably strange, these brilliant tales illuminate what it means to be human. A provocative exploration of the mysteries of the human mind, The Man Who Mistook His Wife for a Hat is a million-copy bestseller by the twentieth century's greatest neurologist.",
    industryIdentifiers: [
      {
        type: 'ISBN_10',
        identifier: '1447275403',
      },
      {
        type: 'ISBN_13',
        identifier: '9781447275404',
      },
    ],
    readingModes: {
      text: false,
      image: false,
    },
    pageCount: 300,
    printType: 'BOOK',
    averageRating: 3.5,
    ratingsCount: 3415,
    maturityRating: 'NOT_MATURE',
    allowAnonLogging: false,
    contentVersion: 'preview-1.0.0',
    imageLinks: {
      smallThumbnail:
        'http://books.google.com/books/content?id=zIPioQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
      thumbnail:
        'http://books.google.com/books/content?id=zIPioQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    },
    language: 'en',
    previewLink:
      'http://books.google.com/books?id=zIPioQEACAAJ&dq=oliver+sacks&hl=&cd=12&source=gbs_api',
    infoLink:
      'http://books.google.com/books?id=zIPioQEACAAJ&dq=oliver+sacks&hl=&source=gbs_api',
    canonicalVolumeLink:
      'https://books.google.com/books/about/The_Man_Who_Mistook_His_Wife_for_a_Hat.html?hl=&id=zIPioQEACAAJ',
  },
  saleInfo: {
    country: 'NP',
    saleability: 'NOT_FOR_SALE',
    isEbook: false,
  },
  accessInfo: {
    country: 'NP',
    viewability: 'NO_PAGES',
    embeddable: false,
    publicDomain: false,
    textToSpeechPermission: 'ALLOWED',
    epub: {
      isAvailable: false,
    },
    pdf: {
      isAvailable: false,
    },
    webReaderLink:
      'http://play.google.com/books/reader?id=zIPioQEACAAJ&hl=&source=gbs_api',
    accessViewStatus: 'NONE',
    quoteSharingAllowed: false,
  },
  searchInfo: {
    textSnippet:
      'In this extraordinary book, Dr Oliver Sacks recounts the stories of patients struggling to adapt to often bizarre worlds of neurological disorder.',
  },
  readingStatus: 0,
};
