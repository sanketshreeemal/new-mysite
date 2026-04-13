/**
 * Data layer for the Books / Library component.
 */

export interface Book {
  id: string;
  title: string;
  author?: string;
  year: number | string;
  review?: string;
  quote?: string | null;
  coverUrl?: string | null;
  fullReviewUrl?: string | null;
}

export const booksData: Book[] = [
  {
    "id": "genghis-khan-and-the-making-of-the-modern-world",
    "title": "Genghis Khan and the Making of the Modern World",
    "author": "Jack Weatherford",
    "year": 2024,
    "review": "Lessons from one of the greatest warriors to ever live. The book is a refreshing take on Genghis Khan, focuses on his military strategy, historical context of his campaigns and his mindset throughout life. So many insights on life, on business, on strategy that I wrote a full review!",
    "quote": "Victory did not come to those who played by the rules. It came to those that made their own rules and imposed them on their enemy. Triumph could not be partial. It was total, complete and undeniable - or else it was nothing. In battle, this meant the unbridled use of terror and surprise.",
    "fullReviewUrl": "https://www.sanketshreemal.com/genghiskhan/",
    "coverUrl": "/books/genghis.jpeg"
  },
  {
    "id": "working-backwards",
    "title": "Working Backwards",
    "author": "Colin Bryar / Bill Carr",
    "year": 2024,
    "review": "Amazon's apparent ability pivot into multiple billion dollar businesses and execute with surgical precision is quite well covered. Although the chronicles of Bezos are widely available, this book is unique because it first gives an insider's perspective into how Amazon's internal organization and structure that has been built to support the success that outsiders observe and envy. Second, it dedicates significant effort to showcase how this internal functioning was applied to birth some of Amazon's most successful business ventures such as Prime and AWS. I walked away with dozens of insights, memorable quotes and most importantly practical considerations on how to think about problems and become an execution machine.",
    "quote": "Customers are divinely discontented - yesterdays \"wow\" quickly turns to today's ordinary.",
    "fullReviewUrl": "https://www.sanketshreemal.com/workingbackwards/",
    "coverUrl": "/books/work-back.jpeg"
  },
  {
    "id": "magical-child",
    "title": "Magical Child",
    "author": "Joseph Chilton Pearce",
    "year": 2024,
    "review": "Although I will do a deeper dive soon, some quick thoughts. The central thesis is that children go through 'Matrix Shifts' which are distinct biological phases of development of a child and unfold periodically from conception to adulthood. Each matrix shift warrants a different support system from parents such that the child's mental development is maximized. Though lacking on strong applicable insights, the book is rich with theoretical analysis on early brain development.",
    "quote": "Intelligence can only grow by moving from that which is known into that which is unknown - from predictable to unpredictable. The institutionalized child, for instance, does not grow intellectually. Mental retardation is inevitable when the physical environment is unvaried, when new stimuli are almost non-existent (staring at a white ceiling, walls of a crib or the same classroom all day). Above all, when there is no bodily contact with a stable caretaker to furnish a known matrix, moving into the unknown becomes impossible. Moving into the unknown is only possible when the child can make an immediate return to a secure matrix - and the younger the child, the more immediate and constant this return must be.",
    "fullReviewUrl": null,
    "coverUrl": "/books/magical-child.jpeg"
  },
  {
    "id": "if-you-meet-the-buddha-on-the-road-kill-him",
    "title": "If You Meet The Buddha On The Road, Kill Him!",
    "author": "Sheldon Kopp",
    "year": 2024,
    "review": "Awesome book and even worth a re-read at some point. Core message of the book is about how there is no guidance in life - that which does not come from within is useless. THe message is conveyed by sharing intimate stories from his experience with therapy patients and their struggles. He intertwines these stories with themes from classic literature alluding to Dante, Kafka, Hesse etc. Most memorable quote:",
    "quote": "\u2026and remember too, you can stay at home, safe in the familiar illusion of certainty. Do not set out without realizing that the way is not without danger. Everything good is costly, and the development of personality is one of the most costly of all things. It will cost you your innocence, your illusions, your certainty.",
    "fullReviewUrl": null,
    "coverUrl": "/books/buddha.jpeg"
  },
  {
    "id": "discovering-india",
    "title": "Discovering India",
    "author": "Rohit Raman",
    "year": 2024,
    "review": "Underwhelming. Thought it would give me insight into the lives of middle class India, but it was pretty watered down personal finance stories of people starting to invest money. One interesting tidbit - kitty parties are a non-traditional but high trust setting where ideas are shared among bougie women - interesting channel if you want them as a customer base",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/india.jpeg"
  },
  {
    "id": "the-dancing-wu-li-masters",
    "title": "The Dancing Wu Li Masters",
    "author": "Gary Zukav",
    "year": 2024,
    "review": "Awesome book focused on introducing quantum theory to the uninitiated. Nothing in the book by itself was difficult but the presentation was great in a way that allowed complex theories and ideas to be digested with relative ease. Also a good history of physics: why and what ideas were major milestones, what discoveries led to other discoveries and why this field is a big deal in the first place. Makes me appreciate the subject more, respect the intellectuals and why theory is still important in physics. Book is long and a slow read, though I'd recommend not reading it with other books simultaneously.",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/wu-li.jpeg"
  },
  {
    "id": "secrets-of-massage",
    "title": "Secrets of Massage",
    "author": "Cathy Meeus / Bhavesh T. Joshi",
    "year": 2024,
    "review": "Good illustrative book (almost textbook) on the different massage techniques and strokes and how to perform them. Has good content on the different oils that can be used and the right etiquettes of massage practitioners. A good, random skill to have, I think.",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/massage.jpeg"
  },
  {
    "id": "how-to-tell-a-story",
    "title": "How to Tell a Story",
    "author": "The Moth",
    "year": 2024,
    "review": "Great book with lots of pointers on how to frame a story an the tools to use for a compelling story. More than anything, the prompts in the book really jogged my memory on my own experiences where I have stories to tell.",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/story.jpeg"
  },
  {
    "id": "the-quality-growth-investor",
    "title": "The Quality Growth Investor",
    "author": "Long Equity",
    "year": 2023,
    "review": "Good short read on active portfolio management written by Long Equity that synthesizes their investing experience into identifying four key qualities that signal high quality value compounders.",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/investor.jpeg"
  },
  {
    "id": "the-lives-of-a-cell",
    "title": "The Lives of a Cell",
    "author": "Lewis Thomas",
    "year": 2023,
    "review": "Beautifully written, thoughtful essays hidden behind the subtlety of biology. Walked in thinking of a biology textbook, but it's about life in the world, our place in it and our experience of it. Short, thoughtful and worth reading again.",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/cell.jpeg"
  },
  {
    "id": "brave-new-world",
    "title": "Brave New World",
    "author": "Aldous Huxley",
    "year": 2023,
    "review": "Didn\u2019t live up to the hype and instead I thought of it a bit over rated. Too much world building and little \"juice\". It's about an uncivilized man living in a civilized world. Some interesting pieces/ideas, but was difficult to get through the first half.",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/brave.jpeg"
  },
  {
    "id": "the-black-swan",
    "title": "The Black Swan",
    "author": "Nassim Nicholas Taleb",
    "year": 2023,
    "review": "May be a hot take, but also overrated. There were some interesting concepts and \"hmm\" moments but this is one of those books that could have been a blog. Really hard to follow his logic through the chapters, nearly zero continuity. Possibly because I read the first edition before subsequent revisions. Key takeaway is probably just doing black Swan exposed things in life.",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/swan.png"
  },
  {
    "id": "the-worldly-philosophers",
    "title": "The Worldly Philosophers",
    "author": "Robert L. Heilbroner",
    "year": 2023,
    "review": "Fantastic read if you're interested in the history of economic thought. This book kindled my appreciation for the economic thinkers of the last 300 years and how they went against common beliefs and common sense at the time to come up with their theories. Also made me think, a bit depressing that there is no such economic thinker of that caliber alive today. \nThe ease with which economic thought can be downloaded through books like this made me contemplate whether a subject like economics should ever be the focus of a university degree, as opposed to learning something more technical where 'school' and a formal learning environment is far more useful.",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/worldly.jpeg"
  },
  {
    "id": "calvin-and-hobbes",
    "title": "Calvin And Hobbes",
    "author": "Bill Watterson",
    "year": 2023,
    "review": "My first entry into world of comics, and I'm glad I started with this book. Whimsical exploration of the mind of a comic who tries to bring the real world into cartoons. Lots of stories that will make you think and smile simultaneously.",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/calvin.jpeg"
  },
  {
    "id": "a-more-beautiful-question",
    "title": "A More Beautiful Question",
    "author": "Warren Berger",
    "year": 2023,
    "review": "One of those books that could have been a paper, perhaps a 30 page paper exploring the qualities of good questions and how to develop a more inquisitive mind. The most interesting chapter was on a technique to develop curiosity by opening up a  category of questioning focused on asking absurd questions. \nAbsurdity is freeing - it allows you to go back to first principals. If the questions is \"wrong\", there are no wrong answers, allows you to explore in a way that many questions don\u2019t.",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/beautiful.jpeg"
  },
  {
    "id": "what-it-takes",
    "title": "What It Takes",
    "author": "Stephen A. Schwarzman",
    "year": 2023,
    "review": "Absolutely gripping weekend read. Packed with lessons on running a business and just going out in the world and getting things done. The one thing that amazed me was how much he accomplished at a young age (mix of agency and luck) and his infinitely vast network of relationships that he recounts throughout the book.",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/takes.jpeg"
  },
  {
    "id": "feline-philosophy",
    "title": "Feline Philosophy",
    "author": "John Gray",
    "year": 2023,
    "review": "Admittedly purchased due to the 'feline' nature of the book. The book is a commentary on the works of many philosophers including Montaigne, Spinoza, Sartre and others - a sort of \"if these people were sitting at a bar with me, this is what I would say and how they would respond\". Cats was not the major theme throughout (unfortunately), but more used as a way to get a chapter going or conclude.",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/feline.jpeg"
  },
  {
    "id": "the-call-of-the-wild",
    "title": "The Call of The Wild",
    "author": "Jack London",
    "year": 2023,
    "review": "Short and sweet novel, initially hesitant to read because I was mourning Mercedes, but ultimately found the courage. I think the most memorable aspect of this book was the authors ability to take the reader into the mind of the protagonist dog and make them feel fear, courage, devotion, envy and much, much more. More potent than that, this book made me feel The Call of the Wild. The book initiated a roadtrip  to re-experience the Klondike with this new imagination the book provided.",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/call.jpeg"
  },
  {
    "id": "moon-of-the-crusted-snow",
    "title": "Moon of the Crusted Snow",
    "author": "Waubgeshig Rice",
    "year": 2023,
    "review": "Completely unexpected plot, but a good introductory glimpse into Canadian Indigenous people; their ways of life and their views on nature, afterlife etc. Wrapped around an apocalyptic plot, the author (from the Wasauksing First Nation) does a great job in combining a thriller with indigenous elements.",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/moon.jpeg"
  },
  {
    "id": "zen-and-the-art-of-motorcycle-maintenance-2",
    "title": "Zen and the Art of Motorcycle Maintenance",
    "author": "Robert M. Pirsig",
    "year": 2023,
    "review": "One of the best books I've read in my life, by far. Its also one of the few that I've actually re-read. On this read, I focused on two key ideas; a: 'Anything worth doing is worth doing well' and b: Gumption. I wont put down detailed thoughts here, but rather eventually link these back to full blogs.",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/zen.jpeg"
  },
  {
    "id": "the-consolation-of-philosophy",
    "title": "The Consolation of Philosophy",
    "author": "Boethius",
    "year": 2023,
    "review": "Fantastically written work by Boethius, pleasure to read a unique combination of beautiful prose and poetry. The book is about a conversation between Boethius and a personification of \"Philosophy\". A major theme is the \"Wheel of Fortune\" which I am absolutely fascinated by. Its shaped a lot of my thinking about luck, entitlement and the nature of fortune. Beware: The last bit is very heavy on god and religion (Christian, specifically).",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/consolation.jpeg"
  },
  {
    "id": "michelangelo",
    "title": "Michelangelo",
    "author": "Taschen",
    "year": 2023,
    "review": "Unique experience, have never read about art before as deeply and consistently. previous exploration into art was mostly through blogs or ad-hoc on specific pieces. \nThis book brought Michelangelo and his art to 'life'. Before this book, Michelangelo was somewhat of a mythical figure to me - ive seen his work in real life, but never connected on what kind of person can create this what does it take? This book painted his greatness with all his flaws, humanized him for me. I think by humanizing him, this book made me appreciate his work even more, to the extent that I would have a totally different experience if I were to go back to Italy and \"look\" again.",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/michelangelo.jpeg"
  },
  {
    "id": "meritocracy-myth",
    "title": "Meritocracy Myth",
    "author": "Stephen J. McNamee / Robert K. Miller Jr.",
    "year": 2023,
    "review": "This is a book that could take a month or a year to read. Its an absolutely incredible \"create your own journey\" type. The main theme is that the world doesn\u2019t work on merit, but instead status, luck and systemic discrimination, among other landmines to hobble through to \"make it\". The author embarks on, and invites you to join him on an academic pursuit of the understanding on sociology and economics as it pertains to 'success'. With hundreds upon hundreds of seminal papers being referenced throughout the chapters, there is no end to the threads a reader can pull from his book. I personally spent 2 months digging into sociology and psychology papers from this book and developed a new-found passion for this from the foremost thinkers in these subjects.",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/merit.jpeg"
  },
  {
    "id": "the-story-of-b",
    "title": "The Story of B",
    "author": "Daniel Quinn",
    "year": 2023,
    "review": "After reading Ishmael early in the year by the same author, I was hooked on to his work. The story of B was my extended exploration of his ideas and this book did read some what like a sequel. Lots of good ideas sprinkled around, but the one that caught me permanently was about how the world is different in every passing millisecond and each moment is unique and precious. Sounds watered down, but its an idea that ill flush out with more color in a dedicated blog at some point.",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/storyb.jpeg"
  },
  {
    "id": "the-time-machine",
    "title": "The Time Machine",
    "author": "H.G. Wells",
    "year": 2023,
    "review": "Cute little novel, but I wasn\u2019t able to extract the juice as expected from this piece of 'literature'.",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/time.jpeg"
  },
  {
    "id": "the-outsider",
    "title": "The Outsider",
    "author": "Albert Camus",
    "year": 2023,
    "review": "It was actually a re-read after analyzing it to death in high school English literature, 10 years ago. \nDespite knowing the plot and the characters, the underlying current of the book - the theme of absurdity still hit me like a truck when I re-read. What Camus does brilliantly in my opinion, is make his characters do something absurd, but in a way that makes the reader ask themselves \"That\u2019s crazy - would I do that? Hmm\u2026 Why not..?\". The absurdity of the actions also tend to follow a great breakdown into the character psyche that almost justifies that action in an unexpected way.",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/outsider.jpeg"
  },
  {
    "id": "candide",
    "title": "Candide",
    "author": "Voltaire",
    "year": 2023,
    "review": "My wild introduction to Voltaire. Wasn\u2019t sure what to expect, but certainly not finding myself laughing as much as I did! I read this book without an understanding of the context in which it was written (which I found out later, through a history and philosophy podcast). As a result, I naively enjoyed the literal meaning of this work \"All is for the best in the best of all possible worlds\". Once I understood his intended meaning, I read the novel again and found myself even more amused! Voltaire's writing style is unique and very enjoyable.",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/candide.jpeg"
  },
  {
    "id": "confessions-of-an-advertising-man",
    "title": "Confessions of an Advertising Man",
    "author": "David Ogilvy",
    "year": 2023,
    "review": "Loved Ogilvy's book on advertising so much, I had to keep reading his other work too. This one was very different from the first, a bit unexpected. That said, I found it to be an awesome handbook for any business owner - not just an advertising agency. Certainly learned a lot about the philosophy and ethics of corporate culture, doing good work with customers and other nuances of running a business.",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/ogilvyconf.jpeg"
  },
  {
    "id": "existentialism-is-a-humanism",
    "title": "Existentialism is a Humanism",
    "author": "Jean-Paul Sartre",
    "year": 2023,
    "review": "Sartre and this particular work of his was my first independent reading of a philosophy. I didn\u2019t expect to grasp all of it, but was hoping to take away one or two key ideas. The one that I eventually walked away with was that existence precedes essence. To me, that means that every day that I'm alive and experience the world, I add a tiny sliver of meaning, of unique essence onto my personality. Every day that is exist, I become more of myself - I become more packed with.. essence? That to me is what \"becoming\" means, and why growing older is a happy and not dreadful thought.",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/existentialism.jpeg"
  },
  {
    "id": "animal-farm",
    "title": "Animal Farm",
    "author": "George Orwell",
    "year": 2023,
    "review": "My first reading of Orwell and as such, a fantastic introduction through Animal Farm. Orwell's ability to mock reality through fiction is extremely compelling - although specific critique to communism, I find that his ideas still resonate - even in our current capitalist democratic systems. As I look around, I often find myself thinking \"We are living on Animal Farm\". The book has given me another lens to look at the world and what's happening in it today.",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/animal.jpeg"
  },
  {
    "id": "the-next-person-you-meet-in-heaven",
    "title": "The Next Person you Meet in Heaven",
    "author": "Mitch Albom",
    "year": 2023,
    "review": "Not as good as the first book of the series (The five People you Meet in Heaven), nonetheless still moving and gets the job done in evoking a lot of raw emotions. Especially empathy and sympathy that people might not focus on too much. I did find tears in my eyes from time to time.",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/next.jpeg"
  },
  {
    "id": "the-diving-bell-and-butterfly",
    "title": "The Diving Bell and Butterfly",
    "author": "Jean-Dominique Bauby",
    "year": 2023,
    "review": "Picked it up because the author 'writes' this book with his left eyelid while trapped with locked-in syndrome on a hospital bed somewhere in France. The story behind the writing of this book - a normal person leaving a piece of his mind for his wife and children to enjoy his absence - is pretty amazing and moving. The strength of human perseverance against literally all odds.",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/diving.jpeg"
  },
  {
    "id": "the-remarkable-life-of-skin",
    "title": "The Remarkable Life of Skin",
    "author": "Monty Lyman",
    "year": 2023,
    "review": "Written by a dermatologist, the book talks about the intricacies and beauty of the largest human organ - the skin The author explores how the rest of our body manifests itself through our skin, what its structure looks like and why it\u2019s a fascinating thing to study in depth. It also goes into the effects of tattoos, cosmetic products and others on the health of our skin from a scientific lens.",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/skin.jpeg"
  },
  {
    "id": "ishmael",
    "title": "Ishmael",
    "author": "Daniel Quinn",
    "year": 2023,
    "review": "Takes the cake for best book of 2023 (in retrospect). It\u2019s a pivotal book in my life - profoundly impacted the way I think about the world. Its an exploration of humanity's relationship with its environment, revealing our role in its destruction and a anthropological study of what were the critical decisions and points in human history that have lead up to this point. Cant recommend this book enough. Maybe the world could be different if more people read this.",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/ishmael.jpeg"
  },
  {
    "id": "zen-and-the-art-of-motorcycle-maintenance",
    "title": "Zen and the Art of Motorcycle Maintenance",
    "author": "Robert M. Pirsig",
    "year": 2023,
    "review": "The title is quirky, but central to what the book is fundamentally about. Persig gets really deep into the concepts of Quality and Values, weaving them into how we make choices and think about the essence of our existence in this world. Persig narrates these intellectually heavy themes while physically exploring the landscapes of continental United States. Motorcycle maintenance is his tool - he takes these ideas and applies them to something as rudimentary, as 'normal' and 'everyday' as taking care of a machine. The effect this has is taking seemingly complex topics and distilling them into information that can be readily applied to daily activities. Its compelling - along the way Persig gives some really interesting visuals and frameworks on how to think about reason, intuition, purpose and a meaningful life.",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/zen.jpeg"
  },
  {
    "id": "the-white-tiger",
    "title": "The White Tiger",
    "author": "Aravind Adiga",
    "year": 2023,
    "review": "Best Fiction of 2023 (in retrospect). Having been born in, and lived in the literal fictional world that this book is set in, I had goosebumps reading how real the portrayal of the human condition in rural India was. It\u2019s a weird emotion, but the rawness of human intention that screamed at me was almost inspiring, familiar and.. warm? It made me miss India, miss my hometown. The protagonist's point of view of life and eventual success in entrepreneurship was inspiring and even gave me a few business ideas to ponder about.",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/white.jpeg"
  },
  {
    "id": "the-design-of-everyday-things",
    "title": "The Design of Everyday Things",
    "author": "Don Norman",
    "year": 2023,
    "review": "Good read, gave me an appreciation of well designed products. The counter intuitive thing about good design is that you don\u2019t tend to think much about it - its effortless to use. This book dives into what makes good design good and in the process, illuminates experiences in my life where I encounter good design worth appreciating, or, more often, coming across bad design and prompting an internal discourse on how I would rethink it.",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/design.jpeg"
  },
  {
    "id": "ogilvy-on-advertising",
    "title": "Ogilvy On Advertising",
    "author": "David Ogilvy",
    "year": 2023,
    "review": "Starting with zero knowledge base of advertising, this book was actually a beautiful (literally) way to get acquainted. It's chalk full of illustrations of advertising campaigns that Ogilvy's agency ran throughout his career. Having those visuals against his theory of what makes a good advertisement was an especially powerful learning experience. Ogilvy shares insights on building strong brands, creating memorable campaigns, and the significance of honesty and authenticity in advertising which provides really valuable lessons for anybody.",
    "quote": null,
    "fullReviewUrl": null,
    "coverUrl": "/books/ogilvy2.jpeg"
  }
];

