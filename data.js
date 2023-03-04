var locations = [
    {
        loc: [31.7857, 35.2271],
        label: "Jerusalem",
        description: `<p>Jerusalem is a city of great significance in the life and ministry of Jesus Christ. It was the site of his triumphal entry, when he rode into the city on a donkey and was hailed by the crowds as the Messiah (Matthew 21:1-11). It was also the site of his crucifixion and resurrection, which are central events of the Christian faith (Luke 23-24).</p>
        <p>In addition, Jerusalem was the location of the Jewish Temple, where Jesus famously overturned the tables of the moneychangers and taught the people about his Father's house (John 2:13-22). It was also the site of many of his teachings and miracles, such as the healing of a man at the Pool of Bethesda (John 5:1-15).</p>
        <p>For Christians, Jerusalem remains a holy city and a symbol of the connection between God and humanity. It is a pilgrimage site for believers from around the world, who come to walk in the footsteps of Jesus and experience the history and spirituality of the city.</p>`
    },
    {
        loc: [31.7043, 35.2076],
        label: "Bethlehem",
        description: `<p>Bethlehem is a small town located about 10 kilometers south of Jerusalem in the West Bank. It is known as the birthplace of Jesus Christ, and is mentioned in the New Testament several times. According to the Gospel of Luke, Mary and Joseph traveled to Bethlehem for the census and while they were there, Jesus was born in a manger because there was no room for them in the inn (Luke 2:1-7). The Gospel of Matthew also mentions Bethlehem as the birthplace of Jesus, and describes how the Magi followed a star to find him there (Matthew 2:1-12).</p>
        <p>Bethlehem is also significant in the Bible for being the birthplace of King David, who was an ancestor of Jesus. The Gospel of John describes how the people of Bethlehem were confused when they heard Jesus teaching in Jerusalem, because they knew him only as the son of Joseph the carpenter (John 7:41-42).</p>
        <p>Today, Bethlehem is a major Christian pilgrimage site and attracts visitors from all over the world. The Church of the Nativity, built over the traditional site of Jesus' birthplace, is one of the oldest churches in the world and a UNESCO World Heritage Site.</p>`
    },
    {
        loc: [32.70215, 35.297633],
        label: "Nazareth",
        description: `<p>Nazareth is a city in the northern district of Israel, which is known as the childhood home of Jesus Christ. The Gospel of Matthew tells us that after the Holy Family's return from Egypt, they settled in Nazareth (Matthew 2:23). Nazareth is where Jesus grew up and spent most of his life before starting his public ministry.</p>
        <p>Despite Nazareth's small size and lowly reputation, Jesus' association with the town is significant because it fulfills several prophecies about the Messiah's humble origins. Nathanael's response to hearing that Jesus is from Nazareth ("Can anything good come out of Nazareth?" - John 1:46) shows the town's poor reputation.</p>
        <p>In the Gospel of Luke, the story of Jesus' birth and early life is recounted, including the Annunciation to Mary by the Angel Gabriel, Mary's visitation to her cousin Elizabeth, and the Magnificat (Luke 1-2). Later, in Luke 4:16-30, Jesus returned to Nazareth and taught in the synagogue, declaring that he was the fulfillment of the prophecy in Isaiah 61:1-2. His declaration led to outrage among the people of Nazareth, who drove him out of town and tried to kill him.</p>
        <p>Despite the hostility Jesus faced in Nazareth, the town remained significant to his ministry. It was in Nazareth that Jesus performed his first miracle, turning water into wine at the wedding feast in Cana (John 2:1-11). Nazareth is also the location of the Basilica of the Annunciation, which commemorates the spot where the Angel Gabriel visited Mary.</p>
        <p>In summary, Nazareth was the hometown of Jesus Christ and the place where he grew up before beginning his public ministry. It is significant because it fulfills prophecies about the Messiah's humble origins and was the location of several important events in Jesus' life and ministry.</p>`
    },
    {
        loc: [32.881139, 35.575056],
        label: "Capernaum",
        description: `<p>Capernaum was a fishing village located on the northern shore of the Sea of Galilee. It was the home of the apostle Peter and also became a base for Jesus during his ministry in Galilee.</p>
        <p>In the Gospel of Matthew, Capernaum is described as Jesus' "own city" (Matthew 9:1) and many of his miracles were performed there, including the healing of a paralyzed man (Matthew 9:1-8), the healing of the centurion's servant (Matthew 8:5-13), and the exorcism of a demon-possessed man (Mark 1:21-28).</p>
        <p>Capernaum was also the site of a synagogue where Jesus taught and performed miracles, including the healing of a man with an unclean spirit (Mark 1:23-26) and the healing of a man with a withered hand (Mark 3:1-6).</p>
        <p>Despite witnessing many of Jesus' miracles, the people of Capernaum did not fully believe in him, which led to Jesus pronouncing a curse on the city (Matthew 11:23). Today, Capernaum is an archaeological site and is often visited by tourists who come to see the remains of the ancient synagogue and the house of Peter.</p>`
    },
    {
        loc: [32.8189, 35.5900],
        label: "Sea of Galilee",
        description: `<p>The Sea of Galilee, also known as Lake Kinneret or Lake Tiberias, is a freshwater lake located in northern Israel. It is the lowest freshwater lake on Earth and is approximately 21 kilometers long and 13 kilometers wide.</p>
        <p>In the New Testament, the Sea of Galilee is the location of many of Jesus' miracles and teachings. Jesus walked on water on the Sea of Galilee, calmed a storm, and fed the 5,000 with fish and bread near its shores. Jesus also called four of his disciples, Peter, Andrew, James, and John, while they were fishing on the Sea of Galilee.</p>
        <p>In the Gospel of Mark, it is written: "As Jesus was walking beside the Sea of Galilee, he saw Simon and his brother Andrew casting a net into the lake, for they were fishermen. 'Come, follow me,' Jesus said, 'and I will make you fishers of men.' At once they left their nets and followed him." (Mark 1:16-18)</p>
        <p>The Sea of Galilee was also a significant location for the apostles after Jesus' death and resurrection. According to the Gospel of John, Peter and six other disciples went fishing on the Sea of Galilee and saw the risen Jesus on the shore, who prepared breakfast for them. This event is known as the miraculous catch of fish. (John 21:1-14)</p>
        <p>The Sea of Galilee remains an important pilgrimage site for Christians today. Many churches and holy sites can be found in the surrounding area, including the Mount of Beatitudes, where Jesus delivered the Sermon on the Mount, and the Church of the Multiplication of the Loaves and Fishes, where the miracle of the feeding of the 5,000 is said to have taken place.</p>`
    },
    {
        loc: [32.68624, 35.393125],
        label: "Mount of Transfiguration",
        description: `<p>The Mount of Transfiguration is a mountain in the north of Israel where Jesus was transfigured before three of his disciples: Peter, James, and John. According to the Gospel accounts, Jesus' face shone like the sun and his clothes became as white as light, and he was then joined by Moses and Elijah who spoke with him about his coming death in Jerusalem. This event is considered a pivotal moment in the life of Jesus and is recounted in Matthew 17:1-9, Mark 9:2-8, and Luke 9:28-36.</p>
        <p>The location of the Mount of Transfiguration is not precisely identified in the New Testament, but it is believed to be either Mount Tabor or Mount Hermon. The site has been a place of Christian pilgrimage since the early centuries of the faith, and there are several churches and monasteries dedicated to the Transfiguration in the vicinity.</p>
        <p>The Transfiguration is regarded as a manifestation of Jesus' divine glory and an anticipation of his resurrection. The event affirms his identity as the Son of God and confirms his mission as the one who will suffer and die for the sins of the world. The voice from heaven that proclaims "This is my Son, whom I love; with him I am well pleased. Listen to him!" (Matthew 17:5) emphasizes the authority of Jesus and the importance of heeding his teachings.</p>`
    },
    {
        loc: [31.77941, 35.23944],
        label: "Garden of Gethsemane",
        description: `<p>The Garden of Gethsemane is a garden located at the foot of the Mount of Olives in Jerusalem. According to the New Testament, Jesus and his disciples went to the garden after the Last Supper, where Jesus prayed and was eventually arrested by the Roman soldiers. The name Gethsemane comes from the Aramaic word for "olive press," and the garden was likely used for the production of olive oil.</p>
        <p>In the Gospel of Matthew, Jesus is described as being "grieved and agitated" in the garden, and asks his disciples to stay with him and keep watch. He then goes off alone to pray, saying "My Father, if it is possible, let this cup pass from me; yet not what I want but what you want." (Matthew 26:36-39). In the Gospel of Mark, Jesus is described as being "greatly distressed and troubled" and also goes off to pray alone, saying "Abba, Father, for you all things are possible; remove this cup from me; yet, not what I want, but what you want." (Mark 14:32-36).</p>
        <p>In the Gospel of Luke, Jesus is described as being in "agony" and also goes off to pray alone, saying "Father, if you are willing, remove this cup from me; yet, not my will but yours be done." (Luke 22:39-44). In the Gospel of John, the garden is not mentioned, but Jesus is described as being arrested in a different location.</p>
        <p>The Garden of Gethsemane is considered a holy site for Christians and is a popular pilgrimage destination. Today, there are still olive trees in the garden that are believed to be over 2,000 years old, dating back to the time of Jesus.</p>`
    },
    {
        loc: [31.761417, 35.558333],
        label: "Jordan River",
        description: `<p>The Jordan River is a significant location in the New Testament of the Bible, as it is associated with the life and ministry of Jesus. According to the Gospels, John the Baptist baptized Jesus in the Jordan River (Matthew 3:13-17; Mark 1:9-11; Luke 3:21-22; John 1:29-34), which is considered a pivotal moment in Jesus' life and the beginning of his public ministry.</p>
        <p>Later in Jesus' ministry, he healed a blind man near the Jordan River (John 9:1-7) and spent time teaching and performing miracles in the region surrounding the river (Matthew 4:15). The Jordan River is also the location where Jesus was tempted by the devil (Matthew 4:1-11; Mark 1:12-13; Luke 4:1-13).</p>
        <p>The Jordan River is therefore significant as a place of baptism, healing, teaching, and temptation in the life of Jesus, and its role in his ministry is highlighted in the Gospels of the New Testament.</p>`
    },
    {
        loc: [31.744506, 35.245124],
        label: "Mount of Olives",
        description: `<p>The Mount of Olives is a mountain ridge on the east side of Jerusalem, named after the olive groves that once covered its slopes. It holds great significance in the life and ministry of Jesus, as recorded in the four Gospels of the New Testament.</p>
        <p>According to the Gospels, Jesus often visited the Mount of Olives during his ministry. He is said to have taught his disciples there, and it was also the site of his arrest and betrayal by Judas Iscariot. In Luke 22:39-46, it is recorded that Jesus prayed on the Mount of Olives in the Garden of Gethsemane, just before his arrest. Later, Jesus ascended to heaven from the Mount of Olives, according to Acts 1:9-12.</p>
        <p>The Mount of Olives also has eschatological significance, as it is mentioned in several prophecies regarding the end times in the Bible, including Zechariah 14:4-5 and Matthew 24:3. The site is also considered holy in Judaism and Islam.</p>
        <p>In terms of its geography, the Mount of Olives is located to the east of the Old City of Jerusalem and is separated from it by the Kidron Valley. It is home to several important religious sites, including the Church of All Nations, the Russian Orthodox Church of Mary Magdalene, and the Chapel of the Ascension.</p>`
    }
];
