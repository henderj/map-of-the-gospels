var locations = [
    {
        label: "Jerusalem",
        loc: [31.7857, 35.2271],
        description: `<p>Jerusalem is a city of great significance in the life and ministry of Jesus Christ. It was the site of his triumphal entry, when he rode into the city on a donkey and was hailed by the crowds as the Messiah (Matthew 21:1-11). It was also the site of his crucifixion and resurrection, which are central events of the Christian faith (Luke 23-24).</p>
        <p>In addition, Jerusalem was the location of the Jewish Temple, where Jesus famously overturned the tables of the moneychangers and taught the people about his Father's house (John 2:13-22). It was also the site of many of his teachings and miracles, such as the healing of a man at the Pool of Bethesda (John 5:1-15).</p>`
    },
    {
        label: "Bethlehem",
        loc: [31.7043, 35.2076],
        description: `<p>Bethlehem is a small town located about 10 kilometers south of Jerusalem in the West Bank. It is known as the birthplace of Jesus Christ, and is mentioned in the New Testament several times. According to the Gospel of Luke, Mary and Joseph traveled to Bethlehem for the census and while they were there, Jesus was born in a manger because there was no room for them in the inn (Luke 2:1-7). The Gospel of Matthew also mentions Bethlehem as the birthplace of Jesus, and describes how the Magi followed a star to find him there (Matthew 2:1-12).</p>
        <p>Bethlehem is also significant in the Bible for being the birthplace of King David, who was an ancestor of Jesus. The Gospel of John describes how the people of Bethlehem were confused when they heard Jesus teaching in Jerusalem, because they knew him only as the son of Joseph the carpenter (John 7:41-42).</p>`
    },
    {
        label: "Nazareth",
        loc: [32.70215, 35.297633],
        description: `<p>Nazareth is where Jesus grew up and spent most of his life before starting his public ministry. The Gospel of Matthew tells us that after the Holy Family's return from Egypt, they settled in Nazareth (Matthew 2:23). </p>
        <p>Despite Nazareth's small size and lowly reputation, Jesus' association with the town is significant because it fulfills several prophecies about the Messiah's humble origins. Nathanael's response to hearing that Jesus is from Nazareth ("Can anything good come out of Nazareth?" - John 1:46) shows the town's poor reputation.</p>
        <p>In the Gospel of Luke, the story of Jesus' birth and early life is recounted, including the Annunciation to Mary by the Angel Gabriel, Mary's visitation to her cousin Elizabeth, and the Magnificat (Luke 1-2). Later, in Luke 4:16-30, Jesus returned to Nazareth and taught in the synagogue, declaring that he was the fulfillment of the prophecy in Isaiah 61:1-2. His declaration led to outrage among the people of Nazareth, who drove him out of town and tried to kill him.</p>
        <p>Despite the hostility Jesus faced in Nazareth, the town remained significant to his ministry. It was in Nazareth that Jesus performed his first miracle, turning water into wine at the wedding feast in Cana (John 2:1-11). Nazareth is also the location of the Basilica of the Annunciation, which commemorates the spot where the Angel Gabriel visited Mary.</p>`
    },
    {
        label: "Capernaum",
        loc: [32.881139, 35.575056],
        description: `<p>Capernaum was a fishing village located on the northern shore of the Sea of Galilee. It was the home of the apostle Peter and also became a base for Jesus during his ministry in Galilee.</p>
        <p>In the Gospel of Matthew, Capernaum is described as Jesus' "own city" (Matthew 9:1) and many of his miracles were performed there, including the healing of a paralyzed man (Matthew 9:1-8), the healing of the centurion's servant (Matthew 8:5-13), and the exorcism of a demon-possessed man (Mark 1:21-28).</p>
        <p>Capernaum was also the site of a synagogue where Jesus taught and performed miracles, including the healing of a man with an unclean spirit (Mark 1:23-26) and the healing of a man with a withered hand (Mark 3:1-6).</p>
        <p>Despite witnessing many of Jesus' miracles, the people of Capernaum did not fully believe in him, which led to Jesus pronouncing a curse on the city (Matthew 11:23).</p>`
    },
    {
        label: "Sea of Galilee",
        loc: [32.8189, 35.5900],
        description: `<p>The Sea of Galilee, also known as Lake Kinneret or Lake Tiberias, is a freshwater lake located in northern Israel. It is the lowest freshwater lake on Earth and is approximately 21 kilometers long and 13 kilometers wide.</p>
        <p>In the New Testament, the Sea of Galilee is the location of many of Jesus' miracles and teachings. Jesus walked on water on the Sea of Galilee, calmed a storm, and fed the 5,000 with fish and bread near its shores. Jesus also called four of his disciples, Peter, Andrew, James, and John, while they were fishing on the Sea of Galilee (Mark 1:16-18).</p>
        <p>The Sea of Galilee was also a significant location for the apostles after Jesus' death and resurrection. According to the Gospel of John, Peter and six other disciples went fishing on the Sea of Galilee and saw the risen Jesus on the shore, who prepared breakfast for them (John 21:1-14).</p>`
    },
    {
        label: "Mount of Transfiguration",
        loc: [32.68624, 35.393125],
        description: `<p>The Mount of Transfiguration is a mountain in the north of Israel where Jesus was transfigured before three of his disciples: Peter, James, and John. According to the Gospel accounts, Jesus' face shone like the sun and his clothes became as white as light, and he was then joined by Moses and Elijah who spoke with him about his coming death in Jerusalem. This event is considered a pivotal moment in the life of Jesus and is recounted in Matthew 17:1-9, Mark 9:2-8, and Luke 9:28-36.</p>
        <p>The location of the Mount of Transfiguration is not precisely identified in the New Testament, but it is believed to be either Mount Tabor or Mount Hermon.</p>
        <p>The Transfiguration is regarded as a manifestation of Jesus' divine glory and an anticipation of his resurrection. The event affirms his identity as the Son of God and confirms his mission as the one who will suffer and die for the sins of the world. The voice from heaven that proclaims "This is my Son, whom I love; with him I am well pleased. Listen to him!" (Matthew 17:5) emphasizes the authority of Jesus and the importance of heeding his teachings.</p>`
    },
    {
        label: "Garden of Gethsemane",
        loc: [31.77941, 35.23944],
        description: `<p>The Garden of Gethsemane is a garden located at the foot of the Mount of Olives in Jerusalem. According to the New Testament, Jesus and his disciples went to the garden after the Last Supper, where Jesus prayed and was eventually arrested by the Roman soldiers. The name Gethsemane comes from the Aramaic word for "olive press," and the garden was likely used for the production of olive oil.</p>
        <p>In the Gospel of Matthew, Jesus is described as being "grieved and agitated" in the garden, and asks his disciples to stay with him and keep watch. He then goes off alone to pray, saying "O my Father, if it be possible, let this cup pass from me: nevertheless not as I will, but as thou wilt." (Matthew 26:36-39). In the Gospel of Mark, Jesus is described as being "greatly distressed and troubled" and also goes off to pray alone, saying "Abba, Father, all things are possible unto thee; take away this cup from me: nevertheless not what I will, but what thou wilt." (Mark 14:32-36).</p>
        <p>In the Gospel of Luke, Jesus is described as being in "agony" and also goes off to pray alone, saying "Father, if thou be willing, remove this cup from me: nevertheless not my will, but thine, be done." (Luke 22:39-44). In the Gospel of John, the garden is not mentioned, but Jesus is described as being arrested in a different location.</p>`
    },
    {
        label: "Jordan River",
        loc: [31.761417, 35.558333],
        description: `<p>According to the Gospels, John the Baptist baptized Jesus in the Jordan River (Matthew 3:13-17; Mark 1:9-11; Luke 3:21-22; John 1:29-34), which is considered a pivotal moment in Jesus' life and the beginning of his public ministry.</p>
        <p>Later in Jesus' ministry, he healed a blind man near the Jordan River (John 9:1-7) and spent time teaching and performing miracles in the region surrounding the river (Matthew 4:15). The Jordan River is also the location where Jesus was tempted by the devil (Matthew 4:1-11; Mark 1:12-13; Luke 4:1-13).</p>`
    },
    {
        label: "Mount of Olives",
        loc: [31.744506, 35.245124],
        description: `<p>The Mount of Olives is a mountain ridge on the east side of Jerusalem, named after the olive groves that once covered its slopes. It holds great significance in the life and ministry of Jesus, as recorded in the four Gospels of the New Testament.</p>
        <p>According to the Gospels, Jesus often visited the Mount of Olives during his ministry. He is said to have taught his disciples there, and it was also the site of his arrest and betrayal by Judas Iscariot. In Luke 22:39-46, it is recorded that Jesus prayed on the Mount of Olives in the Garden of Gethsemane, just before his arrest. Later, Jesus ascended to heaven from the Mount of Olives, according to Acts 1:9-12.</p>
        <p>The Mount of Olives also has eschatological significance, as it is mentioned in several prophecies regarding the end times in the Bible, including Zechariah 14:4-5 and Matthew 24:3. The site is also considered holy in Judaism and Islam.</p>
        <p>In terms of its geography, the Mount of Olives is located to the east of the Old City of Jerusalem and is separated from it by the Kidron Valley.</p>`
    },
    {
        label: "Cana",
        loc: [32.8222, 35.3027],
        description: `<p>"Cana" is a village in Galilee, mentioned in the New Testament of the Bible as the site of Jesus Christ's first miracle. According to the Gospel of John, Jesus and his disciples attended a wedding feast in Cana, and when the wine ran out, Jesus miraculously turned water into wine, which the guests found to be of exceptional quality (John 2:1-11).</p>
        <p>Cana is also mentioned in the Gospel of John as the hometown of Nathanael, one of Jesus' disciples (John 21:2).</p>
        <p>In addition, Cana is referred to in the Synoptic Gospels (Matthew, Mark, and Luke) as the home of a royal official whose son Jesus healed from a distance (John 4:46-54).</p>`
    },
    {
        label: "Nain",
        loc: [32.630694, 35.350139],
        description: `<p>Nain was a small village in the region of Galilee in ancient Israel, mentioned in the New Testament of the Bible in the Gospel of Luke. In Luke 7:11-17, it is described as the location where Jesus raises a widow's son from the dead. The account tells of Jesus and his disciples traveling to Nain, where they encounter a funeral procession for the son of a widow. Jesus is moved with compassion for the woman and commands the young man to rise from his bier, which he does, restored to life.</p>
        <p>The Gospel of Luke also mentions Nain in another passage, where Jesus speaks of the prophet Elijah and his healing of a widow's son in that village (Luke 4:25-26).</p>`,
    },
    {
        label: "Bethany",
        loc: [31.771661, 35.255903],
        description: `<p>Bethany is a village located on the eastern slope of the Mount of Olives, about two miles from Jerusalem. It is mentioned several times in the New Testament in connection with Jesus.</p>
        <p>In the Gospel of John, Bethany is the site of Jesus' raising of Lazarus from the dead (John 11:1-44), a miracle that is considered to be one of the most significant events in Jesus' ministry. Bethany is also the location of the home of Martha, Mary, and Lazarus, who were close friends of Jesus (John 11:1; 12:1-3). In one account, Martha serves Jesus while Mary anoints his feet with expensive perfume (John 12:1-8).</p>
        <p>In the Gospel of Mark, Bethany is the place where Jesus stays with Simon the Leper, who is believed to have been healed by Jesus (Mark 14:3-9). This is also the place where Jesus sends his disciples to find a donkey to ride into Jerusalem on what is now celebrated as Palm Sunday (Mark 11:1-11).</p>
        <p>In the Gospel of Luke, Bethany is the place where Jesus ascends to heaven after his resurrection (Luke 24:50-51).</p>`,
    },
    {
        label: "Pool of Bethesda",
        loc: [31.781389, 35.235833],
        description: `<p>The Pool of Bethesda is a location in Jerusalem that is mentioned in the Gospel of John. According to John 5:2-9, the pool was located near the Sheep Gate and was believed to have healing powers. It was said that an angel would come down and stir the waters, and the first person to enter the pool after the stirring would be healed.</p>
        <p>One day, Jesus came across a man who had been an invalid for 38 years lying by the pool. When Jesus asked him if he wanted to be healed, the man explained that he had no one to help him into the pool. Jesus then told him to pick up his mat and walk, and the man was immediately cured.</p>`,
    },
    {
        label: "Golgotha",
        loc: [31.783958, 35.230148],
        description: `<p>Golgotha, also known as Calvary, is the place outside of Jerusalem where Jesus was crucified. It is mentioned in all four gospels of the New Testament (Matthew 27:33, Mark 15:22, Luke 23:33, John 19:17). According to the Gospels, Jesus was led to Golgotha after being tried and convicted by the Roman authorities. He was then crucified along with two thieves, and it was at Golgotha that he died and was later buried in a nearby tomb. The name "Golgotha" means "place of the skull," likely due to the shape of the hill on which it was located.</p>`,
    },
    {
        label: "Emmaus",
        loc: [31.8393, 34.9895],
        description: `<p>Emmaus is a village located about seven miles from Jerusalem. It is best known as the place where two of Jesus' disciples encountered him on the day of his resurrection. According to the Gospel of Luke, these two disciples were walking to Emmaus from Jerusalem when Jesus appeared to them but they did not recognize him. Jesus explained to them the prophesies about himself in the Old Testament, and later, as they sat down to eat, he broke bread with them and "their eyes were opened" and they recognized him. Jesus then disappeared, and the two disciples rushed back to Jerusalem to tell the other disciples what had happened (Luke 24:13-35).</p>`,
    },
    {
        label: "Temple Mount",
        loc: [31.7781161, 35.2359927],
        description: `<p>Temple Mount is located in Jerusalem and considered one of the most holy places in Judaism. It was the site of the First and Second Temples, which were central to Jewish worship until their destruction. In the New Testament, Temple Mount is where Jesus was said to have visited and taught, and where he famously drove out the money changers and merchants from the temple.</p>
        <p>In the Gospel of Matthew, it is written that Jesus entered the temple and drove out all who were buying and selling, overturning the tables of the money changers and the seats of those selling doves (Matthew 21:12). This event is also recorded in Mark (11:15-19), Luke (19:45-48), and John (2:13-16), with slight variations in each account.</p>
        <p>Additionally, the temple is the location of several other significant events in the life of Jesus, such as his presentation as a child (Luke 2:22-38) and his discussions with the religious leaders (Luke 2:41-50, John 8:12-59). It was also the location where Jesus was arrested after his betrayal by Judas Iscariot (Luke 22:52-54).</p>`,
    },
];