export const otherBooksData: Book[] = [
  {
    "id": "the-originals",
    "title": "The Originals",
    "year": "2024",
    "coverUrl": "/books/originals.jpeg",
    "author": "Adam Grant"
  },
  {
    "id": "lessons-of-history",
    "title": "Lessons of History",
    "year": "2024",
    "coverUrl": "/books/lessons.jpeg",
    "author": "Will Durant / Ariel Durant"
  },
  {
    "id": "the-teachings-of-don-juan",
    "title": "The Teachings of Don Juan",
    "year": "2024",
    "coverUrl": "/books/teachings.jpeg",
    "author": "Carlos Castaneda"
  },
  {
    "id": "the-making-of-hero",
    "title": "The Making of Hero",
    "year": "2022",
    "coverUrl": "/books/hero.jpeg",
    "author": "Sunil Kant Munjal"
  },
  {
    "id": "the-tatas",
    "title": "The Tatas",
    "year": "2022",
    "coverUrl": "/books/tatas.jpeg",
    "author": "Girish Kuber"
  },
  {
    "id": "titan",
    "title": "Titan",
    "year": "2022",
    "coverUrl": "/books/titan.jpeg",
    "author": "Vinay Kamath"
  },
  {
    "id": "bajaj",
    "title": "Bajaj",
    "year": "2022",
    "coverUrl": "/books/bajaj.jpeg",
    "author": "Gita Piramal"
  },
  {
    "id": "india-moving",
    "title": "India Moving",
    "year": "2022",
    "coverUrl": "/books/moving.jpeg",
    "author": "Chinmay Tumbe"
  },
  {
    "id": "the-ambuja-story",
    "title": "The Ambuja Story",
    "year": "2022",
    "coverUrl": "/books/ambuja.jpeg",
    "author": "Narotam Sekhsaria"
  },
  {
    "id": "the-one-thing",
    "title": "The ONE thing",
    "year": "2022",
    "coverUrl": "/books/one.jpeg",
    "author": "Gary Keller / Jay Papasan"
  },
  {
    "id": "the-five-people-you-meet-in-heaven",
    "title": "The five people you meet in heaven",
    "year": "2022",
    "coverUrl": "/books/five.jpeg",
    "author": "Mitch Albom"
  },
  {
    "id": "shoe-dog",
    "title": "Shoe Dog",
    "year": "2022",
    "coverUrl": "/books/shoe.jpeg",
    "author": "Phil Knight"
  },
  {
    "id": "the-outsiders",
    "title": "The Outsiders",
    "year": "2022",
    "coverUrl": "/books/outsiders.jpeg",
    "author": "William N. Thorndike"
  },
  {
    "id": "zero-to-one",
    "title": "Zero to One",
    "year": "2022",
    "coverUrl": "/books/zero.jpeg",
    "author": "Peter Thiel / Blake Masters"
  },
  {
    "id": "marc-andreessen-blogs",
    "title": "Marc Andreessen Blogs",
    "year": "2022",
    "coverUrl": null,
    "author": "Marc Andreessen"
  },
  {
    "id": "the-hard-thing-about-hard-things",
    "title": "The Hard Thing About Hard Things",
    "year": "2022",
    "coverUrl": "/books/hard.jpeg",
    "author": "Ben Horowitz"
  },
  {
    "id": "four-seasons",
    "title": "Four Seasons",
    "year": "2022",
    "coverUrl": "/books/four.jpeg",
    "author": "Isadore Sharp"
  },
  {
    "id": "atomic-habits",
    "title": "Atomic Habits",
    "year": "2022",
    "coverUrl": "/books/atomic.jpeg",
    "author": "James Clear"
  },
  {
    "id": "the-intelligent-investor",
    "title": "The Intelligent Investor",
    "year": "2022",
    "coverUrl": "/books/intelligent.jpeg",
    "author": "Benjamin Graham"
  },
  {
    "id": "sapiens",
    "title": "Sapiens",
    "year": "2022",
    "coverUrl": "/books/sapiens.png",
    "author": "Yuval Noah Harari"
  },
  {
    "id": "the-industries-of-the-future",
    "title": "The Industries of The Future",
    "year": "2022",
    "coverUrl": "/books/future.jpeg",
    "author": "Alec Ross"
  },
  {
    "id": "the-reality-bubble",
    "title": "The Reality Bubble",
    "year": "2022",
    "coverUrl": "/books/reality.jpeg",
    "author": "Ziya Tong"
  },
  {
    "id": "astrophysics-for-people-in-a-hurry",
    "title": "Astrophysics for People in a Hurry",
    "year": "2022",
    "coverUrl": "/books/astro.jpeg",
    "author": "Neil deGrasse Tyson"
  },
  {
    "id": "how-to-win-friends-and-influence-people",
    "title": "How to Win Friends and Influence People",
    "year": "Earlier",
    "coverUrl": "/books/friends.jpeg",
    "author": "Dale Carnegie"
  },
  {
    "id": "100-baggers",
    "title": "100 baggers",
    "year": "Earlier",
    "coverUrl": "/books/baggers.jpeg",
    "author": "Christopher W. Mayer"
  },
  {
    "id": "meditations",
    "title": "Meditations",
    "year": "Earlier",
    "coverUrl": "/books/meditations.jpeg",
    "author": "Marcus Aurelius"
  },
  {
    "id": "rise-and-fall-of-nations",
    "title": "Rise and Fall of Nations",
    "year": "Earlier",
    "coverUrl": "/books/rise.jpeg",
    "author": "Ruchir Sharma"
  },
  {
    "id": "48-laws-of-power",
    "title": "48 Laws of Power",
    "year": "Earlier",
    "coverUrl": "/books/power.jpeg",
    "author": "Robert Greene"
  },
  {
    "id": "the-mckinsey-edge",
    "title": "The McKinsey Edge",
    "year": "Earlier",
    "coverUrl": "/books/mckinsey.jpeg",
    "author": "Shu Hattori"
  },
  {
    "id": "rich-dad-poor-dad",
    "title": "Rich Dad Poor Dad",
    "year": "Earlier",
    "coverUrl": "/books/rich.jpeg",
    "author": "Robert T. Kiyosaki"
  },
  {
    "id": "value-investing",
    "title": "Value Investing",
    "year": "Earlier",
    "coverUrl": "/books/value.jpeg",
    "author": "Bruce C.N. Greenwald / Judd Kahn"
  }
];
